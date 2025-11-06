// Re-export from centralized tag processing utilities
export {
  calculateTagStats,
  sortTagsByImportance,
  getImportantTags,
  getRecommendedTags,
  getTagWeight,
} from './tagProcessing';

// Legacy compatibility - keeping the old function name
export { getTagWeight } from '../data/tags';
