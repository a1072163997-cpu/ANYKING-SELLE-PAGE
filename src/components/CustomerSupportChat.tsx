import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, ChevronDown, CheckCircle2, User, RefreshCw, ShoppingBag } from 'lucide-react';
import botAvatarImg from '../assets/images/customer_service_bot_1786532986331.jpg';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  quickReplies?: string[];
}

interface CustomerSupportChatProps {
  onOpenBuyModal?: () => void;
}

export const CustomerSupportChat: React.FC<CustomerSupportChatProps> = ({ onOpenBuyModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "👋 Hi! I'm Aura, your ANYKING Customer Support AI Assistant. How can I help you with the 15.6\" Dual Laptop Screen Extender today?",
      time: getCurrentTime(),
      quickReplies: [
        'Laptop Compatibility (Mac / Windows)',
        'USB-C & HDMI Connection Guide',
        'What is in the box?',
        'Shipping & 3-Year Warranty',
        'Special Offers & Bundles'
      ]
    }
  ]);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: getCurrentTime()
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      let botAnswer = "Thank you for asking! The ANYKING 15.6\" Dual Screen Extender works plug-and-play with Type-C and HDMI. Would you like me to guide you to checkout or provide driver setup details?";
      let replies: string[] | undefined = undefined;

      const qLower = query.toLowerCase();

      if (qLower.includes('compatibility') || qLower.includes('mac') || qLower.includes('windows') || qLower.includes('m1') || qLower.includes('m2')) {
        botAnswer = "✅ **100% Laptop Compatibility!**\n- **Windows**: Plug and play via USB-C or HDMI.\n- **Mac (M1/M2/M3 & Intel)**: Fully supported! Download our free Mac H5 driver for single USB-C dual screen expansion.\n- Fits all 13\" to 17.3\" laptops.";
        replies = ['How to install Mac Driver?', 'Buy Now ($349.99)', 'What cables are included?'];
      } else if (qLower.includes('cable') || qLower.includes('connect') || qLower.includes('usb') || qLower.includes('hdmi')) {
        botAnswer = "⚡ **Plug & Play Connection Options:**\n1. **Full-Featured USB-C**: One cable per screen for video + power.\n2. **HDMI + USB-A**: Connect HDMI for video and USB-A for power.\nAll cables (2x USB-C, 1x HDMI, 1x USB-A) are included free in the box!";
        replies = ['What is in the box?', 'Check MSRP Price', 'Talk to Human Agent'];
      } else if (qLower.includes('box') || qLower.includes('included') || qLower.includes('bag')) {
        botAnswer = "📦 **In The Box Complete Kit:**\n• ANYKING 15.6\" Dual Screen Extender\n• Premium Felt Protective Carrying Bag\n• 2x USB-C to USB-C Cables\n• 1x Mini HDMI to HDMI Cable\n• 1x USB-A Power Cable & Wall Adapter\n• Quick User Guide";
        replies = ['Buy Now ($349.99)', 'Warranty Info', 'Ask another question'];
      } else if (qLower.includes('warranty') || qLower.includes('ship') || qLower.includes('guarantee')) {
        botAnswer = "🛡️ **Warranty & Shipping Guarantee:**\n- **Free Express Shipping** with tracking.\n- **30-Day Money-Back Guarantee**.\n- **3-Year Official ANYKING Manufacturer Warranty** with 24/7 global customer care.";
        replies = ['Buy Now ($349.99)', 'Speak with agent'];
      } else if (qLower.includes('price') || qLower.includes('offer') || qLower.includes('buy') || qLower.includes('deal')) {
        botAnswer = "🎉 **Limited Time Special Deal!**\nCurrent MSRP: **$349.99** (Includes free carrying bag & full cable set). Click below to choose your bundle or select your retailer!";
        replies = ['Open Order Checkout', 'Ask product specs'];
      } else {
        botAnswer = `Got it regarding "${query}"! The ANYKING Dual 15.6" Screen Extender features 1080P FHD IPS dual screens, 180° rotation, and 45° rear support stand. How else can I assist you?`;
        replies = ['Buy Now ($349.99)', 'Talk to Human Support'];
      }

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: botAnswer,
        time: getCurrentTime(),
        quickReplies: replies
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Avatar Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center bg-[#25282B] text-[#F6F4EF] p-2 pr-5 rounded-full border border-[#E6DDCE]/50 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
        >
          {/* Glowing Avatar Container */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#E6DDCE] shadow-md flex-shrink-0 bg-[#F6F4EF]">
            <img
              src={botAvatarImg}
              alt="ANYKING Customer Service Bot"
              className="w-full h-full object-cover"
            />
            {/* Online Green Indicator Dot */}
            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#25282B] rounded-full animate-pulse"></span>
          </div>

          <div className="ml-3 text-left">
            <div className="flex items-center space-x-1">
              <span className="text-xs font-bold text-[#F6F4EF]">Aura Support</span>
              <span className="bg-[#E6DDCE]/20 text-[#E6DDCE] text-[9px] font-mono px-1 rounded border border-[#E6DDCE]/40">AI 24/7</span>
            </div>
            <p className="text-[10px] text-[#C8CBCB]">Need help? Chat with me</p>
          </div>

          {/* Floating Pulse Glow Effect */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6DDCE] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#E6DDCE]"></span>
          </span>
        </button>
      )}

      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[520px] bg-[#25282B] rounded-3xl border border-[#5E6265]/60 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="bg-[#25282B] border-b border-[#5E6265]/50 p-4 flex justify-between items-center text-[#F6F4EF]">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 rounded-full border border-[#E6DDCE]/60 overflow-hidden bg-[#F6F4EF] flex-shrink-0">
                <img src={botAvatarImg} alt="AI Bot Avatar" className="w-full h-full object-cover" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#25282B] rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <h4 className="font-extrabold text-sm text-[#F6F4EF]">Aura AI Assistant</h4>
                  <Sparkles className="w-3.5 h-3.5 text-[#E6DDCE]" />
                </div>
                <div className="flex items-center space-x-1 text-[10px] text-[#C8CBCB]">
                  <span className="inline-block w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  <span>ANYKING Support Bot • Online</span>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-[#C8CBCB] hover:text-[#F6F4EF] hover:bg-[#5E6265]/30 transition-colors"
                title="Minimize Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#1D2022]/80 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[82%] rounded-2xl p-3 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#E6DDCE] text-[#25282B] font-medium rounded-tr-none shadow-md'
                      : 'bg-[#25282B] text-[#F6F4EF] border border-[#5E6265]/50 rounded-tl-none shadow-md'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-[#25282B]/70' : 'text-[#C8CBCB]'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>

                {/* Quick Reply Pills */}
                {msg.quickReplies && (
                  <div className="mt-2 flex flex-wrap gap-1.5 max-w-[95%]">
                    {msg.quickReplies.map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          if (reply.includes('Buy Now') || reply.includes('Order')) {
                            if (onOpenBuyModal) onOpenBuyModal();
                          } else {
                            handleSend(reply);
                          }
                        }}
                        className="px-2.5 py-1 rounded-full bg-[#5E6265]/30 hover:bg-[#E6DDCE] text-[#E6DDCE] hover:text-[#25282B] border border-[#E6DDCE]/30 text-[11px] font-medium transition-all"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center space-x-2 text-[#C8CBCB] text-[11px] bg-[#25282B] p-2.5 rounded-2xl w-24 border border-[#5E6265]/40">
                <Bot className="w-3.5 h-3.5 text-[#E6DDCE] animate-bounce" />
                <span>Typing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Buy CTA Footer Notice */}
          <div className="px-4 py-2 bg-[#25282B] border-t border-[#5E6265]/40 flex items-center justify-between">
            <span className="text-[10px] text-[#C8CBCB]">Official ANYKING Guarantee</span>
            {onOpenBuyModal && (
              <button
                onClick={onOpenBuyModal}
                className="text-[11px] text-[#E6DDCE] hover:underline font-bold flex items-center space-x-1"
              >
                <ShoppingBag className="w-3 h-3" />
                <span>Buy Extender ($349.99)</span>
              </button>
            )}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#25282B] border-t border-[#5E6265]/50 flex items-center space-x-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about specs, cables, Mac compatibility..."
              className="flex-1 bg-[#1D2022] text-[#F6F4EF] placeholder-[#C8CBCB]/60 text-xs rounded-xl px-3.5 py-2.5 border border-[#5E6265]/60 focus:outline-none focus:border-[#E6DDCE]"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-[#E6DDCE] text-[#25282B] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#F6F4EF] transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </div>
  );
};
