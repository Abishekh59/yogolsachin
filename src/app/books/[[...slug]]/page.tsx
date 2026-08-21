"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Grain from '../../../components/Grain'
import BookModal from '../../../components/BookModal'
import { BOOKS, PUBLISHERS, type Book, type Publisher, type BookTag } from '../../../data/books'
import { useReveal } from '../../../hooks/useReveal'

const W: React.CSSProperties = {
  maxWidth: 1280, margin: '0 auto',
  padding: '0 clamp(1.5rem, 5.5vw, 5rem)',
}

/* ── helper ── */
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useReveal()
  return <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}s` }}>{children}</div>
}

/* ── Enhanced circular publisher logo ── */
function PubCircle({ pub, size = 56 }: { pub: Publisher; size?: number }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: size, height: size, borderRadius: '50%', overflow: 'hidden',
        border: `2px solid ${hov ? '#c9a227' : 'rgba(14,12,10,0.08)'}`,
        background: '#fff',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: hov
          ? '0 8px 24px rgba(201,162,39,0.22), 0 2px 8px rgba(201,162,39,0.12)'
          : '0 2px 8px rgba(14,12,10,0.06)',
        transform: hov ? 'translateY(-4px) scale(1.08)' : 'scale(1)',
        flexShrink: 0,
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={PUBLISHERS[pub].logo} alt={PUBLISHERS[pub].label}
        style={{
          width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          filter: hov ? 'none' : 'saturate(0.92)',
          transition: 'filter 0.3s',
        }}
      />
      
      {/* Tooltip */}
      {hov && (
        <span style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'rgba(0,0,0,0.85)',
          color: '#fff',
          padding: '0.4rem 0.8rem',
          borderRadius: 6,
          fontSize: '0.6rem',
          fontWeight: 500,
          letterSpacing: '0.05em',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          zIndex: 10,
          animation: 'tooltipFadeIn 0.2s ease-out',
        }}>
          {PUBLISHERS[pub].label}
        </span>
      )}
    </div>
  )
}

type FilterTab = 'all' | 'award' | 'best-seller' | 'recent'
const TABS: { key: FilterTab; label: string }[] = [
  { key: 'all',         label: 'All'         },
  { key: 'award',       label: 'Award'       },
  { key: 'best-seller', label: 'Best Seller' },
  { key: 'recent',      label: 'Recent'      },
]

/* ── Book cover card ── */
function CoverCard({ book, delay, onClick }: { book: Book; delay: number; onClick: () => void }) {
  const [hov, setHov] = useState(false)
  const ref = useReveal()

  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}s` }}>
      <div
       
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        onClick={onClick}
        style={{ position: 'relative', cursor: 'pointer' }}
      >
        {/* Cover image */}
        <div style={{
          aspectRatio: '2/3',
          overflow: 'hidden',
          background: book.palette.bg,
          position: 'relative',
          boxShadow: hov
            ? '0 24px 60px rgba(14,12,10,0.18), 0 6px 16px rgba(14,12,10,0.10)'
            : '0 8px 24px rgba(14,12,10,0.09)',
          transition: 'box-shadow 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.5s cubic-bezier(0.16,1,0.3,1)',
          transform: hov ? 'translateY(-6px)' : 'none',
        }}>
          {book.imgSrc ? (
            <img src={book.imgSrc} alt={book.title} loading="lazy"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%', objectFit: 'cover',
                transition: 'opacity 0.5s',
              }} />
          ) : (
            /* Typographic cover layout only if no image */
            <CoverLayout book={book} hov={hov} />
          )}

          {/* Hover overlay with publisher tag */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(14,12,10,0.55)',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
            opacity: hov ? 1 : 0,
            transition: 'opacity 0.35s',
          }}>
            <span style={{
              fontFamily: "'Fraunces', serif", fontSize: '1.0625rem', fontWeight: 300,
              color: '#f4f1ea', letterSpacing: '-0.01em', textAlign: 'center',
              padding: '0 1.5rem',
            }}>{book.title}</span>
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '0.625rem', fontWeight: 500,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: book.palette.accent,
            }}>{PUBLISHERS[book.publisher].short || PUBLISHERS[book.publisher].label}</span>
          </div>

          {/* Tag badges */}
          {book.tags.length > 0 && (
            <div style={{
              position: 'absolute', top: '0.6rem', left: '0.6rem',
              display: 'flex', flexDirection: 'column', gap: '0.3rem',
            }}>
              {book.tags.includes('award') && (
                <span style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', fontWeight: 600,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  background: '#c9a227', color: '#0e0c0a',
                  padding: '0.25em 0.5em',
                }}>Award</span>
              )}
            </div>
          )}
        </div>

        {/* Caption below */}
        <div style={{ marginTop: '0.875rem' }}>
          <p style={{
            fontFamily: "'Fraunces', serif", fontSize: '0.9375rem', fontWeight: 300,
            letterSpacing: '-0.01em', color: '#0e0c0a', lineHeight: 1.25,
            marginBottom: '0.2rem',
          }}>{book.title}</p>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 400,
            color: 'rgba(14,12,10,0.42)', letterSpacing: '0.04em',
          }}>
            {book.author && `${book.author} · `}
            <Link href={`/books/publication/${book.publisher}`}
              style={{ color: '#c9a227', textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
              {PUBLISHERS[book.publisher].short || PUBLISHERS[book.publisher].label}
            </Link>
            {' · '}{book.year}
          </p>
          <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.45rem', flexWrap: 'wrap' }}>
            {book.tags.filter(t => t !== 'award').map(t => (
              <span key={t} style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'rgba(14,12,10,0.38)',
                border: '1px solid rgba(14,12,10,0.12)',
                padding: '0.2em 0.55em',
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Typographic cover layout ── */
function CoverLayout({ book, hov }: { book: Book; hov: boolean }) {
  const { bg, text, accent } = book.palette
  const title  = book.title
  const author = book.author
  const pub    = PUBLISHERS[book.publisher].short || PUBLISHERS[book.publisher].label

  const base: React.CSSProperties = {
    position: 'absolute', inset: 0, padding: '1.25rem',
    display: 'flex', flexDirection: 'column',
    background: bg,
  }

  if (book.layout === 'center') return (
    <div style={{ ...base, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div style={{ width: 28, height: 1, background: accent, marginBottom: '1rem' }} />
      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.1rem,3vw,1.5rem)', fontWeight: 200, color: text, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '0.75rem' }}>{title}</h3>
      {author && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.55rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: accent }}>{author}</p>}
      <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', fontFamily: 'Inter, sans-serif', fontSize: '0.45rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: `${text}55` }}>{pub}</div>
    </div>
  )

  if (book.layout === 'top-left') return (
    <div style={{ ...base, justifyContent: 'flex-start' }}>
      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.1rem,3vw,1.6rem)', fontWeight: 200, color: text, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '0.5rem' }}>{title}</h3>
      <div style={{ width: 20, height: 1, background: accent, marginBottom: '0.5rem' }} />
      {author && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: `${accent}cc` }}>{author}</p>}
      <div style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem', fontFamily: 'Inter, sans-serif', fontSize: '0.45rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: `${text}44`, writingMode: 'vertical-rl' }}>{pub}</div>
    </div>
  )

  if (book.layout === 'top-center') return (
    <div style={{ ...base, alignItems: 'center', justifyContent: 'flex-start', textAlign: 'center' }}>
      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.1rem,3vw,1.5rem)', fontWeight: 200, color: text, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '0.5rem' }}>{title}</h3>
      <div style={{ width: 24, height: 1, background: accent, margin: '0 auto 0.5rem' }} />
      {author && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: `${accent}cc` }}>{author}</p>}
      <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', fontFamily: 'Inter, sans-serif', fontSize: '0.45rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: `${text}44` }}>{pub}</div>
    </div>
  )

  if (book.layout === 'bottom-left') return (
    <div style={{ ...base, justifyContent: 'flex-end' }}>
      <div style={{ width: 20, height: 1, background: accent, marginBottom: '0.6rem' }} />
      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.1rem,3vw,1.6rem)', fontWeight: 200, color: text, letterSpacing: '-0.03em', lineHeight: 1 }}>{title}</h3>
      {author && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: `${accent}cc`, marginTop: '0.5rem' }}>{author}</p>}
      <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', fontFamily: 'Inter, sans-serif', fontSize: '0.45rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: `${text}44`, writingMode: 'vertical-rl' }}>{pub}</div>
    </div>
  )

  if (book.layout === 'bottom-right') return (
    <div style={{ ...base, alignItems: 'flex-end', justifyContent: 'flex-end', textAlign: 'right' }}>
      <div style={{ width: 20, height: 1, background: accent, marginBottom: '0.6rem' }} />
      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.1rem,3vw,1.6rem)', fontWeight: 200, color: text, letterSpacing: '-0.03em', lineHeight: 1 }}>{title}</h3>
      {author && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: `${accent}cc`, marginTop: '0.5rem' }}>{author}</p>}
      <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', fontFamily: 'Inter, sans-serif', fontSize: '0.45rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: `${text}44`, writingMode: 'vertical-rl' }}>{pub}</div>
    </div>
  )

  /* split */
  return (
    <div style={{ ...base, justifyContent: 'space-between' }}>
      <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.1rem,3vw,1.6rem)', fontWeight: 200, color: text, letterSpacing: '-0.03em', lineHeight: 1 }}>
        {title.split(' ').slice(0, Math.ceil(title.split(' ').length / 2)).join(' ')}
      </h3>
      <div>
        <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.1rem,3vw,1.6rem)', fontWeight: 200, color: accent, letterSpacing: '-0.03em', lineHeight: 1, textAlign: 'right' }}>
          {title.split(' ').slice(Math.ceil(title.split(' ').length / 2)).join(' ')}
        </h3>
        {author && <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: `${text}88`, marginTop: '0.5rem', textAlign: 'right' }}>{author}</p>}
      </div>
      <div style={{ position: 'absolute', top: '50%', left: '1.25rem', width: 16, height: 1, background: accent, transform: 'translateY(-50%)' }} />
    </div>
  )
}

/* ─────────────────────────────────────────────────
   BOOKS PAGE — handles all, award, best-seller, recent, publication/:pub
───────────────────────────────────────────────── */
export default function Books() {
  const params = useParams<{ slug?: string[] }>()
  const slug = params?.slug || []
  const filter = slug[0] === 'publication' ? undefined : slug[0]
  const publisher = slug[0] === 'publication' ? slug[1] : undefined
  const router = useRouter()
  const [tab, setTab] = useState<FilterTab>('all')
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  /* Determine context */
  const isPublisherView = !!publisher
  const pubKey = publisher as Publisher | undefined

  const [dbBooks, setDbBooks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/books')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          setDbBooks(data.map(b => {
            // Build tags array from genre, isBestSeller, and isAwardWinner flags
            const tags = b.genre ? b.genre.split(',').map((s: string) => s.trim()) : []
            if (b.isBestSeller) tags.push('best-seller')
            if (b.isAwardWinner) tags.push('award')
            
            // Auto-add 'recent' tag if book was created in last 6 months
            const createdDate = new Date(b.createdAt)
            const sixMonthsAgo = new Date()
            sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6)
            console.log('Book:', b.title, 'Created:', createdDate, 'Six months ago:', sixMonthsAgo, 'Is recent:', createdDate >= sixMonthsAgo)
            if (createdDate >= sixMonthsAgo) {
              tags.push('recent')
            }
            
            return {
              id: b.id,
              title: b.title,
              author: b.author,
              publisher: b.publication as Publisher,
              tags: tags,
              year: new Date(b.createdAt).getFullYear(),
              palette: { bg: '#1c0c08', text: '#f5e6df', accent: '#c0392b' }, // Default palette
              layout: 'center', // Default layout
              imgSrc: b.coverImageUrl,
              hasSpotUV: b.hasSpotUV,
              hasMatteLamination: b.hasMatteLamination,
              hasFoilEmboss: b.hasFoilEmboss,
              awardName: b.awardName,
              purchaseLink: b.purchaseLink,
            }
          }))
        }
      })
      .finally(() => setLoading(false))
  }, [])

  /* Sync tab from URL */
  useEffect(() => {
    if (filter === 'award' || filter === 'best-seller' || filter === 'recent') setTab(filter)
    else setTab('all')
  }, [filter])

  useEffect(() => { window.scrollTo(0, 0) }, [publisher, filter])

  /* Filter logic */
  const allBooks = [...dbBooks, ...BOOKS]
  const visibleBooks = allBooks.filter(b => {
    if (isPublisherView && pubKey && b.publisher !== pubKey) return false
    if (tab === 'award')       return b.tags.includes('award')
    if (tab === 'best-seller') return b.tags.includes('best-seller')
    if (tab === 'recent')      return b.tags.includes('recent')
    return true
  })

  /* Page title */
  const pageTitle = isPublisherView && pubKey
    ? PUBLISHERS[pubKey].label
    : filter === 'award'       ? 'Award-Winning'
    : filter === 'best-seller' ? 'Best Sellers'
    : filter === 'recent'      ? 'Recent'
    : 'Books'

  const pageSub = isPublisherView && pubKey
    ? `${PUBLISHERS[pubKey].short ? `[${PUBLISHERS[pubKey].short}]` : ''} · Book Cover Design`
    : 'Book Cover Design'

  /* Tab navigation for publisher view */
  const handleTab = (t: FilterTab) => {
    setTab(t)
    if (isPublisherView) {
      // stay on publisher, update hash for UX only (no route change needed — filter is local state)
    } else {
      router.push(t === 'all' ? '/books' : `/books/${t}`)
    }
  }

  return (
    <div style={{ background: '#f4f1ea', minHeight: '100vh' }}>
      <Grain />
      <Header />

      {/* ── Page Hero ── */}
      <section style={{
        paddingTop: 'calc(68px + clamp(3.5rem,8vh,5.5rem))',
        paddingBottom: 'clamp(2.5rem,5vw,4rem)',
        borderBottom: '1px solid rgba(14,12,10,0.08)',
      }}>
        <div style={W}>
          {isPublisherView && pubKey && (
            <Link href="/books"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'Inter, sans-serif', fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(14,12,10,0.38)', marginBottom: '2rem', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0e0c0a')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(14,12,10,0.38)')}>
              ← All Books
            </Link>
          )}

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <span style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a227', marginBottom: '0.75rem' }}>
                {pageSub}
              </span>
              <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2.5rem,7vw,5rem)', fontWeight: 200, letterSpacing: '-0.035em', lineHeight: 0.95, color: '#0e0c0a' }}>
                {pageTitle}
              </h1>
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', color: 'rgba(14,12,10,0.30)', letterSpacing: '0.04em' }}>
              {visibleBooks.length} cover{visibleBooks.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Publisher circles (non-publisher view) */}
          {!isPublisherView && (
            <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'flex-start' }}>
              {(Object.keys(PUBLISHERS) as Publisher[]).map(p => {
                const count = allBooks.filter(b => b.publisher === p).length
                return (
                  <button key={p} onClick={() => router.push(`/books/publication/${p}`)}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.45rem', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    <PubCircle pub={p} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 400, letterSpacing: '0.04em', color: 'rgba(14,12,10,0.55)', textAlign: 'center', maxWidth: 72, lineHeight: 1.3 }}>
                      {PUBLISHERS[p].label}
                      {count > 0 && <span style={{ display: 'block', color: '#c9a227', fontSize: '0.6rem', fontWeight: 500 }}>{count}</span>}
                    </span>
                  </button>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Tabs ── */}
      <div style={{
        borderBottom: '1px solid rgba(14,12,10,0.08)',
        position: 'sticky',
        top: 68,
        zIndex: 100,
        background: 'rgba(244,241,234,0.98)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 4px 12px rgba(14,12,10,0.02)',
      }}>
        <div style={{ ...W, display: 'flex', gap: 0, overflowX: 'auto', scrollbarWidth: 'none' }}>
          {TABS.map(t => (
            <button key={t.key}
              onClick={() => handleTab(t.key)}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.625rem', fontWeight: 600,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: tab === t.key ? '#0e0c0a' : 'rgba(14,12,10,0.38)',
                background: 'none', border: 'none',
                borderBottom: tab === t.key ? '2px solid #c9a227' : '2px solid transparent',
                padding: '1.2rem 0', marginRight: '2.75rem',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'pointer',
                position: 'relative',
              }}
              onMouseEnter={e => {
                if (tab !== t.key) e.currentTarget.style.color = 'rgba(14,12,10,0.65)'
              }}
              onMouseLeave={e => {
                if (tab !== t.key) e.currentTarget.style.color = 'rgba(14,12,10,0.38)'
              }}>
              {t.label}
              {t.key !== 'all' && (
                <span style={{
                  marginLeft: '0.5em',
                  fontSize: '0.5rem',
                  opacity: tab === t.key ? 0.7 : 0.45,
                  fontWeight: 500,
                  color: tab === t.key ? '#c9a227' : 'inherit',
                }}>
                  {allBooks.filter(b => {
                    if (isPublisherView && pubKey && b.publisher !== pubKey) return false
                    return b.tags.includes(t.key as BookTag)
                  }).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ── */}
      <section style={{ padding: 'clamp(3rem,7vw,5rem) 0 clamp(5rem,10vw,8rem)' }}>
        <div style={W}>
          {visibleBooks.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '6rem 0', color: 'rgba(14,12,10,0.35)' }}>
              <p style={{ fontFamily: "'Fraunces', serif", fontSize: '1.375rem', fontWeight: 200, fontStyle: 'italic' }}>No covers in this category yet.</p>
            </div>
          ) : (
            <BookGrid books={visibleBooks} onBookSelect={setSelectedBook} />
          )}
        </div>
      </section>

      {/* Publisher strip (in publisher view) */}
      {isPublisherView && (
        <section style={{ borderTop: '1px solid rgba(14,12,10,0.08)', padding: 'clamp(3rem,6vw,5rem) 0' }}>
          <div style={W}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(14,12,10,0.35)', marginBottom: '1.25rem' }}>
              Other Publishers
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', alignItems: 'flex-start' }}>
              {(Object.keys(PUBLISHERS) as Publisher[]).filter(p => p !== pubKey).map(p => (
                <Link key={p} href={`/books/publication/${p}`}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.45rem', textDecoration: 'none' }}>
                  <PubCircle pub={p} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.6875rem', fontWeight: 400, letterSpacing: '0.04em', color: 'rgba(14,12,10,0.55)', textAlign: 'center', maxWidth: 72, lineHeight: 1.3 }}>
                    {PUBLISHERS[p].label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      {selectedBook && (
        <BookModal 
          book={selectedBook} 
          onClose={() => setSelectedBook(null)} 
        />
      )}
    </div>
  )
}

/* ── Masonry-style grid ── */
function BookGrid({ books, onBookSelect }: { books: Book[], onBookSelect: (book: Book) => void }) {
  return (
    <>
      <div className="book-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 'clamp(2rem,4vw,3.5rem) clamp(1.25rem,3vw,2.5rem)',
      }}>
        {books.map((b, i) => (
          <CoverCard key={b.id} book={b} delay={Math.min(i * 0.06, 0.36)} onClick={() => onBookSelect(b)} />
        ))}
      </div>
      <style>{`
        @media (min-width: 640px)  { .book-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (min-width: 1024px) { .book-grid { grid-template-columns: repeat(4, 1fr) !important; } }
        @media (min-width: 1280px) { .book-grid { grid-template-columns: repeat(5, 1fr) !important; } }

        @keyframes tooltipFadeIn {
          from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
