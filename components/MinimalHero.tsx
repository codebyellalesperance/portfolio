import { motion } from "framer-motion"

export default function MinimalHero() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 md:py-20 px-4 md:px-8">
      {/* Off-white content block */}
      <div className="bg-[#FAFAF9] w-full max-w-6xl mx-auto px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 shadow-sm">
        {/* Top metadata bar */}
        <div className="flex flex-wrap justify-between items-center text-xs tracking-widest text-black/60 mb-12 border-b border-black/10 pb-4">
          <span>[ ELLA L'ESPERANCE ]</span>
          <span>[ PRODUCT DESIGNER, ENGINEER ]</span>
          <span>[ BOSTON, MA ]</span>
        </div>

        {/* Category label */}
        <div className="text-xs tracking-widest text-black/40 mb-6">
          [ ART, DESIGN, TECHNOLOGY ]
        </div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight"
        >
          A PRODUCT DESIGNER & ENGINEER{" "}
          <span className="text-black/80">BORN &</span> RAISED IN BOSTON.
          <span className="text-xs tracking-widest text-black/40 ml-2 md:ml-4 font-normal">
            [ CREATIVE TECHNOLOGY ]
          </span>
        </motion.h1>

        {/* Body text */}
        <div className="max-w-2xl space-y-6 text-sm md:text-base leading-relaxed text-black/70 mb-16">
          <p>
            I seek to find the connection between design, code, and human experience 
            in an effort to create authentic and meaningful digital products.
          </p>
          <p>
            I blend thoughtful design with clean engineering, focusing on how 
            technology can enhance human potential. I currently reside in Boston, MA.
          </p>
        </div>

        {/* Bottom navigation */}
        <div className="flex flex-wrap gap-8 text-xs tracking-widest text-black/60 border-t border-black/10 pt-4">
          <a href="#works" className="hover:text-black transition-colors cursor-pointer">
            [ BACK ]
          </a>
          <a href="#about" className="hover:text-black transition-colors cursor-pointer">
            [ .ABOUT ]
          </a>
          <a href="#projects" className="hover:text-black transition-colors cursor-pointer">
            [ WORKS ]
          </a>
        </div>
      </div>
    </div>
  )
}

