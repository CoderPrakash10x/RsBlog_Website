// pages/about.js
import styles from '@/styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Our Blog</h1>
      <p className={styles.description}>
        Hey! I'm Prakash — a web developer and tech enthusiast who loves building things for the web.
        This blog started as a side project to practice React/Next.js, but now it's where I share real stories, design tips, and learnings from my journey.
      </p>
      <p className={styles.description}>
        Welcome to our blog where we share meaningful stories, informative articles, and the latest updates from around the world. 
        Whether it's heartwarming tales about animals, lifestyle tips during quarantine, or historical events, we aim to keep you informed and inspired.
      </p>
      <p className={styles.description}>
        Our goal is to deliver quality content that matters. This blog is maintained by passionate writers and researchers who believe in the power of storytelling.
      </p>
      <div className={styles.team}>
        <h2>Meet the Team</h2>
        <ul>
          <li><strong>Prakash:</strong> Full Stack Developer</li>
          <li><strong>Sumant:</strong> Web Designer</li>
        </ul>
      </div>
    </div>
  );
}
