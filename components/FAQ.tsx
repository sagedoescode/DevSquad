import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Section } from './ui/Section';

const faqs = [
  {
    question: "How does the growth guarantee work?",
    answer: "We focus on key performance indicators (KPIs) like reach, engagement, and conversion. If we don't hit the agreed-upon growth milestones within the first 30 days, we'll work for free until we do."
  },
  {
    question: "Do I own the content produced?",
    answer: "Absolutely. You own 100% of the raw footage, edited videos, designs, and assets created by your squad. We act as your production and growth engine, but you own the empire."
  },
  {
    question: "What platforms do you support?",
    answer: "We are experts in YouTube, Instagram, TikTok, X (Twitter), LinkedIn, and creator-led platforms like Skool and Substack. We help you dominate wherever your audience lives."
  },
  {
    question: "Can I switch squad members?",
    answer: "Yes. If you feel the creative chemistry isn't right, you can request a member swap within 48 hours. We ensure your squad perfectly matches your brand's voice and vision."
  },
  {
    question: "What tools do you use?",
    answer: "We leverage industry-standard tools like Adobe Creative Cloud, DaVinci Resolve, and Figma, combined with our proprietary AI growth stack to give you the ultimate edge."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="bg-[#000000]" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-insta-gradient">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about scaling with CreatorHero.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-white/5 rounded-2xl bg-[#0b0b0b] overflow-hidden hover:border-brand-primary/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                <span className={`p-2 rounded-full transition-colors ${openIndex === idx ? 'bg-insta-gradient text-white' : 'bg-white/5 text-gray-400'}`}>
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
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
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