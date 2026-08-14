import React, { useState, useEffect, useRef } from 'react';
import { Maximize2, Layers, ShieldCheck, Sparkles, MoveDown, Compass, ChevronRight } from 'lucide-react';

interface StageData {
  id: string;
  tagLabel: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  metrics: { value: string; label: string }[];
  targetYaw: number;      // Y-axis rotation in degrees
  targetPitch: number;    // X-axis rotation in degrees
  targetFoldAngle: number;// Fold angle in degrees (0 = closed, 180 = flat)
  targetStandAngle: number;// Kickstand angle in degrees
}

const STAGES: StageData[] = [
  {
    id: 'compact',
    tagLabel: 'COMPACT',
    title: 'Unparalleled viewing experience',
    description: 'It boasts a stunning OLED display that opens up an entire screen with no gap, providing ample screen space for work and play.',
    icon: <Maximize2 className="w-8 h-8 text-[#E6DDCE]" />,
    metrics: [
      { value: '2560 x 1920', label: 'resolution' },
      { value: '17.3-inch', label: 'Screen size' }
    ],
    targetYaw: -25,
    targetPitch: 12,
    targetFoldAngle: 125,
    targetStandAngle: 25
  },
  {
    id: 'vibrant',
    tagLabel: 'VIBRANT',
    title: 'Stylish and sturdy stand',
    description: 'This integrated fold-up stand exudes elegance and sophistication, providing stability and support in both portrait and landscape setups.',
    icon: <Layers className="w-8 h-8 text-[#E6DDCE]" />,
    metrics: [
      { value: 'Aluminum', label: 'chassis' },
      { value: 'Portrait & Landscape', label: 'mode' }
    ],
    targetYaw: 155,
    targetPitch: 18,
    targetFoldAngle: 140,
    targetStandAngle: 55
  },
  {
    id: 'versatile',
    tagLabel: 'VERSATILE',
    title: 'Seamless blend and flexibility',
    description: 'Size matters. A marvel of engineering and innovation finds the sweet spot between ultimate productivity and travel portability.',
    icon: <Sparkles className="w-8 h-8 text-[#E6DDCE]" />,
    metrics: [
      { value: '180° Flat', label: 'hinge flex' },
      { value: '9.7 mm', label: 'thin profile' }
    ],
    targetYaw: 360,
    targetPitch: 4,
    targetFoldAngle: 180,
    targetStandAngle: 0
  }
];

export const ScrollRotationSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  // Handle scroll calculation relative to this pinned section
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
      
      if (totalScrollableDistance <= 0) return;

      // Distance scrolled from top of section
      const scrolled = -rect.top;
      const rawProgress = scrolled / totalScrollableDistance;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      setScrollProgress(clampedProgress);

      // Determine active stage (0, 1, or 2)
      if (clampedProgress < 0.38) {
        setActiveStageIndex(0);
      } else if (clampedProgress < 0.72) {
        setActiveStageIndex(1);
      } else {
        setActiveStageIndex(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial position check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse move for subtle 3D parallax tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15; // deg tilt
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setIsHovered(false);
  };

  // Interpolate 3D transform values smoothly based on scroll progress
  const lerp = (start: number, end: number, amt: number) => start + (end - start) * amt;

  let yaw = STAGES[0].targetYaw;
  let pitch = STAGES[0].targetPitch;
  let foldAngle = STAGES[0].targetFoldAngle;
  let standAngle = STAGES[0].targetStandAngle;

  if (scrollProgress <= 0.5) {
    const p = scrollProgress / 0.5;
    yaw = lerp(STAGES[0].targetYaw, STAGES[1].targetYaw, p);
    pitch = lerp(STAGES[0].targetPitch, STAGES[1].targetPitch, p);
    foldAngle = lerp(STAGES[0].targetFoldAngle, STAGES[1].targetFoldAngle, p);
    standAngle = lerp(STAGES[0].targetStandAngle, STAGES[1].targetStandAngle, p);
  } else {
    const p = (scrollProgress - 0.5) / 0.5;
    yaw = lerp(STAGES[1].targetYaw, STAGES[2].targetYaw, p);
    pitch = lerp(STAGES[1].targetPitch, STAGES[2].targetPitch, p);
    foldAngle = lerp(STAGES[1].targetFoldAngle, STAGES[2].targetFoldAngle, p);
    standAngle = lerp(STAGES[1].targetStandAngle, STAGES[2].targetStandAngle, p);
  }

  // Add mouse hover tilt
  const finalYaw = yaw + mouseOffset.x;
  const finalPitch = pitch - mouseOffset.y;

  // Jump smoothly to a specific stage when user clicks right pill
  const scrollToStage = (index: number) => {
    if (!containerRef.current) return;
    const totalScrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetProgress = index === 0 ? 0.05 : index === 1 ? 0.5 : 0.95;
    const sectionTop = containerRef.current.offsetTop;
    const scrollToY = sectionTop + targetProgress * totalScrollableDistance;

    window.scrollTo({
      top: scrollToY,
      behavior: 'smooth'
    });
  };

  const activeStage = STAGES[activeStageIndex];

  // Screen fold angle calculations for CSS 3D
  const topScreenRotateX = Math.max(0, (180 - foldAngle) / 2);
  const bottomScreenRotateX = Math.max(0, (180 - foldAngle) / 2);

  return (
    <div
      ref={containerRef}
      id="scroll-3d-showcase"
      className="relative bg-[#25282B] text-[#F6F4EF] h-[320vh]"
    >
      {/* Sticky Fullscreen Viewing Stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#25282B] via-[#1D2022] to-[#25282B]">
        
        {/* Background Texture & Ambient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_var(--tw-gradient-stops))] from-[#5E6265]/20 via-[#1D2022] to-[#25282B] pointer-events-none" />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E6DDCE]/10 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E6DDCE]/10 blur-[150px] rounded-full pointer-events-none" />

        {/* Floating Top Banner Indicator */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-3 bg-[#1D2022]/90 border border-[#5E6265]/60 backdrop-blur-md px-4 py-2 rounded-full shadow-2xl">
          <Compass className="w-4 h-4 text-[#E6DDCE] animate-spin" style={{ animationDuration: '10s' }} />
          <span className="text-xs text-[#C8CBCB] font-medium">Scroll down to rotate 3D product view & features</span>
          <MoveDown className="w-3.5 h-3.5 text-[#E6DDCE] animate-bounce" />
        </div>

        {/* Content Container Grid */}
        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-8 items-center h-full py-16">
            
            {/* LEFT AREA: Interactive 3D Rotating Product Canvas (Lg: col-span-7) */}
            <div
              className="lg:col-span-7 h-full flex flex-col items-center justify-center relative cursor-grab active:cursor-grabbing select-none"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Product 3D Stage Box */}
              <div
                className="relative w-full max-w-lg aspect-[4/3] flex items-center justify-center transition-transform duration-100 ease-out"
                style={{
                  perspective: '1400px',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* 3D Rotating Monitor Group */}
                <div
                  className="relative w-full h-full flex flex-col items-center justify-center transition-all duration-300 ease-out"
                  style={{
                    transform: `rotateX(${finalPitch}deg) rotateY(${finalYaw}deg) rotateZ(0deg)`,
                    transformStyle: 'preserve-3d'
                  }}
                >
                  {/* Outer Frame Shadow & Glow */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-3xl blur-2xl pointer-events-none transition-opacity duration-500"
                    style={{
                      transform: 'translateZ(-40px) scale(0.9)',
                      opacity: 0.7
                    }}
                  />

                  {/* TOP OLED PANEL */}
                  <div
                    className="w-[85%] h-[42%] bg-zinc-950 rounded-t-xl border-t-2 border-x-2 border-zinc-700/80 p-2.5 shadow-2xl relative transition-all duration-200"
                    style={{
                      transformOrigin: 'bottom center',
                      transform: `rotateX(${-topScreenRotateX}deg)`,
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 25px 60px rgba(0,0,0,0.85), inset 0 0 15px rgba(255,255,255,0.05)'
                    }}
                  >
                    {/* Screen Bezel Branding */}
                    <div className="flex justify-between items-center text-[9px] font-mono text-[#C8CBCB] px-2 py-0.5 border-b border-[#5E6265]/50 mb-1">
                      <span className="text-[#E6DDCE] font-semibold">ANYKING OLED 1080P</span>
                      <span className="text-[#C8CBCB]">100% sRGB</span>
                    </div>

                    {/* Display Graphic Output */}
                    <div className="w-full h-[calc(100%-20px)] rounded bg-gradient-to-br from-[#25282B] via-[#1D2022] to-[#25282B] p-3 relative overflow-hidden flex flex-col justify-between border border-[#5E6265]/40">
                      {/* Abstract OLED artwork */}
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E6DDCE]/15 rounded-full blur-xl pointer-events-none" />
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#E6DDCE]/15 rounded-full blur-xl pointer-events-none" />

                      <div className="text-[11px] font-sans font-bold text-[#F6F4EF] tracking-tight z-10">
                        ANYKING Dual Screen Extender
                        <span className="block text-[9px] font-mono text-[#E6DDCE] font-normal mt-0.5">15.6" Dual IPS | 1080P FHD</span>
                      </div>

                      <div className="flex justify-between items-end text-[9px] font-mono text-[#C8CBCB] z-10">
                        <span className="bg-black/60 px-1.5 py-0.5 rounded border border-[#E6DDCE]/20 text-[#E6DDCE]">Low Blue Light</span>
                        <span className="text-[#E6DDCE] font-bold">1080P FHD IPS</span>
                      </div>

                      {/* Glossy Screen Glass Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-transparent pointer-events-none" />
                    </div>
                  </div>

                  {/* WATERDROP HINGE AXIS LINE */}
                  <div
                    className="w-[85%] h-[6px] bg-gradient-to-r from-[#5E6265] via-[#E6DDCE] to-[#5E6265] my-[-1px] z-20 shadow-xl flex items-center justify-center relative"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="w-20 h-[3px] bg-[#E6DDCE] rounded-full blur-[1px] animate-pulse" />
                  </div>

                  {/* BOTTOM OLED PANEL */}
                  <div
                    className="w-[85%] h-[42%] bg-[#1D2022] rounded-b-xl border-b-2 border-x-2 border-[#5E6265]/80 p-2.5 shadow-2xl relative transition-all duration-200"
                    style={{
                      transformOrigin: 'top center',
                      transform: `rotateX(${bottomScreenRotateX}deg)`,
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 -25px 60px rgba(0,0,0,0.85), inset 0 0 15px rgba(255,255,255,0.05)'
                    }}
                  >
                    {/* Display Graphic Output */}
                    <div className="w-full h-[calc(100%-20px)] rounded bg-gradient-to-tr from-[#25282B] via-[#1D2022] to-[#25282B] p-3 relative overflow-hidden flex flex-col justify-between border border-[#5E6265]/40">
                      <div className="text-[10px] font-mono text-[#C8CBCB] space-y-1">
                        <div className="flex items-center space-x-1 text-[#E6DDCE]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E6DDCE]" />
                          <span>360° Flexible Hinge Architecture</span>
                        </div>
                        <p className="text-[9px] text-[#C8CBCB]">Productivity Unfolded • Portability Redefined</p>
                      </div>

                      <div className="flex justify-between items-end text-[9px] font-mono text-[#C8CBCB]">
                        <span className="text-[#C8CBCB]">Lightweight Aluminum Body</span>
                        <span className="text-[#E6DDCE] font-bold">Ultrathin</span>
                      </div>

                      {/* Glossy Screen Glass Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-transparent pointer-events-none" />
                    </div>

                    {/* Bottom Bezel Controls */}
                    <div className="flex justify-between items-center text-[9px] font-mono text-[#C8CBCB] px-2 py-0.5 border-t border-[#5E6265]/50 mt-1">
                      <span>ANYKING Design</span>
                      <span className="text-[#E6DDCE]">15.6" Dual IPS</span>
                    </div>
                  </div>

                  {/* REAR INTEGRATED KICKSTAND (Visible when rotated to rear Yaw ~120° - 240°) */}
                  <div
                    className="absolute w-[65%] h-[50%] bg-gradient-to-b from-[#25282B] via-[#1D2022] to-[#1D2022] rounded-xl border border-[#5E6265]/60 p-3 shadow-2xl transition-all duration-300 flex flex-col justify-between"
                    style={{
                      transformOrigin: 'top center',
                      transform: `translateZ(-15px) translateY(10%) rotateX(${-standAngle}deg)`,
                      transformStyle: 'preserve-3d',
                      opacity: Math.abs(finalYaw % 360 - 180) < 110 ? 1 : 0.3
                    }}
                  >
                    <div className="flex justify-between items-center border-b border-[#5E6265]/60 pb-2">
                      <span className="text-[10px] font-mono text-[#E6DDCE] font-bold uppercase tracking-wider">Integrated Stand</span>
                      <span className="text-[9px] font-mono text-[#C8CBCB]">360° Stepless Angle</span>
                    </div>

                    <div className="my-auto text-center py-2">
                      <div className="text-xs font-bold tracking-widest text-[#F6F4EF] uppercase font-mono">
                        ANYKING Dual Extender
                      </div>
                      <div className="text-[9px] text-[#C8CBCB] font-mono mt-0.5">
                        Integrated Adjustable Stand
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-1 border-t border-[#5E6265]/50 text-[8px] font-mono text-[#C8CBCB]">
                      <span>Ergonomic Support</span>
                      <span className="text-[#E6DDCE]">Sturdy & Premium</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Interactive Rotation Helper */}
              <div className="mt-8 flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1D2022]/90 border border-[#5E6265]/50 text-xs font-mono text-[#C8CBCB] shadow-xl">
                <span className="w-2 h-2 rounded-full bg-[#E6DDCE] animate-ping" />
                <span>3D Orientation: Y {Math.round(finalYaw)}° | X {Math.round(finalPitch)}° | Fold {Math.round(foldAngle)}°</span>
              </div>
            </div>

            {/* RIGHT AREA: Feature Callout & Selling Points (Lg: col-span-5) */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-8 pl-0 lg:pl-6 z-10">
              
              {/* Feature Icon Badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1D2022] border border-[#E6DDCE]/40 shadow-2xl backdrop-blur-md">
                {activeStage.icon}
              </div>

              {/* Headline & Description */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#F6F4EF] leading-[1.15]">
                  {activeStage.title}
                </h2>
                <p className="text-[#C8CBCB] text-base sm:text-lg font-light leading-relaxed">
                  {activeStage.description}
                </p>
              </div>

              {/* Key Feature Metrics Grid */}
              <div className="grid grid-cols-2 gap-6 pt-2 border-t border-[#5E6265]/50">
                {activeStage.metrics.map((metric, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-[#E6DDCE]">
                      {metric.value}
                    </div>
                    <div className="text-xs text-[#C8CBCB] uppercase tracking-wider font-mono">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Scroll Progress Bar for Active Stage */}
              <div className="pt-4">
                <div className="flex justify-between text-xs font-mono text-[#C8CBCB] mb-2">
                  <span>Stage {activeStageIndex + 1} of 3</span>
                  <span className="text-[#E6DDCE]">{Math.round(scrollProgress * 100)}% Scroll Progress</span>
                </div>
                <div className="w-full h-1.5 bg-[#1D2022] rounded-full overflow-hidden border border-[#5E6265]/30">
                  <div
                    className="h-full bg-gradient-to-r from-[#E6DDCE] via-[#F6F4EF] to-[#E6DDCE] transition-all duration-150"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* FAR RIGHT FIXED VERTICAL STAGE SELECTOR / NAVIGATION PILLS */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center space-y-6">
          <div className="relative flex flex-col items-center space-y-8">
            {/* Connecting Vertical Track Line */}
            <div className="absolute top-3 bottom-3 w-[2px] bg-[#5E6265]/40 -z-10" />
            <div
              className="absolute top-3 w-[2px] bg-[#E6DDCE] transition-all duration-300 -z-10"
              style={{
                height: `${(activeStageIndex / 2) * 100}%`
              }}
            />

            {/* Stage Selector Pills */}
            {STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => scrollToStage(idx)}
                  className="group relative flex items-center focus:outline-none"
                >
                  {/* Indicator Dot / Capsule */}
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? 'bg-[#E6DDCE] border-[#F6F4EF] scale-125 shadow-lg shadow-[#E6DDCE]/50'
                        : 'bg-[#1D2022] border-[#5E6265] group-hover:border-[#C8CBCB]'
                    }`}
                  >
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#25282B]" />}
                  </div>

                  {/* Stage Name Pill Label (Visible or on Hover) */}
                  <div
                    className={`absolute right-6 px-3 py-1 rounded-md text-xs font-mono font-bold tracking-wider transition-all duration-300 whitespace-nowrap shadow-xl flex items-center space-x-1 ${
                      isActive
                        ? 'bg-[#E6DDCE] text-[#25282B] translate-x-0 opacity-100 scale-100'
                        : 'bg-[#1D2022] text-[#C8CBCB] opacity-60 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-[#5E6265]/40'
                    }`}
                  >
                    <span>{stage.tagLabel}</span>
                    {isActive && <ChevronRight className="w-3 h-3" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
