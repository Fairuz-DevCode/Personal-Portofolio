import { useState } from "react"
import { ExternalLink, RotateCw, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"
import { GithubIcon } from "../components/icons"
import { projects } from "../data/projectsData"

export function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [flippedId, setFlippedId] = useState<string | null>(null)

  const handleCardClick = (id: string) => {
    setFlippedId((current) => (current === id ? null : id))
  }

  return (
    <section id="projects" className="py-24 border-t border-white/6 overflow-hidden">
      <div className="w-full">
        {/* Section Header with "View All Projects" Link (Matching reference Image #1) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10"
        >
          <div className="flex items-center gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Featured Projects
            </h2>
          </div>

          <a
            href="https://github.com/Fairuz-bit?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-400 hover:text-[#D28E72] transition-colors group w-fit"
          >
            <span>View All Projects</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* 2 Cards per Row Grid with 3D Flip Card Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const isFlipped = hoveredId === project.id || flippedId === project.id

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative h-108 sm:h-113 lg:h-140 w-full perspective-distant cursor-pointer select-none"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => handleCardClick(project.id)}
              >
                {/* 3D Rotating Flipper */}
                <motion.div
                  className="relative h-full w-full rounded-2xl"
                  style={{ transformStyle: "preserve-3d" }}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* ================= FRONT FACE ================= */}
                  <div
                    className="absolute inset-0 h-full w-full rounded-2xl bg-[#232528] border border-white/8 p-4 flex flex-col justify-between shadow-xl hover:border-white/20 transition-colors"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  >
                    {/* Top: UI Preview Mockup */}
                    <div>
                      {/* Top: UI Preview Image */}
                      <div className="relative w-full h-55 sm:h-52 lg:h-80 rounded-xl overflow-hidden border border-white/10 bg-[#181918]">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Title & Tech line */}
                      <div className="mt-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-base font-semibold text-zinc-100 group-hover:text-white transition-colors">
                            {project.title}
                          </h3>
                          {/* Flip hint icon */}
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-zinc-400 opacity-60 group-hover:opacity-100 transition-opacity">
                            <RotateCw className="size-3" />
                            flip
                          </span>
                        </div>
                        <p className="text-[11px] font-mono text-[#D28E72]/90 mt-1 truncate">
                          {project.techLine}
                        </p>
                      </div>

                      {/* Short Description */}
                      <p className="mt-2 text-xs text-zinc-400 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Bottom Action Row: Live Demo on Left & GitHub Icon on Right */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D28E72] hover:text-[#e4a185] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D28E72] rounded"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="size-3.5" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        onClick={(e) => e.stopPropagation()}
                        className="p-1 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D28E72]"
                      >
                        <GithubIcon className="size-4" />
                      </a>
                    </div>
                  </div>

                  {/* ================= BACK FACE (FLIPPED 180 DEG) ================= */}
                  <div
                    className="absolute inset-0 h-full w-full rounded-2xl bg-linear-to-b from-[#2A2C30] to-[#1C1D1F] border border-[#D28E72]/45 p-5 flex flex-col justify-between shadow-2xl"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <div>
                      {/* Category Pill & Flip Back Indicator */}
                      <div className="flex items-center justify-between pb-2 border-b border-white/10">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#D28E72] bg-[#D28E72]/10 px-2 py-0.5 rounded-full border border-[#D28E72]/30">
                          {project.category}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-zinc-400">
                          <RotateCw className="size-3" />
                          back
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-zinc-100 mt-2.5">
                        {project.title}
                      </h4>

                      {/* Architecture & Engineering Highlights */}
                      <p className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider mt-3 mb-2">
                        Key Architecture Highlights:
                      </p>
                      <ul className="space-y-1.5">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-1.5 text-xs text-zinc-300 leading-snug"
                          >
                            <CheckCircle2 className="size-3.5 text-[#D28E72] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Badges */}
                      <div className="mt-3.5 flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono bg-[#18191B] border border-white/10 text-zinc-300 px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Back Action Buttons */}
                    <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#D28E72] hover:bg-[#c47f63] text-[#141516] font-semibold text-xs py-2 shadow-md transition-colors"
                      >
                        <Sparkles className="size-3.5" />
                        <span>Launch Live Demo</span>
                        <ExternalLink className="size-3" />
                      </a>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#1C1D1F] hover:bg-[#25272a] border border-white/10 text-zinc-300 hover:text-white text-xs py-1.5 transition-colors"
                      >
                        <GithubIcon className="size-3.5" />
                        <span>View Source Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
