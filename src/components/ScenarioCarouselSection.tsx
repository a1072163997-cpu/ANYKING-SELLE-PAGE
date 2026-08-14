import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScenarioCard {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
}

export const ScenarioCarouselSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scenarios: ScenarioCard[] = [
    {
      id: 'hotel',
      category: '酒店 • Hotel Suite',
      title: '客房高效办公',
      subtitle: '出差旅途中的私人双屏工作站，随插即用，轻松应对突发会议与文档处理。',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      badge: '酒店场景'
    },
    {
      id: 'airport',
      category: '机场 • Airport Lounge',
      title: '候机室即刻产出',
      subtitle: '超薄折叠随身携带，利用候机与转机碎片化时间，快速搭建高效率双屏面板。',
      image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1200&q=80',
      badge: '机场场景'
    },
    {
      id: 'cafe',
      category: '咖啡厅 • Café Workspace',
      title: '咖啡厅惬意多任务',
      subtitle: '单根 USB-C 一线直连，在角落卡座轻松展开 17.3 英寸 OLED 广视角大屏。',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
      badge: '咖啡厅场景'
    },
    {
      id: 'office',
      category: '办公室 • Modern Office',
      title: '办公室双屏协同',
      subtitle: '无缝扩展主显示器视野，竖屏看代码/写案头，横屏开视频会议，产出提速 52%。',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      badge: '办公室场景'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 420;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="possibilities-banner" className="bg-white text-zinc-900 py-16 px-4 sm:px-6 lg:px-12 border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* TOP NAVIGATION HEADER WITH CAROUSEL BUTTONS */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xs font-mono font-bold tracking-widest text-zinc-400 uppercase">
              Versatile Multi-Scene Productivity
            </h3>
            <h2 className="text-2xl sm:text-3xl font-black text-black tracking-tight">
              随时随地，解锁全场景高效工作
            </h2>
          </div>

          {/* Carousel Left / Right Arrows */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-zinc-300 hover:border-black bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center text-zinc-700 hover:text-black transition-all active:scale-95 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-zinc-300 hover:border-black bg-zinc-50 hover:bg-zinc-100 flex items-center justify-center text-zinc-700 hover:text-black transition-all active:scale-95 shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CAROUSEL HORIZONTAL CONTAINER */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto scrollbar-none py-4 px-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          
          {/* LEFT HERO BLUE CARD (COMPATIBILITY) */}
          <div className="flex-none w-[300px] sm:w-[340px] bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 rounded-3xl p-8 text-white flex flex-col justify-between shadow-xl snap-start relative overflow-hidden group">
            {/* Background Light Pattern Glow */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <span className="text-xs font-mono font-bold tracking-wider uppercase text-blue-100/90 bg-blue-700/50 px-3 py-1 rounded-full border border-blue-400/30">
                Powered by Display Drivers
              </span>

              <h3 className="text-3xl font-extrabold tracking-tight leading-tight">
                Built for Compatibility.
              </h3>

              <p className="text-sm text-blue-100 leading-relaxed font-normal">
                Works perfectly with macOS, Windows and more. 适配各类主流设备，实现一线双屏即插即用。
              </p>
            </div>

            {/* macOS & Windows Graphic Icons Box */}
            <div className="pt-8 relative z-10 flex items-center justify-center space-x-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              {/* macOS Finder Smile Graphic */}
              <div className="flex flex-col items-center space-y-1">
                <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center p-2">
                  <div className="w-full h-full rounded-lg bg-gradient-to-tr from-sky-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl font-mono">
                    
                  </div>
                </div>
                <span className="text-[11px] font-mono font-semibold text-white">macOS</span>
              </div>

              {/* Windows Logo Graphic */}
              <div className="flex flex-col items-center space-y-1">
                <div className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center p-2">
                  <div className="grid grid-cols-2 gap-1 w-8 h-8">
                    <div className="bg-sky-500 rounded-xs" />
                    <div className="bg-sky-500 rounded-xs" />
                    <div className="bg-sky-500 rounded-xs" />
                    <div className="bg-sky-500 rounded-xs" />
                  </div>
                </div>
                <span className="text-[11px] font-mono font-semibold text-white">Windows</span>
              </div>
            </div>
          </div>

          {/* SCENARIO CARDS: 酒店, 机场, 咖啡厅, 办公室 */}
          {scenarios.map((card) => (
            <div 
              key={card.id}
              className="flex-none w-[320px] sm:w-[360px] bg-zinc-50 border border-zinc-200/90 rounded-3xl p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 snap-start group"
            >
              {/* Card Header Text */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-semibold text-zinc-500 uppercase tracking-wide">
                    {card.category}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-black tracking-tight group-hover:text-blue-600 transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal line-clamp-2">
                  {card.subtitle}
                </p>
              </div>

              {/* Card Image Thumbnail Box */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
