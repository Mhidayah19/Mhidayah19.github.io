import { motion } from 'framer-motion'

const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-hidayah/' },
  { label: 'GitHub', href: 'https://github.com/Mhidayah19' },
  { label: 'Email', href: 'mailto:muhd.hidayah@outlook.com' },
  { label: 'Resume PDF', href: '/resume.pdf' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 7rem)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <style>{`
  @media (max-width: 640px) {
    .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
    .contact-heading { font-size: clamp(32px, 8vw, 54px) !important; }
  }
`}</style>

      {/* Section label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          fontWeight: 500,
          letterSpacing: '1.2px',
          color: 'var(--teal-light)',
          textTransform: 'uppercase',
          marginBottom: '3rem',
          lineHeight: 1.0,
        }}
      >
        05 &middot; Contact
      </motion.p>

      <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Left: heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2
            className="contact-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px, 4vw, 54px)',
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: '-1.6px',
              color: 'var(--ink)',
            }}
          >
            Open to{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300 }}>
              opportunities
            </span>
            <span style={{ color: 'var(--red)' }}>.</span>
          </h2>
          <p style={{ marginTop: '1.25rem', fontSize: '16px', fontWeight: 400, color: 'var(--ink-muted)', lineHeight: 1.5 }}>
            Graduating August 2026. Interested in full-time roles in Singapore or remote — frontend, mobile, or full-stack.
          </p>
        </motion.div>

        {/* Right: links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          style={{ paddingTop: '0.5rem' }}
        >
          {contactLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1rem 0',
                borderBottom: '1px solid var(--border)',
                textDecoration: 'none',
                color: 'var(--ink)',
                fontSize: '16px',
                fontWeight: 400,
                transition: 'color 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--teal-dark)'
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.querySelector('.arrow').style.transform = 'translateX(4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--ink)'
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.querySelector('.arrow').style.transform = 'translateX(0)'
              }}
            >
              <span>{label}</span>
              <span
                className="arrow"
                style={{ transition: 'transform 0.2s ease', display: 'inline-block' }}
              >
                &rarr;
              </span>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          marginTop: '5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          fontWeight: 400,
          color: 'var(--ink-muted)',
          textAlign: 'center',
          letterSpacing: '0.6px',
        }}
      >
        &copy; 2026 Muhammad Hidayah. Built with React + Vite.
      </motion.p>
    </section>
  )
}
