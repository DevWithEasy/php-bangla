import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Play, Copy, RotateCcw, Trash2, Check, Terminal, Globe, PanelRightClose } from 'lucide-react';
import { CodeExecutionResult } from '../types';
import { highlightPhpCode } from '../utils/highlightCode';

interface CodeEditorProps {
  code: string;
  onChangeCode: (newCode: string) => void;
  onResetCode: () => void;
  onRunCode: () => void;
  isRunning: boolean;
  executionResult: CodeExecutionResult | null;
  onClearConsole: () => void;
  onCloseEditor: () => void;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({
  code,
  onChangeCode,
  onResetCode,
  onRunCode,
  isRunning,
  executionResult,
  onClearConsole,
  onCloseEditor,
}) => {
  const [copied, setCopied] = useState(false);
  const [viewTab, setViewTab] = useState<'terminal' | 'html'>('terminal');
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const lineNumbersRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Calculate dynamic line numbers based on lines in code
  const lines = code.split('\n');
  const lineCount = Math.max(lines.length, 1);

  // Highlight code with VS Code color scheme & rainbow brackets
  const highlightedHtml = useMemo(() => {
    return highlightPhpCode(code);
  }, [code]);

  // Handle Ctrl+Enter or Cmd+Enter to run
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      onRunCode();
    }
    // Tab key indentation support (4 spaces)
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      onChangeCode(newCode);
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 4;
      }, 0);
    }
  };

  // Sync scroll between textarea, syntax highlight pre, and line numbers
  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    if (preRef.current) {
      preRef.current.scrollTop = target.scrollTop;
      preRef.current.scrollLeft = target.scrollLeft;
    }
    if (lineNumbersRef.current) {
      lineNumbersRef.current.scrollTop = target.scrollTop;
    }
  };

  // Copy code to clipboard
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  // Update HTML iframe when renderedHtml changes and tab is HTML
  useEffect(() => {
    if (iframeRef.current && executionResult) {
      const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
      if (doc) {
        doc.open();
        doc.write(
          executionResult.renderedHtml ||
            '<p style="color:#94a3b8;font-family:sans-serif;padding:8px;">কোনো HTML আউটপুট নেই</p>'
        );
        doc.close();
      }
    }
  }, [executionResult, viewTab]);

  return (
    <section className="w-full h-full bg-[#1e1e1e] border-l border-slate-700/80 flex flex-col shrink-0 overflow-hidden select-none z-20">
      {/* Editor Header Toolbar (VS Code Style) */}
      <div className="h-11 bg-[#252526] border-b border-[#333333] px-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          {/* Close / Hide Editor Button */}
          <button
            onClick={onCloseEditor}
            title="কোড এডিটর হাইড করুন (Hide Code Editor)"
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-[#333333] transition cursor-pointer"
          >
            <PanelRightClose className="w-4 h-4" />
          </button>

          <span className="w-2 h-2 rounded-full bg-[#04AA6D]" />
          <span className="text-xs font-bold text-slate-200 tracking-wide">
            PHP Live Editor
          </span>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#1e1e1e] text-slate-400 border border-[#3c3c3c]">
            index.php
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {/* Copy */}
          <button
            onClick={handleCopy}
            title="কোড কপি করুন"
            className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-[#333333] transition text-xs flex items-center gap-1 cursor-pointer"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Reset */}
          <button
            onClick={onResetCode}
            title="টপিকের মূল কোডে রিসেট করুন"
            className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-[#333333] transition text-xs flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>

          {/* Run Button */}
          <button
            onClick={onRunCode}
            disabled={isRunning}
            className="bg-[#04AA6D] hover:bg-[#037a4e] text-white text-xs font-bold px-3 py-1 rounded shadow flex items-center gap-1 transition active:scale-95 disabled:opacity-50 cursor-pointer ml-1"
          >
            <Play className={`w-3 h-3 fill-current ${isRunning ? 'animate-spin' : ''}`} />
            <span>{isRunning ? 'Running...' : 'Run'}</span>
          </button>
        </div>
      </div>

      {/* Editor Main Text Area with Live VS Code Syntax Highlighting */}
      <div className="flex-1 flex bg-[#1e1e1e] overflow-hidden relative font-mono text-[13px] leading-5">
        {/* Line Numbers Column */}
        <div
          ref={lineNumbersRef}
          className="w-10 py-3 bg-[#1e1e1e] text-[#858585] text-right pr-2 select-none overflow-hidden shrink-0 border-r border-[#2d2d2d] font-mono leading-5 text-xs"
        >
          {Array.from({ length: lineCount }).map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* Highlighted Code Display Layer (Underneath textarea) */}
        <div className="flex-1 relative overflow-hidden">
          <pre
            ref={preRef}
            aria-hidden="true"
            className="vscode-code-pre absolute inset-0 m-0 p-3 bg-transparent font-mono text-[13px] leading-5 text-[#d4d4d4] overflow-hidden whitespace-pre pointer-events-none select-none z-0"
            dangerouslySetInnerHTML={{
              __html: highlightedHtml + (code.endsWith('\n') ? ' ' : ''),
            }}
          />

          {/* Transparent Input Textarea (On top for editing & caret) */}
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => onChangeCode(e.target.value)}
            onKeyDown={handleKeyDown}
            onScroll={handleScroll}
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            className="absolute inset-0 w-full h-full p-3 bg-transparent text-transparent caret-[#38bdf8] resize-none focus:outline-none leading-5 overflow-auto whitespace-pre font-mono text-[13px] selection:bg-[#264f78]/80 selection:text-transparent z-10"
            placeholder="এখানে পিএইচপি কোড লিখুন..."
          />
        </div>
      </div>

      {/* Terminal & Result Console (Split at Bottom) */}
      <div className="h-60 bg-[#181818] border-t border-[#2d2d2d] flex flex-col shrink-0">
        {/* Console Header Bar */}
        <div className="h-8 bg-[#222222] border-b border-[#2d2d2d] px-3 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300 font-mono text-[11px]">
              Console Output
            </span>

            {/* View Mode Toggle: Terminal vs HTML */}
            <div className="flex bg-[#181818] rounded p-0.5 text-[10px]">
              <button
                onClick={() => setViewTab('terminal')}
                className={`px-2 py-0.5 rounded transition flex items-center gap-1 ${
                  viewTab === 'terminal'
                    ? 'bg-[#2d2d2d] text-emerald-400 font-bold'
                    : 'hover:text-white text-slate-400'
                }`}
              >
                <Terminal className="w-3 h-3" />
                <span>Terminal</span>
              </button>
              <button
                onClick={() => setViewTab('html')}
                className={`px-2 py-0.5 rounded transition flex items-center gap-1 ${
                  viewTab === 'html'
                    ? 'bg-[#2d2d2d] text-emerald-400 font-bold'
                    : 'hover:text-white text-slate-400'
                }`}
              >
                <Globe className="w-3 h-3" />
                <span>HTML View</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {executionResult && (
              <span className="text-[10px] font-mono text-slate-400">
                {executionResult.durationMs}ms
              </span>
            )}
            <button
              onClick={onClearConsole}
              title="কনসোল ক্লিয়ার করুন"
              className="hover:text-white text-[10px] font-mono p-1 rounded hover:bg-[#333333] transition"
            >
              <Trash2 className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Console Body Area */}
        <div className="flex-1 relative overflow-auto p-3">
          {viewTab === 'terminal' ? (
            <div className="font-mono text-xs select-text space-y-1">
              {executionResult ? (
                <>
                  {executionResult.stdout && (
                    <pre className="text-slate-200 whitespace-pre-wrap leading-relaxed font-mono">
                      {executionResult.stdout}
                    </pre>
                  )}
                  {executionResult.stderr && (
                    <pre className="text-red-400 bg-red-950/30 p-2 rounded border border-red-900/50 whitespace-pre-wrap leading-relaxed font-mono">
                      {executionResult.stderr}
                    </pre>
                  )}
                  <div className="pt-2 text-[10px] text-slate-500 border-t border-[#2d2d2d] flex items-center justify-between font-mono">
                    <span>
                      Exit Code:{' '}
                      <b
                        className={
                          executionResult.exitCode === 0
                            ? 'text-emerald-400'
                            : 'text-red-400'
                        }
                      >
                        {executionResult.exitCode}
                      </b>
                    </span>
                    <span>
                      Status:{' '}
                      {executionResult.exitCode === 0
                        ? 'Execution Complete'
                        : 'Process Terminated with Error'}
                    </span>
                  </div>
                </>
              ) : (
                <div className="text-slate-500 text-xs">
                  // প্রেস করুন "Run" অথবা কীবোর্ডে{' '}
                  <kbd className="px-1 py-0.5 bg-[#2d2d2d] rounded text-slate-300">
                    Ctrl + Enter
                  </kbd>{' '}
                  চাপুন কোড এক্সিকিউট করতে...
                </div>
              )}
            </div>
          ) : (
            <div className="absolute inset-0 bg-white p-2">
              <iframe
                ref={iframeRef}
                title="PHP HTML Output"
                className="w-full h-full border-0 bg-white"
                sandbox="allow-same-origin allow-scripts"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
