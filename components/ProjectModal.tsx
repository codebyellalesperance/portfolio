import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Project } from "../data/projects"
import { useEffect } from "react"

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-[10%] bg-white rounded-3xl z-50 overflow-hidden shadow-2xl"
          >
            <div className="h-full overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-10 px-6 md:px-10 py-6 flex items-start justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-display mb-2">{project.title}</h2>
                  {project.subtitle && (
                    <p className="text-lg text-gray-600">{project.subtitle}</p>
                  )}
                  {project.tag && (
                    <p className="text-sm text-gray-500 mt-2">{project.tag}</p>
                  )}
                </div>
                <motion.button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Content */}
              <div className="px-6 md:px-10 py-8">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 bg-gray-100">
                  <Image
                    src={project.thumb}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="max-w-3xl mx-auto space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    This is a placeholder for project details. You can add descriptions, 
                    case studies, process notes, technologies used, and more here.
                  </p>
                  
                  {project.href && project.href !== "#" && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
