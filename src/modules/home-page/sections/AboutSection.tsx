import { ArrowUpRight, Mail } from "lucide-react"
import { motion } from "motion/react"
import { GithubIcon, LinkedinIcon } from "../components/icons"

export function AboutSection() {
  return (
    <section id="about" className="py-24 border-t border-white/6 overflow-hidden">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Stylized Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: -24 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 sm:w-72 md:w-80 aspect-square">
              {/* Outer decorative dashed halo resembling hand-drawn circle */}
              <div
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#D28E72]/30 animate-[spin_60s_linear_infinite]"
                aria-hidden="true"
              />

              {/* Warm ambient backglow */}
              <div
                className="absolute -inset-2 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(210,142,114,0.22)_0%,rgba(35,37,40,0)_70%)] blur-md -z-10"
                aria-hidden="true"
              />

              {/* Main Circular Portrait Container */}
              <div className="relative w-full h-full rounded-full bg-linear-to-b from-[#282a2e] to-[#1C1D1F] border-2 border-[#D28E72]/45 overflow-hidden shadow-2xl flex items-end justify-center p-2">
                {/* Subtle internal ring pattern */}
                <div
                  className="absolute inset-2 rounded-full border border-white/5 pointer-events-none"
                  aria-hidden="true"
                />

                <img
                  src="../../../../public/image/hero.png"
                  alt="Fairuz Irhab Portrait"
                  className="w-full h-auto object-contain object-bottom select-none translate-y-3"
                  loading="lazy"
                />
              </div>

              {/* Floating Badge (Top Right) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -top-1 -right-2 sm:top-2 sm:-right-3 rounded-full bg-[#D28E72] text-[#141516] px-3.5 py-1.5 text-xs font-semibold shadow-lg shadow-black/40 border border-white/20 whitespace-nowrap select-none"
              >
                Fullstack
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Information */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center max-w-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                Profile Overview
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-6 flex items-center gap-2">
              About Me
              <span className="text-[#D28E72] text-xl select-none font-mono">/&gt;</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              <p>
                Hello, I'm <strong className="font-semibold text-zinc-100">Fairuz Irhab</strong>,
                Full-Stack Developer and Informatics student specializing in end-to-end system design, scalable backend architecture, and high-performance digital solutions.
              </p>
              <p>
                I solve complex engineering challenges by bridging resilient backend logic, spatial data processing (PostgreSQL & PostGIS), optimized infrastructure, and modern responsive frontends.
              </p>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-180">
              Dedicated to clean code, security, and high availability, I focus on building reliable software ranging from interactive WebGIS platforms to full-stack applications that operates seamlessly at scale.
              </p>
            </div>

            {/* Bottom Action Row: Get in Touch & Social Links */}
            <div className="mt-8 pt-6 border-t border-white/6 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#D28E72] hover:bg-[#c47f63] text-[#141516] font-medium text-xs sm:text-sm px-5 py-2.5 shadow-md shadow-black/30 transition-all group"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <div className="hidden sm:block h-4 w-px bg-white/15" aria-hidden="true" />

              <div className="flex items-center gap-3">
                <span className="text-xs text-zinc-400 font-medium">Follow Me</span>
                <a
                  href="https://github.com/Fairuz-bit"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="size-8 rounded-full bg-[#232528] hover:bg-[#2A2C30] border border-white/8 hover:border-[#D28E72]/40 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <GithubIcon className="size-4" />
                </a>
                <a
                  href="https://linkedin.com/in/fairuz-irhab"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="size-8 rounded-full bg-[#232528] hover:bg-[#2A2C30] border border-white/8 hover:border-[#D28E72]/40 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <LinkedinIcon className="size-4" />
                </a>
                <a
                  href="mailto:fairuz@example.com"
                  aria-label="Email Fairuz"
                  className="size-8 rounded-full bg-[#232528] hover:bg-[#2A2C30] border border-white/8 hover:border-[#D28E72]/40 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                >
                  <Mail className="size-4 text-[#D28E72]" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
