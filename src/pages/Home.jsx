import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ShaderBackground from '../components/ShaderBackground'
import styles from './Home.module.css'

const STATS = [
  { value: '50+', label: 'Happy Clients' },
  { value: '120+', label: 'Projects Delivered' },
  { value: '₹5K', label: 'Starting Budget' },
  { value: '24/7', label: 'Support & Uptime' },
]

const SERVICES = [
  {
    icon: 'code',
    color: 'var(--color-primary)',
    bg: 'rgba(120, 220, 218, 0.1)',
    title: 'Bespoke Web Development',
    desc: 'Fast-loading React & Vite websites engineered for Indian mobile networks. Perfect for local businesses in Varanasi, Lucknow, Kanpur and Tier 2 cities wanting a premium digital edge.',
    features: ['React.js Single Page Apps', 'UPI & Razorpay Integration', 'Mobile-First & 4G Optimized'],
  },
  {
    icon: 'storefront',
    color: 'var(--color-tertiary)',
    bg: 'rgba(199, 199, 255, 0.1)',
    title: 'E-Commerce Storefronts',
    desc: 'Convert your offline showroom into an online powerhouse. We build secure, UPI-ready e-commerce portals tailored for Indian retail businesses and manufacturers.',
    features: ['UPI, Paytm, NetBanking', 'Dynamic Product Catalogs', 'WhatsApp Order Integration'],
    featured: true,
  },
  {
    icon: 'auto_awesome',
    color: 'var(--color-secondary)',
    bg: 'rgba(178, 200, 232, 0.1)',
    title: 'Brand & UI/UX Design',
    desc: 'Stand out in a crowded local market. Our glassmorphic UI designs create the "WOW" factor your customers will remember, building trust from the first click.',
    features: ['Logo & Brand Identity', 'UI/UX Prototyping', 'Social Media Kit'],
  },
]

const PROCESS_STEPS = [
  { num: '01', title: 'Discovery', desc: 'Defining project scope and aligning brand objectives through deep research.' },
  { num: '02', title: 'Strategy', desc: 'Blueprinting the technical architecture and user journey flows.' },
  { num: '03', title: 'Design', desc: 'High-fidelity glassmorphic UI design and interaction modeling.' },
  { num: '04', title: 'Architecture', desc: 'Agile development cycles with rigorous performance testing.' },
  { num: '05', title: 'Launch', desc: 'Seamless deployment and ongoing concierge-level maintenance.' },
]

const PORTFOLIO_ITEMS = [
  {
    title: 'Chronos Elite',
    tag: 'E-Commerce Architecture',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjCZH63XG9jvrajViXEzGdr3ET6ZxPdTVYqfdkjlUqj7dOaZqrQz4Lc_mcqF2fa5OOUGI4EvRY8PmcetRMqWN002hGDbfR3LldfJAzaNzwvZNELqF49nF5NLi5xToW19BbbJIbGBYmvWgM9_u6E04z3qTGN5P_yTcEp3tYvSUoO0YbSl8CMGb9jjoH7u1Gn0pKspqwo32sUrq0GL-jNN1cts9f7jU-3sbi7Y9U5fq7iEiv1T1RdSfBqg',
    large: true,
  },
  {
    title: 'Vortex Capital',
    tag: 'Fintech Ecosystem',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYzQLCrA19qzXROL5YSV69Psbumou1_WYx3KXWdUhmWaSURsdT8vRXv9-rZ2_JodgDhP5-1gtSsPeRvxlk9ksw7mebQBELqJCD95nh9dKh-LCs1YE4F8zqRcoKp8B690w9kcj8ZeMXwia1KYjGaEVYcvEhfR6B082U7OypY8hsZL4O5jciLFO-jUBIkFgt26wCXoV3mDixT0AJapxtuC3xdxeeGPOTB-EbnPx6RoxSn6VmEjlEhpTWWQ',
  },
  {
    title: 'Atlas Travel',
    tag: 'Luxury Concierge',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFiOYiGmPT1_UIHpqJw5-VJy28wZ3pnkRkR-bI_JdDtGer1O3ZYoRHiRyWxMg5-xcS5CNeKnmF4EtxDvHRplwUosI3DyUinf51147yfnv35LZC56_EE_gYt85DhZ2L1HYIyNAEgzsYbDYLbjkQ-DbOA3FWhnDUcXNS8dYtAHX7ruqxMXvLXZzx1rbqKuU0D3fdiUChf8wIRN7nthYxH7IdJBy60PsYaxq3E--sRzAvhnefjSdPmmrCbw',
  },
  {
    title: 'Nexus Core',
    tag: 'Tech Branding',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDChN4c3kZugW60Q-Ncq6ATH-BIw6MBoTWf6m4OettkT3Ja1HobBF4S8lTPXcPo1cA2Vl3EIbdmPdblF3vTQLIQUHr3N0jp_-AIKEs-RZE0qwhg953KTOvm5gdS9UJwkXOKANwJRp1gZH8w0srAIRhlqaZl3RBFGqyVHk3yL2gF0qZUNAPYvrdOqQ_NK3rW0V7m8tBmEJkFWWlMRTRr-oSUi3afRvySwTdGiXkRBowFdufDrfblKWUIEg',
  },
]

function useIntersect(options) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add(styles.visible)
        observer.unobserve(el)
      }
    }, options)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function AnimatedSection({ children, className = '', style }) {
  const ref = useIntersect({ threshold: 0.1 })
  return (
    <div ref={ref} className={`${styles.animateSection} ${className}`} style={style}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <main className={styles.main}>
      {/* ====== HERO ====== */}
      <section className={styles.hero}>
        <ShaderBackground opacity={0.65} />
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>auto_awesome</span>
            Varanasi's Premier Web Development Agency
          </span>
          <h1 className={styles.heroTitle}>
            Premium Websites for<br />Indian Businesses
          </h1>
          <p className={styles.heroDesc}>
            From Varanasi to pan-India — we build fast, beautiful, and conversion-driven websites for SMEs, startups, and local businesses. Starting at just ₹5,000 with 24/7 support.
          </p>
          <div className={styles.heroCtas}>
            <Link to="/contact" className="btn-gradient">
              Get Free Quote
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
            <Link to="/services" className="btn-secondary">
              Our Services
            </Link>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollLabel}>SCROLL</span>
          <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', animation: 'float 2s ease-in-out infinite' }}>expand_more</span>
        </div>
      </section>

      {/* ====== STATS ====== */}
      <section className={styles.stats} id="stats">
        <div className="container">
          <AnimatedSection className={styles.statsGrid}>
            {STATS.map(s => (
              <div key={s.label} className={`glass-card ${styles.statCard} hover-lift`}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ====== SERVICES ====== */}
      <section className={styles.services} id="services">
        <div className="container">
          <AnimatedSection className={styles.servicesHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Digital Services for Indian Businesses</h2>
              <p className={styles.sectionDesc}>Affordable, premium-quality web solutions built for SMEs, manufacturers, retailers, and startups across Tier 2 cities of India.</p>
            </div>
            <Link to="/services" className={styles.viewAll}>
              VIEW ALL SERVICES
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </AnimatedSection>
          <AnimatedSection className={styles.servicesGrid}>
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`glass-card hover-lift ${styles.serviceCard} ${s.featured ? styles.featured : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={styles.serviceIcon} style={{ background: s.bg }}>
                  <span className="material-symbols-outlined" style={{ color: s.color, fontSize: 28 }}>{s.icon}</span>
                </div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
                <ul className={styles.serviceFeatures}>
                  {s.features.map(f => (
                    <li key={f}>
                      <span className={styles.featureDot} style={{ background: s.color }}></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ====== PORTFOLIO GLIMPSE ====== */}
      <section className={styles.portfolioGlimpse}>
        <div className="container">
          <AnimatedSection>
            <h2 className={styles.sectionTitleCenter}>Recent Masterpieces</h2>
          </AnimatedSection>
          <AnimatedSection className={styles.bentoGrid}>
            {PORTFOLIO_ITEMS.map((item, i) => (
              <div
                key={item.title}
                className={`${styles.bentoItem} ${item.large ? styles.bentoBig : ''}`}
              >
                <div
                  className={styles.bentoImg}
                  style={{ backgroundImage: `url('${item.img}')` }}
                />
                <div className={styles.bentoOverlay} />
                <div className={styles.bentoInfo}>
                  <h4 className={styles.bentoTitle}>{item.title}</h4>
                  <span className={styles.bentoTag}>{item.tag}</span>
                </div>
              </div>
            ))}
          </AnimatedSection>
          <div className={styles.viewAllWrap}>
            <Link to="/portfolio" className="btn-secondary">
              View All Projects
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ====== PROCESS ====== */}
      <section className={styles.process} id="process">
        <div className="container">
          <AnimatedSection>
            <h2 className={styles.sectionTitleCenter}>The Execution Roadmap</h2>
          </AnimatedSection>
          <AnimatedSection className={styles.processSteps}>
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.title} className={`glass-card hover-lift ${styles.processCard}`}>
                <div className={styles.processNum}>{step.num}</div>
                <h4 className={styles.processTitle}>{step.title}</h4>
                <p className={styles.processDesc}>{step.desc}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* ====== CITIES WE SERVE ====== */}
      <section className={styles.cities}>
        <div className="container">
          <AnimatedSection>
            <p className={styles.citiesLabel}>🇮🇳 Trusted by businesses across India</p>
            <div className={styles.citiesRow}>
              {['Varanasi', 'Lucknow', 'Kanpur', 'Patna', 'Jaipur', 'Indore', 'Agra', 'Meerut', 'Allahabad', 'Bhopal'].map(city => (
                <span key={city} className={styles.cityChip}>{city}</span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ====== CTA BANNER ====== */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <AnimatedSection className={`glass-card ${styles.ctaInner}`}>
            <div className={styles.ctaGlow} />
            <h2 className={styles.ctaTitle}>Ready to Go Digital?</h2>
            <p className={styles.ctaDesc}>
              Join 50+ happy clients across Varanasi, Lucknow, Kanpur, Patna and beyond. Get a premium website starting from ₹5,000 with dedicated 24/7 support.
            </p>
            <div className={styles.ctaBtns}>
              <Link to="/contact" className="btn-gradient">
                Get Free Consultation
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </Link>
              <Link to="/pricing" className="btn-secondary">View Pricing</Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
