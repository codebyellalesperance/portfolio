import { motion } from "framer-motion"

export default function TimelineSection() {
  const years = [2021, 2022, 2023, 2024, 2025, 2026, 2027]
  const currentYear = 2024

  return (
    <section className="relative w-full py-24 md:py-32 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-28 lg:px-40">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 transform -translate-y-1/2" />

          {/* Years */}
          <div className="relative flex items-center justify-between">
            {/* Left years */}
            <div className="flex flex-col gap-8">
              {years.filter((y) => y < currentYear).map((year) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-serif text-gray-400"
                >
                  {year}
                </motion.div>
              ))}
            </div>

            {/* Current year - center */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative z-10"
            >
              <div className="text-8xl md:text-9xl font-serif font-bold text-black">
                {currentYear}
              </div>
              
              {/* Update section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute right-0 top-full mt-8 w-80"
              >
                <h3 className="text-xl font-serif font-bold mb-4 uppercase tracking-wider">
                  ELLA L'ESPERANCE UPDATE
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 shadow-md">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-200 to-pink-200 rounded mb-3 flex items-center justify-center">
                    <span className="text-4xl">📸</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Currently working on exciting new projects combining design, code, and AI to create meaningful digital experiences.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right years */}
            <div className="flex flex-col gap-8">
              {years.filter((y) => y > currentYear).map((year) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl font-serif text-gray-400"
                >
                  {year}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
