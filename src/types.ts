export interface SpecCategory {
  title: string;
  items: { label: string; value: string }[];
}

export type FoldAngle = number; // 0 to 180

export type DisplayPreset = 'developer' | 'creator' | 'multitask' | 'trader' | 'cinema';

export interface DisplayPresetData {
  id: DisplayPreset;
  title: string;
  description: string;
  iconName: string;
  topApp: string;
  bottomApp: string;
  bgGradient: string;
}

export interface UsageMode {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  aspectRatio: string;
  screenSize: string;
  image: string;
  benefits: string[];
}

export interface PortHotspot {
  id: string;
  name: string;
  location: string;
  description: string;
  x: number; // percentage
  y: number; // percentage
  side: 'left' | 'right' | 'bottom';
}

export interface ColorMode {
  id: string;
  name: string;
  description: string;
  gamut: string;
  deltaE: string;
  brightness: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'product' | 'lifestyle' | 'hinge' | 'modes';
  imageUrl: string;
  caption: string;
}
