import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, ChevronLeft, Upload, Mic, Video, Check, Users, Cpu, Lock, UserPlus } from 'lucide-react';
import { Button } from './ui/Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const categories = ['Web App', 'Mobile App', 'AI/ML', 'E-commerce', 'SaaS Platform'];

const availableSquads = [
  {
    id: 1,
    name: "Alpha Squad",
    category: "Web App",
    members: 4,
    stack: ["React", "Node.js", "AWS"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=100&q=80",
    status: "Available Now"
  },
  {
    id: 2,
    name: "Beta Mobile",
    category: "Mobile App",
    members: 3,
    stack: ["React Native", "Firebase"],
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=100&q=80",
    status: "Available in 2 days"
  },
  {
    id: 3,
    name: "Data Force",
    category: "AI/ML",
    members: 5,
    stack: ["Python", "TensorFlow", "GCP"],
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=100&q=80",
    status: "Available Now"
  },
  {
    id: 4,
    name: "Commerce Pro",
    category: "E-commerce",
    members: 4,
    stack: ["Next.js", "Shopify", "Stripe"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=100&q=80",
    status: "Available Now"
  },
  {
    id: 5,
    name: "SaaS Scale",
    category: "SaaS Platform",
    members: 6,
    stack: ["Go", "React", "Kubernetes"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=100&q=80",
    status: "Available Now"
  }
];

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Web App");
  const [selectedSquad, setSelectedSquad] = useState<number | null>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    description: '',
    password: '',
    confirmPassword: ''
  });

  if (!isOpen) return null;

  const filteredSquads = availableSquads.filter(s => s.category === selectedCategory);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleSubmit = () => {
    // In a real app, validate form data here
    const finalData = {
        ...formData,
        squadId: selectedSquad,
        category: selectedCategory,
        squadName: availableSquads.find(s => s.id === selectedSquad)?.name
    };
    onSubmit(finalData);
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
        className="relative w-full max-w-4xl bg-[#0b0b0b] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#0b0b0b]">
          <div>
            <h2 className="text-xl font-bold text-white">Build Your Squad</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <span className={step >= 1 ? "text-red-500 font-medium" : ""}>01. Info</span>
              <ChevronRight className="w-3 h-3" />
              <span className={step >= 2 ? "text-red-500 font-medium" : ""}>02. Vision</span>
              <ChevronRight className="w-3 h-3" />
              <span className={step >= 3 ? "text-red-500 font-medium" : ""}>03. Squad</span>
              <ChevronRight className="w-3 h-3" />
              <span className={step >= 4 ? "text-red-500 font-medium" : ""}>04. Join</span>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Company Name</label>
                    <input 
                      type="text" 
                      placeholder="Acme Inc."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Monthly Budget</label>
                    <select 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none"
                      value={formData.budget}
                      onChange={e => setFormData({...formData, budget: e.target.value})}
                    >
                      <option value="" className="bg-[#0b0b0b] text-gray-500">Select Range</option>
                      <option value="5-10k" className="bg-[#0b0b0b]">$5,000 - $10,000</option>
                      <option value="10-25k" className="bg-[#0b0b0b]">$10,000 - $25,000</option>
                      <option value="25-50k" className="bg-[#0b0b0b]">$25,000 - $50,000</option>
                      <option value="50k+" className="bg-[#0b0b0b]">$50,000+</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="space-y-4">
                  <label className="text-sm text-gray-400">Tell us about your project</label>
                  <textarea 
                    placeholder="Describe your product vision, target audience, and key features..."
                    rows={6}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-3 block">Attach Context (Optional)</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <button className="flex items-center justify-center gap-3 p-4 rounded-xl border border-dashed border-white/20 hover:border-red-500/50 hover:bg-white/5 transition-all group">
                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
                          <Mic className="w-5 h-5" />
                       </div>
                       <span className="text-sm font-medium text-gray-400 group-hover:text-white">Record Audio</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 p-4 rounded-xl border border-dashed border-white/20 hover:border-red-500/50 hover:bg-white/5 transition-all group">
                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                          <Video className="w-5 h-5" />
                       </div>
                       <span className="text-sm font-medium text-gray-400 group-hover:text-white">Record Video</span>
                    </button>
                    <button className="flex items-center justify-center gap-3 p-4 rounded-xl border border-dashed border-white/20 hover:border-red-500/50 hover:bg-white/5 transition-all group">
                       <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                          <Upload className="w-5 h-5" />
                       </div>
                       <span className="text-sm font-medium text-gray-400 group-hover:text-white">Upload Files</span>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">We accept wireframes, looms, or voice notes.</p>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                 {/* Categories */}
                 <div className="flex flex-wrap gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                          selectedCategory === cat 
                            ? 'bg-red-600 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]' 
                            : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                 </div>

                 {/* Squads List */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
                    {filteredSquads.length > 0 ? (
                      filteredSquads.map(squad => (
                        <div 
                          key={squad.id}
                          onClick={() => setSelectedSquad(squad.id)}
                          className={`p-5 rounded-2xl border cursor-pointer transition-all relative overflow-hidden group ${
                            selectedSquad === squad.id 
                            ? 'bg-[#150505] border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.2)]' 
                            : 'bg-white/5 border-white/10 hover:border-white/20'
                          }`}
                        >
                           {/* Selection Check */}
                           {selectedSquad === squad.id && (
                             <div className="absolute top-4 right-4 text-red-500">
                               <Check className="w-5 h-5" />
                             </div>
                           )}

                           <div className="flex items-center gap-4 mb-4">
                             <img src={squad.image} alt={squad.name} className="w-12 h-12 rounded-lg object-cover bg-gray-800" />
                             <div>
                               <h3 className="font-bold text-white">{squad.name}</h3>
                               <p className="text-xs text-green-400 flex items-center gap-1">
                                 <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                 {squad.status}
                               </p>
                             </div>
                           </div>

                           <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                              <div className="flex items-center gap-1">
                                <Users className="w-4 h-4" /> {squad.members} Members
                              </div>
                              <div className="flex items-center gap-1">
                                <Cpu className="w-4 h-4" /> Senior Level
                              </div>
                           </div>

                           <div className="flex flex-wrap gap-2">
                              {squad.stack.map(tech => (
                                <span key={tech} className="px-2 py-1 bg-white/5 text-xs text-gray-300 rounded border border-white/5">
                                  {tech}
                                </span>
                              ))}
                           </div>
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full py-10 text-center text-gray-500 border border-dashed border-white/10 rounded-2xl">
                         No pre-assembled squads for this category. We can build one custom!
                      </div>
                    )}
                 </div>
              </motion.div>
            )}

            {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                    <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-500/20">
                            <Lock className="w-8 h-8 text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Secure Your Squad</h3>
                        <p className="text-gray-400 text-sm mt-2">Create an account to track your deployment status.</p>
                    </div>

                    <div className="space-y-4 max-w-sm mx-auto">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400">
                                <Users className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Selected Squad</div>
                                <div className="font-bold text-white">
                                    {selectedSquad ? availableSquads.find(s => s.id === selectedSquad)?.name : 'Custom Squad'}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Email Address</label>
                            <input 
                              type="email" 
                              value={formData.email}
                              disabled
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-500 cursor-not-allowed"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Choose Password</label>
                            <input 
                              type="password" 
                              placeholder="••••••••"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                              value={formData.password}
                              onChange={e => setFormData({...formData, password: e.target.value})}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Confirm Password</label>
                            <input 
                              type="password" 
                              placeholder="••••••••"
                              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                              value={formData.confirmPassword}
                              onChange={e => setFormData({...formData, confirmPassword: e.target.value})}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/5 bg-[#0b0b0b] flex justify-between">
          <Button 
            variant="ghost" 
            onClick={step === 1 ? onClose : prevStep}
          >
             {step === 1 ? 'Cancel' : 'Back'}
          </Button>
          
          <Button 
            variant="primary" 
            onClick={step === 4 ? handleSubmit : nextStep}
            className="px-8"
            disabled={step === 3 && !selectedSquad}
          >
            {step === 4 ? (
                <>Create Account & Deploy <UserPlus className="w-4 h-4" /></>
            ) : (
                <>Next Step <ChevronRight className="w-4 h-4" /></>
            )}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};