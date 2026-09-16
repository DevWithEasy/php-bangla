import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  BookOpen, 
  Code2, 
  Cpu, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  PanelRightOpen,
  Presentation,
  Lightbulb,
  Sparkles,
  Flame,
  HelpCircle,
  Award,
  Terminal,
  Eye,
  EyeOff,
  Copy,
  Check
} from 'lucide-react';
import { TopicItem, ActiveTab } from '../types';
import { getTopicPedagogy } from '../data/trainerPedagogy';

interface SmartCodeViewerProps {
  code: string;
  language?: string;
  title?: string;
  outputPreview?: string;
  onLoadCodeToEditor: (code: string) => void;
}

export const SmartCodeViewer: React.FC<SmartCodeViewerProps> = ({
  code,
  language = 'PHP 8.2 Live Code',
  title,
  outputPreview,
  onLoadCodeToEditor,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard?.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const handleRun = () => {
    onLoadCodeToEditor(code);
  };

  return (
    <div className="my-3.5 rounded-xl overflow-hidden border border-slate-800 bg-[#0b1120] shadow-md">
      {/* Code Header Bar */}
      <div className="px-3.5 py-2 bg-[#1e293b] border-b border-slate-700/80 flex items-center justify-between gap-2 text-xs font-mono select-none">
        <div className="flex items-center gap-2 text-emerald-400 font-semibold truncate">
          <Code2 className="w-4 h-4 shrink-0 text-emerald-400" />
          <span className="truncate">{title || language}</span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleCopy}
            className="hover:text-emerald-400 flex items-center gap-1.5 transition cursor-pointer text-slate-300 px-2.5 py-1 rounded bg-slate-800/90 hover:bg-slate-800 border border-slate-700/60 text-[11px]"
            title="কোড ক্লিপবোর্ডে কপি করুন"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-semibold">কপি হয়েছে!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>কপি</span>
              </>
            )}
          </button>

          <button
            onClick={handleRun}
            className="px-3 py-1 rounded-md bg-[#04AA6D] hover:bg-[#038e5b] text-white font-bold text-xs flex items-center gap-1.5 shadow-sm cursor-pointer transition active:scale-95"
            title="এই কোডটি সরাসরি ডানপাশের এডিটরে লোড করে রান ও টেস্ট করুন"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>এডিটরে রান ও টেস্ট করুন »</span>
          </button>
        </div>
      </div>

      {/* Code View Body */}
      <pre className="p-4 text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed bg-[#0b1120]">
        <code>{code}</code>
      </pre>

      {/* Optional Output Preview */}
      {outputPreview && (
        <div className="px-4 py-2.5 bg-slate-900/90 border-t border-slate-800 text-slate-300 font-mono text-xs">
          <span className="text-amber-400 font-bold block mb-1 text-[11px] uppercase tracking-wider">
            ⚡ কনসোল / আউটপুট প্রিভিউ:
          </span>
          <div className="text-slate-200 whitespace-pre-line bg-slate-950 p-2.5 rounded border border-slate-800/80">
            {outputPreview}
          </div>
        </div>
      )}
    </div>
  );
};

// Helper to format inline code backticks in text
function renderInlineFormatting(text: string): React.ReactNode {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
      const codeInside = part.slice(1, -1);
      return (
        <code
          key={i}
          className="px-1.5 py-0.5 mx-0.5 rounded bg-slate-100 text-emerald-800 font-mono text-xs font-semibold border border-slate-200"
        >
          {codeInside}
        </code>
      );
    }
    return part;
  });
}

function getLanguageLabel(lang: string): string {
  const lower = lang.toLowerCase().trim();
  if (lower === 'php') return 'PHP 8.2 Live Code';
  if (lower === 'html') return 'HTML Form / Markup';
  if (lower === 'sql' || lower === 'mysql') return 'SQL / PDO Query';
  if (lower === 'js' || lower === 'javascript') return 'JavaScript (Fetch API)';
  if (lower === 'json') return 'JSON Payload';
  if (lower === 'xml') return 'XML Document';
  return lang ? `${lang.toUpperCase()} Code` : 'PHP 8.2 Live Code';
}

export const SmartContentFormatter: React.FC<{
  text: string;
  onLoadCodeToEditor: (code: string) => void;
}> = ({ text, onLoadCodeToEditor }) => {
  if (!text) return null;

  // Check if text has markdown code fences
  const fenceRegex = /```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = fenceRegex.exec(text)) !== null) {
    const textBefore = text.substring(lastIndex, match.index);
    if (textBefore.trim()) {
      parts.push(
        <div key={`text-${lastIndex}`} className="whitespace-pre-line leading-relaxed">
          {renderInlineFormatting(textBefore)}
        </div>
      );
    }

    const lang = match[1] || 'PHP';
    const codeBlock = match[2];
    parts.push(
      <SmartCodeViewer
        key={`code-${match.index}`}
        code={codeBlock.trim()}
        language={getLanguageLabel(lang)}
        onLoadCodeToEditor={onLoadCodeToEditor}
      />
    );

    lastIndex = match.index + match[0].length;
  }

  const remaining = text.substring(lastIndex);
  if (remaining.trim()) {
    parts.push(
      <div key={`text-${lastIndex}`} className="whitespace-pre-line leading-relaxed">
        {renderInlineFormatting(remaining)}
      </div>
    );
  }

  return <div className="space-y-2">{parts}</div>;
};

interface TopicDetailsProps {
  topic: TopicItem;
  prevTopic: TopicItem | null;
  nextTopic: TopicItem | null;
  currentIndex: number;
  totalTopics: number;
  onNavigate: (topicId: string) => void;
  onLoadCodeToEditor: (code: string) => void;
  isEditorVisible?: boolean;
  onToggleEditor?: () => void;
  onOpenPresentation?: () => void;
}

export const TopicDetails: React.FC<TopicDetailsProps> = ({
  topic,
  prevTopic,
  nextTopic,
  currentIndex,
  totalTopics,
  onNavigate,
  onLoadCodeToEditor,
  isEditorVisible = true,
  onToggleEditor,
  onOpenPresentation,
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('concept');
  const [showChallengeSolution, setShowChallengeSolution] = useState(false);

  const pedagogy = getTopicPedagogy(topic);

  return (
    <main className="flex-1 bg-white overflow-y-auto flex flex-col p-4 sm:p-6 lg:p-8 min-w-0">
      {/* 1. Topic Header & Quick Navigation */}
      <div className="border-b border-slate-200 pb-5 mb-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              {topic.tag}
            </span>
            <span className="text-xs font-mono text-slate-500">
              {topic.phpVersion}
            </span>
            <span className="text-xs font-mono text-slate-400">
              #{currentIndex} of {totalTopics}
            </span>
          </div>

          {/* Quick Prev / Next Header Nav */}
          <div className="flex items-center gap-1.5 text-xs">
            <button
              onClick={() => prevTopic && onNavigate(prevTopic.id)}
              disabled={!prevTopic}
              className="px-2.5 py-1 border border-slate-300 rounded hover:bg-slate-50 flex items-center gap-1 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>পূর্ববর্তী</span>
            </button>
            <span className="px-2 text-slate-400 font-mono text-[11px]">
              {currentIndex} / {totalTopics}
            </span>
            <button
              onClick={() => nextTopic && onNavigate(nextTopic.id)}
              disabled={!nextTopic}
              className="px-2.5 py-1 border border-slate-300 rounded hover:bg-slate-50 flex items-center gap-1 text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              <span>পরবর্তী</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {topic.title}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed">
          {topic.subtitleBn}
        </p>

        {/* Real Life Metaphor Callout (Always visible to anchor beginners) */}
        <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
          <BookOpen className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
            <strong className="text-slate-900 font-bold block mb-1">
              বাস্তব জীবনের রূপক ও মানসিক মডেল (Mental Model):
            </strong>
            {pedagogy.trainerMetaphorBn}
          </div>
        </div>

        {/* Action Toolbar */}
        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => onLoadCodeToEditor(topic.sampleCode)}
            className="inline-flex items-center gap-1.5 bg-[#04AA6D] hover:bg-[#037a4e] text-white text-xs font-bold px-3.5 py-2 rounded-md shadow-xs transition active:scale-95 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>রাইট সাইড এডিটরে স্যাম্পল কোড লোড ও টেস্ট করুন »</span>
          </button>

          {!isEditorVisible && onToggleEditor && (
            <button
              onClick={onToggleEditor}
              className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold px-3 py-2 rounded-md border border-slate-300 shadow-2xs transition active:scale-95 cursor-pointer"
            >
              <PanelRightOpen className="w-4 h-4 text-emerald-700" />
              <span>কোড এডিটর ওপেন করুন</span>
            </button>
          )}

          <span className="text-xs text-slate-500 hidden sm:inline">
            (ডানপাশের এডিটরে সরাসরি লাইভ কোড পরিবর্তন করে টেস্ট করা যায়)
          </span>
        </div>
      </div>

      {/* 3. Masterclass 6 Pedagogical Tabs */}
      <div className="border-b border-slate-200 flex items-center gap-1 text-xs sm:text-sm font-semibold overflow-x-auto select-none mb-6">
        <button
          onClick={() => setActiveTab('concept')}
          className={`px-3 py-2.5 flex items-center gap-1.5 border-b-2 transition whitespace-nowrap cursor-pointer ${
            activeTab === 'concept'
              ? 'border-[#04AA6D] text-[#04AA6D]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>১. বিস্তারিত লেকচার ও কনসেপ্ট</span>
        </button>

        <button
          onClick={() => setActiveTab('compare')}
          className={`px-3 py-2.5 flex items-center gap-1.5 border-b-2 transition whitespace-nowrap cursor-pointer ${
            activeTab === 'compare'
              ? 'border-[#04AA6D] text-[#04AA6D]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Code2 className="w-4 h-4" />
          <span>২. জুনিয়র vs সিনিয়র কোড</span>
        </button>

        <button
          onClick={() => setActiveTab('secrets')}
          className={`px-3 py-2.5 flex items-center gap-1.5 border-b-2 transition whitespace-nowrap cursor-pointer ${
            activeTab === 'secrets'
              ? 'border-[#04AA6D] text-[#04AA6D]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Flame className="w-4 h-4 text-amber-500" />
          <span>৩. ইন্ডাস্ট্রি সিক্রেটস ও কমন ভুল</span>
        </button>

        <button
          onClick={() => setActiveTab('interview')}
          className={`px-3 py-2.5 flex items-center gap-1.5 border-b-2 transition whitespace-nowrap cursor-pointer ${
            activeTab === 'interview'
              ? 'border-[#04AA6D] text-[#04AA6D]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          <span>৪. জব ইন্টারভিউ ও ভাইভা প্রস্তুতি</span>
        </button>

        <button
          onClick={() => setActiveTab('challenge')}
          className={`px-3 py-2.5 flex items-center gap-1.5 border-b-2 transition whitespace-nowrap cursor-pointer ${
            activeTab === 'challenge'
              ? 'border-[#04AA6D] text-[#04AA6D]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Terminal className="w-4 h-4 text-emerald-600" />
          <span>৫. হ্যান্ডস-অন ল্যাব চ্যালেঞ্জ</span>
        </button>

        <button
          onClick={() => setActiveTab('internals')}
          className={`px-3 py-2.5 flex items-center gap-1.5 border-b-2 transition whitespace-nowrap cursor-pointer ${
            activeTab === 'internals'
              ? 'border-[#04AA6D] text-[#04AA6D]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Cpu className="w-4 h-4" />
          <span>৬. ইঞ্জিন ইন্টারনালস ও সিকিউরিটি</span>
        </button>
      </div>

      {/* TAB 1: Concept & Beginner Walkthrough */}
      {activeTab === 'concept' && (
        <div className="space-y-6 leading-relaxed text-sm text-slate-700">
          {/* If lessonSections exists: Render Interleaved Explanation + Code Blocks */}
          {topic.deepDive.lessonSections && topic.deepDive.lessonSections.length > 0 ? (
            <div className="space-y-5">
              {/* Optional General Concept Header if provided */}
              {topic.deepDive.conceptBn && topic.deepDive.conceptBn.trim() !== '' && (
                <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200 shadow-2xs">
                  <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-emerald-600" />
                    <span>পাঠের ভূমিকা ও ওভারভিউ:</span>
                  </h3>
                  <SmartContentFormatter 
                    text={topic.deepDive.conceptBn} 
                    onLoadCodeToEditor={onLoadCodeToEditor} 
                  />
                </div>
              )}

              {/* Step-by-Step Interleaved Sections: একটু ব্যাখ্যা ➔ সাথে সাথে তার কোড ➔ আবার ব্যাখ্যা ➔ আবার কোড */}
              <div className="space-y-5">
                {topic.deepDive.lessonSections.map((sec, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-300 transition"
                  >
                    {/* Section Header */}
                    {sec.title && (
                      <div className="flex items-center gap-2.5 mb-2.5 pb-2 border-b border-slate-100">
                        <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                          {idx + 1}
                        </span>
                        <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                          {sec.title}
                        </h4>
                      </div>
                    )}

                    {/* Section Explanation (একটু Explain with Smart formatting) */}
                    <div className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                      <SmartContentFormatter 
                        text={sec.explanationBn} 
                        onLoadCodeToEditor={onLoadCodeToEditor} 
                      />
                    </div>

                    {/* Section Code Example (সাথে সাথে কোড ও এডিটরে রান করার বাটন) */}
                    {sec.code && (
                      <SmartCodeViewer
                        code={sec.code}
                        language={sec.codeLanguage || 'PHP 8.2 Live Code'}
                        outputPreview={sec.outputPreview}
                        onLoadCodeToEditor={onLoadCodeToEditor}
                      />
                    )}

                    {/* Optional Note */}
                    {sec.noteBn && (
                      <div className="mt-2.5 text-xs text-amber-800 bg-amber-50 border border-amber-200/80 rounded-lg p-2.5 flex items-start gap-1.5">
                        <span className="font-bold shrink-0">📌 নোট:</span>
                        <span>{sec.noteBn}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Fallback to Standard Single Concept Card */
            <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span>মূল ধারণা ও প্রেক্ষাপট:</span>
              </h3>
              <SmartContentFormatter 
                text={topic.deepDive.conceptBn} 
                onLoadCodeToEditor={onLoadCodeToEditor} 
              />
            </div>
          )}

          {/* Progressive Beginner Steps */}
          {pedagogy.beginnerSteps && pedagogy.beginnerSteps.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>বিগিনারদের জন্য ধাপে ধাপে শেখার গাইড:</span>
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {pedagogy.beginnerSteps.map((step) => (
                  <div 
                    key={step.step}
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 transition shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
                        {step.step}
                      </span>
                      <strong className="text-slate-900 font-bold text-sm">
                        {step.title}
                      </strong>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 pl-8 leading-relaxed">
                      {step.explanationBn}
                    </p>
                    {step.codePiece && (
                      <div className="pl-8">
                        <SmartCodeViewer
                          code={step.codePiece}
                          language="PHP Snippet"
                          onLoadCodeToEditor={onLoadCodeToEditor}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architectural Key Points */}
          {topic.deepDive.keyPointsBn && topic.deepDive.keyPointsBn.length > 0 && (
            <div className="mt-4">
              <h4 className="font-bold text-slate-900 text-sm mb-2.5 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>গুরুত্বপূর্ণ আর্কিটেকচারাল পয়েন্টস:</span>
              </h4>
              <ul className="space-y-2">
                {topic.deepDive.keyPointsBn.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-100 shadow-2xs">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{renderInlineFormatting(pt)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sample Snippet Preview */}
          <div className="mt-5">
            <div className="flex items-center justify-between mb-1 text-xs">
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-emerald-600" />
                <span>মূল ইন্টারেক্টিভ কোড উদাহরণ (Primary Interactive Example):</span>
              </span>
            </div>
            <SmartCodeViewer
              code={topic.sampleCode}
              language="PHP 8.2 Live Code"
              title={`${topic.title} • Sample Code`}
              onLoadCodeToEditor={onLoadCodeToEditor}
            />
          </div>

          {/* Additional Practice Examples */}
          {topic.deepDive.practiceExamples && topic.deepDive.practiceExamples.length > 0 && (
            <div className="mt-8 space-y-4 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span>সম্পর্কিত অতিরিক্ত প্র্যাকটিস কোড উদাহরণ ({topic.deepDive.practiceExamples.length}টি):</span>
                </h4>
                <span className="text-xs text-slate-500 font-medium">
                  প্রতিটি কোড ব্লকের "এডিটরে রান ও টেস্ট করুন" বাটনে ক্লিক করে সরাসরি পরীক্ষা করতে পারবেন
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {topic.deepDive.practiceExamples.map((ex, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 shadow-2xs hover:border-emerald-300 transition"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <h5 className="font-bold text-slate-900 text-sm">
                        {ex.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 mb-2 pl-7 leading-relaxed">
                      {ex.descriptionBn}
                    </p>

                    <div className="pl-0 sm:pl-7">
                      <SmartCodeViewer
                        code={ex.code}
                        language="PHP Script"
                        title={ex.title}
                        onLoadCodeToEditor={onLoadCodeToEditor}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: Compare Junior vs Senior */}
      {activeTab === 'compare' && (
        <div className="space-y-5 leading-relaxed text-sm">
          {topic.deepDive.comparison ? (
            <div className="space-y-5">
              {/* Junior Anti-pattern */}
              <div className="p-4 sm:p-5 bg-red-50/70 border border-red-200 rounded-xl">
                <div className="text-xs sm:text-sm font-bold text-red-900 mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  <span>জুনিয়র ডেভেলপারদের অ্যান্টি-প্যাটার্ন কোড (Anti-pattern)</span>
                </div>
                <SmartCodeViewer
                  code={topic.deepDive.comparison.juniorCode}
                  language="Junior Code (Vulnerable/Inefficient)"
                  title="Junior Developer Code"
                  onLoadCodeToEditor={onLoadCodeToEditor}
                />
                <div className="mt-3">
                  <span className="text-xs font-semibold text-red-900">ঝুঁকি ও সমস্যাসমূহ:</span>
                  <ul className="list-disc list-inside text-xs text-red-800 mt-1 space-y-1">
                    {topic.deepDive.comparison.juniorProblems.map((prob, i) => (
                      <li key={i}>{prob}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Senior Clean Solution */}
              <div className="p-4 sm:p-5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                <div className="text-xs sm:text-sm font-bold text-emerald-900 mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>সিনিয়র আর্কিটেক্ট স্ট্যান্ডার্ড সল্যুশন (Modern PHP 8+)</span>
                </div>
                <SmartCodeViewer
                  code={topic.deepDive.comparison.seniorCode}
                  language="Senior Code (Optimized & Secure)"
                  title="Senior Architect Code"
                  onLoadCodeToEditor={onLoadCodeToEditor}
                />
                <div className="mt-3">
                  <span className="text-xs font-semibold text-emerald-900">সুবিধাসমূহ:</span>
                  <ul className="list-disc list-inside text-xs text-emerald-800 mt-1 space-y-1">
                    {topic.deepDive.comparison.seniorBenefits.map((ben, i) => (
                      <li key={i}>{ben}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {topic.deepDive.comparison.architectAdvice && (
                <div className="p-4 bg-slate-900 text-slate-200 rounded-xl text-xs sm:text-sm leading-relaxed border-l-4 border-emerald-500">
                  <span className="text-emerald-400 font-bold block mb-1">আর্কিটেক্টের চূড়ান্ত পর্যবেক্ষণ ও গাইডলাইন:</span>
                  {topic.deepDive.comparison.architectAdvice}
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500 text-xs bg-slate-50 rounded-xl border border-slate-200">
              এই টপিকের জন্য কোড সরাসরি ডানপাশের এডিটরে টেস্ট করুন।
            </div>
          )}
        </div>
      )}

      {/* TAB 3: Trainer Secrets & Gotchas */}
      {activeTab === 'secrets' && (
        <div className="space-y-5 leading-relaxed text-sm">
          {/* Trainer 20 Years Secrets */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>প্রোডাকশন বেস্ট প্র্যাকটিস ও সিনিয়র গাইডলাইন:</span>
            </h3>
            <div className="space-y-3">
              {pedagogy.trainerSecretsBn.map((secret, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-200 shadow-2xs">
                  <span className="w-5 h-5 rounded bg-emerald-50 text-emerald-800 font-bold text-xs flex items-center justify-center shrink-0 border border-emerald-200 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {secret}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Beginner Gotchas & Traps */}
          <div className="bg-rose-50/50 border border-rose-200 rounded-xl p-4 sm:p-5">
            <h3 className="text-sm sm:text-base font-bold text-rose-950 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>সাধারণ বিভ্রান্তি ও পরিহার্য ভুল (Common Gotchas):</span>
            </h3>
            <div className="space-y-3">
              {pedagogy.commonGotchasBn.map((gotcha, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border border-rose-200/80 shadow-2xs">
                  <span className="w-5 h-5 rounded bg-rose-50 text-rose-800 font-bold text-xs flex items-center justify-center shrink-0 border border-rose-200 mt-0.5">
                    !
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {gotcha}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: Interview & Viva Prep */}
      {activeTab === 'interview' && (
        <div className="space-y-4 leading-relaxed text-sm">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 mb-2">
            <strong className="text-slate-900">ইন্টারভিউ গাইডলাইন:</strong> সফটওয়্যার কোম্পানিগুলোর সিনিয়র আর্কিটেক্ট ও টেক লিডরা ইন্টারভিউতে শুধু মুখস্থ কোড জানতে চান না, বরং আপনার কোডের সুরক্ষা, মেমরি ও আর্কিটেকচারাল বোধ যাচাই করেন।
          </div>

          <div className="space-y-4">
            {pedagogy.interviewQuestions.map((qna, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-2xs space-y-3"
              >
                <div className="flex items-start gap-2.5">
                  <span className="px-2 py-0.5 bg-slate-900 text-white font-mono font-bold text-xs rounded">
                    Q{idx + 1}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                    {qna.questionBn}
                  </h4>
                </div>

                <div className="pl-8 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <strong className="text-slate-900 block mb-1">আদর্শ উত্তর:</strong>
                  {qna.answerBn}
                </div>

                <div className="pl-8 text-xs text-emerald-800 leading-relaxed bg-emerald-50/80 p-2.5 rounded border border-emerald-200">
                  <strong>সিনিয়র আর্কিটেক্টের পরামর্শ:</strong> {qna.seniorTipBn}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: Hands-on Student Challenge */}
      {activeTab === 'challenge' && (
        <div className="space-y-5 leading-relaxed text-sm">
          <div className="bg-slate-900 text-white p-5 rounded-xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Terminal className="w-4 h-4" />
                Hands-on Lab Exercise
              </span>
              <button
                onClick={() => onLoadCodeToEditor(pedagogy.studentChallenge.starterCode)}
                className="bg-[#04AA6D] hover:bg-[#037a4e] text-white text-xs font-bold px-3 py-1.5 rounded transition flex items-center gap-1 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>এডিটরে টাস্ক লোড করুন</span>
              </button>
            </div>

            <h3 className="text-lg font-bold text-white">
              {pedagogy.studentChallenge.title}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {pedagogy.studentChallenge.taskBn}
            </p>

            <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 text-xs text-amber-300">
              <strong>ইঙ্গিত (Hint):</strong> {pedagogy.studentChallenge.hintBn}
            </div>

            {/* Starter Code */}
            <div>
              <span className="text-xs text-slate-400 block mb-1">শুরুর কোড (Starter Code):</span>
              <SmartCodeViewer
                code={pedagogy.studentChallenge.starterCode}
                language="PHP Exercise Starter"
                title="Starter Code"
                onLoadCodeToEditor={onLoadCodeToEditor}
              />
            </div>

            {/* Toggle Solution */}
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => setShowChallengeSolution((prev) => !prev)}
                className="flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-bold transition cursor-pointer"
              >
                {showChallengeSolution ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showChallengeSolution ? 'সমাধান লুকান' : 'প্রস্তুত সমাধান দেখুন (Show Solution)'}</span>
              </button>

              {showChallengeSolution && (
                <div className="mt-3">
                  <span className="text-xs text-emerald-400 font-bold block mb-1">ট্রেইনারের আদর্শ সমাধান:</span>
                  <SmartCodeViewer
                    code={pedagogy.studentChallenge.solutionCode}
                    language="PHP Verified Solution"
                    title="Solution Code"
                    onLoadCodeToEditor={onLoadCodeToEditor}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: Zend Internals & Security */}
      {activeTab === 'internals' && (
        <div className="space-y-6 leading-relaxed text-sm text-slate-700">
          {/* Zend Internals */}
          <div className="p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#04AA6D]" />
              <span>Zend Engine ও মেমোরি ইন্টারনালস</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-700">
              {topic.deepDive.zendInternals?.explanationBn ||
                'PHP স্ক্রিপ্ট রান হওয়ার সময় Zend Engine মেমরিতে AST থেকে অপকোড জেনারেট করে এবং zval স্ট্রাকচারে ডাটা সংরক্ষণ করে।'}
            </p>

            {topic.deepDive.zendInternals?.opcodesSummary && (
              <div className="pt-2">
                <span className="text-xs font-bold text-slate-800 block mb-1.5">
                  সংশ্লিষ্ট Zend Opcodes:
                </span>
                <div className="flex flex-wrap gap-2">
                  {topic.deepDive.zendInternals.opcodesSummary.map((op, i) => (
                    <span
                      key={i}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-slate-200/80 text-slate-800 border border-slate-300 font-bold"
                    >
                      {op}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {topic.deepDive.zendInternals?.cStructOrMemory && (
              <div className="mt-3">
                <span className="text-xs font-bold text-slate-800 block mb-1">
                  অভ্যন্তরীণ C-স্ট্রাকচার বা মেমরি রূপরেখা:
                </span>
                <pre className="p-3 bg-slate-950 text-emerald-400 font-mono text-xs rounded border border-slate-800 overflow-x-auto">
                  {topic.deepDive.zendInternals.cStructOrMemory}
                </pre>
              </div>
            )}
          </div>

          {/* Security */}
          <div className="space-y-4">
            {topic.deepDive.security ? (
              <div className="space-y-4">
                <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-900 mb-1">
                    <ShieldAlert className="w-4 h-4 text-amber-700" />
                    <span>সম্ভাব্য ভালনারেবিলিটি: {topic.deepDive.security.vulnerabilityType}</span>
                  </div>
                  <p className="text-xs text-amber-800 mt-1">
                    <strong>আক্রমণের ধরন:</strong> {topic.deepDive.security.attackVectorBn}
                  </p>
                </div>

                <div className="p-4 bg-white border border-slate-200 rounded-xl">
                  <span className="text-xs font-bold text-emerald-800 block mb-1">
                    নিরাপত্তা সমাধান ও প্রিভেনশন রুল:
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {topic.deepDive.security.preventionRuleBn}
                  </p>

                  {topic.deepDive.security.safeCodeSnippet && (
                    <div className="mt-3">
                      <span className="text-[11px] font-bold text-slate-600 block mb-1">নিরাপদ কোড প্যাটার্ন:</span>
                      <SmartCodeViewer
                        code={topic.deepDive.security.safeCodeSnippet}
                        language="Secure Code Snippet"
                        title="Safe Code Snippet"
                        onLoadCodeToEditor={onLoadCodeToEditor}
                      />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600">
                <h4 className="font-bold text-slate-800 mb-1">সাধারণ পিএইচপি নিরাপত্তা নির্দেশিকা:</h4>
                <p>১. ব্যবহারকারীর ইনপুট সর্বদা validate এবং sanitize করুন।</p>
                <p>২. ডাটাবেস কুয়েরির জন্য শুধুমাত্র PDO প্রিপেয়ার্ড স্টেটমেন্ট ব্যবহার করুন।</p>
                <p>৩. কুকি ও সেশনে HttpOnly এবং SameSite=Strict ফ্ল্যাগ ব্যবহার নিশ্চিত করুন।</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Bottom Spacing */}
      <div className="h-12" />
    </main>
  );
};
