import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Section } from './ui/Section';

const faqs = [
  {
    question: "How does the 2-week risk-free trial work?",
    answer: "We are confident in our talent. If you are not satisfied with the performance of your squad within the first 14 days, you don't pay a single cent. We will either replace the team members or part ways, no hard feelings."
  },
  {
    question: "Do I own the intellectual property?",
    answer: "Absolutely. You own 100% of the code, design, and assets created from day one. We sign a strict NDA and IP assignment agreement before the project starts."
  },
  {
    question: "What is the time zone overlap?",
    answer: "Our engineers are primarily based in LATAM and Eastern Europe, ensuring a minimum of 4-6 hours of overlap with US and European time zones. We align our working hours to match your team's standups."
  },
  {
    question: "Can I scale the team up or down?",
    answer: "Yes. Flexibility is core to our model. You can add developers within 48 hours or reduce the squad size with a 2-week notice period to adjust to your product roadmap."
  },
  {
    question: "What tech stacks do you cover?",
    answer: "We specialize in modern web and mobile stacks: React, Next.js, Node.js, Python (Django/FastAPI), React Native, Flutter, and cloud infrastructure (AWS/GCP/Azure)."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Section className="bg-[#000000]" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Everything you need to know about working with DevSquad.
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
              className="border border-white/5 rounded-2xl bg-[#0b0b0b] overflow-hidden hover:border-red-600/30 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between"
              >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <span className={`p-2 rounded-full transition-colors ${openIndex === idx ? 'bg-red-600 text-white' : 'bg-white/5 text-gray-400'}`}>
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
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
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