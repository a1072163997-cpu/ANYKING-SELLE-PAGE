import React, { useState } from 'react';
import { Sparkles, Eye, Sliders, ShieldCheck, Play, ArrowRight, Layers, Maximize2, Zap, Package } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

interface HeroSectionProps {
  onOpenBuyModal: () => void;
  onScrollToSimulator: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBuyModal, onScrollToSimulator }) => {
  const [activeView, setActiveView] = useState<'hero' | 'flat' | 'portrait'>('hero');

  const viewImages = {
    hero: PRODUCT_INFO.heroImages.hero,
    flat: PRODUCT_INFO.heroImages.hinge,
    portrait: PRODUCT_INFO.heroImages.portrait
  };

  return (
    <section id="overview" className="relative pt-28 pb-20 overflow-hidden bg-[#25282B] text-[#F6F4EF]">
      {/* Background Glows & Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5E6265]/30 via-[#25282B] to-[#25282B] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E6DDCE]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#E6DDCE]/15 border border-[#E6DDCE]/30 text-[#E6DDCE] text-xs font-medium shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#E6DDCE] animate-spin" style={{ animationDuration: '4s' }} />
            <span>15.6" Dual 1080P FHD IPS Triple Screen Extender</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E6DDCE] animate-ping"></span>
          </div>
        </div>

        {/* Hero Title & Tagline */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F6F4EF] mb-4 leading-[1.1]">
            <span className="block text-[#E6DDCE] font-semibold text-2xl sm:text-3xl mb-2">ANYKING Screen Extender</span>
            <span className="text-[#F6F4EF]">
              Triple Your Workspace Anywhere.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#C8CBCB] font-light max-w-2xl mx-auto leading-relaxed">
            Transform any 13–17.3" laptop into an expansive 3-screen productivity power station with dual 1080P FHD IPS displays, 180° rotation, and a stable 45° support stand.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={onScrollToSimulator}
              className="px-6 py-3.5 rounded-xl bg-[#E6DDCE] text-[#25282B] font-bold text-sm shadow-xl hover:bg-[#F6F4EF] hover:scale-[1.02] transition-all flex items-center space-x-2"
            >
              <Sliders className="w-4 h-4 text-[#25282B]" />
              <span>Interactive Angle Simulator</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenBuyModal}
              className="px-6 py-3.5 rounded-xl bg-[#5E6265]/30 hover:bg-[#5E6265]/50 text-[#F6F4EF] border border-[#C8CBCB]/40 font-semibold text-sm transition-all flex items-center space-x-2"
            >
              <span>Buy Now (${PRODUCT_INFO.price.toLocaleString()})</span>
            </button>
          </div>
        </div>

        {/* Hero Interactive Image Stage */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="relative rounded-2xl p-1 bg-[#5E6265]/40 border border-[#C8CBCB]/30 shadow-2xl">
            <div className="relative rounded-xl overflow-hidden bg-[#25282B] border border-[#C8CBCB]/30 group">
              <img
                src={viewImages[activeView]}
                alt="ANYKING 15.6 Dual Laptop Screen Extender"
                className="w-full h-[340px] sm:h-[480px] lg:h-[540px] object-cover object-center transition-all duration-700 transform group-hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />

              {/* Angle Switcher Overlay Tabs */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#25282B]/90 backdrop-blur-md p-1.5 rounded-xl border border-[#C8CBCB]/40 flex items-center space-x-2 shadow-2xl">
                <button
                  onClick={() => setActiveView('hero')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
                    activeView === 'hero'
                      ? 'bg-[#E6DDCE] text-[#25282B] font-bold shadow-md'
                      : 'text-[#C8CBCB] hover:text-[#F6F4EF] hover:bg-[#5E6265]/30'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Triple Screen Main View</span>
                </button>
                <button
                  onClick={() => setActiveView('flat')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
                    activeView === 'flat'
                      ? 'bg-[#E6DDCE] text-[#25282B] font-bold shadow-md'
                      : 'text-[#C8CBCB] hover:text-[#F6F4EF] hover:bg-[#5E6265]/30'
                  }`}
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>45° Rear Kickstand View</span>
                </button>
                <button
                  onClick={() => setActiveView('portrait')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
                    activeView === 'portrait'
                      ? 'bg-[#E6DDCE] text-[#25282B] font-bold shadow-md'
                      : 'text-[#C8CBCB] hover:text-[#F6F4EF] hover:bg-[#5E6265]/30'
                  }`}
                >
                  <Package className="w-3.5 h-3.5" />
                  <span>Bag & Accessories Kit</span>
                </button>
              </div>

              {/* Hinge Badge overlay */}
              <div className="absolute top-4 right-4 bg-[#25282B]/90 backdrop-blur-md px-3 py-2 rounded-lg border border-[#E6DDCE]/40 text-xs text-[#F6F4EF] flex items-center space-x-2">
                <Zap className="w-4 h-4 text-[#E6DDCE]" />
                <span className="font-mono text-[#E6DDCE] font-semibold">180° Swivel & 45° Kickstand</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Highlight Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {PRODUCT_INFO.keyHighlights.map((item, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#5E6265]/20 border border-[#C8CBCB]/30 hover:border-[#E6DDCE]/60 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#F6F4EF] font-mono tracking-tight mb-1">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-[#E6DDCE]">{item.label}</div>
              <div className="text-xs text-[#C8CBCB] mt-0.5">{item.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
