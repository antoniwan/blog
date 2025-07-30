// Clever local storage features for the blog

export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  fontSize: 'small' | 'medium' | 'large';
  readingMode: 'normal' | 'focus' | 'speed';
  autoSaveProgress: boolean;
  showReadingStats: boolean;
}

export interface SessionData {
  lastVisited: string;
  visitCount: number;
  totalTimeOnSite: number;
  favoriteCategories: string[];
  searchHistory: string[];
  readingStreak: number;
  lastReadDate: string;
}

export interface ReadingAnalytics {
  totalPostsRead: number;
  averageReadingTime: number;
  mostReadCategory: string;
  readingStreak: number;
  totalTimeSpent: number;
  devicePreference: 'mobile' | 'desktop' | 'tablet';
  timeOfDayPreference: 'morning' | 'afternoon' | 'evening' | 'night';
}

class LocalStorageManager {
  private readonly PREFERENCES_KEY = 'curious-chaos-preferences';
  private readonly SESSION_KEY = 'curious-chaos-session';
  private readonly ANALYTICS_KEY = 'curious-chaos-analytics';
  private readonly SEARCH_HISTORY_KEY = 'curious-chaos-search-history';
  private readonly BOOKMARKED_POSTS_KEY = 'curious-chaos-bookmarks';
  private readonly READING_GOALS_KEY = 'curious-chaos-goals';

  // User Preferences
  getPreferences(): UserPreferences {
    try {
      const stored = localStorage.getItem(this.PREFERENCES_KEY);
      return stored ? JSON.parse(stored) : this.getDefaultPreferences();
    } catch {
      return this.getDefaultPreferences();
    }
  }

  savePreferences(preferences: Partial<UserPreferences>): void {
    try {
      const current = this.getPreferences();
      const updated = { ...current, ...preferences };
      localStorage.setItem(this.PREFERENCES_KEY, JSON.stringify(updated));
    } catch (error) {
      console.warn('Failed to save preferences:', error);
    }
  }

  private getDefaultPreferences(): UserPreferences {
    return {
      theme: 'auto',
      fontSize: 'medium',
      readingMode: 'normal',
      autoSaveProgress: true,
      showReadingStats: true
    };
  }

  // Session Data
  getSessionData(): SessionData {
    try {
      const stored = localStorage.getItem(this.SESSION_KEY);
      return stored ? JSON.parse(stored) : this.getDefaultSessionData();
    } catch {
      return this.getDefaultSessionData();
    }
  }

  updateSessionData(updates: Partial<SessionData>): void {
    try {
      const current = this.getSessionData();
      const updated = { ...current, ...updates };
      localStorage.setItem(this.SESSION_KEY, JSON.stringify(updated));
    } catch (error) {
      console.warn('Failed to update session data:', error);
    }
  }

  private getDefaultSessionData(): SessionData {
    return {
      lastVisited: new Date().toISOString(),
      visitCount: 0,
      totalTimeOnSite: 0,
      favoriteCategories: [],
      searchHistory: [],
      readingStreak: 0,
      lastReadDate: ''
    };
  }

  // Search History
  addToSearchHistory(query: string): void {
    try {
      const history = this.getSearchHistory();
      const filtered = history.filter(item => item !== query);
      const updated = [query, ...filtered].slice(0, 10); // Keep last 10 searches
      localStorage.setItem(this.SEARCH_HISTORY_KEY, JSON.stringify(updated));
    } catch (error) {
      console.warn('Failed to save search history:', error);
    }
  }

  getSearchHistory(): string[] {
    try {
      const stored = localStorage.getItem(this.SEARCH_HISTORY_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  // Bookmarked Posts
  toggleBookmark(postSlug: string): boolean {
    try {
      const bookmarks = this.getBookmarkedPosts();
      const isBookmarked = bookmarks.includes(postSlug);
      
      if (isBookmarked) {
        const updated = bookmarks.filter(slug => slug !== postSlug);
        localStorage.setItem(this.BOOKMARKED_POSTS_KEY, JSON.stringify(updated));
        return false;
      } else {
        const updated = [...bookmarks, postSlug];
        localStorage.setItem(this.BOOKMARKED_POSTS_KEY, JSON.stringify(updated));
        return true;
      }
    } catch (error) {
      console.warn('Failed to toggle bookmark:', error);
      return false;
    }
  }

  getBookmarkedPosts(): string[] {
    try {
      const stored = localStorage.getItem(this.BOOKMARKED_POSTS_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  }

  isBookmarked(postSlug: string): boolean {
    return this.getBookmarkedPosts().includes(postSlug);
  }

  // Reading Goals
  setReadingGoal(goal: { postsPerWeek: number; minutesPerDay: number }): void {
    try {
      localStorage.setItem(this.READING_GOALS_KEY, JSON.stringify(goal));
    } catch (error) {
      console.warn('Failed to save reading goal:', error);
    }
  }

  getReadingGoal(): { postsPerWeek: number; minutesPerDay: number } {
    try {
      const stored = localStorage.getItem(this.READING_GOALS_KEY);
      return stored ? JSON.parse(stored) : { postsPerWeek: 3, minutesPerDay: 15 };
    } catch {
      return { postsPerWeek: 3, minutesPerDay: 15 };
    }
  }

  // Analytics
  updateAnalytics(readData: any): void {
    try {
      const analytics = this.getAnalytics();
      const timeOfDay = this.getTimeOfDay();
      const deviceType = this.getDeviceType();
      
      analytics.totalPostsRead++;
      analytics.totalTimeSpent += readData.readTime || 0;
      analytics.averageReadingTime = Math.round(analytics.totalTimeSpent / analytics.totalPostsRead);
      analytics.devicePreference = deviceType;
      analytics.timeOfDayPreference = timeOfDay;
      
      // Update reading streak
      const today = new Date().toDateString();
      const lastRead = new Date(readData.readAt).toDateString();
      
      if (lastRead === today) {
        analytics.readingStreak++;
      } else if (this.isConsecutiveDay(lastRead, analytics.lastReadDate)) {
        analytics.readingStreak++;
      } else {
        analytics.readingStreak = 1;
      }
      
      analytics.lastReadDate = today;
      
      localStorage.setItem(this.ANALYTICS_KEY, JSON.stringify(analytics));
    } catch (error) {
      console.warn('Failed to update analytics:', error);
    }
  }

  getAnalytics(): ReadingAnalytics {
    try {
      const stored = localStorage.getItem(this.ANALYTICS_KEY);
      return stored ? JSON.parse(stored) : this.getDefaultAnalytics();
    } catch {
      return this.getDefaultAnalytics();
    }
  }

  private getDefaultAnalytics(): ReadingAnalytics {
    return {
      totalPostsRead: 0,
      averageReadingTime: 0,
      mostReadCategory: '',
      readingStreak: 0,
      totalTimeSpent: 0,
      devicePreference: 'desktop',
      timeOfDayPreference: 'afternoon'
    };
  }

  private getTimeOfDay(): 'morning' | 'afternoon' | 'evening' | 'night' {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    if (hour < 21) return 'evening';
    return 'night';
  }

  private getDeviceType(): 'mobile' | 'desktop' | 'tablet' {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
  }

  private isConsecutiveDay(date1: string, date2: string): boolean {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2.getTime() - d1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 1;
  }

  // Utility methods
  clearAllData(): void {
    try {
      localStorage.removeItem(this.PREFERENCES_KEY);
      localStorage.removeItem(this.SESSION_KEY);
      localStorage.removeItem(this.ANALYTICS_KEY);
      localStorage.removeItem(this.SEARCH_HISTORY_KEY);
      localStorage.removeItem(this.BOOKMARKED_POSTS_KEY);
      localStorage.removeItem(this.READING_GOALS_KEY);
      localStorage.removeItem('curious-chaos-read-posts');
    } catch (error) {
      console.warn('Failed to clear data:', error);
    }
  }

  exportData(): string {
    try {
      const data = {
        preferences: this.getPreferences(),
        session: this.getSessionData(),
        analytics: this.getAnalytics(),
        searchHistory: this.getSearchHistory(),
        bookmarks: this.getBookmarkedPosts(),
        readingGoal: this.getReadingGoal(),
        readPosts: JSON.parse(localStorage.getItem('curious-chaos-read-posts') || '[]')
      };
      return JSON.stringify(data, null, 2);
    } catch (error) {
      console.warn('Failed to export data:', error);
      return '';
    }
  }
}

export const localStorageManager = new LocalStorageManager(); 