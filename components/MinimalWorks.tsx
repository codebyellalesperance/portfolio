import { motion } from "framer-motion"
import { projects } from "../data/projects"

export default function MinimalWorks() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section id="projects" className="bg-brand-bg py-12 md:py-20 lg:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="mb-16">
          <div className="text-xs tracking-widest text-gray-600 mb-4">
            [ AI PROTOTYPES & MVPS ]
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal mb-4">
            PROJECTS
          </h2>
          <div className="w-16 h-px bg-charcoal mb-4"></div>
          <p className="text-sm text-gray-600 max-w-2xl">
            Two-week MVPs and AI prototypes. Built with Next.js, LangChain, Supabase, and human-centered design.
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-16 md:space-y-24">
          {featured.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-[#FAFAF9] p-8 md:p-10 lg:p-12 hover:shadow-md transition-shadow">
                {/* Project metadata */}
                <div className="flex flex-wrap justify-between items-start mb-6 text-xs tracking-widest text-gray-600">
                  <span>[ {project.title.toUpperCase()} ]</span>
                  {project.tag && <span className="text-accent-blue">[ {project.tag.toUpperCase()} ]</span>}
                </div>

                {/* Project title */}
                <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 group-hover:text-accent-blue transition-colors">
                  {project.title.toUpperCase()}
                </h3>

                {/* Project description */}
                {project.subtitle && (
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-2xl">
                    {project.subtitle}
                  </p>
                )}

                {/* Project image placeholder */}
                <div className="mt-8 aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-black/20 text-sm tracking-widest">
                    [ IMAGE PLACEHOLDER ]
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

