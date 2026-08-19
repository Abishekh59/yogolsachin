export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(14,12,10,0.08)', padding: 'clamp(3rem, 6vw, 5rem) 0' }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: '0 clamp(1.5rem, 5.5vw, 5rem)',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center',
        justifyContent: 'space-between', gap: '1rem',
      }}>
        <span style={{ fontFamily: "'Fraunces', serif", fontSize: '0.9375rem', fontWeight: 300, color: '#0e0c0a', letterSpacing: '-0.01em' }}>
          Sachin Yagol Shrestha
        </span>
        <span style={{ fontSize: '0.625rem', letterSpacing: '0.12em', color: 'rgba(14,12,10,0.30)', textTransform: 'uppercase' }}>
          © {new Date().getFullYear()}
        </span>
        {/* PLACEHOLDER: update Instagram URL */}
        <a href="https://instagram.com/sachinyagol" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(14,12,10,0.32)', textDecoration: 'none', transition: 'color 0.3s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#c9a227')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(14,12,10,0.32)')}>
          Instagram
        </a>
      </div>
    </footer>
  )
}
