import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Check, Sparkles, Briefcase, Bot, Rocket } from 'lucide-react';
import { Button } from './ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const platforms = [
  { name: 'Upwork', color: '#14a800' },
  { name: 'Fiverr', color: '#1dbf73' },
  { name: 'Freelancer', color: '#0e76bc' },
  { name: 'LinkedIn', color: '#0077B5' },
  { name: 'Toptal', color: '#204ECF' },
  { name: 'Workana', color: '#24B89D' },
];

const goals = [
  { label: 'Get more clients', icon: Briefcase },
  { label: 'Automate proposals', icon: Bot },
  { label: 'Track time & invoicing', icon: Sparkles },
  { label: 'Scale my income', icon: Rocket },
];

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  if (!isOpen) return null;

  const togglePlatform = (name: string) => {
    setSelectedPlatforms(prev => prev.includes(name) ? prev.filter(p => p !== name) : [...prev, name]);
  };

  const toggleGoal = (label: string) => {
    setSelectedGoals(prev => prev.includes(label) ? prev.filter(g => g !== label) : [...prev, label]);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-xl bg-[#0B1537] border border-[#243969]/40 rounded-[35px] shadow-[0_0_60px_rgba(0,0,0,0.5),inset_0_0_43px_0_rgba(20,36,73,0.5)] overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#243969]/20">
          <div>
            <h2 className="text-xl font-bold text-white">Get Started Free</h2>
            <div className="flex items-center gap-2 text-sm text-[#6e89ff]/40 mt-1">
              <span className={step >= 1 ? "text-[#6037ff] font-medium" : ""}>01. You</span>
              <ChevronRight className="w-3 h-3" />
              <span className={step >= 2 ? "text-[#6037ff] font-medium" : ""}>02. Platforms</span>
              <ChevronRight className="w-3 h-3" />
              <span className={step >= 3 ? "text-[#6037ff] font-medium" : ""}>03. Goals</span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-[#6e89ff]/40 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm text-[#6e89ff]/60">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-[#060d24] border border-[#243969]/40 rounded-[15px] px-4 py-3 text-white focus:outline-none focus:border-[#6037ff] transition-colors"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#6e89ff]/60">Email</label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full bg-[#060d24] border border-[#243969]/40 rounded-[15px] px-4 py-3 text-white focus:outline-none focus:border-[#6037ff] transition-colors"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-[#6e89ff]/60">Password</label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full bg-[#060d24] border border-[#243969]/40 rounded-[15px] px-4 py-3 text-white focus:outline-none focus:border-[#6037ff] transition-colors"
                    value={formData.password}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Which platforms do you use?</h3>
                  <p className="text-sm text-[#6e89ff]/40 mb-4">Select all that apply. You can add more later.</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {platforms.map(p => (
                    <button
                      key={p.name}
                      onClick={() => togglePlatform(p.name)}
                      className={`flex items-center gap-3 p-4 rounded-[20px] border transition-all ${
                        selectedPlatforms.includes(p.name)
                          ? 'bg-[#6037ff]/10 border-[#6037ff]/40 shadow-[0_0_15px_rgba(96,55,255,0.2)]'
                          : 'bg-[#060d24]/60 border-[#243969]/30 hover:border-[#243969]/60'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm" style={{ background: p.color }}>
                        {p.name.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-white">{p.name}</span>
                      {selectedPlatforms.includes(p.name) && <Check className="w-4 h-4 text-[#6037ff] ml-auto" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">What's your main goal?</h3>
                  <p className="text-sm text-[#6e89ff]/40 mb-4">We'll customize your dashboard based on this.</p>
                </div>
                <div className="space-y-3">
                  {goals.map(g => (
                    <button
                      key={g.label}
                      onClick={() => toggleGoal(g.label)}
                      className={`w-full flex items-center gap-4 p-5 rounded-[20px] border transition-all text-left ${
                        selectedGoals.includes(g.label)
                          ? 'bg-[#6037ff]/10 border-[#6037ff]/40 shadow-[0_0_15px_rgba(96,55,255,0.2)]'
                          : 'bg-[#060d24]/60 border-[#243969]/30 hover:border-[#243969]/60'
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#6e89ff]" style={{ background: 'radial-gradient(circle farthest-corner at 54% 40%, rgba(96,55,255,0.15), rgba(0,87,255,0.08))' }}>
                        <g.icon className="w-5 h-5" />
                      </div>
                      <span className="text-white font-medium">{g.label}</span>
                      {selectedGoals.includes(g.label) && <Check className="w-5 h-5 text-[#6037ff] ml-auto" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#243969]/20 flex justify-between">
          <Button variant="ghost" onClick={step === 1 ? onClose : () => setStep(s => s - 1)}>
            {step === 1 ? 'Cancel' : <><ChevronLeft className="w-4 h-4" /> Back</>}
          </Button>
          <Button
            variant="primary"
            onClick={step === 3 ? onClose : () => setStep(s => s + 1)}
            className="px-8"
          >
            {step === 3 ? (
              <>Launch Dashboard <Rocket className="w-4 h-4" /></>
            ) : (
              <>Next <ChevronRight className="w-4 h-4" /></>
            )}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};