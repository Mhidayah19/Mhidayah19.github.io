import { motion } from 'framer-motion'

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function WorkCard({ project }) {
  const {
    title, badge, description, stack, year, link,
    gridCol, gridRow, bg, dark,
  } = project

  const textColor = dark ? '#fff' : 'var(--ink)'
  const mutedColor = dark ? 'rgba(255,255,255,0.65)' : 'var(--ink-muted)'
  const tagBg = dark ? 'rgba(255,255,255,0.12)' : 'transparent'
  const tagBorder = dark ? 'rgba(255,255,255,0.25)' : 'var(--teal-light)'
  const tagColor = dark ? 'rgba(255,255,255,0.85)' : 'var(--teal-dark)'

  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -3, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      style={{
        gridColumn: gridCol,
        gridRow: gridRow,
        backgroundColor: bg,
        backgroundImage: dark
          ? 'radial-gradient(ellipse at 70% 20%, rgba(140,199,196,0.18) 0%, transparent 65%)'
          : 'none',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
        cursor: link ? 'pointer' : 'default',
      }}
      onClick={() => link && window.open(link, '_blank', 'noopener noreferrer')}
      tabIndex={link ? 0 : undefined}
      role={link ? 'link' : undefined}
      aria-label={link ? `${title} - opens in new tab` : undefined}
      onKeyDown={link ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); window.open(link, '_blank', 'noopener noreferrer') } } : undefined}
    >
      {/* Badge */}
      {badge && (
        <span
          style={{
            alignSelf: 'flex-start',
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '0.25rem 0.6rem',
            borderRadius: '999px',
            backgroundColor: dark ? 'rgba(255,255,255,0.18)' : 'var(--red)',
            color: dark ? '#fff' : '#fff',
          }}
        >
          {badge}
        </span>
      )}

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: dark ? '1.6rem' : '1.05rem',
          fontWeight: 700,
          color: dark ? '#fff' : 'var(--red)',
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          flex: dark ? 1 : 0,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.82rem',
          fontWeight: 300,
          color: mutedColor,
          lineHeight: 1.65,
          flex: 1,
        }}
      >
        {description}
      </p>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {stack.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: '0.65rem',
                fontWeight: 400,
                padding: '0.2rem 0.5rem',
                borderRadius: '4px',
                border: `1px solid ${tagBorder}`,
                backgroundColor: tagBg,
                color: tagColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <span style={{ fontSize: '0.8rem', color: dark ? '#fff' : 'var(--teal-dark)' }}>↗</span>
        )}
      </div>
    </motion.article>
  )
}
