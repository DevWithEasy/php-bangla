import React, { useState } from 'react';
import { 
  Search, 
  ChevronRight, 
  ChevronDown, 
  X, 
  PanelLeftClose, 
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
  const categoriesList: TopicCategory[] = ['basic', 'forms', 'advanced', 'oop', 'mysql', 'ajax', 'architect'];

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
          className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-2xs transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 bg-white border-r border-slate-200/90 flex flex-col shrink-0 overflow-hidden transition-all duration-200 ease-in-out select-none shadow-xl lg:shadow-none ${
          isOpen
            ? 'w-72 sm:w-76 lg:w-72 translate-x-0 opacity-100'
            : '-translate-x-full lg:translate-x-0 lg:w-0 lg:opacity-0 lg:border-r-0 pointer-events-none'
        }`}
      >
        {/* Minimal Search & Control Header */}
        <div className="p-2.5 border-b border-slate-200/80 bg-slate-50/50 shrink-0">
          <div className="flex items-center gap-1.5">
            {/* Search Input Box */}
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="টপিক বা কনসেপ্ট খুঁজুন..."
                className="w-full text-xs py-1.5 pl-8 pr-7 bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-[#04AA6D] focus:ring-1 focus:ring-[#04AA6D] transition placeholder:text-slate-400 text-slate-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-2 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Expand/Collapse Toggle */}
            <button
              onClick={areAllCollapsed ? expandAll : collapseAll}
              title={areAllCollapsed ? 'সব ক্যাটাগরি খুলুন' : 'সব ক্যাটাগরি বন্ধ করুন'}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition cursor-pointer border border-transparent hover:border-slate-200 shrink-0"
            >
              {areAllCollapsed ? (
                <ListTree className="w-3.5 h-3.5 text-emerald-700" />
              ) : (
                <ListCollapse className="w-3.5 h-3.5 text-slate-600" />
              )}
            </button>

            {/* Mobile Close Button */}
            <button
              onClick={onClose}
              title="সাইডবার লুকান"
              className="lg:hidden p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 transition cursor-pointer shrink-0"
            >
              <PanelLeftClose className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Topics Navigation List (Collapsible Accordion) */}
        <div className="flex-1 overflow-y-auto divide-y divide-slate-100/80">
          {categoriesList.map((catKey) => {
            const catMeta = CATEGORIES[catKey];
            const catTopics = filteredTopics.filter((t) => t.category === catKey);

            if (catTopics.length === 0) return null;

            const isArchitect = catKey === 'architect';
            const isCollapsed = !searchQuery && Boolean(collapsedCategories[catKey]);

            return (
              <div key={catKey}>
                {/* Clickable Collapsible Category Header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(catKey)}
                  className={`w-full px-3 py-2 text-left flex items-center justify-between transition group cursor-pointer hover:bg-slate-50 ${
                    isCollapsed ? 'bg-white' : 'bg-slate-50/40'
                  }`}
                  title={`${catMeta.nameBn}`}
                >
                  <div className="flex items-center gap-1.5 truncate pr-1">
                    {isCollapsed ? (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 shrink-0 transition-transform" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-emerald-700 shrink-0 transition-transform" />
                    )}
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider truncate ${
                        isArchitect ? 'text-emerald-900 font-extrabold' : 'text-slate-700 group-hover:text-slate-900'
                      }`}
                    >
                      {catMeta.nameEn}
                    </span>
                  </div>

                  <span className="text-[10px] text-slate-400 font-mono font-medium">
                    {catTopics.length}
                  </span>
                </button>

                {/* Sub-list of Topics */}
                {!isCollapsed && (
                  <nav className="flex flex-col text-xs font-medium text-slate-700 py-0.5">
                    {catTopics.map((topic) => {
                      const isSelected = topic.id === selectedTopicId;
                      return (
                        <button
                          key={topic.id}
                          onClick={() => {
                            onSelectTopic(topic.id);
                            if (window.innerWidth < 1024) {
                              onClose();
                            }
                          }}
                          className={`text-left px-3.5 py-1.5 flex items-center justify-between transition group cursor-pointer ${
                            isSelected
                              ? 'bg-[#04AA6D] text-white font-semibold shadow-2xs'
                              : 'hover:bg-slate-100/80 hover:text-slate-900 text-slate-700'
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
                          {isSelected && (
                            <span className="text-[10px] text-emerald-100 font-mono shrink-0">
                              Active
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </nav>
                )}
              </div>
            );
          })}

          {filteredTopics.length === 0 && (
            <div className="p-6 text-center text-xs text-slate-400">
              কোনো টপিক খুঁজে পাওয়া যায়নি।
            </div>
          )}
        </div>

        {/* Minimal Clean Sidebar Footer */}
        <div className="px-3 py-2 bg-slate-50/70 border-t border-slate-200/80 text-[11px] text-slate-500 flex items-center justify-between shrink-0">
          <span className="font-mono text-[10px] text-slate-500">
            {filteredTopics.length} Topics Ready
          </span>
          <span className="text-emerald-700 font-semibold text-[10px] font-mono">
            PHP 8.2 Wasm
          </span>
        </div>
      </aside>
    </>
  );
};
