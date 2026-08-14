import React, { useState, useEffect } from 'react';
import { ShoppingBag, ChevronRight, Menu, X, Globe, ChevronDown, Sparkles, Search, User, Facebook, Instagram, Youtube } from 'lucide-react';
import { PRODUCT_INFO } from '../data/productData';

interface HeaderNavProps {
  onOpenBuyModal: () => void;
  activeSection: string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ onOpenBuyModal, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartCount] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { 
      id: 'monitors', 
      label: 'Monitors', 
      hasDropdown: true,
      targetId: 'overview-summary',
      subItems: ['15.6" Dual Extender', 'Triple Screen Setup', 'IPS 1080P FHD']
    },
    { 
      id: 'new', 
      label: 'New', 
      hasDropdown: true,
      targetId: 'bento-highlights',
      subItems: ['Gen 2 Dual Extender', 'Foldable 180° Hinge', 'H5 Mac Adapter']
    },
    { 
      id: 'others', 
      label: 'Others', 
      hasDropdown: true,
      targetId: 'extensive-connectivity',
      subItems: ['Carrying Bag & Cables', 'Desk Stands', 'Power Adapters']
    },
    { 
      id: 'compare', 
      label: 'Compare', 
      hasDropdown: false,
      targetId: 'oled-comparison'
    },
    { 
      id: 'amazon', 
      label: 'Amazon', 
      hasDropdown: false,
      onClick: onOpenBuyModal
    },
    { 
      id: 'reviews', 
      label: 'Reviews', 
      hasDropdown: true,
      targetId: 'possibilities-banner',
      subItems: ['4.9/5 Customer Rating', 'Verified Buyers', 'User Photo Gallery']
    },
    { 
      id: 'explore', 
      label: 'Explore', 
      hasDropdown: true,
      targetId: 'seamless-capability',
      subItems: ['Multi-Tasking Mode', 'Presentation Mode', 'Travel Setup']
    },
    { 
      id: 'support', 
      label: 'Support', 
      hasDropdown: true,
      targetId: 'self-help',
      subItems: ['Mac H5 Driver Setup', 'User Manual (PDF)', '3-Year Warranty']
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 font-sans transition-all duration-300">
      
      {/* 1. TOP UTILITY ANNOUNCEMENT BAR */}
      <div className="bg-[#1D2022] text-[#C8CBCB] border-b border-[#5E6265]/40 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Social Icons Left */}
          <div className="hidden sm:flex items-center space-x-3 text-[#C8CBCB]">
            <a href="#facebook" className="hover:text-[#E6DDCE] transition-colors"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#instagram" className="hover:text-[#E6DDCE] transition-colors"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="#youtube" className="hover:text-[#E6DDCE] transition-colors"><Youtube className="w-3.5 h-3.5" /></a>
            <span className="text-[10px] font-bold tracking-widest text-[#E6DDCE]">TikTok</span>
          </div>

          {/* Center Promo Ticker Announcement */}
          <div className="flex items-center space-x-2 mx-auto sm:mx-0 font-medium text-[11px] text-[#F6F4EF]">
            <button className="text-[#C8CBCB] hover:text-[#E6DDCE] text-xs">←</button>
            <span className="inline-flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E6DDCE] animate-pulse" />
              <span>Back to School Sales - One screen is not a workspace</span>
            </span>
            <button className="text-[#C8CBCB] hover:text-[#E6DDCE] text-xs">→</button>
          </div>

          {/* Right Region / Currency Selector */}
          <div className="hidden md:flex items-center space-x-2 text-xs text-[#C8CBCB] cursor-pointer hover:text-[#F6F4EF]">
            <Globe className="w-3.5 h-3.5 text-[#E6DDCE]" />
            <span className="text-[11px]">United States (USD $)</span>
            <ChevronDown className="w-3 h-3 text-[#C8CBCB]" />
          </div>

        </div>
      </div>

      {/* 2. MAIN E-COMMERCE HEADER NAVIGATION BAR */}
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#25282B]/95 backdrop-blur-md border-b border-[#5E6265]/50 shadow-2xl py-2.5' 
          : 'bg-[#25282B]/90 backdrop-blur-sm border-b border-[#5E6265]/30 py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            onClick={() => scrollToSection('overview-summary')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-xl bg-[#E6DDCE] text-[#25282B] flex items-center justify-center font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
              A+
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-[#F6F4EF] font-black text-xl tracking-tight group-hover:text-[#E6DDCE] transition-colors">
                ANYKING
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#E6DDCE] fill-[#E6DDCE]" />
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-5 text-sm">
            {navItems.map((item) => (
              <div 
                key={item.id} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => {
                    if (item.onClick) {
                      item.onClick();
                    } else if (item.targetId) {
                      scrollToSection(item.targetId);
                    }
                  }}
                  className={`flex items-center space-x-1 py-1.5 text-xs font-semibold tracking-wide transition-colors ${
                    activeSection === item.targetId
                      ? 'text-[#E6DDCE] font-bold'
                      : 'text-[#F6F4EF]/90 hover:text-[#E6DDCE]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`w-3 h-3 text-[#C8CBCB] transition-transform duration-200 ${
                      activeDropdown === item.id ? 'rotate-180 text-[#E6DDCE]' : ''
                    }`} />
                  )}
                </button>

                {/* Dropdown Menu Overlay */}
                {item.hasDropdown && activeDropdown === item.id && (
                  <div className="absolute top-full left-0 mt-1 w-52 rounded-xl bg-[#25282B] border border-[#5E6265]/60 shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    {item.subItems?.map((sub, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (item.targetId) scrollToSection(item.targetId);
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-3 py-2 rounded-lg text-xs text-[#C8CBCB] hover:text-[#F6F4EF] hover:bg-[#5E6265]/30 transition-colors"
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Ecommerce Icons Bar */}
          <div className="flex items-center space-x-4">
            
            {/* Currency Pill */}
            <div className="hidden sm:flex items-center space-x-1 bg-[#1D2022] border border-[#5E6265]/60 px-2.5 py-1 rounded-full text-[11px] font-mono text-[#F6F4EF]">
              <span className="text-[#E6DDCE]">🇺🇸</span>
              <span>USD $</span>
            </div>

            {/* Search Icon */}
            <button className="text-[#F6F4EF] hover:text-[#E6DDCE] transition-colors p-1.5">
              <Search className="w-4 h-4" />
            </button>

            {/* Account Icon */}
            <button className="text-[#F6F4EF] hover:text-[#E6DDCE] transition-colors p-1.5 hidden sm:block">
              <User className="w-4 h-4" />
            </button>

            {/* Cart Icon Button with Count Badge */}
            <button
              onClick={onOpenBuyModal}
              className="relative p-2 rounded-full bg-[#E6DDCE] text-[#25282B] hover:bg-[#F6F4EF] transition-all shadow-md hover:scale-105 active:scale-95"
              aria-label="View Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#25282B] text-[#E6DDCE] border border-[#E6DDCE] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#5E6265]/30 text-[#F6F4EF] border border-[#5E6265]/60 hover:bg-[#5E6265]/50 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#25282B] border-b border-[#5E6265] px-4 py-5 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  if (item.onClick) {
                    item.onClick();
                  } else if (item.targetId) {
                    scrollToSection(item.targetId);
                  }
                }}
                className={`text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                  activeSection === item.targetId
                    ? 'bg-[#E6DDCE] text-[#25282B] font-bold'
                    : 'bg-[#5E6265]/20 text-[#F6F4EF] hover:bg-[#5E6265]/40'
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="w-3 h-3 text-[#C8CBCB]" />}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#5E6265]/40 flex items-center justify-between text-xs text-[#C8CBCB]">
            <span>ANYKING 15.6" Dual Extender</span>
            <span className="font-mono text-[#E6DDCE] font-bold">${PRODUCT_INFO.price.toFixed(2)}</span>
          </div>
        </div>
      )}

    </header>
  );
};

