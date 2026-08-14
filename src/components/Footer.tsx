import React, { useState } from 'react';
import { Monitor, ChevronDown, ChevronUp, ShieldCheck, Globe, HelpCircle } from 'lucide-react';
import { FAQS, PRODUCT_INFO } from '../data/productData';

export const Footer: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <footer className="bg-[#25282B] text-[#C8CBCB] text-xs border-t border-[#5E6265]/40">
      
      {/* FAQ Section */}
      <div className="py-16 border-b border-[#5E6265]/40 bg-[#25282B]/95">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6DDCE]/10 border border-[#E6DDCE]/30 text-[#E6DDCE] text-xs font-mono uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F6F4EF]">Got Questions About ANYKING 15.6" Dual Screen Extender?</h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="rounded-xl bg-[#5E6265]/20 border border-[#C8CBCB]/30 overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 text-left font-semibold text-[#F6F4EF] flex justify-between items-center hover:bg-[#5E6265]/30 transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#E6DDCE]" /> : <ChevronDown className="w-4 h-4 text-[#C8CBCB]" />}
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-[#C8CBCB] text-xs leading-relaxed border-t border-[#C8CBCB]/20 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        
        <div className="col-span-2 space-y-3">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-black text-[#F6F4EF] tracking-wider">ANYKING</span>
            <span className="text-[#5E6265]">|</span>
            <span className="text-[#E6DDCE] font-bold text-sm">15.6" Dual Screen Extender</span>
          </div>
          <p className="text-[#C8CBCB] max-w-sm text-[11px] leading-relaxed">
            Product showcase application created to demonstrate the ANYKING 15.6" Dual Screen Laptop Extender with 1080P FHD IPS dual displays, plug-and-play USB-C/HDMI connectivity, 180° rotation stand, and built-in speakers.
          </p>
          <div className="flex items-center space-x-2 text-[11px] text-[#E6DDCE] font-mono pt-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Official ANYKING Warranty & Global Customer Support</span>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[#F6F4EF] uppercase text-[11px] font-mono mb-3">Product Line</h4>
          <ul className="space-y-2 text-[#C8CBCB]">
            <li className="hover:text-[#F6F4EF] cursor-pointer">15.6" Dual Screen Extender</li>
            <li className="hover:text-[#F6F4EF] cursor-pointer">14" Portable Monitors</li>
            <li className="hover:text-[#F6F4EF] cursor-pointer">180° Swivel Workstation Series</li>
            <li className="hover:text-[#F6F4EF] cursor-pointer">USB-C Extender Accessories</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#F6F4EF] uppercase text-[11px] font-mono mb-3">Software & Tools</h4>
          <ul className="space-y-2 text-[#C8CBCB]">
            <li className="hover:text-[#F6F4EF] cursor-pointer">Mac H5 Driver Utility</li>
            <li className="hover:text-[#F6F4EF] cursor-pointer">Display Alignment Tool</li>
            <li className="hover:text-[#F6F4EF] cursor-pointer">Windows Multi-Screen Setup</li>
            <li className="hover:text-[#F6F4EF] cursor-pointer">User Manuals & FAQ</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-[#F6F4EF] uppercase text-[11px] font-mono mb-3">Customer Support</h4>
          <ul className="space-y-2 text-[#C8CBCB]">
            <li className="hover:text-[#F6F4EF] cursor-pointer">Product Registration</li>
            <li className="hover:text-[#F6F4EF] cursor-pointer">Warranty & Service</li>
            <li className="hover:text-[#F6F4EF] cursor-pointer">In-Box Accessories Guide</li>
            <li className="hover:text-[#F6F4EF] cursor-pointer">Support Help Center</li>
          </ul>
        </div>

      </div>

      {/* Bottom Legal Disclaimer */}
      <div className="border-t border-[#5E6265]/40 py-6 text-center text-[10px] text-[#C8CBCB]">
        <p>© 2026 ANYKING Technologies Co., Ltd. All rights reserved.</p>
        <p className="mt-1">USB Type-C® and HDMI® are registered trademarks. macOS® and Windows® are trademarks of their respective owners.</p>
      </div>

    </footer>
  );
};
