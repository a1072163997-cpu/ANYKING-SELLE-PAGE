import React, { useState, useEffect, useRef } from 'react';
import { Monitor, Gamepad2, Laptop, Tv, Sparkles, CheckCircle2 } from 'lucide-react';
import macosImg from '../assets/images/workflow_macos_setup_1786535327887.jpg';
import windowsImg from '../assets/images/workflow_windows_setup_1786535340369.jpg';
import consoleImg from '../assets/images/workflow_console_gaming_1786535351296.jpg';
import steamdeckImg from '../assets/images/workflow_steam_deck_1786535361199.jpg';

export const WorkflowParallaxGridSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;

      if (totalHeight <= 0) return;

      const currentScroll = windowHeight - rect.top;
      const progress = Math.min(Math.max(currentScroll / (totalHeight + windowHeight), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle parallax shift without leaving empty gaps
  const col1TranslateY = -scrollProgress * 50;
  const col2TranslateY = -scrollProgress * 90;

  return (
    <section 
      ref={containerRef} 
      id="workflow-parallax" 
      className="bg-[#25282B] text-[#F6F4EF] py-20 px-4 sm:px-6 lg:px-12 relative border-b border-[#5E6265]/40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Headline & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-6 z-10">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#E6DDCE]/15 border border-[#E6DDCE]/30 text-[#E6DDCE] text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#E6DDCE]" />
              <span>Universal Multi-Platform Hub</span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#F6F4EF] leading-[1.05] font-sans">
              Designed for
              <br />
              every
              <br />
              <span className="bg-gradient-to-r from-[#E6DDCE] via-[#F6F4EF] to-[#C8CBCB] bg-clip-text text-transparent">
                workflow.
              </span>
            </h2>

            <p className="text-[#C8CBCB] text-base sm:text-lg lg:text-xl leading-relaxed font-normal max-w-md">
              Whether you're a <span className="font-semibold text-[#F6F4EF]">professional</span>, <span className="font-semibold text-[#F6F4EF]">creator</span>, <span className="font-semibold text-[#F6F4EF]">student</span>, or <span className="font-semibold text-[#F6F4EF]">gamer</span>, the ANYKING Dual Screen Extender adapts seamlessly to <span className="font-bold text-[#E6DDCE]">macOS</span>, <span className="font-bold text-[#E6DDCE]">Windows</span>, <span className="font-bold text-[#E6DDCE]">Consoles</span>, <span className="font-bold text-[#E6DDCE]">Switch</span>, and <span className="font-bold text-[#E6DDCE]">Steam Deck</span>.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#F6F4EF]">
                <CheckCircle2 className="w-4 h-4 text-[#E6DDCE] flex-shrink-0" />
                <span>Single USB-C / HDMI Plug & Play setup</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#F6F4EF]">
                <CheckCircle2 className="w-4 h-4 text-[#E6DDCE] flex-shrink-0" />
                <span>1080P FHD IPS dual screens for zero visual lag</span>
              </div>
              <div className="flex items-center space-x-3 text-xs sm:text-sm text-[#F6F4EF]">
                <CheckCircle2 className="w-4 h-4 text-[#E6DDCE] flex-shrink-0" />
                <span>Supports 13" to 17.3" laptop frame mounting</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Asymmetric Image Compatibility Grid (7 cols) */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-3xl p-1 bg-[#5E6265]/20 border border-[#C8CBCB]/30 shadow-2xl">
            <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
              
              {/* COLUMN 1: Parallax Shift 1 */}
              <div 
                className="space-y-5 transition-transform duration-100 ease-out"
                style={{ transform: `translateY(${col1TranslateY}px)` }}
              >
                
                {/* CARD 1: MAC OS */}
                <div className="bg-[#1D2022] rounded-2xl overflow-hidden shadow-2xl border border-[#C8CBCB]/30 text-[#F6F4EF] group hover:border-[#E6DDCE] transition-all duration-300">
                  <div className="flex items-center justify-between border-b border-[#5E6265]/50 px-4 py-2.5 bg-[#1D2022]">
                    <div className="flex items-center space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="text-xs font-mono font-bold text-[#E6DDCE] pl-2">macOS Workflow</span>
                    </div>
                    <span className="text-[9px] font-mono bg-[#E6DDCE] text-[#25282B] px-2 py-0.5 rounded font-extrabold">PLUG & PLAY</span>
                  </div>

                  {/* Image Container with Overlay Content */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#151719]">
                    <img
                      src={macosImg}
                      alt="macOS MacBook Pro Dual Screen Setup"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D2022] via-[#1D2022]/40 to-transparent p-4 flex flex-col justify-end">
                      <div className="flex items-center justify-between text-xs font-bold text-[#F6F4EF] mb-0.5">
                        <span className="text-sm">macOS M1 / M2 / M3</span>
                        <Laptop className="w-4 h-4 text-[#E6DDCE]" />
                      </div>
                      <p className="text-[11px] text-[#C8CBCB] leading-tight mb-2">
                        Full dual-screen expansion via single Type-C & Mac H5 Utility.
                      </p>
                      <div className="flex items-center space-x-1.5 text-[9px] font-mono text-[#E6DDCE]">
                        <span className="bg-[#25282B]/80 backdrop-blur-sm border border-[#E6DDCE]/30 px-2 py-0.5 rounded">Final Cut Pro</span>
                        <span className="bg-[#25282B]/80 backdrop-blur-sm border border-[#E6DDCE]/30 px-2 py-0.5 rounded">Xcode</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 2: GAME CONSOLES (PS5 / Xbox) */}
                <div className="bg-[#1D2022] rounded-2xl overflow-hidden shadow-2xl border border-[#C8CBCB]/30 text-[#F6F4EF] group hover:border-[#E6DDCE] transition-all duration-300">
                  <div className="flex justify-between items-center border-b border-[#5E6265]/50 px-4 py-2.5 bg-[#1D2022]">
                    <div className="flex items-center space-x-2">
                      <Tv className="w-4 h-4 text-[#E6DDCE]" />
                      <span className="text-xs font-bold text-[#E6DDCE] font-mono">GAME CONSOLES</span>
                    </div>
                    <span className="text-[9px] bg-[#5E6265]/40 border border-[#E6DDCE]/30 text-[#E6DDCE] font-mono px-2 py-0.5 rounded font-bold">HDMI / USB-C</span>
                  </div>

                  {/* Image Container with Overlay Content */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#151719]">
                    <img
                      src={consoleImg}
                      alt="PS5 and Xbox Gaming Console Dual Screen Setup"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D2022] via-[#1D2022]/40 to-transparent p-4 flex flex-col justify-end">
                      <div className="text-sm font-bold text-[#F6F4EF] mb-0.5">PS5 & Xbox Series X</div>
                      <p className="text-[11px] text-[#C8CBCB] leading-tight mb-2">
                        Ultra-low latency 1080P FHD IPS visual immersion everywhere.
                      </p>
                      <div className="text-[9px] font-mono text-[#E6DDCE] font-bold">100% sRGB • Dual Built-in Speakers</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* COLUMN 2: Parallax Shift 2 */}
              <div 
                className="space-y-5 transition-transform duration-100 ease-out"
                style={{ transform: `translateY(${col2TranslateY}px)` }}
              >
                
                {/* CARD 3: WINDOWS */}
                <div className="bg-[#1D2022] rounded-2xl overflow-hidden shadow-2xl border border-[#C8CBCB]/30 text-[#F6F4EF] group hover:border-[#E6DDCE] transition-all duration-300">
                  <div className="flex justify-between items-center border-b border-[#5E6265]/50 px-4 py-2.5 bg-[#1D2022]">
                    <div className="flex items-center space-x-2">
                      <Monitor className="w-4 h-4 text-[#E6DDCE]" />
                      <span className="text-xs font-bold text-[#E6DDCE] font-mono">WINDOWS 11</span>
                    </div>
                    <span className="text-[9px] font-mono bg-[#E6DDCE]/20 text-[#E6DDCE] border border-[#E6DDCE]/40 font-bold px-2 py-0.5 rounded">WIN 11 READY</span>
                  </div>

                  {/* Image Container with Overlay Content */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#151719]">
                    <img
                      src={windowsImg}
                      alt="Windows Dual Display Productivity Laptop Setup"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D2022] via-[#1D2022]/40 to-transparent p-4 flex flex-col justify-end">
                      <div className="text-sm font-bold text-[#F6F4EF] mb-0.5">Windows Dual Productivity</div>
                      <p className="text-[11px] text-[#C8CBCB] leading-tight mb-2">
                        Instant plug-and-play split window multitasking across 3 screens.
                      </p>
                      <div className="inline-block bg-[#25282B]/90 backdrop-blur-sm border border-[#E6DDCE]/40 px-2 py-1 rounded text-[#E6DDCE] font-mono text-[9px] font-bold">
                        Zero Driver Setup for Windows
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 4: SWITCH & STEAM DECK */}
                <div className="bg-[#1D2022] rounded-2xl overflow-hidden shadow-2xl border border-[#C8CBCB]/30 text-[#F6F4EF] group hover:border-[#E6DDCE] transition-all duration-300">
                  <div className="flex justify-between items-center border-b border-[#5E6265]/50 px-4 py-2.5 bg-[#1D2022]">
                    <div className="flex items-center space-x-2">
                      <Gamepad2 className="w-4 h-4 text-[#E6DDCE]" />
                      <span className="text-xs font-bold text-[#E6DDCE] font-mono">STEAM DECK & SWITCH</span>
                    </div>
                    <span className="text-[9px] bg-[#E6DDCE] text-[#25282B] font-mono px-2 py-0.5 rounded font-extrabold">HANDHELD HUB</span>
                  </div>

                  {/* Image Container with Overlay Content */}
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#151719]">
                    <img
                      src={steamdeckImg}
                      alt="Steam Deck and Nintendo Switch Dual Screen Setup"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D2022] via-[#1D2022]/40 to-transparent p-4 flex flex-col justify-end">
                      <div className="text-sm font-bold text-[#F6F4EF] mb-0.5">Portable Gaming Battleship</div>
                      <p className="text-[11px] text-[#C8CBCB] leading-tight mb-2">
                        Expand handheld games onto dual 15.6" 1080P FHD IPS screens.
                      </p>
                      <div className="flex items-center justify-between text-[9px] font-mono text-[#E6DDCE] font-bold">
                        <span>Type-C Direct Connection</span>
                        <span>3.5mm Audio Out</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* End Column 2 */}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


