"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "projects", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
            <div className="lg:col-span-3 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">PORTFOLIO / 2026</div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Sarvesh
                  <br />
                  <span className="text-muted-foreground">Madullapalli</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Software Engineer building
                  <span className="text-foreground"> full-stack</span>,<span className="text-foreground"> mobile</span>,
                  and<span className="text-foreground"> ML-driven</span> products, from React Native apps to RAG systems
                  and computer-vision pipelines. Most at home shipping fast at
                  <span className="text-foreground"> startups</span> and building
                  <span className="text-foreground"> robots</span>.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Open to internships
                  </div>
                  <div>Bay Area, CA</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">CURRENTLY</div>
                <div className="space-y-2">
                  <div className="text-foreground">Software Engineering Fellow</div>
                  <div className="text-muted-foreground">@ Santa Clara Schools Foundation</div>
                  <div className="text-xs text-muted-foreground">2024 — Present · UCLA CSE '28</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "TypeScript", "React Native", "Next.js", "PyTorch"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <h2 className="text-3xl sm:text-4xl font-light">Selected Work</h2>
              <div className="text-sm text-muted-foreground font-mono">2022 — 2026</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {[
                {
                  year: "Jul 2024 — Now",
                  role: "Software Engineering Fellow",
                  company: "Santa Clara Schools Foundation",
                  description:
                    "Rebuilt the donation and outreach site for a 6.5k-member nonprofit and shipped a financial-literacy simulation with Mission City Federal Credit Union, with indexed lookups returning history in under 20ms.",
                  tech: ["Next.js", "Node.js", "JavaScript"],
                },
                {
                  year: "Jun 2024",
                  role: "Software & Hardware Engineering Intern",
                  company: "Seeed Studio",
                  description:
                    "Built a distributed network of ESP32-S3 sensor nodes streaming structural-vibration data over MQTT to a React.js dashboard; earned 2nd place at the NextFlex-sponsored FlexFactor competition.",
                  tech: ["ESP32", "MQTT", "React.js"],
                },
                {
                  year: "Sep 2023 — Aug 2025",
                  role: "Senior Developer",
                  company: "Xatalyst Labs (Constellation Technologies)",
                  description:
                    "Built React Native screens for an investor-backed AI fitness startup, integrating MediaPipe pose-detection models with real-time form feedback; led a 3-person team on a two-sided sponsor marketplace.",
                  tech: ["React Native", "MediaPipe", "Figma"],
                },
                {
                  year: "Dec 2022 — Sep 2025",
                  role: "Freelance Software Engineer · Top 7%",
                  company: "Replit Bounty Hunters",
                  description:
                    "Shipped a production RAG system for NYT-bestselling author Shane Parrish over 800+ private documents, and an automated video-generation pipeline for 12M-subscriber creator Orkun Isitmak on Google Cloud TPUs.",
                  tech: ["OpenAI", "PyTorch", "FFmpeg"],
                },
                {
                  year: "Dec 2022 — Mar 2023",
                  role: "Full-Stack AI Engineer (Contract)",
                  company: "Gate to Ukraine",
                  description:
                    "Built a Ukrainian-to-English translation app using OpenAI Whisper for transcription and GPT-3.5 for translation, streamlining the testimonial workflow for a nonprofit supporting 4.4k+ displaced families.",
                  tech: ["Whisper", "GPT-3.5", "Full-Stack"],
                },
                {
                  year: "Aug 2022",
                  role: "Backend Developer",
                  company: "Stanford Research to the People",
                  description:
                    "Shipped the org's first patient-matching GUI with multi-criteria filtering and cut diagnostic matching latency from 8.0s to 2.2s (3.6x) by denormalizing and caching Airtable lookups for rare-disease research.",
                  tech: ["React.js", "Airtable", "Caching"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-14 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-3">
                    <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3 mr-[-50px]">
                    <div>
                      <h3 className="text-lg sm:text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{job.description}</p>
                  </div>

                  <div className="lg:col-span-5 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-20 sm:py-32 opacity-0"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl sm:text-4xl font-light">Featured Projects</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {[
                {
                  title: "Sports Analytics Research",
                  excerpt:
                    "Fine-tuned TrackNetV3 to localize shuttles at 30 FPS through motion blur, fused with an unscented Kalman filter for 3D trajectory reconstruction; co-authoring a research paper with a UCSC PhD mentor.",
                  date: "Jul 2025 — Present",
                  readTime: "PyTorch / OpenCV",
                  url: null,
                },
                {
                  title: "Robotics Control Systems",
                  excerpt:
                    "Implemented mecanum-drive inverse kinematics and PIDF flywheel control from scratch in Java, plus 30 FPS OpenCV AprilTag detection for autonomous alignment, contributing to a 1st-place FTC Inspire award.",
                  date: "Apr 2025 — Present",
                  readTime: "Java / OpenCV / PID",
                  url: null,
                },
                {
                  title: "Funding Your Futures",
                  excerpt:
                    "Solo-built financial-literacy simulation deployed at gym-scale events for 200+ students, syncing student and admin state over Server-Sent Events with Amazon Bedrock reports. $2.5k funded.",
                  date: "Jun 2024 — Present",
                  readTime: "Next.js / SSE",
                  url: "https://github.com/EpicCodeWizard/FYF-v2-public",
                },
                {
                  title: "ExpressMate",
                  excerpt:
                    "AI calculus tutor recognized by Adobe at Los Altos Hacks VIII, orchestrating Wolfram Alpha, Claude, and Manim to generate narrated video walkthroughs on demand.",
                  date: "Apr 2024",
                  readTime: "Next.js / Claude API",
                  url: null,
                },
                {
                  title: "ScreenExtend",
                  excerpt:
                    "Founding engineer on a live startup that turns any spare phone, tablet, or laptop into a wireless secondary display, shipped and available at screenextend.app.",
                  date: "Sep 2023 — Present",
                  readTime: "Startup · Live",
                  url: "https://screenextend.app/",
                },
                {
                  title: "AI-Powered DECA Platform",
                  excerpt:
                    "Adaptive DECA training platform predicting topic weaknesses at 87% accuracy; users scored 10 points higher and secured 40% of CA finance ICDC spots.",
                  date: "Jun 2023 — Present",
                  readTime: "Python / Scikit-learn",
                  url: "https://github.com/EpicCodeWizard/wbetrain-v2-public",
                },
              ].map((post, index) => {
                const CardTag = post.url ? "a" : "div"
                return (
                  <CardTag
                    key={index}
                    {...(post.url ? { href: post.url, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`group block p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg ${
                      post.url ? "cursor-pointer" : ""
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>

                      {post.url ? (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                          <span>View project</span>
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-sm text-muted-foreground/70 font-mono">
                          <span>Private</span>
                        </div>
                      )}
                    </div>
                  </CardTag>
                )
              })}
            </div>
          </div>
        </section>

        <section id="connect" ref={(el) => (sectionsRef.current[3] = el)} className="py-20 sm:py-32 opacity-0">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Always interested in software engineering internships, research collaborations, and conversations
                  about systems, ML, and building things that ship.
                </p>

                <div className="space-y-4">
                  <Link
                    href="mailto:sarveshm@ucla.edu"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">sarveshm@ucla.edu</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@EpicCodeWizard", url: "https://github.com/EpicCodeWizard" },
                  {
                    name: "LinkedIn",
                    handle: "sarvesh-madullapalli",
                    url: "https://www.linkedin.com/in/sarvesh-madullapalli/",
                  },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2026 Sarvesh Madullapalli. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with Next.js & Tailwind CSS</div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}
