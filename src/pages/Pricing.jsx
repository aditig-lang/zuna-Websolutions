import { Link } from 'react-router-dom'
import styles from './Pricing.module.css'

const PLANS = [
  {
    name: 'Startup',
    tier: 'Growth',
    price: '₹5,000',
    btnText: 'Start Now',
    features: [
      'Custom 5-Page Website',
      'Responsive Design',
      'Basic SEO Optimization',
    ],
  },
  {
    name: 'Business',
    tier: 'Premium',
    price: '₹15,000',
    btnText: 'Choose Business',
    popular: true,
    features: [
      'Up to 15 Pages',
      'Advanced Animations',
      'CMS Integration',
      'E-commerce Ready',
    ],
  },
  {
    name: 'Enterprise',
    tier: 'Scale',
    price: '₹25,000',
    btnText: 'Contact Sales',
    features: [
      'Unlimited Scalability',
      '24/7 Dedicated Support',
      'White-glove Service',
    ],
  },
]

const COMPARISON = [
  { feature: 'Custom Components', startup: '10', business: 'Unlimited', enterprise: 'Unlimited', highlighted: true },
  { feature: 'Design Iterations', startup: '2 Rounds', business: '5 Rounds', enterprise: 'Unlimited' },
  { feature: 'Performance Audit', startup: 'close', business: 'check', enterprise: 'check' },
  { feature: 'Multi-language Support', startup: 'close', business: 'check', enterprise: 'check' },
  { feature: 'Cloud Hosting', startup: 'Basic', business: 'Premium Edge', enterprise: 'Dedicated Node' },
  { feature: 'Brand Strategy', startup: 'close', business: 'Light', enterprise: 'Full Integration' },
]

export default function Pricing() {
  return (
    <main className={styles.main}>
      <div className="container">
        {/* Header */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Transparent Pricing.</h1>
          <p className={styles.subtitle}>
            Select the plan that best fits your digital ambition. Precision-crafted solutions for every stage of growth.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className={styles.cardsGrid}>
          {PLANS.map(plan => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.popular ? styles.popularCard : ''}`}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>
                  MOST POPULAR
                </div>
              )}
              <span className={styles.tier}>{plan.tier}</span>
              <h3 className={styles.cardName}>{plan.name}</h3>
              <div className={styles.priceContainer}>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.period}>/project</span>
              </div>
              <ul className={styles.featuresList}>
                {plan.features.map(feat => (
                  <li key={feat} className={styles.featureItem}>
                    <span className="material-symbols-outlined" style={{ color: plan.popular ? 'var(--color-tertiary)' : 'var(--color-primary)' }}>
                      check_circle
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`w-full text-center ${plan.popular ? 'btn-gradient' : 'btn-secondary'}`}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {plan.btnText}
              </Link>
            </div>
          ))}
        </section>

        {/* Deep Comparison Table */}
        <section className={styles.comparisonSection}>
          <div className={styles.comparisonHeader}>
            <h2 className={styles.comparisonTitle}>Deep Comparison</h2>
            <p className={styles.comparisonSubtitle}>Compare every feature of our digital engineering tiers.</p>
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Startup</th>
                  <th className={styles.popularCol}>Business</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                    <td>{row.feature}</td>
                    <td>
                      {row.startup === 'check' || row.startup === 'close' ? (
                        <span className="material-symbols-outlined" style={{ color: row.startup === 'check' ? 'var(--color-primary)' : 'var(--color-error)' }}>
                          {row.startup}
                        </span>
                      ) : row.startup}
                    </td>
                    <td className={`${styles.popularCol} ${row.highlighted ? styles.highlightedText : ''}`}>
                      {row.business === 'check' || row.business === 'close' ? (
                        <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>
                          {row.business}
                        </span>
                      ) : row.business}
                    </td>
                    <td>
                      {row.enterprise === 'check' || row.enterprise === 'close' ? (
                        <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>
                          {row.enterprise}
                        </span>
                      ) : row.enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Custom Solution Callout */}
        <section className={styles.callout}>
          <div className={`glass-card ${styles.calloutInner}`}>
            <div className={styles.calloutText}>
              <h3 className={styles.calloutTitle}>Need something unique?</h3>
              <p className={styles.calloutDesc}>We build custom engines for complex digital needs. Let's talk about your roadmap.</p>
            </div>
            <Link to="/contact" className="btn-primary">
              Book Discovery Call
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
