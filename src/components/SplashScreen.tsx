import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Zap, CheckCircle2, Terminal } from 'lucide-react';
import { TopicItem } from '../types';

interface SplashScreenProps {
  onStartLearning: (topicId?: string) => void;
  onGoToHome: () => void;
  lastTopic: TopicItem | null;
  lastVisitedTimeText?: string;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({
  onStartLearning,
  onGoToHome,
  lastTopic,
  lastVisitedTimeText,
}) => {
  const [progress, setProgress] = useState(15);
  const [statusText, setStatusText] = useState('পরিবেশ প্রস্তুত হচ্ছে (Initializing PHP 8.2 runtime)...');

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProgress(45);
      setStatusText('WebAssembly Zend Engine মাউন্ট করা হচ্ছে...');
    }, 400);

    const timer2 = setTimeout(() => {
      setProgress(85);
      setStatusText('২৪টি ইন্ডাস্ট্রিয়াল টপিক ও আর্কিটেকচার মডিউল লোড হচ্ছে...');
    }, 900);

    const timer3 = setTimeout(() => {
      setProgress(100);
      setStatusText('সফলভাবে প্রস্তুত! মাস্টারক্লাসে স্বাগতম।');
    }, 1400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-[#0c121e] text-slate-100 flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden">
      {/* Background Decorative Ambient Circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#04AA6D]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header info */}
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto z-10">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-emerald-400 tracking-wider uppercase font-semibold">
            Enterprise PHP Platform v1.0
          </span>
        </div>
        <button
          onClick={onGoToHome}
          className="text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-md hover:bg-slate-800/80 transition cursor-pointer"
        >
          স্কিপ করে হোমে যান (Skip) &rarr;
        </button>
      </div>

      {/* Center Hero Card */}
      <div className="w-full max-w-xl mx-auto flex flex-col items-center text-center z-10 py-6">
        {/* Logo Badge */}
        <div className="relative mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#04AA6D] to-[#026b44] flex items-center justify-center text-white font-mono font-black text-3xl sm:text-4xl shadow-xl shadow-emerald-950/60 ring-4 ring-emerald-500/30">
            &lt;?
          </div>
          <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-slate-700 px-2 py-0.5 rounded-full flex items-center gap-1 shadow-md">
            <Zap className="w-3 h-3 text-amber-400" />
            <span className="text-[10px] font-mono font-bold text-slate-200">8.2 Engine</span>
          </div>
        </div>

        {/* Badges */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>আধুনিক পিএইচপি ৮.২ প্র্যাকটিক্যাল লার্নিং প্ল্যাটফর্ম</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
          PHP Mastery &amp; Interactive Sandbox
        </h1>

        {/* Bengali Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed mb-6 font-normal">
          মুখস্থ কোডিং নয়—বাস্তব কনসেপ্ট, লাইভ ব্রাউজার কম্পাইলার ও ক্লিন আর্কিটেকচার শেখার আধুনিক ইন্টারেক্টিভ প্ল্যাটফর্ম।
        </p>

        {/* Progress Bar Container */}
        <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-xl p-4 mb-6 shadow-inner text-left">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-slate-400 font-mono flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              {statusText}
            </span>
            <span className="text-emerald-400 font-mono font-bold">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-[#04AA6D] transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
          {/* Main Get Started / Home Button */}
          <button
            onClick={onGoToHome}
            className="w-full flex-1 py-3 px-5 rounded-lg bg-[#04AA6D] hover:bg-[#038e5b] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 hover:shadow-emerald-900/60 transition active:scale-[0.98] cursor-pointer"
          >
            <span>প্ল্যাটফর্মে প্রবেশ করুন (Enter)</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Quick Continue Topic Button if available */}
          {lastTopic && (
            <button
              onClick={() => onStartLearning(lastTopic.id)}
              className="w-full flex-1 py-3 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition active:scale-[0.98] cursor-pointer"
              title={`পূর্ববর্তী টপিক: ${lastTopic.title}`}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">আগের টপিক: {lastTopic.title}</span>
            </button>
          )}
        </div>

        {/* Last visited note */}
        {lastTopic && lastVisitedTimeText && (
          <p className="text-[11px] text-slate-500 mt-2">
            সর্বশেষ পড়া হয়েছে: <span className="text-slate-400">{lastVisitedTimeText}</span> ({lastTopic.title})
          </p>
        )}
      </div>

      {/* Footer Info */}
      <div className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 border-t border-slate-800/80 pt-4 gap-2 z-10">
        <div>
          <span>Zend Engine WebAssembly Sandbox • Zero Installation Needed</span>
        </div>
        <div className="flex items-center gap-4">
          <span>৬টি আর্কিটেকচার ধাপ</span>
          <span>•</span>
          <span>২৪টি হ্যান্ডস-অন টপিক</span>
          <span>•</span>
          <span>প্রেজেন্টেশন মোড</span>
        </div>
      </div>
    </div>
  );
};
