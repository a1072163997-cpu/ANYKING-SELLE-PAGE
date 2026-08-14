import React, { useState } from 'react';
import { ShieldCheck, Cpu, RefreshCw, Sparkles, Check, X, Layers, Award } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

export const WaterdropHingeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'waterdrop' | 'conventional'>('waterdrop');

  return (
    <section id="hinge" className="py-20 bg-[#0a0c10] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Precision Engineering Breakthrough</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Engineered Waterdrop Hinge Architecture
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Say goodbye to deep screen creases. ASUS designed a custom waterdrop mechanical hinge that allows the 17.3-inch OLED panel to form a smooth teardrop curve when folded, virtually eliminating visible crease lines when opened flat.
          </p>
        </div>

        {/* Feature Grid & Image Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Close Up Hinge Image Card */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl group">
            <img
              src={PRODUCT_INFO.heroImages.hinge}
              alt="ASUS ZenScreen Waterdrop Hinge Close-up"
              className="w-full h-[380px] sm:h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-900/90 backdrop-blur-md border border-zinc-800">
              <div className="flex items-center space-x-3 mb-1">
                <div className="p-2 rounded-lg bg-cyan-500 text-black font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Tested for 20,000+ Fold Cycles</h4>
                  <p className="text-zinc-400 text-xs">Equivalent to 10+ years of daily intense folding usage.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hinge Benefits & Technical Callouts */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              
              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/30 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 mt-1">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Zero-Crease Flat Canvas</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      By allowing the OLED panel to curve inward with a wider bending radius inside the hinge cavity, tension on the screen substrate is reduced by up to 60%.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/30 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-blue-950 border border-blue-500/40 text-blue-400 mt-1">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Gapless Clamshell Closure</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      When folded closed, both halves lie completely parallel with zero gap, protecting the internal OLED screen from dust, debris, and accidental key scratches during transit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-cyan-500/30 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 rounded-xl bg-indigo-950 border border-indigo-500/40 text-indigo-400 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Aerospace-Grade Alloy Frame</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      Forged from lightweight magnesium-aluminum alloy for structural rigidity without adding excess bulk, keeping the overall monitor weight under 1.17 kg.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Interactive Comparison: Waterdrop Hinge vs Conventional Hinge */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-white">Hinge Mechanism Technology Comparison</h3>
            <div className="flex space-x-2 bg-zinc-950 p-1 rounded-xl border border-zinc-800">
              <button
                onClick={() => setActiveTab('waterdrop')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'waterdrop'
                    ? 'bg-cyan-500 text-black shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                ASUS Waterdrop Hinge
              </button>
              <button
                onClick={() => setActiveTab('conventional')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'conventional'
                    ? 'bg-zinc-800 text-white'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Conventional U-Hinge
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-3">
              <div className="text-xs uppercase font-mono text-cyan-400 font-bold">
                {activeTab === 'waterdrop' ? 'ASUS Proprietary Waterdrop Design' : 'Standard Portable Fold Hinge'}
              </div>

              <ul className="space-y-2.5 text-xs text-zinc-300">
                {activeTab === 'waterdrop' ? (
                  <>
                    <li className="flex items-center space-x-2 text-emerald-400">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Virtually invisible crease when opened 180°</span>
                    </li>
                    <li className="flex items-center space-x-2 text-emerald-400">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Zero gap when closed in travel pouch</span>
                    </li>
                    <li className="flex items-center space-x-2 text-emerald-400">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>Smooth friction angle hold from 12° to 180°</span>
                    </li>
                    <li className="flex items-center space-x-2 text-emerald-400">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>20,000+ cycle structural lifespan</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center space-x-2 text-red-400">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>Deep noticeable center crease causing reflection distortion</span>
                    </li>
                    <li className="flex items-center space-x-2 text-red-400">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>Visible gap near hinge inviting dust & pocket lint</span>
                    </li>
                    <li className="flex items-center space-x-2 text-red-400">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>High point stress on OLED layer leading to micro-cracks</span>
                    </li>
                  </>
                )}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 text-center flex flex-col items-center justify-center min-h-[160px]">
              <div className="text-sm font-semibold text-zinc-200 mb-2">Curvature Stress Model</div>
              <div className="w-full h-12 bg-zinc-900 rounded-lg border border-zinc-800 relative flex items-center justify-center overflow-hidden">
                {activeTab === 'waterdrop' ? (
                  <div className="w-3/4 h-6 border-b-2 border-cyan-400 rounded-b-full bg-cyan-500/10 flex items-center justify-center text-[10px] text-cyan-300 font-mono">
                    Gentle Teardrop Radius (~12mm)
                  </div>
                ) : (
                  <div className="w-1/2 h-8 border-b-4 border-red-500 rounded-b-sm bg-red-500/10 flex items-center justify-center text-[10px] text-red-300 font-mono">
                    Tight Sharp Fold Radius (~3mm)
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
