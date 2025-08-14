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
  {
    href: "/category/",
    label: "Categories",
    dropdown: {
      label: "Browse Categories",
    },
  },
  {
    href: "/guided-path",
    label: "Resources",
    dropdown: {
      label: "Tools & Resources",
      items: [
        {
          href: "/guided-path",
          label: "Guided Path",
          icon: "🗺️",
        },
        {
          href: "/brain-science/",
          label: "Writing Insights",
          icon: "🧠",
        },
        {
          href: "/tag-management",
          label: "Tag Analytics",
          icon: "🏷️",
        },
        {
          href: "/api/",
          label: "Public API",
          icon: "💬",
        },
      ],
    },
  },
  { href: "/about", label: "About" },
];
