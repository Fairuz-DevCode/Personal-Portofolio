
import { Navbar } from "./sections/Navbar"
import { HeroSection } from "./sections/HeroSection"
import { AboutSection } from "./sections/AboutSection"
import { TechStackSection } from "./sections/TechStackSection"
import { ProjectsSection } from "./sections/ProjectsSection"
import { ContactSection } from "./sections/ContactSection"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#1C1D1F] text-[#F3F4F6] selection:bg-[#D28E72]/20 selection:text-[#D28E72]">
      <Navbar />
      <HeroSection />
      <main className="w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20">
        <AboutSection />
        <TechStackSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
