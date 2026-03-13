// app/page.jsx
'use client'
import { useEffect, useState, useRef, useCallback } from 'react'
import ExperienceBall from '../components/ExperienceBall'

const basePath = process.env.NODE_ENV === 'production' ? '/DucksWebsite' : ''

export default function Home() {
  const [openExperiences, setOpenExperiences] = useState(new Set())
  const [copied, setCopied] = useState(false)
  const detailRefs = useRef({})

  const experiences = [
    {
      id: 'glc',
      logoSrc: `${basePath}/glc.png`,
      company: "GLC",
      role: "Software Developer",
      duration: "Current",
      bullets: [
        "Joined the development of a full-stack screenplay analysis platform using React and TypeScript, implementing responsive UI components and optimized mobile layouts",
        "Built backend data processing systems in Python, integrating LLM APIs to generate AI-powered coverage reports and preprocessing pipelines for LLM accuracy",
        "Managed user operations and system administration across AWS including DynamoDB for user data management, Lambda for serverless functions, S3 for storage, Cognito for authentication, and CloudWatch for debugging",
        "Led company-wide analytics implementation by integrating RudderStack across frontend and backend repositories, instrumenting core user events and establishing data-driven insights for product optimization and user experience"
      ],
      order: 0
    },
    {
      id: 'greenlight',
      logoSrc: `${basePath}/greenlight_essentials.png`,
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
      logoSrc: `${basePath}/ecobee.png`,
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
      logoSrc: `${basePath}/havas.png`,
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
      logoSrc: `${basePath}/swift_medical.png`,
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
      logoSrc: `${basePath}/WE_accelerate.png`,
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
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
        setTimeout(() => {
          detailRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }, 100)
      }
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
          <h3>Software Developer</h3>
          <p className="hero-subtitle">Building mobile apps, full-stack platforms, and everything in between.</p>
          <div className="home-cta">
            <a href="#projects" className="btn-primary">See my work</a>
            <a href={`${basePath}/Eddy_Wu_SW_Resume_2.pdf`} className="btn-outline" download>Download Resume</a>
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
                <div key={exp.id} ref={el => detailRefs.current[exp.id] = el} className="career-detail-card">
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

          {/* AutoGreen */}
          <div className="project-card">
            <div className="project-header">
              <h3>AutoGreen Mobile Plant System</h3>
              <span className="project-tag">School Project</span>
            </div>
            <div className="project-tech">
              <span>Kotlin</span><span>Jetpack Compose</span><span>Flask</span><span>PostgreSQL</span><span>AWS RDS</span><span>Arduino</span>
            </div>
            <ul className="project-bullets">
              <li><span className="bullet-dot">•</span>Collaborated with a team to build an automated greenhouse, and developed a corresponding Android app using Kotlin and Jetpack Compose for automated greenhouse monitoring and control</li>
              <li><span className="bullet-dot">•</span>Leveraged Kotlin coroutines for asynchronous control to manage real-time sensor data updates and appropriate actions</li>
              <li><span className="bullet-dot">•</span>Designed and executed RESTful APIs with Flask to interface with Arduino, alongside a PostgreSQL database managed by AWS's RDS to store sensor data and manage system configurations</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/EddyWuu/AutoGreenArduino" target="_blank" rel="noopener noreferrer">Arduino Repo</a>
              <a href="https://github.com/EddyWuu/AutoGreen_Mobile_Android" target="_blank" rel="noopener noreferrer">Android App</a>
              <a href="https://github.com/EddyWuu/AutoGreen_Server_Backend" target="_blank" rel="noopener noreferrer">Backend</a>
            </div>
          </div>

          {/* LocalLink */}
          <div className="project-card">
            <div className="project-header">
              <h3>LocalLink Volunteering & Events App</h3>
              <span className="project-tag">Personal Project</span>
            </div>
            <div className="project-tech">
              <span>Kotlin</span><span>MVVM</span><span>Flask</span><span>PostgreSQL</span><span>AWS RDS</span>
            </div>
            <ul className="project-bullets">
              <li><span className="bullet-dot">•</span>Created an Android Kotlin-based volunteering and events app using MVVM architecture, enabling users to discover local events and volunteering opportunities, and add them to an integrated in-app calendar</li>
              <li><span className="bullet-dot">•</span>Leveraged AWS services for scalable backend infrastructure, utilizing Flask to create a RESTful server and Amazon RDS to manage the PostgreSQL database, ensuring secure data storage and retrieval for events and user data</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/EddyWuu/local_link" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          {/* Spritfill */}
          <div className="project-card">
            <div className="project-header">
              <h3>Spritfill</h3>
              <span className="project-tag">Personal Project</span>
            </div>
            <div className="project-tech">
              <span>Swift</span><span>SwiftUI</span><span>Python</span><span>iOS</span>
            </div>
            <ul className="project-bullets">
              <li><span className="bullet-dot">•</span>Developed an iOS sprite and pixel art creation app in Swift and SwiftUI, featuring an intuitive touch-based drawing interface for crafting custom game-ready assets</li>
              <li><span className="bullet-dot">•</span>Implemented a variety of selectable color palettes, adjustable tile sizes, and configurable canvas dimensions, giving users full creative control</li>
              <li><span className="bullet-dot">•</span>Built a Python backend server to support pixelation processing and asset management</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/EddyWuu/Spritfill" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </section>

        <section id="about" className="section-about">
          <h2>About Me</h2>
          <p>I'm a Computer Engineering graduate from the University of Waterloo, passionate about building software that makes a difference — from mobile apps to full-stack platforms and cloud infrastructure. Currently working as a Software Developer at GLC.</p>
          <p>Outside of coding, you can find me cooking, at the gym, bouldering, or watching anime. I'm also a big fan of cats (even though I'm slightly allergic).</p>
          <p className="muted">Check out the rest of my projects and connect with me below:</p>
          <div className="about-links">
            <a href="https://github.com/eddywuu" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/eddy-wu-a1016a207/" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
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
