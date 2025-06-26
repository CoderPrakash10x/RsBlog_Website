import styles from "@/styles/Contact.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.left}>
        <h2>
          Let’s discuss <br />
          on something <span>cool</span> together
        </h2>
        <div className={styles.info}>
          <p>📧 mr.prakash10x@gmail.com</p>
          <p>📞 +123 456 789</p>
          <p>🏠 123 Street 456B House</p>
        </div>
        <div className={styles.socials}>
          <Link href=""><img src="/instagram.jepg" alt="Instagram" /></Link>
        </div>
      </div>

      <div className={styles.right}>
        <form className={styles.form}>
          <div className={styles.interest}>
            <label>I'm interested in…</label>
            <div className={styles.options}>
              <button type="button" className={styles.active}>UI/UX Develpoer</button>
              <button type="button">Web design</button>
              <button type="button">Graphic design</button>
              <button type="button">Design system</button>
              <button type="button">Other</button>
            </div>
          </div>

          <div className={styles.formField}>
            <input type="text" placeholder="Your name" required />
          </div>
          <div className={styles.formField}>
            <input type="email" placeholder="Your email" required />
          </div>
          <div className={styles.formField}>
            <textarea rows="4" placeholder="Your message" required></textarea>
          </div>

          <button className={styles.submitBtn}>🚀 Send Message</button>
        </form>
      </div>
    </div>
  );
}
