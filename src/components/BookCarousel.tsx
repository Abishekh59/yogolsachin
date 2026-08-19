import { useRef, useState, useEffect, useCallback } from 'react'
import BookModal from './BookModal'
import { PUBLISHERS, type Publisher } from '../data/books'

/* Each cover has a unique typographic layout — no two are the same */
type Book = {
  title: string
  author: string
  img: string
  publication: string
  palette: { bg: string; text: string; accent: string; tint: string }
  layout: 'title-top-left' | 'title-center' | 'title-bottom-left' | 'title-bottom-right' | 'title-top-center' | 'title-split'
  weight: 'light' | 'regular' | 'heavy'
  italic?: boolean
}



/* ── Renders a single book cover as a designed object ── */
function Cover({ book, active }: { book: Book; active: boolean }) {
  const { title, author, img, palette, layout, weight, italic } = book

  const titleSize = {
    light:   'clamp(1.125rem, 2.8vw, 1.5rem)',
    regular: 'clamp(1.25rem,  3.2vw, 1.75rem)',
    heavy:   'clamp(1.5rem,   3.8vw, 2.125rem)',
  }[weight]

  const titleWeight = { light: 200, regular: 300, heavy: 400 }[weight]

  const titleStyle: React.CSSProperties = {
    fontFamily: "'Fraunces', serif",
    fontSize: titleSize,
    fontWeight: titleWeight,
    fontStyle: italic ? 'italic' : 'normal',
    lineHeight: 1.1,
    letterSpacing: weight === 'heavy' ? '-0.02em' : '-0.01em',
    color: palette.text,
    textShadow: '0 1px 8px rgba(0,0,0,0.6)',
  }

  const authorStyle: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.5625rem',
    fontWeight: 400,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color: palette.accent,
    textShadow: '0 1px 4px rgba(0,0,0,0.8)',
    display: 'block',
  }

  /* Layout-specific positioning of title + author */
  const renderContent = () => {
    switch (layout) {
      case 'title-top-left':
        return (
          <>
            <div style={{ position: 'absolute', top: '1.25rem', left: '1rem', right: '1rem' }}>
              {/* Thin accent rule above title */}
              <div style={{ width: 28, height: 1, background: palette.accent, marginBottom: '0.625rem' }} />
              <p style={titleStyle}>{title}</p>
            </div>
            {author && <p style={{ ...authorStyle, position: 'absolute', bottom: '1rem', left: '1rem' }}>{author}</p>}
          </>
        )

      case 'title-top-center':
        return (
          <>
            <div style={{ position: 'absolute', top: '1.5rem', left: '1rem', right: '1rem', textAlign: 'center' }}>
              {author && <p style={{ ...authorStyle, marginBottom: '0.5rem', color: palette.accent }}>{author}</p>}
              <div style={{ width: 40, height: 1, background: palette.accent, margin: '0.5rem auto 0.625rem' }} />
              <p style={titleStyle}>{title}</p>
            </div>
          </>
        )

      case 'title-center':
        return (
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: '1rem',
          }}>
            <p style={titleStyle}>{title}</p>
            {author && (
              <>
                <div style={{ width: 32, height: 1, background: palette.accent, margin: '0.75rem auto' }} />
                <p style={authorStyle}>{author}</p>
              </>
            )}
          </div>
        )

      case 'title-bottom-left':
        return (
          <>
            <div style={{ position: 'absolute', bottom: '1.25rem', left: '1rem', right: '1rem' }}>
              <p style={titleStyle}>{title}</p>
              {author && (
                <>
                  <div style={{ width: 28, height: 1, background: palette.accent, margin: '0.5rem 0' }} />
                  <p style={authorStyle}>{author}</p>
                </>
              )}
            </div>
          </>
        )

      case 'title-bottom-right':
        return (
          <div style={{ position: 'absolute', bottom: '1.25rem', right: '1rem', left: '1rem', textAlign: 'right' }}>
            <p style={titleStyle}>{title}</p>
            {author && (
              <>
                <div style={{ width: 28, height: 1, background: palette.accent, margin: '0.5rem 0 0.5rem auto' }} />
                <p style={authorStyle}>{author}</p>
              </>
            )}
          </div>
        )

      case 'title-split': {
        /* Split: "YOU DON'T WANT" light, "SUCCESS" heavy on next line */
        const words = title.split(' ')
        const half  = Math.ceil(words.length / 2)
        const lineA = words.slice(0, half).join(' ')
        const lineB = words.slice(half).join(' ')
        return (
          <div style={{ position: 'absolute', bottom: '1.25rem', left: '1rem', right: '1rem' }}>
            <p style={{ ...titleStyle, fontWeight: 200, fontSize: 'clamp(0.875rem, 2.2vw, 1.125rem)' }}>{lineA}</p>
            <p style={{ ...titleStyle, fontWeight: 400, letterSpacing: '-0.03em' }}>{lineB}</p>
            {author && <p style={{ ...authorStyle, marginTop: '0.625rem' }}>{author}</p>}
          </div>
        )
      }
    }
  }

  return (
    <div style={{
      position: 'relative',
      flexShrink: 0,
      width: 'clamp(148px, 16vw, 210px)',
      aspectRatio: '2/3',
      background: palette.bg,
      overflow: 'hidden',
      borderRadius: 2,
      boxShadow: active
        ? '0 28px 56px rgba(0,0,0,0.8), -5px 0 15px rgba(0,0,0,0.4)'
        : '0 10px 28px rgba(0,0,0,0.6), -3px 0 8px rgba(0,0,0,0.3)',
      transform: active ? 'translateY(-12px) scale(1.04)' : 'translateY(0) scale(1)',
      transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), box-shadow 0.5s ease',
      userSelect: 'none',
    }}>
      {img ? (
        <img src={img} alt={`${title} — book cover`} draggable={false}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            transition: 'filter 0.5s',
          }}
        />
      ) : (
        <>
          {/* Colour tint */}
          <div style={{ position: 'absolute', inset: 0, background: palette.tint }} />

          {/* Spine shadow */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 30%)',
            pointerEvents: 'none',
          }} />

          {/* Top vignette */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '45%',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
            pointerEvents: 'none',
          }} />

          {/* Bottom vignette */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
            pointerEvents: 'none',
          }} />

          {/* Typographic content */}
          {renderContent()}
        </>
      )}

      {/* Active accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: palette.accent,
        transform: active ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1)',
      }} />
    </div>
  )
}

/* ── Progress indicator ── */
function Progress({ trackRef }: { trackRef: React.RefObject<HTMLDivElement | null> }) {
  const [p, setP] = useState(0)
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const fn = () => setP(el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth))
    el.addEventListener('scroll', fn, { passive: true })
    return () => el.removeEventListener('scroll', fn)
  }, [trackRef])

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
      <div style={{ flex: 1, height: 1, background: 'rgba(14,12,10,0.10)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, height: '100%',
          width: `${p * 100}%`,
          background: '#c9a227',
          transition: 'width 0.1s',
          minWidth: 24,
        }} />
      </div>
      <span style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', color: 'rgba(14,12,10,0.28)', flexShrink: 0, fontFamily: "'Fraunces',serif", fontStyle: 'italic' }}>
        drag to explore
      </span>
    </div>
  )
}

/* ─────────────────────────────────────────────────
   BOOK CAROUSEL
───────────────────────────────────────────────── */
export default function BookCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [books, setBooks] = useState<Book[]>([])
  const [active, setActive] = useState<number | null>(null)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [dragging, setDragging] = useState(false)
  const startRef = useRef({ x: 0, scroll: 0 })
  const velRef   = useRef(0)
  const lastXRef = useRef(0)
  const rafId    = useRef(0)

  useEffect(() => {
    fetch('/api/books')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          const layouts: any[] = ['title-top-left', 'title-center', 'title-bottom-left', 'title-bottom-right', 'title-top-center', 'title-split']
          const weights: any[] = ['light', 'regular', 'heavy']
          setBooks(data.map((b, i) => ({
            ...b,
            img: b.coverImageUrl || '',
            publication: b.publication || '',
            palette: { bg: '#1c0c08', text: '#f5e6df', accent: '#c0392b', tint: 'rgba(80,10,10,0.62)' },
            layout: layouts[i % layouts.length],
            weight: weights[i % weights.length],
            italic: i % 2 === 0,
          })))
        }
      })
      .catch(console.error)
  }, [])

  const onDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    cancelAnimationFrame(rafId.current)
    setDragging(true)
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX
    startRef.current = { x, scroll: trackRef.current?.scrollLeft ?? 0 }
    lastXRef.current = x
    velRef.current = 0
  }, [])

  const onMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging || !trackRef.current) return
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX
    if ('touches' in e) {} else e.preventDefault()
    trackRef.current.scrollLeft = startRef.current.scroll - (x - startRef.current.x)
    velRef.current = x - lastXRef.current
    lastXRef.current = x
  }, [dragging])

  const onUp = useCallback(() => {
    setDragging(false)
    const glide = () => {
      if (!trackRef.current || Math.abs(velRef.current) < 0.4) return
      trackRef.current.scrollLeft -= velRef.current
      velRef.current *= 0.9
      rafId.current = requestAnimationFrame(glide)
    }
    rafId.current = requestAnimationFrame(glide)
  }, [])

  useEffect(() => () => cancelAnimationFrame(rafId.current), [])

  return (
    <div>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1rem',
        marginBottom: '2.5rem',
        paddingBottom: '1.25rem',
        borderBottom: '1px solid rgba(14,12,10,0.08)',
      }}>
        <div>
          <span style={{
            fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: '#c9a227', display: 'block', marginBottom: '0.5rem',
          }}>Book Covers</span>
          <p style={{ fontSize: '0.8125rem', color: 'rgba(14,12,10,0.38)', fontStyle: 'italic', fontFamily: "'Fraunces',serif" }}>
            A selection of cover commissions
          </p>
        </div>
        {/* Fine Print Company source reference */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.4 }}>
          <span style={{ fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(14,12,10,0.28)', fontFamily: 'Inter, sans-serif' }}>
            Fine Print Co.
          </span>
        </div>
      </div>

      {/* Track */}
      <div
        ref={trackRef}
       
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        style={{
          display: 'flex',
          gap: 'clamp(0.75rem, 1.2vw, 1rem)',
          overflowX: 'scroll',
          overflowY: 'visible',
          paddingTop: '1rem',
          paddingBottom: '1.5rem',
          cursor: dragging ? 'grabbing' : 'grab',
          scrollbarWidth: 'none',
          WebkitOverflowScrolling: 'touch',
          /* Slight perspective for depth */
          perspective: '1200px',
        }}
      >
        {books.map((book, i) => (
          <div
            key={book.title + i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            onClick={() => {
              if (!dragging && Math.abs(startRef.current.scroll - (trackRef.current?.scrollLeft ?? 0)) < 10) {
                setSelectedBook(book);
              }
            }}
            style={{
              flexShrink: 0,
              transformStyle: 'preserve-3d',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            <Cover book={book} active={active === i} />
            
            {/* Caption below cover */}
            <div style={{ 
              width: 'clamp(148px, 16vw, 210px)',
              paddingLeft: '0.25rem',
            }}>
              <p style={{
                fontFamily: "'Fraunces', serif",
                fontSize: 'clamp(0.8125rem, 1.6vw, 0.9375rem)',
                fontWeight: 300,
                letterSpacing: '-0.01em',
                color: '#0e0c0a',
                lineHeight: 1.3,
                marginBottom: '0.25rem',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
              }}>
                {book.title}
              </p>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.5625rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'rgba(14,12,10,0.42)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c9a227')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(14,12,10,0.42)')}>
                {book.publication && PUBLISHERS[book.publication as Publisher] 
                  ? PUBLISHERS[book.publication as Publisher].label 
                  : 'Unknown'}
              </p>
            </div>
          </div>
        ))}

        {/* Trailing spacer */}
        <div style={{ flexShrink: 0, width: 'clamp(1rem, 4vw, 3rem)' }} />
      </div>

      {/* Right fade-out */}
      <div style={{
        position: 'absolute',
        right: 0,
        width: 'clamp(60px, 8vw, 120px)',
        top: 0, bottom: 0,
        background: 'linear-gradient(to left, #f4f1ea, transparent)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <Progress trackRef={trackRef} />

      {selectedBook && (
        <BookModal 
          book={selectedBook} 
          onClose={() => setSelectedBook(null)} 
        />
      )}

      <style>{`::-webkit-scrollbar { display: none; }`}</style>
    </div>
  )
}
