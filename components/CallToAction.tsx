import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onOpenBooking?: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenBooking }) => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#030814]">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[35px] p-12 md:p-20 text-center overflow-hidden border border-[#243969]/30 shadow-[inset_0_0_43px_0_rgba(20,36,73,0.5)]"
          style={{ background: 'linear-gradient(180deg, rgba(96,55,255,0.08) 0%, rgba(0,87,255,0.03) 100%)' }}
        >
          {/* Radial glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(ellipse, #6037ff 0%, transparent 70%)' }} />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Start Freelancing on{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)' }}>
                Autopilot
              </span>
            </h2>
            <p className="text-xl text-[#8a9cc7] mb-10">
              Join 12,500+ freelancers who stopped chasing clients and started scaling their income with AI. Free to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" className="h-14 px-10 text-lg !rounded-[45px]" onClick={onOpenBooking}>
                Get Started Free <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-[#6e89ff]/40">
              No credit card required. Free plan available forever.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};