import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section } from './ui/Section';

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Full-Stack Developer",
    platform: "Upwork Top Rated Plus",
    content: "Lure's AI proposals are scary good. My response rate went from 8% to 34% in the first month. I went from chasing clients to turning them down.",
  },
  {
    name: "Sofia Rodriguez",
    role: "UX Designer",
    platform: "Fiverr Level 2",
    content: "The auto-application feature changed my life. I wake up to interview invites instead of spending 2 hours every morning searching for gigs.",
  },
  {
    name: "James Okafor",
    role: "DevOps Engineer",
    platform: "Toptal Network",
    content: "The GitHub integration and automated time reports saved me 5+ hours a week. My clients love the professional reports and I love not doing them.",
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section className="bg-[#030814] relative overflow-hidden" id="case-studies">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none opacity-10" style={{ background: 'radial-gradient(circle, #6037ff 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Loved by{' '}
                <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)' }}>Top Freelancers</span>
              </h2>
              <p className="text-[#8a9cc7] text-lg">
                Freelancers across 50+ countries are scaling their income with Lure.
              </p>
            </motion.div>
          </div>
          <div className="flex gap-2">
            {[1,2,3,4,5].map(i => (
              <Star key={i} className="w-6 h-6 text-[#FCAF45] fill-[#FCAF45]" />
            ))}
            <span className="text-white font-bold ml-2">4.9/5 Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-[#0B1537]/50 p-8 rounded-[25px] border border-[#243969]/25 hover:border-[#6037ff]/30 transition-colors relative shadow-[inset_0_0_25px_0_rgba(20,36,73,0.3)]"
            >
              <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12" />
              <div className="mb-6">
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-4 h-4 text-[#6037ff] fill-[#6037ff]" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">"{t.content}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-[#243969]/20 pt-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ background: 'radial-gradient(circle farthest-corner at 54% 40%, #6037ff 30%, #0057ff)' }}>
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-sm text-[#6e89ff]/50">{t.role} • {t.platform}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};