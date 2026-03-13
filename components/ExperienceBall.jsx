// components/ExperienceBall.jsx
import '../styles/ExperienceBall.css'

export default function ExperienceBall({
  logoSrc,
  company,
  open = false,
  onClick = () => {},
}) {
  return (
    <div className="exp-ball-outer">
      <div
        className={`exp-ball${open ? ' exp-ball-active' : ''}`}
        tabIndex={0}
        onClick={onClick}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
        aria-label={`Show details for ${company}`}
      >
        <div className="exp-ball-inner">
          {logoSrc ? (
            <img src={logoSrc} alt={`${company} logo`} />
          ) : (
            <div className="exp-ball-placeholder" />
          )}
        </div>
      </div>
    </div>
  )
}
