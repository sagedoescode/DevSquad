import React from 'react';
import { motion } from 'framer-motion';
import { Bot, FileText, Clock, Send, UserCheck, Briefcase, Github, Bell, BarChart3, MessageSquare, Search, Sparkles } from 'lucide-react';
import { Section } from './ui/Section';

const features = [
  {
    icon: Bot,
    title: "AI Auto-Proposals",
    description: "Generate personalized proposals in your voice. Our AI learns how you write and crafts winning pitches in seconds."
  },
  {
    icon: FileText,
    title: "Contracts & Invoicing",
    description: "Create professional contracts and invoices instantly. Auto-track payments and send reminders on autopilot."
  },
  {
    icon: Clock,
    title: "Work Hours & Reports",
    description: "Track time per client and project. Generate detailed reports with screenshots and activity logs."
  },
  {
    icon: Github,
    title: "GitHub Integration",
    description: "Connect your repos for automated work tracking. Commits, PRs, and code reviews become billable hour reports."
  },
  {
    icon: Bell,
    title: "Smart Email Notifications",
    description: "Only get notified about client emails. Filter out noise and never miss a critical message again."
  },
  {
    icon: Send,
    title: "Auto Job Applications",
    description: "Set your preferences and let AI apply to matching jobs on Upwork, Fiverr, Freelancer, and more while you sleep."
  },
  {
    icon: MessageSquare,
    title: "Automated Client Updates",
    description: "AI sends daily progress updates to clients based on your actual work. No more 'just checking in' messages."
  },
  {
    icon: UserCheck,
    title: "Profile Optimization",
    description: "AI analyzes top earners on each platform and optimizes your profile bio, skills, and portfolio to rank higher."
  },
  {
    icon: BarChart3,
    title: "Client & Priority Tracking",
    description: "Track milestones, deadlines, and priorities across all clients. Extract action items from chat messages automatically."
  },
  {
    icon: Briefcase,
    title: "Multi-Platform Dashboard",
    description: "Manage Upwork, Fiverr, Freelancer, Toptal, and LinkedIn from one unified command center."
  },
  {
    icon: Search,
    title: "Job Market Intelligence",
    description: "Real-time insights on trending skills, average rates, and demand shifts so you always price competitively."
  },
  {
    icon: Sparkles,
    title: "AI That Talks Like You",
    description: "Train the AI on your past messages and proposals. It adapts to your tone, style, and personality perfectly."
  }
];

export const Features: React.FC = () => {
  return (
    <Section className="bg-[#030814] relative" id="features">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #6037ff 0%, transparent 70%)' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Everything You Need to{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)' }}>
                Dominate Freelancing
              </span>
            </h2>
            <p className="text-[#8a9cc7] text-lg">
              Stop juggling 15 tabs. Lure gives you AI-powered tools that handle the boring stuff so you can focus on the work that pays.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-[25px] bg-[#0B1537]/50 border border-[#243969]/25 hover:border-[#6037ff]/40 transition-all duration-300 relative overflow-hidden shadow-[inset_0_0_25px_0_rgba(20,36,73,0.3)]"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(96,55,255,0.05) 0%, rgba(0,87,255,0) 60%)' }} />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-[#6e89ff] group-hover:text-white transition-colors duration-300" style={{ background: 'radial-gradient(circle farthest-corner at 54% 40%, rgba(96,55,255,0.15), rgba(0,87,255,0.08))' }}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-[#6e89ff]/60 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};