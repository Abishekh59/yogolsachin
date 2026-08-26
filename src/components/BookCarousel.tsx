"use client"
import { useState, useEffect } from 'react'
import BookModal from './BookModal'
import { PUBLISHERS, type Publisher } from '../data/books'
import { BOOKS_DATA } from '../data/booksData'

type Book = {
  id: string
  title: string
  author: string
  img: string
  publication: string
  aspectRatio: number  // height / width — varies for masonry effect
}

/* ── Palette per publication ── */
const PALETTES: Record<string, { bg: string; text: string; accent: string }> = {
  bh:          { bg: '#2d1b00', text: '#f4ead7', accent: '#d5a756' },
  fp:          { bg: '#1a1a2e', text: '#f0e6d2', accent: '#d4af6a' },
  kitab:       { bg: '#1e0d2b', text: '#f5e8d0', accent: '#c4a055' },
  imprint:     { bg: '#0d1a2b', text: '#f5edd8', accent: '#e0a955' },
  nepalaya:    { bg: '#0d2818', text: '#f2e8d0', accent: '#d4a030' },
  lipi:        { bg: '#1a1a0a', text: '#f6e8d2', accent: '#c47b3a' },
  sunbarshi:   { bg: '#1a0a0a', text: '#f0e2cc', accent: '#b87a50' },
  indigo:      { bg: '#0d0d2b', text: '#f0e8d0', accent: '#c0a040' },
  kalam:       { bg: '#0a1a1a', text: '#f4ead4', accent: '#c0b050' },
  shailee:     { bg: '#1a0d00', text: '#f5e8d4', accent: '#c88050' },
  sambodhan:   { bg: '#0a0a1a', text: '#f0e8d0', accent: '#c0a040' },
  ratna:       { bg: '#1a0a00', text: '#f4ead4', accent: '#d08040' },
  educational: { bg: '#001a0a', text: '#f0f4e0', accent: '#c0d040' },
  sas:         { bg: '#1a1218', text: '#f0e8d0', accent: '#c9a227' },
  shangrila:   { bg: '#0d1a1a', text: '#f5e8d0', accent: '#c4a055' },
  others:      { bg: '#2a2a2a', text: '#f0e8e0', accent: '#c0a040' },
}

/* ── Single masonry card ── */
function BookCard({ book, onClick }: { book: Book; onClick: () => void }) {
  const [hov, setHov] = useState(false)
  const palette = PALETTES[book.publication] || PALETTES['bh']

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        breakInside: 'avoid',
        marginBottom: '1rem',
        borderRadius: '8px',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
        boxShadow: hov
          ? '0 16px 40px rgba(0,0,0,0.22)'
          : '0 4px 14px rgba(0,0,0,0.10)',
        transform: hov ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease',
      }}
    >
      {/* Book cover image or color fallback */}
      <div style={{
        aspectRatio: `${1 / book.aspectRatio}`,
        background: palette.bg,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {book.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={book.img}
            alt={book.title}
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', display: 'block',
              transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)',
              transform: hov ? 'scale(1.04)' : 'scale(1)',
            }}
          />
        ) : (
          /* Typography cover fallback */
          <div style={{ position: 'absolute', inset: 0, background: palette.bg }} />
        )}

        {/* Hover overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.28)',
          opacity: hov ? 1 : 0,
          transition: 'opacity 0.3s ease',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '0.625rem',
            fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase',
            color: '#fff',
            padding: '0.5em 1.2em',
            border: '1px solid rgba(255,255,255,0.7)',
            borderRadius: '2px',
          }}>View</span>
        </div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────────
   BOOK CAROUSEL — Pinterest / Masonry Grid
───────────────────────────────────────────────── */
export default function BookCarousel() {
  const [books, setBooks] = useState<Book[]>([])
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  useEffect(() => {
    // Shuffle and take 60 random books
    const shuffled = [...BOOKS_DATA].sort(() => Math.random() - 0.5).slice(0, 60)
    // Assign varying aspect ratios for masonry effect (2:3 book covers, some taller)
    const ratios = [1.4, 1.5, 1.3, 1.6, 1.4, 1.5, 1.35, 1.5, 1.45, 1.4]
    setBooks(shuffled.map((b, i) => ({
      id: b.id,
      title: b.title,
      author: b.author,
      img: b.coverImageUrl || '',
      publication: b.publication || '',
      aspectRatio: ratios[i % ratios.length],
    })))
  }, [])

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
          <p style={{
            fontSize: '0.8125rem', color: 'rgba(14,12,10,0.38)',
            fontStyle: 'italic', fontFamily: "'Fraunces',serif", margin: 0,
          }}>
            A selection of cover commissions — {books.length} volumes
          </p>
        </div>
      </div>

      {/* Masonry grid */}
      <div style={{
        columns: 'clamp(140px, 18vw, 220px)',
        columnGap: '1rem',
      }}>
        {books.map((book, i) => (
          <BookCard
            key={book.id + i}
            book={book}
            onClick={() => setSelectedBook(book)}
          />
        ))}
      </div>

      {selectedBook && (
        <BookModal
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}
    </div>
  )
}
