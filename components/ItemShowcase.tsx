import { motion } from "framer-motion"
import Image from "next/image"

interface ShowcaseItem {
  number: number
  title: string
  description: string
  image: string
  tag?: string
}

const showcaseItems: ShowcaseItem[] = [
  {
    number: 1,
    title: "Mood Journal",
    description: "A daily reflection app for mindful living",
    image: "/images/project1.jpg",
    tag: "Mobile App | 2024"
  },
  {
    number: 2,
    title: "Figma Workspace",
    description: "My design toolkit and component library",
    image: "/images/project2.jpg",
    tag: "Design System | 2024"
  },
  {
    number: 3,
    title: "Code Editor Setup",
    description: "Where I bring designs to life with code",
    image: "/images/project3.jpg",
    tag: "Development | 2024"
  },
  {
    number: 4,
    title: "Sketchbook",
    description: "Ideas start here with pen and paper",
    image: "/images/project4.jpg",
    tag: "Ideation | 2024"
  },
]

export default function ItemShowcase() {
  return (
    <section className="w-full bg-white py-24 md:py-32 px-6 md:px-28 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
            Portfolio Items
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
            What's Inside Her Portfolio
          </h2>
          <div className="w-24 h-0.5 bg-black"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center">
                  <span className="text-6xl opacity-30">
                    {item.number === 1 && "📱"}
                    {item.number === 2 && "🎨"}
                    {item.number === 3 && "💻"}
                    {item.number === 4 && "📓"}
                  </span>
                </div>
                {/* Number badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {item.number}
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-serif font-bold group-hover:text-gray-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                {item.tag && (
                  <p className="text-xs uppercase tracking-wider text-gray-400">
                    {item.tag}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

