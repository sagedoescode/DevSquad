import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'blog') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    if (target === 'blog') {
      onNavigate('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Basic handling for other links to go home
      onNavigate('home');
      setTimeout(() => {
        const id = target.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-[#000000] py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-0.5 mb-6 cursor-pointer select-none" onClick={() => onNavigate('home')}>
               <span className="text-2xl font-black tracking-tighter text-white">Dev</span>
               <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">Squad</span>
               <div className="w-1.5 h-1.5 rounded-full bg-red-600 mb-1 ml-0.5" />
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              The premium alternative to freelancing. We build high-performance software teams for ambitious companies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Platform</h4>
            <ul className="space-y-4">
              <li><button onClick={(e) => handleNav(e, '#how-it-works')} className="text-gray-400 hover:text-red-500 transition-colors">How it Works</button></li>
              <li><button onClick={(e) => handleNav(e, '#pricing')} className="text-gray-400 hover:text-red-500 transition-colors">Pricing</button></li>
              <li><button onClick={(e) => handleNav(e, '#features')} className="text-gray-400 hover:text-red-500 transition-colors">Vet Process</button></li>
              <li><button onClick={(e) => handleNav(e, '#case-studies')} className="text-gray-400 hover:text-red-500 transition-colors">Case Studies</button></li>
              <li><button onClick={(e) => handleNav(e, 'blog')} className="text-gray-400 hover:text-red-500 transition-colors">Tutorials</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Careers</a></li>
              <li><button onClick={(e) => handleNav(e, 'blog')} className="text-gray-400 hover:text-red-500 transition-colors">Blog</button></li>
              <li><button onClick={(e) => handleNav(e, '#contact')} className="text-gray-400 hover:text-red-500 transition-colors">Contact</button></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Login</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© 2024 DevSquad Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};