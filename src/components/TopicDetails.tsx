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
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedSectionIndex, setCopiedSectionIndex] = useState<number | null>(null);

  const pedagogy = getTopicPedagogy(topic);

  return (
    <main className="flex-1 bg-white overflow-y-auto flex flex-col p-4 sm:p-6 lg:p-8 min-w-0">
      {/* 1. Mentor Masterclass Banner */}
      <div className="mb-4 bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 border border-emerald-200/80 rounded-xl p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold shadow-sm shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">
                PHP Masterclass • 20+ Years Senior Trainer Curriculum
              </span>
              <span className="hidden md:inline px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-200/80 text-emerald-800">
                Beginner Friendly
              </span>
            </div>
            <p className="text-xs text-slate-600 mt-0.5">
              বাস্তব জীবনের রূপক, ধাপে ধাপে বিগিনার গাইড, ইন্ডাস্ট্রিয়াল সিক্রেটস ও ইন্টারভিউ প্রস্তুতি।
            </p>
          </div>
        </div>

        {/* Presentation Mode CTA */}
        {onOpenPresentation && (
          <button
            onClick={onOpenPresentation}
            className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-sm transition active:scale-95 cursor-pointer"
            title="ক্লাসরুম স্লাইড প্রেজেন্টেশন ফুলস্ক্রিন ওপেন করুন"
          >
            <Presentation className="w-4 h-4 text-emerald-400" />
            <span>স্লাইড প্রেজেন্টেশন মোড (Presentation)</span>
          </button>
        )}
      </div>

      {/* 2. Topic Header & Navigation */}
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
          <span>১. মেন্টর লেকচার ও কনসেপ্ট</span>
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
          <span>৩. ২০ বছরের সিক্রেটস ও কমন ভুল</span>
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
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                    {topic.deepDive.conceptBn}
                  </p>
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

                    {/* Section Explanation (একটু Explain) */}
                    <div className="text-slate-700 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                      {sec.explanationBn}
                    </div>

                    {/* Section Code Example (সাথে সাথে কোড ও এডিটরে রান করার বাটন) */}
                    {sec.code && (
                      <div className="mt-3.5 rounded-lg overflow-hidden border border-slate-800 bg-slate-950 shadow-inner">
                        <div className="px-3.5 py-1.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                          <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                            <Code2 className="w-3.5 h-3.5" />
                            <span>{sec.codeLanguage || 'PHP 8.2 Live Code'}</span>
                          </span>

                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                navigator.clipboard?.writeText(sec.code || '');
                                setCopiedSectionIndex(idx);
                                setTimeout(() => setCopiedSectionIndex(null), 1800);
                              }}
                              className="hover:text-emerald-400 flex items-center gap-1 transition cursor-pointer text-slate-400 px-2 py-0.5 rounded hover:bg-slate-800"
                            >
                              {copiedSectionIndex === idx ? (
                                <>
                                  <Check className="w-3 h-3 text-emerald-400" />
                                  <span className="text-emerald-400">কপি হয়েছে!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3" />
                                  <span>কপি করুন</span>
                                </>
                              )}
                            </button>

                            {/* এডিটরে পাঠান ও টেস্ট করুন বাটন */}
                            <button
                              onClick={() => onLoadCodeToEditor(sec.code || '')}
                              className="px-2.5 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-2xs cursor-pointer transition active:scale-95"
                              title="এই কোডটি সরাসরি কোড এডিটরে লোড করে রান বা পরিবর্তন করুন"
                            >
                              <Play className="w-3 h-3 fill-white" />
                              <span>এডিটরে রান ও টেস্ট করুন</span>
                            </button>
                          </div>
                        </div>

                        <pre className="p-3.5 text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed">
                          {sec.code}
                        </pre>

                        {/* Optional Output Preview */}
                        {sec.outputPreview && (
                          <div className="px-3.5 py-2 bg-slate-900/90 border-t border-slate-800/80 text-slate-300 font-mono text-[11px]">
                            <span className="text-amber-400 font-bold block mb-0.5">আউটপুট প্রিভিউ:</span>
                            <span className="text-slate-200 whitespace-pre-line">{sec.outputPreview}</span>
                          </div>
                        )}
                      </div>
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
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base whitespace-pre-line">
                {topic.deepDive.conceptBn}
              </p>
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
                      <pre className="mt-2 ml-8 p-2.5 bg-slate-950 text-emerald-300 font-mono text-xs rounded border border-slate-800 overflow-x-auto">
                        {step.codePiece}
                      </pre>
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
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sample Snippet Preview */}
          <div className="mt-5">
            <div className="flex items-center justify-between mb-2 text-xs">
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-emerald-600" />
                <span>মূল উদাহরণ কোড (Primary Interactive Example):</span>
              </span>
              <button
                onClick={() => onLoadCodeToEditor(topic.sampleCode)}
                className="text-[#04AA6D] hover:underline font-bold flex items-center gap-1 cursor-pointer bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 transition hover:bg-emerald-100"
              >
                <span>ডানদিকের এডিটরে ওপেন ও রান করুন</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <pre className="p-4 bg-slate-950 text-emerald-300 font-mono text-xs rounded-xl overflow-x-auto leading-relaxed border border-slate-800 shadow-inner">
              {topic.sampleCode}
            </pre>
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
                  প্রতিটি কোড ব্লকের "এডিটরে এডিট ও রান করুন" বাটনে ক্লিক করে সরাসরি পরিবর্তন ও পরীক্ষা করতে পারবেন
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {topic.deepDive.practiceExamples.map((ex, idx) => (
                  <div 
                    key={idx} 
                    className="p-4 rounded-xl bg-slate-50/80 border border-slate-200 shadow-2xs hover:border-emerald-300 transition"
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <h5 className="font-bold text-slate-900 text-sm">
                            {ex.title}
                          </h5>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 pl-7 leading-relaxed">
                          {ex.descriptionBn}
                        </p>
                      </div>

                      <button
                        onClick={() => onLoadCodeToEditor(ex.code)}
                        className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1.5 shrink-0 shadow-sm cursor-pointer transition active:scale-95"
                        title="এই কোডটি সরাসরি কোড এডিটরে লোড করে রান বা এডিট করুন"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>এডিটরে এডিট ও রান করুন</span>
                      </button>
                    </div>

                    <div className="mt-2.5 rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                      <div className="px-3 py-1.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span>PHP Script</span>
                        <button
                          onClick={() => {
                            navigator.clipboard?.writeText(ex.code);
                            setCopiedIndex(idx);
                            setTimeout(() => setCopiedIndex(null), 1800);
                          }}
                          className="hover:text-emerald-400 flex items-center gap-1 transition cursor-pointer text-slate-400"
                        >
                          {copiedIndex === idx ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400">কপি হয়েছে!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>কপি করুন</span>
                            </>
                          )}
                        </button>
                      </div>
                      <pre className="p-3.5 text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed">
                        {ex.code}
                      </pre>
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
                <pre className="text-xs font-mono bg-white p-3 rounded-lg text-red-950 border border-red-200 overflow-x-auto">
                  {topic.deepDive.comparison.juniorCode}
                </pre>
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
                <pre className="text-xs font-mono bg-white p-3 rounded-lg text-emerald-950 border border-emerald-200 overflow-x-auto">
                  {topic.deepDive.comparison.seniorCode}
                </pre>
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
              <pre className="p-3 bg-slate-950 text-emerald-300 font-mono text-xs rounded border border-slate-800 overflow-x-auto">
                {pedagogy.studentChallenge.starterCode}
              </pre>
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
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-emerald-400 font-bold">ট্রেইনারের আদর্শ সমাধান:</span>
                    <button
                      onClick={() => onLoadCodeToEditor(pedagogy.studentChallenge.solutionCode)}
                      className="text-xs text-slate-300 hover:text-white underline cursor-pointer"
                    >
                      এডিটরে সমাধান পেস্ট করুন »
                    </button>
                  </div>
                  <pre className="p-3 bg-slate-950 text-emerald-300 font-mono text-xs rounded border border-emerald-900/60 overflow-x-auto">
                    {pedagogy.studentChallenge.solutionCode}
                  </pre>
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
                      <pre className="p-3 bg-slate-950 text-emerald-300 font-mono text-xs rounded overflow-x-auto">
                        {topic.deepDive.security.safeCodeSnippet}
                      </pre>
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
