import { motion } from "framer-motion"
import { useState } from "react"

export default function AboutSection() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <section id="about" className="px-6 md:px-28 lg:px-40 py-20 md:py-32 border-t border-gray-200 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">About</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            About
          </h2>
          <div className="w-20 h-0.5 bg-black"></div>
        </div>
        <p className="max-w-lg text-gray-600 leading-relaxed mb-6">
          I'm a product designer and engineer based in Boston. I love building
          intuitive interfaces, crafting clean code, and exploring how design
          and AI intersect.
        </p>
        <motion.p
          className="max-w-lg text-gray-600 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I design to make people smile <motion.span
            animate={{ rotate: [0, 14, -8, 14, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
            className="inline-block"
          >☺</motion.span>
        </motion.p>
        <div className="flex flex-wrap gap-4">
          <motion.a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredLink("linkedin")}
            onHoverEnd={() => setHoveredLink(null)}
          >
            <span className="relative z-10 flex items-center gap-2">
              LinkedIn
              {hoveredLink === "linkedin" && (
                <motion.span
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 10, opacity: 0 }}
                >💼</motion.span>
              )}
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </motion.a>
          <motion.a
            href="mailto:ella@example.com"
            className="px-6 py-2 border border-gray-300 rounded-full hover:bg-black hover:text-white hover:border-black transition-all relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHoveredLink("email")}
            onHoverEnd={() => setHoveredLink(null)}
          >
            <span className="relative z-10 flex items-center gap-2">
              Email
              {hoveredLink === "email" && (
                <motion.span
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 10, opacity: 0 }}
                >✉️</motion.span>
              )}
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}