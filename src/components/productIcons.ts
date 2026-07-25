import { Battery, ShieldCheck, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const PRODUCT_ICONS: Record<"battery" | "shield" | "zap", LucideIcon> = {
  battery: Battery,
  shield: ShieldCheck,
  zap: Zap,
};
