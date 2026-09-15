import React from 'react';
import { Play, Terminal, Layers, FileCode2, PanelLeftClose, PanelLeftOpen, PanelRightClose, PanelRightOpen, Presentation } from 'lucide-react';
import { EngineStatus } from '../services/phpRunner';
import { ViewMode } from '../types';

interface HeaderProps {
  engineStatus: EngineStatus;
  statusMessage?: string;
  onRunCode: () => void;
  isRunning: boolean;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  isEditorVisible: boolean;
  onToggleEditor: () => void;
  onOpenPresentation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  engineStatus,
  statusMessage,
  onRunCode,
  isRunning,
  viewMode,
  onViewModeChange,
  sidebarOpen,
  onToggleSidebar,
  isEditorVisible,
  onToggleEditor,
  onOpenPresentation,
}) => {
  return (
    <header className="h-14 bg-white border-b border-slate-200 px-3 sm:px-4 flex items-center justify-between shrink-0 z-40">
      {/* Brand & Sidebar Toggle Button */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onToggleSidebar}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-semibold border transition cursor-pointer select-none ${
            sidebarOpen
              ? 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              : 'bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100 shadow-xs ring-1 ring-emerald-300/50'
          }`}
          title={sidebarOpen ? 'টপিক তালিকা লুকান (Hide Topics Sidebar)' : 'টপিক তালিকা খুলুন (Open Topics Sidebar)'}
        >
          {sidebarOpen ? (
            <>
              <PanelLeftClose className="w-4 h-4 text-slate-600" />
              <span className="hidden sm:inline">টপিক লুকান</span>
            </>
          ) : (
            <>
              <PanelLeftOpen className="w-4 h-4 text-emerald-700" />
              <span className="font-bold text-emerald-800">টপিক তালিকা</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#04AA6D] flex items-center justify-center text-white font-mono font-black text-sm shadow-sm">
            &lt;?
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-sm tracking-tight">
                PHP Mastery &amp; Interactive Editor
              </span>
              <span className="hidden sm:inline text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">
                20+ Years Trainer Masterclass
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden md:block">
              বিগিনার টু প্রফেশনাল প্রেজেন্টেশন • ২০ বছরের ইন্ডাস্ট্রিয়াল গাইড • লাইভ পিএইচপি ৮.২ স্যান্ডবক্স
            </p>
          </div>
        </div>
      </div>

      {/* Center / Right Toolbar */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Presentation Mode Button */}
        {onOpenPresentation && (
          <button
            onClick={onOpenPresentation}
            title="ক্লাসরুম লেকচার প্রেজেন্টেশন স্লাইড খুলুন"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition shadow-2xs active:scale-95 cursor-pointer"
          >
            <Presentation className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">স্লাইড মোড (Slides)</span>
          </button>
        )}

        {/* Toggle Code Editor Button (Hide / View Toggler) */}
        <button
          onClick={onToggleEditor}
          title={isEditorVisible ? 'কোড এডিটর লুকান (Hide Code Editor)' : 'কোড এডিটর দেখুন (View Code Editor)'}
          className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-md text-xs font-semibold border transition cursor-pointer select-none ${
            isEditorVisible
              ? 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              : 'bg-emerald-50 border-emerald-300 text-emerald-800 hover:bg-emerald-100 shadow-xs ring-1 ring-emerald-300/50'
          }`}
        >
          {isEditorVisible ? (
            <>
              <PanelRightClose className="w-4 h-4 text-slate-600" />
              <span className="hidden sm:inline">Hide Editor</span>
            </>
          ) : (
            <>
              <PanelRightOpen className="w-4 h-4 text-emerald-700" />
              <span className="font-bold text-emerald-800">View Editor</span>
            </>
          )}
        </button>


        {/* Responsive View Switcher for Small Screens */}
        <div className="flex xl:hidden bg-slate-100 p-0.5 rounded-lg text-xs font-medium text-slate-600 border border-slate-200">
          <button
            onClick={() => onViewModeChange('all')}
            className={`px-2.5 py-1 rounded transition flex items-center gap-1 ${
              viewMode === 'all' ? 'bg-white text-[#04AA6D] font-bold shadow-xs' : 'hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">সবগুলো</span>
          </button>
          <button
            onClick={() => onViewModeChange('doc')}
            className={`px-2.5 py-1 rounded transition flex items-center gap-1 ${
              viewMode === 'doc' ? 'bg-white text-[#04AA6D] font-bold shadow-xs' : 'hover:text-slate-900'
            }`}
          >
            <FileCode2 className="w-3.5 h-3.5" />
            <span>ডকুমেন্টেশন</span>
          </button>
          <button
            onClick={() => onViewModeChange('editor')}
            className={`px-2.5 py-1 rounded transition flex items-center gap-1 ${
              viewMode === 'editor' ? 'bg-white text-[#04AA6D] font-bold shadow-xs' : 'hover:text-slate-900'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>এডিটর</span>
          </button>
        </div>

        {/* Engine Status Indicator - Always clean & active */}
        <div 
          className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-emerald-50 rounded-full border border-emerald-200 text-xs font-mono select-none"
          title="PHP 8.2 Live Execution Engine"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-emerald-800 font-semibold text-[11px]">
            PHP 8.2 Ready
          </span>
        </div>

        {/* Global Run Button */}
        <button
          onClick={onRunCode}
          disabled={isRunning}
          className="flex items-center gap-1.5 bg-[#04AA6D] hover:bg-[#037a4e] text-white text-xs font-bold px-3.5 py-1.5 rounded-md shadow-sm transition active:scale-95 disabled:opacity-50 cursor-pointer"
          title="কীবোর্ড শর্টকাট: Ctrl + Enter"
        >
          <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
          <span>{isRunning ? 'Running...' : 'Run (Ctrl+Enter)'}</span>
        </button>
      </div>
    </header>
  );
};

