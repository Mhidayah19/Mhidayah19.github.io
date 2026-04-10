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
        04 &middot; Education
      </motion.p>

      <div className="education-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        {education.map((edu) => (
          <motion.div
            key={edu.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            style={{
              padding: '1.5rem',
              backgroundColor: 'var(--surface-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-card)',
            }}
          >
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', fontWeight: 400, color: 'var(--teal-light)', marginBottom: '0.75rem', letterSpacing: '0.6px', textTransform: 'uppercase', lineHeight: 1.0 }}>
              {edu.period}
            </p>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '24px',
                fontWeight: 400,
                color: 'var(--ink)',
                letterSpacing: '-0.48px',
                lineHeight: 1.0,
                marginBottom: '0.5rem',
              }}
            >
              {edu.institution}
            </h3>
            <p style={{ fontSize: '14px', fontWeight: 300, color: 'var(--ink-muted)', lineHeight: 1.4 }}>
              {edu.degree}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
