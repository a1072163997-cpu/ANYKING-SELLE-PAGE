import React from 'react';
import heroImg from '../assets/images/zenscreen_fold_hero_1786524996482.jpg';
import flatImg from '../assets/images/zenscreen_fold_flat_1786525011040.jpg';

export const HeroPossibilitiesSection: React.FC = () => {
  return (
    <section id="possibilities-banner" className="relative bg-[#020514] text-white py-24 sm:py-32 overflow-hidden border-b border-blue-900/30">
      {/* Background Graphic: Deep Blue Dusk Dunes & Ambient Neon Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0c26] via-[#050921] to-[#02030d] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-purple-600/15 blur-[160px] rounded-full pointer-events-none" />
      
      {/* Atmospheric Wave Texture Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Tagline */}
        <div className="text-zinc-300 font-sans tracking-widest text-sm sm:text-base lg:text-lg uppercase mb-4 opacity-90 font-light">
          World's First Foldable OLED Portable Monitor
        </div>

        {/* Hero Title: OPEN NEW POSSIBILITIES */}
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase mb-4 leading-none font-sans drop-shadow-[0_0_35px_rgba(59,130,246,0.5)]">
          <span className="bg-gradient-to-r from-blue-200 via-white to-cyan-300 bg-clip-text text-transparent">
            OPEN NEW
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-indigo-200 to-blue-500 bg-clip-text text-transparent">
            POSSIBILITIES
          </span>
        </h2>

        {/* Sub-caption */}
        <div className="text-zinc-400 font-mono text-sm sm:text-base lg:text-lg tracking-wider mb-12">
          ASUS ZenScreen Fold OLED MQ17QH
        </div>

        {/* Center Product Composition */}
        <div className="relative w-full max-w-4xl mx-auto my-4 flex items-center justify-center">
          <div className="relative w-full aspect-[16/9] max-h-[500px] flex items-center justify-center">
            
            {/* Ambient Backlight Aura */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-75 pointer-events-none" />

            {/* ZenScreen Fold Monitor Center Render */}
            <img
              src={heroImg}
              alt="ASUS ZenScreen Fold OLED Monitor & Laptop Setup"
              className="relative z-10 max-h-[460px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:scale-[1.02] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Bottom Award Badges (Good Design & CES Innovation Awards) */}
        <div className="mt-8 flex items-center justify-center space-x-6 z-10">
          {/* Good Design Award */}
          <div className="bg-zinc-950/80 border border-zinc-800 p-2 sm:p-2.5 rounded-lg backdrop-blur-md flex items-center space-x-2 text-left shadow-xl hover:border-zinc-700 transition-colors">
            <div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white font-black text-xs tracking-tighter">
              G
            </div>
            <div>
              <div className="text-[10px] font-bold text-zinc-200 leading-tight uppercase font-mono">GOOD DESIGN</div>
              <div className="text-[9px] text-zinc-400 font-mono">AWARD 2023</div>
            </div>
          </div>

          {/* CES Innovation Awards */}
          <div className="bg-zinc-950/80 border border-zinc-800 p-2 sm:p-2.5 rounded-lg backdrop-blur-md flex items-center space-x-2 text-left shadow-xl hover:border-zinc-700 transition-colors">
            <div className="w-8 h-8 rounded bg-blue-700 flex items-center justify-center text-white font-extrabold text-[10px] leading-tight text-center">
              CES
            </div>
            <div>
              <div className="text-[10px] font-bold text-zinc-200 leading-tight uppercase font-mono">INNOVATION</div>
              <div className="text-[9px] text-zinc-400 font-mono">AWARDS 2024</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
