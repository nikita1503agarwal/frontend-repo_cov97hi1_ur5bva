import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Sun, Moon, ChevronDown } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/goals', label: 'My Goals' },
  { to: '/challenges', label: 'Challenges' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/learning', label: 'Things I Learned' },
  { to: '/experiences', label: 'Experiences' },
  { to: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <div className="fixed top-4 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="flex items-center gap-3">
              <Logo size={32} />
              <span className="font-semibold text-gray-900 dark:text-white">Jason Zhu</span>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) => `px-3 py-2 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                aria-label="Toggle dark mode"
                onClick={() => setDark(!dark)}
                className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                aria-label="Toggle dark mode"
                onClick={() => setDark(!dark)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>

          {open && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-800 px-3 py-2">
              <div className="grid grid-cols-2 gap-2">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `px-3 py-2 rounded-xl text-sm font-medium transition-colors ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
