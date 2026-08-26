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
  spineImageUrl?: string
}

/* ─── 16 real books with cover + spine images ─── */
const FALLBACK_BOOKS: ShelfBook[] = [
  { id: 'pagal-basti',      title: 'Pagal Basti',                      author: 'Sarubhakta',              cover: '#1a0a08', accent: '#c9a227', ink: '#f5e8d0', height: 1.10, thickness: 44, publication: 'bh',      coverImageUrl: '/Home/Pagal Basti.jpg',                        spineImageUrl: '/Home/Pagal Basti Spin.jpg' },
  { id: 'bhagna-bhairav',   title: 'Bhagna Bhairav',                   author: 'Prollaas Sindhuliya',     cover: '#2a1010', accent: '#c03030', ink: '#f0e0d0', height: 1.08, thickness: 40, publication: 'bh',      coverImageUrl: '/Home/BHAGNA BHAIRAV.jpg',                     spineImageUrl: '/Home/BHAGNA BHAIRAV Spin.jpg' },
  { id: 'bhuiyan',          title: 'Bhuiyan',                          author: 'Yangesh',                 cover: '#3a2010', accent: '#e0a030', ink: '#f5e8d0', height: 1.06, thickness: 36, publication: 'fp',      coverImageUrl: '/Home/BHUIYAN COVER.jpg',                      spineImageUrl: '/Home/BHUIYAN Spin.jpg' },
  { id: 'basuriko',         title: 'Basuriko Dhun',                    author: 'Tikaram Regmi',           cover: '#e8ddc6', accent: '#c9a227', ink: '#2a1408', height: 1.09, thickness: 38, publication: 'sunbarshi',coverImageUrl: '/Home/Basuriko.jpg',                           spineImageUrl: '/Home/Basuriko Spin.jpg' },
  { id: 'godhuli-geet',     title: 'Godhuli Geet',                     author: 'Bhanu Bokhim',            cover: '#1a2a4a', accent: '#e0a955', ink: '#f5edd8', height: 1.12, thickness: 42, publication: 'kalam',   coverImageUrl: '/Home/Godhuli Geet.jpg',                       spineImageUrl: '/Home/Godhuli Geet Spin.jpg' },
  { id: 'hans',             title: 'Hansa',                            author: 'Sanjeev Uprety',          cover: '#0a0a1a', accent: '#6080c0', ink: '#f0e8d0', height: 1.07, thickness: 36, publication: 'bh',      coverImageUrl: '/Home/Hans.jpg',                               spineImageUrl: '/Home/Hans Spin.jpg' },
  { id: 'kalpagrantha',     title: 'Kalpa-Grantha',                    author: 'Kumar Nagarkoti',         cover: '#0a0a0a', accent: '#c0a040', ink: '#f0e8d0', height: 1.10, thickness: 44, publication: 'bh',      coverImageUrl: '/Home/Kalpagrantha.jpg',                       spineImageUrl: '/Home/Kalpagrantha Spin.jpg' },
  { id: 'lost-n-found',     title: 'Lost n Found',                     author: '',                        cover: '#c07040', accent: '#1a2a4a', ink: '#f5e8d0', height: 1.05, thickness: 38, publication: 'bh',      coverImageUrl: '/Home/Lost n Found .jpg',                      spineImageUrl: '/Home/Lost n Found Spin.jpg' },
  { id: 'maidaro',          title: 'Maidaro',                          author: 'Bhupeen',                 cover: '#1c1010', accent: '#c03030', ink: '#f0e0d0', height: 1.11, thickness: 46, publication: 'bh',      coverImageUrl: '/Home/MAIDARO.jpg',                            spineImageUrl: '/Home/MAIDARO Spin.jpg' },
  { id: 'mithya',           title: 'Mithya',                           author: 'Deepak Parajuli',         cover: '#0a0a0a', accent: '#808080', ink: '#f0e8d0', height: 1.08, thickness: 40, publication: 'bh',      coverImageUrl: '/Home/MITHYA.jpg',                             spineImageUrl: '/Home/MITHYA Spin.jpg' },
  { id: 'mukam-ranamaidan', title: 'Mukam Ranamaidan',                 author: 'Mohan Mainali',           cover: '#1a0808', accent: '#c03030', ink: '#f5e0d0', height: 1.09, thickness: 42, publication: 'bh',      coverImageUrl: '/Home/Mukam Ranamaidan.jpg',                   spineImageUrl: '/Home/Mukam Ranamaidan Spin.jpg' },
  { id: 'nepal-nakuleko',   title: 'Nepal Nakhuleko Pato',             author: 'Dr. Tirthabahadur Shrestha', cover: '#e8ddc6', accent: '#2457a6', ink: '#2a1408', height: 1.07, thickness: 36, publication: 'bh',   coverImageUrl: '/Home/Nepal Nakuleko Pato .jpg',               spineImageUrl: '/Home/Nepal Nakuleko Pato  Spin.jpg' },
  { id: 'parbat-parbatma',  title: 'Parbat Parbatma Batuwa Gham',     author: 'Ramesh Kshitiz',          cover: '#0d2818', accent: '#d4a030', ink: '#f2e8d0', height: 1.06, thickness: 38, publication: 'bh',      coverImageUrl: '/Home/PARBAT PARBATMA .jpg',                   spineImageUrl: '/Home/PARBAT PARBATMA Spin.jpg' },
  { id: 'sati',             title: 'Sati',                             author: 'Sujit Mainali',           cover: '#1a3040', accent: '#e0b060', ink: '#f5edd8', height: 1.12, thickness: 44, publication: 'kitab',   coverImageUrl: '/Home/Sati.jpg',                               spineImageUrl: '/Home/Sati Spin.jpg' },
  { id: 'vegetarian',       title: 'Vegeterian',                       author: 'Han Kang',                cover: '#0a1a1a', accent: '#40c080', ink: '#f0f4e0', height: 1.08, thickness: 36, publication: 'bh',      coverImageUrl: '/Home/Vegetarian.jpg',                         spineImageUrl: '/Home/Vegetarian Spin.jpg' },
  { id: 'ray-of-light',     title: 'A Ray of Light in the Himalayas', author: 'Takashi Miyahara',        cover: '#1a2a4a', accent: '#6080c0', ink: '#f5edd8', height: 1.10, thickness: 42, publication: 'fp',      coverImageUrl: '/Home/A Ray of Light in the Himalayas.jpg',   spineImageUrl: '/Home/A Ray of Light in the Himalayas Spin.jpg' },
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

/* ─── SVG motifs ─── */
const MOTIFS = ['wave','orbit','lattice','boom','branches','circuit']

function MotifSVG({ motif, accent, w, h }: { motif: string; accent: string; w: number; h: number }) {
  switch (motif) {
    case 'wave': return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position:'absolute', inset:0, opacity:.35 }}>
        {[0,1,2,3,4].map(i => (
          <path key={i} d={`M0 ${h*(.3+i*.1)} Q${w*.25} ${h*(.2+i*.1)} ${w*.5} ${h*(.3+i*.1)} T${w} ${h*(.3+i*.1)}`}
            fill="none" stroke={accent} strokeWidth={i%2===0?2:1}/>
        ))}
      </svg>
    )
    case 'orbit': return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position:'absolute', inset:0, opacity:.35 }}>
        {[1,2,3].map(i=>(
          <ellipse key={i} cx={w*.5} cy={h*.55} rx={i*w*.14} ry={i*h*.08}
            fill="none" stroke={accent} strokeWidth={i===2?2:1} transform={`rotate(${i*20} ${w*.5} ${h*.55})`}/>
        ))}
        <circle cx={w*.5} cy={h*.55} r={w*.04} fill={accent}/>
      </svg>
    )
    case 'lattice': return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position:'absolute', inset:0, opacity:.3 }}>
        {[[.2,.3],[.5,.2],[.8,.35],[.3,.6],[.65,.55],[.5,.8]].map(([x,y],i,arr)=>
          arr.slice(i+1).filter(([x2,y2])=>Math.hypot(x-x2,y-y2)<.45).map(([x2,y2],j)=>(
            <line key={`${i}-${j}`} x1={x*w} y1={y*h} x2={x2*w} y2={y2*h} stroke={accent} strokeWidth={1}/>
          ))
        )}
        {[[.2,.3],[.5,.2],[.8,.35],[.3,.6],[.65,.55],[.5,.8]].map(([x,y],i)=>(
          <circle key={i} cx={x*w} cy={y*h} r={i%2===0?4:2.5} fill={accent}/>
        ))}
      </svg>
    )
    case 'boom': return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position:'absolute', inset:0, opacity:.3 }}>
        {[1,2,3,4].map(i=>(
          <circle key={i} cx={w*.5} cy={h*.55} r={i*Math.min(w,h)*.1}
            fill="none" stroke={accent} strokeWidth={i%2===0?2.5:1}/>
        ))}
      </svg>
    )
    case 'branches': return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position:'absolute', inset:0, opacity:.3 }}>
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
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ position:'absolute', inset:0, opacity:.28 }}>
        {[.3,.5,.7].map((y,i)=>(
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

/* ─── Front cover face ─── */
function FrontCover({ book, w, h, motif }: { book: ShelfBook; w: number; h: number; motif: string }) {
  return (
    <div style={{
      position: 'relative', width: w, height: h,
      background: book.cover, borderRadius: '3px 3px 0 0',
      overflow: 'hidden',
      boxShadow: '0 16px 56px rgba(0,0,0,0.48), -6px 0 16px rgba(0,0,0,0.18)',
    }}>
      <MotifSVG motif={motif} accent={book.accent} w={w} h={h}/>
      {/* grain */}
      <div style={{ position:'absolute', inset:0, opacity:.35, mixBlendMode:'multiply',
        backgroundImage:'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.1\'/%3E%3C/svg%3E")',
      }}/>
      {/* border inset */}
      <div style={{ position:'absolute', inset:10, border:`1px solid ${book.ink}`, opacity:.18, borderRadius:1 }}/>
      {/* cover image */}
      {book.coverImageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={book.coverImageUrl} alt={book.title} style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }}/>
      )}
      {/* typography */}
      {!book.coverImageUrl && (
        <div style={{ position:'absolute', inset:0, padding:'20px 18px', display:'flex', flexDirection:'column', justifyContent:'space-between' }}>
          <span style={{ fontFamily:'Inter,sans-serif', fontSize:'9px', fontWeight:600, letterSpacing:'.2em', textTransform:'uppercase', color:book.ink, opacity:.7 }}>
            {PUBLISHERS[book.publication]?.label || 'BOOK COVER DESIGN'}
          </span>
          <div>
            <div style={{ fontFamily:'"Newsreader",Georgia,serif', fontSize:book.title.length>22?'22px':'28px', fontWeight:400, lineHeight:1.08, letterSpacing:'-.03em', color:book.ink, marginBottom:'10px' }}>
              {book.title}
            </div>
            <div style={{ fontFamily:'Inter,sans-serif', fontSize:'12px', color:book.ink, opacity:.7 }}>{book.author}</div>
          </div>
          <span style={{ fontFamily:'Inter,sans-serif', fontSize:'7px', fontWeight:600, letterSpacing:'.16em', textTransform:'uppercase', color:book.ink, opacity:.4 }}>
            SACHIN YAGOL · BOOK COVER DESIGN
          </span>
        </div>
      )}
      {/* left edge shadow */}
      <div style={{ position:'absolute', top:0, bottom:0, left:0, width:12, background:'linear-gradient(to right,rgba(0,0,0,0.22),transparent)', pointerEvents:'none' }}/>
    </div>
  )
}

/* ─── Spine ─── */
function Spine({ book, bookH, hovered }: { book: ShelfBook; bookH: number; hovered: boolean }) {
  return (
    <div style={{
      position: 'relative', height: `${book.height * bookH}px`, width: `${book.thickness}px`,
      background: book.cover, borderRadius: '2px 0 0 2px', overflow: 'hidden',
      boxShadow: hovered ? '-5px 8px 24px rgba(0,0,0,.38)' : '-2px 4px 12px rgba(0,0,0,.24)',
      transition: 'box-shadow 0.4s ease',
    }}>
      {book.spineImageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={book.spineImageUrl} alt={`${book.title} spine`}
          style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>
      ) : (
        <>
          <div style={{ position:'absolute', left:4, top:10, bottom:10, width:3, background:book.accent, borderRadius:2, opacity:.9 }}/>
          <div style={{
            position:'absolute', top:'50%', left:'50%',
            transform:'translate(-50%,-50%) rotate(-90deg)', transformOrigin:'center center',
            width:`${book.height * bookH - 52}px`,
            overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap', textAlign:'left',
          }}>
            <span style={{ fontFamily:'"Newsreader","Georgia",serif', fontSize:book.title.length>30?'9px':'11px', fontWeight:650, color:book.ink, letterSpacing:'.04em' }}>{book.title}</span>
          </div>
          <div style={{ position:'absolute', top:3, left:4, right:4, height:5, background:book.accent, borderRadius:'1px 1px 0 0', opacity:.85 }}/>
          <div style={{ position:'absolute', bottom:3, left:4, right:4, height:5, background:book.accent, borderRadius:'0 0 1px 1px', opacity:.85 }}/>
        </>
      )}
      {/* page edge */}
      <div style={{ position:'absolute', top:3, bottom:3, right:-4, width:4, background:'linear-gradient(to right,#e9dfca,#f0e8d6)', borderRadius:'0 2px 2px 0' }}/>
    </div>
  )
}

/* ─── Detail panel ─── */
function DetailPanel({ book, index, total }: { book: ShelfBook; index: number; total: number }) {
  return (
    <div style={{
      position:'absolute', top:0, right:0, bottom:0,
      width:'min(400px,40%)',
      display:'flex', flexDirection:'column', justifyContent:'center',
      padding:'2.5rem 3rem 2.5rem 4rem',
      zIndex:30,
      animation:'detailIn 0.5s cubic-bezier(0.22,1,0.36,1) both',
    }}>
      <style>{`@keyframes detailIn{from{opacity:0;transform:translateX(28px)}to{opacity:1;transform:translateX(0)}}`}</style>
      <div style={{ position:'absolute', inset:0, zIndex:-1, background:'linear-gradient(90deg,transparent,rgba(238,232,219,.88) 14%,#eee8db 30%)' }}/>

      <div style={{ display:'flex', gap:8, alignItems:'center', marginBottom:14 }}>
        <span style={{ fontFamily:'Inter,sans-serif', fontSize:'8px', fontWeight:620, letterSpacing:'.19em', color:'rgba(37,35,31,.45)' }}>{String(index+1).padStart(2,'0')}</span>
        <span style={{ flex:1, height:1, background:'rgba(37,35,31,.18)', display:'block', maxWidth:32 }}/>
        <span style={{ fontFamily:'Inter,sans-serif', fontSize:'8px', fontWeight:620, letterSpacing:'.19em', color:'rgba(37,35,31,.35)' }}>{String(total).padStart(2,'0')}</span>
      </div>

      <p style={{ fontFamily:'Inter,sans-serif', fontSize:'8px', fontWeight:620, letterSpacing:'.19em', textTransform:'uppercase', color:'rgba(37,35,31,.45)', margin:'0 0 14px', display:'flex', alignItems:'center', gap:8 }}>
        <span style={{ width:28, height:1, background:'rgba(37,35,31,.3)', display:'inline-block' }}/>
        {PUBLISHERS[book.publication]?.label || book.publication}
      </p>

      <h2 style={{ fontFamily:'"Newsreader","Fraunces",Georgia,serif', fontSize:'clamp(1.6rem,2.8vw,2.4rem)', fontWeight:420, letterSpacing:'-.045em', lineHeight:.93, color:'#25231f', margin:'0 0 10px' }}>{book.title}</h2>
      <p style={{ fontFamily:'"Newsreader",Georgia,serif', fontSize:'14px', fontStyle:'italic', color:'rgba(37,35,31,.58)', margin:'0 0 1.5rem' }}>{book.author}</p>

      <div style={{ borderTop:'1px solid rgba(37,35,31,.1)', paddingTop:'1.25rem', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1rem', marginBottom:'1.5rem' }}>
        <div>
          <dt style={{ fontSize:'7px', fontWeight:650, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(37,35,31,.4)', marginBottom:4, display:'block' }}>Publisher</dt>
          <dd style={{ fontFamily:'"Newsreader",Georgia,serif', fontSize:'13px', margin:0, color:'#25231f' }}>{PUBLISHERS[book.publication]?.label}</dd>
        </div>
        <div>
          <dt style={{ fontSize:'7px', fontWeight:650, letterSpacing:'.16em', textTransform:'uppercase', color:'rgba(37,35,31,.4)', marginBottom:4, display:'block' }}>Design</dt>
          <dd style={{ fontFamily:'"Newsreader",Georgia,serif', fontSize:'13px', margin:0, color:'#25231f' }}>Sachin Yagol</dd>
        </div>
      </div>

      <p style={{ fontFamily:'"Newsreader",Georgia,serif', fontSize:'13px', lineHeight:1.5, color:'rgba(37,35,31,.65)', margin:'0 0 1.5rem' }}>
        Use the arrows or index to explore the collection
      </p>

      <div style={{ display:'flex', alignItems:'center', gap:8, fontFamily:'Inter,sans-serif', fontSize:'8px', fontWeight:600, letterSpacing:'.14em', color:'rgba(37,35,31,.35)' }}>
        <span>↓</span><span>SCROLL TO CONTINUE</span>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════ */
export default function BookShelf() {
  const [books, setBooks] = useState<ShelfBook[]>(FALLBACK_BOOKS)
  const [activeIdx, setActiveIdx] = useState(0)      // which book is "open"
  // Start with the first cover open so the landing view immediately shows a
  // complete book, rather than a row of spines.
  const [isOpen, setIsOpen] = useState(true)          // is front cover showing
  const [hovIdx, setHovIdx] = useState<number|null>(null)
  const [viewportWidth, setViewportWidth] = useState(1440)
  const [viewportHeight, setViewportHeight] = useState(900)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const lastScrollY = useRef(0)
  const scrollAccum = useRef(0)
  const transitionLock = useRef(false)
  const SCROLL_THRESHOLD = 160                         // px scroll needed to advance
  // A single fixed footprint keeps every volume consistent and leaves room
  // for the navigation, shelf, and header within the first viewport.
  const compactShelf = viewportWidth < 640
  // Grow the hero cover to use the available screen space, but retain room
  // for the fixed header and the physical shelf on shorter displays.
  const BOOK_H = compactShelf
    ? Math.min(440, Math.max(370, viewportHeight - 210))
    : Math.min(600, Math.max(490, viewportHeight - 165))
  const BOOK_W = Math.round(BOOK_H * (2 / 3))
  const SPINE_W = Math.round(BOOK_W * 0.14)
  const VISIBLE = 16
  const HERO_BOOK_LIMIT = 15

  useEffect(() => {
    // Always use the 16 curated real books with actual cover + spine images
    setBooks(FALLBACK_BOOKS)
  }, [])

  useEffect(() => {
    const updateViewport = () => {
      setViewportWidth(window.innerWidth)
      setViewportHeight(window.innerHeight)
    }
    updateViewport()
    window.addEventListener('resize', updateViewport, { passive: true })
    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  /* Scroll deliberately between volumes, avoiding rapid changes from a single swipe. */
  useEffect(() => {
    const handleScroll = () => {
      const el = wrapperRef.current
      if (!el) return
      const currentY = window.scrollY
      const rect = el.getBoundingClientRect()
      // only intercept when shelf is in viewport
      if (rect.top > 0 || rect.bottom < window.innerHeight) {
        lastScrollY.current = currentY
        scrollAccum.current = 0
        return
      }

      const delta = currentY - lastScrollY.current
      lastScrollY.current = currentY
      if (transitionLock.current) return
      scrollAccum.current += delta

      if (scrollAccum.current > SCROLL_THRESHOLD) {
        scrollAccum.current = 0
        transitionLock.current = true
        if (!isOpen) {
          // open current book
          setIsOpen(true)
          window.setTimeout(() => { transitionLock.current = false }, 460)
        } else if (activeIdx < books.length - 1) {
          // close current, advance to next
          setIsOpen(false)
          setTimeout(() => {
            setActiveIdx(i => i + 1)
            setIsOpen(true)
            transitionLock.current = false
          }, 460)
        } else {
          transitionLock.current = false
        }
      } else if (scrollAccum.current < -SCROLL_THRESHOLD) {
        scrollAccum.current = 0
        transitionLock.current = true
        if (isOpen) {
          setIsOpen(false)
          window.setTimeout(() => { transitionLock.current = false }, 460)
        } else if (activeIdx > 0) {
          setActiveIdx(i => i - 1)
          setTimeout(() => {
            setIsOpen(true)
            transitionLock.current = false
          }, 460)
        } else {
          transitionLock.current = false
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isOpen, activeIdx, books.length])

  const visibleStart = Math.max(0, activeIdx - 2)
  const visible = books.slice(visibleStart, visibleStart + VISIBLE)
  const activeBook = books[activeIdx]
  const motif = MOTIFS[activeIdx % MOTIFS.length]
  const coverW = BOOK_W
  const activePosition = activeIdx - visibleStart

  const selectBook = (index: number) => {
    if (index < 0 || index >= books.length || index === activeIdx || transitionLock.current) return
    transitionLock.current = true
    setIsOpen(false)
    window.setTimeout(() => {
      setActiveIdx(index)
      setIsOpen(true)
      transitionLock.current = false
    }, 460)
  }

  // This is a landing-page hero, not a scroll trap. Keep it to one viewport so
  // visitors move naturally into the work below after choosing a cover.
  const scrollHeight = '100svh'

  return (
    <>
      <style>{`
        @keyframes bookFaceIn { from{opacity:0;transform:translateY(22px) scale(.96)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes spineIn    { from{opacity:0;transform:translateY(-12px)} to{opacity:1;transform:translateY(0)} }
        @media (max-width: 639px) {
          .shelf-caption { display: none !important; }
          .shelf-top-label { font-size: 7px !important; }
          .shelf-bottom-help { display: none !important; }
        }
        @media (min-width: 640px) and (max-width: 1099px) {
          .shelf-caption { display: none !important; }
        }
      `}</style>

      {/* Single, screen-filling bookshelf hero */}
      <div style={{ height: scrollHeight, position: 'relative' }} ref={wrapperRef}>

        {/* viewport */}
        <div style={{
          position: 'relative',
          height: '100svh', minHeight: 600,
          overflow: 'hidden',
          background: 'radial-gradient(circle at 50% 42%, rgba(255,255,255,.26), transparent 46%), #eee8db',
          userSelect: 'none',
        }}>

          {/* paper grain */}
          <div className="shelf-caption" style={{
            position:'absolute', inset:0, zIndex:14, pointerEvents:'none',
            opacity:.18, mixBlendMode:'multiply',
            backgroundImage:`radial-gradient(circle at 12% 31%,rgba(45,35,24,.12) 0 .7px,transparent .8px),radial-gradient(circle at 73% 69%,rgba(255,255,255,.9) 0 .6px,transparent .7px)`,
            backgroundSize:'7px 9px,11px 13px',
          }}/>

          {/* top bar */}
          <div style={{
            position:'absolute', top:0, left:0, right:0, zIndex:22,
            display:'flex', alignItems:'flex-start', justifyContent:'space-between',
            padding:'22px clamp(22px,3.4vw,56px)', pointerEvents:'none',
          }}>
            <div className="shelf-top-label" style={{ display:'flex', gap:13, alignItems:'center', fontFamily:'Inter,sans-serif', fontSize:'9px', fontWeight:650, letterSpacing:'.185em', color:'#25231f' }}>
              <span>BOOK COVER DESIGN</span>
              <span style={{ width:28, height:1, background:'currentColor', opacity:.4, display:'inline-block' }}/>
              <span style={{ opacity:.5 }}>THE SHELF</span>
            </div>
            <div style={{ textAlign:'right', fontFamily:'Inter,sans-serif', fontSize:'8px', fontWeight:560, letterSpacing:'.17em', lineHeight:1.6, color:'rgba(37,35,31,.5)' }}>
              <div>{books.length} VOLUMES</div>
              <div>{String(activeIdx+1).padStart(2,'0')} / {String(books.length).padStart(2,'0')}</div>
            </div>
          </div>

          {/* left caption — counter only, no title/author */}
          <div style={{
            position:'absolute', zIndex:16,
            bottom:'clamp(120px,20vh,160px)',
            left:'clamp(24px,5.4vw,72px)',
            pointerEvents:'none',
          }}>
            <p style={{ display:'flex', gap:8, alignItems:'center', margin:'0 0 16px', fontFamily:'Inter,sans-serif', fontSize:'8px', fontWeight:620, letterSpacing:'.19em', color:'#25231f' }}>
              <span>{String(activeIdx+1).padStart(2,'0')}</span>
              <span style={{ width:38, height:1, background:'#25231f', opacity:.28, display:'inline-block' }}/>
              <span>{String(books.length).padStart(2,'0')}</span>
            </p>
            <div style={{ display:'flex', alignItems:'center', gap:8, fontFamily:'Inter,sans-serif', fontSize:'8px', fontWeight:600, letterSpacing:'.14em', color:'rgba(37,35,31,.35)' }}>
              <span>→</span><span>SELECT A VOLUME</span>
            </div>
          </div>

          {/* shelf area */}
          <div style={{ position:'relative', height:'100%', display:'flex', alignItems:'flex-end', justifyContent:'center' }}>

            {/* books row */}
            <div style={{
              position:'absolute', zIndex:5,
              display:'flex', alignItems:'flex-end', gap:'3px',
              bottom:0,
              paddingBottom:'56px',
              left:`calc(30% - ${(isOpen ? BOOK_W : SPINE_W) / 2}px - ${activePosition * (SPINE_W + 3)}px)`,
              transition:'left .6s cubic-bezier(.22,1,.36,1)',
            }}>
              {visible.map((book, i) => {
                const globalIdx = visibleStart + i
                const isActive = globalIdx === activeIdx
                const hov = hovIdx === globalIdx

                return (
                  <div
                    key={book.id}
                    onMouseEnter={() => setHovIdx(globalIdx)}
                    onMouseLeave={() => setHovIdx(null)}
                    onClick={() => {
                      if (isActive) {
                        setIsOpen(p => !p)
                      } else {
                        selectBook(globalIdx)
                      }
                    }}
                    style={{
                      cursor: 'pointer',
                      alignSelf: 'flex-end',
                      flexShrink: 0,
                      transition: 'transform 0.6s cubic-bezier(.22,1,.36,1)',
                      transform: isActive && isOpen
                        ? 'translateY(-8px) scale(1.03)'
                        : hov ? 'translateY(-10px)' : 'translateY(0)',
                      transformOrigin: 'bottom center',
                      zIndex: isActive ? 20 : hov ? 10 : 1,
                    }}
                  >
                    {isActive && isOpen ? (
                      <div style={{ animation:'bookFaceIn .6s cubic-bezier(.22,1,.36,1) both' }}>
                        <FrontCover
                          book={book}
                          w={coverW}
                          h={BOOK_H}
                          motif={motif}
                        />
                      </div>
                    ) : (
                      <div style={{ animation: isActive ? 'spineIn .42s cubic-bezier(.22,1,.36,1) both' : undefined }}>
                        <Spine book={{ ...book, height: 1, thickness: SPINE_W }} bookH={BOOK_H} hovered={hov}/>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* floor shadow */}
            <div style={{ position:'absolute', bottom:0, left:0, right:0, height:56, background:'linear-gradient(to top,rgba(90,65,50,.14),transparent)', zIndex:1, pointerEvents:'none' }}/>

            {/* wooden shelf */}
            <div style={{
              position:'absolute', bottom:28, left:'4%', right:'4%', height:26, zIndex:4,
              background:'linear-gradient(to bottom,#7a5a3a,#5a4132 42%,#4b3429)',
              borderRadius:'3px',
              boxShadow:'0 4px 20px rgba(0,0,0,.3),0 1px 0 rgba(255,255,255,.07) inset',
            }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:'linear-gradient(to right,rgba(255,255,255,.05),rgba(255,255,255,.13) 30%,rgba(255,255,255,.05))', borderRadius:'3px 3px 0 0' }}/>
              <div style={{ position:'absolute', bottom:-11, left:0, right:0, height:11, background:'#4b3429', borderRadius:'0 0 3px 3px', boxShadow:'0 4px 10px rgba(0,0,0,.24)' }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'rgba(255,255,255,.06)' }}/>
              </div>
            </div>

            {/* ground shadow */}
            <div style={{ position:'absolute', bottom:0, left:'4%', right:'4%', height:28, background:'radial-gradient(ellipse at 50% 0,rgba(0,0,0,.14),transparent 70%)', zIndex:3, pointerEvents:'none' }}/>

            {/* nav arrows */}
            {[{side:'left',dir:-1},{side:'right',dir:1}].map(({side,dir})=>{
              const disabled = dir===-1 ? activeIdx===0 : activeIdx>=books.length-1
              return (
                <button key={side}
                  onClick={()=>{
                    const next = activeIdx + dir
                    selectBook(next)
                  }}
                  disabled={disabled}
                  aria-label={dir===-1?'Previous':'Next'}
                  style={{
                    position:'absolute', top:'42%',
                    ...(side==='left'?{left:'clamp(12px,2.4vw,36px)'}:{right:'clamp(12px,2.4vw,36px)'}),
                    zIndex:18, display:'grid', placeItems:'center',
                    width:46, height:46, borderRadius:'50%',
                    border:'1px solid rgba(37,35,31,.18)',
                    background:'rgba(238,232,219,.72)',
                    cursor:disabled?'default':'pointer',
                    opacity:disabled?.22:1,
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

          {/* bottom tick index */}
          <div style={{
            position:'absolute', bottom:0, left:0, right:0, zIndex:19,
            display:'flex', alignItems:'center', justifyContent:'space-between',
            padding:'14px clamp(22px,3.4vw,56px) 18px',
          }}>
            <div style={{ flex:1, display:'grid', gridTemplateColumns:`repeat(${books.length},1fr)`, alignItems:'flex-end', height:18, maxWidth:520 }}>
              {books.map((_,i)=>{
                const inView = i===activeIdx
                return (
                  <button key={i} onClick={()=>selectBook(i)}
                    aria-label={`Go to book ${i+1}`}
                    style={{ position:'relative', display:'block', width:'100%', height:18, padding:0, background:'transparent', border:'none', cursor:'pointer' }}>
                    <span style={{
                      position:'absolute', bottom:2, left:'50%', transform:'translateX(-50%)',
                      width:inView?2:1, height:inView?14:6,
                      background:'#25231f', opacity:inView?.82:.22,
                      transition:'all .22s ease', borderRadius:1, display:'block',
                    }}/>
                  </button>
                )
              })}
            </div>
            <div className="shelf-bottom-help" style={{ display:'flex', alignItems:'center', gap:10, fontFamily:'Inter,sans-serif', fontSize:'7px', fontWeight:600, letterSpacing:'.14em', color:'rgba(37,35,31,.4)', whiteSpace:'nowrap' }}>
              <span>SCROLL</span>
              <span style={{ width:2, height:2, borderRadius:'50%', background:'currentColor', display:'inline-block' }}/>
              <span>CLICK</span>
              <span style={{ width:2, height:2, borderRadius:'50%', background:'currentColor', display:'inline-block' }}/>
              <span>ARROW KEYS</span>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

// force deploy