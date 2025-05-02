export interface NavItem {
  href: string;
  label: string;
}

export const mainNavigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/category", label: "Categories" },
  { href: "/about", label: "About" },
];
