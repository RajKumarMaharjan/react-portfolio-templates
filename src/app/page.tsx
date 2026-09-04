import styles from "./page.module.scss";

const skills = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "SASS",
  "Git",
];

const links = [
  { label: "GitHub", href: "https://github.com/rajkumarmaharjan" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rajkumar-maharjan/",
  },
  { label: "CodePen", href: "https://codepen.io/rajkumarmaharjan" },
];

export default function Home() {
  return (
    <main className={styles.site}>
      <nav className={styles.nav} aria-label="Main navigation">
        <a className={styles.logo} href="#top" aria-label="Rajkumar Maharjan home">
          RM<span>.</span>
        </a>
        <div className={styles.navLinks}>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a className={styles.resumeLink} href="/images/Raj%20Kumar%20Maharjan.pdf" target="_blank" rel="noreferrer">
          Resume <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className={styles.hero} id="top">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Frontend developer / Kathmandu, Nepal</p>
          <h1>Interfaces with<br /><em>intention.</em></h1>
          <p className={styles.intro}>
            I&apos;m Rajkumar Maharjan. I build clear, responsive web experiences
            with thoughtful details and a strong frontend foundation.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryAction} href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
            <a className={styles.textAction} href="/images/Raj%20Kumar%20Maharjan.pdf" target="_blank" rel="noreferrer">View resume</a>
          </div>
        </div>
        <div className={styles.heroMark} aria-hidden="true">
          <div className={styles.markRing}><span>RM</span></div>
          <p>SELECTED<br />WORK &amp; THINKING</p>
        </div>
      </section>

      <section className={styles.about} id="about">
        <p className={styles.sectionLabel}>01 / About</p>
        <div className={styles.aboutContent}>
          <h2>Useful, beautiful,<br /><em>human.</em></h2>
          <div className={styles.aboutText}>
            <p>
              I&apos;m a frontend developer passionate about creating beautiful and
              functional web applications. My work sits where design thinking,
              accessible markup, and maintainable code meet.
            </p>
            <p>
              From a first sketch to a polished responsive interface, I care
              about the small decisions that make a product feel effortless.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.skills} id="skills">
        <p className={styles.sectionLabel}>02 / Toolkit</p>
        <div className={styles.skillsGrid}>
          <h2>Built with<br /><em>curiosity.</em></h2>
          <div className={styles.skillList}>
            {skills.map((skill, index) => (
              <div className={styles.skill} key={skill}>
                <span>0{index + 1}</span>{skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.contact} id="contact">
        <p className={styles.sectionLabel}>03 / Contact</p>
        <div className={styles.contactContent}>
          <h2>Have a good idea?<br /><em>Let&apos;s make it real.</em></h2>
          <a className={styles.email} href="mailto:rajkumarmaharjan006@gmail.com">rajkumarmaharjan006@gmail.com <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Rajkumar Maharjan</span>
        <div className={styles.socials}>
          {links.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label}</a>)}
        </div>
      </footer>
    </main>
  );
}