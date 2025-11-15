import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Modal = ({ open, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-gray-900/50" onClick={onClose} />
          <motion.div
            className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-gray-900 shadow-2xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            <div className="p-6 border-b border-gray-100 dark:border-gray-800">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            </div>
            <div className="p-6 text-gray-700 dark:text-gray-200">{children}</div>
            <div className="p-6 pt-0 flex justify-end">
              <button
                onClick={onClose}
                className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-500"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
