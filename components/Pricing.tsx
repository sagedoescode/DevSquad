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
    name: "Solo Creator",
    price: "$2,500",
    period: "/month",
    description: "Perfect for rising stars needing elite editing and AI tools.",
    features: [
      "1 Dedicated Video Editor",
      "AI Proposal Engine",
      "AI Workflow Automation",
      "Weekly Strategy Call",
      "Unlimited Revisions",
      "24/7 Slack Support"
    ],
    highlight: false
  },
  {
    name: "Creator Pro",
    price: "$5,500",
    period: "/month",
    description: "For creators scaling across multiple platforms and formats.",
    features: [
      "2 Senior Video Editors",
      "Branding & Authority Strategy",
      "Thumbnail & Graphic Design",
      "Multi-platform Distribution",
      "Analytics Dashboard",
      "Daily Check-ins",
      "Viral Growth Systems"
    ],
    highlight: true
  },
  {
    name: "Growth Squad",
    price: "$12,500",
    period: "/month",
    description: "Full-scale production and growth team for top-tier creators.",
    features: [
      "Full Production Squad",
      "Automated Client Acquisition",
      "Custom AI Tools Build",
      "Sponsorship Management",
      "Legal & Contract Support",
      "Priority 1h Response",
      "Global Talent Access"
    ],
    highlight: false
  },
  {
    name: "Empire",
    price: "Custom",
    period: "",
    description: "Bespoke solutions for creator-led businesses and agencies.",
    features: [
      "Multiple Dedicated Squads",
      "Full Business Management",
      "Custom Tech Infrastructure",
      "Revenue Share Models",
      "IP Protection & Strategy",
      "Dedicated Account Director"
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-insta-gradient">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg">
            No recruitment fees, no payroll taxes, no benefits to manage. Just a flat monthly rate for a high-performance creator team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative rounded-2xl p-6 border flex flex-col ${
                plan.highlight 
                  ? 'bg-[#0b0b0b] border-brand-primary shadow-[0_0_50px_rgba(204,35,102,0.2)] lg:scale-105 z-10' 
                  : 'bg-[#050505] border-white/5 hover:border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-insta-gradient text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm h-12 mb-6">{plan.description}</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500 ml-2 text-sm">{plan.period}</span>
              </div>

              <div className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full flex-shrink-0 ${plan.highlight ? 'bg-brand-primary/20 text-brand-primary' : 'bg-white/10 text-gray-400'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-gray-300 text-xs leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.highlight ? 'primary' : 'secondary'} 
                className="w-full mt-auto"
                onClick={handleBooking}
              >
                Choose {plan.name}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
                Need a custom configuration? <button onClick={handleBooking} className="text-brand-primary underline underline-offset-4 hover:text-brand-secondary">Talk to sales</button> for a bespoke quote.
            </p>
        </div>
      </div>
    </Section>
  );
};