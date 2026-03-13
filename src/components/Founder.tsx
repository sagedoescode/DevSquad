import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Quote, Linkedin, Twitter, Github } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <Section className="py-24 bg-[#0b0b0b] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 p-4 bg-insta-gradient rounded-2xl z-20 shadow-xl shadow-brand-primary/20">
              <Quote className="w-8 h-8 text-white" />
            </div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/creator/800/1000" 
                alt="Founder" 
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-2xl font-bold text-white mb-1">Lucas Pinheiro</h3>
                <p className="text-brand-primary font-bold">Founder & CEO, CreatorHero</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-gray-400">
              <span className="w-2 h-2 rounded-full bg-brand-primary" />
              Founder's Note
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              We built CreatorHero because the creator economy is <span className="text-transparent bg-clip-text bg-insta-gradient italic">evolving.</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed font-medium">
              <p>
                In 2026, being a creator isn't just about posting videos. It's about building a business, an empire, and a legacy.
              </p>
              <p>
                The biggest bottleneck for creators is the "business" side—branding, client acquisition, and sales. While you handle the building, we handle the rest.
              </p>
              <p>
                We created elite squads and AI systems that automate your lead gen and proposals, so you can focus 100% on your craft while we scale your empire.
              </p>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:bg-brand-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:bg-brand-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full text-gray-400 hover:bg-brand-primary hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};
