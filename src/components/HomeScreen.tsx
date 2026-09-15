import React from 'react';
import { 
  Play, 
  BookOpen, 
  Code2, 
  Presentation, 
  ArrowRight, 
  RotateCcw, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Briefcase, 
  Layers, 
  Terminal, 
  Cpu, 
  FileCode2,
  ChevronRight,
  GraduationCap
} from 'lucide-react';
import { ALL_TOPICS, CATEGORIES, TOPICS_BY_CATEGORY } from '../data';
import { TopicItem, TopicCategory } from '../types';

interface HomeScreenProps {
  onStartLearning: (topicId?: string) => void;
  onOpenPresentation: () => void;
  lastTopic: TopicItem | null;
  lastVisitedTimeText?: string;
  visitedTopics: string[];
  onResetProgress: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onStartLearning,
  onOpenPresentation,
  lastTopic,
  lastVisitedTimeText,
  visitedTopics,
  onResetProgress,
}) => {
  const categoriesList: TopicCategory[] = ['basic', 'forms', 'advanced', 'oop', 'mysql', 'architect'];
  const totalTopics = ALL_TOPICS.length;
  const completedCount = visitedTopics.length;
  const progressPercent = Math.min(100, Math.round((completedCount / totalTopics) * 100));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Global Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#04AA6D] flex items-center justify-center text-white font-mono font-black text-base shadow-sm">
              &lt;?
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight">
                  PHP Mastery
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold border border-emerald-200">
                  PHP 8.2+
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                ২০+ বছরের সিনিয়র ট্রেইনারের প্র্যাকটিক্যাল লার্নিং প্ল্যাটফর্ম
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#curriculum" className="hover:text-emerald-700 transition">
              সিলেবাস ও রোডম্যাপ
            </a>
            <a href="#features" className="hover:text-emerald-700 transition">
              মূল বৈশিষ্ট্যসমূহ
            </a>
            <a href="#about" className="hover:text-emerald-700 transition">
              ট্রেইনার ও মেথডোলজি
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenPresentation}
              title="ক্লাসরুম লেকচার স্লাইড মোড"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition shadow-sm cursor-pointer"
            >
              <Presentation className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">স্লাইড মোড</span>
            </button>

            <button
              onClick={() => onStartLearning(lastTopic?.id || 'php-home')}
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-lg text-xs font-bold bg-[#04AA6D] hover:bg-[#038354] text-white transition shadow-sm active:scale-95 cursor-pointer"
            >
              <Code2 className="w-4 h-4" />
              <span>{lastTopic ? 'ওয়ার্কস্পেসে যান' : 'শেখা শুরু করুন'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-12 sm:pt-16 sm:pb-18 border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>20+ YEARS ENTERPRISE PHP TRAINER MASTERCLASS</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
              আধুনিক পিএইচপি ৮.২ এন্টারপ্রাইজ মাস্টারি ও লাইভ কোডিং স্যান্ডবক্স
            </h1>

            {/* Bengali Subheading */}
            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed mb-8">
              কোনো প্রকার লোকাল সফটওয়্যার (XAMPP/WAMP) ছাড়া সরাসরি ব্রাউজারে রান করুন রিয়েল পিএইচপি ৮.২ কোড। 
              বিগিনার সিনট্যাক্স থেকে শুরু করে জুনিয়র বনাম সিনিয়র কোড রিভিউ, PDO ডাটাবেস সিকিউরিটি ও এন্টারপ্রাইজ ক্লিন আর্কিটেকচার।
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              {/* Primary Start / Resume Button */}
              <button
                onClick={() => onStartLearning(lastTopic?.id || 'php-home')}
                className="px-6 py-3 rounded-xl bg-[#04AA6D] hover:bg-[#038354] text-white text-sm font-bold flex items-center gap-2 shadow-md shadow-emerald-700/20 hover:shadow-emerald-700/30 transition active:scale-95 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{lastTopic ? 'পূর্ববর্তী টপিক থেকে শুরু করুন' : 'সম্পূর্ণ কোর্স শুরু করুন'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPresentation}
                className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-sm font-bold flex items-center gap-2 shadow-2xs transition active:scale-95 cursor-pointer"
              >
                <Presentation className="w-4 h-4 text-emerald-600" />
                <span>ক্লাসরুম স্লাইড ডেক (Slides)</span>
              </button>

              <a
                href="#curriculum"
                className="px-4 py-3 rounded-xl text-slate-600 hover:text-slate-900 text-sm font-semibold flex items-center gap-1 transition"
              >
                <span>সিলেবাস দেখুন</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Stat Pill Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">কোর্স টপিক</div>
                <div className="text-lg font-black text-slate-800 font-mono">২৪টি মডিউল</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">রানটাইম ইঞ্জিন</div>
                <div className="text-lg font-black text-emerald-700 font-mono">PHP 8.2 WASM</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">আর্কিটেকচার ধাপ</div>
                <div className="text-lg font-black text-slate-800 font-mono">৬টি লেভেল</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
                <div className="text-xs text-slate-500 font-medium">ট্রেইনার অভিজ্ঞতা</div>
                <div className="text-lg font-black text-emerald-700 font-mono">২০+ বছর</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Continue Learning / Previous Topic Track Banner */}
      {lastTopic && (
        <section className="bg-emerald-900 text-white py-6 border-y border-emerald-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-emerald-800 flex items-center justify-center shrink-0 border border-emerald-700 shadow-inner">
                  <BookOpen className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] uppercase tracking-wider font-mono font-bold px-2 py-0.5 rounded bg-emerald-800/80 text-emerald-200 border border-emerald-700">
                      আপনার চলমান অগ্রগতি
                    </span>
                    {lastVisitedTimeText && (
                      <span className="text-xs text-emerald-300">
                        ({lastVisitedTimeText})
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white mt-1">
                    পূর্ববর্তী টপিক: <span className="text-emerald-300">{lastTopic.title}</span>
                  </h3>
                  <p className="text-xs text-emerald-200 max-w-xl truncate">
                    {lastTopic.subtitleBn}
                  </p>
                </div>
              </div>

              {/* Progress and Resume Action */}
              <div className="flex items-center gap-4 shrink-0">
                <div className="hidden lg:block text-right">
                  <div className="text-xs text-emerald-200 font-medium">
                    মোট সম্পন্ন: <b>{completedCount}/{totalTopics}</b> টপিক ({progressPercent}%)
                  </div>
                  <div className="w-36 h-2 bg-emerald-950 rounded-full mt-1.5 overflow-hidden">
                    <div
                      className="h-full bg-emerald-400 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => onStartLearning(lastTopic.id)}
                  className="px-5 py-2.5 rounded-lg bg-white text-emerald-950 font-bold text-xs hover:bg-emerald-100 transition shadow-sm flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <span>টপিকে ফিরে যান</span>
                  <ArrowRight className="w-4 h-4 text-emerald-700" />
                </button>

                <button
                  onClick={onResetProgress}
                  title="অগ্রগতি রিসেট করুন"
                  className="p-2 rounded-lg text-emerald-300 hover:text-white hover:bg-emerald-800 transition cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Core Highlights Section */}
      <section id="features" className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            কেন এই প্ল্যাটফর্মটি ভিন্ন ও প্রফেশনাল?
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            শুধু থিওরি নয়, একজন এন্টারপ্রাইজ ইঞ্জিনিয়ারের মতো কোড লেখার মানসিকতা গড়ে তোলার কমপ্লিট ইকোসিস্টেম।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              ইন-ব্রাউজার লাইভ পিএইচপি ৮.২ ইঞ্জিন
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              লোকাল সার্ভার বা কোনো সেটআপ ছাড়াই সরাসরি ব্রাউজারে WebAssembly দিয়ে Zend Engine রান করে কোড আউটপুট ও এরর দেখুন।
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              জুনিয়র বনাম সিনিয়র কোড রিভিউ
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              প্রতিটি টপিকে জুনিয়রের করা স্প্যাগেটি কোড এবং সিনিয়রের এন্টারপ্রাইজ ক্লিন সলিউশনের সাইড-বাই-সাইড তুলনা।
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              সিকিউরিটি ও আর্কিটেক্ট টিপস
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              SQL Injection, XSS, CSRF অ্যাটাক ভেক্টর প্রতিরোধ এবং মেমরি সেভিংস নিয়ে ২০ বছরের রিয়েল ফিল্ড এক্সপেরিয়েন্স।
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              টেকনিক্যাল ইন্টারভিউ প্রস্তুতি
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              টপ সফটওয়্যার ফার্ম ও প্রডাক্ট কোম্পানিতে পিএইচপি সম্পর্কিত সবচেয়ে গুরুত্বপূর্ণ ভাইভা প্রশ্ন ও স্ট্যান্ডার্ড উত্তর।
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center mb-4">
              <Presentation className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              ক্লাসরুম প্রেজেন্টেশন মোড
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              প্রজেক্টরে লেকচার দেওয়ার জন্য পূর্ণাঙ্গ স্লাইড ডেক। ট্রেইনার স্পিচ নোটস ও কি-টেকঅ্যাওয়েসসহ সাজানো।
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs hover:shadow-md transition">
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Zend VM ও মেমরি ইন্টারনালস
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              পিএইচপি কোড কীভাবে অপকোড (Opcodes) ও সি-স্ট্রাকচারে এক্সিকিউট হয় তার মেমরি লেভেল মেকানিজম।
            </p>
          </div>
        </div>
      </section>

      {/* 5. Complete Curriculum Roadmap Grid */}
      <section id="curriculum" className="py-14 sm:py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase">
                COMPLETE SYLLABUS &amp; ROADMAP
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1">
                ৬টি ধাপে আর্কিটেকচার লার্নিং পাথ
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                যেকোনো টপিকে ক্লিক করে সরাসরি ইন্টারঅ্যাক্টিভ কোডিং ওয়ার্কস্পেসে প্রবেশ করুন।
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span className="w-2.5 h-2.5 rounded-full bg-[#04AA6D]" />
              <span>মোট ২৪টি প্র্যাকটিক্যাল টপিক</span>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesList.map((catKey) => {
              const meta = CATEGORIES[catKey];
              const topics = TOPICS_BY_CATEGORY[catKey] || [];
              const isArchitect = catKey === 'architect';

              return (
                <div
                  key={catKey}
                  className={`rounded-2xl border flex flex-col justify-between overflow-hidden transition hover:shadow-md ${
                    isArchitect
                      ? 'bg-emerald-50/50 border-emerald-300 ring-1 ring-emerald-300/40'
                      : 'bg-slate-50/60 border-slate-200'
                  }`}
                >
                  {/* Category Header */}
                  <div className="p-5 border-b border-slate-200/80 bg-white">
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`text-[10px] font-mono uppercase font-bold px-2 py-0.5 rounded ${
                          isArchitect
                            ? 'bg-emerald-200/70 text-emerald-900 border border-emerald-300'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {meta.badge}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {topics.length}টি টপিক
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {meta.nameEn}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      {meta.description}
                    </p>
                  </div>

                  {/* Topics List */}
                  <div className="p-4 flex-1 flex flex-col gap-1.5 divide-y divide-slate-100 bg-white/70">
                    {topics.map((topic) => {
                      const isVisited = visitedTopics.includes(topic.id);
                      const isLast = lastTopic?.id === topic.id;

                      return (
                        <button
                          key={topic.id}
                          onClick={() => onStartLearning(topic.id)}
                          className={`w-full text-left pt-2 pb-1.5 px-2.5 rounded-lg flex items-center justify-between text-xs transition group cursor-pointer ${
                            isLast
                              ? 'bg-emerald-100/90 text-emerald-900 font-bold border border-emerald-300'
                              : 'hover:bg-slate-100 hover:text-slate-900 text-slate-700'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate pr-2">
                            {isVisited ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#04AA6D] shrink-0" />
                            ) : (
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#04AA6D] shrink-0" />
                            )}
                            <span className="truncate">{topic.title}</span>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            {isLast && (
                              <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#04AA6D] text-white font-semibold">
                                চলমান
                              </span>
                            )}
                            <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform group-hover:translate-x-0.5" />
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Category Bottom Action */}
                  <div className="p-3 bg-slate-50 border-t border-slate-200/80">
                    <button
                      onClick={() => onStartLearning(topics[0]?.id)}
                      className="w-full py-1.5 rounded-lg text-xs font-bold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/80 transition flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>এই মডিউল প্র্যাকটিস করুন</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. About Trainer & Pedagogy Section */}
      <section id="about" className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-12 overflow-hidden relative shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 text-xs font-bold mb-4">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              <span>TRAINER PROFILE &amp; PEDAGOGY PHILOSOPHY</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
              ২০ বছরের অভিজ্ঞতা থেকে তৈরি লার্নিং মেথডোলজি
            </h2>

            <div className="space-y-4 text-slate-300 text-xs sm:text-sm leading-relaxed">
              <p>
                বিগত ২০ বছরে হাজারো ডেভেলপার ট্রেইনিং করানোর পর একটি সাধারণ সমস্যা লক্ষ্য করেছি—অধিকাংশ শিক্ষার্থী কোডের সিনট্যাক্স মুখস্থ করে কিন্তু কম্পিউটার মেমরিতে কী ঘটছে বা কেন কোডটি স্কেল করবে না তা বুঝতে পারে না।
              </p>
              <p>
                এই প্ল্যাটফর্মটিতে কোনো অগভীর টিউটোরিয়াল দেওয়া হয়নি। প্রতিটি টপিকে প্রথমে সহজ বাংলা উপমায় কনসেপ্ট পরিষ্কার করা হয়েছে, তারপর লাইভ কোড এডিটরে রান করার সুযোগ এবং সবার শেষে জুনিয়র বনাম সিনিয়র সলিউশন দিয়ে প্রফেশনাল মান নিশ্চিত করা হয়েছে।
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800">
              <div>
                <div className="text-emerald-400 font-mono font-bold text-xs">ধাপ ১: কনসেপ্ট ক্লিয়ারিটি</div>
                <div className="font-bold text-white text-sm mt-1">বাস্তব উপমা ও ইন্টারনালস</div>
                <p className="text-[11px] text-slate-400 mt-1">মুখস্থ না করে মেমরি ও লজিক বুঝে নেওয়া।</p>
              </div>
              <div>
                <div className="text-emerald-400 font-mono font-bold text-xs">ধাপ ২: হ্যান্ডস-অন রান</div>
                <div className="font-bold text-white text-sm mt-1">লাইভ ব্রাউজার স্যান্ডবক্স</div>
                <p className="text-[11px] text-slate-400 mt-1">নিজে কোড পরিবর্তন করে সরাসরি রেজাল্ট দেখা।</p>
              </div>
              <div>
                <div className="text-emerald-400 font-mono font-bold text-xs">ধাপ ৩: এন্টারপ্রাইজ স্ট্যান্ডার্ড</div>
                <div className="font-bold text-white text-sm mt-1">ক্লিন কোড ও ইন্টারভিউ</div>
                <p className="text-[11px] text-slate-400 mt-1">ইন্ডাস্ট্রিতে সফল হওয়ার মতো প্রস্তুতি।</p>
              </div>
            </div>

            {/* Launch CTA */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => onStartLearning(lastTopic?.id || 'php-home')}
                className="px-6 py-3 rounded-xl bg-[#04AA6D] hover:bg-[#038354] text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-950 transition active:scale-95 cursor-pointer"
              >
                <span>সরাসরি লার্নিং ওয়ার্কস্পেসে যান</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">PHP Mastery Masterclass</span>
            <span>•</span>
            <span>ইন-ব্রাউজার WebAssembly PHP 8.2 ইঞ্জিন</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onStartLearning('php-home')}
              className="hover:text-slate-900 transition"
            >
              বেসিক ফান্ডামেন্টালস
            </button>
            <button
              onClick={() => onStartLearning('php-oop-classes')}
              className="hover:text-slate-900 transition"
            >
              অবজেক্ট ওরিয়েন্টেড (OOP)
            </button>
            <button
              onClick={() => onStartLearning('php-mysql-pdo')}
              className="hover:text-slate-900 transition"
            >
              MySQL PDO
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
