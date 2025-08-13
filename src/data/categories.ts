export interface Category {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export const categories: Category[] = [
  {
    id: "art-expression",
    name: "Art & Expression",
    description: "Creative content, aesthetic exploration, and artistic expression",
    icon: "🎵",
  },
  {
    id: "culture",
    name: "Culture",
    description: "Social norms, collective behavior, and cultural insights",
    icon: "🌍",
  },
  {
    id: "diy-creation",
    name: "DIY & Creation",
    description: "Physical builds, handmade goods, and creative projects",
    icon: "🛠️",
  },
  {
    id: "personal-growth",
    name: "Personal Growth",
    description: "Inner development, self-improvement, and personal transformation",
    icon: "🧘🏽‍♂️",
  },
  {
    id: "learning-projects",
    name: "Learning Projects",
    description: "Documentation of skills and knowledge acquisition",
    icon: "📚",
  },
  {
    id: "metaspace",
    name: "Metaspace",
    description:
      "Reflections on the journey itself — the why, the how, and the process of creation",
    icon: "🌀",
  },
  {
    id: "family-relationships",
    name: "Family & Relationships",
    description:
      "Family dynamics, relationships, and personal connections",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    id: "society-culture",
    name: "Society & Culture",
    description: "Social structures, cultural dynamics, and collective insights",
    icon: "⚖️",
  },
  {
    id: "psychology",
    name: "Psychology",
    description: "Human behavior, mental processes, and psychological insights",
    icon: "🧠",
  },
  {
    id: "systems-strategy",
    name: "Systems & Strategy",
    description: "Technical systems, organizational design, and strategic thinking",
    icon: "💻",
  },
];
