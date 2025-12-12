import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const variants = {
        primary: 'bg-secondary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30',
        secondary: 'bg-accent hover:bg-teal-600 text-white shadow-lg shadow-teal-500/30',
        outline: 'border-2 border-secondary text-secondary hover:bg-secondary/10',
        ghost: 'text-gray-300 hover:text-white hover:bg-white/5',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                'rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
