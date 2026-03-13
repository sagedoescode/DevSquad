import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Settings, Zap, TrendingUp, ArrowDown } from 'lucide-react';
import { Section } from './ui/Section';

const steps = [
  {
    id: '01',
    title: "Connect Your Platforms",
    description: "Link your Upwork, Fiverr, Freelancer, LinkedIn, Toptal, and Workana accounts in one click. Import your existing profile and history.",
    icon: UserPlus
  },
  {
    id: '02',
    title: "Train Your AI",
    description: "Upload past proposals, messages, and contracts. The AI learns your voice, pricing, and style to represent you authentically.",
    icon: Settings
  },
  {
    id: '03',
    title: "Automate Everything",
    description: "Set preferences for job types, rates, and clients. AI applies to jobs, sends proposals, tracks hours, and invoices — all hands-free.",
    icon: Zap
  },
  {
    id: '04',
    title: "Scale Your Income",
    description: "Watch your client base grow while AI handles admin. Focus on delivering great work while Lure handles the rest.",
    icon: TrendingUp
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <Section className="bg-[#030814] relative" id="how-it-works">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              From Zero to Autopilot in{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)' }}>4 Steps</span>
            </h2>
            <p className="text-[#8a9cc7] text-lg">
              Setup takes 10 minutes. Then your AI assistant works 24/7 while you sleep.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 z-0" style={{ background: 'linear-gradient(to right, transparent, rgba(96,55,255,0.3), transparent)' }} />

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
                <div className="bg-[#0B1537]/50 border border-[#243969]/25 p-8 rounded-[25px] h-full hover:border-[#6037ff]/40 transition-all duration-300 hover:-translate-y-2 shadow-[inset_0_0_25px_0_rgba(20,36,73,0.3)]">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white font-bold text-xl border border-[#6037ff]/30 group-hover:shadow-[0_0_20px_rgba(96,55,255,0.3)] transition-all duration-300" style={{ background: 'radial-gradient(circle farthest-corner at 54% 40%, rgba(96,55,255,0.3), rgba(0,87,255,0.15))' }}>
                    <step.icon className="w-6 h-6" />
                  </div>

                  <div className="absolute top-8 right-8 text-4xl font-black text-white/5 select-none">{step.id}</div>

                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-[#6e89ff]/60 text-sm leading-relaxed">{step.description}</p>
                </div>

                {idx < steps.length - 1 && (
                  <div className="md:hidden flex justify-center py-4 text-[#6037ff]/30">
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