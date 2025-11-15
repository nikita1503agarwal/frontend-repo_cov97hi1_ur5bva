import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ children, onClick, variant = 'primary', className = '', as = 'button', href }) => {
  const Comp = as === 'a' ? motion.a : motion.button
  const base = 'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95'

  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-500 focus:ring-blue-400',
    secondary: 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 shadow-sm focus:ring-gray-300',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-200',
  }

  return (
    <Comp
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Comp>
  )
}

export default Button
