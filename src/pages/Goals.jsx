import React from 'react'
import { motion } from 'framer-motion'

const goals = [
  { period: 'Primary', items: [
    { title: 'Build discipline', detail: 'Sleep by 10pm, wake up 6am, train 3x/week', progress: 80 },
    { title: 'Math mastery', detail: 'Complete practice sets weekly', progress: 70 },
  ]},
  { period: 'Secondary 1', items: [
    { title: 'Improve leadership', detail: 'Lead squad trainings, reflect weekly', progress: 60 },
    { title: 'Science exploration', detail: 'Projects in physics/chemistry', progress: 50 },
  ]},
  { period: 'Secondary 2', items: [
    { title: 'Peak performance', detail: 'Balanced academics and sport', progress: 40 },
    { title: 'Portfolio & resume', detail: 'Document achievements and growth', progress: 55 },
  ]},
]

const Goals = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="pt-28 pb-20 mx-auto max-w-5xl px-6">
        <h1 className="text-4xl font-extrabold" style={{ fontFamily: 'Comfortaa, Inter, sans-serif' }}>My Goals</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">A growing list in SMART format with current progress.</p>

        <div className="mt-10 space-y-12">
          {goals.map((g) => (
            <div key={g.period}>
              <h2 className="text-2xl font-bold mb-6">{g.period}</h2>
              <div className="space-y-6">
                {g.items.map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.detail}</p>
                      </div>
                      <span className="text-sm text-gray-500">{item.progress}%</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-full bg-blue-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Goals
