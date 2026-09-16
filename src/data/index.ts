import { TopicItem, TopicCategory } from '../types';
import { CATEGORIES } from './categories';
import { BASIC_TOPICS } from './basicTopics';
import { FORMS_TOPICS } from './formsTopics';
import { ADVANCED_TOPICS } from './advancedTopics';
import { OOP_TOPICS } from './oopTopics';
import { MYSQL_TOPICS } from './mysqlTopics';
import { AJAX_TOPICS } from './ajaxTopics';
import { ARCHITECT_TOPICS } from './architectTopics';

export { CATEGORIES };

// Combine all topic arrays into a unified dataset
export const ALL_TOPICS: TopicItem[] = [
  ...BASIC_TOPICS,
  ...FORMS_TOPICS,
  ...ADVANCED_TOPICS,
  ...OOP_TOPICS,
  ...MYSQL_TOPICS,
  ...AJAX_TOPICS,
  ...ARCHITECT_TOPICS
];

// Helper: Group topics by category
export const TOPICS_BY_CATEGORY: Record<TopicCategory, TopicItem[]> = {
  basic: BASIC_TOPICS,
  forms: FORMS_TOPICS,
  advanced: ADVANCED_TOPICS,
  oop: OOP_TOPICS,
  mysql: MYSQL_TOPICS,
  ajax: AJAX_TOPICS,
  architect: ARCHITECT_TOPICS
};

// Helper: Get topic by ID
export function getTopicById(id: string): TopicItem {
  return ALL_TOPICS.find((t) => t.id === id) || ALL_TOPICS[0];
}

// Helper: Get previous and next topics for navigation
export function getAdjacentTopics(currentId: string): { prev: TopicItem | null; next: TopicItem | null; index: number; total: number } {
  const index = ALL_TOPICS.findIndex((t) => t.id === currentId);
  const safeIndex = index === -1 ? 0 : index;
  return {
    prev: safeIndex > 0 ? ALL_TOPICS[safeIndex - 1] : null,
    next: safeIndex < ALL_TOPICS.length - 1 ? ALL_TOPICS[safeIndex + 1] : null,
    index: safeIndex + 1,
    total: ALL_TOPICS.length
  };
}

// Helper: Search topics by query (matches title, subtitle, tag, or code)
export function searchTopics(query: string): TopicItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return ALL_TOPICS;

  return ALL_TOPICS.filter((topic) => {
    return (
      topic.title.toLowerCase().includes(q) ||
      topic.tag.toLowerCase().includes(q) ||
      topic.subtitleBn.toLowerCase().includes(q) ||
      topic.category.toLowerCase().includes(q) ||
      topic.sampleCode.toLowerCase().includes(q)
    );
  });
}
