import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Modal from '../components/Modal'

const data = [
  { title: 'Balancing commitments', story: 'Juggling academics, NCC, and sports required better planning and prioritization.', lesson: 'Time-blocking and weekly reviews increased focus and reduced stress.' },
  { title: 'Leadership under pressure', story: 'Leading drills when morale dipped taught me to communicate with clarity and empathy.', lesson: 'Lead by example, listen actively, and keep standards high.' },
  { title: 'Injury setback', story: 'A minor injury paused training for weeks, forcing me to adapt routines and stay patient.', lesson: 'Recovery is progress too — consistency matters more than intensity.' },
]

const Challenges = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  const openModal = (item) => { setActive(item); setOpen(true) }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="pt-28 pb-20 mx-auto max-w-6xl px-6">
        <h1 className="text-4xl font-extrabold" style={{ fontFamily: 'Comfortaa, Inter, sans-serif' }}>Challenges I Faced</h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">Stories that shaped my mindset and skills.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 p-6 cursor-pointer bg-white dark:bg-gray-900"
              onClick={() => openModal(item)}
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 line-clamp-3">{item.story}</p>
              <div className="mt-4 text-sm text-blue-600">Read more</div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={active?.title}>
        <p className="mb-4">{active?.story}</p>
        <p className="font-medium">Lesson learned: {active?.lesson}</p>
      </Modal>
    </div>
  )
}

export default Challenges
