import React, { useState, useEffect, useRef } from 'react';
import heroImg from '../assets/images/zenscreen_fold_hero_1786524996482.jpg';

export const OledScrollRevealSection: React.FC = () => {
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

  // Interpolated animation values
  // Product monitor float/rise
  const productTranslateY = (1 - Math.min(progress / 0.35, 1)) * 120; // 120px down -> 0px
  const productOpacity = Math.min(progress / 0.2, 1);
  const screenGlow = Math.min(Math.max((progress - 0.15) / 0.35, 0), 1);

  // Text 1: Headline reveal (0.25 -> 0.55)
  const titleProgress = Math.min(Math.max((progress - 0.25) / 0.3, 0), 1);
  const titleY = (1 - titleProgress) * 30;

  // Text 2: Body paragraph reveal (0.50 -> 0.75)
  const bodyProgress = Math.min(Math.max((progress - 0.5) / 0.25, 0), 1);
  const bodyY = (1 - bodyProgress) * 30;

  // Text 3: Badges reveal (0.70 -> 0.95)
  const badgeProgress = Math.min(Math.max((progress - 0.7) / 0.25, 0), 1);
  const badgeY = (1 - badgeProgress) * 30;

  return (
    <section 
      ref={containerRef} 
      id="oled-scroll-reveal" 
      className="relative bg-[#25282B] text-[#F6F4EF] h-[280vh]"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#25282B]">
        
        {/* GIANT BACKGROUND TITLE: "IPS FHD" */}
        <div 
          className="absolute top-12 sm:top-16 lg:top-20 inset-x-0 text-center pointer-events-none select-none z-0 transition-opacity duration-300"
          style={{ opacity: 0.85 }}
        >
          <span className="text-[20vw] font-black tracking-tighter uppercase leading-none bg-gradient-to-r from-[#E6DDCE]/20 via-[#F6F4EF]/10 to-[#5E6265]/20 bg-clip-text text-transparent opacity-80">
            FHD IPS
          </span>
        </div>

        {/* MAIN DISPLAY CONTENT GRID */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          {/* LEFT: Stand Monitor with Dynamic OLED Screen Glow */}
          <div 
            className="lg:col-span-6 flex items-center justify-center relative transition-transform duration-100 ease-out"
            style={{
              transform: `translateY(${productTranslateY}px) scale(${0.92 + progress * 0.08})`,
              opacity: productOpacity
            }}
          >
            <div className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center">
              
              {/* Product Hardware Render Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={heroImg}
                  alt="ANYKING Dual 15.6 Screen Extender"
                  className="w-full max-h-[580px] object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
                  referrerPolicy="no-referrer"
                />

                {/* Animated Screen Light-up Overlay */}
                <div 
                  className="absolute inset-0 bg-gradient-to-tr from-[#E6DDCE]/15 via-[#F6F4EF]/20 to-[#E6DDCE]/15 mix-blend-screen pointer-events-none transition-opacity duration-500"
                  style={{ opacity: screenGlow }}
                />

                {/* Screen Edge Ambient Backlight Glow */}
                <div 
                  className="absolute -inset-4 bg-[#E6DDCE]/15 blur-3xl rounded-full pointer-events-none transition-opacity duration-700"
                  style={{ opacity: screenGlow * 0.8 }}
                />
              </div>

            </div>
          </div>

          {/* RIGHT: Sequential Scroll Reveal Content (Title -> Body -> Badges) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6 pt-10 lg:pt-0">
            
            {/* 1. Main Headline */}
            <h2 
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F6F4EF] tracking-tight leading-tight transition-all duration-300 ease-out"
              style={{
                opacity: titleProgress,
                transform: `translateY(${titleY}px)`
              }}
            >
              <span className="bg-gradient-to-r from-[#F6F4EF] via-[#E6DDCE] to-[#C8CBCB] bg-clip-text text-transparent">
                Vibrant & astonishing
              </span>
              <br />
              <span className="text-[#E6DDCE]">
                true-to-life color
              </span>
            </h2>

            {/* 2. Detailed Body Description */}
            <p 
              className="text-[#C8CBCB] text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-xl transition-all duration-300 ease-out"
              style={{
                opacity: bodyProgress,
                transform: `translateY(${bodyY}px)`
              }}
            >
              The ANYKING 15.6" Dual Screen Extender delivers amazing viewing experiences, with its brilliant 1080P FHD IPS panel that displays over 16.7 million vibrant colors. Its cinema-grade 100% sRGB color gamut makes it a superbly versatile productivity booster for professionals, creators, and multi-taskers.
            </p>

            {/* 3. Badges */}
            <div 
              className="pt-4 flex items-center space-x-8 transition-all duration-300 ease-out"
              style={{
                opacity: badgeProgress,
                transform: `translateY(${badgeY}px)`
              }}
            >
              {/* ANYKING Badge */}
              <div className="flex flex-col items-center justify-center space-y-1">
                <div className="w-14 h-14 rounded-full p-[2px] bg-gradient-to-tr from-[#E6DDCE] via-[#F6F4EF] to-[#5E6265] flex items-center justify-center shadow-lg">
                  <div className="w-full h-full rounded-full bg-[#25282B] flex items-center justify-center text-center p-1">
                    <span className="text-[9px] font-black tracking-widest text-[#E6DDCE] uppercase font-mono">
                      ANYKING<br />DUAL
                    </span>
                  </div>
                </div>
              </div>

              {/* 100% sRGB Color Gamut */}
              <div className="flex flex-col justify-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F6F4EF] font-mono tracking-tight">
                  100%
                </div>
                <div className="text-xs text-[#C8CBCB] font-mono tracking-wide">
                  sRGB color gamut
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT FLOATING CAPSULE NAVIGATION INDICATOR */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end space-y-4 text-[11px] font-mono tracking-wider">
          <div className="flex items-center space-x-2 text-[#C8CBCB] opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
            <span>COMPACT</span>
            <span className="w-2 h-2 rounded-full border border-[#5E6265]" />
          </div>

          <div className="flex items-center space-x-2 text-[#F6F4EF] font-bold">
            <span className="tracking-widest text-[#E6DDCE]">VIBRANT</span>
            <span className="w-1.5 h-6 rounded-full bg-[#E6DDCE] shadow-[0_0_10px_rgba(230,221,206,0.8)]" />
          </div>

          <div className="flex items-center space-x-2 text-[#C8CBCB] opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
            <span>VERSATILE</span>
            <span className="w-2 h-2 rounded-full border border-[#5E6265]" />
          </div>
        </div>

      </div>
    </section>
  );
};
