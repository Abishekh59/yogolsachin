"use client"
import { useState, useEffect, useRef } from 'react'
import { PUBLISHERS, type Publisher } from '../data/books'

/* ─── Types ─── */
type ShelfBook = {
  id: string
  title: string
  author: string
  cover: string
  accent: string
  ink: string
  height: number
  thickness: number
  publication: Publisher
  coverImageUrl?: string
}

/* ─── Fallback books from mint-playground catalog ─── */
const FALLBACK_BOOKS: ShelfBook[] = [
  { id: 'maintenance',      title: 'Maintenance: Of Everything, Part One', author: 'Stewart Brand',           cover: '#4d746d', accent: '#b36b43', ink: '#f0e5cf', height: 1.10, thickness: 36, publication: 'bh' },
  { id: 'poor-charlie',     title: "Poor Charlie's Almanack",              author: 'Peter D. Kaufman',        cover: '#6f2130', accent: '#d5a756', ink: '#f4ead7', height: 1.08, thickness: 32, publication: 'fp' },
  { id: 'art-of-science',   title: 'The Art of Doing Science',             author: 'Dwarkesh Patel',          cover: '#c07040', accent: '#1a2a4a', ink: '#f5e8d0', height: 1.05, thickness: 30, publication: 'kitab' },
  { id: 'high-growth',      title: 'High Growth Handbook',                 author: 'Elad Gil',                cover: '#1c2b4a', accent: '#e0a955', ink: '#f5edd8', height: 1.12, thickness: 38, publication: 'imprint' },
  { id: 'origins',          title: 'The Origins of Efficiency',            author: 'Brian Potter',            cover: '#e8ddc6', accent: '#2457a6', ink: '#bf493f', height: 1.06, thickness: 28, publication: 'nepalaya' },
  { id: 'scaling-people',   title: 'Scaling People',                       author: 'Claire Hughes Johnson',   cover: '#c06858', accent: '#f5e8d0', ink: '#1a0a08', height: 1.09, thickness: 34, publication: 'lipi' },
  { id: 'revolt-public',    title: 'The Revolt of the Public',             author: 'Martin Gurri',            cover: '#e8c8a0', accent: '#3a1a0a', ink: '#2a1408', height: 1.07, thickness: 30, publication: 'sunbarshi' },
  { id: 'big-score',        title: 'The Big Score',                        author: 'Michael S. Malone',       cover: '#1a1a1a', accent: '#c0a040', ink: '#f0e8d0', height: 1.04, thickness: 26, publication: 'indigo' },
  { id: 'elegant-puzzle',   title: 'An Elegant Puzzle',                    author: 'Will Larson',             cover: '#2a3a2a', accent: '#c0b050', ink: '#f4ead4', height: 1.10, thickness: 32, publication: 'kalam' },
  { id: 'scaling-era',      title: 'The Scaling Era',                      author: 'John Collison',           cover: '#1e2a4a', accent: '#c8a840', ink: '#f0e8d0', height: 1.08, thickness: 34, publication: 'shailee' },
  { id: 'boom',             title: 'Boom',                                 author: 'Ben Reinhardt',           cover: '#3a2010', accent: '#d08040', ink: '#f4e8d4', height: 1.06, thickness: 30, publication: 'sambodhan' },
  { id: 'network-state',    title: 'The Network State',                    author: 'Balaji Srinivasan',       cover: '#1e3040', accent: '#c0a040', ink: '#f0e8d0', height: 1.11, thickness: 36, publication: 'ratna' },
  { id: 'working-public',   title: 'Working in Public',                    author: 'Nadia Eghbal',            cover: '#2a1520', accent: '#d4806a', ink: '#f5e0d0', height: 1.05, thickness: 28, publication: 'educational' },
  { id: 'zero-one',         title: 'Zero to One',                          author: 'Peter Thiel',             cover: '#0a0a0a', accent: '#c9a227', ink: '#f0e8d0', height: 1.09, thickness: 26, publication: 'sas' },
  { id: 'hard-thing',       title: 'The Hard Thing About Hard Things',     author: 'Ben Horowitz',            cover: '#1a3040', accent: '#e0b060', ink: '#f5edd8', height: 1.07, thickness: 32, publication: 'shangrila' },
  { id: 'innovators',       title: 'The Innovators',                       author: 'Walter Isaacson',         cover: '#2e1f3e', accent: '#c4a055', ink: '#f5e8d0', height: 1.12, thickness: 38, publication: 'bh' },
  { id: 'made-to-stick',    title: 'Made to Stick',                        author: 'Chip Heath & Dan Heath',  cover: '#8b2020', accent: '#f0d070', ink: '#f8f0e0', height: 1.04, thickness: 28, publication: 'fp' },
  { id: 'lean-startup',     title: 'The Lean Startup',                     author: 'Eric Ries',               cover: '#1a3a1a', accent: '#c0d040', ink: '#f0f4e0', height: 1.08, thickness: 30, publication: 'kitab' },
  { id: 'shoe-dog',         title: 'Shoe Dog',                             author: 'Phil Knight',             cover: '#3a1a0a', accent: '#e08040', ink: '#f5e8d0', height: 1.06, thickness: 34, publication: 'imprint' },
]

/* ─── Palette generator from publication color ─── */
function paletteFrom(pub: Publisher, idx: number) {
  const palettes: [string, string, string][] = [
    ['#6f2130', '#d5a756', '#f4ead7'],
    ['#4d746d', '#b36b43', '#f0e5cf'],
    ['#e8ddc6', '#2457a6', '#bf493f'],
    ['#1c2b4a', '#e0a955', '#f5edd8'],
    ['#2b3a2e', '#c9a227', '#f2ead6'],
    ['#3b2314', '#c47b3a', '#f6e8d2'],
    ['#1a1a2e', '#d4af6a', '#f0e6d2'],
    ['#2e1f3e', '#c4a055', '#f5e8d0'],
    ['#0d2818', '#d4a030', '#f2e8d0'],
    ['#1a3a3a', '#b87a50', '#f0e2cc'],
    ['#3a2810', '#d08040', '#f4e8d4'],
    ['#1e3040', '#c0a040', '#f0e8d0'],
    ['#2a1520', '#d4806a', '#f5e0d0'],
    ['#1e2a1e', '#c0b050', '#f4ead4'],
    ['#2e2010', '#c88050', '#f5e8d4'],
  ]
  const p = palettes[idx % palettes.length]
  return { cover: p[0], accent: p[1], ink: p[2] }
}

/* ─── Motif renderer (SVG patterns matching mint-playground motifs) ─── */
function MotifSVG({ motif, accent, size }: { motif: string; accent: string; size: number }) {
  const s = size
  switch (motif) {
    case 'wave':
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
          {[0,1,2,3,4].map(i => (
            <path key={i} d={`M0 ${s*0.3+i*s*0.1} Q${s*0.25} ${s*0.2+i*s*0.1} ${s*0.5} ${s*0.3+i*s*0.1} T${s} ${s*0.3+i*s*0.1}`}
              fill="none" stroke={accent} strokeWidth={i%2===0?2:1} />
          ))}
        </svg>
      )
    case 'orbit':
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{ position: 'absolute', inset: 0, opacity: 0.35 }}>
          {[1,2,3].map(i => (
            <ellipse key={i} cx={s*0.5} cy={s*0.55} rx={i*s*0.12} ry={i*s*0.07}
              fill="none" stroke={accent} strokeWidth={i===2?2:1} transform={`rotate(${i*20} ${s*0.5} ${s*0.55})`} />
          ))}
          <circle cx={s*0.5} cy={s*0.55} r={s*0.04} fill={accent} />
        </svg>
      )
    case 'lattice':
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
          {[[0.2,0.3],[0.5,0.2],[0.8,0.35],[0.3,0.6],[0.65,0.55],[0.5,0.8]].map(([x,y],i,arr) =>
            arr.slice(i+1).filter(([x2,y2]) => Math.hypot(x-x2,y-y2)<0.4).map(([x2,y2],j) => (
              <line key={`${i}-${j}`} x1={x*s} y1={y*s} x2={x2*s} y2={y2*s} stroke={accent} strokeWidth={1} />
            ))
          )}
          {[[0.2,0.3],[0.5,0.2],[0.8,0.35],[0.3,0.6],[0.65,0.55],[0.5,0.8]].map(([x,y],i) => (
            <circle key={i} cx={x*s} cy={y*s} r={i%2===0?4:2.5} fill={accent} />
          ))}
        </svg>
      )
    case 'boom':
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
          {[1,2,3,4].map(i => (
            <circle key={i} cx={s*0.5} cy={s*0.55} r={i*s*0.1}
              fill="none" stroke={accent} strokeWidth={i%2===0?2.5:1} />
          ))}
        </svg>
      )
    case 'branches':
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
          <line x1={s*0.5} y1={s*0.85} x2={s*0.5} y2={s*0.55} stroke={accent} strokeWidth={2} />
          <line x1={s*0.5} y1={s*0.55} x2={s*0.25} y2={s*0.35} stroke={accent} strokeWidth={1.5} />
          <line x1={s*0.5} y1={s*0.55} x2={s*0.75} y2={s*0.35} stroke={accent} strokeWidth={1.5} />
          <line x1={s*0.25} y1={s*0.35} x2={s*0.15} y2={s*0.2} stroke={accent} strokeWidth={1} />
          <line x1={s*0.25} y1={s*0.35} x2={s*0.38} y2={s*0.2} stroke={accent} strokeWidth={1} />
          <line x1={s*0.75} y1={s*0.35} x2={s*0.62} y2={s*0.2} stroke={accent} strokeWidth={1} />
          <line x1={s*0.75} y1={s*0.35} x2={s*0.85} y2={s*0.2} stroke={accent} strokeWidth={1} />
          {[[0.5,0.85],[0.5,0.55],[0.25,0.35],[0.75,0.35],[0.15,0.2],[0.38,0.2],[0.62,0.2],[0.85,0.2]].map(([x,y],i) => (
            <circle key={i} cx={x*s} cy={y*s} r={i===0?4:2.5} fill={accent} />
          ))}
        </svg>
      )
    case 'circuit':
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{ position: 'absolute', inset: 0, opacity: 0.28 }}>
          {[0.3,0.5,0.7].map((y,i) => (
            <g key={i}>
              <line x1={0} y1={y*s} x2={s*0.3} y2={y*s} stroke={accent} strokeWidth={1.5} />
              <line x1={s*0.3} y1={y*s} x2={s*0.3} y2={(y+(i%2?0.1:-0.1))*s} stroke={accent} strokeWidth={1.5} />
              <line x1={s*0.3} y1={(y+(i%2?0.1:-0.1))*s} x2={s} y2={(y+(i%2?0.1:-0.1))*s} stroke={accent} strokeWidth={1.5} />
              <circle cx={s*0.3} cy={y*s} r={3} fill={accent} />
            </g>
          ))}
        </svg>
      )
    default:
      return (
        <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{ position: 'absolute', inset: 0, opacity: 0.25 }}>
          {[0,1,2].map(i => (
            <line key={i} x1={s*0.1} y1={s*(0.35+i*0.15)} x2={s*0.9} y2={s*(0.35+i*0.15)}
              stroke={accent} strokeWidth={i===1?2:1} />
          ))}
          <rect x={s*0.1} y={s*0.25} width={s*0.8} height={s*0.55} fill="none" stroke={accent} strokeWidth={1} opacity={0.5} />
        </svg>
      )
  }
}

const MOTIFS = ['wave','orbit','lattice','boom','branches','circuit','wave','orbit','lattice','boom','branches','circuit','wave','orbit','lattice']

/* ─── Single book component ─── */
function Book({ book, index, isActive, onClick }: {
  book: ShelfBook
  index: number
  isActive: boolean
  onClick: () => void
}) {
  const [hovered, setHovered] = useState(false)
  const active = hovered || isActive
  const motif = MOTIFS[index % MOTIFS.length]

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        cursor: 'pointer',
        height: `${book.height * 220}px`,
        alignSelf: 'flex-end',
        transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        transform: active ? 'translateY(-18px)' : 'translateY(0)',
        transformOrigin: 'bottom center',
        zIndex: active ? 10 : 1,
      }}
    >
      {/* ── 3D book wrapper ── */}
      <div style={{
        position: 'relative',
        height: '100%',
        width: `${book.thickness}px`,
        transformStyle: 'preserve-3d',
        transform: active
          ? 'perspective(600px) rotateY(-25deg)'
          : 'perspective(600px) rotateY(0deg)',
        transition: 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
      }}>

        {/* Spine face */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: book.cover,
          borderRadius: '2px 0 0 2px',
          overflow: 'hidden',
          boxShadow: active
            ? '-4px 6px 20px rgba(0,0,0,0.35)'
            : '-2px 4px 10px rgba(0,0,0,0.22)',
          transition: 'box-shadow 0.4s ease',
        }}>
          {/* Accent stripe */}
          <div style={{
            position: 'absolute',
            left: 4, top: 12, bottom: 12,
            width: 3,
            background: book.accent,
            borderRadius: 2,
            opacity: 0.9,
          }} />
          {/* Spine title (rotated) */}
          <div style={{
            position: 'absolute',
            bottom: 28,
            left: '50%',
            transform: 'translateX(-50%) rotate(-90deg)',
            transformOrigin: 'center center',
            width: `${book.height * 220 - 60}px`,
            textAlign: 'left',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
            <span style={{
              fontFamily: '"Newsreader", "Georgia", serif',
              fontSize: book.title.length > 20 ? '8px' : '9px',
              fontWeight: 500,
              color: book.ink,
              letterSpacing: '0.04em',
              opacity: 0.9,
            }}>{book.title}</span>
          </div>
          {/* Headband top */}
          <div style={{
            position: 'absolute',
            top: 4,
            left: 4, right: 4,
            height: 5,
            background: book.accent,
            borderRadius: '1px 1px 0 0',
            opacity: 0.85,
          }} />
          {/* Headband bottom */}
          <div style={{
            position: 'absolute',
            bottom: 4,
            left: 4, right: 4,
            height: 5,
            background: book.accent,
            borderRadius: '0 0 1px 1px',
            opacity: 0.85,
          }} />
        </div>

        {/* Front cover face — slides out on hover */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: `${book.thickness}px`,
          width: `${book.height * 150}px`,
          height: '100%',
          background: book.cover,
          borderRadius: '0 3px 3px 0',
          overflow: 'hidden',
          opacity: active ? 1 : 0,
          transform: active ? 'translateX(0)' : 'translateX(-8px)',
          transition: 'opacity 0.35s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)',
          boxShadow: '4px 4px 18px rgba(0,0,0,0.25)',
          pointerEvents: 'none',
        }}>
          {/* Motif pattern */}
          <MotifSVG motif={motif} accent={book.accent} size={book.height * 150} />

          {/* Paper grain overlay */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.08\'/%3E%3C/svg%3E")',
            opacity: 0.4,
            mixBlendMode: 'multiply',
          }} />

          {/* Border inset */}
          <div style={{
            position: 'absolute',
            inset: 6,
            border: `1px solid ${book.ink}`,
            opacity: 0.15,
            borderRadius: 1,
          }} />

          {/* Cover image if available */}
          {book.coverImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={book.coverImageUrl} alt={book.title}
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          )}

          {/* Cover typography */}
          {!book.coverImageUrl && (
            <div style={{
              position: 'absolute',
              inset: 0,
              padding: '14px 12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              {/* Imprint label */}
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '6px',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: book.ink,
                opacity: 0.7,
              }}>
                {PUBLISHERS[book.publication]?.short || 'PB'}
              </span>

              {/* Title */}
              <div>
                <div style={{
                  fontFamily: '"Newsreader", Georgia, serif',
                  fontSize: book.title.length > 24 ? '13px' : '16px',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: book.ink,
                  marginBottom: '6px',
                }}>
                  {book.title}
                </div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '8px',
                  fontWeight: 400,
                  color: book.ink,
                  opacity: 0.7,
                }}>
                  {book.author}
                </div>
              </div>

              {/* Tagline */}
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '5px',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: book.ink,
                opacity: 0.5,
              }}>
                {PUBLISHERS[book.publication]?.label || ''}
              </span>
            </div>
          )}

          {/* Page edge shadow */}
          <div style={{
            position: 'absolute',
            top: 0, bottom: 0, left: 0,
            width: 8,
            background: 'linear-gradient(to right, rgba(0,0,0,0.18), transparent)',
            pointerEvents: 'none',
          }} />
        </div>

        {/* Page block (right side edge) */}
        <div style={{
          position: 'absolute',
          top: 3, bottom: 3,
          right: -5,
          width: 5,
          background: 'linear-gradient(to right, #e9dfca, #f0e8d6)',
          borderRadius: '0 2px 2px 0',
          boxShadow: '1px 0 3px rgba(0,0,0,0.1)',
          opacity: active ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }} />
      </div>
    </div>
  )
}

/* ─── Detail panel ─── */
function BookDetail({ book, onClose }: { book: ShelfBook; onClose: () => void }) {
  return (
    <div style={{
      position: 'absolute',
      top: 0, right: 0, bottom: 0,
      width: 'min(380px, 42%)',
      background: 'linear-gradient(90deg, transparent, rgba(238,232,219,0.92) 12%, #eee8db 28%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '2.5rem 2.5rem 2.5rem 3.5rem',
      animation: 'shelfDetailIn 0.5s cubic-bezier(0.22,1,0.36,1) both',
      zIndex: 20,
    }}>
      <style>{`
        @keyframes shelfDetailIn {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <button onClick={onClose} style={{
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        background: 'none', border: 'none', cursor: 'pointer',
        fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 650,
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: 'rgba(37,35,31,0.55)', marginBottom: '2rem',
        padding: 0,
      }}>
        ← Return to shelf
      </button>

      <p style={{
        fontFamily: 'Inter, sans-serif', fontSize: '8px', fontWeight: 620,
        letterSpacing: '0.19em', textTransform: 'uppercase',
        color: 'rgba(37,35,31,0.45)', margin: '0 0 14px',
        display: 'flex', alignItems: 'center', gap: '8px',
      }}>
        <span style={{ width: 28, height: 1, background: 'rgba(37,35,31,0.3)', display: 'inline-block' }} />
        {PUBLISHERS[book.publication]?.label || book.publication}
      </p>

      <h2 style={{
        fontFamily: '"Newsreader", "Fraunces", Georgia, serif',
        fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
        fontWeight: 420,
        letterSpacing: '-0.04em',
        lineHeight: 0.95,
        color: '#25231f',
        margin: '0 0 12px',
      }}>
        {book.title}
      </h2>

      <p style={{
        fontFamily: '"Newsreader", Georgia, serif',
        fontSize: '14px',
        fontStyle: 'italic',
        color: 'rgba(37,35,31,0.6)',
        margin: '0 0 1.5rem',
      }}>
        {book.author}
      </p>

      <div style={{
        borderTop: '1px solid rgba(37,35,31,0.12)',
        paddingTop: '1.25rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        marginBottom: '1.5rem',
      }}>
        <div>
          <dt style={{ fontSize: '7px', fontWeight: 650, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(37,35,31,0.42)', marginBottom: 4 }}>Publisher</dt>
          <dd style={{ fontFamily: '"Newsreader", Georgia, serif', fontSize: '13px', margin: 0, color: '#25231f' }}>{PUBLISHERS[book.publication]?.label}</dd>
        </div>
        <div>
          <dt style={{ fontSize: '7px', fontWeight: 650, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(37,35,31,0.42)', marginBottom: 4 }}>Design</dt>
          <dd style={{ fontFamily: '"Newsreader", Georgia, serif', fontSize: '13px', margin: 0, color: '#25231f' }}>Sachin Yagol</dd>
        </div>
      </div>

      <button
        onClick={onClose}
        style={{
          alignSelf: 'flex-start',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '2rem',
          padding: '10px 0 8px',
          borderBottom: '1px solid #25231f',
          background: 'none', border: 'none', borderBottom: '1px solid #25231f',
          cursor: 'pointer',
          fontFamily: 'Inter, sans-serif', fontSize: '9px', fontWeight: 640,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          color: '#25231f',
          transition: 'opacity 0.2s',
          minWidth: 180,
        }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        <span>View all books</span>
        <span style={{ fontSize: '14px', fontWeight: 400 }}>↗</span>
      </button>
    </div>
  )
}

/* ─── Main BookShelf component ─── */
export default function BookShelf() {
  const [books, setBooks] = useState<ShelfBook[]>(FALLBACK_BOOKS)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [scrollIndex, setScrollIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragTravel = useRef(0)

  const VISIBLE = 10 // books visible at once

  useEffect(() => {
    fetch('/api/books')
      .then(r => r.json())
      .then((data: Array<{
        id: string; title: string; author: string; coverImageUrl: string;
        publication: string; createdAt: string;
      }>) => {
        if (!data || data.length === 0) {
          setBooks(FALLBACK_BOOKS)
          return
        }
        const mapped: ShelfBook[] = data.map((b, i) => {
          const palette = paletteFrom(b.publication as Publisher, i)
          return {
            id: b.id,
            title: b.title,
            author: b.author,
            cover: palette.cover,
            accent: palette.accent,
            ink: palette.ink,
            height: 0.92 + (i % 5) * 0.056,
            thickness: 22 + (i % 7) * 4,
            publication: b.publication as Publisher,
            coverImageUrl: b.coverImageUrl || undefined,
          }
        })
        setBooks(mapped)
      })
      .catch(() => setBooks(FALLBACK_BOOKS))
  }, [])

  const maxScroll = Math.max(0, books.length - VISIBLE)
  const visibleBooks = books.slice(scrollIndex, scrollIndex + VISIBLE)

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true
    dragStartX.current = e.clientX
    dragTravel.current = 0
    containerRef.current?.setPointerCapture(e.pointerId)
  }
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return
    const delta = e.clientX - dragStartX.current
    dragTravel.current = Math.abs(delta)
    if (Math.abs(delta) > 40) {
      const dir = delta < 0 ? 1 : -1
      setScrollIndex(i => Math.max(0, Math.min(maxScroll, i + dir)))
      dragStartX.current = e.clientX
    }
  }
  const handlePointerUp = (e: React.PointerEvent) => {
    isDragging.current = false
    containerRef.current?.releasePointerCapture(e.pointerId)
  }

  const activeBook = activeIndex !== null ? visibleBooks[activeIndex] : null

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      background: 'radial-gradient(circle at 50% 42%, rgba(255,255,255,0.28), transparent 46%), #eee8db',
      overflow: 'hidden',
      userSelect: 'none',
    }}>
      {/* Paper grain overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 14, pointerEvents: 'none',
        opacity: 0.18, mixBlendMode: 'multiply',
        backgroundImage: `
          radial-gradient(circle at 12% 31%, rgba(45,35,24,0.12) 0 0.7px, transparent 0.8px),
          radial-gradient(circle at 73% 69%, rgba(255,255,255,0.9) 0 0.6px, transparent 0.7px)
        `,
        backgroundSize: '7px 9px, 11px 13px',
      }} />

      {/* Header */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20,
        display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
        padding: '22px clamp(22px, 3.4vw, 56px)',
        pointerEvents: 'none',
      }}>
        <div style={{
          display: 'flex', gap: 13, alignItems: 'center',
          fontSize: '9px', fontWeight: 650, letterSpacing: '0.185em', lineHeight: 1,
          color: '#25231f', fontFamily: 'Inter, sans-serif',
        }}>
          <span>BOOK COVER DESIGN</span>
          <span style={{ width: 28, height: 1, background: 'currentColor', opacity: 0.4, display: 'inline-block' }} />
          <span style={{ opacity: 0.5 }}>THE SHELF</span>
        </div>
        <div style={{
          fontSize: '8px', fontWeight: 560, letterSpacing: '0.17em', lineHeight: 1.6,
          color: 'rgba(37,35,31,0.5)', fontFamily: 'Inter, sans-serif',
          textAlign: 'right',
        }}>
          <div>{books.length} VOLUMES</div>
          <div>SACHIN YAGOL</div>
        </div>
      </div>

      {/* Left browse caption */}
      <div style={{
        position: 'absolute', zIndex: 16,
        bottom: 'clamp(110px, 18vh, 145px)',
        left: 'clamp(24px, 5.4vw, 72px)',
        width: 'min(340px, 30vw)',
        pointerEvents: 'none',
        opacity: activeBook ? 0 : 1,
        transform: activeBook ? 'translate3d(-18px, 0, 0)' : 'translate3d(0,0,0)',
        transition: 'opacity 0.38s ease, transform 0.48s cubic-bezier(0.22,1,0.36,1)',
      }}>
        <div style={{
          position: 'absolute', zIndex: -1,
          top: -32, right: -52, bottom: -28, left: -72,
          background: 'linear-gradient(90deg, rgba(238,232,219,0.96) 0%, rgba(238,232,219,0.82) 58%, rgba(238,232,219,0) 100%)',
          pointerEvents: 'none',
        }} />
        <p style={{
          display: 'flex', gap: 8, alignItems: 'center',
          margin: '0 0 14px',
          fontSize: '8px', fontWeight: 620, letterSpacing: '0.19em', lineHeight: 1,
          fontFamily: 'Inter, sans-serif', color: '#25231f',
        }}>
          <span>{String(scrollIndex + 1).padStart(2, '0')}</span>
          <span style={{ width: 36, height: 1, background: '#25231f', opacity: 0.3, display: 'inline-block' }} />
          <span>{String(books.length).padStart(2, '0')}</span>
        </p>
        <h2 style={{
          fontFamily: '"Newsreader", "Fraunces", Georgia, serif',
          fontSize: 'clamp(28px, 3.8vw, 56px)',
          fontWeight: 430,
          letterSpacing: '-0.045em',
          lineHeight: 0.93,
          color: '#25231f',
          margin: '0 0 12px',
        }}>
          {visibleBooks[0]?.title || ''}
        </h2>
        <p style={{
          fontFamily: '"Newsreader", Georgia, serif',
          fontSize: '13px', fontStyle: 'italic',
          color: 'rgba(37,35,31,0.6)', margin: 0,
        }}>
          {visibleBooks[0]?.author || ''}
        </p>
      </div>

      {/* Book detail panel */}
      {activeBook && (
        <BookDetail book={activeBook} onClose={() => setActiveIndex(null)} />
      )}

      {/* ── Canvas area ── */}
      <div style={{
        position: 'relative',
        height: 'clamp(380px, 52vh, 520px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}>
        {/* Back wall */}
        <div style={{
          position: 'absolute', inset: 0,
          background: '#eee8db',
          zIndex: 0,
        }} />

        {/* Floor shadow */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 60,
          background: 'linear-gradient(to top, rgba(90,65,50,0.12), transparent)',
          zIndex: 1,
        }} />

        {/* Books row */}
        <div
          ref={containerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-end',
            gap: '3px',
            paddingBottom: '52px',
            cursor: isDragging.current ? 'grabbing' : 'grab',
            zIndex: 5,
          }}
        >
          {visibleBooks.map((book, i) => (
            <Book
              key={book.id}
              book={book}
              index={scrollIndex + i}
              isActive={activeIndex === i}
              onClick={() => {
                if (dragTravel.current < 6) {
                  setActiveIndex(prev => prev === i ? null : i)
                }
              }}
            />
          ))}
        </div>

        {/* Wooden shelf plank */}
        <div style={{
          position: 'absolute',
          bottom: 28,
          left: '5%', right: '5%',
          height: 24,
          background: 'linear-gradient(to bottom, #7a5a3a, #5a4132 40%, #4b3429)',
          borderRadius: '3px',
          boxShadow: '0 4px 18px rgba(0,0,0,0.28), 0 1px 0 rgba(255,255,255,0.08) inset',
          zIndex: 4,
        }}>
          {/* Shelf edge highlight */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            height: 3,
            background: 'linear-gradient(to right, rgba(255,255,255,0.06), rgba(255,255,255,0.14) 30%, rgba(255,255,255,0.06))',
            borderRadius: '3px 3px 0 0',
          }} />
          {/* Shelf front rail (edge piece) */}
          <div style={{
            position: 'absolute',
            bottom: -10, left: 0, right: 0,
            height: 10,
            background: '#4b3429',
            borderRadius: '0 0 3px 3px',
            boxShadow: '0 3px 8px rgba(0,0,0,0.22)',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 1,
              background: 'rgba(255,255,255,0.07)',
            }} />
          </div>
        </div>

        {/* Ground shadow cast by shelf */}
        <div style={{
          position: 'absolute',
          bottom: 0, left: '5%', right: '5%',
          height: 28,
          background: 'radial-gradient(ellipse at 50% 0, rgba(0,0,0,0.14), transparent 70%)',
          zIndex: 3,
        }} />
      </div>

      {/* ── Bottom nav: arrows + tick index ── */}
      <div style={{
        position: 'relative',
        padding: '18px clamp(22px, 3.4vw, 56px) 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '2rem',
        opacity: activeBook ? 0 : 1,
        transition: 'opacity 0.3s ease',
        pointerEvents: activeBook ? 'none' : 'auto',
      }}>
        {/* Tick marks */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: `repeat(${books.length}, 1fr)`,
          alignItems: 'flex-end',
          height: 18,
          maxWidth: 480,
        }}>
          {books.map((_, i) => (
            <button
              key={i}
              onClick={() => setScrollIndex(Math.min(i, maxScroll))}
              aria-label={`Jump to book ${i + 1}`}
              style={{
                position: 'relative',
                display: 'block',
                width: '100%',
                height: 18,
                padding: 0,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <span style={{
                position: 'absolute',
                bottom: 2,
                left: '50%',
                transform: 'translateX(-50%)',
                width: i >= scrollIndex && i < scrollIndex + VISIBLE ? 2 : 1,
                height: i >= scrollIndex && i < scrollIndex + VISIBLE ? 14 : 6,
                background: '#25231f',
                opacity: i >= scrollIndex && i < scrollIndex + VISIBLE ? 0.8 : 0.25,
                transition: 'all 0.22s ease',
                borderRadius: 1,
                display: 'block',
              }} />
            </button>
          ))}
        </div>

        {/* Arrows + hint */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          color: 'rgba(37,35,31,0.45)', fontFamily: 'Inter, sans-serif',
          fontSize: '7px', fontWeight: 600, letterSpacing: '0.14em', whiteSpace: 'nowrap',
        }}>
          <span>DRAG</span>
          <span style={{ width: 2, height: 2, borderRadius: '50%', background: 'currentColor', display: 'inline-block' }} />
          <span>CLICK TO INSPECT</span>

          <button
            onClick={() => setScrollIndex(i => Math.max(0, i - 1))}
            disabled={scrollIndex === 0}
            aria-label="Previous"
            style={{
              display: 'grid', placeItems: 'center',
              width: 36, height: 36,
              border: '1px solid rgba(37,35,31,0.18)',
              borderRadius: '50%',
              background: 'rgba(238,232,219,0.7)',
              cursor: scrollIndex === 0 ? 'default' : 'pointer',
              opacity: scrollIndex === 0 ? 0.25 : 1,
              transition: 'opacity 0.22s, transform 0.22s',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => { if (scrollIndex > 0) e.currentTarget.style.transform = 'scale(1.06)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          >
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <line x1="14" y1="4" x2="0" y2="4" stroke="#25231f" strokeWidth="1" />
              <line x1="4" y1="1" x2="0.5" y2="4" stroke="#25231f" strokeWidth="1" />
              <line x1="4" y1="7" x2="0.5" y2="4" stroke="#25231f" strokeWidth="1" />
            </svg>
          </button>
          <button
            onClick={() => setScrollIndex(i => Math.min(maxScroll, i + 1))}
            disabled={scrollIndex >= maxScroll}
            aria-label="Next"
            style={{
              display: 'grid', placeItems: 'center',
              width: 36, height: 36,
              border: '1px solid rgba(37,35,31,0.18)',
              borderRadius: '50%',
              background: 'rgba(238,232,219,0.7)',
              cursor: scrollIndex >= maxScroll ? 'default' : 'pointer',
              opacity: scrollIndex >= maxScroll ? 0.25 : 1,
              transition: 'opacity 0.22s, transform 0.22s',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => { if (scrollIndex < maxScroll) e.currentTarget.style.transform = 'scale(1.06)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          >
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none">
              <line x1="0" y1="4" x2="14" y2="4" stroke="#25231f" strokeWidth="1" />
              <line x1="10" y1="1" x2="13.5" y2="4" stroke="#25231f" strokeWidth="1" />
              <line x1="10" y1="7" x2="13.5" y2="4" stroke="#25231f" strokeWidth="1" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
