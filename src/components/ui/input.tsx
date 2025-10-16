import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export function Input({ className = "", ...props }: InputProps) {
    return (
        <input
            {...props}
            className={`max-w-2xl max-w-ful border border-[#D4AF37]/30 rounded-md px-4 py-2 focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 bg-white placeholder:text-gray-400 transition ${className}`}
        />
    );
}
