import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle, AlertOctagon, Check, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';
import { plans } from './Pricing';

interface OrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderData: any;
}

export const OrdersModal: React.FC<OrdersModalProps> = ({ isOpen, onClose, orderData }) => {
  const [status, setStatus] = useState<'analyzing' | 'approved' | 'rejected'>('analyzing');
  const [progress, setProgress] = useState(0);
  const [analysisText, setAnalysisText] = useState("Initializing AI evaluation...");

  useEffect(() => {
    if (isOpen) {
      setStatus('analyzing');
      setProgress(0);
      
      const sequence = async () => {
        // Step 1: Initialize
        setAnalysisText("Connecting to DevSquad Core...");
        await new Promise(r => setTimeout(r, 1000));
        setProgress(20);

        // Step 2: Check Squad
        setAnalysisText("Checking Squad availability...");
        await new Promise(r => setTimeout(r, 1500));
        setProgress(50);

        // Step 3: Analyze Budget & Complexity
        setAnalysisText("Analyzing budget vs. complexity requirements...");
        await new Promise(r => setTimeout(r, 2000));
        setProgress(80);

        // Final Decision
        await new Promise(r => setTimeout(r, 1000));
        setProgress(100);

        // Logic: Reject if budget is lowest tier, else approve
        if (orderData?.budget === "5-10k") {
            setStatus('rejected');
        } else {
            setStatus('approved');
        }
      };

      sequence();
    }
  }, [isOpen, orderData]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-5xl bg-[#0b0b0b] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh]"
      >
        <div className="flex items-center justify-between p-6 border-b border-white/5 bg-[#0b0b0b]">
           <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
             <h2 className="text-xl font-bold text-white">Order Status: <span className="text-gray-400">#{Math.floor(Math.random() * 10000)}</span></h2>
           </div>
           <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar relative">
            <AnimatePresence mode="wait">
                {status === 'analyzing' && (
                    <motion.div 
                        key="analyzing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                    >
                        <div className="relative w-32 h-32 mb-8">
                             <div className="absolute inset-0 rounded-full border-4 border-white/5"></div>
                             <div className="absolute inset-0 rounded-full border-4 border-red-600 border-t-transparent animate-spin"></div>
                             <div className="absolute inset-0 flex items-center justify-center">
                                 <span className="text-2xl font-bold text-white">{progress}%</span>
                             </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Evaluating Project</h3>
                        <p className="text-gray-400 font-mono">{analysisText}</p>
                    </motion.div>
                )}

                {status === 'approved' && (
                    <motion.div
                        key="approved"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col items-center justify-center h-full min-h-[400px] text-center"
                    >
                        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                            <CheckCircle className="w-12 h-12 text-green-500" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Request Approved!</h3>
                        <p className="text-gray-400 max-w-md mx-auto mb-8">
                            Great news! Your budget and requirements align with our current squad availability. A dedicated Project Manager has been assigned.
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 w-full max-w-lg mb-8 text-left">
                            <h4 className="text-gray-500 text-sm uppercase tracking-wider mb-4">Next Steps</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-white">
                                    <Check className="w-4 h-4 text-green-500" /> Sign MSA (Master Service Agreement) sent to email.
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <Check className="w-4 h-4 text-green-500" /> Schedule kickoff call (Link in email).
                                </li>
                                <li className="flex items-center gap-3 text-white">
                                    <Check className="w-4 h-4 text-green-500" /> Deposit first month via Stripe.
                                </li>
                            </ul>
                        </div>
                        <Button onClick={onClose}>Go to Dashboard</Button>
                    </motion.div>
                )}

                {status === 'rejected' && (
                    <motion.div
                        key="rejected"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col h-full"
                    >
                        <div className="text-center mb-12">
                            <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-500/20">
                                <AlertOctagon className="w-8 h-8 text-red-500" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">Budget Alignment Issue</h3>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Based on your selected budget of <span className="text-white font-bold">{orderData?.budget}</span>, we cannot allocate a full squad. Our high-performance squads start at $9,500/mo to ensure top-tier talent and velocity.
                            </p>
                            <p className="text-white mt-4 font-medium">Please select a plan that fits your needs:</p>
                        </div>

                        {/* Pricing Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {plans.map((plan, idx) => (
                                <div
                                key={idx}
                                className={`relative rounded-xl p-6 border flex flex-col ${
                                    plan.highlight 
                                    ? 'bg-[#0b0b0b] border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.1)]' 
                                    : 'bg-[#050505] border-white/5 opacity-75 hover:opacity-100 transition-opacity'
                                }`}
                                >
                                <h3 className="text-lg font-bold text-white mb-1">{plan.name}</h3>
                                <div className="flex items-baseline mb-4">
                                    <span className="text-2xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-500 ml-1 text-sm">{plan.period}</span>
                                </div>

                                <div className="space-y-3 mb-6 flex-1">
                                    {plan.features.slice(0, 4).map((feature, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className={`p-0.5 rounded-full ${plan.highlight ? 'bg-red-600/20 text-red-500' : 'bg-white/10 text-gray-400'}`}>
                                        <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-gray-300 text-xs">{feature}</span>
                                    </div>
                                    ))}
                                    {plan.features.length > 4 && <div className="text-xs text-gray-500 italic">and more...</div>}
                                </div>

                                <Button 
                                    variant={plan.highlight ? 'primary' : 'secondary'} 
                                    className="w-full !py-2 !text-sm"
                                    onClick={() => window.open('https://calendly.com', '_blank')}
                                >
                                    Select & Book Call
                                </Button>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};