export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Drivers", href: "#drivers" },
  { label: "Safety", href: "#safety" },
  { label: "Cities", href: "#cities" },
];

export const navCTA = {
  label: "Get the App",
  href: "#download",
};

export const BRAND = {
  name: "inDrive",
  tagline: "Negotiate your fare. Ride on your terms.",
  appStoreUrl: "https://apps.apple.com",
  googlePlayUrl: "https://play.google.com",
};

export interface Stat {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "150M+", numericValue: 150, suffix: "M+", label: "Rides completed" },
  { value: "700+", numericValue: 700, suffix: "+", label: "Cities worldwide" },
  { value: "50M+", numericValue: 50, suffix: "M+", label: "App downloads" },
  { value: "4.8", numericValue: 4.8, suffix: "", label: "Average app rating" },
];