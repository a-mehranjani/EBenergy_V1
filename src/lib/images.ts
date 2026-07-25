function pexels(id: number, w = 1200): string {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;
}

export const IMAGES = {
  hero:           pexels(9893727, 1600),
  heroAlt:        pexels(9800092, 1600),
  powerBuffer:    "/product-powerbuffer-v4.png",
  resilienceStore: "/product-resiliencestore-v4.png",
  hybridPower:    "/product-hybridpower-v4.png",
  engineer:       pexels(8961008, 1200),
  warehouse:      pexels(34207364, 1200),
} as const;
