import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Eddy Wu</h1>
        <p>iOS & Android Developer | Backend Engineer</p>
      </header>
      
      <nav className={styles.nav}>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </nav>

      <section id="about" className={styles.section}>
        <h2>About Me</h2>
        <p>I'm a passionate developer who specializes in iOS, Android, and backend development.</p>
      </section>

      <section id="projects" className={styles.section}>
        <h2>Projects</h2>
        <div className={styles.project}>
          <h3>Project 1</h3>
          <p>Description of your project.</p>
          <a href="" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className={styles.project}>
          <h3>Project 2</h3>
          <p>Description of another project.</p>
          <a href="" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <h2>Contact</h2>
        <p>Email: edmond.wuca@gmail.com</p>
        <p>GitHub: <a href="https://github.com/eddywuu" target="_blank" rel="noopener noreferrer">github.com/eddywu</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/eddy-wu-a1016a207" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/eddy-wu-a1016a207</a></p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; 2025 Eddy Wu. All rights reserved.</p>
      </footer>
    </div>
  );
}
