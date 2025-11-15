import React from 'react'

const Logo = ({ size = 32 }) => {
  return (
    <div
      className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/20"
      style={{ width: size, height: size }}
      aria-label="Jason Zhu logo"
    >
      <span className="leading-none" style={{ fontFamily: 'Comfortaa, Inter, sans-serif' }}>JZ</span>
    </div>
  )
}

export default Logo
