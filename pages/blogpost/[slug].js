// pages/blogpost/[slug].js
import blogs from '@/blogdata/blogs';
import Link from 'next/link';

export async function getStaticPaths() {
  const paths = blogs.map(blog => ({
    params: { slug: blog.slug }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const blog = blogs.find(item => item.slug === params.slug);
  return { props: { blog } };
}

export default function BlogPost({ blog }) {
  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: 'auto' }}>
      <h1>{blog.title}</h1>
      <p><strong>Date:</strong> {blog.date}</p>
      <p><strong>Tag:</strong> {blog.tag}</p>
      <img src={blog.image} alt={blog.title} style={{ width: '100%', borderRadius: '10px', margin: '1rem 0' }} />
      <p>{blog.content}</p>
      <Link href="/blogs" style={{ display: 'inline-block', marginTop: '2rem', color: 'blue' }}>← Back to Blogs</Link>
    </div>
  );
}
