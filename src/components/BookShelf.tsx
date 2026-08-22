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
  height: number    // multiplier: 1.0–1.15
  thickness: number // spine px width: 22–44
  publication: Publisher
  coverImageUrl?: string
}

/* ─── Fallback catalog (mint-playground style) ─── */
const FALLBACK_BOOKS: ShelfBook[] = [
  { id: 'maintenance',    title: 'Maintenance: Of Everything',      author: 'Stewart Brand',          cover: '#4d746d', accent: '#b36b43', ink: '#f0e5cf', height: 1.10, thickness: 48, publication: 'bh' },
  { id: 'poor-charlie',   title: "Poor Charlie's Almanack",         author: 'Peter D. Kaufman',       cover: '#6f2130', accent: '#d5a756', ink: '#f4ead7', height: 1.08, thickness: 42, publication: 'fp' },
  { id: 'art-of-science', title: 'The Art of Doing Science',        author: 'Dwarkesh Patel',         cover: '#c07040', accent: '#1a2a4a', ink: '#f5e8d0', height: 1.05, thickness: 38, publication: 'kitab' },
  { id: 'high-growth',    title: 'High Growth Handbook',            author: 'Elad Gil',               cover: '#1c2b4a', accent: '#e0a955', ink: '#f5edd8', height: 1.12, thickness: 52, publication: 'imprint' },
  { id: 'origins',        title: 'The Origins of Efficiency',       author: 'Brian Potter',           cover: '#e8ddc6', accent: '#2457a6', ink: '#bf493f', height: 1.06, thickness: 36, publication: 'nepalaya' },
  { id: 'scaling-people', title: 'Scaling People',                  author: 'Claire Hughes Johnson',  cover: '#c06858', accent: '#f5e8d0', ink: '#1a0a08', height: 1.09, thickness: 44, publication: 'lipi' },
  { id: 'revolt-public',  title: 'The Revolt of the Public',        author: 'Martin Gurri',           cover: '#e8c8a0', accent: '#3a1a0a', ink: '#2a1408', height: 1.07, thickness: 40, publication: 'sunbarshi' },
  { id: 'big-score',      title: 'The Big Score',                   author: 'Michael S. Malone',      cover: '#1a1a1a', accent: '#c0a040', ink: '#f0e8d0', height: 1.04, thickness: 34, publication: 'indigo' },
  { id: 'elegant-puzzle', title: 'An Elegant Puzzle',               author: 'Will Larson',            cover: '#2a3a2a', accent: '#c0b050', ink: '#f4ead4', height: 1.10, thickness: 42, publication: 'kalam' },
  { id: 'scaling-era',    title: 'The Scaling Era',                 author: 'John Collison',          cover: '#1e2a4a', accent: '#c8a840', ink: '#f0e8d0', height: 1.08, thickness: 46, publication: 'shailee' },
  { id: 'boom',           title: 'Boom',                            author: 'Ben Reinhardt',          cover: '#3a2010', accent: '#d08040', ink: '#f4e8d4', height: 1.06, thickness: 38, publication: 'sambodhan' },
  { id: 'network-state',  title: 'The Network State',               author: 'Balaji Srinivasan',      cover: '#1e3040', accent: '#c0a040', ink: '#f0e8d0', height: 1.11, thickness: 48, publication: 'ratna' },
  { id: 'working-public', title: 'Working in Public',               author: 'Nadia Eghbal',           cover: '#2a1520', accent: '#d4806a', ink: '#f5e0d0', height: 1.05, thickness: 36, publication: 'educational' },
  { id: 'zero-one',       title: 'Zero to One',                     author: 'Peter Thiel',            cover: '#0a0a0a', accent: '#c9a227', ink: '#f0e8d0', height: 1.09, thickness: 34, publication: 'sas' },
  { id: 'hard-thing',     title: 'The Hard Thing About Hard Things', author: 'Ben Horowitz',          cover: '#1a3040', accent: '#e0b060', ink: '#f5edd8', height: 1.07, thickness: 44, publication: 'shangrila' },
  { id: 'innovators',     title: 'The Innovators',                  author: 'Walter Isaacson',        cover: '#2e1f3e', accent: '#c4a055', ink: '#f5e8d0', height: 1.12, thickness: 50, publication: 'bh' },
  { id: 'made-to-stick',  title: 'Made to Stick',                   author: 'Chip & Dan Heath',       cover: '#8b2020', accent: '#f0d070', ink: '#f8f0e0', height: 1.04, thickness: 36, publication: 'fp' },
  { id: 'lean-startup',   title: 'The Lean Startup',                author: 'Eric Ries',              cover: '#1a3a1a', accent: '#c0d040', ink: '#f0f4e0', height: 1.08, thickness: 40, publication: 'kitab' },
  { id: 'shoe-dog',       title: 'Shoe Dog',                        author: 'Phil Knight',            cover: '#3a1a0a', accent: '#e08040', ink: '#f5e8d0', height: 1.06, thickness: 44, publication: 'imprint' },
]

/* ─── Palette generator ─── */
function paletteFrom(idx: number) {
  const palettes: [string, string, string][] = [
    ['#6f2130','#d5a756','#f4ead7'],['#4d746d','#b36b43','#f0e5cf'],
    ['#e8ddc6','#2457a6','#bf493f'],['#1c2b4a','#e0a955','#f5edd8'],
    ['#2b3a2e','#c9a227','#f2ead6'],['#3b2314','#c47b3a','#f6e8d2'],
    ['#1a1a2e','#d4af6a','#f0e6d2'],['#2e1f3e','#c4a055','#f5e8d0'],
    ['#0d2818','#d4a030','#f2e8d0'],['#1a3a3a','#b87a50','#f0e2cc'],
    ['#3a2810','#d08040','#f4e8d4'],['#1e3040','#c0a040','#f0e8d0'],
    ['#2a1520','#d4806a','#f5e0d0'],['#1e2a1e','#c0b050','#f4ead4'],
    ['#2e2010','#c88050','#f5e8d4'],
  ]
  const p = palettes[idx % palettes.length]
  return { cover: p[0], accent: p[1], ink: p[2] }
}

/* ─── SVG motif patterns ─── */
const MOTIFS = ['wave','orbit','lattice','boom','branches','circuit']

function MotifSVG({ motif, accent, w, h }: { motif: string; accent: string; w: number; h: number }) {
  switch (motif) {
    case 'wave': return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position:'absolute', inset:0, opacity:0.35 }}>
        {[0,1,2,3,4].map(i => (
          <path key={i} d={`M0 ${h*0.3+i*h*0.1} Q${w*0.25} ${h*0.2+i*h*0.1} ${w*0.5} ${h*0.3+i*h*0.1} T${w} ${h*0.3+i*h*0.1}`}
            fill="none" stroke={accent} strokeWidth={i%2===0?2:1} />
        ))}
      </svg>
    )
    case 'orbit': return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position:'absolute', inset:0, opacity:0.35 }}>
        {[1,2,3].map(i => (
          <ellipse key={i} cx={w*0.5} cy={h*0.55} rx={i*w*0.14} ry={i*h*0.08}
            fill="none" stroke={accent} strokeWidth={i===2?2:1} transform={`rotate(${i*20} ${w*0.5} ${h*0.55})`} />
        ))}
        <circle cx={w*0.5} cy={h*0.55} r={w*0.04} fill={accent} />
      </svg>
    )
    case 'lattice': return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position:'absolute', inset:0, opacity:0.3 }}>
        {[[0.2,0.3],[0.5,0.2],[0.8,0.35],[0.3,0.6],[0.65,0.55],[0.5,0.8]].map(([x,y],i,arr) =>
          arr.slice(i+1).filter(([x2,y2])=>Math.hypot(x-x2,y-y2)<0.45).map(([x2,y2],j) => (
            <line key={`${i}-${j}`} x1={x*w} y1={y*h} x2={x2*w} y2={y2*h} stroke={accent} strokeWidth={1}/>
          ))
        )}
        {[[0.2,0.3],[0.5,0.2],[0.8,0.35],[0.3,0.6],[0.65,0.55],[0.5,0.8]].map(([x,y],i) => (
          <circle key={i} cx={x*w} cy={y*h} r={i%2===0?4:2.5} fill={accent}/>
        ))}
      </svg>
    )
    case 'boom': return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position:'absolute', inset:0, opacity:0.3 }}>
        {[1,2,3,4].map(i=>(
          <circle key={i} cx={w*0.5} cy={h*0.55} r={i*Math.min(w,h)*0.1}
            fill="none" stroke={accent} strokeWidth={i%2===0?2.5:1}/>
        ))}
      </svg>
    )
    case 'branches': return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position:'absolute', inset:0, opacity:0.3 }}>
        <line x1={w*.5} y1={h*.85} x2={w*.5} y2={h*.55} stroke={accent} strokeWidth={2}/>
        <line x1={w*.5} y1={h*.55} x2={w*.25} y2={h*.35} stroke={accent} strokeWidth={1.5}/>
        <line x1={w*.5} y1={h*.55} x2={w*.75} y2={h*.35} stroke={accent} strokeWidth={1.5}/>
        <line x1={w*.25} y1={h*.35} x2={w*.15} y2={h*.2} stroke={accent} strokeWidth={1}/>
        <line x1={w*.25} y1={h*.35} x2={w*.38} y2={h*.2} stroke={accent} strokeWidth={1}/>
        <line x1={w*.75} y1={h*.35} x2={w*.62} y2={h*.2} stroke={accent} strokeWidth={1}/>
        <line x1={w*.75} y1={h*.35} x2={w*.85} y2={h*.2} stroke={accent} strokeWidth={1}/>
        {[[.5,.85],[.5,.55],[.25,.35],[.75,.35],[.15,.2],[.38,.2],[.62,.2],[.85,.2]].map(([x,y],i)=>(
          <circle key={i} cx={x*w} cy={y*h} r={i===0?4:2.5} fill={accent}/>
        ))}
      </svg>
    )
    default: return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position:'absolute', inset:0, opacity:0.28 }}>
        {[0.3,0.5,0.7].map((y,i)=>(
          <g key={i}>
            <line x1={0} y1={y*h} x2={w*.35} y2={y*h} stroke={accent} strokeWidth={1.5}/>
            <line x1={w*.35} y1={y*h} x2={w*.35} y2={(y+(i%2?.12:-.12))*h} stroke={accent} strokeWidth={1.5}/>
            <line x1={w*.35} y1={(y+(i%2?.12:-.12))*h} x2={w} y2={(y+(i%2?.12:-.12))*h} stroke={accent} strokeWidth={1.5}/>
            <circle cx={w*.35} cy={y*h} r={3} fill={accent}/>
          </g>
        ))}
      </svg>
    )
  }
}

/* ─── Single Book ─── */
function Book({ book, index, isActive, bookH, onClick }: {
  book: ShelfBook; index: number; isActive: boolean; bookH: number; onClick: () => void
}) {
  const [hov, setHov] = useState(false)
  const motif = MOTIFS[index % MOTIFS.length]
  const coverW = Math.round(book.thickness * 4.8)

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        cursor: 'pointer',
        height: `${book.height * bookH}px`,
        alignSelf: 'flex-end',
        flexShrink: 0,
        transition: 'transform 0.45s cubic-bezier(0.22,1,0.36,1), z-index 0s',
        transform: isActive
          ? 'translateY(-32px) scale(1.04)'
          : hov
          ? 'translateY(-10px)'
          : 'translateY(0)',
        transformOrigin: 'bottom center',
        zIndex: isActive ? 20 : hov ? 10 : 1,
      }}
    >
      {/* ── When active: show full front cover facing straight ── */}
      {isActive ? (
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: `${coverW}px`,
          height: `${book.height * bookH}px`,
          background: book.cover,
          borderRadius: '3px 3px 0 0',
          overflow: 'hidden',
          boxShadow: '0 12px 48px rgba(0,0,0,0.45), -4px 0 12px rgba(0,0,0,0.15)',
          animation: 'bookFaceIn 0.42s cubic-bezier(0.22,1,0.36,1) both',
        }}>
          <style>{`
            @keyframes bookFaceIn {
              from { opacity:0; transform:translateY(12px) scale(0.97); }
              to   { opacity:1; transform:translateY(0)   scale(1); }
            }
          `}</style>

          <MotifSVG motif={motif} accent={book.accent} w={coverW} h={book.height * bookH}/>

          {/* grain */}
          <div style={{ position:'absolute', inset:0, opacity:.35, mixBlendMode:'multiply',
            backgroundImage:'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.1\'/%3E%3C/svg%3E")',
          }}/>

          {/* border inset */}
          <div style={{ position:'absolute', inset:8, border:`1px solid ${book.ink}`, opacity:.18, borderRadius:1 }}/>

          {/* cover image */}
          {book.coverImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={book.coverImageUrl} alt={book.title}
              style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }}/>
          )}

          {/* typography */}
          {!book.coverImageUrl && (
            <div style={{ position:'absolute', inset:0, padding:'18px 16px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
              <span style={{ fontFamily:'Inter,sans-serif', fontSize:'8px', fontWeight:600, letterSpacing:'.2em', textTransform:'uppercase', color:book.ink, opacity:.7 }}>
                {PUBLISHERS[book.publication]?.label || 'PB'}
              </span>
              <div>
                <div style={{ fontFamily:'"Newsreader",Georgia,serif', fontSize: book.title.length > 22 ? '18px' : '22px', fontWeight:400, lineHeight:1.1, letterSpacing:'-.03em', color:book.ink, marginBottom:'8px' }}>
                  {book.title}
                </div>
                <div style={{ fontFamily:'Inter,sans-serif', fontSize:'10px', color:book.ink, opacity:.7 }}>{book.author}</div>
              </div>
              <span style={{ fontFamily:'Inter,sans-serif', fontSize:'6px', fontWeight:600, letterSpacing:'.16em', textTransform:'uppercase', color:book.ink, opacity:.45 }}>
                {PUBLISHERS[book.publication]?.label || ''}
              </span>
            </div>
          )}

          {/* spine shadow on left */}
          <div style={{ position:'absolute', top:0, bottom:0, left:0, width:10, background:'linear-gradient(to right,rgba(0,0,0,0.22),transparent)', pointerEvents:'none' }}/>
        </div>
      ) : (
        /* ── Default: spine only ── */
        <div style={{
          position: 'relative',
          height: '100%',
          width: `${book.thickness}px`,
        }}>
          {/* Spine */}
          <div style={{
            position: 'absolute', inset: 0,
            background: book.cover,
            borderRadius: '2px 0 0 2px',
            overflow: 'hidden',
            boxShadow: hov ? '-5px 8px 24px rgba(0,0,0,0.38)' : '-2px 4px 12px rgba(0,0,0,0.24)',
            transition: 'box-shadow 0.4s ease',
          }}>
            {/* accent stripe */}
            <div style={{ position:'absolute', left:4, top:10, bottom:10, width:3, background:book.accent, borderRadius:2, opacity:.9 }}/>
            {/* rotated title */}
            <div style={{
              position:'absolute', bottom:24, left:'50%',
              transform:'translateX(-50%) rotate(-90deg)',
              transformOrigin:'center center',
              width:`${book.height * bookH - 52}px`,
              textAlign:'left', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
            }}>
              <span style={{
                fontFamily:'"Newsreader","Georgia",serif',
                fontSize: book.title.length > 22 ? '7px' : '8.5px',
                fontWeight:500, color:book.ink, letterSpacing:'0.04em', opacity:.9,
              }}>{book.title}</span>
            </div>
            {/* headbands */}
            <div style={{ position:'absolute', top:3, left:4, right:4, height:5, background:book.accent, borderRadius:'1px 1px 0 0', opacity:.85 }}/>
            <div style={{ position:'absolute', bottom:3, left:4, right:4, height:5, background:book.accent, borderRadius:'0 0 1px 1px', opacity:.85 }}/>
          </div>

          {/* page edge */}
          <div style={{
            position:'absolute', top:3, bottom:3, right:-4, width:4,
            background:'linear-gradient(to right,#e9dfca,#f0e8d6)',
            borderRadius:'0 2px 2px 0',
          }}/>
        </div>
      )}
    </div>
  )
}

/* ─── Detail panel ─── */
function DetailPanel({ book, index, total, onClose }: {
  book: ShelfBook; index: number; total: number; onClose: () => void
}) {
  return (
    <div style={{
      position:'absolute', top:0, right:0, bottom:0,
      width:'min(400px, 40%)',
      display:'flex', flexDirection:'column', justifyContent:'center',
      padding:'2.5rem 3rem 2.5rem 4rem',
      zIndex:30,
      animation:'detailIn 0.5s cubic-bezier(0.22,1,0.36,1) both',
    }}>
      <style>{`
        @keyframes detailIn { from{opacity:0;transform:translateX(28px)} to{opacity:1;transform:translateX(0)} }
      `}</style>
      {/* fade bg */}
      <div style={{
        position:'absolute', inset:0, zIndex:-1,
        background:'linear-gradient(90deg,transparent,rgba(238,232,219,0.88) 14%,#eee8db 30%)',
      }}/>

      <button onClick={onClose} style={{
        alignSelf:'flex-start', display:'flex', alignItems:'center', gap:8,
        background:'none', border:'none', cursor:'pointer', padding:0, marginBottom:'2rem',
        fontFamily:'Inter,sans-serif', fontSize:'8px', fontWeight:650,
        letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(37,35,31,0.5)',
      }}>← Return to shelf</button>

      <div style={{ display:'flex', gap:8, alignItems:'center', marginBottom:14 }}>
        <span style={{ fontSize:'8px', fontWeight:620, letterSpacing:'.19em', fontFamily:'Inter,sans-serif', color:'rgba(37,35,31,0.45)' }}>
          {String(index+1).padStart(2,'0')}
        </span>
        <span style={{ flex:1, height:1, background:'rgba(37,35,31,0.18)', display:'block', maxWidth:32 }}/>
        <span style={{ fontSize:'8px', fontWeight:620, letterSpacing:'.19em', fontFamily:'Inter,sans-serif', color:'rgba(37,35,31,0.35)' }}>
          {String(total).padStart(2,'0')}
        </span>
      </div>

      <p style={{ fontFamily:'Inter,sans-serif', fontSize:'8px', fontWeight:620, letterSpacing:'.19em', textTransform:'uppercase', color:'rgba(37,35,31,0.45)', margin:'0 0 14px', display:'flex', alignItems:'center', gap:8 }}>
        <span style={{ width:28, height:1, background:'rgba(37,35,31,0.3)', display:'inline-block' }}/>
        {PUBLISHERS[book.publication]?.label || book.publication}
      </p>

      <h2 style={{
        fontFamily:'"Newsreader","Fraunces",Georgia,serif',
        fontSize:'clamp(1.6rem,2.8vw,2.4rem)', fontWeight:420,
        letterSpacing:'-.045em', lineHeight:.93, color:'#25231f', margin:'0 0 10px',
      }}>{book.title}</h2>

      <p style={{ fontFamily:'"Newsreader",Georgia,serif', fontSize:'14px', fontStyle:'italic', color:'rgba(37,35,31,0.58)', margin:'0 0 1.5rem' }}>
        {book.author}
      </p>

      <div style={{ borderTop:'1px solid rgba(37,35,31,0.1)', paddingTop:'1.25rem', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1.5rem' }}>
        <div>
          <dt style={{ fontSize:'7px', fontWeight:650, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(37,35,31,0.4)', marginBottom:4, display:'block' }}>Publisher</dt>
          <dd style={{ fontFamily:'"Newsreader",Georgia,serif', fontSize:'13px', margin:0, color:'#25231f' }}>{PUBLISHERS[book.publication]?.label}</dd>
        </div>
        <div>
          <dt style={{ fontSize:'7px', fontWeight:650, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(37,35,31,0.4)', marginBottom:4, display:'block' }}>Design</dt>
          <dd style={{ fontFamily:'"Newsreader",Georgia,serif', fontSize:'13px', margin:0, color:'#25231f' }}>Sachin Yagol</dd>
        </div>
      </div>

      <a href="/books" style={{
        alignSelf:'flex-start', display:'flex', alignItems:'center', justifyContent:'space-between',
        gap:'2rem', padding:'10px 0 8px', borderBottom:'1px solid #25231f',
        textDecoration:'none', fontFamily:'Inter,sans-serif', fontSize:'9px', fontWeight:640,
        letterSpacing:'.15em', textTransform:'uppercase', color:'#25231f', minWidth:180,
        transition:'opacity 0.2s',
      }}
        onMouseEnter={e=>(e.currentTarget.style.opacity='.55')}
        onMouseLeave={e=>(e.currentTarget.style.opacity='1')}
      >
        <span>Inspect volume</span>
        <span style={{ fontSize:'14px', fontWeight:400 }}>↗</span>
      </a>
    </div>
  )
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
export default function BookShelf() {
  const [books, setBooks] = useState<ShelfBook[]>(FALLBACK_BOOKS)
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const [scrollIdx, setScrollIdx] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragTravel = useRef(0)

  const VISIBLE = 12
  const BOOK_H = 340  // base book height px

  useEffect(() => {
    fetch('/api/books')
      .then(r => r.json())
      .then((data: Array<{ id:string; title:string; author:string; coverImageUrl:string; publication:string }>) => {
        if (!data?.length) return
        setBooks(data.map((b,i) => {
          const p = paletteFrom(i)
          return { id:b.id, title:b.title, author:b.author, cover:p.cover, accent:p.accent, ink:p.ink,
            height: 0.92+(i%5)*0.056, thickness: 22+(i%7)*4, publication:b.publication as Publisher,
            coverImageUrl:b.coverImageUrl||undefined }
        }))
      })
      .catch(()=>{})
  }, [])

  const maxScroll = Math.max(0, books.length - VISIBLE)
  const visible = books.slice(scrollIdx, scrollIdx + VISIBLE)
  const activeBook = activeIdx !== null ? visible[activeIdx] : null

  const onPtrDown = (e: React.PointerEvent) => {
    isDragging.current = true; dragStartX.current = e.clientX; dragTravel.current = 0
    containerRef.current?.setPointerCapture(e.pointerId)
  }
  const onPtrMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return
    const d = e.clientX - dragStartX.current
    dragTravel.current = Math.abs(d)
    if (Math.abs(d) > 38) {
      setScrollIdx(i => Math.max(0, Math.min(maxScroll, i + (d<0?1:-1))))
      dragStartX.current = e.clientX
    }
  }
  const onPtrUp = (e: React.PointerEvent) => {
    isDragging.current = false
    containerRef.current?.releasePointerCapture(e.pointerId)
  }

  return (
    <div style={{
      position:'absolute', inset:0,
      background:'radial-gradient(circle at 50% 42%, rgba(255,255,255,0.26), transparent 46%), #eee8db',
      overflow:'hidden', userSelect:'none',
      display:'flex', flexDirection:'column',
    }}>
      {/* ── paper grain overlay ── */}
      <div style={{
        position:'absolute', inset:0, zIndex:14, pointerEvents:'none',
        opacity:.18, mixBlendMode:'multiply',
        backgroundImage:`radial-gradient(circle at 12% 31%,rgba(45,35,24,.12) 0 .7px,transparent .8px),radial-gradient(circle at 73% 69%,rgba(255,255,255,.9) 0 .6px,transparent .7px)`,
        backgroundSize:'7px 9px,11px 13px',
      }}/>

      {/* ── top metadata bar (like mint-playground header) ── */}
      <div style={{
        position:'absolute', top:0, left:0, right:0, zIndex:22,
        display:'flex', alignItems:'flex-start', justifyContent:'space-between',
        padding:'22px clamp(22px,3.4vw,56px)', pointerEvents:'none',
      }}>
        <div style={{ display:'flex', gap:13, alignItems:'center', fontFamily:'Inter,sans-serif', fontSize:'9px', fontWeight:650, letterSpacing:'.185em', lineHeight:1, color:'#25231f' }}>
          <span>BOOK COVER DESIGN</span>
          <span style={{ width:28, height:1, background:'currentColor', opacity:.4, display:'inline-block' }}/>
          <span style={{ opacity:.5 }}>THE SHELF</span>
        </div>
        <div style={{ textAlign:'right', fontFamily:'Inter,sans-serif', fontSize:'8px', fontWeight:560, letterSpacing:'.17em', lineHeight:1.6, color:'rgba(37,35,31,.5)' }}>
          <div>{books.length} VOLUMES</div>
          <div>SACHIN YAGOL</div>
        </div>
      </div>

      {/* ── left browse caption ── */}
      <div style={{
        position:'absolute', zIndex:16,
        bottom:'clamp(120px,20vh,160px)',
        left:'clamp(24px,5.4vw,72px)',
        width:'min(360px,32vw)',
        pointerEvents:'none',
        opacity: activeBook ? 0 : 1,
        transform: activeBook ? 'translate3d(-18px,0,0)' : 'none',
        transition:'opacity .38s ease,transform .48s cubic-bezier(0.22,1,0.36,1)',
      }}>
        {/* fade bg behind text */}
        <div style={{
          position:'absolute', zIndex:-1, top:-36, right:-56, bottom:-32, left:-76,
          background:'linear-gradient(90deg,rgba(238,232,219,.96) 0%,rgba(238,232,219,.82) 58%,rgba(238,232,219,0) 100%)',
          pointerEvents:'none',
        }}/>
        <p style={{ display:'flex', gap:8, alignItems:'center', margin:'0 0 16px', fontFamily:'Inter,sans-serif', fontSize:'8px', fontWeight:620, letterSpacing:'.19em', color:'#25231f' }}>
          <span>{String(scrollIdx+1).padStart(2,'0')}</span>
          <span style={{ width:38, height:1, background:'#25231f', opacity:.28, display:'inline-block' }}/>
          <span>{String(books.length).padStart(2,'0')}</span>
        </p>
        <h1 style={{
          fontFamily:'"Newsreader","Fraunces",Georgia,serif',
          fontSize:'clamp(32px,4.2vw,62px)', fontWeight:430,
          letterSpacing:'-.045em', lineHeight:.92, color:'#25231f', margin:'0 0 14px',
        }}>{visible[0]?.title || ''}</h1>
        <p style={{ fontFamily:'"Newsreader",Georgia,serif', fontSize:'14px', fontStyle:'italic', color:'rgba(37,35,31,.58)', margin:'0 0 20px' }}>
          {visible[0]?.author || ''}
        </p>
        <button
          onClick={() => setActiveIdx(0)}
          style={{
            display:'inline-flex', gap:18, alignItems:'center',
            padding:'0 0 6px', borderBottom:'1px solid #25231f',
            background:'none', border:'none', borderBottom:'1px solid #25231f',
            cursor:'pointer', fontFamily:'Inter,sans-serif', fontSize:'9px', fontWeight:620,
            letterSpacing:'.15em', textTransform:'uppercase', color:'#25231f',
            transition:'opacity .2s', pointerEvents:'auto',
          }}
          onMouseEnter={e=>(e.currentTarget.style.opacity='.55')}
          onMouseLeave={e=>(e.currentTarget.style.opacity='1')}
        >
          <span>Inspect volume</span>
          <span style={{ fontSize:'13px', fontWeight:400 }}>↗</span>
        </button>
      </div>

      {/* ── detail panel ── */}
      {activeBook && (
        <DetailPanel
          book={activeBook}
          index={scrollIdx + activeIdx!}
          total={books.length}
          onClose={() => setActiveIdx(null)}
        />
      )}

      {/* ── shelf area (bottom half) ── */}
      <div style={{ flex:1, position:'relative', display:'flex', alignItems:'flex-end', justifyContent:'center', minHeight:0 }}>

        {/* books row */}
        <div
          ref={containerRef}
          onPointerDown={onPtrDown}
          onPointerMove={onPtrMove}
          onPointerUp={onPtrUp}
          style={{
            position:'relative', zIndex:5,
            display:'flex', alignItems:'flex-end', gap:'3px',
            paddingBottom:'56px', paddingLeft:'clamp(16px,6vw,80px)', paddingRight:'clamp(16px,6vw,80px)',
            cursor:'grab', overflowX:'visible',
          }}
        >
          {visible.map((book, i) => (
            <Book
              key={book.id}
              book={book}
              index={scrollIdx + i}
              isActive={activeIdx === i}
              bookH={BOOK_H}
              onClick={() => { if (dragTravel.current < 6) setActiveIdx(p => p===i ? null : i) }}
            />
          ))}
        </div>

        {/* floor shadow */}
        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:56, background:'linear-gradient(to top,rgba(90,65,50,.14),transparent)', zIndex:1, pointerEvents:'none' }}/>

        {/* wooden shelf */}
        <div style={{
          position:'absolute', bottom:28, left:'4%', right:'4%',
          height:26, zIndex:4,
          background:'linear-gradient(to bottom,#7a5a3a,#5a4132 42%,#4b3429)',
          borderRadius:'3px',
          boxShadow:'0 4px 20px rgba(0,0,0,.3),0 1px 0 rgba(255,255,255,.07) inset',
        }}>
          <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(to right,rgba(255,255,255,.05),rgba(255,255,255,.13) 30%,rgba(255,255,255,.05))', borderRadius:'3px 3px 0 0' }}/>
          {/* front rail */}
          <div style={{ position:'absolute', bottom:-11, left:0, right:0, height:11, background:'#4b3429', borderRadius:'0 0 3px 3px', boxShadow:'0 4px 10px rgba(0,0,0,.24)' }}>
            <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'rgba(255,255,255,.06)' }}/>
          </div>
        </div>

        {/* ground shadow */}
        <div style={{ position:'absolute', bottom:0, left:'4%', right:'4%', height:28, background:'radial-gradient(ellipse at 50% 0,rgba(0,0,0,.14),transparent 70%)', zIndex:3, pointerEvents:'none' }}/>

        {/* left/right nav arrows */}
        {[{side:'left',dir:-1},{side:'right',dir:1}].map(({side,dir}) => {
          const disabled = dir===-1 ? scrollIdx===0 : scrollIdx>=maxScroll
          return (
            <button key={side}
              onClick={() => setScrollIdx(i => Math.max(0, Math.min(maxScroll, i+dir)))}
              disabled={disabled}
              aria-label={dir===-1?'Previous':'Next'}
              style={{
                position:'absolute', top:'42%', ...(side==='left'?{left:'clamp(12px,2.4vw,36px)'}:{right:'clamp(12px,2.4vw,36px)'}),
                zIndex:18, display:'grid', placeItems:'center',
                width:46, height:46, borderRadius:'50%',
                border:'1px solid rgba(37,35,31,.18)',
                background:'rgba(238,232,219,.72)',
                cursor: disabled ? 'default' : 'pointer',
                opacity: disabled ? .22 : 1,
                backdropFilter:'blur(10px)',
                transition:'opacity .24s,transform .24s',
              }}
              onMouseEnter={e=>{ if(!disabled) e.currentTarget.style.transform='scale(1.07)' }}
              onMouseLeave={e=>{ e.currentTarget.style.transform='scale(1)' }}
            >
              <svg width="15" height="9" viewBox="0 0 15 9" fill="none">
                {dir===-1
                  ? <><line x1="15" y1="4.5" x2="0" y2="4.5" stroke="#25231f" strokeWidth="1"/><line x1="4.5" y1="1" x2=".5" y2="4.5" stroke="#25231f" strokeWidth="1"/><line x1="4.5" y1="8" x2=".5" y2="4.5" stroke="#25231f" strokeWidth="1"/></>
                  : <><line x1="0" y1="4.5" x2="15" y2="4.5" stroke="#25231f" strokeWidth="1"/><line x1="10.5" y1="1" x2="14.5" y2="4.5" stroke="#25231f" strokeWidth="1"/><line x1="10.5" y1="8" x2="14.5" y2="4.5" stroke="#25231f" strokeWidth="1"/></>
                }
              </svg>
            </button>
          )
        })}
      </div>

      {/* ── bottom index ticks + hint ── */}
      <div style={{
        position:'relative', zIndex:19,
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'14px clamp(22px,3.4vw,56px) 18px',
        opacity: activeBook ? 0 : 1,
        transition:'opacity .3s ease',
        pointerEvents: activeBook ? 'none' : 'auto',
      }}>
        {/* ticks */}
        <div style={{
          flex:1, display:'grid',
          gridTemplateColumns:`repeat(${books.length},1fr)`,
          alignItems:'flex-end', height:18, maxWidth:520,
        }}>
          {books.map((_,i) => {
            const inView = i >= scrollIdx && i < scrollIdx + VISIBLE
            return (
              <button key={i} onClick={() => setScrollIdx(Math.min(i, maxScroll))}
                aria-label={`Go to book ${i+1}`}
                style={{ position:'relative', display:'block', width:'100%', height:18, padding:0, background:'transparent', border:'none', cursor:'pointer' }}>
                <span style={{
                  position:'absolute', bottom:2, left:'50%', transform:'translateX(-50%)',
                  width: inView ? 2 : 1,
                  height: inView ? 14 : 6,
                  background:'#25231f',
                  opacity: inView ? .82 : .22,
                  transition:'all .22s ease',
                  borderRadius:1, display:'block',
                }}/>
              </button>
            )
          })}
        </div>
        {/* hint */}
        <div style={{ display:'flex', alignItems:'center', gap:10, fontFamily:'Inter,sans-serif', fontSize:'7px', fontWeight:600, letterSpacing:'.14em', color:'rgba(37,35,31,.4)', whiteSpace:'nowrap' }}>
          <span>DRAG</span>
          <span style={{ width:2, height:2, borderRadius:'50%', background:'currentColor', display:'inline-block' }}/>
          <span>SCROLL</span>
          <span style={{ width:2, height:2, borderRadius:'50%', background:'currentColor', display:'inline-block' }}/>
          <span>ARROW KEYS</span>
        </div>
      </div>
    </div>
  )
}
