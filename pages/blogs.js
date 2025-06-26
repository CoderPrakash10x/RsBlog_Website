// pages/blogs.js
import styles from '@/styles/Blog.module.css';
import blogs from '@/blogdata/blogs';
import Link from 'next/link';

export default function Blogs() {
  return (
    <main className={styles.blogs}>
      <h1 className={styles.title}>BLOG AND NEWS</h1>
      <div className={styles.blogGrid}>
        {blogs.map((blog, idx) => (
          <div className={styles.card} key={idx}>
            <img src={blog.image} alt={blog.title} className={styles.image} />
            <div className={styles.cardContent}>
              <div className={styles.topRow}>
                <span className={styles.date}>{blog.date}</span>
                <span
                  className={styles.tag}
                  style={{ backgroundColor: blog.tagColor }}
                >
                  {blog.tag}
                </span>
              </div>
              <h2 className={styles.blogTitle}>{blog.title}</h2>
              <p className={styles.desc}>{blog.desc}</p>
              <Link href={`/blogpost/${blog.slug}`} className={styles.readMore}>
                READ MORE <span className={styles.arrow}>➔</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
