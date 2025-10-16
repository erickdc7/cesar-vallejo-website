import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = 'default',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-md font-medium transition-all disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    default: 'bg-[#D4AF37] text-[#1a1a1a] hover:bg-[#D4AF37]/90',
    outline:
      'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#1a1a1a]',
    ghost: 'text-[#D4AF37] hover:bg-[#D4AF37]/10',
  };

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-9 px-4 text-base',
    lg: 'h-10 px-6 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
