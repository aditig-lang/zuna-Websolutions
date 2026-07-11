import { useState } from 'react'
import styles from './Blog.module.css'

const POSTS = [
  {
    id: 1,
    title: 'Why City Businesses Need a Premium Web Presence',
    category: 'Digital Strategy',
    date: 'July 5, 2026',
    author: 'Aditi Gupta',
    excerpt: 'Traditional brick-and-mortar showrooms in cities like Varanasi, Lucknow, and Patna are realizing the limits of physical footprint. Explore how building a high-speed digital storefront elevates credibility and helps capture regional demand.',
    readTime: '4 min read',
    content: `
      In the rapidly growing economy of Indian cities, consumer behavior has shifted dramatically. With cheap mobile internet and high smartphone penetration, customer discovery now happens online first. 

      Yet, many local businesses still rely on basic business listings or poorly optimized social media pages. A premium, custom-coded website does something social media cannot: it establishes corporate trust and absolute ownership. 

      For a local manufacturing plant in Varanasi, a high-end web presence opens up national and global B2B partnerships. For a retail showroom in Indore, it turns local walk-ins into predictable online orders. Investing in UI/UX and custom engineering isn't just for global brands anymore—it is the differentiator that sets regional leaders apart.
    `
  },
  {
    id: 2,
    title: 'Moving Beyond WordPress: The React.js Advantage for Local SMBs',
    category: 'Engineering',
    date: 'June 28, 2026',
    author: 'Aditi Gupta',
    excerpt: 'Most local web agencies offer generic, slow WordPress templates. Here is a deep dive into why React.js and Vite single-page applications deliver better loading speeds, security, and conversion rates.',
    readTime: '5 min read',
    content: `
      When looking to build a website, most business owners are pitched standard WordPress templates. While cheap and fast to spin up, these template sites suffer from bloat, slow load times, and security vulnerabilities.

      In India, where mobile networks can sometimes be unstable outside metro hubs, loading speed is critical. A delay of 3 seconds can double your bounce rate. 

      React.js solves this by generating static, pre-rendered code that loads instantaneously. By bundling with modern tools like Vite, we strip out unnecessary database queries. A React website runs like a native app—animations are fluid, pages transition instantly, and there is no database for hackers to compromise directly.
    `
  },
  {
    id: 3,
    title: 'Local SEO Checklist: Getting Your Business Found on Google Search',
    category: 'SEO & Growth',
    date: 'June 15, 2026',
    author: 'Aditi Gupta',
    excerpt: 'Want to rank first when someone searches for your service locally? Here is a simple, actionable SEO checklist tailored specifically for regional Indian businesses.',
    readTime: '3 min read',
    content: `
      Search Engine Optimization (SEO) is not a black box. For local businesses, ranking on Page 1 is the single most cost-effective way to generate inquiries. Here is a basic roadmap to get started:

      1. Optimize for Mobile: More than 85% of local searches happen on mobile phones. Make sure your text is legible and buttons are easy to tap.
      2. Embed Schema Markup: Tell search engines exactly who you are, what you sell, your operating hours, and your location coordinates.
      3. Vernacular Search Terms: People search differently. Including regional search patterns (e.g., 'best fabric manufacturers in Varanasi' rather than just 'fabrics online') can capture high-intent buyers.
      4. Optimize Core Web Vitals: Google explicitly favors fast-loading sites. High speed directly equals higher rankings.
    `
  }
]

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <main className={styles.main}>
      <div className="container">
        {/* Header */}
        <section className={styles.hero}>
          <span className={styles.badge}>Insights & Growth</span>
          <h1 className={styles.title}>The Zuna Journal</h1>
          <p className={styles.subtitle}>
            Expert perspectives on web engineering, design systems, and digital marketing strategies for Indian businesses.
          </p>
        </section>

        {selectedPost ? (
          /* Full Post View */
          <article className={`glass-card ${styles.fullPost}`}>
            <button onClick={() => setSelectedPost(null)} className={styles.backBtn}>
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Articles
            </button>
            <div className={styles.postMeta}>
              <span className={styles.category}>{selectedPost.category}</span>
              <span className={styles.dot}></span>
              <span>{selectedPost.date}</span>
              <span className={styles.dot}></span>
              <span>{selectedPost.readTime}</span>
            </div>
            <h2 className={styles.postTitle}>{selectedPost.title}</h2>
            <div className={styles.authorBox}>
              <span className="material-symbols-outlined">person</span>
              <span>Written by <strong>{selectedPost.author}</strong></span>
            </div>
            <div className={styles.postContent}>
              {selectedPost.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </article>
        ) : (
          /* Posts Grid */
          <section className={styles.grid}>
            {POSTS.map(post => (
              <div key={post.id} className={`glass-card ${styles.postCard}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.category}>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>
                <div className={styles.cardFooter}>
                  <button onClick={() => setSelectedPost(post)} className="btn-secondary" style={{ padding: '10px 24px', fontSize: '11px' }}>
                    Read Article
                  </button>
                  <span className={styles.date}>{post.date}</span>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </main>
  )
}
