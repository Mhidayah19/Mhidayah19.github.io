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

  const mutedColor = dark ? 'rgba(255,255,255,0.65)' : 'var(--ink-muted)'
  const tagBg = dark ? 'rgba(255,255,255,0.12)' : 'var(--warm-cream)'
  const tagBorder = dark ? 'rgba(255,255,255,0.25)' : 'var(--border)'
  const tagColor = dark ? 'rgba(255,255,255,0.85)' : 'var(--ink)'

  return (
    <motion.article
      variants={cardVariant}
      whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      style={{
        gridColumn: gridCol,
        gridRow: gridRow,
        backgroundColor: bg || 'var(--surface-card)',
        backgroundImage: dark
          ? 'radial-gradient(ellipse at 70% 20%, rgba(140,199,196,0.18) 0%, transparent 65%)'
          : 'none',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-card)',
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
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
            padding: '3px 8px',
            borderRadius: 'var(--radius-btn)',
            backgroundColor: dark ? 'rgba(255,255,255,0.18)' : 'var(--red)',
            color: '#fff',
            lineHeight: 1.3,
          }}
        >
          {badge}
        </span>
      )}

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: dark ? '32px' : '20px',
          fontWeight: 400,
          color: dark ? '#fff' : 'var(--ink)',
          letterSpacing: dark ? '-0.96px' : '-0.48px',
          lineHeight: 1.0,
          flex: dark ? 1 : 0,
        }}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '14px',
          fontWeight: 300,
          color: mutedColor,
          lineHeight: 1.4,
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
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 400,
                padding: '2px 6px',
                borderRadius: 'var(--radius-btn)',
                border: `1px solid ${tagBorder}`,
                backgroundColor: tagBg,
                color: tagColor,
                letterSpacing: '0.3px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <span style={{ fontSize: '14px', color: dark ? '#fff' : 'var(--ink)' }}>&#8599;</span>
        )}
      </div>
    </motion.article>
  )
}
