# Quotes API Documentation

A simple, powerful API for accessing curated Stoic philosophy quotes with rich metadata and filtering capabilities.

## Quick Start

**Base URL:** `/api/quotes`

**Try it now:** [Interactive Demo](/api/quotes-demo)

## Core Endpoints

### Get Random Quote

```bash
GET /api/quotes?action=random
```

**Response:**

```json
{
  "quote": {
    "id": 1,
    "text": "You have power over your mind - not outside events. Realize this, and you will find strength.",
    "author": "Marcus Aurelius",
    "work": "Meditations",
    "themes": ["control", "strength", "mindfulness"],
    "difficulty": "beginner",
    "context": "Written as personal reflections during military campaigns",
    "modernRelevance": "Applicable to stress management and mental health"
  }
}
```

### Get Quote by ID

```bash
GET /api/quotes?action=id&id=1
```

### Get Quotes by Author

```bash
GET /api/quotes?action=author&author=Marcus%20Aurelius
```

### Get Quotes by Theme

```bash
GET /api/quotes?action=theme&theme=wisdom
```

### Get Collection Metadata

```bash
GET /api/quotes?action=metadata
```

## Integration Examples

### Daily Quote Widget

```javascript
// Add to your website for daily inspiration
async function getDailyQuote() {
  const response = await fetch("/api/quotes?action=random");
  const data = await response.json();

  document.getElementById("quote-text").textContent = data.quote.text;
  document.getElementById("quote-author").textContent =
    `— ${data.quote.author}`;
}

// Call on page load
getDailyQuote();
```

### Theme-based Learning App

```javascript
// Create focused learning experiences
async function getQuotesByTheme(theme) {
  const response = await fetch(`/api/quotes?action=theme&theme=${theme}`);
  const data = await response.json();

  return data.quotes.map((quote) => ({
    text: quote.text,
    author: quote.author,
    difficulty: quote.difficulty,
  }));
}

// Usage
const wisdomQuotes = await getQuotesByTheme("wisdom");
```

### Progressive Learning System

```javascript
// Start with beginner quotes and progress
async function getQuotesByDifficulty(level) {
  const response = await fetch(
    `/api/quotes?action=difficulty&difficulty=${level}`
  );
  const data = await response.json();
  return data.quotes;
}

// Learning progression
const beginnerQuotes = await getQuotesByDifficulty("beginner");
const intermediateQuotes = await getQuotesByDifficulty("intermediate");
const advancedQuotes = await getQuotesByDifficulty("advanced");
```

## Available Filters

### Authors

- Marcus Aurelius
- Epictetus
- Seneca
- Zeno of Citium
- Chrysippus
- Cato the Younger

### Themes

- wisdom, virtue, resilience, acceptance, discipline, death, happiness, control, mindfulness, character

### Categories

- personal_power, response_to_adversity, mental_discipline, ethics, materialism, change_and_impermanence, mindfulness, character_development, fate_and_destiny, practical_wisdom, values_and_priorities, time_and_mortality, freedom_and_autonomy, acceptance_and_love, gratitude_and_appreciation, happiness_and_contentment, courage_and_mortality, emotional_management, personal_boundaries, wisdom_and_action, resilience_and_growth, resilience_and_stability

### Difficulty Levels

- beginner, intermediate, advanced

### Length Categories

- very_short, short, medium, long

## Response Format

All responses follow this structure:

```typescript
{
  quote?: Quote;           // Single quote (for random/id endpoints)
  quotes?: Quote[];        // Array of quotes (for filtered endpoints)
  count?: number;          // Number of quotes returned
  error?: string;          // Error message if applicable
  message?: string;        // Additional error details
}

interface Quote {
  id: number;
  text: string;
  author: string;
  work: string;
  book?: string;
  themes: string[];
  category: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  length: "very_short" | "short" | "medium" | "long";
  popularity: "low" | "medium" | "high" | "very_high";
  context: string;
  modernRelevance: string;
}
```

## Error Handling

The API returns appropriate HTTP status codes:

- `200` - Success
- `400` - Bad request (missing or invalid parameters)
- `404` - Quote not found
- `500` - Internal server error

Error responses include descriptive messages:

```json
{
  "error": "Missing parameter",
  "message": "ID parameter is required"
}
```

## Caching

- Random quotes: 5 minutes
- Individual quotes: 1 hour
- Filtered results: 1 hour
- Metadata: 24 hours

## Use Cases

### For Developers

- **Daily Quote Widgets**: Display random quotes on websites
- **Learning Apps**: Create progressive Stoic philosophy courses
- **Content Generation**: Use quotes in articles, social media, or newsletters
- **Research Tools**: Analyze themes and patterns across philosophers

### For Content Creators

- **Inspiration**: Find relevant quotes for articles and posts
- **Theme Exploration**: Discover quotes by specific themes or authors
- **Context Building**: Use historical context and modern relevance
- **Content Curation**: Build themed quote collections

### For Educators

- **Curriculum Building**: Create lesson plans around specific themes
- **Difficulty Progression**: Start with beginner-friendly quotes
- **Author Studies**: Focus on specific philosophers
- **Discussion Starters**: Use quotes to spark philosophical discussions

## Related Tools

- **[Tag Analytics](/tag-management)**: Analyze content patterns and themes
- **[Writing Insights](/brain-science)**: Track writing frequency and topics
- **[RSS Feed](/rss.xml)**: Subscribe to content updates
- **[Sitemap](/sitemap.xml)**: Discover all available content

## Support

For questions or suggestions about the API, please refer to the [main documentation](/api/) or explore the [interactive demo](/api/quotes-demo).
