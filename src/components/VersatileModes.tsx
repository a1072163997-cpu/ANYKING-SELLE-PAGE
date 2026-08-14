import React, { useState } from 'react';
import { Layers, Maximize2, RotateCw, Presentation, CheckCircle, ArrowRight } from 'lucide-react';
import { USAGE_MODES } from '../data/productData';

export const VersatileModes: React.FC = () => {
  const [activeModeId, setActiveModeId] = useState<string>('expanded-landscape');

  const activeMode = USAGE_MODES.find(m => m.id === activeModeId) || USAGE_MODES[0];

  const getModeIcon = (id: string) => {
    switch (id) {
      case 'expanded-landscape': return <Maximize2 className="w-4 h-4" />;
      case 'stacked-laptop': return <Layers className="w-4 h-4" />;
      case 'portrait-book': return <RotateCw className="w-4 h-4" />;
      case 'presentation-tent': return <Presentation className="w-4 h-4" />;
    }
  };

  return (
    <section id="modes" className="py-20 bg-[#0c0e14] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Versatile Workspace Configurations</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Four Modes. Unlimited Productivity.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Adapt your screen setup instantly to any environment — from tight airplane tray tables to executive conference rooms.
          </p>
        </div>

        {/* Usage Mode Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {USAGE_MODES.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setActiveModeId(mode.id)}
              className={`px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center space-x-2 border ${
                activeModeId === mode.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-cyan-400 shadow-lg shadow-cyan-500/20'
                  : 'bg-zinc-900/80 text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {getModeIcon(mode.id)}
              <span>{mode.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Mode Showcase Stage */}
        <div className="p-6 sm:p-10 rounded-2xl bg-zinc-900/60 border border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Image Preview */}
          <div className="lg:col-span-7 relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 group shadow-2xl">
            <img
              src={activeMode.image}
              alt={activeMode.title}
              className="w-full h-[320px] sm:h-[420px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/30 text-xs font-mono text-cyan-300 font-semibold flex items-center space-x-2">
              <span>{activeMode.screenSize}</span>
              <span className="text-zinc-600">|</span>
              <span>{activeMode.aspectRatio} Ratio</span>
            </div>
          </div>

          {/* Right Column: Mode Details & Key Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold block mb-1">
                {activeMode.subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                {activeMode.title}
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {activeMode.description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs uppercase tracking-wider font-mono text-zinc-400">Key Functional Advantages:</h4>
              <ul className="space-y-2">
                {activeMode.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>Built-in Kickstand: <strong className="text-cyan-300">360° Smooth Stepless</strong></span>
              <span>Tripod Socket: <strong className="text-cyan-300">1/4" Mount</strong></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
