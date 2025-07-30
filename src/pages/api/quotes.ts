import type { APIRoute } from "astro";
import { quotesData, getRandomQuote } from "../../data/quotes";

// GET /api/quotes - Returns a random quote with metadata
export const GET: APIRoute = async () => {
  try {
    const quote = getRandomQuote();
    
    const response = {
      quote,
      metadata: {
        totalQuotes: quotesData.metadata.totalQuotes,
        version: quotesData.metadata.version,
        lastUpdated: quotesData.metadata.lastUpdated,
        description: "A random Stoic philosophy quote with rich metadata"
      }
    };

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300" // Cache for 5 minutes
      }
    });
  } catch (error) {
    console.error("Quotes API error:", error);
    return new Response(
      JSON.stringify({
        error: "Internal server error",
        message: "An error occurred while processing your request"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache"
        }
      }
    );
  }
};
