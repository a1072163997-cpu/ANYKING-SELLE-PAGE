import heroImg from '../assets/images/anyking_triple_hero_1786532666152.jpg';
import flatImg from '../assets/images/anyking_triple_hero_1786532666152.jpg';
import hingeImg from '../assets/images/anyking_kickstand_rear_1786532679720.jpg';
import portraitImg from '../assets/images/anyking_bag_accessories_1786532694437.jpg';

import { DisplayPresetData, UsageMode, PortHotspot, SpecCategory, ColorMode, GalleryItem } from '../types';

export const PRODUCT_INFO = {
  name: "ANYKING 15.6\" Dual Laptop Screen Extender",
  modelNumber: "H15-Dual",
  tagline: "Triple Your Workspace",
  subTagline: "Dual 1080P FHD IPS Portable Monitor for 13–17.3\" Laptops",
  price: 349.99,
  rating: 4.9,
  reviewsCount: 328,
  keyHighlights: [
    { value: "15.6\" Dual", label: "Dual 1080P FHD IPS", sub: "1920 x 1080 per screen" },
    { value: "300 Nits", label: "100% sRGB Color", sub: "1000:1 Contrast Ratio" },
    { value: "Plug & Play", label: "USB-C & HDMI", sub: "Windows, Mac, Chrome, Switch" },
    { value: "3.19 lbs", label: "Aluminum Alloy Body", sub: "180° Rotating Stand" },
  ],
  heroImages: {
    hero: heroImg,
    flat: flatImg,
    hinge: hingeImg,
    portrait: portraitImg,
  }
};

export const DISPLAY_PRESETS: DisplayPresetData[] = [
  {
    id: 'developer',
    title: 'Developer / Triple Screen Coding',
    description: 'Main laptop for primary editor, Screen 1 for terminal & logs, Screen 2 for live web preview.',
    iconName: 'Code',
    topApp: 'VS Code Main IDE (15.6" Center)',
    bottomApp: 'Terminal & Live Server Debugger (15.6" Dual Extenders)',
    bgGradient: 'from-slate-900 via-indigo-950 to-slate-900'
  },
  {
    id: 'creator',
    title: 'Spreadsheets & Data Analytics',
    description: 'Keep complex Excel workbooks, financial models, and research documents open side-by-side without window switching.',
    iconName: 'Video',
    topApp: 'Financial Dashboard & Live Data Feed',
    bottomApp: 'Multi-Tab Excel Workbook & Reference PDF',
    bgGradient: 'from-slate-950 via-purple-950 to-slate-900'
  },
  {
    id: 'trader',
    title: 'Video Calls & Remote Meetings',
    description: 'Run Zoom/Teams calls on one screen while sharing slides on second and taking meeting notes on third.',
    iconName: 'TrendingUp',
    topApp: '1080P FHD Conference Call Window',
    bottomApp: 'Presentation Slides & Live Agenda Notes',
    bgGradient: 'from-zinc-950 via-emerald-950 to-zinc-900'
  },
  {
    id: 'multitask',
    title: 'Online Study & Research',
    description: 'Watch video lectures on one display, read course PDF on second, and write notes on your laptop keyboard.',
    iconName: 'FileText',
    topApp: '4K Online Course Lecture Video',
    bottomApp: 'Interactive Study Notes & Digital Textbook',
    bgGradient: 'from-slate-900 via-blue-950 to-slate-900'
  },
  {
    id: 'cinema',
    title: 'Portable Gaming & Entertainment',
    description: 'Connect Nintendo Switch or laptop via USB-C/HDMI with dual built-in speakers for immersive audio.',
    iconName: 'Film',
    topApp: 'Full 1080P 60Hz Gaming Stream',
    bottomApp: 'Discord Chat & Game Walkthrough Guide',
    bgGradient: 'from-neutral-950 via-red-950 to-neutral-900'
  }
];

export const USAGE_MODES: UsageMode[] = [
  {
    id: 'triple-screen',
    title: 'Triple Screen Workstation Mode',
    subtitle: 'Maximum Workspace Productivity',
    description: 'Extend your 13-17.3" laptop with two 15.6" 1080P FHD IPS displays attached to both sides. Compare documents, manage spreadsheets, and code seamlessly.',
    aspectRatio: '16:9 x 2',
    screenSize: 'Dual 15.6 inch',
    image: heroImg,
    benefits: ['Fits 13" to 17.3" laptops securely', 'Boosts efficiency by up to 300%', 'No driver installation required (Plug & Play)']
  },
  {
    id: 'collaboration-180',
    title: '180° Rotation Presentation Mode',
    subtitle: 'Face-to-Face Meeting Sharing',
    description: 'Rotate the extender screens up to 180° to easily share slides, reports, and designs with clients and teammates sitting opposite or around the table.',
    aspectRatio: '180° Swivel',
    screenSize: 'Multi-angle Sharing',
    image: flatImg,
    benefits: ['180° flexible rotation angle', 'Ideal for client presentations & group meetings', 'Stable built-in support stand']
  },
  {
    id: 'vertical-stack',
    title: 'Vertical Document & Reading Mode',
    subtitle: 'Long Form Content Review',
    description: 'Position screens vertically to read long research documents, review code, or monitor real-time news and stock feeds.',
    aspectRatio: '9:16 Vertical',
    screenSize: 'Dual 15.6" Vertical',
    image: portraitImg,
    benefits: ['Reduces vertical scrolling', 'Crisp 1080P text clarity with IPS panel', '100% sRGB color precision']
  },
  {
    id: 'tent-gaming',
    title: 'Stand-Alone & Travel Mode',
    subtitle: 'Compact Business Travel Companion',
    description: 'Folds compactly into the included premium carrying bag for remote work, business trips, coffee shop productivity, and portable gaming.',
    aspectRatio: 'Ultra Portable',
    screenSize: '3.19 lbs Slim Body',
    image: hingeImg,
    benefits: ['Sleek aluminum alloy body', 'Includes complete cable set & carrying bag', 'Built-in stereo audio speakers']
  }
];

export const PORT_HOTSPOTS: PortHotspot[] = [
  {
    id: 'usbc-primary',
    name: 'USB Type-C® (Full Function Video & Power)',
    location: 'Left Screen Rear Panel',
    description: 'Single-cable DisplayPort Alt Mode connection transmitting video signal and power directly from compatible laptops.',
    x: 20,
    y: 70,
    side: 'left'
  },
  {
    id: 'usbc-secondary',
    name: 'USB Type-C® (Power Supply Input)',
    location: 'Right Screen Rear Panel',
    description: 'Connects to the included power adapter to supply additional power for high brightness or passthrough laptop charging.',
    x: 20,
    y: 35,
    side: 'left'
  },
  {
    id: 'hdmi-input',
    name: 'Mini HDMI® Video Input',
    location: 'Rear Connectivity Hub',
    description: 'Provides high-definition 1080P video input for laptops, PCs, gaming consoles (Switch/PS5), and camera gear.',
    x: 80,
    y: 40,
    side: 'right'
  },
  {
    id: 'speakers',
    name: 'Built-in Dual Stereo Speakers',
    location: 'Integrated Side Chassis',
    description: 'Delivers clear, rich audio for video conferences, online learning, media playback, and gaming without extra external speakers.',
    x: 82,
    y: 65,
    side: 'right'
  },
  {
    id: 'support-stand',
    name: 'Adjustable Stable Support Structure',
    location: 'Rear Extendable Kickstand',
    description: 'Provides rock-solid support and weight distribution to protect your laptop hinge and keep screens steady during typing.',
    x: 50,
    y: 88,
    side: 'bottom'
  }
];

export const COLOR_MODES: ColorMode[] = [
  {
    id: 'srgb',
    name: '100% sRGB Vivid Color',
    description: 'Full 100% sRGB color gamut coverage delivering vibrant, true-to-life visuals for web design, photo editing, and media.',
    gamut: '100% sRGB',
    deltaE: '< 2.0',
    brightness: '300 nits'
  },
  {
    id: 'fhd-ips',
    name: '1080P FHD IPS Precision',
    description: 'Crisp 1920x1080 resolution on each screen with wide 178° viewing angles and 1000:1 contrast ratio.',
    gamut: '16.7M Colors',
    deltaE: '< 2.0',
    brightness: '300 nits'
  },
  {
    id: 'eyecare',
    name: 'Low Blue Light Eye Care Mode',
    description: 'Reduces harmful blue light emissions and screen flicker during long work or study sessions.',
    gamut: 'Soft Calibrated Warm',
    deltaE: 'N/A',
    brightness: '180 nits'
  },
  {
    id: 'gaming-mode',
    name: '60Hz Fast Response Gaming',
    description: 'Smooth 60Hz refresh rate optimized for casual gaming on Nintendo Switch, PC, and consoles.',
    gamut: '100% sRGB 8-bit',
    deltaE: '< 2.0',
    brightness: '300 nits (1000:1)'
  }
];

export const SPECIFICATIONS: SpecCategory[] = [
  {
    title: "Display Panel & Visual Performance",
    items: [
      { label: "Screen Size", value: "15.6-inch Dual Displays (Each screen 15.6\")" },
      { label: "Supported Laptop Size", value: "Fits 13-inch to 17.3-inch Laptops" },
      { label: "Panel Type", value: "IPS Panel (Wide 178° Viewing Angle)" },
      { label: "Resolution", value: "1920 x 1080P FHD (Each Screen)" },
      { label: "Brightness", value: "300 cd/m² (Nits)" },
      { label: "Color Gamut", value: "100% sRGB Coverage" },
      { label: "Display Colors", value: "16.7 Million Colors" },
      { label: "Contrast Ratio", value: "1000:1 Static Contrast" },
      { label: "Refresh Rate", value: "60 Hz" },
      { label: "Audio", value: "Built-in Dual Stereo Speakers" }
    ]
  },
  {
    title: "Structure & Mechanical Design",
    items: [
      { label: "Rotation Capability", value: "180° Swivel Rotation Design" },
      { label: "Stand Structure", value: "Stable Extendable Support Stand Structure" },
      { label: "Chassis Material", value: "Premium Aluminum Alloy Body" },
      { label: "Weight", value: "3.19 lbs (1.45 kg) Portable Monitor Extender" },
      { label: "Design", value: "Slim, Portable Foldable Frame" }
    ]
  },
  {
    title: "Connectivity & Device Compatibility",
    items: [
      { label: "Signal Inputs", value: "USB Type-C® (DP Alt Mode) & HDMI Ports" },
      { label: "Plug & Play", value: "Supported (No drivers required for compatible devices)" },
      { label: "Compatible Systems", value: "Windows, Mac, Chrome OS, Android, Nintendo Switch" },
      { label: "macOS Base Chips Note", value: "MacBook with base M1/M2/M3 chip supports 1 external display. Requires H5 Adapter for full dual-screen expansion." },
      { label: "macOS Pro/Max Chips Note", value: "MacBook Pro / Max chip models support dual-screen extension natively." }
    ]
  },
  {
    title: "Included Package Accessories",
    items: [
      { label: "Carrying Case", value: "1x Premium Carrying Bag" },
      { label: "HDMI Cable", value: "1x HDMI to USB-C Cable" },
      { label: "USB-C Cables", value: "2x USB-C to USB-C Cables" },
      { label: "USB-A Cable", value: "1x USB-A to USB-C Cable" },
      { label: "Power Adapter", value: "1x Dedicated Power Adapter" },
      { label: "Documentation", value: "1x User Guide & 1x User Manual" },
      { label: "Packaging", value: "1x Protective Package Box" }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'ANYKING 15.6" Dual Screen Extender Setup',
    category: 'product',
    imageUrl: heroImg,
    caption: 'Dual 15.6-inch 1080P FHD IPS monitors attached to a laptop creating an expansive triple-screen workstation.'
  },
  {
    id: '2',
    title: '300 Nits 100% sRGB Dual IPS Displays',
    category: 'product',
    imageUrl: flatImg,
    caption: 'Crisp 1920x1080 resolution with vivid 100% sRGB color reproduction.'
  },
  {
    id: '3',
    title: '180° Swivel Rotation & Stable Support Stand',
    category: 'hinge',
    imageUrl: hingeImg,
    caption: '180° rotation design with rear support stand keeping screens rock steady.'
  },
  {
    id: '4',
    title: 'Slim Aluminum Body & Carrying Bag Kit',
    category: 'modes',
    imageUrl: portraitImg,
    caption: 'Lightweight 3.19 lbs aluminum alloy construction complete with custom carrying bag.'
  }
];

export const FAQS = [
  {
    question: "Is this 15.6\" dual screen extender compatible with my MacBook?",
    answer: "Yes! MacBook Pro and Max chip models (M1/M2/M3 Pro & Max, Intel Macs) support dual-screen extension natively via USB-C/HDMI. Note: Base M1, M2, and M3 MacBook models natively output to only one external display; to enable full dual-screen extension on base M1/M2/M3 MacBooks, our H5 adapter is required."
  },
  {
    question: "What laptop sizes are supported by the screen extender?",
    answer: "It is universally designed to fit laptops ranging from 13 inches up to 17.3 inches. The back mounting frame and stable support stand adjust smoothly to hold your laptop securely without placing stress on its hinge."
  },
  {
    question: "Do I need to install any drivers or software to use it?",
    answer: "No! It offers true Plug and Play connectivity over USB-C or HDMI. Simply plug in the included USB-C or HDMI cables to your Windows, Mac, Chrome OS, Android, or Nintendo Switch device."
  },
  {
    question: "What items are included in the package box?",
    answer: "The complete package includes: 1x 15.6\" Laptop Dual Screen Extender, 1x Carrying Bag, 1x HDMI to USB-C Cable, 2x USB-C to USB-C Cables, 1x USB-A to USB-C Cable, 1x Power Adapter, User Guide, User Manual, and Protective Package Box."
  }
];

