import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section } from './ui/Section';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CTO at FinTech",
    image: "https://picsum.photos/100/100?random=1",
    content: "We wasted 3 months trying to hire a senior React dev. DevSquad gave us a full team in 3 days. They built our MVP in record time.",
    company: "PayFlow"
  },
  {
    name: "Michael Chang",
    role: "Founder",
    image: "https://picsum.photos/100/100?random=2",
    content: "The code quality is outstanding. Better than agencies charging 3x the price. It feels like they are sitting in the office with us.",
    company: "Orbit AI"
  },
  {
    name: "Elena Rodriguez",
    role: "VP of Engineering",
    image: "https://picsum.photos/100/100?random=3",
    content: "Seamless integration into our Jira and Slack. I don't even manage them, they just deliver tickets. It's magic.",
    company: "LogiTech"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section className="bg-[#000000] relative overflow-hidden" id="case-studies">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Loved by <span className="text-red-500">Technical Founders</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Don't just take our word for it. Here is what engineering leaders are saying about DevSquad.
            </p>
          </div>
          <div className="flex gap-2">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            ))}
            <span className="text-white font-bold ml-2">5.0/5 Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-[#0b0b0b] p-8 rounded-2xl border border-white/5 hover:border-red-600/30 transition-colors relative"
            >
              <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12" />
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 text-red-600 fill-red-600" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-red-600/20" />
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};