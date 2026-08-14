import React, { useState } from 'react';
import { Sliders, Sun, ShieldCheck, Eye, RefreshCcw, Check, Sparkles, Monitor, Tv } from 'lucide-react';

export const OsdMenuSimulator: React.FC = () => {
  const [brightness, setBrightness] = useState<number>(85);
  const [contrast, setContrast] = useState<number>(80);
  const [blueLight, setBlueLight] = useState<number>(1); // Level 0-4
  const [activePreset, setActivePreset] = useState<string>('DCI-P3 Cinema');
  const [pixelShift, setPixelShift] = useState<boolean>(true);
  const [autoDim, setAutoDim] = useState<boolean>(true);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);

  const presets = ['DCI-P3 Cinema', 'sRGB Standard', 'Reading Mode', 'GameVisual HDR', 'User Preset'];

  return (
    <section id="osd" className="py-20 bg-[#0c0d12] text-white relative border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive OSD & Software Control</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            ASUS DisplayWidget Center & OSD
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Simulate the built-in 5-way joystick OSD menu and desktop app. Adjust color profiles, low blue light filters, and OLED Care burn-in prevention settings live.
          </p>
        </div>

        {/* OSD Interactive Simulator Stage */}
        <div className="max-w-4xl mx-auto bg-zinc-950 rounded-2xl border-2 border-cyan-500/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Header Bar of OSD */}
          <div className="flex flex-wrap justify-between items-center border-b border-zinc-800 pb-4 mb-6 gap-2">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-extrabold text-white text-base tracking-wide font-mono">ASUS ZenScreen OSD Menu</span>
              <span className="text-xs text-zinc-400 font-mono">v2.4 Firmware</span>
            </div>
            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="text-zinc-400">Mode: <strong className="text-cyan-300">{activePreset}</strong></span>
              <span className="text-zinc-400">Resolution: <strong className="text-white">2560x1920@60Hz</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Menu Sidebar */}
            <div className="md:col-span-4 space-y-2 border-r border-zinc-800/80 pr-4">
              <div className="text-xs uppercase font-mono text-zinc-500 font-bold mb-2">OSD Categories</div>
              
              {['Splendid Color Presets', 'Luminance & Contrast', 'ASUS OLED Care', 'Eye Care Blue Light', 'DisplayWidget Options'].map((cat, i) => (
                <div
                  key={i}
                  className={`p-2.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                    i === 0 ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30' : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat}
                </div>
              ))}
            </div>

            {/* Right Controls Panel */}
            <div className="md:col-span-8 space-y-6">
              
              {/* Presets Grid */}
              <div>
                <label className="text-xs text-zinc-400 font-mono block mb-2">Splendid Color Profile:</label>
                <div className="flex flex-wrap gap-2">
                  {presets.map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setActivePreset(preset)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                        activePreset === preset
                          ? 'bg-cyan-500 text-black border-cyan-400 font-bold shadow'
                          : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                      }`}
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Brightness & Contrast Sliders */}
              <div className="space-y-4 bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-zinc-300 flex items-center space-x-1.5">
                      <Sun className="w-3.5 h-3.5 text-yellow-400" />
                      <span>OLED Peak Luminance</span>
                    </span>
                    <span className="text-cyan-400 font-bold">{brightness}% ({Math.round(brightness * 5)} Nits)</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={brightness}
                    onChange={(e) => setBrightness(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-zinc-300">OLED Contrast Ratio</span>
                    <span className="text-cyan-400 font-bold">{contrast}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    value={contrast}
                    onChange={(e) => setContrast(Number(e.target.value))}
                    className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                  />
                </div>
              </div>

              {/* OLED Care Toggles */}
              <div className="bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80 space-y-3">
                <div className="text-xs font-mono text-cyan-400 font-bold flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>ASUS OLED Care Settings</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <label className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 cursor-pointer">
                    <span className="text-zinc-300">Pixel Shift Protection</span>
                    <input
                      type="checkbox"
                      checked={pixelShift}
                      onChange={(e) => setPixelShift(e.target.checked)}
                      className="w-4 h-4 accent-cyan-400 rounded"
                    />
                  </label>

                  <label className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 cursor-pointer">
                    <span className="text-zinc-300">Auto Dimming (Static Logo)</span>
                    <input
                      type="checkbox"
                      checked={autoDim}
                      onChange={(e) => setAutoDim(e.target.checked)}
                      className="w-4 h-4 accent-cyan-400 rounded"
                    />
                  </label>
                </div>
              </div>

              {/* DisplayWidget Auto-Rotation Toggle */}
              <div className="flex justify-between items-center bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/80 text-xs">
                <div className="flex items-center space-x-2">
                  <RefreshCcw className="w-4 h-4 text-emerald-400" />
                  <span className="text-zinc-200 font-semibold">DisplayWidget Auto-Rotation Sensor</span>
                </div>
                <button
                  onClick={() => setAutoRotate(!autoRotate)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border transition-colors ${
                    autoRotate
                      ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                      : 'bg-zinc-800 text-zinc-500 border-zinc-700'
                  }`}
                >
                  {autoRotate ? 'ENABLED' : 'DISABLED'}
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
