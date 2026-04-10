import { motion } from 'framer-motion'
import { education } from '../data/experience.js'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Education() {
  return (
    <section
      id="education"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 7rem)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <style>{`
        @media (max-width: 640px) {
          .education-grid { grid-template-columns: 1fr !important; }
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
        04 · Education
      </motion.p>

      <div className="education-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        {education.map((edu, i) => (
          <motion.div
            key={edu.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--teal-light)', marginBottom: '0.5rem' }}>
              {edu.period}
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.05rem',
                fontWeight: 700,
                color: 'var(--teal-dark)',
                letterSpacing: '-0.02em',
                marginBottom: '0.35rem',
              }}
            >
              {edu.institution}
            </h3>
            <p style={{ fontSize: '0.85rem', fontWeight: 300, color: 'var(--ink-muted)' }}>
              {edu.degree}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
