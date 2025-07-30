import type { APIRoute } from 'astro';
import { 
  quotesData, 
  getRandomQuote, 
  getQuoteById, 
  getQuotesByAuthor, 
  getQuotesByTheme, 
  getQuotesByCategory,
  getQuotesByDifficulty,
  getQuotesByLength,
  getQuotesByPopularity,
  getAllThemes,
  getAllCategories,
  getAllAuthors,
  type Quote 
} from '../../data/quotes';

// GET /api/quotes - Returns a random quote with metadata
export const GET: APIRoute = async ({ url }) => {
  try {
    const searchParams = url.searchParams;
    const action = searchParams.get('action') || 'random';
    
    // Handle different actions
    switch (action) {
      case 'random':
        return handleRandomQuote(searchParams);
      case 'id':
        return handleQuoteById(searchParams);
      case 'author':
        return handleQuotesByAuthor(searchParams);
      case 'theme':
        return handleQuotesByTheme(searchParams);
      case 'category':
        return handleQuotesByCategory(searchParams);
      case 'difficulty':
        return handleQuotesByDifficulty(searchParams);
      case 'length':
        return handleQuotesByLength(searchParams);
      case 'popularity':
        return handleQuotesByPopularity(searchParams);
      case 'metadata':
        return handleMetadata();
      case 'themes':
        return handleThemes();
      case 'categories':
        return handleCategories();
      case 'authors':
        return handleAuthors();
      case 'all':
        return handleAllQuotes(searchParams);
      default:
        return handleRandomQuote(searchParams);
    }
  } catch (error) {
    console.error('Quotes API error:', error);
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        message: 'An error occurred while processing your request'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache'
        }
      }
    );
  }
};

// Helper functions for different actions
function handleRandomQuote(searchParams: URLSearchParams) {
  const includeMetadata = searchParams.get('includeMetadata') === 'true';
  const quote = getRandomQuote();
  
  const response = includeMetadata 
    ? {
        quote,
        metadata: {
          totalQuotes: quotesData.metadata.totalQuotes,
          version: quotesData.metadata.version,
          lastUpdated: quotesData.metadata.lastUpdated
        }
      }
    : { quote };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
    }
  });
}

function handleQuoteById(searchParams: URLSearchParams) {
  const id = searchParams.get('id');
  if (!id) {
    return new Response(
      JSON.stringify({
        error: 'Missing parameter',
        message: 'ID parameter is required'
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  const quote = getQuoteById(parseInt(id));
  if (!quote) {
    return new Response(
      JSON.stringify({
        error: 'Not found',
        message: `Quote with ID ${id} not found`
      }),
      {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  return new Response(JSON.stringify({ quote }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
    }
  });
}

function handleQuotesByAuthor(searchParams: URLSearchParams) {
  const author = searchParams.get('author');
  if (!author) {
    return new Response(
      JSON.stringify({
        error: 'Missing parameter',
        message: 'Author parameter is required'
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  const quotes = getQuotesByAuthor(author);
  return new Response(JSON.stringify({ 
    quotes, 
    count: quotes.length,
    author 
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

function handleQuotesByTheme(searchParams: URLSearchParams) {
  const theme = searchParams.get('theme');
  if (!theme) {
    return new Response(
      JSON.stringify({
        error: 'Missing parameter',
        message: 'Theme parameter is required'
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  const quotes = getQuotesByTheme(theme);
  return new Response(JSON.stringify({ 
    quotes, 
    count: quotes.length,
    theme 
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

function handleQuotesByCategory(searchParams: URLSearchParams) {
  const category = searchParams.get('category');
  if (!category) {
    return new Response(
      JSON.stringify({
        error: 'Missing parameter',
        message: 'Category parameter is required'
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  const quotes = getQuotesByCategory(category);
  return new Response(JSON.stringify({ 
    quotes, 
    count: quotes.length,
    category 
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

function handleQuotesByDifficulty(searchParams: URLSearchParams) {
  const difficulty = searchParams.get('difficulty') as Quote['difficulty'];
  if (!difficulty || !['beginner', 'intermediate', 'advanced'].includes(difficulty)) {
    return new Response(
      JSON.stringify({
        error: 'Invalid parameter',
        message: 'Difficulty must be beginner, intermediate, or advanced'
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  const quotes = getQuotesByDifficulty(difficulty);
  return new Response(JSON.stringify({ 
    quotes, 
    count: quotes.length,
    difficulty 
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

function handleQuotesByLength(searchParams: URLSearchParams) {
  const length = searchParams.get('length') as Quote['length'];
  if (!length || !['very_short', 'short', 'medium', 'long'].includes(length)) {
    return new Response(
      JSON.stringify({
        error: 'Invalid parameter',
        message: 'Length must be very_short, short, medium, or long'
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  const quotes = getQuotesByLength(length);
  return new Response(JSON.stringify({ 
    quotes, 
    count: quotes.length,
    length 
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

function handleQuotesByPopularity(searchParams: URLSearchParams) {
  const popularity = searchParams.get('popularity') as Quote['popularity'];
  if (!popularity || !['low', 'medium', 'high', 'very_high'].includes(popularity)) {
    return new Response(
      JSON.stringify({
        error: 'Invalid parameter',
        message: 'Popularity must be low, medium, high, or very_high'
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  const quotes = getQuotesByPopularity(popularity);
  return new Response(JSON.stringify({ 
    quotes, 
    count: quotes.length,
    popularity 
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

function handleMetadata() {
  return new Response(JSON.stringify(quotesData.metadata), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400' // Cache for 24 hours
    }
  });
}

function handleThemes() {
  return new Response(JSON.stringify({ 
    themes: getAllThemes() 
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}

function handleCategories() {
  return new Response(JSON.stringify({ 
    categories: getAllCategories() 
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}

function handleAuthors() {
  return new Response(JSON.stringify({ 
    authors: getAllAuthors() 
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=86400'
    }
  });
}

function handleAllQuotes(searchParams: URLSearchParams) {
  const limit = searchParams.get('limit');
  const offset = searchParams.get('offset');
  
  let quotes = [...quotesData.quotes];
  
  // Apply pagination if specified
  if (offset) {
    const offsetNum = parseInt(offset);
    if (!isNaN(offsetNum) && offsetNum >= 0) {
      quotes = quotes.slice(offsetNum);
    }
  }
  
  if (limit) {
    const limitNum = parseInt(limit);
    if (!isNaN(limitNum) && limitNum > 0) {
      quotes = quotes.slice(0, limitNum);
    }
  }

  return new Response(JSON.stringify({ 
    quotes, 
    count: quotes.length,
    total: quotesData.metadata.totalQuotes
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  });
} 