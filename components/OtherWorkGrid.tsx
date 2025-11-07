import { motion } from "framer-motion"
import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"
import { useState } from "react"
import ProjectModal from "./ProjectModal"
import { Project } from "../data/projects"

export default function OtherWorkGrid() {
  const others = projects.filter((p) => !p.featured)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="work" className="px-6 md:px-28 lg:px-40 py-20 md:py-32 border-t border-gray-200 scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Archive</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            Other Work
          </h2>
          <div className="w-20 h-0.5 bg-black"></div>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={p} onClick={() => handleProjectClick(p)} />
            </motion.div>
          ))}
        </div>
      </section>
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
