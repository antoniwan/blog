/**
 * Singleton service for managing read state across the application
 * 
 * This service provides a centralized way to:
 * - Check if a post is read
 * - Get read data for a post
 * - Listen to read state changes
 * - Automatically sync with localStorage
 */

import { STORAGE_KEYS, STORAGE_EVENTS, TIMING } from '../config/storage';

export interface ReadData {
  postSlug: string;
  readAt: string;
  readTime?: number;
  scrollDepth?: number;
  deviceInfo?: {
    userAgent: string;
    screenSize: string;
    timezone: string;
  };
}

type ReadStateChangeCallback = (postSlug: string, isRead: boolean, readData: ReadData | null) => void;
type AllReadStateChangeCallback = () => void;

class ReadStateService {
  private static instance: ReadStateService | null = null;
  private readDataCache: ReadData[] | null = null;
  private subscribers: Set<ReadStateChangeCallback> = new Set();
  private allStateSubscribers: Set<AllReadStateChangeCallback> = new Set();
  private boundStorageHandler: (event: StorageEvent) => void;
  private boundDataUpdatedHandler: (event: CustomEvent | Event) => void;

  private constructor() {
    this.boundStorageHandler = this.handleStorageChange.bind(this);
    this.boundDataUpdatedHandler = this.handleDataUpdated.bind(this);
    this.init();
  }

  /**
   * Get the singleton instance
   */
  static getInstance(): ReadStateService {
    if (!ReadStateService.instance) {
      ReadStateService.instance = new ReadStateService();
    }
    return ReadStateService.instance;
  }

  /**
   * Initialize event listeners
   */
  private init(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('storage', this.boundStorageHandler);
    window.addEventListener(STORAGE_EVENTS.READING_DATA_UPDATED, this.boundDataUpdatedHandler as EventListener);
    window.addEventListener(STORAGE_EVENTS.POST_READ, this.boundDataUpdatedHandler as EventListener);
    window.addEventListener(STORAGE_EVENTS.READ_POSTS_CLEARED, this.boundDataUpdatedHandler as EventListener);
  }

  /**
   * Cleanup event listeners
   */
  cleanup(): void {
    if (typeof window === 'undefined') return;

    window.removeEventListener('storage', this.boundStorageHandler);
    window.removeEventListener(STORAGE_EVENTS.READING_DATA_UPDATED, this.boundDataUpdatedHandler as EventListener);
    window.removeEventListener(STORAGE_EVENTS.POST_READ, this.boundDataUpdatedHandler as EventListener);
    window.removeEventListener(STORAGE_EVENTS.READ_POSTS_CLEARED, this.boundDataUpdatedHandler as EventListener);
  }

  /**
   * Load read posts from localStorage
   */
  private loadReadPosts(): ReadData[] {
    if (this.readDataCache !== null) {
      return this.readDataCache;
    }

    try {
      const stored =
        localStorage.getItem(STORAGE_KEYS.READ_POSTS) ||
        localStorage.getItem(STORAGE_KEYS.READ_POSTS_LEGACY);
      
      if (!stored) {
        this.readDataCache = [];
        return this.readDataCache;
      }

      const parsed = JSON.parse(stored);

      if (!Array.isArray(parsed)) {
        this.readDataCache = [];
        return this.readDataCache;
      }

      const validData = parsed.filter((item) => {
        if (!item || typeof item !== 'object') return false;
        const hasValidSlug = typeof item.postSlug === 'string' && item.postSlug.trim().length > 0;
        const hasValidDate = typeof item.readAt === 'string' && !isNaN(Date.parse(item.readAt));
        return hasValidSlug && hasValidDate;
      });

      this.readDataCache = validData;
      return this.readDataCache;
    } catch (error) {
      this.readDataCache = [];
      return this.readDataCache;
    }
  }

  /**
   * Invalidate cache (call after external changes)
   */
  private invalidateCache(): void {
    this.readDataCache = null;
  }

  /**
   * Check if a post is read
   */
  isRead(postSlug: string): boolean {
    const readData = this.loadReadPosts();
    return readData.some((data) => data.postSlug === postSlug);
  }

  /**
   * Get read data for a specific post
   */
  getReadData(postSlug: string): ReadData | null {
    const readData = this.loadReadPosts();
    return readData.find((data) => data.postSlug === postSlug) || null;
  }

  /**
   * Get all read posts
   */
  getAllReadPosts(): ReadData[] {
    return [...this.loadReadPosts()];
  }

  /**
   * Subscribe to read state changes for a specific post
   */
  subscribe(callback: ReadStateChangeCallback): () => void {
    this.subscribers.add(callback);
    return () => {
      this.subscribers.delete(callback);
    };
  }

  /**
   * Subscribe to all read state changes
   */
  subscribeToAll(callback: AllReadStateChangeCallback): () => void {
    this.allStateSubscribers.add(callback);
    return () => {
      this.allStateSubscribers.delete(callback);
    };
  }

  /**
   * Notify subscribers of a state change
   */
  private notifySubscribers(postSlug: string | null = null): void {
    if (postSlug) {
      const readData = this.getReadData(postSlug);
      const isRead = readData !== null;
      
      this.subscribers.forEach((callback) => {
        try {
          callback(postSlug, isRead, readData);
        } catch (error) {
          console.error('Error in read state subscriber:', error);
        }
      });
    }

    this.allStateSubscribers.forEach((callback) => {
      try {
        callback();
      } catch (error) {
        console.error('Error in all-state subscriber:', error);
      }
    });
  }

  /**
   * Handle storage events (cross-tab synchronization)
   */
  private handleStorageChange(event: StorageEvent): void {
    if (STORAGE_KEYS.READ_POSTS === event.key || STORAGE_KEYS.READ_POSTS_LEGACY === event.key) {
      setTimeout(() => {
        this.invalidateCache();
        this.notifySubscribers();
      }, TIMING.CROSS_TAB_UPDATE_DELAY);
    }
  }

  /**
   * Handle custom events (same-tab reactivity)
   */
  private handleDataUpdated(event: CustomEvent | Event): void {
    const customEvent = event as CustomEvent;
    
    if (customEvent.detail?.type === 'post-read' && customEvent.detail?.postSlug) {
      setTimeout(() => {
        this.invalidateCache();
        this.notifySubscribers(customEvent.detail.postSlug);
      }, TIMING.SAME_TAB_UPDATE_DELAY);
    } else if (
      customEvent.type === STORAGE_EVENTS.READ_POSTS_CLEARED ||
      customEvent.detail?.type === 'posts-cleared' ||
      customEvent.detail?.type === 'all-cleared'
    ) {
      setTimeout(() => {
        this.invalidateCache();
        this.notifySubscribers();
      }, TIMING.SAME_TAB_UPDATE_DELAY);
    }
  }
}

// Export singleton instance getter (for TypeScript/Node.js contexts)
export const getReadStateService = (): ReadStateService => ReadStateService.getInstance();

// Export class for direct use
export default ReadStateService;
