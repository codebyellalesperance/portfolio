import { motion } from "framer-motion"
import { useRef } from "react"
import Annotation from "./Annotation"

interface PortfolioItem {
  number: number
  label: string
  x: number
  y: number
  itemX: number
  itemY: number
  description?: string
}

const portfolioItems: PortfolioItem[] = [
  {
    number: 1,
    label: "Figma",
    x: 15,
    y: 25,
    itemX: 30,
    itemY: 40,
    description: "My go-to design tool for crafting digital experiences"
  },
  {
    number: 2,
    label: "Mood Journal",
    x: 75,
    y: 20,
    itemX: 60,
    itemY: 35,
    description: "A daily reflection app I designed and built"
  },
  {
    number: 3,
    label: "Code Editor",
    x: 85,
    y: 60,
    itemX: 70,
    itemY: 50,
    description: "Where the magic happens - React, TypeScript, and more"
  },
  {
    number: 4,
    label: "Design System",
    x: 20,
    y: 70,
    itemX: 25,
    itemY: 60,
    description: "My personal component library and design tokens"
  },
  {
    number: 5,
    label: "Sketchbook",
    x: 45,
    y: 15,
    itemX: 45,
    itemY: 30,
    description: "Ideas start here - pen, paper, and inspiration"
  },
  {
    number: 6,
    label: "Coffee",
    x: 10,
    y: 50,
    itemX: 15,
    itemY: 55,
    description: "Essential fuel for late-night coding sessions"
  },
]

export default function MagazineHero() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="hero" className="relative w-full min-h-screen bg-white pt-32">
      {/* Category Label */}
      <div className="max-w-7xl mx-auto px-6 md:px-28 lg:px-40 pt-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-gray-500 mb-2"
        >
          Portfolio / Feature
        </motion.p>
        
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-16 tracking-tight leading-[1.1]"
        >
          INSIDE THE PORTFOLIO: W / ELLA L'ESPERANCE
        </motion.h1>
      </div>

      {/* Main Image with Annotations */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-28 lg:px-40 mb-24">
        <div 
          ref={containerRef}
          className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 via-gray-50 to-white overflow-visible"
        >
          {/* Hero Image - Full width, cinematic frame */}
          <div className="absolute inset-0 bg-gray-100 rounded-lg shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-100 to-white">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Placeholder for your actual image/video */}
                <div className="text-center p-12">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl"
                  >
                    <span className="text-5xl md:text-6xl font-bold text-white">EL</span>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl md:text-2xl font-serif text-gray-700"
                  >
                    Product Designer & Engineer
                  </motion.p>
                </div>
              </div>
            </div>
          </div>

          {/* Annotations */}
          <div className="absolute inset-0 z-10">
            {portfolioItems.map((item) => (
              <Annotation
                key={item.number}
                number={item.number}
                label={item.label}
                x={item.x}
                y={item.y}
                itemX={item.itemX}
                itemY={item.itemY}
                description={item.description}
                containerRef={containerRef}
              />
            ))}
          </div>

          {/* Floating Items */}
          {portfolioItems.map((item) => (
            <motion.div
              key={`item-${item.number}`}
              className="absolute z-0"
              style={{
                left: `${item.itemX}%`,
                top: `${item.itemY}%`,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ 
                scale: 1, 
                rotate: 0, 
                opacity: 1,
                y: [0, -10, 0]
              }}
              transition={{
                scale: { duration: 0.5, delay: item.number * 0.1 + 0.3 },
                rotate: { duration: 0.5, delay: item.number * 0.1 + 0.3 },
                opacity: { duration: 0.5, delay: item.number * 0.1 + 0.3 },
                y: { 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: item.number * 0.2
                }
              }}
            >
              <div className="w-16 h-16 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-gray-200">
                <span className="text-2xl">
                  {item.number === 1 && "🎨"}
                  {item.number === 2 && "📱"}
                  {item.number === 3 && "💻"}
                  {item.number === 4 && "📐"}
                  {item.number === 5 && "📓"}
                  {item.number === 6 && "☕"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Handwritten Note Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-28 lg:px-40 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-handwritten text-[#B22222] mb-4" style={{ transform: "rotate(-1deg)" }}>
            What's inside her portfolio?
          </h2>
          <p className="text-sm uppercase tracking-widest text-gray-500 mt-4">
            By VOGUE • FEATURING ELLA L'ESPERANCE
          </p>
        </motion.div>
      </div>
    </section>
  )
}

