import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Section } from './ui/Section';

const faqs = [
  {
    question: "How does the AI learn my writing style?",
    answer: "When you sign up, you can upload past proposals, messages, and portfolio descriptions. Our AI analyzes your tone, vocabulary, and argumentation patterns. After ~10 samples, it can generate proposals that sound authentically like you. You can always edit and refine the outputs."
  },
  {
    question: "Which freelancing platforms are supported?",
    answer: "We currently support Upwork, Fiverr, Freelancer.com, Toptal, Workana, and LinkedIn. We're adding more platforms every month. You can connect as many accounts as you want on the Pro plan."
  },
  {
    question: "Will auto-applying get my accounts flagged?",
    answer: "No. Lure doesn't use bots or automation that violates platform terms. We use official APIs where available, and our proposal generation mimics natural human behavior with randomized timing and unique content for every application."
  },
  {
    question: "Can I use this with my existing clients?",
    answer: "Absolutely. Lure isn't just for finding new work — it's for managing existing clients too. Use our time tracking, invoicing, automated updates, and GitHub reporting with your current projects from day one."
  },
  {
    question: "Is there a free plan?",
    answer: "Yes! The Starter plan is free forever and includes 3 AI proposals per month, basic time tracking, and one connected platform. It's the perfect way to try Lure before committing to Pro."
  },
  {
    question: "How does the GitHub integration work?",
    answer: "Connect your GitHub account and select which repos to track. Lure automatically logs commits, PRs, and code reviews as work activity. It generates professional time reports that show clients exactly what you worked on, with links to the actual code changes."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="bg-[#030814]" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)' }}>Questions</span>
            </h2>
            <p className="text-[#8a9cc7] text-lg">Everything you need to know about Lure.</p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-[#243969]/25 rounded-[20px] bg-[#0B1537]/50 overflow-hidden hover:border-[#6037ff]/30 transition-colors shadow-[inset_0_0_15px_0_rgba(20,36,73,0.3)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between cursor-pointer"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <span className={`p-2 rounded-full transition-all ${openIndex === idx ? 'text-white shadow-[0_0_15px_rgba(96,55,255,0.4)]' : 'bg-[#243969]/30 text-[#6e89ff]/60'}`} style={openIndex === idx ? { background: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)' } : undefined}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-[#8a9cc7] leading-relaxed">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};