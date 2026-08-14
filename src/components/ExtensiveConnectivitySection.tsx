import React, { useState, useRef, MouseEvent } from 'react';
import { ZoomIn, Info, CheckCircle2 } from 'lucide-react';

interface PortHotspot {
  id: string;
  name: string;
  label: string;
  position: string; // 'top' | 'bottom'
  xPercent: number; // 0-100 position on the side edge diagram
  description: string;
  specs: string[];
  zoomTransform: { x: number; y: number; scale: number };
}

export const ExtensiveConnectivitySection: React.FC = () => {
  const [activePort, setActivePort] = useState<PortHotspot | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, relX: 0, relY: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const ports: PortHotspot[] = [
    {
      id: 'power',
      name: 'Power Button',
      label: 'Power',
      position: 'top',
      xPercent: 18,
      description: 'Tactile power button with LED status indicator for instant turn-on and standby control.',
      specs: ['Instant power on/off', 'Integrated LED status light'],
      zoomTransform: { x: 18, y: 48, scale: 2.8 }
    },
    {
      id: 'osd',
      name: 'OSD Navigation Buttons',
      label: 'OSD navigation',
      position: 'top',
      xPercent: 32,
      description: '3-way intuitive control buttons for swift navigation through brightness, color profiles, and display modes.',
      specs: ['Intuitive 3-button layout', 'DisplayWidget Center compatible'],
      zoomTransform: { x: 32, y: 48, scale: 2.8 }
    },
    {
      id: 'audio',
      name: '3.5mm Audio Jack',
      label: '3.5mm Audio jack',
      position: 'bottom',
      xPercent: 60,
      description: 'High-fidelity 3.5 mm headphone output for direct wired audio passthrough without latency.',
      specs: ['Zero-latency wired audio', 'Supports headsets & external speakers'],
      zoomTransform: { x: 60, y: 50, scale: 2.8 }
    },
    {
      id: 'hdmi',
      name: 'Mini HDMI Port',
      label: 'Mini HDMI',
      position: 'top',
      xPercent: 67,
      description: 'Mini HDMI 2.0 port for broad compatibility with laptops, gaming consoles, cameras, and media devices.',
      specs: ['Mini HDMI 2.0', 'Broad multi-device compatibility'],
      zoomTransform: { x: 67, y: 50, scale: 2.8 }
    },
    {
      id: 'usbc',
      name: 'Dual USB Type-C Ports',
      label: 'Dual USB-C',
      position: 'bottom',
      xPercent: 78,
      description: 'Full-featured USB-C ports with DP Alt Mode & DC-in power passthrough for seamless single-cable connectivity.',
      specs: ['DisplayPort™ Alt Mode', 'Power Delivery Passthrough', 'Plug-and-play'],
      zoomTransform: { x: 78, y: 50, scale: 2.8 }
    }
  ];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const relX = (x / rect.width) * 100;
    const relY = (y / rect.height) * 100;

    setMousePos({ x, y, relX, relY });

    // Auto detect nearest port when hovering diagram
    const nearest = ports.reduce((prev, curr) => {
      return Math.abs(curr.xPercent - relX) < Math.abs(prev.xPercent - relX) ? curr : prev;
    });

    if (Math.abs(nearest.xPercent - relX) < 12) {
      setActivePort(nearest);
    }
  };

  return (
    <section id="extensive-connectivity" className="bg-[#25282B] text-[#F6F4EF] py-24 px-4 sm:px-6 lg:px-12 border-b border-[#5E6265]/40">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-[#F6F4EF] via-[#E6DDCE] to-[#C8CBCB] bg-clip-text text-transparent">
            Extensive connectivity
          </h2>
          <p className="text-[#C8CBCB] text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            The ANYKING 15.6" Dual Screen Extender offers a versatile suite of connectivity options, including two full-featured USB-C ports* for video signals and power passthrough. In addition, a mini HDMI port ensures broad device compatibility, while a 3.5 mm audio jack is ready for wired headsets.
          </p>
        </div>

        {/* INTERACTIVE DIAGRAM WITH MAGNIFIER & HOTSPOTS */}
        <div className="w-full relative pt-8 pb-4">
          
          {/* Main Diagram Area */}
          <div 
            ref={imageContainerRef}
            className="relative w-full max-w-4xl mx-auto aspect-[16/7] rounded-2xl bg-[#1D2022] border border-[#5E6265]/60 p-6 flex flex-col items-center justify-center overflow-hidden shadow-2xl select-none group cursor-crosshair"
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => {
              setIsHoveringImage(false);
              setActivePort(null);
            }}
            onMouseMove={handleMouseMove}
          >
            
            {/* Background Ambient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E6DDCE]/5 via-[#1D2022] to-[#E6DDCE]/5 pointer-events-none" />

            {/* TOP POINTER LABELS */}
            <div className="absolute top-4 inset-x-8 flex justify-between items-end pointer-events-none z-20 text-xs sm:text-sm font-mono">
              {ports.filter(p => p.position === 'top').map((port) => {
                const isActive = activePort?.id === port.id;
                return (
                  <div 
                    key={port.id}
                    className="absolute -translate-x-1/2 transition-all duration-300 flex flex-col items-center"
                    style={{ left: `${port.xPercent}%` }}
                  >
                    <span className={`px-2.5 py-1 rounded-md font-bold tracking-wide transition-all ${
                      isActive 
                        ? 'bg-[#E6DDCE] text-[#25282B] shadow-[0_0_15px_rgba(230,221,206,0.8)] scale-110' 
                        : 'bg-[#25282B]/90 text-[#C8CBCB] border border-[#5E6265]'
                    }`}>
                      {port.label}
                    </span>
                    {/* Connecting Vertical Line */}
                    <div className={`w-0.5 h-10 my-1 transition-all ${
                      isActive ? 'bg-[#E6DDCE] shadow-[0_0_8px_rgba(230,221,206,0.8)]' : 'bg-[#5E6265]'
                    }`} />
                  </div>
                );
              })}
            </div>

            {/* HIGH-PRECISION METALLIC SIDE EDGE VECTOR GRAPHIC */}
            <div className="relative w-full h-32 my-auto flex items-center justify-center">
              
              {/* Metallic Monitor Bezel Frame */}
              <div className="relative w-full max-w-3xl h-16 bg-gradient-to-b from-[#5E6265] via-[#25282B] to-[#1D2022] rounded-xl border border-[#5E6265] shadow-[0_10px_30px_rgba(0,0,0,0.8)] flex items-center justify-between px-6 overflow-hidden">
                
                {/* Brushed Texture Lines */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/40 pointer-events-none" />

                {/* HARDWARE PORTS REALISTIC ILLUSTRATION */}
                {/* 1. Power Button */}
                <div 
                  className={`relative w-8 h-3 rounded bg-[#1D2022] border border-[#5E6265] flex items-center justify-center cursor-pointer transition-all ${
                    activePort?.id === 'power' ? 'ring-2 ring-[#E6DDCE] scale-110 shadow-[0_0_12px_rgba(230,221,206,0.9)]' : ''
                  }`}
                  onMouseEnter={() => setActivePort(ports[0])}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E6DDCE] animate-pulse" />
                </div>

                {/* 2. OSD Buttons (3-button group) */}
                <div 
                  className={`relative flex items-center space-x-1.5 cursor-pointer p-1 rounded transition-all ${
                    activePort?.id === 'osd' ? 'ring-2 ring-[#E6DDCE] bg-black/20 shadow-[0_0_12px_rgba(230,221,206,0.9)]' : ''
                  }`}
                  onMouseEnter={() => setActivePort(ports[1])}
                >
                  <div className="w-6 h-3 rounded-sm bg-[#1D2022] border border-[#5E6265]" />
                  <div className="w-6 h-3 rounded-sm bg-[#1D2022] border border-[#5E6265]" />
                  <div className="w-6 h-3 rounded-sm bg-[#1D2022] border border-[#5E6265]" />
                </div>

                {/* Center Branding Notch */}
                <div className="text-[10px] font-extrabold tracking-widest text-[#E6DDCE] uppercase font-mono select-none">
                  ANYKING DUAL
                </div>

                {/* 3. 3.5mm Headphone Jack */}
                <div 
                  className={`relative w-5 h-5 rounded-full bg-[#1D2022] border-2 border-[#5E6265] flex items-center justify-center cursor-pointer transition-all ${
                    activePort?.id === 'audio' ? 'ring-2 ring-[#E6DDCE] scale-110 shadow-[0_0_12px_rgba(230,221,206,0.9)]' : ''
                  }`}
                  onMouseEnter={() => setActivePort(ports[2])}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#25282B] border border-[#5E6265]" />
                </div>

                {/* 4. Mini HDMI Port */}
                <div 
                  className={`relative w-9 h-4 bg-[#1D2022] border-2 border-[#5E6265] rounded-sm flex items-center justify-center cursor-pointer transition-all ${
                    activePort?.id === 'hdmi' ? 'ring-2 ring-[#E6DDCE] scale-110 shadow-[0_0_12px_rgba(230,221,206,0.9)]' : ''
                  }`}
                  onMouseEnter={() => setActivePort(ports[3])}
                >
                  <div className="w-6 h-2 bg-[#25282B] rounded-xs border border-[#5E6265] flex items-center justify-center">
                    <span className="text-[6px] font-mono font-bold text-[#C8CBCB]">HDMI</span>
                  </div>
                </div>

                {/* 5. Dual USB Type-C Ports */}
                <div 
                  className={`relative flex items-center space-x-2 p-1 rounded cursor-pointer transition-all ${
                    activePort?.id === 'usbc' ? 'ring-2 ring-[#E6DDCE] bg-black/20 shadow-[0_0_12px_rgba(230,221,206,0.9)]' : ''
                  }`}
                  onMouseEnter={() => setActivePort(ports[4])}
                >
                  <div className="w-7 h-3.5 bg-[#1D2022] border-2 border-[#5E6265] rounded-full flex items-center justify-center">
                    <div className="w-4 h-1 bg-[#5E6265] rounded-full" />
                  </div>
                  <div className="w-7 h-3.5 bg-[#1D2022] border-2 border-[#5E6265] rounded-full flex items-center justify-center">
                    <div className="w-4 h-1 bg-[#5E6265] rounded-full" />
                  </div>
                </div>

              </div>

            </div>

            {/* BOTTOM POINTER LABELS */}
            <div className="absolute bottom-4 inset-x-8 flex justify-between items-start pointer-events-none z-20 text-xs sm:text-sm font-mono">
              {ports.filter(p => p.position === 'bottom').map((port) => {
                const isActive = activePort?.id === port.id;
                return (
                  <div 
                    key={port.id}
                    className="absolute -translate-x-1/2 transition-all duration-300 flex flex-col items-center"
                    style={{ left: `${port.xPercent}%` }}
                  >
                    {/* Connecting Vertical Line */}
                    <div className={`w-0.5 h-10 my-1 transition-all ${
                      isActive ? 'bg-[#E6DDCE] shadow-[0_0_8px_rgba(230,221,206,0.8)]' : 'bg-[#5E6265]'
                    }`} />
                    <span className={`px-2.5 py-1 rounded-md font-bold tracking-wide transition-all ${
                      isActive 
                        ? 'bg-[#E6DDCE] text-[#25282B] shadow-[0_0_15px_rgba(230,221,206,0.8)] scale-110' 
                        : 'bg-[#25282B]/90 text-[#C8CBCB] border border-[#5E6265]'
                    }`}>
                      {port.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* DYNAMIC LOUPE MAGNIFIER LENS OVERLAY WHEN HOVERING */}
            {isHoveringImage && activePort && (
              <div 
                className="absolute pointer-events-none z-30 w-44 h-44 rounded-full border-2 border-[#E6DDCE] bg-[#25282B]/95 shadow-[0_0_30px_rgba(230,221,206,0.5)] overflow-hidden flex flex-col items-center justify-center text-center p-3 transition-transform duration-100 ease-out"
                style={{
                  left: `${mousePos.x - 88}px`,
                  top: `${mousePos.y - 88}px`
                }}
              >
                {/* Loupe Crosshair Lines */}
                <div className="absolute inset-0 border border-[#E6DDCE]/20 rounded-full pointer-events-none" />
                <div className="absolute top-1/2 inset-x-0 h-[1px] bg-[#E6DDCE]/30" />
                <div className="absolute left-1/2 inset-y-0 w-[1px] bg-[#E6DDCE]/30" />

                {/* Magnified High Detail Port Card Content */}
                <div className="relative z-10 flex flex-col items-center space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#E6DDCE] uppercase tracking-widest bg-[#1D2022] px-2 py-0.5 rounded border border-[#5E6265]">
                    MAGNIFIED 2.5X
                  </span>
                  <span className="text-xs font-bold text-[#F6F4EF] font-sans">
                    {activePort.name}
                  </span>
                  <span className="text-[9px] text-[#C8CBCB] font-mono leading-tight max-w-[130px]">
                    {activePort.specs[0]}
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* HOVER DETAILS CARD BELOW DIAGRAM */}
          <div className="mt-6 w-full max-w-4xl mx-auto bg-[#1D2022] border border-[#5E6265]/60 rounded-xl p-5 text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-lg bg-[#25282B] border border-[#5E6265] flex items-center justify-center text-[#E6DDCE] flex-shrink-0 mt-0.5">
                <ZoomIn className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-[#E6DDCE] font-bold tracking-wider">
                  {activePort ? `Selected Detail: ${activePort.name}` : 'Interactive Inspection'}
                </div>
                <div className="text-sm text-[#F6F4EF] mt-0.5 leading-snug">
                  {activePort ? activePort.description : 'Hover your cursor over any port or button position above to magnify macro details and hardware specs.'}
                </div>
              </div>
            </div>

            {activePort && (
              <div className="flex items-center space-x-2 text-xs font-mono text-[#C8CBCB] bg-[#25282B] px-3 py-2 rounded-lg border border-[#5E6265]/60 flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#E6DDCE]" />
                <span>{activePort.specs[0]}</span>
              </div>
            )}
          </div>

        </div>

        {/* FOOTER NOTE & HELP LINK */}
        <div className="space-y-2 pt-2 text-center text-xs text-[#C8CBCB] font-sans max-w-3xl">
          <p className="leading-relaxed">
            *Note: Need to check whether the USB-C port of your laptop supports DP Alt mode prior to use. If not, please use HDMI signal with USB-C (DC-in) power supply instead.
          </p>
          <div>
            <a 
              href="#support" 
              className="text-[#E6DDCE] hover:text-[#F6F4EF] underline font-medium transition-colors inline-flex items-center space-x-1"
            >
              <span>How to identify if your laptop USB-C port supports DP display output?</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
