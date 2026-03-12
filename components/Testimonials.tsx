import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section } from './ui/Section';

const testimonials = [
  {
    name: "Leo Mahlke",
    role: "Lifestyle Creator",
    image: "https://picsum.photos/100/100?random=1",
    content: "We wasted months trying to find a reliable editor. CreatorHero gave us a full squad in 48 hours. They scaled my reach to 10M+ in record time.",
    company: "LeoMahlke.com"
  },
  {
    name: "Anna K.",
    role: "Tech Educator",
    image: "https://picsum.photos/100/100?random=2",
    content: "The production quality is outstanding. Better than agencies charging 5x the price. It feels like they are sitting in the studio with me.",
    company: "AnnaCodes"
  },
  {
    name: "David S.",
    role: "Business Influencer",
    image: "https://picsum.photos/100/100?random=3",
    content: "Seamless integration into my workflow. I don't even manage them, they just deliver viral content. It's pure magic.",
    company: "Empire Builders"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section className="bg-[#000000] relative overflow-hidden" id="case-studies">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Loved by <span className="text-transparent bg-clip-text bg-insta-gradient">Top Creators</span>
            </h2>
            <p className="text-gray-400 text-lg font-medium">
              Don't just take our word for it. Here is what industry leaders are saying about CreatorHero.
            </p>
          </div>
          <div className="flex gap-2">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-6 h-6 text-brand-secondary fill-brand-secondary" />
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
              className="bg-[#0b0b0b] p-8 rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-colors relative"
            >
              <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12" />
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 text-brand-primary fill-brand-primary" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed font-medium italic">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-brand-primary/20" />
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-sm text-gray-500 font-medium">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};