import React, { useState } from 'react';
import { Sliders, Code, Video, TrendingUp, FileText, Film, RefreshCw, Maximize2, Monitor, Layers, CheckCircle2 } from 'lucide-react';
import { DISPLAY_PRESETS } from '../data/productData';
import { DisplayPreset } from '../types';

export const FoldSimulator: React.FC = () => {
  const [foldAngle, setFoldAngle] = useState<number>(120);
  const [activePreset, setActivePreset] = useState<DisplayPreset>('developer');

  const presetData = DISPLAY_PRESETS.find(p => p.id === activePreset) || DISPLAY_PRESETS[0];

  // Helper icons for preset switcher
  const getIcon = (id: DisplayPreset) => {
    switch (id) {
      case 'developer': return <Code className="w-4 h-4" />;
      case 'creator': return <Video className="w-4 h-4" />;
      case 'trader': return <TrendingUp className="w-4 h-4" />;
      case 'multitask': return <FileText className="w-4 h-4" />;
      case 'cinema': return <Film className="w-4 h-4" />;
    }
  };

  // Calculate dynamic dimensions & fold geometry
  const topScreenAngle = Math.max(0, (180 - foldAngle) / 2);
  const bottomScreenAngle = Math.max(0, (180 - foldAngle) / 2);

  const getEffectiveDiagonal = (angle: number) => {
    if (angle === 180) return "17.3\" QHD+ Canvas";
    if (angle >= 90 && angle < 180) return `Dual 12.5" Stacked (${angle}° Fold)`;
    return "Folded Clamshell Storage";
  };

  return (
    <section id="simulator" className="py-20 bg-[#0d0f15] text-white relative overflow-hidden border-y border-zinc-800/80">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Hardware Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            3D Folding & Workspace Simulator
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Drag the hinge fold slider to simulate how the OLED panel transitions between a 17.3-inch expanded display and dual 12.5-inch stacked workspace.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-4 space-y-6 bg-zinc-900/80 p-6 rounded-2xl border border-zinc-800/90 backdrop-blur-md">
            
            {/* Hinge Angle Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-zinc-200 flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 text-cyan-400" />
                  <span>Fold Angle:</span>
                  <span className="font-mono text-cyan-300 font-bold text-base">{foldAngle}°</span>
                </label>
                <span className="text-xs text-zinc-400 font-mono">
                  {foldAngle === 180 ? 'Flat (180°)' : foldAngle === 90 ? 'L-Shape (90°)' : foldAngle < 90 ? 'Closed' : 'Stacked View'}
                </span>
              </div>

              <input
                type="range"
                min="30"
                max="180"
                step="5"
                value={foldAngle}
                onChange={(e) => setFoldAngle(Number(e.target.value))}
                className="w-full h-2.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />

              {/* Angle Preset Quick Buttons */}
              <div className="grid grid-cols-4 gap-1.5 mt-3">
                {[
                  { angle: 60, label: '60° Clamshell' },
                  { angle: 90, label: '90° L-Stand' },
                  { angle: 120, label: '120° Stack' },
                  { angle: 180, label: '180° Flat' },
                ].map((preset) => (
                  <button
                    key={preset.angle}
                    onClick={() => setFoldAngle(preset.angle)}
                    className={`py-1.5 text-[11px] font-medium rounded-lg border transition-all ${
                      foldAngle === preset.angle
                        ? 'bg-cyan-500 text-black border-cyan-400 font-bold'
                        : 'bg-zinc-800/60 text-zinc-400 border-zinc-700/50 hover:text-white'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            <hr className="border-zinc-800" />

            {/* Display Preset Selector */}
            <div>
              <label className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                Select Display Software Preset
              </label>

              <div className="space-y-2">
                {DISPLAY_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setActivePreset(preset.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-start space-x-3 ${
                      activePreset === preset.id
                        ? 'bg-cyan-950/40 border-cyan-500/50 text-white shadow-lg shadow-cyan-950/30'
                        : 'bg-zinc-800/30 border-zinc-800 text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-200'
                    }`}
                  >
                    <div className={`p-2 rounded-lg mt-0.5 ${
                      activePreset === preset.id ? 'bg-cyan-500 text-black' : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      {getIcon(preset.id)}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold flex items-center justify-between">
                        <span>{preset.title}</span>
                        {activePreset === preset.id && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5 line-clamp-1">{preset.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Simulated Live Specs Card */}
            <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-xs space-y-2 font-mono">
              <div className="flex justify-between text-zinc-400">
                <span>Active Mode:</span>
                <span className="text-cyan-300 font-semibold">{getEffectiveDiagonal(foldAngle)}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Total Pixel Resolution:</span>
                <span className="text-white">2560 x 1920 QHD+</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>Hinge Crease Stress:</span>
                <span className="text-emerald-400 font-semibold">0.02mm (Zero-Crease Tech)</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Visual Folding Screen Renderer */}
          <div className="lg:col-span-8 bg-zinc-950 rounded-2xl border border-zinc-800 p-6 sm:p-10 flex flex-col items-center justify-center min-h-[520px] relative overflow-hidden group">
            
            {/* Ambient Background Grid inside stage */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

            {/* 3D Fold Perspective Stage Container */}
            <div 
              className="relative w-full max-w-lg aspect-[4/3] flex flex-col justify-center items-center transition-all duration-500"
              style={{ perspective: '1200px' }}
            >
              
              {/* Top Half OLED Panel */}
              <div 
                className="w-full h-1/2 bg-gradient-to-b from-slate-900 to-slate-950 rounded-t-xl border-t-2 border-x-2 border-zinc-700/80 p-3 shadow-2xl relative overflow-hidden transition-all duration-300 transform origin-bottom"
                style={{
                  transform: `rotateX(${-topScreenAngle}deg)`,
                  boxShadow: foldAngle < 180 ? '0 20px 50px rgba(0,0,0,0.8)' : '0 10px 30px rgba(0,255,255,0.05)'
                }}
              >
                {/* Screen Header Bar */}
                <div className="flex justify-between items-center bg-zinc-900/90 px-3 py-1.5 rounded-t-lg border-b border-zinc-800 text-[10px] font-mono text-zinc-400 mb-2">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <span className="w-2 h-2 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-zinc-300 font-semibold">{presetData.topApp}</span>
                  </div>
                  <span className="text-cyan-400 font-bold">OLED Top Screen</span>
                </div>

                {/* Simulated Content Area Top */}
                <div className={`w-full h-[calc(100%-30px)] rounded-b-lg p-3 bg-gradient-to-br ${presetData.bgGradient} flex flex-col justify-between border border-white/5`}>
                  <div className="font-mono text-xs text-cyan-200/90 leading-relaxed space-y-1">
                    <p className="text-zinc-400">// ASUS ZenScreen Fold OLED Live Display Output</p>
                    <p className="text-emerald-400">const monitor = new ZenScreenFoldOLED();</p>
                    <p className="text-cyan-300">monitor.setResolution('2560x1920');</p>
                    <p className="text-blue-300">monitor.setHDR('TrueBlack500');</p>
                  </div>

                  <div className="flex justify-between items-end text-[10px] text-zinc-400 font-mono">
                    <span className="bg-black/50 px-2 py-0.5 rounded border border-white/10">100% DCI-P3</span>
                    <span className="text-cyan-400 font-bold">500 Nits Peak</span>
                  </div>
                </div>

                {/* Screen Gloss Reflection Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />
              </div>

              {/* Waterdrop Hinge Axis Line */}
              <div className="w-full h-2 bg-gradient-to-r from-zinc-800 via-cyan-500/40 to-zinc-800 z-10 my-[-1px] shadow-lg flex items-center justify-center">
                <div className="w-16 h-1 bg-cyan-400/80 rounded-full blur-[1px]"></div>
              </div>

              {/* Bottom Half OLED Panel */}
              <div 
                className="w-full h-1/2 bg-gradient-to-t from-slate-900 to-slate-950 rounded-b-xl border-b-2 border-x-2 border-zinc-700/80 p-3 shadow-2xl relative overflow-hidden transition-all duration-300 transform origin-top"
                style={{
                  transform: `rotateX(${bottomScreenAngle}deg)`,
                  boxShadow: foldAngle < 180 ? '0 -20px 50px rgba(0,0,0,0.8)' : '0 10px 30px rgba(0,255,255,0.05)'
                }}
              >
                {/* Screen Header Bar Bottom */}
                <div className="flex justify-between items-center bg-zinc-900/90 px-3 py-1.5 rounded-t-lg border-b border-zinc-800 text-[10px] font-mono text-zinc-400 mb-2">
                  <div className="flex items-center space-x-1.5">
                    <span className="text-zinc-300 font-semibold">{presetData.bottomApp}</span>
                  </div>
                  <span className="text-cyan-400 font-bold">OLED Bottom Screen</span>
                </div>

                {/* Simulated Content Area Bottom */}
                <div className={`w-full h-[calc(100%-30px)] rounded-b-lg p-3 bg-gradient-to-tr ${presetData.bgGradient} flex flex-col justify-between border border-white/5`}>
                  <div className="font-mono text-xs text-zinc-300 space-y-1">
                    <p className="text-yellow-400">⚡ Server running on http://localhost:3000</p>
                    <p className="text-zinc-400">✓ HMR active | Response time: 0.2ms</p>
                  </div>

                  <div className="flex justify-between items-end text-[10px] text-zinc-400 font-mono">
                    <span className="bg-black/50 px-2 py-0.5 rounded border border-white/10">0.2ms Response</span>
                    <span className="text-emerald-400 font-bold">Zero-Crease Hinge</span>
                  </div>
                </div>

                {/* Screen Gloss Reflection Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 pointer-events-none" />
              </div>

            </div>

            {/* Bottom Caption Indicator */}
            <div className="mt-8 text-center text-xs text-zinc-400 flex items-center space-x-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Real-time CSS 3D Hinge Rendering Angle: {foldAngle}°</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
