import React, { useEffect, useRef } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { ArrowRight, Zap, Users, Clock, TrendingUp, Bot, FileText, BriefcaseBusiness } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

interface HeroProps {
  onOpenBooking?: () => void;
}

const Counter = ({ from, to, label, suffix = "", icon: Icon, delay = 0 }: { from: number, to: number, label: string, suffix?: string, icon: any, delay?: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: 2.5,
        delay: delay,
        ease: "easeOut",
        onUpdate: (value) => {
          if (node) node.textContent = Math.floor(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [from, to, isInView, delay]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-4 md:p-6 bg-[#0B1537]/60 backdrop-blur-md border border-[#243969]/30 rounded-[25px] shadow-[inset_0_0_25px_0_rgba(20,36,73,0.5)] hover:border-[#6037ff]/30 transition-all group hover:-translate-y-1">
      <div className="mb-3 p-3 rounded-full text-[#6e89ff] group-hover:text-white transition-all duration-300" style={{ background: 'radial-gradient(circle farthest-corner at 54% 40%, rgba(96,55,255,0.2), rgba(0,87,255,0.1))' }}>
        <Icon className="w-5 h-5 md:w-6 md:h-6" />
      </div>
      <div className="flex items-baseline gap-1 mb-1">
        <span ref={nodeRef} className="text-3xl md:text-4xl font-bold text-white tabular-nums">{from}</span>
        <span className="text-xl md:text-2xl font-bold text-[#6037ff]">{suffix}</span>
      </div>
      <p className="text-[#6e89ff]/70 text-xs md:text-sm font-medium uppercase tracking-wider">{label}</p>
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

const PlatformTicker = () => (
  <div className="relative overflow-hidden py-6">
    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030814] to-transparent z-10" />
    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030814] to-transparent z-10" />
    <div className="flex animate-scroll">
      {[...Array(4)].map((_, setIndex) => (
        <div key={setIndex} className="flex items-center gap-12 px-6 shrink-0">
          {platforms.map((platform, i) => (
            <div key={`${setIndex}-${i}`} className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg" style={{ background: platform.color }}>
                {platform.name.charAt(0)}
              </div>
              <span className="text-2xl font-bold text-gray-600 hover:text-white transition-colors cursor-default select-none whitespace-nowrap">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section className="min-h-screen flex items-center justify-center overflow-hidden pt-32 relative">
      {/* CreatorHero-style animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep radial glow - top */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full opacity-30"
          style={{ background: 'radial-gradient(ellipse at center, rgba(96,55,255,0.3) 0%, rgba(0,87,255,0.1) 40%, transparent 70%)' }}
        />

        {/* Moving accent blobs */}
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[20%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, #6037ff 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[10%] right-[15%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
          style={{ background: 'radial-gradient(circle, #0057ff 0%, transparent 70%)' }}
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[35px] bg-[#0B1537]/80 border border-[#243969]/40 mb-8 shadow-[inset_0_0_15px_0_rgba(20,36,73,0.5)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">AI-Powered Freelancer Growth Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white mb-8 leading-[1.05]"
          >
            Supercharge Your{' '}
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)' }}>
              Freelance
            </span>{' '}
            Growth
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
            <Button variant="primary" className="w-full sm:w-auto text-lg !px-10 !py-5 !rounded-[45px]" onClick={onOpenBooking}>
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto text-lg !rounded-[45px]" onClick={() => scrollTo('how-it-works')}>
              See How it Works
            </Button>
          </motion.div>
        </div>

        {/* Stats Counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-20"
        >
          <Counter from={0} to={12500} label="Freelancers" suffix="+" icon={Users} delay={0.6} />
          <Counter from={0} to={89000} label="Proposals Sent" suffix="+" icon={FileText} delay={0.7} />
          <Counter from={0} to={94} label="Win Rate Boost" suffix="%" icon={TrendingUp} delay={0.8} />
          <Counter from={0} to={3} label="Min to Apply" suffix="m" icon={Clock} delay={0.9} />
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-6xl mx-auto mb-20"
        >
          {/* Glow behind card */}
          <div className="absolute -inset-1 rounded-[35px] blur opacity-20" style={{ background: 'radial-gradient(circle farthest-corner at 50% 100%, #6037ff, #0057ff)' }} />

          <div className="relative bg-[#060d24] border border-[#243969]/40 rounded-[35px] overflow-hidden shadow-[inset_0_0_43px_0_rgba(20,36,73,0.5)]">
            {/* Browser chrome */}
            <div className="h-10 bg-[#0B1537] border-b border-[#243969]/30 flex items-center px-4 gap-2 justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#6037ff]/30" />
                <div className="w-3 h-3 rounded-full bg-[#0057ff]/30" />
                <div className="w-3 h-3 rounded-full bg-[#00F0FF]/30" />
              </div>
              <div className="h-6 w-96 bg-[#0B1537] rounded-lg text-[10px] flex items-center justify-center text-[#6e89ff]/50 font-mono border border-[#243969]/30">
                <span className="text-[#00F0FF] mr-2">🔒</span> app.getlure.io/dashboard
              </div>
              <div className="w-20" />
            </div>

            {/* Dashboard mockup */}
            <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#050a1d]">
              <div className="lg:col-span-2 space-y-6">
                {/* Proposals chart */}
                <div className="h-64 bg-[#0B1537]/60 rounded-[25px] border border-[#243969]/30 p-6 relative overflow-hidden shadow-[inset_0_0_25px_0_rgba(20,36,73,0.3)]">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="text-sm text-[#6e89ff]/60 mb-1">Proposals This Week</div>
                      <div className="text-3xl font-bold text-white flex items-center gap-3">
                        47 Sent
                        <span className="text-sm font-medium px-2 py-0.5 bg-[#00F0FF]/10 text-[#00F0FF] rounded-full border border-[#00F0FF]/20">+34%</span>
                      </div>
                    </div>
                    <Bot className="w-6 h-6 text-[#6037ff]" />
                  </div>
                  <div className="flex items-end gap-3 h-32 w-full mt-4">
                    {[35, 55, 40, 75, 60, 85, 100].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        className={`flex-1 rounded-t-md ${i === 6 ? '' : 'bg-[#243969]/40 hover:bg-[#243969]/60 transition-colors'}`}
                        style={i === 6 ? { background: 'radial-gradient(circle farthest-corner at 50% 0%, #6037ff, #0057ff)' } : undefined}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="h-32 bg-[#0B1537]/60 rounded-[25px] border border-[#243969]/30 p-5 flex flex-col justify-between shadow-[inset_0_0_15px_0_rgba(20,36,73,0.3)] hover:border-[#6037ff]/20 transition-colors">
                    <div className="flex justify-between">
                      <BriefcaseBusiness className="w-6 h-6 text-[#6e89ff]/60" />
                      <span className="text-xs text-[#00F0FF] font-mono">ACTIVE</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">12</div>
                      <div className="text-xs text-[#6e89ff]/50">Active Clients</div>
                    </div>
                  </div>
                  <div className="h-32 bg-[#0B1537]/60 rounded-[25px] border border-[#243969]/30 p-5 flex flex-col justify-between shadow-[inset_0_0_15px_0_rgba(20,36,73,0.3)] hover:border-[#6037ff]/20 transition-colors">
                    <div className="flex justify-between">
                      <TrendingUp className="w-6 h-6 text-[#01FFC2]" />
                      <span className="text-xs text-[#01FFC2] font-mono">THIS MONTH</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">$14,200</div>
                      <div className="text-xs text-[#6e89ff]/50">Revenue Earned</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Activity Feed */}
              <div className="bg-[#0B1537]/60 rounded-[25px] border border-[#243969]/30 p-6 flex flex-col h-full shadow-[inset_0_0_25px_0_rgba(20,36,73,0.3)]">
                <div className="flex items-center gap-2 mb-6">
                  <Bot className="w-4 h-4 text-[#6037ff]" />
                  <span className="text-sm font-bold text-white uppercase tracking-wider">AI Activity</span>
                  <span className="ml-auto w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                </div>
                <div className="space-y-5 relative">
                  <div className="absolute left-2.5 top-2 bottom-2 w-px bg-[#243969]/30" />
                  {[
                    { action: "Auto-applied to 3 Upwork jobs", time: "2m ago", color: "bg-[#14a800]" },
                    { action: "Sent daily update to @Sarah", time: "15m ago", color: "bg-[#6037ff]" },
                    { action: "Generated invoice #1042", time: "1h ago", color: "bg-[#00F0FF]" },
                    { action: "Optimized Fiverr profile bio", time: "3h ago", color: "bg-[#1dbf73]" },
                  ].map((item, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + (i * 0.2) }} className="flex gap-4 relative">
                      <div className={`w-5 h-5 rounded-full border-4 border-[#0B1537] z-10 flex-shrink-0 ${item.color}`} />
                      <div>
                        <div className="text-sm text-gray-300">{item.action}</div>
                        <div className="text-xs text-[#6e89ff]/40 mt-1">{item.time}</div>
                      </div>
                    </motion.div>
                  ))}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="flex gap-4 relative">
                    <div className="w-5 h-5 rounded-full border-4 border-[#0B1537] bg-white/20 z-10 flex-shrink-0 animate-pulse" />
                    <div className="text-xs text-[#6e89ff]/40 italic mt-1">AI is working...</div>
                  </motion.div>
                </div>

                <div className="mt-auto pt-6 border-t border-[#243969]/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: 'radial-gradient(circle farthest-corner at 54% 40%, #6037ff, #0057ff)' }}>AI</div>
                    <span className="text-xs text-[#6e89ff]/50">Lure AI • Always Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Platform Ticker */}
        <div className="mt-20 pt-10 border-t border-[#243969]/20 overflow-hidden">
          <p className="text-center text-sm text-[#6e89ff]/40 mb-8 uppercase tracking-widest font-semibold">Works with all major platforms</p>
          <PlatformTicker />
        </div>
      </div>
    </Section>
  );
};