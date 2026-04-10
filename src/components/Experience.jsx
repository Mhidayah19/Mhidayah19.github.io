import { motion } from 'framer-motion'
import { experiences } from '../data/experience.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 7rem)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .experience-row { grid-template-columns: 1fr !important; gap: 0.75rem !important; }
        }
      `}</style>
      {/* Section label */}
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          color: 'var(--teal-light)',
          textTransform: 'uppercase',
          marginBottom: '3rem',
        }}
      >
        03 · Experience
      </motion.p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="experience-row"
            style={{
              display: 'grid',
              gridTemplateColumns: '200px 1fr',
              gap: '3rem',
              padding: '2rem 0',
              borderTop: i === 0 ? 'none' : '1px solid var(--border)',
            }}
          >
            {/* Left: period + location */}
            <div>
              <p style={{ fontSize: '0.8rem', fontWeight: 400, color: 'var(--ink-muted)', marginBottom: '0.25rem' }}>
                {exp.period}
              </p>
              <p style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--teal-light)', letterSpacing: '0.04em' }}>
                {exp.location}
              </p>
            </div>

            {/* Right: company, role, description */}
            <div>
              <p
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'var(--teal-light)',
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                }}
              >
                {exp.company}
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: 'var(--red)',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.75rem',
                }}
              >
                {exp.role}
              </h3>
              <p style={{ fontSize: '0.9rem', fontWeight: 300, color: 'var(--ink-muted)', lineHeight: 1.7 }}>
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
