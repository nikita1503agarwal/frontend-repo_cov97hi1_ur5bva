import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ title, description, icon: Icon, onClick, className = '', children }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className={`group rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur shadow-lg shadow-gray-200/40 dark:shadow-black/20 p-6 transition-colors ${className}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-3">
        {Icon && (
          <div className="h-10 w-10 rounded-xl bg-blue-50 dark:bg-blue-500/20 text-blue-600 grid place-items-center">
            <Icon className="h-5 w-5" />
          </div>
        )}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
      {children}
    </motion.div>
  )
}

export default Card
