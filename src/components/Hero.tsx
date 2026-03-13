import React, { useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenBooking?: () => void;
}

const Counter = ({ from, to, label, suffix = "", delay = 0 }: { from: number, to: number, label: string, suffix?: string, delay?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 2.5, delay, ease: "easeOut",
        onUpdate: (v) => { if (node) node.textContent = Math.floor(v).toLocaleString(); },
      });
      return () => controls.stop();
    }
  }, [from, to, isInView, delay]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-4 md:p-6">
      <div className="flex items-baseline gap-1 mb-1">
        <span ref={nodeRef} className="text-3xl md:text-4xl font-bold text-white tabular-nums">{from}</span>
        <span className="text-xl md:text-2xl font-bold text-[#6037ff]">{suffix}</span>
      </div>
      <p className="text-[#6e89ff]/60 text-xs md:text-sm font-medium uppercase tracking-wider">{label}</p>
    </div>
  );
};

const platforms = [
  { name: 'Upwork', color: '#14a800' },
  { name: 'Fiverr', color: '#1dbf73' },
  { name: 'Freelancer', color: '#0e76bc' },
  { name: 'LinkedIn', color: '#0077B5' },
  { name: 'Toptal', color: '#204ECF' },
  { name: 'Workana', color: '#24B89D' },
];

/* Concentric spinning ring - exact CreatorHero pattern */
const SpinningRing = ({ size, duration, reverse = false, accent = false }: {
  size: number; duration: number; reverse?: boolean; accent?: boolean;
}) => (
  <div className="ring-container" style={{ width: size, height: size }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size}
      fill="none"
      className="max-w-none"
      style={{
        animation: `ring-spin ${duration}s linear infinite`,
        animationDirection: reverse ? 'reverse' : 'normal',
      }}
    >
      <circle cx={size/2} cy={size/2} r={size/2 - 1} stroke="#0B1537" strokeWidth="1" />
      {accent && (
        <>
          <path
            d={`M ${size * 0.07} ${size * 0.75} A ${size/2 - 1} ${size/2 - 1} 0 0 1 ${size * 0.01} ${size * 0.48}`}
            stroke="url(#accent-a)" strokeWidth="2" strokeLinecap="round"
          />
          <path
            d={`M ${size * 0.96} ${size * 0.69} A ${size/2 - 1} ${size/2 - 1} 0 0 0 ${size * 0.83} ${size * 0.88}`}
            stroke="url(#accent-b)" strokeWidth="2" strokeLinecap="round"
          />
          <defs>
            <linearGradient id="accent-a" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#0057FF" stopOpacity="0" />
              <stop offset="0.885" stopColor="#0057FF" />
              <stop offset="1" stopColor="#00E0FF" />
            </linearGradient>
            <linearGradient id="accent-b" x1="1" y1="0" x2="0" y2="1">
              <stop stopColor="#513CFF" stopOpacity="0" />
              <stop offset="0.78" stopColor="#1B00FF" />
              <stop offset="1" stopColor="#6037ff" />
            </linearGradient>
          </defs>
        </>
      )}
    </svg>
  </div>
);

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-0">
      <div className="gradient-separator" />

      {/* Hero wrapper - exact CreatorHero rounded-[45px] container */}
      <div className="hero-wrapper" style={{ paddingTop: 90 }}>
        <div className="herotop" />
        <div className="hero-border" />
        <div className="hero-box" />

        {/* Spinning concentric circles - exact CreatorHero */}
        <div className="hero-circles" style={{ opacity: 0, animation: 'bounce-in 1s ease forwards' }}>
          <SpinningRing size={1289} duration={13} accent />
          <SpinningRing size={1081} duration={8} />
          <SpinningRing size={874} duration={10} />
          <SpinningRing size={600} duration={6} reverse />
          <SpinningRing size={600} duration={7} reverse />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-6" style={{ paddingTop: 60, paddingBottom: 80 }}>
          <div className="text-center max-w-5xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B1537]/80 border border-[#243969]/40 mb-8"
              style={{ boxShadow: 'inset 0 0 15px 0 rgba(20,36,73,0.5)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]" />
              </span>
              <span className="text-sm font-medium text-gray-300">AI-Powered Freelancer Growth Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.05]"
            >
              <span className="gradient-text">Supercharge Your</span>
              <br />
              <span style={{
                backgroundImage: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Freelance Growth
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-[#8a9cc7] mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              You handle building. We handle branding, getting you clients, and automating everything else. AI proposals, invoicing, contracts, job applications — all on autopilot.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5"
            >
              <button className="button button-primary text-lg px-10 py-5" style={{ borderRadius: 45 }} onClick={onOpenBooking}>
                Start Free Trial <ArrowRight className="w-5 h-5 inline ml-1" />
              </button>
              <button className="button button-secondary text-lg" style={{ borderRadius: 45 }} onClick={() => scrollTo('how-it-works')}>
                See How it Works
              </button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="hero-card mx-auto max-w-4xl mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#0f1e40]">
              <Counter from={0} to={12500} label="Freelancers" suffix="+" delay={0.6} />
              <Counter from={0} to={89000} label="Proposals Sent" suffix="+" delay={0.7} />
              <Counter from={0} to={94} label="Win Rate Boost" suffix="%" delay={0.8} />
              <Counter from={0} to={3} label="Min to Apply" suffix="m" delay={0.9} />
            </div>
            <div className="section-glow" />
          </motion.div>

          {/* Platform ticker - exact CreatorHero scroll-left */}
          <div className="relative overflow-hidden py-6">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030814] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030814] to-transparent z-10" />
            <div className="flex animate-scroll-left whitespace-nowrap">
              {[...Array(3)].map((_, si) => (
                <div key={si} className="flex items-center gap-12 px-6 shrink-0">
                  {platforms.map((p, i) => (
                    <div key={`${si}-${i}`} className="flex items-center gap-3 shrink-0">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg" style={{ background: p.color }}>
                        {p.name.charAt(0)}
                      </div>
                      <span className="text-2xl font-bold text-gray-600 hover:text-white transition-colors cursor-default select-none">
                        {p.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};