import React from 'react';
import { Feather, RotateCw, ShieldCheck, Cable, Sparkles, Monitor, Layers } from 'lucide-react';
import heroImg from '../assets/images/zenscreen_fold_hero_1786524996482.jpg';
import flatImg from '../assets/images/zenscreen_fold_flat_1786525011040.jpg';
import hingeImg from '../assets/images/zenscreen_fold_hinge_1786525027011.jpg';

export const BentoHighlightsSection: React.FC = () => {
  return (
    <section id="bento-highlights" className="bg-[#25282B] text-[#F6F4EF] py-20 px-4 sm:px-6 lg:px-8 border-b border-[#5E6265]/40">
      <div className="max-w-6xl mx-auto space-y-4">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#E6DDCE]/15 border border-[#E6DDCE]/30 text-[#E6DDCE] text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#E6DDCE]" />
            <span>Key Feature Highlights</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F6F4EF] tracking-tight">
            Designed for Ultimate Triple-Screen Productivity
          </h2>
          <p className="text-xs sm:text-sm text-[#C8CBCB] mt-2">
            Packed with 1080P FHD IPS displays, 180° rotation, stable stand, and complete connectivity.
          </p>
        </div>

        {/* ROW 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Tile 1: 15.6" Dual Screen Workspace (Col 4) */}
          <div className="md:col-span-4 bg-[#5E6265]/20 border border-[#C8CBCB]/30 rounded-2xl p-6 flex flex-col justify-between hover:border-[#E6DDCE]/60 transition-all group">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#F6F4EF] font-mono tracking-tight flex items-baseline space-x-2">
              <span>15.6"</span>
              <span className="text-base font-normal text-[#E6DDCE]">Dual IPS</span>
            </div>
            <div className="my-4 text-xs text-[#C8CBCB] leading-relaxed">
              Upgrades 13-17.3" laptops into an expansive triple-screen workstation for coding, meetings, and documents.
            </div>
            <div className="text-xs font-mono text-[#E6DDCE] uppercase tracking-wider font-bold">1. Triple Screen Workspace</div>
          </div>

          {/* Tile 2: 1080P FHD IPS Vivid Color (Col 4) */}
          <div className="md:col-span-4 bg-[#5E6265]/20 border border-[#C8CBCB]/30 rounded-2xl p-6 flex flex-col justify-between hover:border-[#E6DDCE]/60 transition-all group">
            <div className="flex justify-between items-start">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#F6F4EF] font-mono tracking-tight">
                <span>1080P</span>
                <span className="text-xs font-mono text-[#E6DDCE] block">FHD 300 Nits</span>
              </div>
              <Sparkles className="w-7 h-7 text-[#E6DDCE]" />
            </div>
            <div className="my-2 text-xs text-[#C8CBCB] leading-relaxed">
              100% sRGB color gamut, 16.7M colors, 1000:1 contrast ratio & 60Hz smooth refresh rate.
            </div>
            <div className="text-xs font-mono text-[#E6DDCE] uppercase tracking-wider font-bold">2. Vivid IPS Visuals</div>
          </div>

          {/* Tile 3: 180° Rotation (Col 2) */}
          <div className="md:col-span-2 bg-[#5E6265]/20 border border-[#C8CBCB]/30 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:border-[#E6DDCE]/60 transition-all">
            <div className="text-sm font-bold text-[#F6F4EF] mb-2">180° Rotation</div>
            <div className="w-12 h-12 rounded-xl bg-[#25282B] border border-[#E6DDCE]/30 flex items-center justify-center text-[#E6DDCE]">
              <RotateCw className="w-6 h-6 animate-spin" style={{ animationDuration: '14s' }} />
            </div>
          </div>

          {/* Tile 4: Stable Support Stand (Col 2) */}
          <div className="md:col-span-2 bg-[#5E6265]/20 border border-[#C8CBCB]/30 rounded-2xl p-4 flex flex-col justify-between overflow-hidden hover:border-[#E6DDCE]/60 transition-all relative">
            <div className="text-xs font-bold text-[#F6F4EF] z-10">Stable Support Stand</div>
            <div className="mt-2 rounded-lg overflow-hidden border border-[#C8CBCB]/30">
              <img src={heroImg} alt="Stable support stand" className="w-full h-20 object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>

        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Tile 5: Plug & Play USB-C / HDMI (Col 4) */}
          <div className="md:col-span-4 bg-[#5E6265]/20 border border-[#C8CBCB]/30 rounded-2xl p-6 flex flex-col justify-between hover:border-[#E6DDCE]/60 transition-all">
            <div>
              <div className="flex items-center space-x-2 text-[#E6DDCE] font-bold text-sm mb-2">
                <Cable className="w-5 h-5 text-[#E6DDCE]" />
                <span>Plug & Play Connectivity</span>
              </div>
              <p className="text-xs text-[#C8CBCB] leading-relaxed">
                Connect via USB-C or HDMI. Works with Windows, Mac, Chrome OS, Android, and Switch.
              </p>
              <div className="mt-3 text-[11px] text-[#E6DDCE]/90 font-mono bg-[#25282B]/60 p-2 rounded border border-[#E6DDCE]/20">
                macOS Base M1/M2/M3 requires H5 Adapter for dual extension. Pro/Max chips support natively!
              </div>
            </div>
            <div className="text-xs font-mono text-[#E6DDCE] uppercase tracking-wider font-bold mt-4">3. Universal Compatibility</div>
          </div>

          {/* Tile 6: Slim Aluminum Body (Col 4) */}
          <div className="md:col-span-4 bg-[#5E6265]/20 border border-[#C8CBCB]/30 rounded-2xl p-6 flex flex-col justify-between hover:border-[#E6DDCE]/60 transition-all">
            <div>
              <div className="flex items-center space-x-2 text-[#E6DDCE] font-bold text-sm mb-2">
                <Feather className="w-5 h-5 text-[#E6DDCE]" />
                <span>Slim Aluminum Alloy</span>
              </div>
              <div className="text-3xl font-extrabold text-[#F6F4EF] font-mono my-1">3.19 lbs</div>
              <p className="text-xs text-[#C8CBCB] leading-relaxed">
                Sleek aluminum chassis designed for effortless business travel, cafes, and remote work.
              </p>
            </div>
            <div className="text-xs font-mono text-[#E6DDCE] uppercase tracking-wider font-bold mt-4">4. Lightweight & Durable</div>
          </div>

          {/* Tile 7: Built-in Speakers & Carrying Bag (Col 4) */}
          <div className="md:col-span-4 bg-[#5E6265]/20 border border-[#C8CBCB]/30 rounded-2xl p-6 flex flex-col justify-between hover:border-[#E6DDCE]/60 transition-all">
            <div>
              <div className="flex items-center space-x-2 text-[#E6DDCE] font-bold text-sm mb-2">
                <ShieldCheck className="w-5 h-5 text-[#E6DDCE]" />
                <span>Carrying Bag & Cables Included</span>
              </div>
              <p className="text-xs text-[#C8CBCB] leading-relaxed">
                Includes carrying bag, HDMI cable, 2x USB-C cables, USB-A cable, power adapter, and user manual.
              </p>
            </div>
            <div className="text-xs font-mono text-[#E6DDCE] uppercase tracking-wider font-bold mt-4">5. Complete In-Box Kit</div>
          </div>

        </div>

      </div>
    </section>
  );
};
