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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    
    // If it's a section link
    if (id.startsWith('#')) {
       // If we are on blog, go to home first
       if (currentView === 'blog') {
         onNavigate('home');
         // Small timeout to allow render before scrolling
         setTimeout(() => {
            const element = document.getElementById(id.substring(1));
            if (element) element.scrollIntoView({ behavior: 'smooth' });
         }, 100);
       } else {
          // Already on home
          const element = document.getElementById(id.substring(1));
          if (element) element.scrollIntoView({ behavior: 'smooth' });
       }
    } else if (id === 'blog') {
      onNavigate('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === '#contact') {
        onOpenBooking();
    }
  };

  const navLinks = [
    { name: 'How it Works', id: '#how-it-works' },
    { name: 'Benefits', id: '#features' },
    { name: 'Pricing', id: '#pricing' },
    { name: 'Blog', id: 'blog' },
    { name: 'Tutorials', id: 'blog' }, // Pointing to blog for now
    { name: 'FAQ', id: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#000000]/80 backdrop-blur-lg border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center gap-0.5 cursor-pointer group select-none"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="text-2xl font-black tracking-tighter text-white group-hover:text-gray-200 transition-colors">Dev</span>
          <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 group-hover:from-red-500 group-hover:to-orange-500 transition-all">Squad</span>
          <div className="w-1.5 h-1.5 rounded-full bg-red-600 mb-1 ml-0.5 animate-pulse" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.id)}
              className={`text-sm font-medium transition-colors ${
                (currentView === 'blog' && (link.id === 'blog' || link.name === 'Tutorials')) 
                ? 'text-red-500' 
                : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          
          <div className="h-6 w-px bg-white/10 mx-2"></div>

          <button className="text-sm font-medium text-white hover:text-red-500 transition-colors flex items-center gap-2">
            <LogIn className="w-4 h-4" /> Login
          </button>

          <Button 
            variant="primary" 
            className="!px-4 !py-2 text-sm"
            onClick={onOpenBooking}
          >
            Book a Squad <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0b0b0b] border-b border-white/5 p-6 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left font-medium py-2 ${
                    (currentView === 'blog' && link.id === 'blog') 
                    ? 'text-red-500' 
                    : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              
              <hr className="border-white/5 my-2" />
              
              <button className="text-left text-white hover:text-red-500 font-medium py-2 flex items-center gap-2">
                 <LogIn className="w-4 h-4" /> Login
              </button>

              <Button 
                variant="primary" 
                className="w-full justify-center"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
              >
                Book a Squad
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};