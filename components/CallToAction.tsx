import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
    onOpenBooking?: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenBooking }) => {
  const handleBooking = () => {
      if (onOpenBooking) {
          onOpenBooking();
      } else {
          window.open('https://calendly.com', '_blank');
      }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#000000]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#0b0b0b]" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 border border-white/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-primary/5 blur-[100px]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to build your <br/><span className="text-transparent bg-clip-text bg-insta-gradient">Creator Empire?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Stop struggling with production. Hire a squad that scales your vision. Book a discovery call today and get your growth roadmap.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                className="h-14 px-10 text-xl"
                onClick={handleBooking}
              >
                Join CreatorHero <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500 font-bold">
              No long-term contracts. Performance-backed growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};