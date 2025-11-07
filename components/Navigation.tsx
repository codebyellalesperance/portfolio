import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
    
    // Update active section based on scroll position
    if (typeof window !== "undefined") {
      const sections = ["hero", "projects", "work", "about"]
      const sectionPositions = sections.map((id) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return { id, top: rect.top + window.scrollY, bottom: rect.bottom + window.scrollY }
        }
        return null
      }).filter(Boolean) as Array<{ id: string; top: number; bottom: number }>

      const current = sectionPositions.find(
        (section) => latest >= section.top - 150 && latest < section.bottom - 150
      )
      if (current) setActiveSection(current.id)
      else if (latest < 100) setActiveSection("hero")
    }
  })

  const scrollToSection = (id: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id)
      if (element) {
        const offset = 80 // Account for fixed navbar
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    }
  }

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "work", label: "Work" },
    { id: "about", label: "About" },
  ]

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200" : "bg-white"
      }`}
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Main logo */}
        <div className="flex items-center justify-center mb-3">
          <motion.div
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-serif font-bold tracking-wider hover:opacity-70 transition-opacity cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ELLA L'ESPERANCE
          </motion.div>
        </div>
        
        {/* Navigation links */}
        <div className="flex items-center justify-center gap-6 md:gap-8 flex-wrap">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative text-xs uppercase tracking-widest font-medium transition-colors ${
                activeSection === item.id ? "text-black" : "text-gray-500 hover:text-black"
              }`}
              type="button"
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}