import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTheme } from '../context/ThemeContext'
import LiquidMetalButton from './ui/LiquidMetalButton'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: contentRef.current, start: 'top 80%' },
        }
      )
    }
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 80%' },
        }
      )
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative z-10 py-32 section-padding">
      <div className="divider mb-32" />

      <div className="max-w-4xl mx-auto space-y-16">
        <p className="text-center text-primary font-display text-lg italic tracking-wide">
          We are ready when you are.
        </p>
        {/* Form */}
        {!submitted ? (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[0.7rem] tracking-[0.1em] uppercase text-text-dim block mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-dark-500 px-4 py-3 text-sm text-text placeholder:text-dark-400 focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-[0.7rem] tracking-[0.1em] uppercase text-text-dim block mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border border-dark-500 px-4 py-3 text-sm text-text placeholder:text-dark-400 focus:border-primary/50 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="text-[0.7rem] tracking-[0.1em] uppercase text-text-dim block mb-2">Subject</label>
              <div className="relative">
                <select
                  className="appearance-none w-full bg-dark border border-dark-500 pl-4 pr-12 py-3 text-sm text-text-muted focus:border-primary/50 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option>Intelligence-Driven Investigations</option>
                  <option>Strategic Security Management, Consulting & Audits</option>
                  <option>Independent Security Audits & Compliance Reviews</option>
                  <option>Emergency Assistance & Duty of Care</option>
                  <option>Security Intelligence & Risk Consulting</option>
                  <option>Elite Training & Capacity Building</option>
                </select>
                <svg
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-text-dim"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <div>
              <label className="text-[0.7rem] tracking-[0.1em] uppercase text-text-dim block mb-2">Message</label>
              <textarea
                rows={5}
                required
                className="w-full bg-transparent border border-dark-500 px-4 py-3 text-sm text-text placeholder:text-dark-400 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                placeholder="How can we help you?"
              />
            </div>

            {theme === 'silver' ? (
              <LiquidMetalButton
                label="Send Message Securely"
                type="submit"
                className="w-full"
              />
            ) : (
              <button type="submit" className="btn-primary w-full justify-center">
                Send Message Securely
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </button>
            )}

            <p className="text-text-dim text-xs text-center">
              All communications are encrypted and handled with strict confidentiality.
            </p>
          </form>
        ) : (
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="heading-sm text-text mb-3">Message Received</h3>
              <p className="body-md">We will respond within 12 hours with absolute discretion.</p>
            </div>
          </div>
        )}

        {/* Contact details (below form, side by side) */}
        <div ref={contentRef}>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-12">
            <a href="tel:+436643444616" className="flex items-start gap-4 group">
              <div className="w-10 h-10 border border-dark-500 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <p className="text-text text-sm font-medium">Direct Line</p>
                <p className="text-text-muted text-sm group-hover:text-primary transition-colors">+43 (0) 664 344 4616</p>
              </div>
            </a>

            <a href="mailto:office@kaspit.net" className="flex items-start gap-4 group">
              <div className="w-10 h-10 border border-dark-500 flex items-center justify-center shrink-0 group-hover:border-primary/40 transition-colors">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div>
                <p className="text-text text-sm font-medium">Email</p>
                <p className="text-text-muted text-sm group-hover:text-primary transition-colors">office@kaspit.net</p>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
