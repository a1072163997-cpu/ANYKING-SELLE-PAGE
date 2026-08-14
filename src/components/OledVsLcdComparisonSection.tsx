import React, { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const OledVsLcdComparisonSection: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  return (
    <section id="oled-comparison" className="bg-[#25282B] text-[#F6F4EF] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#5E6265]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-8">
        
        {/* Main Section Header */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F6F4EF] tracking-tight leading-tight">
            High perceptual brightness, deep blacks
          </h2>
          <p className="text-[#C8CBCB] text-sm sm:text-base leading-relaxed">
            The advanced display technology in the ANYKING 15.6" Dual Screen Extender produces deep blacks and ensures vivid colors at any brightness level. It delivers extremely crisp, clear details even in dark scenes.
          </p>
        </div>

        {/* Contrast Ratio Metric & Display Badge */}
        <div className="flex flex-col items-center space-y-4 pt-2">
          {/* Contrast Ratio */}
          <div className="flex flex-col items-center">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#E6DDCE] font-mono tracking-tight">
              1000 : 1
            </div>
            <div className="text-xs text-[#C8CBCB] font-mono tracking-wider mt-1 uppercase">
              High Contrast Ratio
            </div>
          </div>

          {/* ANYKING True Color Certified Badge */}
          <div className="inline-flex items-center space-x-3 bg-[#1D2022] border border-[#5E6265]/60 px-4 py-2 rounded-lg shadow-xl">
            {/* ANYKING Graphic Icon */}
            <div className="flex items-center space-x-1">
              <div className="w-2.5 h-6 bg-[#E6DDCE] rounded-sm" />
              <div className="w-2.5 h-6 bg-[#F6F4EF] rounded-sm" />
              <div className="w-2.5 h-6 bg-[#C8CBCB] rounded-sm" />
              <div className="w-2.5 h-6 bg-[#5E6265] rounded-sm" />
            </div>
            <div className="text-left pl-1">
              <div className="text-[10px] font-bold text-[#C8CBCB] tracking-wider font-mono">ANYKING CERTIFIED</div>
              <div className="text-xs font-black text-[#F6F4EF] font-sans tracking-wide">FHD IPS <span className="text-[#E6DDCE]">True Color</span></div>
              <div className="text-[9px] font-bold text-[#C8CBCB] font-mono">DEEP BLACKS</div>
            </div>
          </div>
        </div>

        {/* COMPARISON SLIDER CONTAINER */}
        <div 
          ref={containerRef}
          className="relative w-full aspect-[16/9] max-h-[560px] rounded-2xl overflow-hidden border border-[#5E6265]/60 shadow-2xl select-none cursor-ew-resize group mt-8 bg-[#1D2022]"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* RIGHT SIDE IMAGE: High Contrast Rich Image */}
          <div className="absolute inset-0 w-full h-full bg-[#1D2022]">
            {/* Simulated Canyon Cave Rich Landscape Image */}
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80')`,
                filter: 'brightness(1.15) contrast(1.25) saturate(1.3)'
              }}
            />
            {/* Deep Black Shadows Layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60 mix-blend-multiply pointer-events-none" />
          </div>

          {/* LEFT SIDE IMAGE: Standard Screen Image (Masked by Slider) */}
          <div 
            className="absolute top-0 left-0 bottom-0 overflow-hidden bg-[#1D2022] border-r border-[#E6DDCE]"
            style={{ width: `${sliderPos}%` }}
          >
            <div 
              className="absolute top-0 left-0 bottom-0 w-full h-full bg-cover bg-center"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100vw',
                backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80')`,
                filter: 'brightness(0.85) contrast(0.85) saturate(0.7) blur(0.3px)'
              }}
            />
            {/* Backlight Glow Overlay */}
            <div className="absolute inset-0 bg-slate-500/20 mix-blend-screen pointer-events-none" />
          </div>

          {/* SLIDER DIVIDER LINE & HANDLE */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-[#E6DDCE] shadow-[0_0_12px_rgba(230,221,206,0.9)] cursor-ew-resize z-20"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Handle Circle Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#E6DDCE] text-[#25282B] backdrop-blur-md shadow-2xl border-2 border-[#F6F4EF] flex items-center justify-center space-x-0.5 group-hover:scale-110 transition-transform">
              <ChevronLeft className="w-4 h-4 text-[#25282B]" />
              <ChevronRight className="w-4 h-4 text-[#25282B]" />
            </div>
          </div>

          {/* LABELS: "Standard Screen ◄◄" AND "►► ANYKING FHD" */}
          <div className="absolute bottom-6 left-6 z-10 bg-[#25282B]/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#5E6265]/60 text-xs font-mono font-bold text-[#C8CBCB] flex items-center space-x-1.5 shadow-lg">
            <span>Standard Screen</span>
            <span className="text-[10px] text-[#C8CBCB]">◄◄</span>
          </div>

          <div className="absolute bottom-6 right-6 z-10 bg-[#25282B]/85 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-[#5E6265]/60 text-xs font-mono font-bold text-[#F6F4EF] flex items-center space-x-1.5 shadow-lg">
            <span className="text-[10px] text-[#E6DDCE]">►►</span>
            <span className="text-[#E6DDCE]">ANYKING FHD</span>
          </div>

        </div>

      </div>
    </section>
  );
};
