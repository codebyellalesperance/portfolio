import { motion } from "framer-motion"
import Image from "next/image"

export default function EditorialHero() {
  return (
    <section className="relative min-h-screen bg-brand-bg px-[7vw] pt-32 pb-28 overflow-hidden">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />

      {/* Floating portrait image - desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="hidden md:block absolute right-[10vw] top-[32vh] w-[260px] h-[330px] z-10"
      >
        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.12)] bg-gray-200">
          <Image
            src="/images/ella.png"
            alt="Ella L'Esperance portrait"
            fill
            className="object-cover"
            priority
            sizes="260px"
          />
        </div>
      </motion.div>

      {/* Main content */}
      <div className="max-w-[85vw] relative z-0">
        {/* Top metadata row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between text-[10px] tracking-[0.15em] uppercase text-gray-500 mb-12 flex-wrap gap-4"
        >
          <a
            href="https://substack.com/@ctrlaltcreatelabs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal transition-colors"
          >
            [ CTRL + ALT + CREATE LABS ]
          </a>
          <span>[ CREATIVE TECHNICAL PRODUCT BUILDER ]</span>
          <span>[ BOSTON, MA ]</span>
        </motion.div>

        {/* Border line under metadata */}
        <div className="border-b border-gray-200 pb-4 mb-12"></div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[14px] text-accent-blue font-medium mb-6"
        >
          Where code meets curiosity.
        </motion.div>

        {/* Oversized editorial headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[5.2vw] leading-[0.95] tracking-tight uppercase text-charcoal mb-8 max-w-[85%]"
        >
          <span className="font-sans font-bold">A SOFTWARE ENGINEER,</span>
          <br />
          <span className="font-sans font-semibold" style={{ fontSize: '2.5vw' }}>TUFTS LACROSSE ALUM{" "}
          <span className="font-serif italic" style={{ fontSize: '6.2w' }}>&</span></span>
          <br />
          <span className="font-sans font-semibold" style={{ fontSize: '4vw' }}>CREATIVE TECHNICAL PRODUCT MAKER, CURIOUS ABOUT ALL THINGS NEW{" "}
          <span className="font-serif italic">& COOL.</span></span>
        </motion.h1>

        {/* Section line under headline */}
        <div className="border-t border-gray-300 mt-16 mb-10"></div>

        {/* Subtext paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-[640px]"
        >
          <p className="text-[16px] leading-[1.7] text-gray-700 mt-8">
            I prototype fast, build in public, and think like a founder. At the intersection of 
            AI, design, and product thinking—creating thoughtful digital experiences that bridge 
            technical precision with human-centered design.
          </p>
        </motion.div>

        {/* Bottom nav links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-10 text-[11px] uppercase tracking-[0.2em] text-gray-500 mt-16 hover:[&>a]:text-charcoal transition-all"
        >
          <a href="#projects" className="cursor-pointer transition-colors duration-200">
            [ PROJECTS ]
          </a>
          <a href="#about" className="cursor-pointer transition-colors duration-200">
            [ ABOUT ]
          </a>
          <a href="#contact" className="cursor-pointer transition-colors duration-200">
            [ CONTACT ]
          </a>
        </motion.div>
      </div>
    </section>
  )
}

