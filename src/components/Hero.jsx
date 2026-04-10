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
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '1.2px',
            color: 'var(--teal-light)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            lineHeight: 1.0,
          }}
        >
          Software Engineer &middot; Singapore
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3.5rem, 8vw, 80px)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.0,
            letterSpacing: '-2.4px',
            color: 'var(--teal-dark)',
            marginBottom: '0.1em',
          }}
        >
          Muhammad
        </motion.h1>
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 8vw, 80px)',
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: '-2.4px',
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
            fontSize: 'clamp(20px, 2.5vw, 24px)',
            fontWeight: 400,
            letterSpacing: '-0.48px',
            lineHeight: 1.0,
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
            style={{ color: 'var(--red)', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
          />
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '16px',
            fontWeight: 400,
            color: 'var(--ink-muted)',
            maxWidth: '520px',
            lineHeight: 1.5,
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
          <motion.a
            href="#work"
            whileHover={{ scale: 1.1, backgroundColor: '#fff', color: 'var(--off-black)' }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0 14px',
              height: '40px',
              backgroundColor: 'var(--off-black)',
              color: '#fff',
              fontWeight: 500,
              fontSize: '14px',
              borderRadius: 'var(--radius-btn)',
              textDecoration: 'none',
              border: '1px solid var(--off-black)',
            }}
          >
            View my work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.1, backgroundColor: 'var(--off-black)', color: '#fff' }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0 14px',
              height: '40px',
              border: '1px solid var(--off-black)',
              color: 'var(--off-black)',
              fontWeight: 500,
              fontSize: '14px',
              borderRadius: 'var(--radius-btn)',
              textDecoration: 'none',
            }}
          >
            Get in touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
