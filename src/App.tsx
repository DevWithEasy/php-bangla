import React, { useState, useEffect, useCallback } from 'react';
import { PanelRightOpen, Code2 } from 'lucide-react';
import { Header } from './components/Header';
import { TopicSidebar } from './components/TopicSidebar';
import { TopicDetails } from './components/TopicDetails';
import { CodeEditor } from './components/CodeEditor';
import { PresentationMode } from './components/PresentationMode';
import { SplashScreen } from './components/SplashScreen';
import { HomeScreen } from './components/HomeScreen';
import { ALL_TOPICS, getTopicById, getAdjacentTopics } from './data';
import { runPhpCode, subscribeEngineStatus, EngineStatus } from './services/phpRunner';
import { 
  getLastTopicId, 
  saveLastTopic, 
  getVisitedTopics, 
  getLastVisitedTime, 
  formatTimeAgo, 
  resetProgress 
} from './utils/progressTracker';
import { CodeExecutionResult, ViewMode } from './types';

type AppScreen = 'splash' | 'home' | 'workspace';

export default function App() {
  // Screen Management (Splash -> Home -> Workspace)
  const [appScreen, setAppScreen] = useState<AppScreen>(() => {
    if (typeof window === 'undefined') return 'home';
    const seen = sessionStorage.getItem('php_mastery_splash_seen');
    return seen ? 'home' : 'splash';
  });

  // Tracked previous topic and user progress
  const [lastTopicId, setLastTopicId] = useState<string | null>(() => getLastTopicId());
  const [visitedTopics, setVisitedTopics] = useState<string[]>(() => getVisitedTopics());
  const [lastVisitedDate, setLastVisitedDate] = useState<string | null>(() => getLastVisitedTime());

  // Active topic & editor code
  const initialTopicId = lastTopicId && getTopicById(lastTopicId) ? lastTopicId : 'php-home';
  const [selectedTopicId, setSelectedTopicId] = useState<string>(initialTopicId);
  const [currentTopic, setCurrentTopic] = useState(() => getTopicById(initialTopicId));
  const [editorCode, setEditorCode] = useState<string>(() => currentTopic.sampleCode);

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [executionResult, setExecutionResult] = useState<CodeExecutionResult | null>(null);
  const [engineStatus, setEngineStatus] = useState<EngineStatus>('uninitialized');
  const [statusMessage, setStatusMessage] = useState<string | undefined>();
  const [viewMode, setViewMode] = useState<ViewMode>('all');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(() => 
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );
  const [isEditorVisible, setIsEditorVisible] = useState<boolean>(true);
  const [isPresentationOpen, setIsPresentationOpen] = useState<boolean>(false);

  // Dynamic Editor Width State (Resizing Left/Right)
  const [editorWidth, setEditorWidth] = useState<number>(520);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  // Subscribe to WebAssembly Engine status
  useEffect(() => {
    const unsubscribe = subscribeEngineStatus((status, msg) => {
      setEngineStatus(status);
      setStatusMessage(msg);
    });
    return unsubscribe;
  }, []);

  // Select topic, sync editor code, and update persistence
  const handleSelectTopic = useCallback((topicId: string) => {
    const topic = getTopicById(topicId);
    setSelectedTopicId(topicId);
    setCurrentTopic(topic);
    setEditorCode(topic.sampleCode);
    setExecutionResult(null);

    // Persist progress
    saveLastTopic(topicId);
    setLastTopicId(topicId);
    setVisitedTopics(getVisitedTopics());
    setLastVisitedDate(new Date().toISOString());
  }, []);

  // Start learning from Home or Splash
  const handleStartLearning = useCallback((topicId?: string) => {
    const targetId = topicId || lastTopicId || 'php-home';
    handleSelectTopic(targetId);
    sessionStorage.setItem('php_mastery_splash_seen', 'true');
    setAppScreen('workspace');
  }, [lastTopicId, handleSelectTopic]);

  const handleGoToHome = useCallback(() => {
    sessionStorage.setItem('php_mastery_splash_seen', 'true');
    setAppScreen('home');
  }, []);

  const handleResetProgress = useCallback(() => {
    resetProgress();
    setLastTopicId(null);
    setVisitedTopics([]);
    setLastVisitedDate(null);
  }, []);

  // Reset code to current topic's default sample
  const handleResetCode = useCallback(() => {
    setEditorCode(currentTopic.sampleCode);
  }, [currentTopic.sampleCode]);

  // Load code directly from Details or Slides to the right editor and automatically run it
  const handleLoadCodeToEditor = useCallback((code: string) => {
    let normalizedCode = code.trim();
    // If code is pure PHP statements without <?php tag and without HTML markup, wrap it in <?php ... ?>
    if (
      !normalizedCode.startsWith('<?php') &&
      !normalizedCode.startsWith('<html') &&
      !normalizedCode.startsWith('<!DOCTYPE') &&
      !normalizedCode.startsWith('<form') &&
      !normalizedCode.startsWith('<div') &&
      !normalizedCode.startsWith('<script') &&
      (normalizedCode.includes('$') ||
        normalizedCode.startsWith('echo ') ||
        normalizedCode.startsWith('function ') ||
        normalizedCode.startsWith('class ') ||
        normalizedCode.startsWith('try ') ||
        normalizedCode.startsWith('if ') ||
        normalizedCode.startsWith('for ') ||
        normalizedCode.startsWith('foreach '))
    ) {
      normalizedCode = `<?php\n${normalizedCode}\n?>`;
    }

    setEditorCode(normalizedCode);
    setIsEditorVisible(true);
    if (viewMode === 'doc') {
      setViewMode('all');
    }

    // Auto-run newly loaded snippet
    setIsRunning(true);
    runPhpCode(normalizedCode)
      .then((res) => {
        setExecutionResult(res);
      })
      .catch((err: any) => {
        setExecutionResult({
          stdout: '',
          stderr: err?.message || 'Execution error',
          exitCode: 1,
          durationMs: 0,
          renderedHtml: `<p style="color:red;">Error: ${err?.message}</p>`,
          isError: true,
        });
      })
      .finally(() => {
        setIsRunning(false);
      });
  }, [viewMode]);

  // Run PHP Code via WebAssembly Engine
  const handleRunCode = useCallback(async () => {
    if (isRunning) return;
    setIsRunning(true);
    try {
      const result = await runPhpCode(editorCode);
      setExecutionResult(result);
    } catch (err: any) {
      setExecutionResult({
        stdout: '',
        stderr: err?.message || 'Execution error',
        exitCode: 1,
        durationMs: 0,
        renderedHtml: `<p style="color:red;">Error: ${err?.message}</p>`,
        isError: true,
      });
    } finally {
      setIsRunning(false);
    }
  }, [editorCode, isRunning]);

  // Initial code run on first launch
  useEffect(() => {
    handleRunCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Navigation info (prev/next)
  const { prev, next, index, total } = getAdjacentTopics(selectedTopicId);

  const handleToggleEditor = useCallback(() => {
    setIsEditorVisible((prev) => {
      const next = !prev;
      if (next && viewMode === 'doc') {
        setViewMode('all');
      }
      return next;
    });
  }, [viewMode]);

  // Keyboard shortcut to launch presentation mode ('p' when not editing code)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.key === 'p' || e.key === 'P') && !isPresentationOpen) {
        const target = e.target as HTMLElement;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          setIsPresentationOpen(true);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isPresentationOpen]);

  // Handle Dragging to Resize Editor Left & Right
  const startResizing = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  useEffect(() => {
    if (!isResizing) return;

    const handleMouseMove = (e: MouseEvent) => {
      const newWidth = window.innerWidth - e.clientX;
      const minWidth = 320;
      const maxAllowed = Math.max(minWidth, window.innerWidth - (sidebarOpen ? 290 : 40) - 360);
      const clamped = Math.min(Math.max(newWidth, minWidth), maxAllowed);
      setEditorWidth(clamped);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const clientX = e.touches[0].clientX;
      const newWidth = window.innerWidth - clientX;
      const minWidth = 300;
      const maxAllowed = Math.max(minWidth, window.innerWidth - 300);
      const clamped = Math.min(Math.max(newWidth, minWidth), maxAllowed);
      setEditorWidth(clamped);
    };

    const stopResizing = () => {
      setIsResizing(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopResizing);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', stopResizing);

    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'col-resize';

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopResizing);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', stopResizing);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };
  }, [isResizing, sidebarOpen]);

  // SCREEN 1: SPLASH SCREEN (Shown on initial visit)
  if (appScreen === 'splash') {
    return (
      <SplashScreen
        onStartLearning={handleStartLearning}
        onGoToHome={handleGoToHome}
        lastTopic={lastTopicId ? getTopicById(lastTopicId) : null}
        lastVisitedTimeText={formatTimeAgo(lastVisitedDate)}
      />
    );
  }

  // SCREEN 2: HOME & ABOUT SCREEN (Overview, curriculum, trainer info, resume banner)
  if (appScreen === 'home') {
    return (
      <div className="min-h-screen w-full overflow-y-auto bg-slate-50">
        <HomeScreen
          onStartLearning={handleStartLearning}
          onOpenPresentation={() => setIsPresentationOpen(true)}
          lastTopic={lastTopicId ? getTopicById(lastTopicId) : null}
          lastVisitedTimeText={formatTimeAgo(lastVisitedDate)}
          visitedTopics={visitedTopics}
          onResetProgress={handleResetProgress}
        />
        {/* Presentation Modal if opened from Home */}
        {isPresentationOpen && (
          <PresentationMode
            topic={currentTopic}
            onClose={() => setIsPresentationOpen(false)}
            onLoadCodeToEditor={(code) => {
              handleLoadCodeToEditor(code);
              setAppScreen('workspace');
            }}
            onNavigateTopic={handleSelectTopic}
            prevTopic={prev}
            nextTopic={next}
          />
        )}
      </div>
    );
  }

  // SCREEN 3: INTERACTIVE LEARNING WORKSPACE (3-Column layout with resizer)
  return (
    <div className="h-screen w-full flex flex-col antialiased bg-slate-50 text-slate-800 font-sans overflow-hidden">
      {/* 1. Global Header */}
      <Header
        engineStatus={engineStatus}
        statusMessage={statusMessage}
        onRunCode={handleRunCode}
        isRunning={isRunning}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        sidebarOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
        isEditorVisible={isEditorVisible}
        onToggleEditor={handleToggleEditor}
        onOpenPresentation={() => setIsPresentationOpen(true)}
        onGoToHome={handleGoToHome}
      />

      {/* 2. Main Layout with Resizable Panels */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* COLUMN 1: LEFT SIDEBAR (Topics List & Accordions) */}
        <TopicSidebar
          topics={ALL_TOPICS}
          selectedTopicId={selectedTopicId}
          onSelectTopic={handleSelectTopic}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* COLUMN 2: CENTER (In-Details Documentation in Bengali) */}
        <div
          className={`flex-1 flex flex-col overflow-hidden transition-all duration-200 min-w-0 ${
            viewMode === 'editor' ? 'hidden xl:flex' : 'flex'
          }`}
        >
          <TopicDetails
            topic={currentTopic}
            prevTopic={prev}
            nextTopic={next}
            currentIndex={index}
            totalTopics={total}
            onNavigate={handleSelectTopic}
            onLoadCodeToEditor={handleLoadCodeToEditor}
            isEditorVisible={isEditorVisible}
            onToggleEditor={() => setIsEditorVisible(true)}
            onOpenPresentation={() => setIsPresentationOpen(true)}
          />
        </div>

        {/* DRAGGABLE RESIZER HANDLE (Resize Editor Left & Right) */}
        {isEditorVisible && viewMode === 'all' && (
          <div
            onMouseDown={startResizing}
            onTouchStart={startResizing}
            onDoubleClick={() => setEditorWidth(520)}
            title="মাউস টেনে ডানে বা বামে এডিটর বড়-ছোট করুন (ডাবল ক্লিকে রিসেট)"
            className={`hidden xl:flex items-center justify-center w-3 hover:w-3.5 -mx-1.5 z-30 cursor-col-resize group select-none shrink-0 transition-colors ${
              isResizing ? 'bg-[#04AA6D]' : 'hover:bg-emerald-500/80 bg-transparent'
            }`}
          >
            {/* Visual Center Grip Bar */}
            <div
              className={`h-12 w-1.5 rounded-full transition-all flex flex-col items-center justify-center gap-0.5 shadow-xs ${
                isResizing
                  ? 'bg-white ring-2 ring-[#04AA6D]'
                  : 'bg-slate-300 group-hover:bg-white group-hover:scale-y-125'
              }`}
            >
              <div className="w-0.5 h-0.5 rounded-full bg-slate-500" />
              <div className="w-0.5 h-0.5 rounded-full bg-slate-500" />
              <div className="w-0.5 h-0.5 rounded-full bg-slate-500" />
            </div>
          </div>
        )}

        {/* COLUMN 3: RIGHT SIDE (Live Code Editor & WebAssembly Runner) */}
        {isEditorVisible ? (
          <div
            style={{
              width:
                typeof window !== 'undefined' && window.innerWidth >= 1280 && viewMode === 'all'
                  ? `${editorWidth}px`
                  : undefined,
            }}
            className={`flex flex-col shrink-0 overflow-hidden ${
              viewMode === 'doc' ? 'hidden xl:flex' : 'flex'
            } ${viewMode === 'all' ? 'xl:w-auto w-full' : 'flex-1 w-full'}`}
          >
            <CodeEditor
              code={editorCode}
              onChangeCode={setEditorCode}
              onResetCode={handleResetCode}
              onRunCode={handleRunCode}
              isRunning={isRunning}
              executionResult={executionResult}
              onClearConsole={() => setExecutionResult(null)}
              onCloseEditor={() => setIsEditorVisible(false)}
            />
          </div>
        ) : (
          /* Slim vertical expand handle when editor is hidden on large screens */
          <div className="hidden xl:flex flex-col justify-center items-center w-9 bg-slate-100 hover:bg-slate-200 border-l border-slate-300 transition shrink-0">
            <button
              onClick={() => setIsEditorVisible(true)}
              title="কোড এডিটর ওপেন করুন (Open Code Editor)"
              className="w-full h-full flex flex-col items-center justify-center gap-3 text-slate-600 hover:text-emerald-700 py-6 group cursor-pointer"
            >
              <PanelRightOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-bold tracking-widest uppercase [writing-mode:vertical-lr] rotate-180 select-none">
                Open Editor
              </span>
              <Code2 className="w-3.5 h-3.5 text-emerald-600" />
            </button>
          </div>
        )}
      </div>

      {/* 3. Classroom Presentation Slides Mode Modal */}
      {isPresentationOpen && (
        <PresentationMode
          topic={currentTopic}
          onClose={() => setIsPresentationOpen(false)}
          onLoadCodeToEditor={handleLoadCodeToEditor}
          onNavigateTopic={handleSelectTopic}
          prevTopic={prev}
          nextTopic={next}
        />
      )}
    </div>
  );
}


