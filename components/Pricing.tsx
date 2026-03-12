import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

interface PricingProps {
  onOpenBooking?: () => void;
}

export const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/forever",
    description: "For freelancers just getting started. Core tools to land your first clients.",
    features: [
      "3 AI Proposals / month",
      "Basic Time Tracking",
      "1 Platform Connected",
      "Invoice Generator",
      "Email Notifications",
    ],
    highlight: false
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For serious freelancers ready to scale. Unlimited AI and multi-platform power.",
    features: [
      "Unlimited AI Proposals",
      "Auto Job Applications",
      "All Platforms Connected",
      "Advanced Time & Reports",
      "GitHub Integration",
      "Client Priority Tracking",
      "Profile Optimization AI",
      "Daily Client Auto-Updates",
    ],
    highlight: true
  },
  {
    name: "Agency",
    price: "$79",
    period: "/month",
    description: "For freelance teams and agencies managing multiple clients.",
    features: [
      "Everything in Pro",
      "5 Team Members",
      "Team Analytics Dashboard",
      "Custom AI Training",
      "White-label Reports",
      "Priority Support",
      "API Access",
    ],
    highlight: false
  }
];

export const Pricing: React.FC<PricingProps> = ({ onOpenBooking }) => {
  return (
    <Section className="bg-[#030814] relative" id="pricing">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #6037ff 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Choose Your{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)' }}>Growth Plan</span>
            </h2>
            <p className="text-[#8a9cc7] text-lg">Start free. Upgrade when you're making money. Cancel anytime.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-[35px] p-8 border ${
                plan.highlight
                  ? 'bg-[#0B1537]/80 border-[#6037ff]/50 shadow-[inset_0_0_43px_0_rgba(20,36,73,0.5),0_0_40px_rgba(96,55,255,0.15)] md:scale-105 z-10'
                  : 'bg-[#060d24]/80 border-[#243969]/25 hover:border-[#243969]/50 shadow-[inset_0_0_25px_0_rgba(20,36,73,0.3)]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider" style={{ background: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)' }}>
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-[#6e89ff]/50 text-sm h-10 mb-6">{plan.description}</p>

              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-[#6e89ff]/40 ml-2">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${plan.highlight ? 'bg-[#6037ff]/20 text-[#6037ff]' : 'bg-[#243969]/30 text-[#6e89ff]/60'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                variant={plan.highlight ? 'primary' : 'secondary'}
                className="w-full"
                onClick={onOpenBooking}
              >
                {plan.price === "$0" ? "Start Free" : `Choose ${plan.name}`}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[#6e89ff]/40 text-sm">
            Need a custom plan for your team? <button onClick={onOpenBooking} className="text-[#6037ff] underline underline-offset-4 hover:text-[#00F0FF] transition-colors">Contact us</button> for enterprise pricing.
          </p>
        </div>
      </div>
    </Section>
  );
};