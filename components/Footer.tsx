import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-gray-200 bg-white px-6 md:px-28 lg:px-40 py-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Credits Section */}
        <div className="mb-8 space-y-4">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
            Credits
          </p>
          <div className="text-sm text-gray-600 space-y-1 leading-relaxed">
            <p>
              <span className="font-semibold">Visuals & Design:</span> Ella L'Esperance
            </p>
            <p>
              <span className="font-semibold">Code & Development:</span> Ella L'Esperance
            </p>
            <p className="text-xs text-gray-500 italic mt-4">
              Inspired by Vogue "Inside the Bag" feature. All work original.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 mb-8"></div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Ella L'Esperance. All rights reserved.
          </p>
          <div className="flex gap-8">
            <motion.a
              href="https://www.linkedin.com/in/ellalesperance/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
              whileHover={{ y: -2 }}
            >
              LinkedIn
            </motion.a>
            <motion.a
              href="mailto:ella.lesperance@outlook.com"
              className="text-xs uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
              whileHover={{ y: -2 }}
            >
              Email
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
