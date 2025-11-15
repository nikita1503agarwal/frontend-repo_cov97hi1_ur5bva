import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Goals from './pages/Goals'
import Challenges from './pages/Challenges'
import Achievements from './pages/Achievements'
import Learning from './pages/Learning'
import Experiences from './pages/Experiences'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
