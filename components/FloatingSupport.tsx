import React, { useState } from 'react';
import { MessageCircle, X, Mail, MessageSquare, ExternalLink, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingSupportProps {
  onOpenBooking?: () => void;
}

export const FloatingSupport: React.FC<FloatingSupportProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-4 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: "bottom right" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-[#0B1537] border border-[#243969]/40 rounded-[25px] shadow-[0_0_50px_rgba(0,0,0,0.5),inset_0_0_25px_0_rgba(20,36,73,0.3)] p-5 w-[calc(100vw-3rem)] md:w-80 overflow-hidden relative backdrop-blur-xl"
          >
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[#243969]/20">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg" style={{ background: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)' }}>
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Lure Support</h3>
                <p className="text-xs text-[#00F0FF] flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                  Online now
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => window.open('https://wa.me/', '_blank')}
                className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 text-left group border border-transparent hover:border-[#243969]/30"
              >
                <div className="p-2.5 bg-green-500/10 text-green-500 rounded-lg group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white group-hover:text-green-400 transition-colors">WhatsApp</div>
                  <div className="text-xs text-[#6e89ff]/40">Chat instantly</div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#243969]" />
              </button>

              <button
                onClick={() => window.location.href = 'mailto:hello@getlure.io'}
                className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 text-left group border border-transparent hover:border-[#243969]/30"
              >
                <div className="p-2.5 bg-[#6037ff]/10 text-[#6037ff] rounded-lg group-hover:bg-[#6037ff] group-hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white group-hover:text-[#6037ff] transition-colors">Email Us</div>
                  <div className="text-xs text-[#6e89ff]/40">Response in 24h</div>
                </div>
              </button>

              <button
                onClick={() => { setIsOpen(false); onOpenBooking?.(); }}
                className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 text-left group border border-transparent hover:border-[#243969]/30"
              >
                <div className="p-2.5 bg-[#00F0FF]/10 text-[#00F0FF] rounded-lg group-hover:bg-[#00F0FF] group-hover:text-[#030814] transition-colors duration-300">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-white group-hover:text-[#00F0FF] transition-colors">Get Started</div>
                  <div className="text-xs text-[#6e89ff]/40">Free trial</div>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(96,55,255,0.4)] hover:shadow-[0_0_50px_rgba(96,55,255,0.6)] border border-white/20 transition-shadow z-50 cursor-pointer"
        style={{ background: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)' }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </motion.div>
          ) : (
            <motion.div key="message" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white fill-white/10" />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute top-3 right-3 md:top-4 md:right-4 w-3 h-3 bg-[#00F0FF] border-2 border-[#030814] rounded-full animate-pulse" />
        )}
      </motion.button>
    </div>
  );
};