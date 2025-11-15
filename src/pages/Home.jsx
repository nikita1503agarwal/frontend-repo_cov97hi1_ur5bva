import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ChevronDown, Award, BookOpen, Dumbbell } from 'lucide-react'
import Button from '../components/Button'
import Card from '../components/Card'

const featureCards = [
  {
    title: 'Sports',
    description: 'Passionate about fitness and competitive sports — building resilience through training.',
    icon: Dumbbell,
  },
  {
    title: 'NCC Cadet',
    description: 'Leadership, discipline, and teamwork honed through NCC experiences and roles.',
    icon: Award,
  },
  {
    title: 'Science & Academics',
    description: 'Curious about how things work — exploring science, technology, and problem solving.',
    icon: BookOpen,
  },
]

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white dark:from-gray-950/80 dark:via-gray-950/50 dark:to-gray-950" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
            style={{ fontFamily: 'Comfortaa, Inter, sans-serif' }}
          >
            Hi, I’m Jason Zhu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-gray-700 dark:text-gray-300"
          >
            Student • Athlete • Cadet Leader • Lifelong Learner
          </motion.p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#highlights" as="a">Explore Highlights</Button>
            <Button href="/about" as="a" variant="secondary">About Me</Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute left-1/2 -bottom-2 -translate-x-1/2"
          >
            <ChevronDown className="h-8 w-8 text-gray-400 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="relative py-24 bg-gradient-to-b from-transparent to-blue-50/60 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {featureCards.map((c) => (
              <Card key={c.title} title={c.title} description={c.description} icon={c.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Why I Created This Portfolio */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold">Why I Created This Portfolio</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            To document my journey, reflect on growth, and share the values I live by — discipline, teamwork, perseverance, and curiosity. This space captures highlights, challenges, and ambitions in a simple, modern way.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
