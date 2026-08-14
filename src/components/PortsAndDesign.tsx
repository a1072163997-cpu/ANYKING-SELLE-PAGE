import React, { useState } from 'react';
import { Usb, Tv, Sliders, Shield, Zap, Sparkles, Crosshair } from 'lucide-react';
import { PORT_HOTSPOTS } from '../data/productData';

export const PortsAndDesign: React.FC = () => {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('usbc-1');

  const activePort = PORT_HOTSPOTS.find(p => p.id === activeHotspotId) || PORT_HOTSPOTS[0];

  return (
    <section className="py-20 bg-[#090a0f] text-white relative border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Usb className="w-3.5 h-3.5" />
            <span>Slim Chassis & Connectivity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            9.7mm Ultra-Thin. Comprehensive Ports.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Crafted from high-strength magnesium-aluminum alloy with a sleek titanium metallic finish. Connect seamlessly to laptops, consoles, and cameras.
          </p>
        </div>

        {/* Hotspot Interactive Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Visual Edge Chassis */}
          <div className="lg:col-span-7 bg-zinc-950 p-6 sm:p-10 rounded-2xl border border-zinc-800 relative min-h-[360px] flex flex-col justify-center items-center shadow-2xl overflow-hidden">
            
            {/* Visual Thin Frame Render */}
            <div className="w-full max-w-md h-32 bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-800 rounded-xl border-t-2 border-x-2 border-cyan-500/40 relative shadow-2xl flex items-center justify-between px-6">
              
              {/* Display Edge Branding */}
              <div className="text-xs font-extrabold text-zinc-400 font-mono tracking-widest uppercase">
                ASUS ZENSCREEN FOLD
              </div>

              {/* Hotspot Markers */}
              {PORT_HOTSPOTS.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspotId(spot.id)}
                  style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    activeHotspotId === spot.id
                      ? 'bg-cyan-500 text-black font-extrabold scale-125 shadow-lg shadow-cyan-500/50 ring-4 ring-cyan-500/30 z-20'
                      : 'bg-zinc-800/90 text-cyan-400 border border-cyan-500/50 hover:bg-zinc-700 z-10'
                  }`}
                >
                  <Crosshair className="w-4 h-4" />
                </button>
              ))}

              <div className="text-[10px] text-cyan-400 font-mono bg-black/60 px-2 py-1 rounded border border-cyan-500/30">
                9.7 mm Thickness Edge
              </div>
            </div>

            <div className="mt-6 text-xs text-zinc-400 font-mono flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Click hotspot markers on the frame to view hardware details</span>
            </div>
          </div>

          {/* Hotspot Details Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                  {activePort.location}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50 text-[10px] font-mono">
                  Hardware Port
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-white">
                {activePort.name}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {activePort.description}
              </p>

              <div className="pt-4 border-t border-zinc-800 grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400">
                <div>
                  <span className="text-zinc-500 block">Signal Support:</span>
                  <strong className="text-zinc-200">DP Alt Mode / HDMI 2.0</strong>
                </div>
                <div>
                  <span className="text-zinc-500 block">Power Passthrough:</span>
                  <strong className="text-cyan-400">Up to 65W PD</strong>
                </div>
              </div>
            </div>

            {/* Quick Port Selector Tabs */}
            <div className="grid grid-cols-2 gap-2">
              {PORT_HOTSPOTS.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setActiveHotspotId(spot.id)}
                  className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                    activeHotspotId === spot.id
                      ? 'bg-cyan-500/10 border-cyan-500 text-cyan-300 font-bold'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  <div className="truncate">{spot.name}</div>
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
