import React, { useState } from 'react';
import { Eye, Sparkles, Check, Sun, Zap, Sliders, ShieldAlert } from 'lucide-react';
import { COLOR_MODES } from '../data/productData';

export const OledVisualizer: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50); // 0 to 100%
  const [activeColorMode, setActiveColorMode] = useState<string>('hdr');

  const selectedMode = COLOR_MODES.find(m => m.id === activeColorMode) || COLOR_MODES[3];

  return (
    <section id="oled" className="py-20 bg-[#07080b] text-white relative overflow-hidden border-b border-zinc-800">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DisplayHDR™ True Black 500 Certified</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Unrivaled OLED Color & Contrast
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Experience true pitch blacks, 1.07 billion colors, and a 1,000,000:1 contrast ratio that reveals subtle details in dark scenes impossible on conventional portable LCD monitors.
          </p>
        </div>

        {/* Interactive Image Comparison Slider */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-3 text-xs text-zinc-400 font-mono">
            Drag slider left or right to compare <span className="text-zinc-500 font-bold">Standard LCD</span> vs <span className="text-cyan-400 font-bold">ASUS ZenScreen OLED</span>
          </div>

          <div className="relative h-[340px] sm:h-[480px] rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl select-none group">
            
            {/* Right Layer: ASUS OLED (Full vibrant colors, deep black background) */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 flex flex-col justify-center items-center p-8 text-center">
              <div className="relative z-10 space-y-4">
                <div className="inline-block px-4 py-1 rounded-full bg-cyan-500 text-black font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-cyan-500/40">
                  ASUS ZenScreen OLED (True Black 500)
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  1,000,000:1 Contrast & 0.2ms Ultra-Fast Response
                </h3>
                <p className="text-cyan-200 text-sm max-w-md mx-auto">
                  Every OLED pixel emits its own light. Dark pixels turn completely off for 0.0005 nits true black.
                </p>
                <div className="flex justify-center space-x-4 text-xs font-mono text-cyan-300">
                  <span className="bg-black/60 px-3 py-1 rounded border border-cyan-500/30">100% DCI-P3</span>
                  <span className="bg-black/60 px-3 py-1 rounded border border-cyan-500/30">Delta E &lt; 2</span>
                  <span className="bg-black/60 px-3 py-1 rounded border border-cyan-500/30">500 Nits Peak</span>
                </div>
              </div>

              {/* Glowing vibrant background graphic */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/30 via-purple-500/10 to-transparent pointer-events-none" />
            </div>

            {/* Left Layer: Standard Portable LCD (Washed out, greyish black, backlight bleed) */}
            <div 
              className="absolute top-0 bottom-0 left-0 bg-slate-800 flex flex-col justify-center items-center p-8 text-center overflow-hidden border-r-2 border-white"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="w-[800px] max-w-none space-y-4 opacity-70 filter contrast-75 brightness-110 blur-[0.5px]">
                <div className="inline-block px-4 py-1 rounded-full bg-zinc-700 text-zinc-300 font-bold text-xs uppercase tracking-wider">
                  Standard LCD Portable Monitor (250 Nits)
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold text-zinc-300">
                  1000:1 Contrast with Backlight Bleed
                </h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto">
                  LED backlight stays constantly on, turning dark areas into muddy grayish blacks.
                </p>
                <div className="flex justify-center space-x-4 text-xs font-mono text-zinc-400">
                  <span className="bg-zinc-900/80 px-3 py-1 rounded">45% NTSC</span>
                  <span className="bg-zinc-900/80 px-3 py-1 rounded">10ms Response</span>
                  <span className="bg-zinc-900/80 px-3 py-1 rounded">250 Nits</span>
                </div>
              </div>
            </div>

            {/* Draggable Divider Line & Knob */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-20 shadow-2xl"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-white text-black font-bold text-xs flex items-center justify-center shadow-2xl transform -translate-x-1/2 group-hover:scale-110 transition-transform">
                ↔
              </div>
            </div>

            {/* Invisible Range Input for Dragging */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
          </div>
        </div>

        {/* Color Profile Switcher */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
            <Sliders className="w-5 h-5 text-purple-400" />
            <span>Interactive Color Space & Gamut Inspector</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {COLOR_MODES.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActiveColorMode(mode.id)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeColorMode === mode.id
                    ? 'bg-purple-950/40 border-purple-500/60 text-white shadow-lg shadow-purple-950/40'
                    : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                }`}
              >
                <div className="font-bold text-sm text-zinc-200 mb-1">{mode.name}</div>
                <div className="text-xs text-purple-300 font-mono">{mode.gamut}</div>
              </button>
            ))}
          </div>

          <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div>
              <span className="text-zinc-500 block">Profile Description:</span>
              <span className="text-zinc-200 font-sans text-sm font-semibold mt-1 block">{selectedMode.description}</span>
            </div>
            <div>
              <span className="text-zinc-500 block">Color Accuracy:</span>
              <span className="text-emerald-400 text-sm font-bold mt-1 block">Delta E {selectedMode.deltaE}</span>
            </div>
            <div>
              <span className="text-zinc-500 block">Luminance Rating:</span>
              <span className="text-cyan-400 text-sm font-bold mt-1 block">{selectedMode.brightness}</span>
            </div>
          </div>
        </div>

        {/* ASUS OLED Care Callout */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-zinc-900 to-zinc-950 border border-blue-900/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-cyan-400">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">ASUS OLED Care Protection System</h4>
              <p className="text-xs text-zinc-400 mt-0.5">
                Includes Pixel Shift technology, automatic screen saver, and static logo brightness reduction to prevent screen burn-in and ensure long-lasting OLED durability.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-blue-500/20 text-cyan-300 border border-blue-500/30 text-xs font-mono font-semibold">
              3-Year OLED Warranty
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
