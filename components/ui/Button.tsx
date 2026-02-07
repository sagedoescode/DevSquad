import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 overflow-hidden group tracking-wide";
  
  const variants = {
    // Primary: Deep dark gradient with strong red border and glow
    primary: "bg-gradient-to-b from-[#1a1a1a] to-[#000000] text-white border border-red-500/50 shadow-[0_0_20px_rgba(220,38,38,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-red-500 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none",
    
    // Secondary: Glassmorphism with depth
    secondary: "bg-[#0b0b0b] text-gray-300 border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:bg-[#151515] hover:text-white hover:border-white/20 hover:-translate-y-0.5 active:translate-y-0",
    
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Primary variant specific glow effect */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      )}
    </motion.button>
  );
};