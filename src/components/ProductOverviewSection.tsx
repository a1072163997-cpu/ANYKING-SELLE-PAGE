import React, { useState } from 'react';
import { Star, ChevronUp, ChevronDown, Plus, Minus, Eye, Zap, FileText } from 'lucide-react';
import tripleHero from '../assets/images/anyking_triple_hero_1786532666152.jpg';
import kickstandRear from '../assets/images/anyking_kickstand_rear_1786532679720.jpg';
import bagAccessories from '../assets/images/anyking_bag_accessories_1786532694437.jpg';
import zenscreenFlat from '../assets/images/zenscreen_fold_flat_1786525011040.jpg';
import zenscreenPortrait from '../assets/images/zenscreen_fold_portrait_1786525040754.jpg';

interface ProductOverviewSectionProps {
  onOpenBuyModal?: () => void;
}

export const ProductOverviewSection: React.FC<ProductOverviewSectionProps> = ({ onOpenBuyModal }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedModel, setSelectedModel] = useState('15.6" (Full HD)');
  const [selectedColor, setSelectedColor] = useState('Midnight Black');
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>('display');

  const galleryImages = [
    { src: tripleHero, alt: 'ANYKING Dual Screen Extender Triple View' },
    { src: kickstandRear, alt: 'ANYKING Rear Kickstand Stand Setup' },
    { src: bagAccessories, alt: 'ANYKING Carrying Bag and Cable Kit' },
    { src: zenscreenFlat, alt: 'ANYKING Unfolded Dual IPS Display' },
    { src: zenscreenPortrait, alt: 'ANYKING Portrait Mode Setup' },
  ];

  const models = [
    { id: '14-plus', name: '14" Plus (2.2K)', available: true },
    { id: '15-fhd', name: '15.6" (Full HD)', available: true },
    { id: '15-qhd', name: '15.6" Ultra (QHD 2.5K)', available: false },
    { id: '18-fhd', name: '18.5" (Full HD)', available: true },
  ];

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="overview-summary" className="bg-[#F6F4EF] text-[#25282B] pt-28 sm:pt-32 pb-16 border-b border-[#C8CBCB]/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          
          {/* ================= LEFT COLUMN: PRODUCT GALLERY & CANVAS ================= */}
          <div 
            className="lg:col-span-7 lg:sticky lg:top-28 lg:self-start flex flex-col sm:flex-row gap-4 items-start transition-all duration-300 z-10"
          >
            
            {/* 1. Vertical Thumbnail Selector List */}
            <div className="flex sm:flex-col items-center justify-between sm:justify-start space-x-2 sm:space-x-0 sm:space-y-3 w-full sm:w-20 order-2 sm:order-1 flex-shrink-0">
              <button 
                onClick={handlePrevImage}
                className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-[#25282B]/10 hover:bg-[#25282B]/20 text-[#25282B] transition-colors"
                aria-label="Previous Thumbnail"
              >
                <ChevronUp className="w-4 h-4" />
              </button>

              <div className="flex sm:flex-col space-x-2.5 sm:space-x-0 sm:space-y-3 overflow-x-auto sm:overflow-y-auto max-h-[520px] py-1 w-full sm:w-auto scrollbar-none">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-16 h-16 sm:w-18 sm:h-18 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-[#E8E4DA] p-1 ${
                      activeImageIndex === idx 
                        ? 'border-[#25282B] shadow-md scale-105 ring-2 ring-[#E6DDCE]' 
                        : 'border-[#C8CBCB]/60 opacity-70 hover:opacity-100 hover:border-[#5E6265]'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>

              <button 
                onClick={handleNextImage}
                className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-[#25282B]/10 hover:bg-[#25282B]/20 text-[#25282B] transition-colors"
                aria-label="Next Thumbnail"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* 2. Main Stage Stage Box Container with Wheel Scroll Support */}
            <div 
              onWheel={(e) => {
                if (e.deltaY > 0) {
                  setActiveImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
                } else if (e.deltaY < 0) {
                  setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
                }
              }}
              className="relative w-full aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/3] rounded-3xl bg-[#E8E4DA] border border-[#C8CBCB]/80 p-6 flex items-center justify-center overflow-hidden shadow-lg order-1 sm:order-2 group cursor-ns-resize select-none"
              title="Scroll wheel to switch image views"
            >
              
              {/* Back to School Sales Badge */}
              <div className="absolute top-4 left-4 z-10 bg-[#25282B] text-[#F6F4EF] text-[11px] sm:text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-[#E6DDCE] animate-pulse" />
                <span>Back to School Sales until September 02, 2026</span>
              </div>

              {/* Scroll Hint Badge */}
              <div className="absolute top-4 right-4 z-10 bg-[#25282B]/80 backdrop-blur-md text-[#E6DDCE] text-[10px] font-mono px-2.5 py-1 rounded-full shadow-sm flex items-center space-x-1 border border-[#E6DDCE]/30">
                <span>🖱️ Scroll Wheel View ({activeImageIndex + 1}/{galleryImages.length})</span>
              </div>

              {/* Main Product Image with subtle scale animation */}
              <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-6">
                <img
                  key={activeImageIndex}
                  src={galleryImages[activeImageIndex].src}
                  alt={galleryImages[activeImageIndex].alt}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl transition-all duration-300 ease-out group-hover:scale-105 animate-in fade-in zoom-in-95 duration-200"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Gallery Progress Dots Bar */}
              <div className="absolute bottom-4 left-6 flex items-center space-x-1.5 z-10">
                {galleryImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeImageIndex === idx ? 'w-6 bg-[#25282B]' : 'w-2 bg-[#25282B]/30 hover:bg-[#25282B]/60'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Watermark Brand Label */}
              <div className="absolute bottom-4 right-6 text-[10px] font-mono uppercase tracking-widest text-[#5E6265]/60 pointer-events-none select-none">
                ANYKING ✦ 15.6" DUAL EXTENDER
              </div>

            </div>

          </div>

          {/* ================= RIGHT COLUMN: PRODUCT CONFIGURATOR & DETAILS ================= */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* 1. Stock Tag & Rating Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              {/* Stock Status Pill */}
              <div className="inline-flex items-center space-x-2 bg-[#88C057]/15 border border-[#88C057]/40 text-[#2E6B18] px-3 py-1 rounded-full text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#52B42C] animate-pulse" />
                <span>In stock, ready to ship</span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center space-x-1 text-xs">
                <div className="flex text-[#D97706]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D97706]" />
                  ))}
                </div>
                <span className="font-bold text-[#25282B] pl-1">4.9</span>
                <span className="text-[#5E6265]">| 350 trusted reviews</span>
              </div>
            </div>

            {/* 2. Main Title & Best Seller Badge */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#25282B]">
                  ANYKING Dual Screen Extender Pro (Gen 2)
                </h1>
              </div>
              <div className="inline-block bg-[#25282B] text-[#F6F4EF] text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                Best Seller
              </div>
            </div>

            {/* 3. Pricing & Installment Options */}
            <div className="space-y-1.5 pt-1">
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-black text-[#25282B] font-mono tracking-tight">
                  $349.00
                </span>
                <span className="text-sm text-[#5E6265] line-through font-mono">
                  $499.00
                </span>
                <span className="text-xs font-bold text-[#991B1B] bg-[#FEE2E2] px-2 py-0.5 rounded">
                  SAVE $150
                </span>
              </div>
              <p className="text-xs text-[#5E6265] leading-relaxed">
                4 interest-free installments, or from <strong>$49.55/mo</strong> with <span className="font-bold text-[#5A31F4]">shopPay</span>{' '}
                <a href="#plans" className="underline hover:text-[#25282B]">View sample plans</a>
              </p>
            </div>

            <hr className="border-[#C8CBCB]/60" />

            {/* 4. Model Size Selector */}
            <div className="space-y-2.5">
              <div className="text-xs font-bold text-[#25282B]">
                Model: <span className="font-normal text-[#5E6265]">{selectedModel}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {models.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => m.available && setSelectedModel(m.name)}
                    disabled={!m.available}
                    className={`relative px-3 py-2.5 rounded-xl text-xs font-semibold transition-all border text-center ${
                      selectedModel === m.name
                        ? 'bg-[#25282B] text-[#F6F4EF] border-[#25282B] shadow-md ring-2 ring-[#E6DDCE]'
                        : !m.available
                          ? 'bg-transparent text-[#9CA3AF] border-red-300/80 line-through cursor-not-allowed opacity-60'
                          : 'bg-white text-[#25282B] border-[#C8CBCB] hover:border-[#25282B]'
                    }`}
                  >
                    {m.name}
                    {!m.available && (
                      <span className="absolute -top-1 -right-1 bg-red-100 text-red-600 text-[8px] font-bold px-1 rounded border border-red-300">
                        Sold Out
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Color Swatch Selector */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-[#25282B]">
                Color: <span className="font-normal text-[#5E6265]">{selectedColor}</span>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setSelectedColor('Midnight Black')}
                  className={`w-7 h-7 rounded-full bg-[#25282B] border-2 transition-transform ${
                    selectedColor === 'Midnight Black'
                      ? 'ring-2 ring-offset-2 ring-[#25282B] scale-110'
                      : 'border-transparent hover:scale-105'
                  }`}
                  aria-label="Midnight Black"
                />
                <button
                  onClick={() => setSelectedColor('Starlight Gold')}
                  className={`w-7 h-7 rounded-full bg-[#E6DDCE] border-2 border-[#C8CBCB] transition-transform ${
                    selectedColor === 'Starlight Gold'
                      ? 'ring-2 ring-offset-2 ring-[#25282B] scale-110'
                      : 'border-transparent hover:scale-105'
                  }`}
                  aria-label="Starlight Gold"
                />
              </div>
            </div>

            {/* 6. Quantity Counter & Add to Cart Action */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-[#C8CBCB] rounded-xl bg-white px-2 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 hover:text-[#25282B] text-[#5E6265]"
                    aria-label="Decrease Quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-3 text-xs font-bold font-mono min-w-[24px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:text-[#25282B] text-[#5E6265]"
                    aria-label="Increase Quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={onOpenBuyModal}
                  className="flex-1 bg-[#25282B] hover:bg-[#1D2022] text-[#F6F4EF] py-3.5 px-6 rounded-2xl font-extrabold text-sm tracking-wide shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-[0.98] border border-[#25282B]"
                >
                  Add to cart - ${(349 * quantity).toFixed(2)}
                </button>
              </div>

              {/* Buy It Now Button */}
              <button
                onClick={onOpenBuyModal}
                className="w-full bg-white hover:bg-[#25282B]/5 text-[#25282B] border-2 border-[#25282B] py-3.5 px-6 rounded-2xl font-extrabold text-sm tracking-wide transition-all duration-200 active:scale-[0.98]"
              >
                Buy it now
              </button>
            </div>

            {/* 7. Payment Logos Row */}
            <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 opacity-80">
              <span className="text-[10px] font-mono text-[#5E6265] uppercase mr-1">Guaranteed Safe Checkout:</span>
              <div className="flex flex-wrap gap-1.5 text-[9px] font-mono font-bold text-[#25282B]">
                <span className="bg-white border border-[#C8CBCB] px-2 py-1 rounded">Amazon</span>
                <span className="bg-white border border-[#C8CBCB] px-2 py-1 rounded">AMEX</span>
                <span className="bg-white border border-[#C8CBCB] px-2 py-1 rounded">Apple Pay</span>
                <span className="bg-white border border-[#C8CBCB] px-2 py-1 rounded">Mastercard</span>
                <span className="bg-white border border-[#C8CBCB] px-2 py-1 rounded">PayPal</span>
                <span className="bg-white border border-[#C8CBCB] px-2 py-1 rounded">Shop Pay</span>
                <span className="bg-white border border-[#C8CBCB] px-2 py-1 rounded">VISA</span>
              </div>
            </div>

            {/* 8. Short Product Description */}
            <p className="text-xs sm:text-sm text-[#5E6265] leading-relaxed pt-2">
              Introducing the <strong>ANYKING 15.6" Dual Extender</strong>, the definitive cockpit-style productivity booster for elite professionals and travelers. Crafted entirely from premium aluminum alloy, it features dual anti-glare monitors precisely aligned to create an unrivaled, immersive horizon above your laptop, eliminating window clutter.
            </p>

            {/* 9. Collapsible Feature Accordions */}
            <div className="space-y-2 pt-2 border-t border-[#C8CBCB]/60">
              
              {/* Accordion 1: Display */}
              <div className="border border-[#C8CBCB]/60 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleAccordion('display')}
                  className="w-full px-4 py-3 text-left font-bold text-xs sm:text-sm flex items-center justify-between text-[#25282B] hover:bg-[#F6F4EF]"
                >
                  <span className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-[#25282B]" />
                    <span>Display</span>
                  </span>
                  <Plus className={`w-4 h-4 text-[#5E6265] transition-transform ${openAccordion === 'display' ? 'rotate-45' : ''}`} />
                </button>
                {openAccordion === 'display' && (
                  <div className="px-4 pb-3 pt-1 text-xs text-[#5E6265] space-y-1.5 bg-[#F6F4EF]/50 border-t border-[#C8CBCB]/40">
                    <p>• <strong>Screen Size:</strong> Dual 15.6" IPS Panel (16:9 Aspect Ratio)</p>
                    <p>• <strong>Resolution:</strong> 1920 x 1080P Full HD per screen</p>
                    <p>• <strong>Brightness & Gamut:</strong> 300 Nits, 100% sRGB Color Gamut</p>
                    <p>• <strong>Contrast Ratio:</strong> 1000 : 1 Static Contrast</p>
                  </div>
                )}
              </div>

              {/* Accordion 2: Connectivity & Compatibility */}
              <div className="border border-[#C8CBCB]/60 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleAccordion('connectivity')}
                  className="w-full px-4 py-3 text-left font-bold text-xs sm:text-sm flex items-center justify-between text-[#25282B] hover:bg-[#F6F4EF]"
                >
                  <span className="flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-[#25282B]" />
                    <span>Connectivity & Compatibility</span>
                  </span>
                  <Plus className={`w-4 h-4 text-[#5E6265] transition-transform ${openAccordion === 'connectivity' ? 'rotate-45' : ''}`} />
                </button>
                {openAccordion === 'connectivity' && (
                  <div className="px-4 pb-3 pt-1 text-xs text-[#5E6265] space-y-1.5 bg-[#F6F4EF]/50 border-t border-[#C8CBCB]/40">
                    <p>• <strong>Ports:</strong> 2x Full-Featured USB-C, 1x Mini HDMI, 3.5mm Headphone Jack</p>
                    <p>• <strong>System Support:</strong> Windows 10/11, macOS, ChromeOS, Android, Nintendo Switch</p>
                    <p>• <strong>MacBook Note:</strong> Base M1/M2/M3 chips require H5 Display Driver; Pro/Max chips support natively.</p>
                  </div>
                )}
              </div>

              {/* Accordion 3: Product Guide and Download */}
              <div className="border border-[#C8CBCB]/60 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => toggleAccordion('guide')}
                  className="w-full px-4 py-3 text-left font-bold text-xs sm:text-sm flex items-center justify-between text-[#25282B] hover:bg-[#F6F4EF]"
                >
                  <span className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-[#25282B]" />
                    <span>Product Guide and Download</span>
                  </span>
                  <Plus className={`w-4 h-4 text-[#5E6265] transition-transform ${openAccordion === 'guide' ? 'rotate-45' : ''}`} />
                </button>
                {openAccordion === 'guide' && (
                  <div className="px-4 pb-3 pt-1 text-xs text-[#5E6265] space-y-1.5 bg-[#F6F4EF]/50 border-t border-[#C8CBCB]/40">
                    <p>• User Manual (PDF Download Available)</p>
                    <p>• Quick Start Installation Guide & H5 macOS Driver</p>
                    <p>• 3-Year Extended Manufacturer Warranty Registration</p>
                  </div>
                )}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
