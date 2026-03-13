import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight, LogIn } from 'lucide-react';
import { Button } from './ui/Button';

interface NavbarProps {
  onNavigate: (view: 'home' | 'blog') => void;
  currentView: 'home' | 'blog';
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    if (id.startsWith('#')) {
      if (currentView === 'blog') {
        onNavigate('home');
        setTimeout(() => {
          const element = document.getElementById(id.substring(1));
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(id.substring(1));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (id === 'blog') {
      onNavigate('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Features', id: '#features' },
    { name: 'How it Works', id: '#how-it-works' },
    { name: 'Pricing', id: '#pricing' },
    { name: 'Blog', id: 'blog' },
    { name: 'FAQ', id: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#030814]/80 backdrop-blur-lg border-b border-[#243969]/20 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div
          className="flex items-center gap-1 cursor-pointer group select-none"
          onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <span className="text-2xl font-black tracking-tighter text-white group-hover:text-gray-200 transition-colors">L</span>
          {/* U as tilted magnet */}
          <svg className="w-6 h-6 -mx-0.5 mb-0.5 inline-block" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-15deg)' }}>
            <path d="M6 6V16C6 20.4183 9.58172 24 14 24C18.4183 24 22 20.4183 22 16V6" stroke="url(#mag-n)" strokeWidth="4" strokeLinecap="round"/>
            <rect x="3" y="2" width="7" height="6" rx="1.5" fill="#6037ff"/>
            <rect x="18" y="2" width="7" height="6" rx="1.5" fill="#0057ff"/>
            <defs><linearGradient id="mag-n" x1="6" y1="6" x2="22" y2="24"><stop stopColor="#6037ff"/><stop offset="1" stopColor="#0057ff"/></linearGradient></defs>
          </svg>
          <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text" style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)' }}>re</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.id)}
              className={`text-sm font-medium transition-colors ${
                (currentView === 'blog' && link.id === 'blog') ? 'text-[#6037ff]' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}

          <div className="h-6 w-px bg-[#243969]/30 mx-2" />

          <button className="text-sm font-medium text-white hover:text-[#6037ff] transition-colors flex items-center gap-2">
            <LogIn className="w-4 h-4" /> Login
          </button>

          <Button variant="primary" className="!px-5 !py-2.5 text-sm !rounded-[35px]" onClick={onOpenBooking}>
            Get Started <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0B1537] border-b border-[#243969]/30 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left font-medium py-2 ${
                    (currentView === 'blog' && link.id === 'blog') ? 'text-[#6037ff]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <hr className="border-[#243969]/20 my-2" />
              <button className="text-left text-white hover:text-[#6037ff] font-medium py-2 flex items-center gap-2">
                <LogIn className="w-4 h-4" /> Login
              </button>
              <Button variant="primary" className="w-full justify-center" onClick={() => { setIsMobileMenuOpen(false); onOpenBooking(); }}>
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};