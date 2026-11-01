import { motion } from "motion/react"
import { skillsLeft, skillsRight, type SkillItem } from "../data/skillsData"

function SkillRow({ skill, index }: { skill: SkillItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-4 group"
    >
      {/* Icon Badge */}
      <div className="size-11 rounded-2xl bg-[#232528] border border-white/8 flex items-center justify-center p-2.5 shrink-0 shadow-md group-hover:border-[#D28E72]/40 transition-colors">
        {skill.icon}
      </div>
      {/* Progress & Label Block */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors truncate">
            {skill.name}
          </span>
          <span className="text-xs font-mono font-medium text-zinc-400 group-hover:text-[#D28E72] transition-colors ml-2">
            {skill.percentage}%
          </span>
        </div>

        {/* Progress Bar Track */}
        <div className="h-2 w-full rounded-full bg-[#232528] overflow-hidden border border-white/5 relative">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.percentage}%` }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1 + (index % 4) * 0.06, ease: "easeOut" }}
            className="h-full rounded-full bg-linear-to-r from-[#D28E72] to-[#e4a185] shadow-[0_0_10px_rgba(210,142,114,0.35)]"
          />
        </div>
      </div>
    </motion.div>
  )
}

export function TechStackSection() {
  return (
    <section id="stack" className="py-24 border-t border-white/6 overflow-hidden">
      <div className="w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
            My Skills
          </h2>
        </motion.div>

        {/* 2-Column Skills UI Matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-7">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {skillsLeft.map((skill, index) => (
              <SkillRow key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {skillsRight.map((skill, index) => (
              <SkillRow key={skill.name} skill={skill} index={index + 4} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
