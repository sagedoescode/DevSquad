import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  items: string[];
  speed?: number;
  className?: string;
  reverse?: boolean;
}

export const Marquee: React.FC<MarqueeProps> = ({ items, speed = 20, className = "", reverse = false }) => {
  return (
    <div className={`relative flex overflow-x-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: reverse ? [0, 1000] : [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        <div className="flex space-x-12 items-center px-6">
          {items.map((item, i) => (
            <span key={i} className="text-xl md:text-2xl font-bold text-gray-700 hover:text-white transition-colors cursor-default select-none">
              {item}
            </span>
          ))}
        </div>
        <div className="flex space-x-12 items-center px-6">
          {items.map((item, i) => (
            <span key={`dup-${i}`} className="text-xl md:text-2xl font-bold text-gray-700 hover:text-white transition-colors cursor-default select-none">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
