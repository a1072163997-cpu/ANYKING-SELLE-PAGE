import React, { useState } from 'react';
import { Image, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/productData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#25282B] text-[#F6F4EF] relative border-b border-[#5E6265]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6DDCE]/15 border border-[#E6DDCE]/30 text-[#E6DDCE] text-xs font-mono uppercase tracking-wider mb-3">
            <Image className="w-3.5 h-3.5" />
            <span>High-Resolution Product Visuals</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F6F4EF] tracking-tight mb-4">
            Product Gallery
          </h2>
          <p className="text-[#C8CBCB] text-base sm:text-lg">
            Inspect the ANYKING 15.6" Dual Screen Extender from every angle, mechanism detail, and workspace setup.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex justify-center space-x-2 mb-10">
          {[
            { id: 'all', label: 'All Media' },
            { id: 'product', label: 'Product Renders' },
            { id: 'hinge', label: '180° Stand' },
            { id: 'modes', label: 'Setup Modes' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === tab.id
                  ? 'bg-[#E6DDCE] text-[#25282B] font-bold shadow-lg'
                  : 'bg-[#5E6265]/20 text-[#C8CBCB] hover:text-white border border-[#C8CBCB]/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-[#25282B] border border-[#C8CBCB]/30 cursor-pointer shadow-xl"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25282B] via-[#25282B]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                <div>
                  <h4 className="text-[#F6F4EF] font-bold text-sm sm:text-base">{item.title}</h4>
                  <p className="text-xs text-[#C8CBCB] line-clamp-1 mt-0.5">{item.caption}</p>
                </div>
                <div className="p-2 rounded-lg bg-[#E6DDCE] text-[#25282B] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-zinc-900/80 text-zinc-300 hover:text-white border border-zinc-700 z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={prevLightbox}
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 text-zinc-300 hover:text-white border border-zinc-700 z-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextLightbox}
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-zinc-900/80 text-zinc-300 hover:text-white border border-zinc-700 z-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-5xl w-full text-center space-y-4">
              <img
                src={filteredItems[lightboxIndex].imageUrl}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[75vh] mx-auto rounded-2xl object-contain border border-zinc-800 shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-xl font-bold text-white">{filteredItems[lightboxIndex].title}</h3>
                <p className="text-sm text-zinc-400 mt-1 max-w-xl mx-auto">{filteredItems[lightboxIndex].caption}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
