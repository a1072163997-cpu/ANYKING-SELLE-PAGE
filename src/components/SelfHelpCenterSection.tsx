import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Shield, Truck, RefreshCw, FileText, Wrench } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

export const SelfHelpCenterSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const leftFaqs: FaqItem[] = [
    {
      id: 'warranty',
      question: 'What is your warranty policy?',
      answer: 'ANYKING Fold OLED comes with a 3-Year Premium Global Warranty covering display panel defects, hinge mechanism, and hardware components.',
      icon: <Shield className="w-4 h-4 text-[#25282B]" />
    },
    {
      id: 'shipping',
      question: 'Which countries do you ship to?',
      answer: 'We offer express global shipping to over 120+ countries worldwide with duty-paid DDP delivery options at checkout.',
      icon: <Truck className="w-4 h-4 text-[#25282B]" />
    },
    {
      id: 'tracking',
      question: 'How to track my order and package?',
      answer: 'Once dispatched, you will receive an automated email and SMS notification containing your tracking code and live delivery status.',
      icon: <FileText className="w-4 h-4 text-[#25282B]" />
    }
  ];

  const rightFaqs: FaqItem[] = [
    {
      id: 'return',
      question: 'How does the 14-day return policy work?',
      answer: 'We offer a hassle-free 14-day return policy. If you are not completely satisfied, return the product in its original packaging for a full refund.',
      icon: <RefreshCw className="w-4 h-4 text-[#25282B]" />
    },
    {
      id: 'models',
      question: 'What are the differences between different models?',
      answer: 'The MQ17QH features a 17.3-inch QHD+ Foldable OLED panel with Waterdrop Hinge, dual Type-C ports, and Mini HDMI, unlike standard portable LCD monitors.',
      icon: <HelpCircle className="w-4 h-4 text-[#25282B]" />
    },
    {
      id: 'setup',
      question: 'How to set up dual-screen on Mac / Windows?',
      answer: 'Simply connect a single USB-C cable to your laptop for display signal and power. On Windows, install DisplayWidget Center for auto-rotation.',
      icon: <Wrench className="w-4 h-4 text-[#25282B]" />
    }
  ];

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="support" className="bg-[#F6F4EF] text-[#25282B] py-20 px-4 sm:px-6 lg:px-12 border-b border-[#C8CBCB]/60">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#25282B] tracking-tight font-sans">
            Self-Help Center
          </h2>
          <p className="text-[#5E6265] text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
            Easily manage everything related to your order — update or cancel it, change shipping details, track your package, start a return, download your invoice, or access drivers and manuals — all in one place.
          </p>
        </div>

        {/* TWO LARGE IMAGE BANNER CARDS SIDE BY SIDE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT BANNER: Support Team */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-[#25282B] shadow-xl group border border-[#C8CBCB]/40">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
              alt="ANYKING Support Team"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 contrast-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#25282B]/90 via-[#25282B]/50 to-transparent" />

            {/* Overlay Content */}
            <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center space-y-4 z-10 text-[#F6F4EF]">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight drop-shadow-md">
                Support Team
              </h3>
              <p className="text-sm sm:text-base text-[#C8CBCB] font-medium">
                We are here for you.
              </p>

              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="#self-support"
                  className="starlight-gradient-btn text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full shadow-lg transition-all active:scale-95"
                >
                  Self Support
                </a>
                <a
                  href="#contact-us"
                  className="starlight-gradient-btn text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full shadow-lg transition-all active:scale-95"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT BANNER: Need Help */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-[#25282B] shadow-xl group border border-[#C8CBCB]/40">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Need Help with Your Product"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 contrast-105"
              referrerPolicy="no-referrer"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#25282B]/90 via-[#25282B]/50 to-transparent" />

            {/* Overlay Content */}
            <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center space-y-4 z-10 text-[#F6F4EF]">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight drop-shadow-md">
                Need Help
              </h3>
              <p className="text-sm sm:text-base text-[#C8CBCB] font-medium">
                With Your Product?
              </p>

              <div className="flex items-center space-x-3 pt-2">
                <a
                  href="#helpdesk"
                  className="starlight-gradient-btn text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full shadow-lg transition-all active:scale-95"
                >
                  Helpdesk
                </a>
                <a
                  href="#tech-specs"
                  className="starlight-gradient-btn text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full shadow-lg transition-all active:scale-95"
                >
                  Tech Specs
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* FAQ ACCORDION SECTION (2 COLUMNS) */}
        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          
          {/* COLUMN 1 */}
          <div className="space-y-4">
            {leftFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="border-b border-[#C8CBCB]/50 pb-3">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left py-2 font-bold text-sm sm:text-base text-[#25282B] hover:text-[#5E6265] transition-colors"
                  >
                    <div className="flex items-center space-x-3 pr-2">
                      {faq.icon}
                      <span>{faq.question}</span>
                    </div>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#25282B] flex-shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#5E6265] flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <p className="pt-1 pb-2 pl-7 text-xs sm:text-sm text-[#5E6265] leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-4">
            {rightFaqs.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div key={faq.id} className="border-b border-[#C8CBCB]/50 pb-3">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between text-left py-2 font-bold text-sm sm:text-base text-[#25282B] hover:text-[#5E6265] transition-colors"
                  >
                    <div className="flex items-center space-x-3 pr-2">
                      {faq.icon}
                      <span>{faq.question}</span>
                    </div>
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#25282B] flex-shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#5E6265] flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <p className="pt-1 pb-2 pl-7 text-xs sm:text-sm text-[#5E6265] leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
