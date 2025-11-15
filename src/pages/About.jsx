import React from 'react'
import { motion } from 'framer-motion'

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
)

const About = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="pt-28 pb-20 mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <FadeIn>
            <div className="aspect-[4/5] w-full rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/30 shadow-xl overflow-hidden"></div>
          </FadeIn>
          <div>
            <FadeIn>
              <h1 className="text-4xl font-extrabold" style={{ fontFamily: 'Comfortaa, Inter, sans-serif' }}>About Me</h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">I’m Jason, a student who enjoys the challenge of pushing limits — in the classroom, on the field, and in service. I value discipline, teamwork, and perseverance, and I’m driven by curiosity to keep learning and improving.</p>
            </FadeIn>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <FadeIn delay={0.1}>
                <div className="p-6 rounded-2xl bg-blue-50/60 dark:bg-blue-500/10">
                  <h3 className="font-semibold">Education</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Primary to Secondary — focused on building strong foundations in science, math, and language.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="p-6 rounded-2xl bg-indigo-50/60 dark:bg-indigo-500/10">
                  <h3 className="font-semibold">Hobbies</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Training, reading, and tinkering with tech. Small routines, big results.</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="p-6 rounded-2xl bg-teal-50/60 dark:bg-teal-500/10">
                  <h3 className="font-semibold">Values</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Discipline • Teamwork • Perseverance • Curiosity</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <div className="p-6 rounded-2xl bg-rose-50/60 dark:bg-rose-500/10">
                  <h3 className="font-semibold">Strengths</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['Leadership', 'Resilience', 'Focus', 'Adaptability'].map((s) => (
                      <span key={s} className="inline-flex items-center rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 px-3 py-1 text-xs">{s}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
