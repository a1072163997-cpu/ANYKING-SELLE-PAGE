import React, { useState } from 'react';
import { ShoppingBag, X, Check, ShieldCheck, Truck, Package, Star, Sparkles } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

interface BuyNowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BuyNowModal: React.FC<BuyNowModalProps> = ({ isOpen, onClose }) => {
  const [selectedBundle, setSelectedBundle] = useState<'standard' | 'creator' | 'power'>('standard');
  const [selectedRetailer, setSelectedRetailer] = useState<string>('ASUS Official Store');
  const [ordered, setOrdered] = useState(false);

  if (!isOpen) return null;

  const bundles = [
    {
      id: 'standard',
      name: 'Standard Package',
      price: PRODUCT_INFO.price,
      items: ['ANYKING 15.6" Dual Screen Extender', 'Carrying Bag', 'HDMI Cable', '2x USB-C Cables', 'USB-A Cable & Power Adapter']
    },
    {
      id: 'creator',
      name: 'Pro Extension Bundle',
      price: PRODUCT_INFO.price + 49.00,
      items: ['Everything in Standard Package', 'Mac H5 Dual Display Adapter', 'Desktop Cable Organizer Clip Set']
    },
    {
      id: 'power',
      name: 'Executive Travel Bundle',
      price: PRODUCT_INFO.price + 89.00,
      items: ['Everything in Standard Package', 'ANYKING 65W High-Speed GaN Travel Charger', 'Hard-Shell Travel Protective Case']
    }
  ];

  const currentBundle = bundles.find(b => b.id === selectedBundle) || bundles[0];

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#25282B] border border-[#C8CBCB]/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-[#F6F4EF]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#5E6265]/30 text-[#C8CBCB] hover:text-[#F6F4EF]"
        >
          <X className="w-5 h-5" />
        </button>

        {ordered ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#E6DDCE]/20 text-[#E6DDCE] border border-[#E6DDCE]/40 flex items-center justify-center mx-auto animate-bounce">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#F6F4EF]">Order Placed Successfully!</h3>
            <p className="text-[#C8CBCB] text-sm max-w-md mx-auto">
              Thank you for ordering the <strong className="text-[#E6DDCE]">ANYKING 15.6" Dual Screen Extender ({currentBundle.name})</strong> via {selectedRetailer}. Confirmation details have been prepared.
            </p>
          </div>
        ) : (
          <div>
            
            {/* Modal Title */}
            <div className="mb-6">
              <div className="flex items-center space-x-2 text-[#E6DDCE] text-xs font-mono mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ANYKING Official Store & Authorized Retailers</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#F6F4EF]">Buy ANYKING 15.6" Dual Screen Extender</h3>
              <p className="text-xs text-[#C8CBCB] mt-1">In Stock | Free Shipping & Official Warranty</p>
            </div>

            {/* Bundle Options Selector */}
            <div className="space-y-3 mb-6">
              <label className="text-xs font-mono uppercase text-[#C8CBCB] font-bold block">1. Choose Package Bundle:</label>
              
              <div className="space-y-2">
                {bundles.map((b) => (
                  <div
                    key={b.id}
                    onClick={() => setSelectedBundle(b.id as any)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      selectedBundle === b.id
                        ? 'bg-[#5E6265]/40 border-[#E6DDCE] text-[#F6F4EF] shadow-lg'
                        : 'bg-[#5E6265]/20 border-[#C8CBCB]/30 text-[#C8CBCB] hover:border-[#C8CBCB]'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-[#F6F4EF]">{b.name}</span>
                      <span className="font-mono text-[#E6DDCE] font-extrabold text-sm">${b.price.toFixed(2)}</span>
                    </div>
                    <ul className="text-xs text-[#C8CBCB] space-y-0.5">
                      {b.items.map((item, idx) => (
                        <li key={idx}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Retailer Selector */}
            <div className="mb-6">
              <label className="text-xs font-mono uppercase text-[#C8CBCB] font-bold block mb-2">2. Select Authorized Retailer:</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['ANYKING Store', 'Amazon', 'Newegg', 'B&H Photo Video'].map((retailer) => (
                  <button
                    key={retailer}
                    type="button"
                    onClick={() => setSelectedRetailer(retailer)}
                    className={`p-2.5 rounded-lg border text-xs font-medium text-center transition-all ${
                      selectedRetailer === retailer
                        ? 'bg-[#E6DDCE] text-[#25282B] border-[#E6DDCE] font-bold'
                        : 'bg-[#5E6265]/20 text-[#C8CBCB] border-[#C8CBCB]/30 hover:text-white'
                    }`}
                  >
                    {retailer}
                  </button>
                ))}
              </div>
            </div>

            {/* Total Price & Checkout Button */}
            <div className="p-4 rounded-xl bg-[#5E6265]/20 border border-[#C8CBCB]/30 flex items-center justify-between mb-6">
              <div>
                <span className="text-xs text-[#C8CBCB] block">Total Price:</span>
                <span className="text-2xl font-extrabold text-[#F6F4EF] font-mono">${currentBundle.price.toFixed(2)}</span>
              </div>
              <div className="text-right text-xs text-[#E6DDCE] font-mono">
                <div>✓ In Stock</div>
                <div>✓ Free Shipping</div>
              </div>
            </div>

            <form onSubmit={handleCheckout}>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#E6DDCE] text-[#25282B] font-extrabold text-sm hover:bg-[#F6F4EF] transition-all flex items-center justify-center space-x-2 shadow-xl"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Complete Order via {selectedRetailer}</span>
              </button>
            </form>

          </div>
        )}

      </div>
    </div>
  );
};
