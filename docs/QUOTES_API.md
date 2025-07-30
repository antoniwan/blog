# Quotes API Documentation

An internal API that returns random Stoic philosophy quotes with rich metadata, designed for use within the Curious Chaos Journal website.

## Base URL

```
https://blog.antoniwan.online/api/quotes
```

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

#### Quote Object Properties

| Property          | Type           | Description                                      |
| ----------------- | -------------- | ------------------------------------------------ |
| `id`              | number         | Unique identifier for the quote                  |
| `text`            | string         | The quote text                                   |
| `author`          | string         | Author name (Marcus Aurelius, Epictetus, Seneca) |
| `work`            | string         | Source work title                                |
| `book`            | string \| null | Specific book or section                         |
| `themes`          | string[]       | Array of philosophical themes                    |
| `category`        | string         | Content category                                 |
| `difficulty`      | string         | Reading level (beginner, intermediate, advanced) |
| `length`          | string         | Quote length (very_short, short, medium, long)   |
| `popularity`      | string         | Popularity level (low, medium, high, very_high)  |
| `context`         | string         | Historical context and background                |
| `modernRelevance` | string         | Modern applications and relevance                |

#### Metadata Object Properties

| Property      | Type   | Description                              |
| ------------- | ------ | ---------------------------------------- |
| `totalQuotes` | number | Total number of quotes in the collection |
| `version`     | string | API version                              |
| `lastUpdated` | string | Last update date                         |
| `description` | string | API description                          |

## Usage Examples

### JavaScript (Fetch API)

```javascript
// Get a random quote
const response = await fetch("/api/quotes");
const data = await response.json();

console.log(data.quote.text);
console.log(`By ${data.quote.author}`);
console.log(`Themes: ${data.quote.themes.join(", ")}`);
```

### Python (Requests)

```python
import requests

# Get a random quote
response = requests.get('https://blog.antoniwan.online/api/quotes')
data = response.json()

print(data['quote']['text'])
print(f"By {data['quote']['author']}")
print(f"Themes: {', '.join(data['quote']['themes'])}")
```

### cURL

```bash
curl https://blog.antoniwan.online/api/quotes
```

## Error Responses

### 500 Internal Server Error

```json
{
  "error": "Internal server error",
  "message": "An error occurred while processing your request"
}
```

## Caching

The API is cached for 5 minutes to improve performance. Each request will return a fresh random quote.

## Internal Use Cases

This API is designed for internal use within the Curious Chaos Journal website:

- **404 Pages**: Display random Stoic quotes on error pages
- **Future Features**: Potential integration in other site sections
- **Content Enhancement**: Adding philosophical context to various pages

## Collection Information

- **Total Quotes**: 30 curated Stoic philosophy quotes
- **Authors**: Marcus Aurelius, Epictetus, Seneca, Zeno of Citium, Chrysippus, Cato the Younger
- **Sources**: Meditations, Enchiridion, Letters from a Stoic, and other works
- **Difficulty Levels**: Beginner, Intermediate, Advanced
- **Length Categories**: Very Short, Short, Medium, Long
- **Themes**: Control, mindfulness, resilience, acceptance, discipline, death, happiness, character, and more

## Support

For questions or issues, please refer to the main website or GitHub repository.
