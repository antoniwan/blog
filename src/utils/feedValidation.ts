/**
 * Feed validation utilities for RSS and JSON feeds
 */

export interface FeedValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  itemCount: number;
  lastUpdated: string | null;
}

export interface RSSItem {
  title: string;
  description: string;
  pubDate: Date;
  link: string;
  guid?: string;
  categories?: string[];
  author?: string;
  content?: string;
  enclosure?: {
    url: string;
    type: string;
    length?: number;
  };
  comments?: string;
}

export interface JSONFeedItem {
  id: string;
  url: string;
  title: string;
  content_html?: string;
  content_text?: string;
  summary?: string;
  date_published: string;
  date_modified?: string;
  authors?: Array<{
    name: string;
    url?: string;
  }>;
  tags?: string[];
  image?: string;
  external_url?: string;
}

/**
 * Validate RSS feed structure
 */
export function validateRSSFeed(feed: any): FeedValidationResult {
  const result: FeedValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    itemCount: 0,
    lastUpdated: null,
  };

  // Check required top-level elements
  if (!feed.title) {
    result.errors.push("Missing required field: title");
    result.isValid = false;
  }

  if (!feed.description) {
    result.errors.push("Missing required field: description");
    result.isValid = false;
  }

  if (!feed.site) {
    result.errors.push("Missing required field: site");
    result.isValid = false;
  }

  // Check items
  if (!feed.items || !Array.isArray(feed.items)) {
    result.errors.push("Missing or invalid items array");
    result.isValid = false;
  } else {
    result.itemCount = feed.items.length;
    
    // Validate each item
    feed.items.forEach((item: RSSItem, index: number) => {
      if (!item.title) {
        result.errors.push(`Item ${index + 1}: Missing title`);
        result.isValid = false;
      }

      if (!item.description) {
        result.warnings.push(`Item ${index + 1}: Missing description`);
      }

      if (!item.pubDate) {
        result.errors.push(`Item ${index + 1}: Missing publication date`);
        result.isValid = false;
      }

      if (!item.link) {
        result.errors.push(`Item ${index + 1}: Missing link`);
        result.isValid = false;
      }

      // Check for full content
      if (!item.content) {
        result.warnings.push(`Item ${index + 1}: No full content provided`);
      }

      // Check for GUID
      if (!item.guid) {
        result.warnings.push(`Item ${index + 1}: No GUID provided`);
      }
    });

    // Get last updated date
    if (feed.items.length > 0) {
      const latestItem = feed.items.reduce((latest: RSSItem, current: RSSItem) => {
        return new Date(current.pubDate) > new Date(latest.pubDate) ? current : latest;
      });
      result.lastUpdated = latestItem.pubDate.toISOString();
    }
  }

  return result;
}

/**
 * Validate JSON Feed structure
 */
export function validateJSONFeed(feed: any): FeedValidationResult {
  const result: FeedValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    itemCount: 0,
    lastUpdated: null,
  };

  // Check required top-level elements
  if (!feed.version) {
    result.errors.push("Missing required field: version");
    result.isValid = false;
  }

  if (!feed.title) {
    result.errors.push("Missing required field: title");
    result.isValid = false;
  }

  if (!feed.home_page_url) {
    result.errors.push("Missing required field: home_page_url");
    result.isValid = false;
  }

  if (!feed.feed_url) {
    result.errors.push("Missing required field: feed_url");
    result.isValid = false;
  }

  // Check items
  if (!feed.items || !Array.isArray(feed.items)) {
    result.errors.push("Missing or invalid items array");
    result.isValid = false;
  } else {
    result.itemCount = feed.items.length;
    
    // Validate each item
    feed.items.forEach((item: JSONFeedItem, index: number) => {
      if (!item.id) {
        result.errors.push(`Item ${index + 1}: Missing id`);
        result.isValid = false;
      }

      if (!item.url) {
        result.errors.push(`Item ${index + 1}: Missing url`);
        result.isValid = false;
      }

      if (!item.title) {
        result.errors.push(`Item ${index + 1}: Missing title`);
        result.isValid = false;
      }

      if (!item.date_published) {
        result.errors.push(`Item ${index + 1}: Missing date_published`);
        result.isValid = false;
      }

      // Check for content
      if (!item.content_html && !item.content_text) {
        result.warnings.push(`Item ${index + 1}: No content provided`);
      }

      // Check for summary
      if (!item.summary) {
        result.warnings.push(`Item ${index + 1}: No summary provided`);
      }
    });

    // Get last updated date
    if (feed.items.length > 0) {
      const latestItem = feed.items.reduce((latest: JSONFeedItem, current: JSONFeedItem) => {
        return new Date(current.date_published) > new Date(latest.date_published) ? current : latest;
      });
      result.lastUpdated = latestItem.date_published;
    }
  }

  return result;
}

/**
 * Generate a feed health report
 */
export function generateFeedHealthReport(
  rssValidation: FeedValidationResult,
  jsonValidation: FeedValidationResult
): string {
  const report = [
    "📡 Feed Health Report",
    "==================",
    "",
    "RSS Feed:",
    `  Status: ${rssValidation.isValid ? "✅ Valid" : "❌ Invalid"}`,
    `  Items: ${rssValidation.itemCount}`,
    `  Last Updated: ${rssValidation.lastUpdated || "Unknown"}`,
    `  Errors: ${rssValidation.errors.length}`,
    `  Warnings: ${rssValidation.warnings.length}`,
    "",
    "JSON Feed:",
    `  Status: ${jsonValidation.isValid ? "✅ Valid" : "❌ Invalid"}`,
    `  Items: ${jsonValidation.itemCount}`,
    `  Last Updated: ${jsonValidation.lastUpdated || "Unknown"}`,
    `  Errors: ${jsonValidation.errors.length}`,
    `  Warnings: ${jsonValidation.warnings.length}`,
    "",
  ];

  if (rssValidation.errors.length > 0) {
    report.push("RSS Errors:");
    rssValidation.errors.forEach(error => report.push(`  ❌ ${error}`));
    report.push("");
  }

  if (rssValidation.warnings.length > 0) {
    report.push("RSS Warnings:");
    rssValidation.warnings.forEach(warning => report.push(`  ⚠️  ${warning}`));
    report.push("");
  }

  if (jsonValidation.errors.length > 0) {
    report.push("JSON Feed Errors:");
    jsonValidation.errors.forEach(error => report.push(`  ❌ ${error}`));
    report.push("");
  }

  if (jsonValidation.warnings.length > 0) {
    report.push("JSON Feed Warnings:");
    jsonValidation.warnings.forEach(warning => report.push(`  ⚠️  ${warning}`));
    report.push("");
  }

  return report.join("\n");
} 