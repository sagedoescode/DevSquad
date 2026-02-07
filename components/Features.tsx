import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Clock, Users, Shield, Zap, RefreshCw } from 'lucide-react';
import { Section } from './ui/Section';

const features = [
  {
    icon: Users,
    title: "Pre-vetted Teams",
    description: "Skip the interviews. We hire the top 1% of talent so you don't have to."
  },
  {
    icon: Clock,
    title: "Onboard in 24 Hours",
    description: "Stop waiting weeks to start. Our squads are ready to deploy instantly."
  },
  {
    icon: Shield,
    title: "Zero Risk Guarantee",
    description: "If you're not satisfied in the first 2 weeks, you don't pay a dime."
  },
  {
    icon: Terminal,
    title: "Modern Tech Stack",
    description: "Experts in React, Node, Python, and AI integration. We speak your language."
  },
  {
    icon: RefreshCw,
    title: "Seamless Sync",
    description: "Daily standups, weekly sprints, and transparent reporting via Slack & Jira."
  },
  {
    icon: Zap,
    title: "Scale on Demand",
    description: "Need more hands? Scale your squad up or down with a single click."
  }
];

export const Features: React.FC = () => {
  return (
    <Section className="bg-[#000000]" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            The <span className="text-red-600">Anti-Freelancer</span> Platform
          </h2>
          <p className="text-gray-400 text-lg">
            Freelancers ghost you. Agencies overcharge you. DevSquad gives you the reliability of an in-house team with the flexibility of a service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 rounded-2xl bg-[#0b0b0b] border border-white/5 hover:border-red-600/30 transition-all duration-300 relative overflow-hidden"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-red-600/10 flex items-center justify-center mb-6 group-hover:bg-red-600/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};