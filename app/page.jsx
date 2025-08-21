// app/page.jsx
'use client'
import { useEffect, useState } from 'react'
import ExperienceBall from '../components/ExperienceBall'

export default function Home() {
  const [openExperiences, setOpenExperiences] = useState(new Set())
  const [copied, setCopied] = useState(false)

  const experiences = [
    {
      id: 'greenlight',
      logoSrc: "/greenlight_essentials.png",
      company: "Greenlight Essentials",
      role: "iOS Developer",
      duration: "Jan 2024 – Apr 2024",
      bullets: [
        "Joined the Yuvee mobile development team to develop technical solutions for the Yuvee Android and iOS app, utilizing SwiftUI and Jetpack compose in MVVM architectural pattern to engineer features",
        "Contributed significantly to the migration of the iOS app from UIKit to SwiftUI, modernizing user interface, improving app loading speed by 30%, and enhancing data rendering efficiency by 25% ",
        "Utilized Postman and RESTful API endpoints to interact with data stored in RealmDB for application functionalities",
        "Addressed and resolved software related bugs to enhance functionality and user experience in the Yuvee applications"
      ],
      order: 1
    },
    {
      id: 'ecobee',
      logoSrc: "/ecobee.png",
      company: "Ecobee",
      role: "iOS Developer",
      duration: "May 2023 – Aug 2023",
      bullets: [
        "Facilitated and participated in iOS mobile scrum team to develop technical solutions for the Ecobee iOS app ",
        "Developed IoT-enabled features for the Ecobee Smart Device using Xcode, Swift, and SwiftUI in MVVM and MVP architectures to enhance user interactions",
        "Converted 70% of PromiseKit implementations to Swift’s native async/await, improving code readability, optimizing real-time data processing and reducing response time for the IoT devices by 25%",
        "Performed bug resolutions to resolve issues and optimize user experiences"
      ],
      order: 2
    },
    {
      id: 'havas',
      logoSrc: "/havas.png",
      company: "Havas",
      role: "Mobile Developer",
      duration: "Sept 2022 – Dec 2022",
      bullets: [
        "Collaborated with the iOS mobile scrum team to develop technical solutions for the Rogers Bank App ",
        "Using Xcode and Swift in MVVM architecture, enhanced and debugged frontend and backend features  ",
        "Composed JSON data source test files for view model logic unit testing and quality assurance",
        "Implemented analytic tracking to record performance statistics and client data from over 1000+ sessions using iOS SDK "
      ],
      order: 3
    },
    {
      id: 'swift',
      logoSrc: "/swift_medical.png",
      company: "Swift Medical",
      role: "Software Developer",
      duration: "Jan 2022 – April 2022",
      bullets: [
        "Integrated a multi-spectral imaging device into various iOS mobile apps with Swift and Objective-C ",
        "Replicated an oxygenation imaging algorithm into Jupyter Notebook with Python and OpenCV, increasing precision of the imaging process by 10% troubleshooting and optimization ",
        "Applied an app variation that cycles through 4 device imaging modalities to prepare for performance testing with EMR, taking over 100+ spectral images in under 20 seconds "
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

  const handleCopy = () => {
    navigator.clipboard?.writeText('edmond.wuca@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
          <p className="muted">
            I completed my Bachelor of Applied Science in Computer Engineering (Honours, Co-op) at the University of Waterloo June 2025, where I built a strong foundation in both hardware and software systems. My coursework covered algorithms and data structures, systems programming, database systems, and real-time operating systems, along with advanced studies in computer networks and networking protocols. Classes like Computer Networks and Advanced Topics in Networking gave me hands-on experience with networking protocols, routing, and performance optimization. Paired with courses in software design, optimization, and performance engineering, this mix of theory and practice equipped me to design efficient, reliable, and scalable systems across both mobile and networked environments.
          </p>
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
            <a href="https://www.linkedin.com/in/eddy-wu-a1016a207/" className="accent-link">LinkedIn</a>
          </p>
        </section>

        <section id="contact" className="section-contact">
          <h2>Contact</h2>
          <div className="contact-row">
            <a href="mailto:edmond.wuca@gmail.com" className="email-link">
              edmond.wuca@gmail.com
            </a>
            <button
              className="btn-primary"
              onClick={handleCopy}
              type="button"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
