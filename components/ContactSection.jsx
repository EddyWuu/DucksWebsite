'use client'
import { useState } from 'react'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard?.writeText('edmond.wuca@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="section-contact">
      <h2>Contact</h2>
      <div className="contact-row">
        <a href="mailto:edmond.wuca@gmail.com" className="email-link">
          edmond.wuca@gmail.com
        </a>
        <button className="btn-primary" type="button" onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </section>
  )
}
