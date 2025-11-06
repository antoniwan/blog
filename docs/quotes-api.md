# Quotes API

An internal API that returns random Stoic philosophy quotes with metadata.

## Endpoint

### GET /api/quotes

Returns a random Stoic philosophy quote with metadata.

**No parameters required.**

#### Response Format

```json
{
  "quote": {
    "id": 1,
    "text": "You have power over your mind - not outside events. Realize this, and you will find strength.",
    "author": "Marcus Aurelius",
    "work": "Meditations",
    "book": "Book II",
    "themes": ["control", "strength", "mindfulness"],
    "category": "personal_power",
    "difficulty": "beginner",
    "length": "short",
    "popularity": "high",
    "context": "Written as personal reflections during military campaigns",
    "modernRelevance": "Applicable to stress management and mental health"
  },
  "metadata": {
    "totalQuotes": 30,
    "version": "1.0",
    "lastUpdated": "2025-07-30",
    "description": "A random Stoic philosophy quote with rich metadata"
  }
}
```

## Usage Example

```javascript
const response = await fetch('/api/quotes');
const data = await response.json();

console.log(data.quote.text);
console.log(`By ${data.quote.author}`);
console.log(`Themes: ${data.quote.themes.join(', ')}`);
```

## Quote Properties

| Property          | Type     | Description                                      |
| ----------------- | -------- | ------------------------------------------------ |
| `id`              | number   | Unique identifier for the quote                  |
| `text`            | string   | The quote text                                   |
| `author`          | string   | Author name (Marcus Aurelius, Epictetus, Seneca) |
| `work`            | string   | Source work title                                |
| `book`            | string   | Specific book or section                         |
| `themes`          | string[] | Array of philosophical themes                    |
| `category`        | string   | Content category                                 |
| `difficulty`      | string   | Reading level (beginner, intermediate, advanced) |
| `length`          | string   | Quote length (very_short, short, medium, long)   |
| `popularity`      | string   | Popularity level (low, medium, high, very_high)  |
| `context`         | string   | Historical context and background                |
| `modernRelevance` | string   | Modern applications and relevance                |
