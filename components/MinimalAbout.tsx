import { motion } from "framer-motion"

export default function MinimalAbout() {
  return (
    <section id="about" className="bg-[#F7F6F3] py-12 md:py-20 lg:py-24 border-t border-gray-300 px-4 md:px-8">
      <div className="max-w-6xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="bg-gray-50 p-8 md:p-10 lg:p-12">
          {/* Section header */}
          <div className="mb-12">
            <div className="text-xs tracking-widest text-gray-600 mb-4">
              [ FOUNDER NARRATIVE ]
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal mb-4">
              ABOUT
            </h2>
            <div className="w-16 h-px bg-charcoal mb-4"></div>
            <p className="text-sm text-gray-600 max-w-2xl">
              A founder narrative anchored in curiosity and collaboration.
            </p>
          </div>

          {/* Content grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 max-w-3xl"
          >
              <div className="text-sm md:text-base leading-relaxed text-gray-700 space-y-4">
                <p>
                  I'm a Tufts women's lacrosse alum turned creative technical product builder. After graduating, I joined Nasdaq's Developer Experience team, working on special projects as a software engineer who prototypes fast, uses AI tools, and thinks like a founder.
                </p>
                <p>
                  My approach balances technical precision with emotional storytelling. I build 
                  thoughtful digital experiences that bridge human needs with technological 
                  possibilities—always asking "what if" and "why not."
                </p>
                <p>
                  At CTRL + ALT + CREATE Labs, I document ideation, failures, and micro-wins 
                  as a builder with vision.
                </p>
              </div>

              {/* Skills */}
              <div className="pt-8 border-t border-gray-300">
                <div className="text-xs tracking-widest text-gray-600 mb-4">
                  [ TOOLS & TECH ]
                </div>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>Next.js • LangChain • Supabase • Design Systems</p>
                  <p>UI/UX Engineering • AI Tools • Product Strategy</p>
                </div>
              </div>

              {/* Contact */}
              <div className="pt-8 border-t border-gray-300">
                <div className="text-xs tracking-widest text-gray-600 mb-4">
                  [ CONTACT ]
                </div>
                <div className="space-y-2 text-sm">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-700 hover:text-charcoal transition-colors"
                  >
                    [ LINKEDIN ]
                  </a>
                  <a
                    href="https://github.com/codebyellalesperance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-gray-700 hover:text-charcoal transition-colors"
                  >
                    [ GITHUB ]
                  </a>
                  <a
                    href="mailto:ella@example.com"
                    className="block text-gray-700 hover:text-charcoal transition-colors"
                  >
                    [ EMAIL ]
                  </a>
                  <p className="text-xs text-gray-600 mt-4">
                    Interested in collaborating or hiring a technical product builder? 
                    Let's build something together.
                  </p>
                </div>
              </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

