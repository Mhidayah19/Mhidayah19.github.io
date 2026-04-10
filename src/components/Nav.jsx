import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .nav-hamburger { display: flex !important; }
          .nav-mobile-menu { display: flex !important; }
        }
      `}</style>

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          padding: '0 2rem',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          backgroundColor: scrolled ? 'oklch(98% 0.01 15 / 0.85)' : 'transparent',
          borderBottom: scrolled ? '1px solid var(--border)' : 'none',
          transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-bottom 0.3s ease',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--ink)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}
        >
          M. Hidayah<span style={{ color: 'var(--red)' }}>.</span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: '0.8rem',
                fontWeight: 400,
                color: 'var(--ink-muted)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-muted)')}
            >
              {label}
            </a>
          ))}

          {/* Resume CTA */}
          <a
            href="/resume.pdf"
            download
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#fff',
              backgroundColor: 'var(--red)',
              padding: '0.4rem 0.9rem',
              borderRadius: '4px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Resume ↓
          </a>
        </div>

        {/* Hamburger button (mobile only) */}
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
          }}
        >
          <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: 'var(--ink)', transition: 'transform 0.2s', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: 'var(--ink)', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', backgroundColor: 'var(--ink)', transition: 'transform 0.2s', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          className="nav-mobile-menu"
          style={{
            display: 'none',
            position: 'fixed',
            top: '56px',
            left: 0,
            right: 0,
            zIndex: 49,
            flexDirection: 'column',
            backgroundColor: 'oklch(98% 0.01 15 / 0.97)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border)',
            padding: '1.5rem 2rem',
            gap: '1.25rem',
          }}
        >
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 400,
                color: 'var(--ink)',
                textDecoration: 'none',
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#fff',
              backgroundColor: 'var(--red)',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              textDecoration: 'none',
              alignSelf: 'flex-start',
            }}
          >
            Resume ↓
          </a>
        </div>
      )}
    </>
  )
}
