import React from 'react'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex items-center gap-3">
          <Logo size={28} />
          <span>Jason Zhu</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#top" className="text-blue-600">Back to top ↑</a>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
