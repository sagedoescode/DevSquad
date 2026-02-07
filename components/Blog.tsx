import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, User } from 'lucide-react';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

const articles = [
  {
    id: 1,
    title: "Why Agile Squads Outperform Traditional Outsourcing",
    excerpt: "The agency model is broken. Discover why dedicated squads with direct Slack access deliver 3x faster velocity.",
    category: "Team Building",
    author: "Alex Rivera",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Migrating from Monolith to Microservices: A CTO's Guide",
    excerpt: "Lessons learned from decomposing a legacy Python application into scalable Node.js services.",
    category: "Engineering",
    author: "Sarah Jenkins",
    date: "Oct 08, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 3,
    title: "The State of React Server Components in 2024",
    excerpt: "Are RSCs ready for production? We benchmarked Next.js 14 performance on enterprise dashboards.",
    category: "Tech Stack",
    author: "David Chen",
    date: "Sep 29, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 4,
    title: "Remote Culture: How to Maintain High Trust",
    excerpt: "Tools and rituals we use to keep engagement high across distributed engineering teams.",
    category: "Culture",
    author: "Elena Rodriguez",
    date: "Sep 15, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

export const Blog: React.FC = () => {
  const featuredPost = articles.find(a => a.featured);
  const regularPosts = articles.filter(a => !a.featured);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[#000000]">
      <Section className="!py-10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Insights for <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Engineering Leaders</span>
            </h1>
            <p className="text-xl text-gray-400">
              Deep dives into architecture, team scaling, and software delivery.
            </p>
          </motion.div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-16 relative group rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="bg-[#0b0b0b] p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-red-600/10 text-red-500 text-xs font-bold rounded-full uppercase tracking-wider border border-red-600/20">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center text-gray-500 text-sm gap-1">
                       <Clock className="w-3 h-3" /> {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-xs text-white font-bold">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div className="text-sm">
                        <p className="text-white font-medium">{featuredPost.author}</p>
                        <p className="text-gray-500 text-xs">{featuredPost.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" className="!p-0 hover:!bg-transparent text-red-500 hover:text-red-400">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid Posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {regularPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="bg-[#0b0b0b] border border-white/5 rounded-2xl overflow-hidden group hover:border-red-600/30 transition-all flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                   <div className="absolute top-4 left-4 z-10">
                      <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded border border-white/10">
                        {post.category}
                      </span>
                   </div>
                   <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs text-gray-500 mb-3 flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                      <User className="w-3 h-3 text-gray-500" />
                      <span className="text-xs text-gray-400">{post.author}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="bg-gradient-to-r from-[#0b0b0b] to-[#111] border border-white/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-[80px]"></div>
             <div className="relative z-10 max-w-xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">Join 5,000+ Tech Leaders</h3>
                <p className="text-gray-400 mb-8">
                  Get weekly insights on engineering management, scalability, and remote team building directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    placeholder="Enter your work email" 
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors"
                  />
                  <Button variant="primary" className="whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
             </div>
          </div>

        </div>
      </Section>
    </div>
  );
};