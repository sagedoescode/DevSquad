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
        <div className="bg-gradient-to-r from-red-900/10 to-orange-900/10 border border-white/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-red-600/5 blur-[100px]" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to ship your <br/>dream project?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Stop looking for unicorns. Hire a squad that delivers. Book a discovery call today and get a roadmap in 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                className="h-14 px-8 text-lg"
                onClick={handleBooking}
              >
                Book Discovery Call <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              No credit card required. Free 30-min technical consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};