// app/page.jsx
'use client'
import { useEffect, useState } from 'react'
import ExperienceBall from '../components/ExperienceBall'

export default function Home() {
  const [openExperiences, setOpenExperiences] = useState(new Set())

  const experiences = [
    {
      id: 'greenlight',
      logoSrc: "/greenlight_essentials.png",
      company: "Greenlight Essentials",
      role: "iOS Developer",
      duration: "Jan 2024 – Apr 2024",
      bullets: [
        "Built custom form template engine using JavaScript",
        "Optimized performance of document rendering",
        "Worked in a fast-paced startup using Next.js"
      ],
      order: 1
    },
    {
      id: 'ecobee',
      logoSrc: "/ecobee.png",
      company: "Ecobee",
      role: "iOS Developer",
      duration: "Jan 2023 – Apr 2023",
      bullets: [
        "Developed iOS app features for smart home devices",
        "Implemented UI/UX improvements",
        "Collaborated with cross-functional teams"
      ],
      order: 2
    },
    {
      id: 'havas',
      logoSrc: "/havas.png",
      company: "Havas",
      role: "Mobile Developer",
      duration: "Jan 2022 – Apr 2022",
      bullets: [
        "Created mobile marketing campaigns",
        "Built responsive mobile interfaces",
        "Worked with creative teams on app designs"
      ],
      order: 3
    },
    {
      id: 'swift',
      logoSrc: "/swift_medical.png",
      company: "Swift Medical",
      role: "Software Developer",
      duration: "Sep 2021 – Dec 2021",
      bullets: [
        "Developed medical imaging applications",
        "Implemented data visualization features",
        "Worked with healthcare technology stack"
      ],
      order: 4
    },
    {
      id: 'we',
      logoSrc: "/WE_accelerate.png",
      company: "WE Accelerate",
      role: "Junior Developer",
      duration: "May 2021 – Aug 2021",
      bullets: [
        "Built web applications for social impact",
        "Participated in agile development processes",
        "Contributed to open-source projects"
      ],
      order: 5
    }
  ]

  const toggleExperience = (id) => {
    setOpenExperiences(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) newSet.delete(id)
      else newSet.add(id)
      return newSet
    })
  }

  // Smooth scrolling for nav links
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')
    const handler = e => {
      e.preventDefault()
      const target = document.querySelector(e.currentTarget.getAttribute('href'))
      if (target) target.scrollIntoView({ behavior: 'smooth' })
    }
    links.forEach(link => link.addEventListener('click', handler))
    return () => links.forEach(link => link.removeEventListener('click', handler))
  }, [])

  return (
    <div className="main-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="top-nav-inner">
          <a href="#home">Home</a>
          <a href="#education">Education</a>
          <a href="#career">Career</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Page Content */}
      <main className="content-main">
        <section id="home" className="section-home">
          <h1>Hello<span className="accent-dot">.</span></h1>
          <h2>I'm Eddy</h2>
          <h3>Mobile App Developer</h3>
          <div className="home-cta">
            <a href="#projects" className="btn-primary">See my work</a>
            <a href="/resume.pdf" className="btn-outline">Download Resume</a>
          </div>
        </section>

        <section id="education" className="section-education">
          <h2>Education</h2>
          <p>University of Waterloo – Bachelor of Applied Science in Computer Engineering</p>
          <p className="muted">Relevant courses, coding clubs, or academic achievements go here.</p>
        </section>

        <section id="career" className="section-career">
          <h2>Career</h2>
          {/* Orbs Row */}
          <div className="orbs-row">
            {experiences.map(exp => (
              <div key={exp.id} className="orb-col">
                <ExperienceBall
                  logoSrc={exp.logoSrc}
                  company={exp.company}
                  role={exp.role}
                  duration={exp.duration}
                  bullets={exp.bullets}
                  open={openExperiences.has(exp.id)}
                  onClick={() => toggleExperience(exp.id)}
                />
                <p className="orb-caption">{exp.company}</p>
              </div>
            ))}
          </div>

          {/* Details */}
          <div className="career-details">
            {experiences
              .filter(exp => openExperiences.has(exp.id))
              .sort((a, b) => a.order - b.order)
              .map(exp => (
                <div key={exp.id} className="career-detail-card">
                  <div className="detail-header">
                    {/* ...logo... */}
                    <div>
                      <h3>{exp.company}</h3>
                      <p className="role">{exp.role}</p>
                      <p className="duration">{exp.duration}</p>
                    </div>
                    <button
                      className="close-detail-btn"
                      onClick={() => toggleExperience(exp.id)}
                      aria-label="Close"
                    >×</button>
                  </div>
                  <div className="detail-bullets">
                    <ul>
                      {exp.bullets.map((bullet, i) => (
                        <li key={i}><span className="bullet-dot">•</span>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
          </div>
        </section>

        <section id="projects" className="section-projects">
          <h2>Projects</h2>
          <p>List of your best personal, school, or internship projects. Add links, tech stack, impact.</p>
        </section>

        <section id="about" className="section-about">
          <h2>About</h2>
          <p>You can find me here:</p>
          <p>
            <a href="https://github.com/eddywuu" className="accent-link">GitHub</a>
            <a href="https://linkedin.com/in/eddywuu" className="accent-link">LinkedIn</a>
          </p>
        </section>

        <section id="contact" className="section-contact">
          <h2>Contact</h2>
          <div className="contact-form">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <textarea placeholder="Your message" rows="4" />
            <button
              onClick={e => {
                e.preventDefault()
                alert('Message sent! (This is a demo)')
              }}
              className="btn-primary"
            >Send</button>
          </div>
        </section>
      </main>
    </div>
  )
}
