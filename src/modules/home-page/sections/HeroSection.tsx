import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { FallingTechIcons } from "../components/FallingTechIcons"
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../components/icons"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-x-clip pt-20 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-20 bg-[#1C1D1F]"
    >
      {/* Background Subtle Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4.5rem_4.5rem]"
        aria-hidden="true"
      />

      {/* Warm radial rim light centered behind the photo */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(210,142,114,0.22)_0%,rgba(210,142,114,0.08)_32%,rgba(28,29,31,0)_68%)]"
        aria-hidden="true"
      />

      {/* Large background watermark typography: "FAIRUZ" right behind the character head/shoulder */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[38vh] sm:bottom-[34vh] md:bottom-[32vh] left-1/2 -translate-x-1/2 w-full text-center select-none z-0 overflow-hidden px-4"
      >
        <span className="block text-[24vw] sm:text-[18vw] md:text-[12vw] font-black tracking-widest text-white/5 uppercase whitespace-nowrap leading-none">
          FAIRUZ
        </span>
      </div>

      {/* Falling Interactive Physics-like Tech Icons */}
      <FallingTechIcons />

      {/* Center Character Image from public/hero.png */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 z-10 h-[68vh] sm:h-[65vh] md:h-[70vh] lg:h-[78vh] xl:h-[84vh] max-h-250 w-auto select-none flex items-end justify-center opacity-40 md:opacity-100 transition-opacity"
      >
        <img
          src="../../../../public/image/hero.png"
          alt="Fairuz Photo"
          className="h-full w-auto max-w-none object-contain object-bottom pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          loading="eager"
        />
      </motion.div>

      {/* TOP ROW: Left Name + CTA button | Right Follow Me with IG, LinkedIn, GitHub */}
      <div className="relative z-20 w-full px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 sm:pt-18 xl:pt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-start">
        {/* Top-Left: "HI I'M FAIRUZ" + Button */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          <span className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-zinc-300 tracking-tight leading-tight">
            HI
          </span>
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold tracking-tight text-white uppercase mt-0.5 mb-3 sm:mb-6">
            I'M FAIRUZ
          </h1>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 rounded-full bg-[#D28E72] hover:bg-[#c47f63] text-[#141516] pl-4 sm:pl-5 pr-2 sm:pr-2.5 py-2 sm:py-2.5 font-medium text-xs sm:text-sm transition-all shadow-lg shadow-black/40 group cursor-pointer"
          >
            <span>Let's Discuss</span>
            <span className="flex size-6 sm:size-7 items-center justify-center rounded-full bg-black/15 text-[#141516] transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight className="size-3.5 sm:size-4" />
            </span>
          </motion.a>
        </motion.div>

        {/* Top-Right: Follow Me (IG, LinkedIn, GitHub) + Tagline */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start sm:items-end md:items-end text-left mt-1 md:mt-0"
        >
          <div className="flex flex-col justify-center items-start sm:items-end max-w-60 lg:max-w-100">
            <span className="text-[11px] sm:text-xs md:pt-5 lg:text-md uppercase tracking-widest text-zinc-400 font-semibold mb-1.5 sm:mb-3">
              Follow Me
            </span>

            <div className="flex items-center gap-2 mb-2 sm:mb-3.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="size-8 sm:size-10 lg:size-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D28E72]/50 text-zinc-300 hover:text-[#D28E72] flex items-center justify-center transition-all hover:scale-105"
              >
                <InstagramIcon className="size-3.5 sm:size-4 lg:size-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/fairuz-irhab-2a4974394/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="size-8 sm:size-10 lg:size-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D28E72]/50 text-zinc-300 hover:text-[#D28E72] flex items-center justify-center transition-all hover:scale-105"
              >
                <LinkedinIcon className="size-3.5 sm:size-4 lg:size-8" />
              </a>
              <a
                href="https://github.com/Fairuz-DevCode"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="size-8 sm:size-10 lg:size-12 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#D28E72]/50 text-zinc-300 hover:text-[#D28E72] flex items-center justify-center transition-all hover:scale-105"
              >
                <GithubIcon className="size-3.5 sm:size-4 lg:size-8" />
              </a>
            </div>

            <p className="hidden sm:block sm:text-end md:text-xs lg:text-xl text-zinc-400 leading-relaxed">
              Building performant backend, and modern interactive web experiences.
            </p>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM ROW: Left Short Bio/Info | Right Bold "FULLSTACK DEVELOPER" */}
      <div className="relative z-20 w-full px-5 sm:px-10 md:px-14 lg:px-16 xl:px-20 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-end pt-10 sm:pt-24 md:pt-32 sm:pb-0">
        {/* Bottom-Left: Sekilas informasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="sm:max-w-80 order-2 md:order-1"
        >
          <p className="hidden xl:block md:text-base text-zinc-300 leading-relaxed font-normal">
            Hello, I'm <span className="text-white font-medium">Fairuz</span>, Full-Stack Developer dedicated to solving complex technical problems through scalable backend architecture, optimized infrastructure performance, robust security, and reliable end-to-end web applications.
          </p>
        </motion.div>

        {/* Bottom-Right: Bold "FULLSTACK DEVELOPER" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-end text-right order-1 md:order-2 sm:mb-0"
        >
          <h3 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.05]">
            FULLSTACK <br />
            DEVELOPER
          </h3>
        </motion.div>
      </div>
    </section>
  )
}
