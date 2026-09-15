import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';

export function highlightPhpCode(code: string): string {
  if (!code) return '';
  const grammar = Prism.languages.php || Prism.languages.clike;
  let html = Prism.highlight(code, grammar, 'php');

  // 1. Highlight HTML tags inside strings (e.g. echo "<h3>Title</h3><br>";)
  html = html.replace(
    /(<span class="token string[^"]*">)([\s\S]*?)(<\/span>)/g,
    (_, open, content, close) => {
      const highlightedContent = content.replace(
        /&lt;(\/?[a-zA-Z0-9]+)([^>]*?)>/g,
        `<span class="token html-tag-custom"><span class="token punctuation tag-angle">&lt;</span><span class="token tag-name">$1</span>$2<span class="token punctuation tag-angle">&gt;</span></span>`
      );
      return open + highlightedContent + close;
    }
  );

  // 2. Multi-tier Bracket Pair Colorization (VS Code Bracket Pair Colorization)
  // Tier 1: Gold, Tier 2: Orchid/Purple, Tier 3: Sky Blue
  const tierClasses = ['bracket-gold', 'bracket-purple', 'bracket-blue'];
  let depthRound = 0;
  let depthCurly = 0;
  let depthSquare = 0;

  html = html.replace(/<span class="token punctuation">([{}()[\]])<\/span>/g, (_, ch) => {
    let cls = '';
    if (ch === '{') {
      cls = tierClasses[depthCurly % 3];
      depthCurly++;
    } else if (ch === '}') {
      depthCurly = Math.max(0, depthCurly - 1);
      cls = tierClasses[depthCurly % 3];
    } else if (ch === '(') {
      cls = tierClasses[depthRound % 3];
      depthRound++;
    } else if (ch === ')') {
      depthRound = Math.max(0, depthRound - 1);
      cls = tierClasses[depthRound % 3];
    } else if (ch === '[') {
      cls = tierClasses[depthSquare % 3];
      depthSquare++;
    } else if (ch === ']') {
      depthSquare = Math.max(0, depthSquare - 1);
      cls = tierClasses[depthSquare % 3];
    }
    return `<span class="token punctuation ${cls}">${ch}</span>`;
  });

  return html;
}

