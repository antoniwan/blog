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
          href: "/category/culture/",
          label: "Culture",
          icon: "🌍",
        },
        {
          href: "/category/diy-creation/",
          label: "DIY & Creation",
          icon: "🛠️",
        },
        {
          href: "/category/personal-growth/",
          label: "Personal Growth",
          icon: "🧘🏽‍♂️",
        },
        {
          href: "/category/learning-projects/",
          label: "Learning Projects",
          icon: "📚",
        },
        { href: "/category/metaspace/", label: "Metaspace", icon: "🌀" },
        { href: "/category/family-relationships/", label: "Family & Relationships", icon: "👨‍👩‍👧‍👦" },
        { href: "/category/society-culture/", label: "Society & Culture", icon: "⚖️" },
        { href: "/category/psychology/", label: "Psychology", icon: "🧠" },
        {
          href: "/category/systems-strategy/",
          label: "Systems & Strategy",
          icon: "💻",
        },
      ],
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
