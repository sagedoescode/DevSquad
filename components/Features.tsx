import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Clock, Users, Shield, Zap, RefreshCw } from 'lucide-react';
import { Section } from './ui/Section';

const features = [
  {
    icon: Users,
    title: "Elite Creator Squads",
    description: "Access the top 1% of editors, designers, and managers vetted for high-velocity growth."
  },
  {
    icon: Zap,
    title: "Client Acquisition Engine",
    description: "While you handle building, we handle getting you clients. A steady stream of high-ticket leads, automated."
  },
  {
    icon: Terminal,
    title: "AI Automated Proposals",
    description: "Win more deals with AI-generated, high-converting proposals that land in your prospects' inbox in seconds."
  },
  {
    icon: Shield,
    title: "Branding & Positioning",
    description: "We handle your branding and authority building, turning you from a freelancer into a category leader."
  },
  {
    icon: Clock,
    title: "Deploy in 24 Hours",
    description: "Stop waiting weeks to start. Our squads are ready to integrate into your workflow and start scaling instantly."
  },
  {
    icon: RefreshCw,
    title: "Scale on Demand",
    description: "Need more hands? Scale your squad up or down with a single click as your creator empire grows."
  }
];

export const Features: React.FC = () => {
  return (
    <Section className="bg-[#000000]" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Creator Success, <span className="text-transparent bg-clip-text bg-insta-gradient">Redefined</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Traditional agencies are slow. Freelancers are unreliable. CreatorHero gives you the power of a world-class team with the flexibility of a platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group p-8 rounded-2xl bg-[#0b0b0b] border border-white/5 hover:border-brand-primary/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute -inset-1 bg-insta-gradient rounded-2xl blur opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 group-hover:scale-110 transition-all duration-500">
                  <feature.icon className="w-7 h-7 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};