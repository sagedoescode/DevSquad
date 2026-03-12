import React from 'react';
import { motion } from 'framer-motion';
import { Search, Users, Rocket, BarChart3, ArrowDown } from 'lucide-react';
import { Section } from './ui/Section';

const steps = [
  {
    id: '01',
    title: "Branding & Authority",
    description: "We define your unique voice and build your authority, turning you from a freelancer into a category leader.",
    icon: Search
  },
  {
    id: '02',
    title: "AI Lead Generation",
    description: "We set up your automated client acquisition engine and AI-powered proposal system to land high-ticket deals.",
    icon: Users
  },
  {
    id: '03',
    title: "Squad Integration",
    description: "We deploy your dedicated growth squad—editors, managers, and designers—to handle the heavy lifting.",
    icon: Rocket
  },
  {
    id: '04',
    title: "Empire Scaling",
    description: "You focus on building your craft. We handle the branding, the clients, and the growth. Scale without the stress.",
    icon: BarChart3
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <Section className="bg-[#000000] relative" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            From Vision to Empire in <span className="text-transparent bg-clip-text bg-insta-gradient">4 Steps</span>
          </h2>
          <p className="text-gray-400 text-lg font-medium">
            We've stripped away the agency bloat. No account managers, no hidden fees. Just direct access to high-performance growth.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-insta-gradient opacity-20 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative group"
              >
                <div className="bg-[#0b0b0b] border border-white/5 p-8 rounded-2xl h-full hover:border-brand-primary/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mb-6 text-brand-primary font-bold text-xl border border-brand-primary/20 group-hover:bg-insta-gradient group-hover:text-white transition-colors duration-300">
                    <step.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="absolute top-8 right-8 text-4xl font-black text-white/5 select-none">
                    {step.id}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
                
                {/* Mobile Arrow */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-4 text-brand-primary/50">
                    <ArrowDown />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};