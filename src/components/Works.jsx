import { motion } from 'framer-motion'
import WorkCard from './WorkCard.jsx'
import { projects } from '../data/projects.js'

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

export default function Works() {
  return (
    <section
      id="work"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 5vw, 7rem)',
        borderTop: '1px solid var(--border)',
      }}
    >
      <style>{`
  @media (max-width: 768px) {
    .bento-grid > article {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }
  }
`}</style>

      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          color: 'var(--teal-light)',
          textTransform: 'uppercase',
          marginBottom: '3rem',
        }}
      >
        02 · Work
      </motion.p>

      {/* Bento Grid */}
      <motion.div
        className="bento-grid"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridTemplateRows: 'auto',
          gap: '12px',
        }}
      >
        {projects.map(project => (
          <WorkCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
