import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

export const SeamlessCapabilityScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableHeight = rect.height - windowHeight;

      if (scrollableHeight <= 0) return;

      const currentScroll = -rect.top;
      const currentProgress = Math.min(Math.max(currentScroll / scrollableHeight, 0), 1);
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sequential Reveal Logic:
  // Phase 1: "GO." appears first (progress 0.05 -> 0.45)
  // Phase 2: "UNFOLD." appears next (progress 0.45 -> 0.85)
  const goOpacity = Math.min(Math.max((progress - 0.05) / 0.25, 0), 1);
  const goScale = 0.9 + Math.min(progress / 0.5, 1) * 0.15;
  const goY = (1 - Math.min(progress / 0.3, 1)) * 40;

  const unfoldOpacity = Math.min(Math.max((progress - 0.4) / 0.3, 0), 1);
  const unfoldScale = 0.85 + Math.min(Math.max((progress - 0.4) / 0.4, 0), 1) * 0.2;
  const unfoldY = (1 - Math.min(Math.max((progress - 0.4) / 0.3, 0), 1)) * 50;

  // Subtitle reveal
  const subOpacity = Math.min(Math.max((progress - 0.6) / 0.3, 0), 1);

  // Soft backlight glow
  const glowOpacity = Math.sin(progress * Math.PI);

  return (
    <section 
      ref={containerRef} 
      id="seamless-capability" 
      className="relative bg-[#25282B] text-[#F6F4EF] h-[240vh] border-b border-[#5E6265]/40"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#25282B]">
        
        {/* Soft Ambient Gold/Warm Backlight Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1000px] h-[50vh] bg-gradient-to-r from-[#E6DDCE]/15 via-[#F6F4EF]/10 to-[#5E6265]/15 blur-[140px] rounded-full pointer-events-none transition-opacity duration-500"
          style={{ opacity: glowOpacity * 0.9 }}
        />

        {/* CENTER GIANT SCROLL-REVEAL TEXT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center justify-center">
          
          {/* Badge Label */}
          <div 
            className="mb-6 inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#1D2022] border border-[#E6DDCE]/40 text-[#E6DDCE] text-xs font-mono uppercase tracking-widest shadow-xl transition-all duration-300"
            style={{ opacity: Math.min(progress / 0.2, 1) }}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E6DDCE]" />
            <span>ANYKING Dual Screen Mobility</span>
          </div>

          {/* SEQUENTIAL HEADING: GO. -> UNFOLD. */}
          <div className="space-y-2 sm:space-y-4">
            
            {/* 1. First Reveal: "GO." */}
            <div 
              className="transition-all duration-200 ease-out"
              style={{
                opacity: goOpacity,
                transform: `scale(${goScale}) translateY(${goY}px)`
              }}
            >
              <span className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-tighter uppercase leading-none bg-gradient-to-r from-[#F6F4EF] via-[#E6DDCE] to-[#C8CBCB] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] block">
                GO.
              </span>
            </div>

            {/* 2. Second Reveal: "UNFOLD." */}
            <div 
              className="transition-all duration-200 ease-out"
              style={{
                opacity: unfoldOpacity,
                transform: `scale(${unfoldScale}) translateY(${unfoldY}px)`
              }}
            >
              <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black tracking-tighter uppercase leading-none text-[#E6DDCE] drop-shadow-[0_0_50px_rgba(230,221,206,0.3)] block">
                UNFOLD.
              </span>
            </div>

          </div>

          {/* Subtitle Headline: SEAMLESSLY INTUITIVE AND EXPANSIVE CAPABILITY */}
          <div 
            className="mt-8 transition-all duration-300 ease-out max-w-3xl"
            style={{
              opacity: subOpacity,
              transform: `translateY(${(1 - subOpacity) * 20}px)`
            }}
          >
            <p className="text-lg sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#F6F4EF] uppercase font-sans">
              SEAMLESSLY INTUITIVE AND EXPANSIVE CAPABILITY
            </p>
            <p className="text-xs sm:text-sm text-[#C8CBCB] mt-2 font-mono tracking-wide">
              Double your screen area anywhere • 15.6" Dual 1080P FHD IPS Displays
            </p>
          </div>

        </div>

        {/* RIGHT SIDE FLOATING CAPSULE NAVIGATION INDICATOR */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end space-y-4 text-[11px] font-mono tracking-wider">
          <div className="flex items-center space-x-2 text-[#C8CBCB] opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
            <span>COMPACT</span>
            <span className="w-2 h-2 rounded-full border border-[#5E6265]" />
          </div>

          <div className="flex items-center space-x-2 text-[#C8CBCB] opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
            <span>VIBRANT</span>
            <span className="w-2 h-2 rounded-full border border-[#5E6265]" />
          </div>

          <div className="flex items-center space-x-2 text-[#F6F4EF] font-bold">
            <span className="tracking-widest text-[#E6DDCE]">VERSATILE</span>
            <span className="w-1.5 h-6 rounded-full bg-[#E6DDCE] shadow-[0_0_10px_rgba(230,221,206,0.8)]" />
          </div>
        </div>

      </div>
    </section>
  );
};

