import { IMAGES } from "./images";

export type ProductSpec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: "battery" | "shield" | "zap";
  accent: "brand" | "navy" | "amber";
  image: string;
  specs: ProductSpec[];
  features: string[];
  useCases: string[];
  configs: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "powerbuffer",
    name: "PowerBuffer",
    tagline: "Peak shaving & demand charge reduction",
    description:
      "High-power LFP battery system that absorbs peak loads and discharges during high-demand windows. Cuts demand charges by up to 40% with sub-100ms response and grid-forming black-start capability.",
    icon: "battery",
    accent: "brand",
    image: IMAGES.powerBuffer,
    features: [
      "High-power LFP cells with optional supercapacitor layer",
      "Sub-100ms response with grid-forming PCS",
      "Bidirectional, grid-connected and islanded modes",
      "Liquid cooling for high cycle-rate operation",
    ],
    useCases: ["Manufacturing plants", "Cold storage", "EV fast-charge hubs", "Commercial buildings"],
    configs: ["1 MW / 0.5 MWh", "2.5 MW / 1.25 MWh", "5 MW / 2.5 MWh"],
    specs: [
      { label: "Rated power", value: "1 – 5 MW" },
      { label: "Usable energy", value: "0.5 – 2.5 MWh" },
      { label: "Duration @ rated power", value: "15 – 60 min" },
      { label: "Power-to-energy ratio", value: "1 – 4" },
      { label: "Cell chemistry", value: "High-power LFP" },
      { label: "Optional fast storage", value: "Supercapacitor / Lithium-Titanate" },
      { label: "AC voltage", value: "400–690 V AC (LV) or MV via transformer" },
      { label: "PCS", value: "Bidirectional, grid-forming capable" },
      { label: "Response time", value: "< 100 ms" },
      { label: "Cooling", value: "Liquid cooling" },
      { label: "Operating modes", value: "Grid-connected, islanded, black start" },
    ],
  },
  {
    slug: "resiliencestore",
    name: "ResilienceStore",
    tagline: "Backup power & microgrid islanding",
    description:
      "Long-duration LFP storage with 1,500V DC architecture and redundant microgrid controls. Keeps critical loads online through outages with integrated fire protection and MV interconnection.",
    icon: "shield",
    accent: "navy",
    image: IMAGES.resilienceStore,
    features: [
      "1,500 V DC battery architecture for high efficiency",
      "Up to 6.5 MWh per 20-foot container",
      "Redundant EMS and microgrid controller",
      "Full fire protection: detection, isolation, ventilation, suppression",
    ],
    useCases: ["Hospitals & clinics", "Data centers", "Water utilities", "Emergency shelters"],
    configs: ["2.5 MW / 5 MWh", "2.5 MW / 10 MWh", "5 MW / 10 MWh", "5 MW / 20 MWh"],
    specs: [
      { label: "Rated power", value: "2.5 – 10 MW" },
      { label: "Usable energy", value: "5 – 40 MWh" },
      { label: "Standard duration", value: "2 – 4 hours" },
      { label: "Power-to-energy ratio", value: "0.25 – 0.5" },
      { label: "Cell chemistry", value: "LFP" },
      { label: "Battery architecture", value: "1,500 V DC" },
      { label: "Container energy", value: "Up to 5–6.5 MWh per 20 ft (typ.)" },
      { label: "PCS", value: "Central or modular" },
      { label: "MV connection", value: "11 / 13.8 / 22 / 33 kV" },
      { label: "Cooling", value: "Liquid cooling" },
      { label: "Fire protection", value: "Detection, isolation, ventilation, suppression" },
      { label: "Controls", value: "Redundant EMS & microgrid controller" },
    ],
  },
  {
    slug: "hybridpower",
    name: "HybridPower",
    tagline: "Solar + storage + generator integration",
    description:
      "Combines solar PV, BESS, and backup generation into a single microgrid-managed system. Optimizes self-consumption, minimizes generator runtime, and enables fully off-grid operation for remote sites.",
    icon: "zap",
    accent: "amber",
    image: IMAGES.hybridPower,
    features: [
      "Integrates solar PV, BESS, and generator/fuel cell",
      "Microgrid controller manages all generation assets",
      "Minimizes generator runtime and fuel costs",
      "Off-grid and edge-of-grid capable",
    ],
    useCases: ["Remote telecom", "Mining operations", "Island communities", "Agricultural sites"],
    configs: ["BESS + PV + Generator", "BESS + PV + Fuel Cell", "Full off-grid microgrid"],
    specs: [
      { label: "Critical load", value: "2 – 50 MW+" },
      { label: "BESS", value: "1 – 20 MW / 2 – 80 MWh+" },
      { label: "Solar PV", value: "1 – 50 MWp" },
      { label: "Generator", value: "2 – 50 MW" },
      { label: "Fuel cell", value: "250 kW – 10 MW" },
      { label: "System architecture", value: "PV → Grid → BESS → Critical load" },
      { label: "Controller", value: "Microgrid EMS (redundant)" },
      { label: "Operating mode", value: "Grid-tied, islanded, off-grid" },
      { label: "Cooling", value: "Liquid cooling" },
    ],
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const TEAM: TeamMember[] = [
  { name: "Elena Brandt", role: "Founder & CEO", bio: "Fifteen years in utility-scale storage, formerly lead BESS architect at a national lab. Founded EBenergy to make resilient power accessible to industry.", initials: "EB" },
  { name: "Marcus Okafor", role: "VP, Engineering", bio: "Power-electronics engineer with 12 years designing grid-tied inverters and microgrid controllers. Holds four patents in islanding topology.", initials: "MO" },
  { name: "Priya Shah", role: "VP, Operations", bio: "Manages commissioning and O&M across the EBenergy fleet. Background in industrial automation and SCADA systems for utilities.", initials: "PS" },
  { name: "Tom Halvorsen", role: "Director, Software", bio: "Leads the EMS platform and analytics team. Previously built grid-optimization software for two demand-response aggregators.", initials: "TH" },
];

export type Certification = { name: string; code: string };

export const CERTIFICATIONS: Certification[] = [
  { name: "UL 9540", code: "Energy Storage Systems" },
  { name: "UL 1973", code: "Battery Cells" },
  { name: "IEEE 1547", code: "Interconnection" },
  { name: "NFPA 855", code: "Fire Safety" },
  { name: "IEC 62477", code: "Power Electronics" },
  { name: "ISO 9001:2015", code: "Quality Management" },
];
