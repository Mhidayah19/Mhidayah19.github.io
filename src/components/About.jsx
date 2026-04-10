import { motion } from 'framer-motion'

const skills = [
  'React', 'React Native', 'TypeScript', 'Node.js', 'NestJS',
  'Flutter', 'Kotlin', 'Python', 'SAP CAP', 'MCP Protocol',
  'Claude API', 'Supabase', 'Firebase', 'Framer Motion', 'Vite',
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 7rem)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <style>{`
  @media (max-width: 640px) {
    .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
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
        01 &middot; About
      </motion.p>

      <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
        {/* Left: bio */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '32px',
              fontWeight: 400,
              color: 'var(--ink)',
              marginBottom: '1.25rem',
              letterSpacing: '-0.96px',
              lineHeight: 1.0,
            }}
          >
            Engineer who moves between layers.
          </h2>
          <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'var(--ink-muted)', marginBottom: '1rem' }}>
            I'm a final-year Software Engineering student at SIT (graduating August 2026), currently building
            enterprise AI at Mymediset as part of my capstone. My work spans AI agent design, mobile
            development, and full-stack web — with a preference for systems that feel fast and intentional.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'var(--ink-muted)' }}>
            Outside of work I'm building Kickstand, an AI voice agent for Singapore motorcycle owners.
            I care about developer experience, clear architecture, and shipping things that actually work.
          </p>
        </motion.div>

        {/* Right: skill tags */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '1.2px',
              color: 'var(--teal-light)',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              lineHeight: 1.0,
            }}
          >
            Technologies
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {skills.map(skill => (
              <span
                key={skill}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 400,
                  padding: '4px 10px',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-btn)',
                  color: 'var(--ink)',
                  letterSpacing: '0.3px',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
