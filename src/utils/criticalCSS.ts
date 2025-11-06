/**
 * Critical CSS utilities for performance optimization
 * This helps reduce render-blocking CSS and improve FCP/LCP
 */

export interface CriticalCSSOptions {
  includeAboveFold?: boolean;
  includeTypography?: boolean;
  includeLayout?: boolean;
  includeTheme?: boolean;
}

/**
 * Get critical CSS for above-the-fold content
 */
export function getCriticalCSS(options: CriticalCSSOptions = {}) {
  const {
    includeAboveFold = true,
    includeTypography = true,
    includeLayout = true,
    includeTheme = true,
  } = options;

  let criticalCSS = '';

  if (includeTheme) {
    criticalCSS += `
      :root {
        --color-bg: 255 255 255;
        --color-bg-alt: 249 250 251;
        --color-text: 17 24 39;
        --color-text-muted: 107 114 128;
        --color-border: 209 213 219;
        --color-primary: 220 38 38;
        --color-accent: 59 130 246;
        --color-success: 34 197 94;
        --color-warning: 245 158 11;
        --color-error: 239 68 68;
        --color-highlight: 255 193 7;
      }
      
      .dark {
        --color-bg: 3 7 18;
        --color-bg-alt: 15 23 42;
        --color-text: 248 250 252;
        --color-text-muted: 148 163 184;
        --color-border: 51 65 85;
        --color-primary: 239 68 68;
        --color-accent: 96 165 250;
        --color-success: 74 222 128;
        --color-warning: 251 191 36;
        --color-error: 248 113 113;
        --color-highlight: 255 213 0;
      }
    `;
  }

  if (includeTypography) {
    criticalCSS += `
      html {
        font-family: 'Open Sans', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
      }
      
      body {
        margin: 0;
        min-height: 100vh;
        background-color: rgb(var(--color-bg));
        color: rgb(var(--color-text));
        font-size: 1rem;
        line-height: 1.6;
      }
      
      h1, h2, h3, h4, h5, h6 {
        font-family: 'Source Serif Pro', Georgia, serif;
        font-weight: 600;
        line-height: 1.2;
        margin: 0 0 1rem 0;
        color: rgb(var(--color-text));
      }
      
      h1 { 
        font-size: 2.5rem; 
        font-weight: 800;
        letter-spacing: -0.025em;
      }
      
      h2 { 
        font-size: 2rem; 
        font-weight: 700;
        letter-spacing: -0.025em;
      }
      
      h3 { 
        font-size: 1.5rem; 
        font-weight: 600;
      }
      
      p {
        margin: 0 0 1rem 0;
        line-height: 1.7;
      }
      
      a {
        color: rgb(var(--color-accent));
        text-decoration: none;
        transition: color 0.2s ease;
      }
      
      a:hover {
        color: rgb(var(--color-accent-hover, 37 99 235));
      }
    `;
  }

  if (includeLayout) {
    criticalCSS += `
      .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }
      
      .animate-fade-in {
        animation: fadeIn 0.3s ease-in-out;
      }
      
      @keyframes fadeIn {
        from { 
          opacity: 0; 
          transform: translateY(10px); 
        }
        to { 
          opacity: 1; 
          transform: translateY(0); 
        }
      }
      
      .psychedelic-title {
        background: linear-gradient(135deg, 
          rgb(var(--color-primary)) 0%, 
          rgb(var(--color-accent)) 50%, 
          rgb(var(--color-highlight)) 100%);
        background-size: 200% 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: gradientShift 3s ease-in-out infinite;
      }
      
      @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      .highlight-primary {
        color: rgb(var(--color-primary));
        font-weight: 700;
      }
    `;
  }

  if (includeAboveFold) {
    criticalCSS += `
      /* Above-the-fold specific optimizations */
      .hero-section {
        min-height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 2rem 1rem;
      }
      
      .featured-posts {
        margin: 2rem 0;
      }
      
      .category-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
      }
      
      /* Prevent layout shift */
      .post-card {
        min-height: 200px;
        border-radius: 8px;
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      
      .post-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }
    `;
  }

  return criticalCSS.trim();
}

/**
 * Get non-critical CSS that can be loaded asynchronously
 */
export function getNonCriticalCSS() {
  return `
    /* Non-critical styles that can be loaded after initial render */
    .tag-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;
    }
    
    .tag-item {
      background: rgb(var(--color-bg-alt));
      color: rgb(var(--color-text));
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.875rem;
      transition: all 0.2s ease;
    }
    
    .tag-item:hover {
      background: rgb(var(--color-accent));
      color: white;
      transform: scale(1.05);
    }
    
    .footer {
      margin-top: auto;
      padding: 2rem 0;
      border-top: 1px solid rgb(var(--color-border));
      text-align: center;
      color: rgb(var(--color-text-muted));
    }
    
    .back-to-top {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: rgb(var(--color-accent));
      color: white;
      border: none;
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      cursor: pointer;
      transition: all 0.2s ease;
      opacity: 0;
      visibility: hidden;
    }
    
    .back-to-top.visible {
      opacity: 1;
      visibility: visible;
    }
    
    .back-to-top:hover {
      background: rgb(var(--color-accent-hover, 37 99 235));
      transform: scale(1.1);
    }
  `;
}

/**
 * Inline critical CSS in HTML head
 */
export function inlineCriticalCSS(criticalCSS: string): string {
  return `<style>${criticalCSS}</style>`;
}

/**
 * Load non-critical CSS asynchronously
 */
export function loadNonCriticalCSS(): string {
  return `
    <link rel="preload" href="/styles/non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/styles/non-critical.css"></noscript>
  `;
}
