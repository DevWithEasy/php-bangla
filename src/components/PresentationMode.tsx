import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Maximize2, 
  Minimize2, 
  BookOpen, 
  Compass,
  FileText,
  ListFilter
} from 'lucide-react';
import { TopicItem } from '../types';
import { getTopicPedagogy } from '../data/trainerPedagogy';
import { SmartCodeViewer, SmartContentFormatter } from './TopicDetails';

interface PresentationModeProps {
  topic: TopicItem;
  onClose: () => void;
  onLoadCodeToEditor: (code: string) => void;
  onNavigateTopic?: (topicId: string) => void;
  prevTopic?: TopicItem | null;
  nextTopic?: TopicItem | null;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({
  topic,
  onClose,
  onLoadCodeToEditor,
}) => {
  const pedagogy = getTopicPedagogy(topic);
  const slides = pedagogy.slides;
  
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showTrainerNotes, setShowTrainerNotes] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fontSizeMultiplier, setFontSizeMultiplier] = useState(1);

  // Reset slide index when topic changes
  useEffect(() => {
    setCurrentSlideIndex(0);
  }, [topic.id]);

  const currentSlide = slides[currentSlideIndex] || slides[0];
  const progressPercent = ((currentSlideIndex + 1) / slides.length) * 100;
  const isLastSlide = currentSlideIndex === slides.length - 1;

  const handleNext = useCallback(() => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    }
  }, [currentSlideIndex, slides.length]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  }, [currentSlideIndex]);

  // Keyboard navigation: Left/Right arrows, Space, Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, onClose]);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullScreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullScreen(false);
    }
  };

  const handleCodeRunAndClose = (code: string) => {
    onLoadCodeToEditor(code);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs text-slate-800 flex flex-col animate-fadeIn select-none font-['Hind_Siliguri',sans-serif]">
      {/* 1. Top Control Bar (Clean Professional Light Header) */}
      <div className="h-14 border-b border-slate-200 px-3 sm:px-6 flex items-center justify-between shrink-0 bg-white shadow-2xs">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-7 h-7 rounded-md bg-[#04AA6D] flex items-center justify-center font-mono font-bold text-white text-xs shadow-xs">
              &lt;?
            </span>
            <div className="truncate">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-bold text-xs sm:text-sm text-slate-900 tracking-tight truncate">
                  {topic.title}
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono font-semibold px-1.5 sm:px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0">
                  {topic.tag}
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 hidden md:block">
                PHP Interactive Learning • প্রেজেন্টেশন স্লাইড ({slides.length} টি স্লাইড)
              </p>
            </div>
          </div>
        </div>

        {/* Center: Quick Slide Selector Dropdown & Lecture Notes Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Slide Selector Dropdown */}
          <div className="relative flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200/80 px-2 sm:px-3 py-1 rounded-lg border border-slate-300 transition">
            <ListFilter className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            <select
              value={currentSlideIndex}
              onChange={(e) => setCurrentSlideIndex(Number(e.target.value))}
              className="bg-transparent text-xs font-semibold text-slate-800 focus:outline-none cursor-pointer pr-1 max-w-[130px] sm:max-w-[220px] truncate"
              title="যেকোনো উদাহরণ বা স্লাইডে সরাসরি যান"
            >
              {slides.map((s, idx) => (
                <option key={idx} value={idx}>
                  {idx + 1}. {s.title}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setShowTrainerNotes((prev) => !prev)}
            title="লেকচার নোটস টগল করুন"
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold transition cursor-pointer border ${
              showTrainerNotes
                ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
            <span className="hidden sm:inline">নোটস</span>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setFontSizeMultiplier((prev) => (prev >= 1.2 ? 1 : prev + 0.1))}
            className="px-2 py-1 bg-white hover:bg-slate-50 text-slate-700 rounded text-xs border border-slate-300 font-mono transition"
            title="ফন্ট সাইজ টগল"
          >
            A{fontSizeMultiplier > 1 ? '+' : ''}
          </button>

          <button
            onClick={toggleFullScreen}
            className="p-1.5 text-slate-600 hover:text-slate-900 rounded hover:bg-slate-100 transition"
            title="ফুলস্ক্রিন টগল"
          >
            {isFullScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-red-600 rounded hover:bg-slate-100 transition"
            title="প্যানেল বন্ধ করুন (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-1">
        <div 
          className="bg-[#04AA6D] h-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* 2. Main Slide Canvas (Executive Clean White Card on Soft Neutral Canvas) */}
      <div className="flex-1 bg-slate-100 overflow-y-auto px-3 py-4 sm:px-6 sm:py-6 flex flex-col items-center justify-start min-h-0">
        <div 
          className="w-full max-w-4xl bg-white border border-slate-200 rounded-xl p-5 sm:p-8 shadow-sm flex flex-col my-1 sm:my-3 shrink-0"
          style={{ fontSize: `${fontSizeMultiplier * 100}%` }}
        >
          {/* Slide Header */}
          <div className="border-b border-slate-200 pb-3 sm:pb-4 mb-4 sm:mb-5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                {topic.title} • {topic.phpVersion}
              </span>
              <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200 font-mono">
                Slide {currentSlideIndex + 1} of {slides.length}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {currentSlide.title}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1 font-medium">
              {currentSlide.subtitle}
            </p>
          </div>

          {/* Slide Content Body */}
          <div className="space-y-4">
            {/* Real Life Analogy Highlight (If present) */}
            {currentSlide.analogyOrHighlight && (
              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs sm:text-sm mb-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>বাস্তব জীবনের রূপক ও কার্যপদ্ধতি (Mental Model):</span>
                </div>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  {currentSlide.analogyOrHighlight}
                </p>
              </div>
            )}

            {/* Explanation with Smart Markdown / Text Formatter */}
            {currentSlide.explanationBn && (
              <div className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                <SmartContentFormatter 
                  text={currentSlide.explanationBn} 
                  onLoadCodeToEditor={handleCodeRunAndClose} 
                />
              </div>
            )}

            {/* Clean Numbered Bullet Points (If present) */}
            {currentSlide.bulletPoints && currentSlide.bulletPoints.length > 0 && (
              <div className="space-y-2">
                {currentSlide.bulletPoints.map((pt, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition"
                  >
                    <div className="w-5 h-5 rounded bg-white border border-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs mt-0.5 font-mono">
                      {idx + 1}
                    </div>
                    <span className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Code Snippet Box (If present) with full Smart Code Viewer & Instant Editor Runner */}
            {currentSlide.codeSnippet && (
              <div className="mt-3">
                <SmartCodeViewer
                  code={currentSlide.codeSnippet}
                  language={currentSlide.codeLanguage || 'PHP 8.2 Live Code'}
                  outputPreview={currentSlide.outputPreview}
                  onLoadCodeToEditor={handleCodeRunAndClose}
                />
              </div>
            )}

            {/* Optional Note (If present) */}
            {currentSlide.noteBn && (
              <div className="text-xs text-amber-800 bg-amber-50 border border-amber-200/80 rounded-lg p-3 flex items-start gap-2">
                <span className="font-bold shrink-0">📌 গুরুত্বপূর্ণ নোট:</span>
                <span className="leading-relaxed">{currentSlide.noteBn}</span>
              </div>
            )}
          </div>

          {/* Key Lecture Notes */}
          {showTrainerNotes && currentSlide.trainerSpeechNotes && (
            <div className="mt-5 pt-3.5 border-t border-slate-200 bg-slate-50/80 border-l-4 border-l-emerald-600 p-3 rounded-r-lg">
              <div className="flex items-center gap-1.5 text-slate-900 text-xs font-bold mb-1">
                <FileText className="w-3.5 h-3.5 text-emerald-700" />
                <span>লেকচার নোটস (Key Notes):</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                "{currentSlide.trainerSpeechNotes}"
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 3. Bottom Slide Navigator Controls (Clean Professional White Footer) */}
      <div className="h-16 border-t border-slate-200 bg-white px-3 sm:px-6 flex items-center justify-between shrink-0 shadow-xs">
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-mono hidden md:inline">
            কীবোর্ড: <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px]">←</kbd> <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px]">→</kbd> <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-300 rounded text-[10px]">Space</kbd>
          </span>
          <span className="text-xs font-semibold text-slate-700 font-mono md:hidden">
            {currentSlideIndex + 1}/{slides.length}
          </span>
        </div>

        {/* Previous / Next Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0}
            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1 transition disabled:opacity-40 disabled:cursor-not-allowed border border-slate-300 cursor-pointer shadow-2xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">পূর্ববর্তী স্লাইড</span>
            <span className="sm:hidden">Prev</span>
          </button>

          {/* Slide Indicator: Dots if <= 15, else Compact Pill Indicator */}
          {slides.length <= 15 ? (
            <div className="hidden sm:flex items-center gap-1.5 px-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlideIndex(i)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentSlideIndex === i 
                      ? 'bg-[#04AA6D] w-6' 
                      : 'bg-slate-300 hover:bg-slate-400 w-2'
                  }`}
                  title={`স্লাইড ${i + 1}`}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-1 px-2 text-xs font-mono font-semibold text-slate-700 bg-slate-100 py-1 px-2.5 rounded-full border border-slate-200">
              <span className="text-emerald-700 font-bold">{currentSlideIndex + 1}</span>
              <span className="text-slate-400">/</span>
              <span>{slides.length}</span>
            </div>
          )}

          {isLastSlide ? (
            <button
              onClick={() => {
                onLoadCodeToEditor(currentSlide.codeSnippet || topic.sampleCode);
                onClose();
              }}
              className="px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-lg bg-[#04AA6D] hover:bg-[#038555] text-white text-xs font-bold flex items-center gap-1.5 transition shadow-xs cursor-pointer active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>টপিক সম্পন্ন — এডিটরে রান করুন</span>
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-lg bg-[#04AA6D] hover:bg-[#038555] text-white text-xs font-bold flex items-center gap-1 transition shadow-xs cursor-pointer"
            >
              <span className="hidden sm:inline">পরবর্তী স্লাইড</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="text-xs text-slate-600 hover:text-slate-900 px-2.5 sm:px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 transition flex items-center gap-1 border border-slate-200 cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">বন্ধ করুন</span>
          </button>
        </div>
      </div>
    </div>
  );
};
