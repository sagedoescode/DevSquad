import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Users, Code2, Rocket, Globe, ShieldCheck, Zap } from 'lucide-react';
import { Marquee } from './Marquee';

const stats = [
  { label: "Creators Empowered", value: "2,500+", icon: Users, color: "text-brand-primary" },
  { label: "Clients Acquired", value: "12k+", icon: Code2, color: "text-brand-secondary" },
  { label: "Proposals Sent", value: "450k+", icon: Rocket, color: "text-brand-accent" },
  { label: "Global Reach", value: "45 Countries", icon: Globe, color: "text-blue-500" },
  { label: "Client Satisfaction", value: "99.9%", icon: ShieldCheck, color: "text-green-500" },
  { label: "Avg. Scale Time", value: "< 24h", icon: Zap, color: "text-yellow-500" },
];

export const Stats: React.FC = () => {
  return (
    <Section className="py-20 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`mb-4 p-3 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 relative group">
           <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
           <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
           <Marquee 
             items={['UPWORK', 'FREELANCER.COM', 'FIVERR', 'WORKANA', 'ADOBE PREMIERE', 'AFTER EFFECTS', 'DAVINCI RESOLVE', 'CAPCUT', 'FIGMA', 'NOTION', 'SLACK', 'AI AUTOMATION', 'VIRAL STRATEGY', 'CONTENT OPS']} 
             speed={40}
             reverse
           />
        </div>
      </div>
    </Section>
  );
};
