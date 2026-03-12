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
    <footer className="bg-[#030814] py-16 border-t border-[#243969]/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-1 mb-6 cursor-pointer select-none" onClick={() => onNavigate('home')}>
              <span className="text-2xl font-black tracking-tighter text-white">L</span>
              <svg className="w-6 h-6 -mx-0.5 mb-0.5 inline-block" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(-15deg)' }}>
                <path d="M6 6V16C6 20.4183 9.58172 24 14 24C18.4183 24 22 20.4183 22 16V6" stroke="url(#mag-f)" strokeWidth="4" strokeLinecap="round"/>
                <rect x="3" y="2" width="7" height="6" rx="1.5" fill="#6037ff"/>
                <rect x="18" y="2" width="7" height="6" rx="1.5" fill="#0057ff"/>
                <defs><linearGradient id="mag-f" x1="6" y1="6" x2="22" y2="24"><stop stopColor="#6037ff"/><stop offset="1" stopColor="#0057ff"/></linearGradient></defs>
              </svg>
              <span className="text-2xl font-black tracking-tighter text-transparent bg-clip-text" style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)' }}>re</span>
            </div>
            <p className="text-[#6e89ff]/50 max-w-sm mb-6">
              The AI-powered platform for freelancers. Automate proposals, invoicing, job applications, and client management — so you can focus on building.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#6e89ff]/40 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-[#6e89ff]/40 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-[#6e89ff]/40 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><button onClick={(e) => handleNav(e, '#features')} className="text-[#6e89ff]/50 hover:text-[#6037ff] transition-colors">Features</button></li>
              <li><button onClick={(e) => handleNav(e, '#pricing')} className="text-[#6e89ff]/50 hover:text-[#6037ff] transition-colors">Pricing</button></li>
              <li><button onClick={(e) => handleNav(e, '#how-it-works')} className="text-[#6e89ff]/50 hover:text-[#6037ff] transition-colors">How it Works</button></li>
              <li><button onClick={(e) => handleNav(e, '#case-studies')} className="text-[#6e89ff]/50 hover:text-[#6037ff] transition-colors">Testimonials</button></li>
              <li><button onClick={(e) => handleNav(e, 'blog')} className="text-[#6e89ff]/50 hover:text-[#6037ff] transition-colors">Blog</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#6e89ff]/50 hover:text-[#6037ff] transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#6e89ff]/50 hover:text-[#6037ff] transition-colors">Careers</a></li>
              <li><button onClick={(e) => handleNav(e, 'blog')} className="text-[#6e89ff]/50 hover:text-[#6037ff] transition-colors">Blog</button></li>
              <li><button onClick={(e) => handleNav(e, '#contact')} className="text-[#6e89ff]/50 hover:text-[#6037ff] transition-colors">Contact</button></li>
              <li><a href="#" className="text-[#6e89ff]/50 hover:text-[#6037ff] transition-colors">Login</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#243969]/15 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#6e89ff]/30 text-sm">&copy; 2025 Lure. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-[#6e89ff]/30 hover:text-[#6e89ff]/60 text-sm">Privacy Policy</a>
            <a href="#" className="text-[#6e89ff]/30 hover:text-[#6e89ff]/60 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};