import React, { useState } from 'react'

const Contact = () => {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 800)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="pt-28 pb-20 mx-auto max-w-xl px-6">
        <h1 className="text-4xl font-extrabold" style={{ fontFamily: 'Comfortaa, Inter, sans-serif' }}>Contact</h1>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input required className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3" />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" required className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3" />
          </div>
          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea rows={5} required className="w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3" />
          </div>
          <button className="w-full rounded-xl bg-blue-600 text-white py-3 font-semibold hover:bg-blue-500 transition-colors">Send</button>
          {status && <p className="text-center text-sm text-gray-600 dark:text-gray-300">{status}</p>}
        </form>
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Jason Zhu. All rights reserved.</p>
          <a href="#top" className="inline-block mt-2 text-blue-600">Back to top ↑</a>
        </div>
      </div>
    </div>
  )
}

export default Contact
