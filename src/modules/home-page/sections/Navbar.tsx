import { useState, useEffect } from "react"
import { motion } from "motion/react"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const sectionIds = ["about", "stack", "projects", "contact"]

    function handleScroll() {
      if (window.scrollY < 260) {
        setActiveSection("")
        return
      }

      const scrollPosition = window.scrollY + window.innerHeight * 0.35

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id)
          return
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-3">
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto max-w-[96vw]"
      >
        <nav
          aria-label="Main Navigation"
          className="flex items-center gap-1 sm:gap-2 rounded-full bg-[#1C1D1F]/60 backdrop-blur-xl border border-white/10 px-2.5 sm:px-4 py-1.5 sm:py-2 shadow-2xl shadow-black/60 transition-all hover:border-white/20 hover:bg-[#1C1D1F]/75"
        >
          {/* Brand Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
            className="px-2.5 py-1 text-sm font-semibold tracking-tight text-zinc-100 hover:text-[#D28E72] transition-colors rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D28E72]"
          >
            <span className="font-semibold text-xs sm:text-sm">Fairuz.</span>
          </a>

          {/* Nav Links in Center */}
          <ul className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-2 sm:px-3.5 py-1 rounded-full text-xs sm:text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D28E72] ${
                      isActive
                        ? "text-[#D28E72] bg-[#D28E72]/12 font-semibold"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-full border border-[#D28E72]/30 pointer-events-none"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </motion.header>
    </div>
  )
}
