const LAST_TOPIC_KEY = 'php_mastery_last_topic';
const VISITED_TOPICS_KEY = 'php_mastery_visited_topics';
const LAST_VISITED_TIME_KEY = 'php_mastery_last_visited_time';

export function getLastTopicId(): string | null {
  try {
    return localStorage.getItem(LAST_TOPIC_KEY);
  } catch {
    return null;
  }
}

export function saveLastTopic(id: string): void {
  try {
    localStorage.setItem(LAST_TOPIC_KEY, id);
    localStorage.setItem(LAST_VISITED_TIME_KEY, new Date().toISOString());
    markTopicVisited(id);
  } catch {
    // Ignore quota/private mode errors
  }
}

export function getVisitedTopics(): string[] {
  try {
    const raw = localStorage.getItem(VISITED_TOPICS_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function markTopicVisited(id: string): string[] {
  try {
    const current = getVisitedTopics();
    if (!current.includes(id)) {
      const updated = [...current, id];
      localStorage.setItem(VISITED_TOPICS_KEY, JSON.stringify(updated));
      return updated;
    }
    return current;
  } catch {
    return [];
  }
}

export function getLastVisitedTime(): string | null {
  try {
    return localStorage.getItem(LAST_VISITED_TIME_KEY);
  } catch {
    return null;
  }
}

export function formatTimeAgo(isoString: string | null): string {
  if (!isoString) return '';
  try {
    const diff = Date.now() - new Date(isoString).getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    if (minutes < 1) return 'এইমাত্র';
    if (minutes < 60) return `${minutes} মিনিট আগে`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} ঘণ্টা আগে`;
    const days = Math.floor(hours / 24);
    return `${days} দিন আগে`;
  } catch {
    return '';
  }
}

export function resetProgress(): void {
  try {
    localStorage.removeItem(LAST_TOPIC_KEY);
    localStorage.removeItem(VISITED_TOPICS_KEY);
    localStorage.removeItem(LAST_VISITED_TIME_KEY);
  } catch {
    // Ignore
  }
}
