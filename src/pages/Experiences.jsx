import React from 'react'
import Timeline from '../components/Timeline'

const items = [
  { period: '2023', title: 'NCC Cadet', content: 'Took on responsibilities in drills and squad coordination.' },
  { period: '2024', title: 'FSD IC', content: 'Led foot drill practices, managed schedules, and guided juniors.' },
  { period: '2024', title: 'Sports Events', content: 'Participated in school athletic meets, focusing on sprint events.' },
]

const Experiences = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="pt-28 pb-20 mx-auto max-w-4xl px-6">
        <h1 className="text-4xl font-extrabold" style={{ fontFamily: 'Comfortaa, Inter, sans-serif' }}>Experiences</h1>
        <div className="mt-10">
          <Timeline items={items} />
        </div>
      </div>
    </div>
  )
}

export default Experiences
