import { motion } from "framer-motion"
import { useState, useRef, useEffect } from "react"

interface AnnotationProps {
  number: number
  label: string
  x: number // percentage from left
  y: number // percentage from top
  itemX: number // item position x
  itemY: number // item position y
  description?: string
  containerRef?: React.RefObject<HTMLDivElement>
}

export default function Annotation({ 
  number, 
  label, 
  x, 
  y, 
  itemX, 
  itemY,
  description,
  containerRef
}: AnnotationProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (containerRef?.current) {
      const updateDimensions = () => {
        if (containerRef.current) {
          setDimensions({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
          })
        }
      }
      updateDimensions()
      window.addEventListener('resize', updateDimensions)
      return () => window.removeEventListener('resize', updateDimensions)
    }
  }, [containerRef])

  // Convert percentages to pixels
  const labelX = (dimensions.width * x) / 100
  const labelY = (dimensions.height * y) / 100
  const itemXPx = (dimensions.width * itemX) / 100
  const itemYPx = (dimensions.height * itemY) / 100

  return (
    <>
      {/* Connection line */}
      {dimensions.width > 0 && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          style={{ overflow: "visible" }}
        >
          <motion.path
            d={`M ${labelX} ${labelY} L ${itemXPx} ${itemYPx}`}
            stroke="#000"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 0.8, delay: number * 0.1 }}
          />
        </svg>
      )}

      {/* Annotation label */}
      <motion.div
        className="absolute z-20 cursor-pointer"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          transform: "translate(-50%, -50%)",
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15,
          delay: number * 0.15 
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm shadow-lg border-2 border-white"
          animate={isHovered ? { scale: 1.15, rotate: [0, -5, 5, -5, 0] } : {}}
          transition={{ duration: 0.3 }}
        >
          {number}
        </motion.div>

        {/* Label text */}
        <motion.div
          className="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-30"
          initial={{ opacity: 0, y: -10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0.8, y: 0 }}
        >
          <div className="bg-white/98 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-gray-300">
            <p className="text-sm font-handwritten text-black font-semibold">
              {label}
            </p>
            {description && isHovered && (
              <motion.p
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: 4 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="text-xs text-gray-600 whitespace-normal max-w-xs pt-1 border-t border-gray-200"
              >
                {description}
              </motion.p>
            )}
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}
