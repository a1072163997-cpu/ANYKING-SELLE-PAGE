import React, { useState, useEffect } from 'react';
import { Play, Pause, Monitor, Zap } from 'lucide-react';
import heroImg from '../assets/images/zenscreen_fold_hero_1786524996482.jpg';

export const EffortlessSetupSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [signalProgress, setSignalProgress] = useState(0);

  // Animated USB-C power & video signal flow simulation
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setSignalProgress((prev) => (prev + 1) % 100);
      }, 30);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="effortless-setup" className="bg-[#25282B] text-[#F6F4EF] py-20 px-4 sm:px-6 lg:px-12 border-b border-[#5E6265]/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: Headline, Description & Dual Capability Badges */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F6F4EF]">
              Plug and Play with USB-C and HDMI
            </h2>

            {/* Paragraph Text */}
            <p className="text-[#C8CBCB] text-base sm:text-lg leading-relaxed font-normal">
              This portable monitor extender provides seamless connectivity using full-function USB-C ports or HDMI. Easily connect to laptops, desktop PCs, mini PCs, smartphones, or gaming consoles like Switch with simple driver-free setup.
            </p>

            {/* Note on macOS chips */}
            <div className="bg-[#5E6265]/20 border border-[#E6DDCE]/40 p-4 rounded-xl space-y-1">
              <span className="text-[#E6DDCE] font-bold text-xs font-mono uppercase tracking-wider block">
                MACOS CHIP COMPATIBILITY NOTICE
              </span>
              <p className="text-xs text-[#F6F4EF] leading-normal">
                Base M1/M2/M3 MacBooks require an extra H5 driver/adapter for dual screen extension. M1/M2/M3 Pro & Max chips support dual screen display directly via USB-C!
              </p>
            </div>

            {/* DUAL FEATURE BADGES */}
            <div className="flex items-center space-x-8 pt-2">
              
              {/* Badge 1: Dual USB-C */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-lg border-2 border-[#C8CBCB] flex items-center justify-center relative bg-[#25282B] shadow-md">
                  <Monitor className="w-6 h-6 text-[#E6DDCE]" />
                </div>
                <div className="text-xs font-bold text-[#F6F4EF] font-mono leading-tight">
                  Dual Full-Function<br />USB-C Ports
                </div>
              </div>

              {/* Badge 2: Mini HDMI */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full border-2 border-[#C8CBCB] flex items-center justify-center bg-[#25282B] shadow-md">
                  <Zap className="w-6 h-6 text-[#E6DDCE] fill-[#E6DDCE]" />
                </div>
                <div className="text-xs font-bold text-[#F6F4EF] font-mono leading-tight">
                  HDMI Port &<br />Power Passthrough
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE: Visual Cable Connection Animation Container */}
          <div className="lg:col-span-7 flex flex-col items-center">
            
            {/* Video Frame Canvas Box */}
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#C8CBCB]/30 bg-[#25282B] shadow-2xl group">
              
              {/* Workspace Render Image */}
              <div className="relative w-full h-full flex items-center justify-center p-2 bg-[#25282B]">
                <img
                  src={heroImg}
                  alt="Effortless Plug and Play Setup with 15.6 Laptop Screen Extender"
                  className="w-full h-full object-cover rounded-xl filter brightness-95 contrast-110"
                  referrerPolicy="no-referrer"
                />

                {/* Animated Glowing Cable Path */}
                <div className="absolute inset-0 pointer-events-none">
                  {isPlaying && (
                    <div 
                      className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-[#E6DDCE] shadow-[0_0_15px_rgba(230,221,206,1)] transition-all duration-75"
                      style={{
                        transform: `translate(${(signalProgress - 50) * 3}px, ${Math.sin(signalProgress * 0.1) * 15}px)`
                      }}
                    />
                  )}
                </div>

                {/* Video Play / Pause Control */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause video preview" : "Play video preview"}
                  className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all shadow-xl active:scale-95"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white translate-x-0.5" />
                  )}
                </button>
              </div>

            </div>

            {/* Bottom Footnote Text */}
            <p className="text-[11px] text-[#C8CBCB] font-sans mt-3 text-left w-full leading-relaxed">
              *Note: Peak 300 nits brightness can be reached when connected with the included power adapter. When powered solely via laptop USB-C, brightness may auto-adjust to optimize power draw.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};
