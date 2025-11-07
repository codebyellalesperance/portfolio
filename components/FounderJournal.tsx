import { motion } from "framer-motion"

export default function FounderJournal() {
  return (
    <section id="notes" className="bg-brand-bg py-12 md:py-20 lg:py-24 border-t border-gray-300 px-4 md:px-8">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="mb-16">
          <div className="text-xs tracking-widest text-gray-600 mb-4">
            [ FOUNDER JOURNAL ]
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal mb-4">
            NOTES
          </h2>
          <div className="w-16 h-px bg-charcoal"></div>
          <p className="text-sm text-gray-600 mt-4 max-w-2xl">
            Thought pieces on design, AI, and product strategy. Documenting ideation, failures, and micro-wins.
          </p>
        </div>

        {/* Content cards */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-warm-white p-8 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="text-xs tracking-widest text-accent-blue mb-3">
              [ AI PROTOTYPING ]
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-3">
              How I Built an AI Tool in 14 Days (LangChain + Next.js)
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A technical breakdown of rapid prototyping with AI tools, from idea to MVP in two weeks. 
              Covering LangChain integration, Next.js architecture, and the 2-week build framework.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-warm-white p-8 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="text-xs tracking-widest text-accent-blue mb-3">
              [ PRODUCT DESIGN ]
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-3">
              Designing Developer Experience Like a Product
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Applying product thinking to developer tools and design systems. How to create 
              experiences that balance technical precision with intuitive interaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-warm-white p-8 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="text-xs tracking-widest text-accent-blue mb-3">
              [ BUILD FRAMEWORK ]
            </div>
            <h3 className="text-xl font-semibold text-charcoal mb-3">
              The 2-Week Build Framework: Idea → Prototype → Reflection
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              A systematic approach to rapid prototyping. How to move from concept to working 
              MVP in 14 days, with lessons learned and iteration strategies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

