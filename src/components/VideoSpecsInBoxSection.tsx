import React, { useState } from 'react';
import { Play, Pause, ArrowRight, ChevronDown, ChevronUp, Monitor, Shield, Gamepad2, Laptop, Check } from 'lucide-react';
import heroImg from '../assets/images/zenscreen_fold_hero_1786524996482.jpg';

interface AccordionItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
  content: { label: string; value: string }[];
}

export const VideoSpecsInBoxSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [expandedSection, setExpandedSection] = useState<string | null>('display');

  const specAccordions: AccordionItem[] = [
    {
      id: 'product',
      title: 'ANYKING Fold OLED MQ17QH',
      content: [
        { label: 'Model Name', value: 'MQ17QH' },
        { label: 'Display Panel', value: '17.3" Foldable OLED' },
        { label: 'Weight', value: '1.17 kg (2.58 lbs)' },
        { label: 'Thickness', value: '9.7 mm (unfolded) / 19.4 mm (folded)' }
      ]
    },
    {
      id: 'certifications',
      title: 'Certifications & Product Information',
      icon: <Shield className="w-4 h-4 text-[#E6DDCE]" />,
      content: [
        { label: 'Safety & EMC', value: 'CE, FCC, BSMI, CB, CCC, VCCI, RoHS' },
        { label: 'Eye Care', value: 'TÜV Rheinland Low Blue Light & Flicker Free' },
        { label: 'Energy Star', value: 'ENERGY STAR® Qualified' }
      ]
    },
    {
      id: 'display',
      title: 'Display & Panel Performance',
      icon: <Monitor className="w-4 h-4 text-[#E6DDCE]" />,
      content: [
        { label: 'Panel Size', value: '17.3-inch Foldable OLED (16:10 aspect ratio)' },
        { label: 'Resolution', value: 'QHD+ (2560 x 1920) OLED' },
        { label: 'Color Gamut', value: '100% DCI-P3 Cinema Grade' },
        { label: 'Contrast Ratio', value: '1,000,000:1 (HDR True Black 500)' },
        { label: 'Brightness', value: '500 nits Peak Brightness' },
        { label: 'Response Time', value: '0.2 ms ultra-fast' }
      ]
    },
    {
      id: 'os',
      title: 'Compatible Operating Systems',
      icon: <Laptop className="w-4 h-4 text-[#C8CBCB]" />,
      content: [
        { label: 'macOS', value: 'Fully compatible (Plug & Play)' },
        { label: 'Windows', value: 'Windows 11 / 10 (DisplayWidget Center support)' },
        { label: 'ChromeOS', value: 'Supported via Type-C DP Alt mode' },
        { label: 'Mobile / Handhelds', value: 'iOS, Android, Steam Deck, Switch' }
      ]
    },
    {
      id: 'gaming',
      title: 'Gaming & High Refresh Features',
      icon: <Gamepad2 className="w-4 h-4 text-[#E6DDCE]" />,
      content: [
        { label: 'HDR Support', value: 'VESA DisplayHDR™ True Black 500' },
        { label: 'Low Latency', value: 'Sub-1ms input lag' },
        { label: 'GamePlus Tools', value: 'Crosshair, Timer, FPS Counter' }
      ]
    }
  ];

  const inBoxItems = [
    {
      name: '1x ANYKING Fold OLED MQ17QH',
      type: 'Monitor',
      desc: '17.3" Foldable Monitor'
    },
    {
      name: '1x Type-C to Type-C Cable',
      type: 'Video & Data',
      desc: 'Full-featured USB-C'
    },
    {
      name: '1x Type-C Power Cable',
      type: 'Power',
      desc: 'For PD Charger'
    },
    {
      name: '1x Mini HDMI to HDMI Cable',
      type: 'Video',
      desc: 'Braided High Speed'
    },
    {
      name: '1x 65W PD Power Adapter',
      type: 'Charger',
      desc: 'Compact GaN Charger'
    },
    {
      name: '1x Protective Sleeve & Manual',
      type: 'Accessory',
      desc: 'Carrying Case included'
    }
  ];

  const toggleAccordion = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <section id="video-specs-inbox" className="bg-[#25282B] text-[#F6F4EF] py-0 border-b border-[#5E6265]/40 overflow-hidden">
      
      {/* TOP PART: LIFESTYLE VIDEO / BANNER HERO WITH ORDER CTA */}
      <div className="relative w-full h-[55vh] min-h-[420px] max-h-[600px] bg-[#25282B] overflow-hidden group">
        
        {/* Background Video / Image Backdrop */}
        <img
          src={heroImg}
          alt="Upgrade your laptop setup with ANYKING Fold OLED"
          className="w-full h-full object-cover opacity-50 filter brightness-90 contrast-105 group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />

        {/* Ambient Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#25282B] via-[#25282B]/60 to-black/70 pointer-events-none" />

        {/* Center CTA Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-6 z-10">
          
          <span className="text-xs font-mono font-bold tracking-widest text-[#E6DDCE] uppercase bg-[#25282B]/80 px-3.5 py-1.5 rounded-full border border-[#E6DDCE]/40 shadow-lg">
            Elevate Your Mobile Workspace
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#F6F4EF] tracking-tight leading-tight max-w-4xl">
            Upgrade your laptop setup today.
          </h2>

          <p className="text-[#C8CBCB] text-sm sm:text-base lg:text-lg max-w-2xl font-normal leading-relaxed">
            Get your ANYKING Fold OLED MQ17QH now and experience the world's first 17.3" foldable OLED dual-screen freedom.
          </p>

          <a
            href="#buy-now"
            className="starlight-gradient-btn inline-flex items-center space-x-2 font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-[0_0_25px_rgba(230,221,206,0.3)] transition-all transform hover:scale-105 active:scale-95"
          >
            <span>Order Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>

        </div>

        {/* Video Play / Pause Toggle Button (Bottom Right) */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause video" : "Play video"}
          className="absolute bottom-6 right-6 z-20 w-11 h-11 rounded-full bg-[#25282B]/80 hover:bg-[#25282B] backdrop-blur-md border border-[#E6DDCE]/40 text-[#E6DDCE] flex items-center justify-center transition-all shadow-2xl active:scale-95"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-[#E6DDCE]" />
          ) : (
            <Play className="w-5 h-5 fill-[#E6DDCE] translate-x-0.5" />
          )}
        </button>

      </div>

      {/* BOTTOM PART: TECHNICAL SPECIFICATIONS & INCLUDED IN THE BOX */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
        
        {/* SECTION TITLE & ALL TECH SPECS BUTTON */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#F6F4EF]">
              Technical Specifications
            </h3>
            <div className="w-32 h-1 bg-gradient-to-r from-[#E6DDCE] via-[#C8CBCB] to-[#5E6265] rounded-full mt-2" />
          </div>

          <a
            href="#full-specs"
            className="inline-flex items-center space-x-2 bg-[#5E6265]/20 hover:bg-[#5E6265]/40 text-[#F6F4EF] border border-[#C8CBCB]/40 text-xs sm:text-sm font-mono font-bold px-5 py-2.5 rounded-full transition-all hover:text-[#E6DDCE]"
          >
            <span>All Tech Specs</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* TWO COLUMN GRID: LEFT SPECS ACCORDION + RIGHT INCLUDED IN THE BOX CARD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: Accordions (Lg: col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            {specAccordions.map((item) => {
              const isOpen = expandedSection === item.id;
              return (
                <div 
                  key={item.id}
                  className="bg-[#25282B] border border-[#5E6265]/60 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#5E6265]/20 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-bold text-sm sm:text-base text-[#F6F4EF] font-sans">
                        {item.title}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#E6DDCE]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#C8CBCB]" />
                    )}
                  </button>

                  {/* Expanded Specs Content Table */}
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 border-t border-[#5E6265]/40 space-y-2.5 bg-black/20">
                      {item.content.map((row, idx) => (
                        <div key={idx} className="flex justify-between text-xs sm:text-sm py-1 border-b border-[#5E6265]/30 last:border-none">
                          <span className="text-[#C8CBCB] font-mono">{row.label}</span>
                          <span className="text-[#F6F4EF] font-medium font-sans text-right">{row.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: INCLUDED IN THE BOX CARD (Lg: col-span-5) */}
          <div className="lg:col-span-5 relative">
            
            {/* Dark Card Container with Top Pegboard Hole Design */}
            <div className="bg-[#25282B] border border-[#C8CBCB]/40 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Pegboard Hanger Slot Graphic */}
              <div className="w-20 h-5 bg-[#5E6265]/30 border border-[#C8CBCB]/30 rounded-full mx-auto mb-6 flex items-center justify-center shadow-inner">
                <div className="w-10 h-1.5 bg-[#C8CBCB] rounded-full" />
              </div>

              {/* Title */}
              <h4 className="text-2xl font-black text-[#F6F4EF] text-center mb-6 tracking-tight font-sans">
                Included in the Box
              </h4>

              {/* 6 Icons Grid (2 Columns x 3 Rows) */}
              <div className="grid grid-cols-2 gap-4">
                {inBoxItems.map((boxItem, idx) => (
                  <div 
                    key={idx}
                    className="bg-[#5E6265]/20 border border-[#C8CBCB]/30 rounded-2xl p-3.5 flex flex-col items-center text-center space-y-2 hover:border-[#E6DDCE] transition-colors group"
                  >
                    {/* Circle Icon Box */}
                    <div className="w-12 h-12 rounded-full bg-[#25282B] border border-[#E6DDCE]/50 flex items-center justify-center group-hover:border-[#E6DDCE] transition-colors shadow-md">
                      <Check className="w-5 h-5 text-[#E6DDCE]" />
                    </div>

                    {/* Item Name */}
                    <div className="text-xs font-bold text-[#F6F4EF] font-sans leading-tight">
                      {boxItem.name}
                    </div>

                    {/* Desc Tag */}
                    <div className="text-[10px] font-mono text-[#C8CBCB]">
                      {boxItem.desc}
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
