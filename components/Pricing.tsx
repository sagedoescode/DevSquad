import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

interface PricingProps {
    onOpenBooking?: () => void;
}

export const plans = [
  {
    name: "Starter Squad",
    price: "$9,500",
    period: "/month",
    description: "Perfect for MVPs and early-stage startups needing to ship v1.0.",
    features: [
      "1 Senior Full-Stack Dev",
      "1 Mid-Level Developer",
      "Part-time Project Manager",
      "Shared QA Engineer",
      "Slack & Jira Integration",
      "Weekly Sprints"
    ],
    highlight: false
  },
  {
    name: "Growth Squad",
    price: "$18,500",
    period: "/month",
    description: "For scale-ups that need to iterate fast and handle technical debt.",
    features: [
      "1 Lead Engineer (Architect)",
      "2 Senior Developers",
      "Dedicated Project Manager",
      "Dedicated QA Engineer",
      "DevOps Support",
      "Daily Standups",
      "24/7 Monitoring"
    ],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Full engineering departments for established companies.",
    features: [
      "Multiple Squads",
      "CTO-level Consultation",
      "Custom Security Compliance",
      "SLA Guarantees",
      "On-premise Deployment",
      "Dedicated Account Manager"
    ],
    highlight: false
  }
];

export const Pricing: React.FC<PricingProps> = ({ onOpenBooking }) => {
  const handleBooking = () => {
      if (onOpenBooking) {
          onOpenBooking();
      } else {
          // Fallback if needed
          const element = document.getElementById('contact');
          if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
          }
      }
  };

  return (
    <Section className="bg-[#000000] relative" id="pricing">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent <span className="text-red-500">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg">
            No recruitment fees, no payroll taxes, no benefits to manage. Just a flat monthly rate for a high-performance team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl p-8 border ${
                plan.highlight 
                  ? 'bg-[#0b0b0b] border-red-600 shadow-[0_0_50px_rgba(220,38,38,0.2)] md:scale-105 z-10' 
                  : 'bg-[#050505] border-white/5 hover:border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm h-10 mb-6">{plan.description}</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500 ml-2">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${plan.highlight ? 'bg-red-600/20 text-red-500' : 'bg-white/10 text-gray-400'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.highlight ? 'primary' : 'secondary'} 
                className="w-full"
                onClick={handleBooking}
              >
                Choose {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
                Need a custom configuration? <button onClick={handleBooking} className="text-red-500 underline underline-offset-4 hover:text-red-400">Talk to sales</button> for a bespoke quote.
            </p>
        </div>
      </div>
    </Section>
  );
};