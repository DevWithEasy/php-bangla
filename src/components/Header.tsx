import React from 'react';
import { 
  Play, 
  Terminal, 
  Layers, 
  FileCode2, 
  PanelLeft, 
  PanelRight, 
  Presentation, 
  Home 
} from 'lucide-react';
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
  onGoToHome?: () => void;
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
  onGoToHome,
}) => {
  return (
    <header className="h-13 bg-white border-b border-slate-200/90 px-3 sm:px-4 flex items-center justify-between shrink-0 z-40 select-none">
      {/* Left: Sidebar Toggle, Brand & Home */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Clean Sidebar Toggle */}
        <button
          onClick={onToggleSidebar}
          className={`p-1.5 rounded-lg border transition cursor-pointer text-slate-600 hover:text-slate-900 ${
            sidebarOpen
              ? 'bg-slate-100 border-slate-200 text-slate-800'
              : 'bg-white border-slate-200 hover:bg-slate-50'
          }`}
          title={sidebarOpen ? 'টপিক সাইডবার লুকান (Ctrl+B)' : 'টপিক সাইডবার খুলুন (Ctrl+B)'}
        >
          <PanelLeft className="w-4 h-4" />
        </button>

        {/* Minimal Clean Brand Logo */}
        <div 
          onClick={onGoToHome} 
          className="flex items-center gap-2 cursor-pointer group"
          title="হোম পেজে ফিরে যান"
        >
          <div className="w-7 h-7 rounded-md bg-[#04AA6D] group-hover:bg-[#038555] flex items-center justify-center text-white font-mono font-bold text-xs shadow-xs transition">
            &lt;?
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-slate-900 text-sm tracking-tight group-hover:text-emerald-700 transition">
              PHP Mastery
            </span>
            <span className="text-[10px] font-mono font-medium text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
              8.2
            </span>
          </div>
        </div>

        {onGoToHome && (
          <button
            onClick={onGoToHome}
            title="হোম পেজ"
            className="hidden md:flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition cursor-pointer ml-1"
          >
            <Home className="w-3.5 h-3.5" />
            <span>হোম</span>
          </button>
        )}
      </div>

      {/* Right: Actions, Status & Run Button */}
      <div className="flex items-center gap-1.5 sm:gap-2.5">
        {/* Minimal Presentation Slide Mode Button */}
        {onOpenPresentation && (
          <button
            onClick={onOpenPresentation}
            title="টপিক স্লাইড প্রেজেন্টেশন মোড খুলুন"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 transition cursor-pointer"
          >
            <Presentation className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">স্লাইড মোড</span>
          </button>
        )}

        {/* Minimal Editor Panel Toggle */}
        <button
          onClick={onToggleEditor}
          title={isEditorVisible ? 'কোড এডিটর লুকান' : 'কোড এডিটর দেখুন'}
          className={`p-1.5 rounded-lg border transition cursor-pointer text-slate-600 hover:text-slate-900 ${
            isEditorVisible
              ? 'bg-slate-100 border-slate-200 text-slate-800'
              : 'bg-white border-slate-200 hover:bg-slate-50'
          }`}
        >
          <PanelRight className="w-4 h-4" />
        </button>

        {/* Small Screen Layout Switcher */}
        <div className="flex xl:hidden bg-slate-100 p-0.5 rounded-md text-xs font-medium text-slate-600 border border-slate-200">
          <button
            onClick={() => onViewModeChange('all')}
            className={`px-2 py-1 rounded transition text-[11px] ${
              viewMode === 'all' ? 'bg-white text-emerald-800 font-bold shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            সব
          </button>
          <button
            onClick={() => onViewModeChange('doc')}
            className={`px-2 py-1 rounded transition text-[11px] ${
              viewMode === 'doc' ? 'bg-white text-emerald-800 font-bold shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            ডক
          </button>
          <button
            onClick={() => onViewModeChange('editor')}
            className={`px-2 py-1 rounded transition text-[11px] ${
              viewMode === 'editor' ? 'bg-white text-emerald-800 font-bold shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            এডিটর
          </button>
        </div>

        {/* Minimal Engine Status Indicator */}
        <div 
          className="hidden lg:flex items-center gap-1.5 text-xs text-slate-500 font-mono select-none px-1"
          title="WebAssembly PHP 8.2 Runtime Ready"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="text-[11px] font-medium text-slate-600">Engine Ready</span>
        </div>

        {/* Clean Primary Run Action */}
        <button
          onClick={onRunCode}
          disabled={isRunning}
          className="flex items-center gap-1.5 bg-[#04AA6D] hover:bg-[#038555] text-white text-xs font-semibold px-3 sm:px-3.5 py-1.5 rounded-lg shadow-xs transition active:scale-95 disabled:opacity-50 cursor-pointer ml-1"
          title="কোড রান করুন (Ctrl + Enter)"
        >
          <Play className={`w-3.5 h-3.5 fill-current ${isRunning ? 'animate-spin' : ''}`} />
          <span>{isRunning ? 'Running...' : 'Run'}</span>
          <kbd className="hidden md:inline text-[10px] font-mono text-emerald-100 bg-emerald-800/40 px-1 rounded">
            Ctrl+↵
          </kbd>
        </button>
      </div>
    </header>
  );
};

