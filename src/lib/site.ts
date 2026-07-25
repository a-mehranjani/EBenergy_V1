export const SITE = {
  name: "EBenergy",
  tagline: "Engineering the future of sustainable energy storage",
  description:
    "EBenergy designs and deploys commercial battery energy storage systems — peak shaving, grid resilience, and hybrid power — for utilities, industry, and communities.",
  url: "https://ebenergy.tech",
  email: "admin@ebenergy.tech",
  phone: "+44 (415) 555-0148",
  address: {
    line1: "11 Chalk Place",
    city: "Thaxted road",
    state: "Cambridge",
    zip: "CB11 3BY", 
    country: "UK",
  },
};

export const NAV_LINKS = [
  { label: "Solutions", path: "/solutions" },
  { label: "Technology", path: "/technology" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
] as const;
