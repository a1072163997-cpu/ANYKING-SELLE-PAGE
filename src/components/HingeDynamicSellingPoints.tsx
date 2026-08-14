import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';
import hingeImg from '../assets/images/zenscreen_fold_hinge_1786525027011.jpg';

export const HingeDynamicSellingPoints: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [testFoldAngle, setTestFoldAngle] = useState(120);
  const [cycleCount, setCycleCount] = useState(30482);

  // Simulated laboratory rotation angle test animation
  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setTestFoldAngle((prev) => {
          // Oscillate between 0 degrees and 180 degrees (full flat rotation)
          const time = Date.now() / 800;
          const newAngle = 90 + Math.sin(time) * 90;
          return newAngle;
        });
        setCycleCount((prev) => prev + 1);
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="hinge-selling-points" className="bg-[#25282B] text-[#F6F4EF] py-20 px-4 sm:px-6 lg:px-12 border-b border-[#5E6265]/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* LEFT DYNAMIC CARD: Stable Support Structure & 180° Rotation */}
          <div className="flex flex-col space-y-6">
            
            {/* Graphic Container */}
            <div className="w-full aspect-[4/3] bg-[#5E6265]/20 rounded-xl overflow-hidden relative border border-[#C8CBCB]/30 shadow-2xl flex items-center justify-center group">
              {/* Image / Graphic Display */}
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <img
                  src={hingeImg}
                  alt="180° Swivel Rotation & Stable Support Structure"
                  className="w-full h-full object-cover rounded-lg filter contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Internal Mechanism Overlay Simulation */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />
                
                {/* 180° Rotation Axis Highlight Overlay */}
                <div className="absolute center flex items-center justify-center pointer-events-none">
                  <div className="w-24 h-24 rounded-full border-2 border-[#E6DDCE]/40 bg-[#E6DDCE]/10 blur-sm animate-pulse" />
                </div>

                {/* Technical Label Badge */}
                <div className="absolute bottom-4 left-4 bg-[#25282B]/90 backdrop-blur-md px-3 py-1 rounded-md border border-[#C8CBCB]/40 text-[10px] font-mono text-[#E6DDCE]">
                  180° SWIVEL & STABLE SUPPORT STAND
                </div>
              </div>
            </div>

            {/* Content: Icon + Headline + Description */}
            <div className="space-y-4 pt-2">
              <div className="w-10 h-10 flex items-center justify-center text-[#E6DDCE]">
                <RefreshCw className="w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-[#F6F4EF] tracking-tight leading-tight">
                Stable Stand and 180° Rotation
              </h3>

              {/* Description */}
              <p className="text-[#C8CBCB] text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                The laptop screen extender is designed with a stable support structure to help keep the screens steady during daily use. The 180° rotation design lets you adjust the viewing angle for meetings, collaboration, presentations, or a more comfortable personal setup at home, in the office, or at a cafe.
              </p>
            </div>

          </div>

          {/* RIGHT DYNAMIC CARD: Slim Aluminum Alloy Body */}
          <div className="flex flex-col space-y-6">
            
            {/* Interactive Angle Rotation Lab Test */}
            <div className="w-full aspect-[4/3] bg-[#5E6265]/20 rounded-xl overflow-hidden relative border border-[#C8CBCB]/30 shadow-2xl flex items-center justify-center group">
              
              {/* Testing Rig Visual Box */}
              <div className="relative w-full h-full bg-[#25282B] p-6 flex flex-col items-center justify-center overflow-hidden">
                
                {/* Mechanical Rig Arm Simulation */}
                <div className="relative w-full h-full flex flex-col items-center justify-center perspective-[1000px]">
                  
                  {/* Top Screen Section */}
                  <div
                    className="w-56 h-28 bg-[#5E6265]/40 border-2 border-[#C8CBCB] rounded-t-lg relative transition-all duration-75 shadow-2xl overflow-hidden flex items-center justify-center"
                    style={{
                      transformOrigin: 'bottom center',
                      transform: `rotateX(${-Math.max(0, (180 - testFoldAngle) / 2)}deg)`
                    }}
                  >
                    <div className="w-full h-full bg-[#25282B] p-2 flex flex-col justify-between">
                      <div className="text-[8px] font-mono text-[#E6DDCE]">ROTATION TEST: {Math.round(testFoldAngle)}°</div>
                      <div className="text-[9px] font-mono text-[#C8CBCB] text-right">3.19 LBS ALUMINUM BODY</div>
                    </div>
                  </div>

                  {/* Hinge Line */}
                  <div className="w-56 h-1.5 bg-[#E6DDCE] shadow-[0_0_10px_rgba(230,221,206,0.8)] z-10" />

                  {/* Bottom Screen Section */}
                  <div
                    className="w-56 h-28 bg-[#5E6265]/40 border-2 border-[#C8CBCB] rounded-b-lg relative transition-all duration-75 shadow-2xl overflow-hidden flex items-center justify-center"
                    style={{
                      transformOrigin: 'top center',
                      transform: `rotateX(${Math.max(0, (180 - testFoldAngle) / 2)}deg)`
                    }}
                  >
                    <div className="w-full h-full bg-[#25282B] p-2 flex flex-col justify-between">
                      <div className="text-[8px] font-mono text-[#E6DDCE]">15.6" IPS 1080P</div>
                      <div className="text-[9px] font-mono text-[#C8CBCB]">ANYKING DUAL EXTENDER</div>
                    </div>
                  </div>

                </div>

                {/* Laboratory Overlay Stats */}
                <div className="absolute top-4 left-4 bg-[#25282B]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#C8CBCB]/40 text-xs font-mono">
                  <span className="text-[#C8CBCB]">ANGLE TEST: </span>
                  <span className="text-[#E6DDCE] font-bold">{Math.round(testFoldAngle)}°</span>
                </div>

                {/* Bottom Right Control */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                  className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all shadow-lg active:scale-95"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white translate-x-0.5" />
                  )}
                </button>

              </div>

            </div>

            {/* Content: Slim Aluminum Design */}
            <div className="space-y-4 pt-2">
              
              {/* Circular Badge */}
              <div className="w-12 h-12 rounded-full border-2 border-[#E6DDCE] p-0.5 flex items-center justify-center bg-[#25282B] text-white shadow-lg">
                <div className="w-full h-full rounded-full border border-dashed border-[#C8CBCB] flex flex-col items-center justify-center text-[7px] font-mono font-bold leading-none text-center">
                  <span className="text-[#E6DDCE]">SLIM</span>
                  <span className="text-[8px] text-white my-[1px]">3.19</span>
                  <span className="text-[#C8CBCB]">LBS</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-[#F6F4EF] tracking-tight leading-tight">
                Slim Aluminum Design with Carrying Bag
              </h3>

              {/* Description */}
              <p className="text-[#C8CBCB] text-sm sm:text-base leading-relaxed font-normal max-w-xl">
                Built with a sleek aluminum alloy body, this 3.19 lbs laptop monitor extender offers a premium look while staying portable for business travel and remote work. The package includes a carrying bag and complete cables.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
