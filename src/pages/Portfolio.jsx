import { useState } from 'react'
import styles from './Portfolio.module.css'

const CATEGORIES = ['All', 'E-Commerce', 'Custom Dev', 'SaaS', 'Web3']

const PROJECTS = [
  {
    id: 1,
    title: 'Luxe Fashion Hub',
    category: 'E-Commerce',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT49puxsYe-RVIeIMmnzXkJI4xmPhpparJMhlK3YjByYmnnkOeDt66J23VemA1pIfnE610IyjhcWLHlz7mmeeZk1oEDCvyES6ZL1Uc_84tI1Gf-h1IIFVT9v2f3LJfK8BT_eTnDlYizJpOr4_5N3XK9U4HxyMy8mQfGmuCiVVGZqJG4EamBX2dHgno5IVYGbTt0i7F52E-ASPwxq3SLw2PsJx81ZcLDBtEc-pZz8VvtBU8oI3ZwZQRMA',
    tag: 'E-COMMERCE',
  },
  {
    id: 2,
    title: 'Nova SaaS Dashboard',
    category: 'SaaS',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwl0whiiNWQioEP56gbYWZGIYyGSz_ds9GN8OJw2WXMrIYanjCGn4O0CV5Be4njBC-Gb9OY8min9NK_uG-viIXy20S3Y3KRWAxCppn-KzoSgmS_99bRfCnKe7IJzqd3su6FPJla40GzQKu9FeB5XhV7LLReC_xRW3T-YDldKJVSMg0Siyk4b0NPWGcam5YSHp3FPtF7O_69L75t0bIqTXRs-Uws6Mi9LT8W55BfqghbuoZWMlJGbB1Bg',
    tag: 'SAAS PLATFORM',
  },
  {
    id: 3,
    title: 'Vault Web3 Wallet',
    category: 'Web3',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB37s3vrAM9-C9fFViy-PG888xqB1mqmDylCkUvLbk4WBrWFbIKQoWebfAr5IGZFIPqLAadyOaPgIRwW79WARmppCCD1CqOmiMDqGAnqc7H29ATKjPjfeDkmhPhBCEJPkMCowqqxrr1t1427-xZ446UobkX3MGymBaOFb5vxzvrTz7EmQ3fRCXJ0VaO_LiI7H-_FOpvRJoEuKcKhFYphNxzBCvFGqSFnU2wTkMnSXSGg2Sa1_CcAVNHeg',
    tag: 'WEB3 / CRYPTO',
  },
  {
    id: 4,
    title: 'Horizon Real Estate',
    category: 'Custom Dev',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzAu1sf9DSm_xdSpmmQ5Uj3I1ttDNIFWyKkb14lh0y4UQBEyoyNtZdAU1MXQxLDU12XRLE_yzQsF7c2jmnpwylrgYblkuNQl0sBSh3X7wQq9oksrAT5zPI6_8dmYbAedu4SEolDurwqajhUVYumd6gS-chQfo6HyIaUw5NvV59hPIhwrszZHr2dYL8ZHZ8Rjs-RBDZoqH_ixjE61pE1sqf3NiaHlepGZnFE9qRkrtmU_QM-X4__lNfeg',
    tag: 'REAL ESTATE',
  },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory)

  return (
    <main className={styles.main}>
      <div className="container">
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Digital Masterpieces</h1>
          <p className={styles.subtitle}>
            Explore our curated selection of high-performance digital solutions, where technical precision meets elite design.
          </p>
        </section>

        {/* Category Filter */}
        <section className={styles.filters}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Project Grid */}
        <section className={styles.grid}>
          {filteredProjects.map(project => (
            <div key={project.id} className={`group glass-card ${styles.card}`}>
              <div className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src={project.img}
                  alt={project.title}
                />
                <div className={styles.hoverOverlay}>
                  <button className="btn-primary">
                    Live Demo
                    <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_outward</span>
                  </button>
                </div>
              </div>
              <div className={styles.details}>
                <div>
                  <span className={styles.tag}>{project.tag}</span>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                </div>
                <div className={styles.arrowIcon}>
                  <span className="material-symbols-outlined">north_east</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* CTA Section */}
        <section className={`glass-card ${styles.cta}`}>
          <h2 className={styles.ctaTitle}>Have a visionary project?</h2>
          <p className={styles.ctaDesc}>Let's collaborate to build a digital experience that defines the standard in your industry.</p>
          <div className={styles.ctaBtns}>
            <button className="btn-gradient">Start a Project</button>
            <button className="btn-secondary">View Our Process</button>
          </div>
        </section>
      </div>
    </main>
  )
}
