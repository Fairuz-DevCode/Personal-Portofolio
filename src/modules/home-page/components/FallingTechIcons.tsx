import { motion } from "motion/react"
import { TECH_BUBBLES, FALL_CONFIG } from "../data/techBubbles"

export { FALL_CONFIG }

export function FallingTechIcons() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 top-0 z-15 overflow-hidden select-none"
    >
      {TECH_BUBBLES.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="pointer-events-auto absolute"
          style={{
            bottom: bubble.bottom,
            left: bubble.left,
            right: bubble.right,
          }}
          // Physics drop from above ceiling down to the floor smoothly
          initial={{
            y: "-100vh",
            opacity: 0,
            rotate: bubble.initialRotate,
          }}
          animate={{
            y: 0,
            opacity: 1,
            rotate: bubble.finalRotate,
          }}
          transition={{
            type: "spring",
            damping: FALL_CONFIG.damping,
            stiffness: FALL_CONFIG.stiffness,
            mass: FALL_CONFIG.mass,
            bounce: FALL_CONFIG.bounce,
            delay: bubble.delay,
          }}
        >
          {/* Interactive ball on ground with draggable physics */}
          <motion.div
            drag
            dragConstraints={{ left: -40, right: 40, top: -40, bottom: 0 }}
            dragElastic={0.3}
            whileDrag={{ scale: 1.25, cursor: "grabbing", zIndex: 50 }}
            whileHover={{ scale: 1.15, cursor: "grab", zIndex: 40 }}
            className="group relative flex items-center justify-center rounded-full bg-[#232528]/95 border border-white/20 
            shadow-[0_8px_20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-shadow hover:shadow-[0_0_20px_rgba(210,142,114,0.4)] hover:border-[#D28E72]/70 cursor-grab"
            style={{
              width: bubble.size,
              height: bubble.size,
            }}
          >
            {/* Subtle radial ambient reflection */}
            <div
              className="absolute inset-0 rounded-full opacity-30 group-hover:opacity-70 transition-opacity"
              style={{
                background: `radial-gradient(circle at 35% 35%, ${bubble.color}50 0%, transparent 70%)`,
              }}
            />

            {/* The Tech Icon */}
            <div className="relative z-10 flex items-center justify-center w-full h-full p-2">
              {bubble.icon}
            </div>

            {/* Micro Tooltip on hover */}
            <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-150 transform scale-90 group-hover:scale-100 whitespace-nowrap rounded-md bg-[#141516]/95 border border-white/15 px-2 py-0.5 text-[11px] font-medium text-zinc-200 shadow-xl z-50">
              {bubble.name}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}
