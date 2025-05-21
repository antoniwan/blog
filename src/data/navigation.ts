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
  { href: "/", label: "Home" },
  {
    href: "#",
    label: "Categories",
    dropdown: {
      label: "Browse Categories",
      items: [
        {
          href: "/category/art-expression",
          label: "Art & Expression",
          icon: "🎵",
        },
        { href: "/category/diy-creation", label: "DIY & Creation", icon: "🛠️" },
        {
          href: "/category/integration-growth",
          label: "Integration & Growth",
          icon: "🧘🏽‍♂️",
        },
        {
          href: "/category/learning-projects",
          label: "Learning Projects",
          icon: "📚",
        },
        { href: "/category/metaspace", label: "Metaspace", icon: "🌀" },
        { href: "/category/parenting", label: "Parenting", icon: "👨‍👩‍👧‍👦" },
        { href: "/category/politics", label: "Politics", icon: "⚖️" },
        { href: "/category/psychology", label: "Psychology", icon: "🧠" },
        {
          href: "/category/systems-strategy",
          label: "Systems & Strategy",
          icon: "💻",
        },
      ],
    },
  },
  { href: "/about", label: "About" },
];
