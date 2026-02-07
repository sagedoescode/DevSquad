import React, { useState } from 'react';
import { MessageCircle, X, Mail, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingSupportProps {
    onOpenBooking?: () => void;
}

export const FloatingSupport: React.FC<FloatingSupportProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleBooking = () => {
    setIsOpen(false);
    if (onOpenBooking) {
        onOpenBooking();
    } else {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-4 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-[#0b0b0b] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-5 w-[calc(100vw-3rem)] md:w-80 overflow-hidden relative backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-lg shadow-red-900/20">
                 <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">DevSquad Support</h3>
                <p className="text-xs text-green-400 flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> 
                  Online now
                </p>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-2">
              <button 
                onClick={() => window.open('https://wa.me/', '_blank')}
                className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 text-left group border border-transparent hover:border-white/5"
              >
                <div className="p-2.5 bg-green-500/10 text-green-500 rounded-lg group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">WhatsApp</div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-400">Chat instantly</div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-700 group-hover:text-white/50" />
              </button>

              <button 
                onClick={() => window.location.href = 'mailto:hello@devsquad.io'}
                className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 text-left group border border-transparent hover:border-white/5"
              >
                <div className="p-2.5 bg-red-500/10 text-red-500 rounded-lg group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors">Email Us</div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-400">Response in 24h</div>
                </div>
              </button>

              <button 
                onClick={handleBooking}
                className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 text-left group border border-transparent hover:border-white/5"
              >
                <div className="p-2.5 bg-orange-500/10 text-orange-500 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white group-hover:text-orange-400 transition-colors">Book a Squad</div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-400">Start your build</div>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.4)] hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] border border-white/20 transition-shadow z-50 cursor-pointer"
      >
        <AnimatePresence mode='wait'>
            {isOpen ? (
                <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <X className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </motion.div>
            ) : (
                <motion.div
                    key="message"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white fill-white/10" />
                </motion.div>
            )}
        </AnimatePresence>
        
        {/* Notification Dot - Only show if closed */}
        {!isOpen && (
            <span className="absolute top-3 right-3 md:top-4 md:right-4 w-3 h-3 bg-green-500 border-2 border-[#0b0b0b] rounded-full animate-pulse"></span>
        )}
      </motion.button>
    </div>
  );
};