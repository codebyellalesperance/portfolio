import { motion } from "framer-motion"
import Image from "next/image"
import { projects } from "../data/projects"
import { useState } from "react"
import ProjectModal from "./ProjectModal"
import { Project } from "../data/projects"

export default function EditorialProjects() {
  const allProjects = projects
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  return (
    <>
      <section id="projects" className="bg-brand-bg py-16 md:py-24 lg:py-32 border-t border-gray-300 px-[7vw]">
        <div className="relative">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="text-[10px] tracking-[0.15em] uppercase text-gray-500 mb-4">
              [ SELECTED WORKS ]
            </div>
            <h2 className="text-[4vw] md:text-[3.5vw] leading-[0.95] tracking-tight uppercase font-semibold text-charcoal mb-6 max-w-[70%]">
              PROJECTS
            </h2>
            <div className="border-t border-gray-300 mt-8 mb-6"></div>
            <p className="text-[16px] leading-[1.7] text-gray-700 max-w-[640px]">
              Two-week MVPs, AI prototypes, and other built projects. Built with a variety of tools and technologies including Next.js, LangChain, Supabase, and human-centered design. 
            </p>
          </motion.div>

          {/* Horizontal scrolling container */}
          <div 
            className="overflow-x-auto overflow-y-visible pb-8 -mx-[7vw] px-[7vw] scrollbar-hide"
            style={{ 
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            <div className="flex gap-8 md:gap-12" style={{ width: 'max-content' }}>
              {allProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer flex-shrink-0 flex"
                  onClick={() => handleProjectClick(project)}
                  style={{ width: '320px', minWidth: '320px', height: '520px' }}
                >
                  {/* Compact project card */}
                  <div className="border-t border-gray-200 pt-6 w-full h-full flex flex-col overflow-hidden" style={{ height: '100%' }}>
                    {/* Metadata row */}
                    <div className="flex flex-col gap-2 mb-4 text-[10px] tracking-[0.15em] uppercase text-gray-500">
                      <span>[ {project.title.toUpperCase()} ]</span>
                      {project.tag && (
                        <span className="text-accent-blue">[ {project.tag.toUpperCase()} ]</span>
                      )}
                    </div>

                    {/* Project title */}
                    <h3 className="text-xl md:text-2xl leading-tight tracking-tight uppercase font-semibold text-charcoal mb-6 group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h3>

                    {/* Project description */}
                    {project.subtitle && (
                      <p className="text-sm leading-relaxed text-gray-700 mb-8 flex-grow min-h-0 project-description">
                        {project.subtitle}
                      </p>
                    )}

                    {/* Project image */}
                    <div className="aspect-[4/3] relative overflow-hidden rounded-sm mt-auto flex-shrink-0 bg-gray-100">
                      {project.thumb ? (
                        <Image
                          src={project.thumb}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 80vw, 320px"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                          <span className="text-black/10 text-xs tracking-widest text-center px-2">
                            [ IMAGE ]
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Spacer for better scroll end */}
              <div className="flex-shrink-0 w-[7vw]"></div>
            </div>
          </div>
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

