import { useState } from "react"
import { MapPin, Mail, Phone, ArrowRight, CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"
import { GithubIcon, LinkedinIcon } from "../components/icons"

const CURRENT_YEAR = new Date().getFullYear()

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Open user's default email client with pre-filled content
    const mailtoSubject = encodeURIComponent(formState.subject || `Message from ${formState.name}`)
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\n\nMessage:\n${formState.message}`
    )
    window.location.href = `mailto:fairuz@example.com?subject=${mailtoSubject}&body=${mailtoBody}`
    setSubmitted(true)
  }

  return (
    <footer id="contact" className="py-24 border-t border-white/6 overflow-hidden">
      <div className="w-full">
        {/* Main 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ================= LEFT COLUMN: Form Card ================= */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 rounded-2xl bg-[#232528] border border-white/8 p-6 sm:p-8 lg:p-10 shadow-2xl relative"
          >
            {/* Header */}
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100 mb-6">
              Get in Touch with Me
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center"
              >
                <div className="size-12 rounded-full bg-[#D28E72]/15 text-[#D28E72] flex items-center justify-center mb-4 border border-[#D28E72]/30">
                  <CheckCircle2 className="size-6" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-100">Message Ready!</h3>
                <p className="text-sm text-zinc-400 mt-1 max-w-sm">
                  Your email client has been prepared. If it didn't open automatically, you can email directly at{" "}
                  <a href="mailto:fairuz@example.com" className="text-[#D28E72] underline">
                    fairuz@example.com
                  </a>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-zinc-400 hover:text-white underline font-mono"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Row 1: Full name & Email address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-zinc-400">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-xl bg-[#1C1D1F] border border-white/8 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-[#D28E72]/50 focus:ring-1 focus:ring-[#D28E72] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-medium text-zinc-400">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full rounded-xl bg-[#1C1D1F] border border-white/8 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-[#D28E72]/50 focus:ring-1 focus:ring-[#D28E72] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2: Subject & Phone number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs font-medium text-zinc-400">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="e.g. Project Inquiry"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full rounded-xl bg-[#1C1D1F] border border-white/8 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-[#D28E72]/50 focus:ring-1 focus:ring-[#D28E72] transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-medium text-zinc-400">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="e.g. +62 812 3456 7890"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full rounded-xl bg-[#1C1D1F] border border-white/8 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-[#D28E72]/50 focus:ring-1 focus:ring-[#D28E72] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 3: Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-zinc-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, idea, or questions..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full rounded-xl bg-[#1C1D1F] border border-white/8 p-4 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-[#D28E72]/50 focus:ring-1 focus:ring-[#D28E72] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-2">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#D28E72] hover:bg-[#c47f63] text-[#141516] font-semibold text-xs sm:text-sm px-7 py-3 shadow-lg shadow-black/30 transition-all cursor-pointer"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="size-4" />
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>

          {/* ================= RIGHT COLUMN: Contact Information ================= */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex flex-col justify-between h-full pt-2"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100 mb-2">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-8">
                Let's discuss your next project, spatial database architecture, or collaborative full-stack opportunities.
              </p>

              {/* Info Items with Colored Icon Badges (Matching Screenshot) */}
              <div className="flex flex-col gap-6">
                {/* 1. Location */}
                <div className="flex items-center gap-4 group">
                  <div className="size-12 rounded-xl bg-[#D28E72]/15 border border-[#D28E72]/30 text-[#D28E72] flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <MapPin className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono uppercase text-zinc-400">Our Location</p>
                    <p className="text-sm font-semibold text-zinc-100 mt-0.5">Surabaya, Indonesia</p>
                  </div>
                </div>

                {/* 2. Email Address */}
                <a
                  href="mailto:fairuz@example.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="size-12 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Mail className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono uppercase text-zinc-400">Email Address</p>
                    <p className="text-sm font-semibold text-zinc-100 group-hover:text-[#D28E72] transition-colors mt-0.5 truncate">
                      fairuz@example.com
                    </p>
                  </div>
                </a>

                {/* 3. Phone Number */}
                <a
                  href="https://wa.me/6281282160934"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="size-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
                    <Phone className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono uppercase text-zinc-400">Phone Number</p>
                    <p className="text-sm font-semibold text-zinc-100 group-hover:text-[#D28E72] transition-colors mt-0.5">
                      +62 812 8216 0934
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Social Channels Row */}
            <div className="mt-10 pt-6 border-t border-white/6">
              <p className="text-xs font-mono uppercase text-zinc-400 mb-3">Connect on Socials</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Fairuz-bit"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#232528] border border-white/8 hover:border-[#D28E72]/40 hover:bg-[#282a2d] text-zinc-300 hover:text-white px-3.5 py-2 text-xs font-medium transition-colors"
                >
                  <GithubIcon className="size-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href="https://linkedin.com/in/fairuz-irhab"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#232528] border border-white/8 hover:border-[#D28E72]/40 hover:bg-[#282a2d] text-zinc-300 hover:text-white px-3.5 py-2 text-xs font-medium transition-colors"
                >
                  <LinkedinIcon className="size-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer Credits */}
        <div className="mt-20 pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {CURRENT_YEAR} Fairuz Irhab. All rights reserved.</p>
          <p className="font-mono text-zinc-600">Built with React, Vite &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
