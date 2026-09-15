import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Maximize2, 
  Minimize2, 
  BookOpen, 
  Code2, 
  Compass,
  FileText
} from 'lucide-react';
import { TopicItem } from '../types';
import { getTopicPedagogy } from '../data/trainerPedagogy';

interface PresentationModeProps {
  topic: TopicItem;
  onClose: () => void;
  onLoadCodeToEditor: (code: string) => void;
  onNavigateTopic?: (topicId: string) => void;
  prevTopic: TopicItem | null;
  nextTopic: TopicItem | null;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({
  topic,
  onClose,
  onLoadCodeToEditor,
  onNavigateTopic,
  prevTopic,
  nextTopic,
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

  const handleNext = useCallback(() => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
    } else if (nextTopic && onNavigateTopic) {
      onNavigateTopic(nextTopic.id);
    }
  }, [currentSlideIndex, slides.length, nextTopic, onNavigateTopic]);

  const handlePrev = useCallback(() => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    } else if (prevTopic && onNavigateTopic) {
      onNavigateTopic(prevTopic.id);
    }
  }, [currentSlideIndex, prevTopic, onNavigateTopic]);

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

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs text-slate-800 flex flex-col animate-fadeIn select-none">
      {/* 1. Top Control Bar (Clean Professional Light Header) */}
      <div className="h-14 border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between shrink-0 bg-white shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-md bg-[#04AA6D] flex items-center justify-center font-mono font-bold text-white text-xs shadow-xs">
              &lt;?
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-slate-900 tracking-tight">
                  {topic.title}
                </span>
                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                  {topic.tag}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                PHP Masterclass • প্রফেশনাল প্রেজেন্টেশন স্লাইড
              </p>
            </div>
          </div>
        </div>

        {/* Center: Slide Indicator & Trainer Notes Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 font-medium">
            <span className="font-semibold text-emerald-800">স্লাইড {currentSlideIndex + 1}</span>
            <span className="text-slate-400">/</span>
            <span>{slides.length}</span>
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
            <span className="hidden md:inline">লেকচার নোটস</span>
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setFontSizeMultiplier((prev) => (prev >= 1.2 ? 1 : prev + 0.1))}
            className="px-2.5 py-1 bg-white hover:bg-slate-50 text-slate-700 rounded text-xs border border-slate-300 font-mono transition"
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
            title="পেনেল বন্ধ করুন (Esc)"
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
      <div className="flex-1 bg-slate-100 overflow-y-auto px-4 py-5 sm:px-6 sm:py-6 flex flex-col items-center justify-start min-h-0">
        <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col my-2 sm:my-4 shrink-0">
          {/* Slide Header */}
          <div className="border-b border-slate-200 pb-4 mb-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                PHP 8.2 Enterprise Training
              </span>
              <span className="text-xs text-slate-500 font-mono">
                Slide {currentSlideIndex + 1} of {slides.length}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {currentSlide.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1.5 font-medium">
              {currentSlide.subtitle}
            </p>
          </div>

          {/* Slide Content Body */}
          <div className="space-y-4 my-auto">
            {/* Real Life Analogy Highlight (If present) */}
            {currentSlide.analogyOrHighlight && (
              <div className="p-4 sm:p-5 bg-emerald-50/60 border border-emerald-200 rounded-xl">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-1.5">
                  <BookOpen className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>বাস্তব জীবনের রূপক ও মানসিক মডেল (Mental Model):</span>
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {currentSlide.analogyOrHighlight}
                </p>
              </div>
            )}

            {/* Clean Numbered Bullet Points */}
            {currentSlide.bulletPoints && currentSlide.bulletPoints.length > 0 && (
              <div className="space-y-2.5">
                {currentSlide.bulletPoints.map((pt, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition"
                  >
                    <div className="w-6 h-6 rounded-md bg-white border border-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs mt-0.5">
                      {idx + 1}
                    </div>
                    <span className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Code Snippet Box (If present) */}
            {currentSlide.codeSnippet && (
              <div className="mt-4">
                <div className="flex items-center justify-between px-3.5 py-2 bg-slate-900 rounded-t-lg border-t border-x border-slate-800 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5 font-mono text-emerald-400 font-semibold">
                    <Code2 className="w-3.5 h-3.5" />
                    PHP Script
                  </span>
                  <button
                    onClick={() => {
                      onLoadCodeToEditor(currentSlide.codeSnippet || '');
                      onClose();
                    }}
                    className="inline-flex items-center gap-1 bg-[#04AA6D] hover:bg-[#038555] text-white px-2.5 py-1 rounded text-xs font-bold transition cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>এডিটরে লোড করে রান করুন</span>
                  </button>
                </div>
                <pre className="p-4 bg-slate-950 text-emerald-300 font-mono text-xs sm:text-sm rounded-b-lg border border-slate-800 overflow-x-auto leading-relaxed max-h-56">
                  {currentSlide.codeSnippet}
                </pre>
              </div>
            )}
          </div>

          {/* Trainer Notes Drawer (Executive Callout) */}
          {showTrainerNotes && (
            <div className="mt-6 pt-4 border-t border-slate-200 bg-slate-50 border-l-4 border-l-emerald-600 p-3.5 rounded-r-lg">
              <div className="flex items-center gap-2 text-slate-900 text-xs font-bold mb-1">
                <FileText className="w-3.5 h-3.5 text-emerald-700" />
                <span>ট্রেইনার লেকচার নোটস (Trainer's Lecture Notes):</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                "{currentSlide.trainerSpeechNotes}"
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 3. Bottom Slide Navigator Controls (Clean Professional White Footer) */}
      <div className="h-16 border-t border-slate-200 bg-white px-4 sm:px-6 flex items-center justify-between shrink-0 shadow-xs">
        <div className="flex items-center gap-2">
          {prevTopic && onNavigateTopic && (
            <button
              onClick={() => onNavigateTopic(prevTopic.id)}
              className="text-xs text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 transition flex items-center gap-1 border border-slate-200"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>পূর্ববর্তী টপিক</span>
            </button>
          )}
        </div>

        {/* Previous / Next Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={handlePrev}
            disabled={currentSlideIndex === 0 && !prevTopic}
            className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 transition disabled:opacity-40 disabled:cursor-not-allowed border border-slate-300 cursor-pointer shadow-2xs"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>পূর্ববর্তী স্লাইড (←)</span>
          </button>

          {/* Slide Indicator Dots */}
          <div className="hidden sm:flex items-center gap-1.5 px-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlideIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlideIndex === i 
                    ? 'bg-[#04AA6D] w-5' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                title={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg bg-[#04AA6D] hover:bg-[#038555] text-white text-xs font-bold flex items-center gap-1.5 transition shadow-xs cursor-pointer"
          >
            <span>পরবর্তী স্লাইড (Space / →)</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          {nextTopic && onNavigateTopic && (
            <button
              onClick={() => onNavigateTopic(nextTopic.id)}
              className="text-xs text-slate-600 hover:text-slate-900 px-3 py-1.5 rounded-md bg-white hover:bg-slate-50 transition flex items-center gap-1 border border-slate-200"
            >
              <span>পরবর্তী টপিক</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
