import React, { useState } from 'react';
import { Search, Download, Check, X, FileText, Sliders, ChevronDown, ChevronUp } from 'lucide-react';
import { SPECIFICATIONS, PRODUCT_INFO } from '../data/productData';

export const SpecificationsTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    "Display Panel": true,
    "Mechanical & Design Features": true,
    "I/O Ports & Connectivity": true,
    "Power Consumption & Frequency": true,
    "Package Accessories": true,
  });

  const toggleCategory = (title: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const filteredSpecs = SPECIFICATIONS.map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  const handleDownloadSpec = () => {
    const textContent = `ANYKING 15.6 Dual Laptop Screen Extender Technical Specifications Sheet\n` +
      `==============================================================\n` +
      SPECIFICATIONS.map(cat => 
        `\n[ ${cat.title} ]\n` +
        cat.items.map(i => `${i.label}: ${i.value}`).join('\n')
      ).join('\n');

    const element = document.createElement("a");
    const file = new Blob([textContent], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "ANYKING_15.6_Dual_Laptop_Screen_Extender_Specs.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="specs" className="py-20 bg-[#25282B] text-[#F6F4EF] relative border-b border-[#5E6265]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E6DDCE]/15 border border-[#E6DDCE]/30 text-[#E6DDCE] text-xs font-mono uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Technical Specifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F6F4EF] tracking-tight mb-4">
            Hardware Specifications
          </h2>
          <p className="text-[#C8CBCB] text-base sm:text-lg">
            Complete technical hardware parameters, screen display specs, connectivity, and package contents.
          </p>
        </div>

        {/* Search & Actions Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
          
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#C8CBCB] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter specifications (e.g. 1080P, USB-C, Weight)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#5E6265]/20 border border-[#C8CBCB]/30 text-xs text-[#F6F4EF] placeholder-[#C8CBCB]/60 focus:outline-none focus:border-[#E6DDCE]"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#C8CBCB] hover:text-[#F6F4EF]">
                ✕
              </button>
            )}
          </div>

          {/* Compare & Download buttons */}
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={() => setShowCompareModal(true)}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#5E6265]/20 border border-[#C8CBCB]/30 text-[#C8CBCB] hover:text-[#F6F4EF] hover:bg-[#5E6265]/40 text-xs font-semibold transition-all flex items-center justify-center space-x-2"
            >
              <Sliders className="w-3.5 h-3.5 text-[#E6DDCE]" />
              <span>Compare vs Single Portable Monitor</span>
            </button>

            <button
              onClick={handleDownloadSpec}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-[#E6DDCE] text-[#25282B] border border-[#E6DDCE] hover:bg-[#F6F4EF] text-xs font-bold transition-all flex items-center justify-center space-x-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Spec Sheet</span>
            </button>
          </div>
        </div>

        {/* Specifications Grouped Accordions */}
        <div className="space-y-6">
          {filteredSpecs.map((category) => {
            const isExpanded = expandedCategories[category.title] ?? true;

            return (
              <div key={category.title} className="rounded-2xl bg-[#5E6265]/20 border border-[#C8CBCB]/30 overflow-hidden shadow-xl">
                
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(category.title)}
                  className="w-full p-5 bg-[#25282B]/80 border-b border-[#C8CBCB]/20 flex justify-between items-center text-left hover:bg-[#5E6265]/30 transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-bold text-[#F6F4EF] font-mono flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#E6DDCE]" />
                    <span>{category.title}</span>
                  </h3>
                  <div className="text-[#C8CBCB] p-1">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Category Items List */}
                {isExpanded && (
                  <div className="divide-y divide-[#C8CBCB]/20">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="p-4 sm:px-6 grid grid-cols-1 sm:grid-cols-12 gap-2 text-xs hover:bg-[#5E6265]/30 transition-colors">
                        <div className="sm:col-span-4 font-semibold text-[#E6DDCE] font-mono">
                          {item.label}
                        </div>
                        <div className="sm:col-span-8 text-[#F6F4EF]">
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            );
          })}
        </div>

        {/* Comparison Modal against Single Portable Monitor */}
        {showCompareModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#25282B] border border-[#C8CBCB]/40 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative">
              
              <div className="flex justify-between items-center mb-6 border-b border-[#5E6265]/40 pb-4">
                <div>
                  <h3 className="text-lg font-extrabold text-[#F6F4EF]">Side-by-Side Comparison</h3>
                  <p className="text-xs text-[#C8CBCB]">ANYKING 15.6" Dual Screen Extender vs Single Portable Monitor</p>
                </div>
                <button onClick={() => setShowCompareModal(false)} className="p-2 text-[#C8CBCB] hover:text-white rounded-lg bg-[#5E6265]/30">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                {[
                  { feature: 'Display Setup', dual: 'Dual 15.6" IPS Screens (Triple Workstation)', standard: 'Single 15.6" Screen' },
                  { feature: 'Resolution & Color', dual: 'Dual 1080P FHD (1920x1080), 100% sRGB', standard: '1080P FHD, 45% NTSC color' },
                  { feature: 'Brightness & Refresh', dual: '300 Nits, 60Hz, 1000:1 Contrast', standard: '220 Nits, 60Hz, 600:1 Contrast' },
                  { feature: 'Rotation & Stand', dual: 'Built-in Stable Stand with 180° Rotation', standard: 'Magnetic protective fold case' },
                  { feature: 'Connectivity', dual: 'Dual Full-Function USB-C + HDMI', standard: 'Single USB-C port' },
                  { feature: 'Body Material', dual: 'Premium Aluminum Alloy Chassis (3.19 lbs)', standard: 'Plastic chassis (~2.2 lbs)' },
                  { feature: 'Accessories Included', dual: 'Carrying Bag, Power Adapter, USB-C & HDMI Cables', standard: 'Single USB-C Cable only' },
                ].map((row, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#5E6265]/20 border border-[#C8CBCB]/30 grid grid-cols-12 gap-2 items-center">
                    <div className="col-span-4 font-bold text-[#F6F4EF]">{row.feature}</div>
                    <div className="col-span-4 text-[#25282B] font-semibold bg-[#E6DDCE] p-2 rounded">{row.dual}</div>
                    <div className="col-span-4 text-[#C8CBCB] p-2">{row.standard}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowCompareModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#E6DDCE] text-[#25282B] font-bold text-xs hover:bg-[#F6F4EF] transition-colors"
                >
                  Close Comparison
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
