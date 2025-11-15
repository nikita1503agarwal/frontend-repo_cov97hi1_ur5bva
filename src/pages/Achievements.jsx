import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const categories = ['All', 'Academic', 'CCA', 'Sports']

const items = [
  { title: 'Math Olympiad', cat: 'Academic', img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop' },
  { title: 'NCC Promotion', cat: 'CCA', img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Sports Meet 400m', cat: 'Sports', img: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Science Fair', cat: 'Academic', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop' },
]

const Achievements = () => {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null)

  const filtered = items.filter(i => filter === 'All' || i.cat === filter)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="pt-28 pb-20 mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-extrabold" style={{ fontFamily: 'Comfortaa, Inter, sans-serif' }}>Achievements</h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-xl border text-sm ${filter === c ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {filtered.map((it, idx) => (
            <motion.div key={idx} whileHover={{ y: -4 }} className="mb-4 break-inside-avoid rounded-2xl overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-800" onClick={() => setActive(it)}>
              <img src={it.img} alt={it.title} className="w-full h-auto" loading="lazy" />
              <div className="p-4 bg-white dark:bg-gray-900">
                <div className="text-sm text-gray-500">{it.cat}</div>
                <div className="font-semibold">{it.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 bg-black/60" onClick={() => setActive(null)} />
            <motion.div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }}>
              <img src={active.img} alt={active.title} className="w-full h-auto" />
              <div className="p-4 bg-white dark:bg-gray-900 flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">{active.cat}</div>
                  <div className="font-semibold">{active.title}</div>
                </div>
                <button className="px-4 py-2 rounded-xl bg-blue-600 text-white" onClick={() => setActive(null)}>Close</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Achievements
