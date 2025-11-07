import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function FloatingCard() {
  const [isVisible, setIsVisible] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  const handleAccept = () => {
    setIsVisible(false)
    setTimeout(() => {
      const element = document.getElementById("about")
      element?.scrollIntoView({ behavior: "smooth" })
      // Reset after scroll
      setTimeout(() => setIsVisible(true), 2000)
    }, 300)
  }

  const handleDecline = () => {
    setIsVisible(false)
    // Show again after a delay
    setTimeout(() => setIsVisible(true), 3000)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ 
            opacity: 1, 
            y: isHovered ? -8 : [0, -6, 0],
            scale: 1
          }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ 
            y: { duration: isHovered ? 0.3 : 3, repeat: isHovered ? 0 : Infinity, ease: "easeInOut" },
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 }
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="absolute right-6 bottom-6 bg-white shadow-2xl rounded-3xl p-5 w-72 border border-gray-200/50 cursor-default z-40"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-lg"
              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              EL
            </motion.div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Ella would like to share</p>
              <p className="text-xs text-gray-500 mt-0.5">a photo</p>
            </div>
          </div>
          <div className="flex gap-2">
            <motion.button
              onClick={handleDecline}
              className="flex-1 py-2.5 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-sm font-medium transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Decline
            </motion.button>
            <motion.button
              onClick={handleAccept}
              className="flex-1 py-2.5 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-medium transition-colors shadow-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Accept
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}