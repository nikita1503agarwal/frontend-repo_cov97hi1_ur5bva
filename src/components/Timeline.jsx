import React from 'react'
import { motion } from 'framer-motion'

const TimelineItem = ({ title, subtitle, period, content }) => (
  <motion.li
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5 }}
    className="relative pl-8 pb-10"
  >
    <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-blue-500" />
    <div className="text-sm text-gray-500">{period}</div>
    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h4>
    {subtitle && <div className="text-gray-600 dark:text-gray-300">{subtitle}</div>}
    <p className="mt-2 text-gray-700 dark:text-gray-200">{content}</p>
  </motion.li>
)

const Timeline = ({ items = [] }) => {
  return (
    <div className="relative">
      <div className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800" />
      <ul className="relative">{items.map((it, idx) => <TimelineItem key={idx} {...it} />)}</ul>
    </div>
  )
}

export default Timeline
