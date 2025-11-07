import { motion } from "framer-motion"

export default function HandwrittenNotes() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-28 lg:px-40 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          {/* Main handwritten title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl font-handwritten text-[#B22222] mb-6"
            style={{ transform: "rotate(-1deg)" }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            What's inside her portfolio?
          </motion.h2>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 font-serif italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            By VOGUE
          </motion.p>

          {/* Additional handwritten note */}
          <motion.div
            className="mt-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <p
              className="text-2xl md:text-3xl font-handwritten text-gray-700"
              style={{ transform: "rotate(1deg)" }}
            >
              A thoughtful collection of digital experiences, design systems, and creative experiments.
            </p>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            className="w-32 h-0.5 bg-gray-300 mx-auto mt-12"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
        </motion.div>
      </div>
    </section>
  )
}

