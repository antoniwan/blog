export interface NavigationItem {
  href: string;
  label: string;
  dropdown?: {
    label: string;
    items: {
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
      items: [
        {
          href: "/category/art-expression/",
          label: "Art & Expression",
          icon: "🎵",
        },
        {
          href: "/category/diy-creation/",
          label: "DIY & Creation",
          icon: "🛠️",
        },
        {
          href: "/category/integration-growth/",
          label: "Integration & Growth",
          icon: "🧘🏽‍♂️",
        },
        {
          href: "/category/learning-projects/",
          label: "Learning Projects",
          icon: "📚",
        },
        { href: "/category/metaspace/", label: "Metaspace", icon: "🌀" },
        { href: "/category/parenting/", label: "Parenting", icon: "👨‍👩‍👧‍👦" },
        { href: "/category/politics/", label: "Politics", icon: "⚖️" },
        { href: "/category/psychology/", label: "Psychology", icon: "🧠" },
        {
          href: "/category/systems-strategy/",
          label: "Systems & Strategy",
          icon: "💻",
        },
      ],
    },
  },
  { href: "/tag", label: "Tags" },
  {
    href: "/api/",
    label: "Tools",
    dropdown: {
      label: "Development Tools",
      items: [
        {
          href: "/api/docs/quotes-demo",
          label: "Quotes API",
          icon: "💬",
        },
        {
          href: "/tag-management",
          label: "Tag Analytics",
          icon: "📊",
        },
        {
          href: "/brain-science",
          label: "Writing Insights",
          icon: "🧠",
        },
        {
          href: "/rss.xml",
          label: "RSS Feed",
          icon: "📡",
        },
        {
          href: "/sitemap.xml",
          label: "Sitemap",
          icon: "🗺️",
        },
      ],
    },
  },
  { href: "/about", label: "About" },
];
