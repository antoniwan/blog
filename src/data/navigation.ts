export interface NavigationItem {
  href: string;
  label: string;
  dropdown?: {
    label: string;
    items?: {
      href: string;
      label: string;
      icon?: string;
    }[];
  };
}

export const mainNavigation: NavigationItem[] = [
  { href: '/guided-path', label: 'Guided Path' },
  {
    href: '/category/',
    label: 'Categories',
    dropdown: {
      label: 'Browse Categories',
    },
  },
  { href: '/everything', label: 'Everything' },
  {
    href: '/tag/',
    label: 'Resources',
    dropdown: {
      label: 'Tools & Resources',
      items: [
        {
          href: '/tag/',
          label: 'All Tags',
          icon: '🏷️',
        },
        {
          href: '/brain-science/',
          label: 'Writing Insights',
          icon: '🧠',
        },
        {
          href: '/tag-management',
          label: 'Tag Analytics',
          icon: '🏷️',
        },
        {
          href: '/api/',
          label: 'Public API',
          icon: '💬',
        },
      ],
    },
  },
  { href: '/about', label: 'About' },
];
