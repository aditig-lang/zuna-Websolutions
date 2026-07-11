import { useState } from 'react'
import styles from './Contact.module.css'

const CONTACT_INFO = {
  Founder: 'Aditi Gupta',
  Phone: '+91 9279196754',
  Email: 'zunawebsolutions@gmail.com',
  Address: 'Lanka, Varanasi, Pin code:221005, Uttar Pradesh, India',
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Bespoke Development',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulated form submission
    setSubmitted(true)
    setFormData({ name: '', email: '', service: 'Bespoke Development', message: '' })
  }

  return (
    <main className={styles.main}>
      <div className="container">
        {/* Header */}
        <section className={styles.hero}>
          <h1 className={styles.title}>Let's craft your masterpiece.</h1>
          <p className={styles.subtitle}>
            Have a visionary idea or an enterprise project? Reach out to us, and let's construct your next digital asset.
          </p>
        </section>

        <section className={styles.wrapper}>
          {/* Contact Details Panel */}
          <div className={`glass-card ${styles.infoPanel}`}>
            <h2 className={styles.panelTitle}>Contact Information</h2>
            <p className={styles.panelDesc}>Get in touch directly with our leadership team for a consultation call.</p>

            <div className={styles.detailsList}>
              <div className={styles.infoItem}>
                <div className={styles.iconCircle}>
                  <span className="material-symbols-outlined">person</span>
                </div>
                <div>
                  <span className={styles.infoLabel}>Founder</span>
                  <span className={styles.infoValue}>{CONTACT_INFO.founder}</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconCircle}>
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <span className={styles.infoLabel}>Phone Number</span>
                  <a href={`tel:+91${CONTACT_INFO.phone}`} className={styles.infoValueLink}>{CONTACT_INFO.phone}</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconCircle}>
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <span className={styles.infoLabel}>Email Address</span>
                  <a href={`mailto:${CONTACT_INFO.email}`} className={styles.infoValueLink}>{CONTACT_INFO.email}</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.iconCircle}>
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <span className={styles.infoLabel}>Our Location</span>
                  <span className={styles.infoValue}>{CONTACT_INFO.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className={`glass-card ${styles.formPanel}`}>
            {submitted ? (
              <div className={styles.successMessage}>
                <span className="material-symbols-outlined" style={{ fontSize: 64, color: 'var(--color-primary)' }}>
                  check_circle
                </span>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="btn-primary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>Send a Message</h3>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="service">Interest Area</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="Bespoke Development">Bespoke Development</option>
                    <option value="Strategic Branding">Strategic Branding</option>
                    <option value="Digital Experience Design">Digital Experience Design</option>
                    <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project goals"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-gradient" style={{ width: '100%', justifyContent: 'center' }}>
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}
