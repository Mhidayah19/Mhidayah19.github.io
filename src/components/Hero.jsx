import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 clamp(1.5rem, 5vw, 7rem)',
        paddingTop: '80px',
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ maxWidth: '900px' }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            color: 'var(--teal-light)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}
        >
          Software Engineer · Singapore
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 900,
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: 'var(--teal-dark)',
            marginBottom: '0.1em',
          }}
        >
          Muhammad /
        </motion.h1>
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: 'var(--teal-dark)',
            marginBottom: '2rem',
          }}
        >
          Hidayah<span style={{ color: 'var(--red)' }}>.</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
            fontWeight: 300,
            color: 'var(--ink-muted)',
            marginBottom: '1.5rem',
          }}
        >
          I build{' '}
          <TypeAnimation
            sequence={[
              'AI Agents.', 2000,
              'Mobile Apps.', 2000,
              'Web Experiences.', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ color: 'var(--red)', fontStyle: 'italic' }}
          />
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '1rem',
            fontWeight: 300,
            color: 'var(--ink-muted)',
            maxWidth: '520px',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
          }}
        >
          Final-year Software Engineering student at SIT, graduating August 2026.
          I specialise in AI-integrated systems, mobile, and full-stack web — currently building enterprise AI at Mymediset.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <a
            href="#work"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.7rem 1.5rem',
              backgroundColor: 'var(--teal-dark)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '0.85rem',
              borderRadius: '4px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            View my work →
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.7rem 1.5rem',
              border: '1px solid var(--teal-dark)',
              color: 'var(--teal-dark)',
              fontWeight: 600,
              fontSize: '0.85rem',
              borderRadius: '4px',
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'background-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--teal-dark)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.color = 'var(--teal-dark)'
            }}
          >
            Get in touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
