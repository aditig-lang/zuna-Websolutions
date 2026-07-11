import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <Link to="/" className={styles.brandWrapper}>
        <img src="/logo.jpg" alt="Zuna Web Logo" className={styles.logo} />
        <span className={styles.brand}>Zuna Web Solutions</span>
      </Link>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`${styles.link} ${location.pathname === link.path ? styles.active : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link to="/contact" className="btn-primary" style={{ fontSize: '11px', letterSpacing: '0.1em', padding: '10px 18px' }}>
        Get a Quote
      </Link>

      <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`}></span>
      </button>
    </nav>
  )
}
