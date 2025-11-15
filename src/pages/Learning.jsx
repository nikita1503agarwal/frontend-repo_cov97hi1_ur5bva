import React from 'react'
import { motion } from 'framer-motion'

const items = [
  { quote: 'Small habits compound into big changes.', color: 'from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30' },
  { quote: 'Leadership is service and standards.', color: 'from-teal-50 to-emerald-50 dark:from-teal-900/30 dark:to-emerald-900/30' },
  { quote: 'Curiosity fuels learning and growth.', color: 'from-rose-50 to-orange-50 dark:from-rose-900/30 dark:to-orange-900/30' },
]

const Learning = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="pt-28 pb-20 mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-extrabold" style={{ fontFamily: 'Comfortaa, Inter, sans-serif' }}>Things I Learned</h1>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.5 }} className={`p-6 rounded-2xl bg-gradient-to-br ${it.color} border border-gray-200/70 dark:border-gray-800/70`}>
              <p className="text-gray-700 dark:text-gray-200">“{it.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Learning
