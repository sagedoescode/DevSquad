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
  const baseStyles = "relative px-8 py-4 font-semibold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group tracking-wide cursor-pointer";

  const variants = {
    primary: "text-white rounded-[35px] shadow-[inset_0_0_25px_0_rgba(20,36,73,0.5)] border border-[#6e89ff]/30 hover:shadow-[inset_0_0_35px_0_rgba(20,36,73,0.7),0_0_30px_rgba(96,55,255,0.3)] hover:-translate-y-0.5 active:translate-y-0",
    secondary: "text-gray-300 rounded-[35px] bg-[#0B1537]/80 border border-[#243969]/50 shadow-[inset_0_0_10px_0_rgba(20,36,73,0.5)] hover:bg-[#0f1e40] hover:text-white hover:border-[#6e89ff]/30 hover:-translate-y-0.5 active:translate-y-0",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5 rounded-xl"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={variant === 'primary' ? {
        background: 'radial-gradient(circle farthest-corner at 50% -10%, #6037ff, #0057ff)',
      } : undefined}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>

      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#6037ff]/20 via-transparent to-[#00F0FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[35px]" />
      )}
    </motion.button>
  );
};