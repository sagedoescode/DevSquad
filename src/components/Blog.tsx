import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

const articles = [
  {
    id: 1,
    title: "How AI Proposals Are Changing the Freelancing Game",
    excerpt: "Manual proposals are dead. Learn how top earners on Upwork are using AI to write personalized pitches that win 3x more contracts.",
    category: "AI Tools",
    author: "Lure Team",
    date: "Mar 5, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "The Complete Guide to Freelancer Time Tracking in 2025",
    excerpt: "Stop guessing your hours. Here's how to track every minute, auto-generate reports, and get paid what you're worth.",
    category: "Productivity",
    author: "Marcus Chen",
    date: "Feb 28, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Upwork Profile Optimization: What Actually Works",
    excerpt: "We analyzed 500 top-rated profiles. These are the patterns that get you to the top of search results.",
    category: "Growth",
    author: "Sofia Rodriguez",
    date: "Feb 20, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 4,
    title: "From $20/hr to $150/hr: A Freelancer's Scaling Playbook",
    excerpt: "Real strategies from developers who 7x'd their rates without working more hours. Automation was the key.",
    category: "Strategy",
    author: "James Okafor",
    date: "Feb 12, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

export const Blog: React.FC = () => {
  const featuredPost = articles.find(a => a.featured);
  const regularPosts = articles.filter(a => !a.featured);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#030814]">
      <Section className="!py-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Insights for{' '}
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)' }}>
                Elite Freelancers
              </span>
            </h1>
            <p className="text-xl text-[#8a9cc7]">
              Strategies, tools, and tactics to grow your freelance business.
            </p>
          </motion.div>

          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-16 relative group rounded-[35px] overflow-hidden border border-[#243969]/30 shadow-[inset_0_0_25px_0_rgba(20,36,73,0.3)]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="bg-[#0B1537]/60 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-[#00F0FF] text-xs font-bold rounded-full uppercase tracking-wider border border-[#00F0FF]/20" style={{ background: 'rgba(0,240,255,0.08)' }}>
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center text-[#6e89ff]/40 text-sm gap-1">
                      <Clock className="w-3 h-3" /> {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#6037ff] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[#8a9cc7] mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs text-white font-bold" style={{ background: 'radial-gradient(circle farthest-corner at 54% 40%, #6037ff 30%, #0057ff)' }}>
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div className="text-sm">
                        <p className="text-white font-medium">{featuredPost.author}</p>
                        <p className="text-[#6e89ff]/40 text-xs">{featuredPost.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" className="!p-0 hover:!bg-transparent text-[#6037ff] hover:text-[#00F0FF]">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {regularPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="bg-[#0B1537]/50 border border-[#243969]/25 rounded-[25px] overflow-hidden group hover:border-[#6037ff]/30 transition-all flex flex-col shadow-[inset_0_0_15px_0_rgba(20,36,73,0.3)]"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2 py-1 bg-[#030814]/60 backdrop-blur-md text-white text-xs font-bold rounded-lg border border-[#243969]/30">
                      {post.category}
                    </span>
                  </div>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs text-[#6e89ff]/40 mb-3 flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#6037ff] transition-colors">{post.title}</h3>
                  <p className="text-[#6e89ff]/50 text-sm mb-6 flex-1">{post.excerpt}</p>
                  <div className="flex items-center gap-2 pt-4 border-t border-[#243969]/20">
                    <User className="w-3 h-3 text-[#6e89ff]/40" />
                    <span className="text-xs text-[#6e89ff]/40">{post.author}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border border-[#243969]/30 rounded-[25px] p-8 md:p-12 text-center relative overflow-hidden shadow-[inset_0_0_25px_0_rgba(20,36,73,0.3)]" style={{ background: 'linear-gradient(135deg, rgba(96,55,255,0.05), rgba(0,87,255,0.03))' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] opacity-15 pointer-events-none" style={{ background: '#6037ff' }} />
            <div className="relative z-10 max-w-xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Join 5,000+ Freelancers</h3>
              <p className="text-[#8a9cc7] mb-8">
                Get weekly tips on scaling your freelance income, AI tools, and platform strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#0B1537] border border-[#243969]/40 rounded-[15px] px-4 py-3 text-white focus:outline-none focus:border-[#6037ff] transition-colors"
                />
                <Button variant="primary" className="whitespace-nowrap !rounded-[15px]">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};