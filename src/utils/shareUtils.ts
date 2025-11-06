// Share URL utilities
export interface SharePlatform {
  name: string;
  icon: string;
  url: string;
  color: string;
  action?: string;
}

export function generateShareUrls(
  title: string,
  url: string,
  description: string = '',
): SharePlatform[] {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  const encodedDescription = encodeURIComponent(description);

  return [
    {
      name: 'Twitter',
      icon: '🐦',
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=antoniwan`,
      color: 'hover:bg-blue-500/10 hover:text-blue-500',
    },
    {
      name: 'BlueSky',
      icon: '🌀',
      url: `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title}\n\n${url}`)}`,
      color: 'hover:bg-sky-500/10 hover:text-sky-500',
    },
    {
      name: 'Facebook',
      icon: '📘',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:bg-blue-700/10 hover:text-blue-700',
    },
    {
      name: 'Threads',
      icon: '🧵',
      url: `https://www.threads.net/intent/post?text=${encodeURIComponent(`${title}\n\n${url}`)}`,
      color: 'hover:bg-black/10 hover:text-black dark:hover:bg-white/10 dark:hover:text-white',
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:bg-blue-600/10 hover:text-blue-600',
    },
    {
      name: 'Copy Link',
      icon: '🔗',
      url: '#',
      color: 'hover:bg-green-500/10 hover:text-green-500',
      action: 'copy',
    },
  ];
}

export function validateShareUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
}

export function getCanonicalUrl(pathname: string, baseUrl: string = ''): string {
  // If baseUrl is provided, use it
  if (baseUrl) {
    return baseUrl.endsWith('/') ? baseUrl + pathname.slice(1) : baseUrl + pathname;
  }

  // Otherwise, construct from current location
  if (typeof window !== 'undefined') {
    return window.location.origin + pathname;
  }

  // Fallback for SSR
  return pathname;
}
