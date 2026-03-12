import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'insta';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group tracking-tight";
  
  const variants = {
    // Primary: Instagram-like gradient
    primary: "bg-insta-gradient text-white shadow-[0_4px_20px_rgba(204,35,102,0.4)] hover:shadow-[0_8px_30px_rgba(204,35,102,0.6)] hover:-translate-y-1 active:translate-y-0 active:shadow-none",
    
    // Insta: Explicitly named variant
    insta: "bg-insta-gradient text-white shadow-[0_4px_20px_rgba(204,35,102,0.4)] hover:shadow-[0_8px_30px_rgba(204,35,102,0.6)] hover:-translate-y-1 active:translate-y-0 active:shadow-none",
    
    // Secondary: Glassmorphism with depth
    secondary: "bg-[#0b0b0b] text-gray-300 border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:bg-[#151515] hover:text-white hover:border-white/20 hover:-translate-y-0.5 active:translate-y-0",
    
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Shine effect for primary/insta */}
      {(variant === 'primary' || variant === 'insta') && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
      )}
    </motion.button>
  );
};