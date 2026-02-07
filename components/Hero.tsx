import React, { useEffect, useRef, useState } from 'react';
import { motion, animate, useInView } from 'framer-motion';
import { ArrowRight, PlayCircle, ShieldCheck, Zap, Users, Terminal, Layers, Clock, Activity, GitCommit, CheckCircle2 } from 'lucide-react';
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
    <div ref={ref} className="flex flex-col items-center justify-center p-4 md:p-6 bg-[#0b0b0b]/80 backdrop-blur-md border border-white/10 rounded-2xl hover:border-red-500/30 transition-all group hover:-translate-y-1">
      <div className="mb-3 p-3 bg-white/5 rounded-full text-gray-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
        <Icon className="w-5 h-5 md:w-6 md:h-6" />
      </div>
      <div className="flex items-baseline gap-1 mb-1">
        <span ref={nodeRef} className="text-3xl md:text-4xl font-bold text-white tabular-nums">{from}</span>
        <span className="text-xl md:text-2xl font-bold text-red-500">{suffix}</span>
      </div>
      <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider">{label}</p>
    </div>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activityFeed = [
    { user: "Sarah J.", action: "deployed to production", time: "2m ago", status: "success" },
    { user: "Alex R.", action: "completed ticket DEV-429", time: "15m ago", status: "success" },
    { user: "System", action: "automated tests passed", time: "16m ago", status: "success" },
    { user: "Mike C.", action: "pushed to main", time: "1h ago", status: "neutral" },
  ];

  return (
    <Section className="min-h-screen flex items-center justify-center overflow-hidden pt-32 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
            backgroundSize: '50px 50px' 
          }} 
        />
        
        {/* Moving Blobs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-red-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.3, 1] 
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-600/5 rounded-full blur-[100px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0b0b0b] border border-red-500/20 mb-8 shadow-lg shadow-black/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-300">Accepting new clients for Q4 2024</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-[1.1]"
          >
            Hire a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Dev Squad</span>,<br /> Not a Freelancer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Stop gambling on freelancer marketplaces. Get a pre-vetted, high-performance engineering team that ships code, not excuses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button 
              variant="primary" 
              className="w-full sm:w-auto text-lg"
              onClick={onOpenBooking}
            >
              Build Your Squad <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="secondary" 
              className="w-full sm:w-auto text-lg"
              onClick={() => scrollTo('how-it-works')}
            >
              <PlayCircle className="w-5 h-5" /> How it Works
            </Button>
          </motion.div>
        </div>

        {/* Live Stats Counter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-20"
        >
          <Counter from={0} to={1420} label="Developers in Pool" suffix="+" icon={Users} delay={0.6} />
          <Counter from={0} to={14} label="Squads Ready Now" icon={Layers} delay={0.7} />
          <Counter from={0} to={98} label="Retention Rate" suffix="%" icon={ShieldCheck} delay={0.8} />
          <Counter from={0} to={48} label="Hours to Deploy" suffix="h" icon={Clock} delay={0.9} />
        </motion.div>

        {/* Dashboard Preview / Service Demo */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-6xl mx-auto mb-20"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur opacity-20"></div>
          <div className="relative bg-[#0b0b0b] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            {/* Mock Browser Header */}
            <div className="h-10 bg-[#0F0F0F] border-b border-white/5 flex items-center px-4 gap-2 justify-between">
              <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              <div className="h-6 w-96 bg-white/5 rounded-md text-[10px] flex items-center justify-center text-gray-500 font-mono border border-white/5">
                <span className="text-green-500 mr-2">🔒</span> app.devsquad.io/dashboard/velocity
              </div>
              <div className="w-20"></div>
            </div>
            
            {/* Dashboard Content Mockup */}
            <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#090909]">
              {/* Main Chart Section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="h-64 bg-[#0F0F0F] rounded-xl border border-white/5 p-6 relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-6">
                     <div>
                        <div className="text-sm text-gray-400 mb-1">Sprint Velocity</div>
                        <div className="text-3xl font-bold text-white flex items-center gap-3">
                            124 Points 
                            <span className="text-sm font-medium px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full border border-green-500/20">+12%</span>
                        </div>
                     </div>
                     <Zap className="w-6 h-6 text-red-500" />
                  </div>
                  
                  {/* Animated Bars */}
                  <div className="flex items-end gap-3 h-32 w-full mt-4">
                    {[40, 65, 45, 80, 55, 90, 100].map((height, i) => (
                        <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                            className={`flex-1 rounded-t-sm ${i === 6 ? 'bg-gradient-to-t from-red-600 to-orange-600' : 'bg-white/5 hover:bg-white/10 transition-colors'}`}
                        />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="h-32 bg-[#0F0F0F] rounded-xl border border-white/5 p-5 flex flex-col justify-between hover:border-red-500/20 transition-colors">
                     <div className="flex justify-between">
                        <ShieldCheck className="w-6 h-6 text-gray-400" />
                        <span className="text-xs text-green-500 font-mono">PASSING</span>
                     </div>
                     <div>
                       <div className="text-2xl font-bold text-white">99.9%</div>
                       <div className="text-xs text-gray-500">Uptime SLA</div>
                     </div>
                  </div>
                  <div className="h-32 bg-[#0F0F0F] rounded-xl border border-white/5 p-5 flex flex-col justify-between hover:border-red-500/20 transition-colors">
                     <div className="flex justify-between">
                        <GitCommit className="w-6 h-6 text-orange-500" />
                        <span className="text-xs text-gray-500 font-mono">TODAY</span>
                     </div>
                     <div>
                       <div className="text-2xl font-bold text-white">47</div>
                       <div className="text-xs text-gray-500">Commits Pushed</div>
                     </div>
                  </div>
                </div>
              </div>
              
              {/* Live Activity Feed */}
              <div className="bg-[#0F0F0F] rounded-xl border border-white/5 p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 mb-6">
                    <Activity className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Live Activity</span>
                    <span className="ml-auto w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                </div>
                
                <div className="space-y-6 relative">
                  {/* Timeline Line */}
                  <div className="absolute left-2.5 top-2 bottom-2 w-px bg-white/10"></div>

                  {activityFeed.map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + (i * 0.2) }}
                        className="flex gap-4 relative"
                    >
                      <div className={`w-5 h-5 rounded-full border-4 border-[#0F0F0F] z-10 flex-shrink-0 ${item.status === 'success' ? 'bg-green-500' : 'bg-gray-500'}`} />
                      <div>
                        <div className="text-sm text-gray-300">
                            <span className="font-bold text-white">{item.user}</span> {item.action}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">{item.time}</div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 2.5 }}
                     className="flex gap-4 relative"
                   >
                     <div className="w-5 h-5 rounded-full border-4 border-[#0F0F0F] bg-white/20 z-10 flex-shrink-0 animate-pulse" />
                     <div className="text-xs text-gray-500 italic mt-1">Squad is coding...</div>
                  </motion.div>
                </div>

                <div className="mt-auto pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                             {[1,2,3].map(i => (
                                 <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-[#0F0F0F]" />
                             ))}
                        </div>
                        <span className="text-xs text-gray-400">3 Members Online</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Animated Trusted By Ticker */}
        <div className="mt-20 pt-10 border-t border-white/5 overflow-hidden">
            <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-widest font-semibold">Trusted by innovative teams</p>
            
            <div className="relative flex overflow-x-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#000000] to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#000000] to-transparent z-10"></div>

                <div className="animate-scroll flex space-x-16 whitespace-nowrap">
                   {[...Array(2)].map((_, setIndex) => (
                      <div key={setIndex} className="flex space-x-16">
                         {['Acme Corp', 'GlobalTech', 'Nebula', 'Vertex', 'Oasis', 'Quantico', 'Synergy', 'Hyperion', 'Zenith', 'Apex'].map((brand, i) => (
                           <span key={`${setIndex}-${i}`} className="text-2xl font-bold text-gray-700 hover:text-white transition-colors cursor-default select-none">
                             {brand}
                           </span>
                         ))}
                      </div>
                   ))}
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};