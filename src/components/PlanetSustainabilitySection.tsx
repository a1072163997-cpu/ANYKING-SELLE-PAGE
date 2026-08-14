import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Leaf, Recycle, ShieldCheck } from 'lucide-react';

export const PlanetSustainabilitySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position for rotation calculation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalDist = rect.height + windowHeight;
      const currentDist = windowHeight - rect.top;
      
      const progress = Math.min(Math.max(currentDist / totalDist, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Canvas Earth 3D Sphere Renderer with Scroll Rotation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let autoAngle = 0;

    const renderGlobe = () => {
      const width = canvas.width;
      const height = canvas.height;
      const cx = width / 2;
      const cy = height / 2 + 20; // Shift down slightly so tree sits gracefully on top
      const radius = Math.min(width, height) * 0.36;

      ctx.clearRect(0, 0, width, height);

      // Rotation angle combines scroll progress (720 deg max) + continuous gentle drift
      const currentRotation = scrollProgress * Math.PI * 4 + autoAngle;
      autoAngle += 0.002;

      // 1. Globe Ambient Shadow Drop
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(cx, cy + radius + 15, radius * 0.85, radius * 0.18, 0, 0, Math.PI * 2);
      const shadowGrad = ctx.createRadialGradient(cx, cy + radius + 15, 0, cx, cy + radius + 15, radius * 0.85);
      shadowGrad.addColorStop(0, 'rgba(0, 0, 0, 0.25)');
      shadowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = shadowGrad;
      ctx.fill();
      ctx.restore();

      // 2. Base Earth Sphere (Lush Eco-Green Gradient)
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      const baseGrad = ctx.createRadialGradient(
        cx - radius * 0.35,
        cy - radius * 0.35,
        radius * 0.1,
        cx,
        cy,
        radius
      );
      baseGrad.addColorStop(0, '#58a832'); // Bright moss green highlight
      baseGrad.addColorStop(0.5, '#2d7a18'); // Vibrant forest green
      baseGrad.addColorStop(0.85, '#174a0c'); // Deep eco green
      baseGrad.addColorStop(1, '#0c2e06'); // Edge shadow
      ctx.fillStyle = baseGrad;
      ctx.fill();
      ctx.clip(); // Clip continent textures inside sphere

      // 3. Rotating Continent Texture Elements (3D Projection Effect)
      const continentCount = 14;
      for (let i = 0; i < continentCount; i++) {
        const baseLon = (i / continentCount) * Math.PI * 2 + currentRotation;
        const lat = Math.sin(i * 1.7) * (radius * 0.65);
        
        // 3D Lon transform to X offset
        const cosLon = Math.cos(baseLon);
        const sinLon = Math.sin(baseLon);

        // Only draw continents on front hemisphere (cosLon > -0.2)
        if (cosLon > -0.25) {
          const contX = cx + sinLon * radius * 0.95;
          const contY = cy + lat;
          const contSize = (radius * 0.22) * (0.6 + cosLon * 0.5);

          ctx.beginPath();
          ctx.ellipse(
            contX,
            contY,
            contSize * 1.3,
            contSize * 0.8,
            baseLon * 0.5,
            0,
            Math.PI * 2
          );

          // Continent grassy texture color
          const contGrad = ctx.createRadialGradient(contX, contY, 0, contX, contY, contSize * 1.3);
          contGrad.addColorStop(0, 'rgba(142, 214, 86, 0.85)');
          contGrad.addColorStop(1, 'rgba(40, 110, 20, 0.65)');
          ctx.fillStyle = contGrad;
          ctx.fill();
        }
      }

      // 4. Atmosphere Shading Overlay (Soft Spherical 3D Lighting)
      const innerShade = ctx.createRadialGradient(
        cx - radius * 0.4,
        cy - radius * 0.4,
        radius * 0.5,
        cx,
        cy,
        radius
      );
      innerShade.addColorStop(0, 'rgba(255, 255, 255, 0.15)');
      innerShade.addColorStop(0.7, 'rgba(0, 0, 0, 0.1)');
      innerShade.addColorStop(1, 'rgba(0, 0, 0, 0.65)');
      ctx.fillStyle = innerShade;
      ctx.fillRect(cx - radius, cy - radius, radius * 2, radius * 2);
      ctx.restore();

      // 5. Outer Atmospheric Rim Glow
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, radius + 2, 0, Math.PI * 2);
      const rimGrad = ctx.createRadialGradient(cx, cy, radius - 2, cx, cy, radius + 12);
      rimGrad.addColorStop(0, 'rgba(110, 210, 60, 0.4)');
      rimGrad.addColorStop(0.5, 'rgba(70, 180, 40, 0.15)');
      rimGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = rimGrad;
      ctx.fill();
      ctx.restore();

      // 6. Lush Tree Standing Gracefully on Top of Earth
      ctx.save();
      const treeBaseX = cx;
      const treeBaseY = cy - radius + 12;

      // Tree Trunk
      ctx.beginPath();
      ctx.moveTo(treeBaseX - 7, treeBaseY);
      ctx.quadraticCurveTo(treeBaseX - 3, treeBaseY - 35, treeBaseX - 12, treeBaseY - 60);
      ctx.lineTo(treeBaseX + 12, treeBaseY - 60);
      ctx.quadraticCurveTo(treeBaseX + 3, treeBaseY - 35, treeBaseX + 7, treeBaseY);
      ctx.closePath();
      const trunkGrad = ctx.createLinearGradient(treeBaseX - 10, treeBaseY, treeBaseX + 10, treeBaseY - 60);
      trunkGrad.addColorStop(0, '#3a2412');
      trunkGrad.addColorStop(1, '#5c3d23');
      ctx.fillStyle = trunkGrad;
      ctx.fill();

      // Tree Foliage Crown (Layered Green Bubbles)
      const foliageCenterY = treeBaseY - 95;
      
      // Bottom foliage layer
      ctx.beginPath();
      ctx.arc(treeBaseX - 28, foliageCenterY + 15, 32, 0, Math.PI * 2);
      ctx.arc(treeBaseX + 28, foliageCenterY + 15, 32, 0, Math.PI * 2);
      ctx.arc(treeBaseX, foliageCenterY - 15, 45, 0, Math.PI * 2);
      ctx.arc(treeBaseX - 18, foliageCenterY - 30, 30, 0, Math.PI * 2);
      ctx.arc(treeBaseX + 18, foliageCenterY - 30, 30, 0, Math.PI * 2);
      const foliageGrad = ctx.createRadialGradient(
        treeBaseX - 10,
        foliageCenterY - 25,
        5,
        treeBaseX,
        foliageCenterY,
        65
      );
      foliageGrad.addColorStop(0, '#93e643');
      foliageGrad.addColorStop(0.4, '#47a81d');
      foliageGrad.addColorStop(0.85, '#22630a');
      foliageGrad.addColorStop(1, '#113d03');
      ctx.fillStyle = foliageGrad;
      ctx.fill();

      ctx.restore();

      animationFrameId = requestAnimationFrame(renderGlobe);
    };

    renderGlobe();

    return () => cancelAnimationFrame(animationFrameId);
  }, [scrollProgress]);

  return (
    <section 
      ref={containerRef} 
      id="sustainability" 
      className="bg-[#F6F4EF] text-[#25282B] py-20 px-4 sm:px-6 lg:px-12 border-b border-[#C8CBCB]/60"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* MAIN WHITE CARD CONTAINER */}
        <div className="bg-[#25282B] text-[#F6F4EF] rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 shadow-2xl border border-[#C8CBCB]/40 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT SIDE: SCROLL-ROTATING EARTH GLOBE WITH TREE (Lg: col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
              
              {/* Interactive Earth Canvas */}
              <canvas
                ref={canvasRef}
                width={500}
                height={500}
                className="w-full h-full object-contain cursor-grab active:cursor-grabbing"
              />

              {/* Scroll Rotation Indicator Badge */}
              <div className="absolute bottom-2 bg-[#25282B]/90 backdrop-blur-md text-[#E6DDCE] text-[11px] font-mono px-3.5 py-1.5 rounded-full border border-[#E6DDCE]/40 flex items-center space-x-2 shadow-lg">
                <div className="w-2 h-2 rounded-full bg-[#E6DDCE] animate-ping" />
                <span>Scroll to rotate Earth ({Math.round(scrollProgress * 100)}%)</span>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE: DESIGNED WITH THE PLANET IN MIND (Lg: col-span-7) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#E6DDCE] leading-[1.08] font-sans">
              Designed with the planet in mind.
            </h2>

            {/* Paragraph Text */}
            <p className="text-[#C8CBCB] text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
              At <span className="font-bold text-[#F6F4EF]">ANYKING</span>, we believe innovation should move forward without leaving the planet behind. That's why our products are thoughtfully engineered to reduce their environmental impact. From responsibly sourced materials to smarter packaging designed to minimize waste and improve recyclability, every detail is considered with sustainability in mind. Because building better technology also means building a better future.
            </p>

            {/* Eco Features Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-[#5E6265]/20 border border-[#C8CBCB]/30 rounded-2xl p-4 flex items-center space-x-3">
                <Leaf className="w-5 h-5 text-[#E6DDCE] flex-shrink-0" />
                <span className="text-xs font-bold text-[#F6F4EF] font-mono">FSC-Certified Packaging</span>
              </div>

              <div className="bg-[#5E6265]/20 border border-[#C8CBCB]/30 rounded-2xl p-4 flex items-center space-x-3">
                <Recycle className="w-5 h-5 text-[#E6DDCE] flex-shrink-0" />
                <span className="text-xs font-bold text-[#F6F4EF] font-mono">Recyclable Materials</span>
              </div>

              <div className="bg-[#5E6265]/20 border border-[#C8CBCB]/30 rounded-2xl p-4 flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-[#E6DDCE] flex-shrink-0" />
                <span className="text-xs font-bold text-[#F6F4EF] font-mono">ENERGY STAR® Qualified</span>
              </div>
            </div>

            {/* ACTION BUTTONS & LINKS */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              
              {/* Primary Green Pill Button */}
              <a
                href="#refurbished"
                className="starlight-gradient-btn inline-flex items-center space-x-2 text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <span>Refurbished Program</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary Environmental Link */}
              <a
                href="#environment"
                className="inline-flex items-center space-x-1.5 text-[#E6DDCE] hover:text-[#F6F4EF] text-sm sm:text-base font-bold underline transition-colors"
              >
                <span>Learn more about ANYKING and the environment</span>
                <ArrowRight className="w-4 h-4" />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
