import fs from "fs";
import path from "path";
import { JSDOM } from "jsdom";

// Function to extract metadata from HTML
function extractMetadata(htmlContent) {
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;

  // Extract title
  const titleElement = document.querySelector("h1.p-name");
  const title = titleElement ? titleElement.textContent.trim() : "";

  // Extract publication date
  const dateElement = document.querySelector("time.dt-published");
  const pubDate = dateElement ? dateElement.getAttribute("datetime") : "";

  // Extract canonical URL
  const canonicalElement = document.querySelector("a.p-canonical");
  const canonicalUrl = canonicalElement ? canonicalElement.href : "";

  // Extract author
  const authorElement = document.querySelector("a.p-author");
  const author = authorElement ? authorElement.textContent.trim() : "";

  // Extract content
  const contentElement = document.querySelector('section[data-field="body"]');
  const content = contentElement ? contentElement.innerHTML : "";

  // Extract subtitle/description
  const subtitleElement = document.querySelector(
    'section[data-field="subtitle"]'
  );
  const subtitle = subtitleElement ? subtitleElement.textContent.trim() : "";

  return {
    title,
    pubDate,
    canonicalUrl,
    author,
    content,
    subtitle,
  };
}

// Function to convert HTML content to Markdown
function htmlToMarkdown(htmlContent) {
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;

  // Remove script and style elements
  const scripts = document.querySelectorAll("script, style");
  scripts.forEach((script) => script.remove());

  // Remove section wrappers and divs
  const sections = document.querySelectorAll("section, div");
  sections.forEach((section) => {
    if (section.children.length === 1) {
      const child = section.children[0];
      if (
        child.tagName === "P" ||
        child.tagName === "H3" ||
        child.tagName === "H4" ||
        child.tagName === "FIGURE" ||
        child.tagName === "BLOCKQUOTE" ||
        child.tagName === "UL"
      ) {
        section.replaceWith(child);
      }
    }
  });

  // Convert common HTML elements to Markdown
  let markdown = document.body.innerHTML;

  // Remove remaining div wrappers
  markdown = markdown.replace(/<div[^>]*>/g, "");
  markdown = markdown.replace(/<\/div>/g, "");

  // Remove section wrappers
  markdown = markdown.replace(/<section[^>]*>/g, "");
  markdown = markdown.replace(/<\/section>/g, "");

  // Convert headings
  markdown = markdown.replace(/<h3[^>]*>/g, "## ");
  markdown = markdown.replace(/<h4[^>]*>/g, "### ");
  markdown = markdown.replace(/<\/h[34]>/g, "\n\n");

  // Convert paragraphs
  markdown = markdown.replace(/<p[^>]*>/g, "");
  markdown = markdown.replace(/<\/p>/g, "\n\n");

  // Convert blockquotes
  markdown = markdown.replace(/<blockquote[^>]*>/g, "> ");
  markdown = markdown.replace(/<\/blockquote>/g, "\n\n");

  // Convert strong/bold
  markdown = markdown.replace(/<strong[^>]*>/g, "**");
  markdown = markdown.replace(/<\/strong>/g, "**");

  // Convert em/italic
  markdown = markdown.replace(/<em[^>]*>/g, "*");
  markdown = markdown.replace(/<\/em>/g, "*");

  // Convert lists
  markdown = markdown.replace(/<ul[^>]*>/g, "");
  markdown = markdown.replace(/<\/ul>/g, "\n\n");
  markdown = markdown.replace(/<li[^>]*>/g, "- ");
  markdown = markdown.replace(/<\/li>/g, "\n");

  // Convert images
  markdown = markdown.replace(/<figure[^>]*>/g, "");
  markdown = markdown.replace(/<\/figure>/g, "\n\n");
  markdown = markdown.replace(/<img[^>]*src="([^"]*)"[^>]*>/g, (match, src) => {
    const altMatch = match.match(/alt="([^"]*)"/);
    const alt = altMatch ? altMatch[1] : "";
    return `![${alt}](${src})\n\n`;
  });

  // Convert figcaptions
  markdown = markdown.replace(/<figcaption[^>]*>/g, "<small>");
  markdown = markdown.replace(/<\/figcaption>/g, "</small>\n\n");

  // Convert links
  markdown = markdown.replace(
    /<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g,
    "[$2]($1)"
  );

  // Clean up extra whitespace and HTML entities
  markdown = markdown.replace(/\n\s*\n\s*\n/g, "\n\n");
  markdown = markdown.replace(/&nbsp;/g, " ");
  markdown = markdown.replace(/&amp;/g, "&");
  markdown = markdown.replace(/&lt;/g, "<");
  markdown = markdown.replace(/&gt;/g, ">");
  markdown = markdown.replace(/&quot;/g, '"');
  markdown = markdown.trim();

  return markdown;
}

// Function to generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

// Function to determine categories based on content
function determineCategories(title, content, subtitle) {
  const text = `${title} ${subtitle} ${content}`.toLowerCase();
  const categories = [];

  // Define category keywords
  const categoryKeywords = {
    "integration-growth": [
      "leadership",
      "growth",
      "mastery",
      "discipline",
      "values",
      "authentic",
      "warrior",
      "mindset",
    ],
    parenting: [
      "parent",
      "child",
      "family",
      "raising",
      "conscious",
      "daughter",
      "son",
    ],
    psychology: [
      "mental",
      "health",
      "emotion",
      "behavior",
      "mind",
      "therapy",
      "healing",
      "trauma",
    ],
    metaspace: [
      "reflection",
      "journey",
      "meaning",
      "purpose",
      "philosophy",
      "existence",
    ],
    "art-expression": ["creative", "art", "expression", "aesthetic", "beauty"],
    "systems-strategy": [
      "software",
      "code",
      "technology",
      "digital",
      "strategy",
      "system",
    ],
    "learning-projects": [
      "learning",
      "study",
      "documentation",
      "mastery",
      "project",
    ],
    "diy-creation": ["build", "create", "craft", "physical", "handmade"],
    politics: [
      "politics",
      "power",
      "social",
      "collective",
      "democracy",
      "society",
    ],
  };

  // Check each category
  for (const [category, keywords] of Object.entries(categoryKeywords)) {
    const matches = keywords.filter((keyword) => text.includes(keyword));
    if (matches.length >= 2) {
      categories.push(category);
    }
  }

  // Ensure at least 2 categories
  if (categories.length < 2) {
    if (!categories.includes("metaspace")) categories.push("metaspace");
    if (!categories.includes("integration-growth"))
      categories.push("integration-growth");
  }

  return categories.slice(0, 3); // Max 3 categories
}

// Function to extract images from content
function extractImages(content) {
  const dom = new JSDOM(content);
  const document = dom.window.document;
  const images = [];

  const imgElements = document.querySelectorAll("img");
  imgElements.forEach((img, index) => {
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt") || `image-${index + 1}`;
    if (src) {
      images.push({ src, alt, index });
    }
  });

  return images;
}

// Main migration function
function migratePost(htmlFilePath) {
  const htmlContent = fs.readFileSync(htmlFilePath, "utf8");
  const metadata = extractMetadata(htmlContent);

  if (!metadata.title) {
    console.log(`Skipping ${htmlFilePath}: No title found`);
    return null;
  }

  const slug = generateSlug(metadata.title);
  const markdownContent = htmlToMarkdown(metadata.content);
  const categories = determineCategories(
    metadata.title,
    markdownContent,
    metadata.subtitle
  );
  const images = extractImages(metadata.content);

  // Create frontmatter
  const frontmatter = `---
title: "${metadata.title}"
description: "${metadata.subtitle || "A personal reflection and exploration of life, growth, and meaning."}"
pubDate: "${metadata.pubDate}"
language: ["en"]
category: ${JSON.stringify(categories)}
tags: []
readingTime: ${Math.ceil(markdownContent.split(" ").length / 200)}
draft: false
featured: false
published: true
canonicalUrl: "${metadata.canonicalUrl}"
---

${markdownContent}

---

_Originally published on [Medium](${metadata.canonicalUrl})._
`;

  return {
    slug,
    frontmatter,
    images,
    metadata: {
      ...metadata,
      categories,
    },
  };
}

export {
  migratePost,
  extractMetadata,
  htmlToMarkdown,
  generateSlug,
  determineCategories,
  extractImages,
};
