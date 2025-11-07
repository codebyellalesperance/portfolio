import { motion } from "framer-motion"
import Image from "next/image"
import { Project } from "../data/projects"
import { useState } from "react"

interface ProjectCardProps {
  project: Project
  onClick?: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (onClick) {
      onClick()
    } else if (project.href && project.href !== "#") {
      window.open(project.href, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <motion.div
      onClick={handleClick}
      className="block group cursor-pointer relative"
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-2xl opacity-0 blur-xl"
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 mb-3 shadow-lg">
        <Image
          src={project.thumb}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
        {/* Playful arrow indicator */}
        <motion.div
          className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ scale: 0, rotate: -45 }}
          animate={isHovered ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -45 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <motion.span
            animate={isHovered ? { x: [0, 3, 0] } : {}}
            transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.5 }}
            className="text-black text-lg"
          >→</motion.span>
        </motion.div>
      </div>
      <div className="mt-3">
        <motion.h3
          className="text-lg font-medium group-hover:text-black transition-colors flex items-center gap-2"
          whileHover={{ x: 4 }}
        >
          {project.title}
          {isHovered && (
            <motion.span
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              className="text-lg"
            >✨</motion.span>
          )}
        </motion.h3>
        {project.subtitle && (
          <p className="text-sm text-gray-600 mt-1">{project.subtitle}</p>
        )}
        {project.tag && (
          <motion.p
            className="text-sm text-gray-500 mt-1"
            animate={isHovered ? { opacity: [0.5, 1, 0.5] } : { opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            {project.tag}
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}
