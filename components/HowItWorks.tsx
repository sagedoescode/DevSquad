import React from 'react';
import { motion } from 'framer-motion';
import { Search, Users, Rocket, BarChart3, ArrowDown } from 'lucide-react';
import { Section } from './ui/Section';

const steps = [
  {
    id: '01',
    title: "Discovery & Roadmap",
    description: "We don't just take orders. We analyze your product vision, challenge assumptions, and build a technical roadmap in 48 hours.",
    icon: Search
  },
  {
    id: '02',
    title: "Squad Assembly",
    description: "We deploy a pre-vetted, cohesive team tailored to your stack. No random freelancers—these people have shipped together before.",
    icon: Users
  },
  {
    id: '03',
    title: "The 2-Week Trial",
    description: "Work with your squad for 14 days risk-free. If you're not blown away by the velocity and code quality, you don't pay.",
    icon: Rocket
  },
  {
    id: '04',
    title: "Agile Delivery",
    description: "Weekly sprints, daily standups in your Slack, and transparent Jira reporting. You get full visibility without the management headache.",
    icon: BarChart3
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <Section className="bg-[#000000] relative" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            From Idea to Ship in <span className="text-red-500">4 Steps</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We've stripped away the agency bloat. No account managers, no hidden fees. Just direct access to high-performance engineering.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-red-900/50 to-transparent -translate-y-1/2 z-0" />

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
                <div className="bg-[#0b0b0b] border border-white/5 p-8 rounded-2xl h-full hover:border-red-600/30 transition-all duration-300 hover:-translate-y-2">
                  <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center mb-6 text-red-500 font-bold text-xl border border-red-600/20 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    <step.icon className="w-6 h-6" />
                  </div>
                  
                  <div className="absolute top-8 right-8 text-4xl font-black text-white/5 select-none">
                    {step.id}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Mobile Arrow */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-4 text-red-900/50">
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