import { useState, useEffect } from 'react'
import styles from './Services.module.css'

const CORE_SERVICES = [
  {
    id: 'Website',
    title: 'Bespoke Web Development',
    subtitle: 'Lightning Fast React & Vite Engines',
    desc: 'We engineer custom web platforms tailored specifically for local businesses, manufacturing hubs, and corporate offices in Indian Tier 2 cities like Varanasi, Lucknow, and Patna. Standard templates slow down your site; our custom-code React projects load instantly even on standard mobile networks.',
    icon: 'code',
    highlights: ['React.js & Single Page Apps', 'Vite & High-Speed Bundling', 'Clean Code & Scalable Architecture']
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce storefronts',
    subtitle: 'Scalable Digital Retail Architectures',
    desc: 'Turn your offline showroom or retail business into an online powerhouse. We develop robust e-commerce solutions with local payment gateways (UPI, Paytm, Razorpay, NetBanking) and smooth cart animations that keep customers engaged.',
    icon: 'storefront',
    highlights: ['UPI & Local Gateway Integration', 'Dynamic Inventory Management', 'Optimized for Mobile/4G Networks']
  },
  {
    id: 'branding',
    title: 'Strategic Brand Identity',
    subtitle: 'Stand Out in the Local & Global Market',
    desc: 'Go beyond basic logos. We build complete visual corporate identities, color guidelines, and asset packages that position your brand as the leading option in your region, creating trust from day one.',
    icon: 'token',
    highlights: ['Custom Logo & Identity Design', 'Social Media Asset Packages', 'Brand Consistency Guidelines']
  },
  {
    id: 'ui/ux',
    title: 'UI/UX Design Strategy',
    subtitle: 'Human-Centered Digital Layouts',
    desc: 'A premium product needs premium design. We design responsive, interactive interfaces utilizing glassmorphism and modern geometric grids that make visitors go "WOW" at first glance.',
    icon: 'auto_awesome',
    highlights: ['Wireframing & Prototyping', 'Interactive Motion Design', 'Usability Audits & Optimizations']
  }
]

export default function Services() {
  const [activeUptime, setActiveUptime] = useState(99.98)
  const [pingSpeed, setPingSpeed] = useState(24)
  const [activeServer, setActiveServer] = useState('Varanasi Edge Node')

  // Live Ping Simulator for UX interaction
  useEffect(() => {
    const interval = setInterval(() => {
      setPingSpeed(Math.floor(Math.random() * (35 - 18) + 18))
      setActiveUptime(Number((99.9 + Math.random() * 0.09).toFixed(2)))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main className={styles.main}>
      <div className="container">
        {/* Header */}
        <section className={styles.hero}>
          <span className={styles.badge}>UI/UX Crafted Services</span>
          <h1 className={styles.title}>High-Performance Digital Engineering</h1>
          <p className={styles.subtitle}>
            Empowering Indian businesses with modern web architecture. Our solutions combine premium design aesthetics with custom engineering to deliver maximum ROI.
          </p>
        </section>

        {/* Services List */}
        <section className={styles.grid}>
          {CORE_SERVICES.map(service => (
            <div key={service.id} className={`glass-card ${styles.serviceCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <span className="material-symbols-outlined">{service.icon}</span>
                </div>
                <div>
                  <span className={styles.cardSubtitle}>{service.subtitle}</span>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                </div>
              </div>
              <p className={styles.cardDesc}>{service.desc}</p>
              <ul className={styles.highlightsList}>
                {service.highlights.map(hl => (
                  <li key={hl}>
                    <span className="material-symbols-outlined">verified</span>
                    {hl}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* 24/7 Operations / Support Section */}
        <section className={styles.supportSection}>
          <div className={`glass-card ${styles.supportCard}`}>
            <div className={styles.supportContent}>
              <span className={styles.supportBadge}>Always Online</span>
              <h2 className={styles.supportTitle}>24/7 Concierge Support & Maintenance</h2>
              <p className={styles.supportDesc}>
                We understand that downtime means lost business. That's why we provide round-the-clock operational support for Tier 2 businesses. Whether it's database optimization, local server configurations, or regular software patches, our Varanasi-based technical operations center has you covered.
              </p>
              <div className={styles.supportFeatures}>
                <div className={styles.supItem}>
                  <span className="material-symbols-outlined">schedule</span>
                  <div>
                    <h4>Zero Delay Dispatch</h4>
                    <p>Issues are addressed within 15 minutes of logging.</p>
                  </div>
                </div>
                <div className={styles.supItem}>
                  <span className="material-symbols-outlined">admin_panel_settings</span>
                  <div>
                    <h4>Dedicated Webmasters</h4>
                    <p>Real human engineers monitoring your server infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Live Status Widget */}
            <div className={styles.statusWidget}>
              <h3 className={styles.widgetTitle}>Live Infrastructure Monitor</h3>
              
              <div className={styles.nodeSelector}>
                <button 
                  className={activeServer === 'Varanasi Edge Node' ? styles.activeNode : ''}
                  onClick={() => setActiveServer('Varanasi Edge Node')}
                >
                  Varanasi Node
                </button>
                <button 
                  className={activeServer === 'Mumbai Cloud Core' ? styles.activeNode : ''}
                  onClick={() => setActiveServer('Mumbai Cloud Core')}
                >
                  Mumbai Node
                </button>
              </div>

              <div className={styles.widgetGrid}>
                <div className={styles.statBox}>
                  <span className={styles.statLabel}>Uptime Status</span>
                  <span className={styles.statVal} style={{ color: 'var(--color-primary)' }}>{activeUptime}%</span>
                  <span className={styles.statSub}>99.9% SLA Guaranteed</span>
                </div>
                <div className={styles.statBox}>
                  <span className={styles.statLabel}>Average Ping</span>
                  <span className={styles.statVal}>{pingSpeed} ms</span>
                  <span className={styles.statSub}>Low-latency edge network</span>
                </div>
              </div>

              <div className={styles.pulseArea}>
                <div className={styles.pulseIndicator}>
                  <span className={styles.pulseDot}></span>
                  <span>Active Connection: Secure WebSockets (WSS)</span>
                </div>
                <div className={styles.pingBarArea}>
                  {[...Array(16)].map((_, idx) => (
                    <span 
                      key={idx} 
                      className={styles.pingBar} 
                      style={{ 
                        height: `${Math.floor(Math.random() * (40 - 15) + 15)}px`,
                        animationDelay: `${idx * 0.1}s`
                      }}
                    ></span>
                  ))}
                </div>
              </div>

              <div className={styles.widgetFooter}>
                <span className={styles.activeServerText}>Selected Server: <strong>{activeServer}</strong></span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}
