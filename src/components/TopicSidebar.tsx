import React, { useState } from 'react';
import { 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Zap, 
  X, 
  PanelLeftClose, 
  FolderOpen, 
  FolderClosed,
  ChevronsUpDown,
  ListCollapse,
  ListTree
} from 'lucide-react';
import { TopicItem, TopicCategory } from '../types';
import { CATEGORIES } from '../data';

interface TopicSidebarProps {
  topics: TopicItem[];
  selectedTopicId: string;
  onSelectTopic: (topicId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const TopicSidebar: React.FC<TopicSidebarProps> = ({
  topics,
  selectedTopicId,
  onSelectTopic,
  isOpen,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  // Map of category -> boolean (true = collapsed/hidden)
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  // Filter topics based on search
  const filteredTopics = topics.filter((t) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      t.title.toLowerCase().includes(q) ||
      t.subtitleBn.toLowerCase().includes(q) ||
      t.tag.toLowerCase().includes(q) ||
      t.category.toLowerCase().includes(q)
    );
  });

  // Group topics by category
  const categoriesList: TopicCategory[] = ['basic', 'forms', 'advanced', 'oop', 'mysql', 'architect'];

  const toggleCategory = (catKey: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [catKey]: !prev[catKey],
    }));
  };

  const expandAll = () => {
    setCollapsedCategories({});
  };

  const collapseAll = () => {
    const allCollapsed: Record<string, boolean> = {};
    categoriesList.forEach((c) => {
      allCollapsed[c] = true;
    });
    setCollapsedCategories(allCollapsed);
  };

  const areAllCollapsed = categoriesList.every((c) => collapsedCategories[c]);

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 bg-white border-r border-slate-200 flex flex-col shrink-0 overflow-hidden transition-all duration-200 ease-in-out shadow-xl lg:shadow-none ${
          isOpen
            ? 'w-72 sm:w-80 lg:w-72 translate-x-0 opacity-100'
            : '-translate-x-full lg:translate-x-0 lg:w-0 lg:opacity-0 lg:border-r-0 pointer-events-none'
        }`}
      >
        {/* Search & Action Header */}
        <div className="p-3 border-b border-slate-200 bg-slate-50/80 shrink-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xs text-slate-800 tracking-tight">
                টপিক ক্যাটাগরি ও সূচিপত্র
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-100 text-emerald-800 font-semibold">
                {filteredTopics.length}
              </span>
            </div>

            <div className="flex items-center gap-1">
              {/* Expand / Collapse All Categories Toggle */}
              <button
                onClick={areAllCollapsed ? expandAll : collapseAll}
                title={areAllCollapsed ? 'সকল ক্যাটাগরি খুলুন' : 'সকল ক্যাটাগরি বন্ধ করুন'}
                className="p-1 rounded text-slate-500 hover:text-slate-800 hover:bg-slate-200/70 transition flex items-center gap-1 text-[11px]"
              >
                {areAllCollapsed ? (
                  <>
                    <ListTree className="w-3.5 h-3.5 text-emerald-700" />
                    <span className="hidden sm:inline font-medium text-[10px]">সব খুলুন</span>
                  </>
                ) : (
                  <>
                    <ListCollapse className="w-3.5 h-3.5 text-slate-600" />
                    <span className="hidden sm:inline font-medium text-[10px]">সব বন্ধ</span>
                  </>
                )}
              </button>

              {/* Close / Hide Sidebar Button */}
              <button
                onClick={onClose}
                title="টপিক প্যানেল লুকান (Hide Sidebar)"
                className="p-1 rounded text-slate-500 hover:text-slate-800 hover:bg-slate-200/70 transition cursor-pointer"
              >
                <PanelLeftClose className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Search Input Box */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="টপিক বা কনসেপ্ট খুঁজুন..."
              className="w-full text-xs py-1.5 pl-8 pr-3 bg-white border border-slate-300 rounded-md focus:outline-none focus:border-[#04AA6D] focus:ring-1 focus:ring-[#04AA6D] transition placeholder:text-slate-400"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          </div>
        </div>

        {/* Scrollable Topics Navigation List (Collapsible Accordion) */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
          {categoriesList.map((catKey) => {
            const catMeta = CATEGORIES[catKey];
            const catTopics = filteredTopics.filter((t) => t.category === catKey);

            if (catTopics.length === 0) return null;

            const isArchitect = catKey === 'architect';
            const isCollapsed = !searchQuery && Boolean(collapsedCategories[catKey]);

            return (
              <div key={catKey} className={`${isArchitect ? 'bg-emerald-50/30' : ''}`}>
                {/* Clickable Collapsible Category Header Button */}
                <button
                  type="button"
                  onClick={() => toggleCategory(catKey)}
                  className={`w-full px-3.5 py-2.5 text-left flex items-center justify-between transition group cursor-pointer hover:bg-slate-100/70 ${
                    isCollapsed ? 'bg-slate-50/50' : ''
                  }`}
                  title={`${catMeta.nameBn} - ${isCollapsed ? 'খুলতে ক্লিক করুন' : 'লুকাতে ক্লিক করুন'}`}
                >
                  <div className="flex items-center gap-2 truncate pr-1">
                    {isCollapsed ? (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 shrink-0 transition-transform" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-emerald-700 shrink-0 transition-transform" />
                    )}
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider truncate ${
                        isArchitect ? 'text-emerald-900 font-black' : 'text-slate-700 group-hover:text-slate-900'
                      }`}
                    >
                      {catMeta.nameEn}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-[10px] text-slate-500 font-mono">
                      {catTopics.length}টি
                    </span>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-semibold ${
                        isArchitect
                          ? 'bg-emerald-200/70 text-emerald-900 border border-emerald-300'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {catMeta.badge}
                    </span>
                  </div>
                </button>

                {/* Sub-list of Topics (Collapsible) */}
                {!isCollapsed && (
                  <nav className="flex flex-col text-xs font-medium text-slate-700 pb-1 pl-1">
                    {catTopics.map((topic) => {
                      const isSelected = topic.id === selectedTopicId;
                      return (
                        <button
                          key={topic.id}
                          onClick={() => {
                            onSelectTopic(topic.id);
                            // On mobile view, auto-close sidebar after selection
                            if (window.innerWidth < 1024) {
                              onClose();
                            }
                          }}
                          className={`text-left px-3.5 py-1.5 flex items-center justify-between transition group cursor-pointer ${
                            isSelected
                              ? 'bg-[#04AA6D] text-white font-semibold shadow-2xs rounded-l-md'
                              : 'hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate pr-1">
                            <span
                              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                isSelected ? 'bg-white' : 'bg-slate-300 group-hover:bg-[#04AA6D]'
                              }`}
                            />
                            <span className="truncate">{topic.title}</span>
                          </div>
                          <ChevronRight
                            className={`w-3 h-3 shrink-0 transition-transform ${
                              isSelected ? 'text-white translate-x-0.5' : 'text-slate-300 group-hover:text-slate-600'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </nav>
                )}
              </div>
            );
          })}

          {filteredTopics.length === 0 && (
            <div className="p-6 text-center text-xs text-slate-500">
              কোনো টপিক খুঁজে পাওয়া যায়নি।
            </div>
          )}
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500 shrink-0">
          <div className="font-semibold text-slate-700 flex items-center justify-between">
            <span className="flex items-center gap-1">
              <span className="text-emerald-600">⚡</span> WebAssembly Engine
            </span>
            <span className="text-emerald-700 font-semibold text-[10px]">PHP 8.2</span>
          </div>
          <p className="text-[10px] text-slate-500 mt-0.5">
            টপিকের যেকোনো সেকশন ক্লিক করে খুলুন বা বন্ধ করুন।
          </p>
        </div>
      </aside>
    </>
  );
};
