"use client"
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { PUBLISHERS, type Publisher } from '../data/books'

const CATEGORIES = [
  { label: 'Publication', key: 'publication' },
  { label: 'Award',       key: 'award'       },
  { label: 'Best Seller', key: 'best-seller' },
  { label: 'Recent',      key: 'recent'      },
] as const

const PUB_KEYS = Object.keys(PUBLISHERS) as Publisher[]

/* ── Enhanced circular publisher logo with tooltip ── */
function PubCircle({ pub, size = 56, onClick }: { pub: Publisher; size?: number; onClick: () => void }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={`View ${PUBLISHERS[pub].label} books`}
      style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        background: 'none', border: 'none', cursor: 'pointer', padding: 0,
        position: 'relative',
      }}
    >
      <div style={{
        width: size, height: size, borderRadius: '50%', overflow: 'hidden',
        border: `2px solid ${hov ? '#c9a227' : 'rgba(14,12,10,0.08)'}`,
        background: '#fff',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: hov
          ? '0 8px 24px rgba(201,162,39,0.24), 0 2px 8px rgba(201,162,39,0.12)'
          : '0 2px 8px rgba(14,12,10,0.06)',
        transform: hov ? 'translateY(-4px) scale(1.05)' : 'scale(1)',
        flexShrink: 0,
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PUBLISHERS[pub].logo}
          alt={PUBLISHERS[pub].label}
          style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            filter: hov ? 'none' : 'saturate(0.9)',
            transition: 'filter 0.3s',
          }}
        />
      </div>
      <span style={{
        fontFamily: 'Inter, sans-serif', fontSize: '0.5rem', fontWeight: 500,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: hov ? '#c9a227' : 'rgba(14,12,10,0.45)',
        transition: 'color 0.3s', textAlign: 'center',
        maxWidth: size + 12, lineHeight: 1.3,
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
      }}>
        {PUBLISHERS[pub].label}
      </span>
      
      {/* Tooltip on hover */}
      {hov && (
        <span style={{
          position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%) translateY(-100%)',
          background: '#0e0c0a', color: '#f4f1ea', padding: '0.35rem 0.75rem',
          borderRadius: 6, fontSize: '0.6875rem', fontWeight: 400, letterSpacing: '0.02em',
          whiteSpace: 'nowrap', boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          pointerEvents: 'none', zIndex: 1000,
          animation: 'tooltipFadeIn 0.2s ease-out',
        }}>
          {PUBLISHERS[pub].label}
          <span style={{
            position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)',
            width: 0, height: 0,
            borderLeft: '4px solid transparent',
            borderRight: '4px solid transparent',
            borderTop: '4px solid #0e0c0a',
          }} />
        </span>
      )}
    </button>
  )
}

export default function Header() {
  const [scrolled,    setScrolled   ] = useState(false)
  const [menuOpen,    setMenuOpen   ] = useState(false)
  const [megaOpen,    setMegaOpen   ] = useState(false)
  const [mobileBooks, setMobileBooks] = useState(false)
  const [mobilePub,   setMobilePub  ] = useState(false)
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname  = usePathname()
  const router    = useRouter()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
    setMegaOpen(false)
    setMobileBooks(false)
    setMobilePub(false)
  }, [pathname])

  const openMega  = () => { if (megaTimer.current) clearTimeout(megaTimer.current); setMegaOpen(true) }
  const closeMega = () => { megaTimer.current = setTimeout(() => setMegaOpen(false), 200) }

  const go = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith('#')) {
      if (pathname !== '/') {
        router.push('/')
        setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 500)
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const navLinkStyle = (active = false): React.CSSProperties => ({
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.6875rem',
    fontWeight: 400,
    letterSpacing: '0.16em',
    textTransform: 'uppercase',
    color: active ? '#0e0c0a' : 'rgba(14,12,10,0.42)',
    textDecoration: 'none',
    transition: 'color 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
  })

  const isBooksActive = pathname.startsWith('/books')
  const isAdvActive   = pathname.startsWith('/advertisement')

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 600,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        background: scrolled || megaOpen ? 'rgba(244,241,234,0.98)' : 'rgba(244,241,234,0.6)',
        backdropFilter: scrolled || megaOpen ? 'blur(24px)' : 'blur(12px)',
        WebkitBackdropFilter: scrolled || megaOpen ? 'blur(24px)' : 'blur(12px)',
        borderBottom: scrolled || megaOpen ? '1px solid rgba(14,12,10,0.1)' : '1px solid rgba(14,12,10,0.04)',
        boxShadow: scrolled ? '0 4px 24px rgba(14,12,10,0.04)' : 'none',
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          padding: '0 clamp(1.5rem, 5.5vw, 5rem)',
          height: 68,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>

          {/* ── Left: logo + Books + Advertisement ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            <Link href="/" style={{
              fontFamily: "'Fraunces', serif",
              fontSize: '1.0625rem', fontWeight: 300, letterSpacing: '0.015em',
              color: '#0e0c0a', textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'inline-block',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#c9a227'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#0e0c0a'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
              Sachin Yagol
            </Link>

            {/* Desktop: Books trigger */}
            <div
              className="hdr-nav"
              style={{ display: 'none', position: 'relative' }}
              onMouseEnter={openMega}
              onMouseLeave={closeMega}
            >
              <button
                style={{
                  ...navLinkStyle(isBooksActive),
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  paddingBottom: '0.25rem',
                  borderBottom: megaOpen ? '2px solid #c9a227' : '2px solid transparent',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#0e0c0a')}
                onMouseLeave={e => (e.currentTarget.style.color = isBooksActive ? '#0e0c0a' : 'rgba(14,12,10,0.42)')}
                onClick={() => router.push('/books')}
                aria-expanded={megaOpen}
                aria-haspopup="true">
                Books
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none"
                  style={{
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: megaOpen ? 'rotate(180deg)' : 'none',
                    opacity: 0.6,
                  }}>
                  <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* ── Enhanced Mega-menu panel ── */}
              <div
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
                style={{
                  position: 'fixed', top: 68, left: 0, right: 0,
                  background: 'rgba(244,241,234,0.98)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  borderBottom: '1px solid rgba(14,12,10,0.08)',
                  boxShadow: '0 12px 40px rgba(14,12,10,0.08)',
                  zIndex: 590,
                  pointerEvents: megaOpen ? 'auto' : 'none',
                  opacity: megaOpen ? 1 : 0,
                  transform: megaOpen ? 'translateY(0)' : 'translateY(-12px)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                }}>
                <div style={{
                  maxWidth: 1280, margin: '0 auto',
                  padding: '2.5rem clamp(1.5rem, 5.5vw, 5rem) 3rem',
                }}>

                  {/* Publication label with count */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    <span style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '0.5625rem', fontWeight: 600,
                      letterSpacing: '0.22em', textTransform: 'uppercase',
                      color: '#c9a227',
                    }}>Publishers</span>
                    <span style={{
                      fontSize: '0.5rem', color: 'rgba(14,12,10,0.35)',
                      padding: '0.2em 0.6em', background: 'rgba(14,12,10,0.04)',
                      borderRadius: 12, fontWeight: 500,
                    }}>{PUB_KEYS.length}</span>
                  </div>

                  {/* Circular logo grid */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '2.5rem',
                    maxWidth: 900,
                  }}>
                    {PUB_KEYS.map((p, i) => (
                      <div
                        key={p}
                        style={{
                          animation: megaOpen ? `slideInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.03}s both` : 'none',
                        }}
                      >
                        <PubCircle
                          pub={p}
                          size={58}
                          onClick={() => { closeMega(); router.push(`/books/publication/${p}`) }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Elegant divider */}
                  <div style={{
                    height: 1,
                    background: 'linear-gradient(to right, transparent, rgba(14,12,10,0.12) 20%, rgba(14,12,10,0.12) 80%, transparent)',
                    marginBottom: '2rem',
                  }} />

                  {/* Category links */}
                  <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
                    {CATEGORIES.slice(1).map((c, i) => (
                      <Link key={c.key} href={`/books/${c.key}`}
                        style={{
                          fontFamily: "'Fraunces', serif",
                          fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
                          fontWeight: 200, letterSpacing: '-0.02em',
                          color: 'rgba(14,12,10,0.35)',
                          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                          textDecoration: 'none',
                          display: 'inline-block',
                          animation: megaOpen ? `fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${0.2 + i * 0.05}s both` : 'none',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.color = '#c9a227'
                          e.currentTarget.style.transform = 'translateX(4px)'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.color = 'rgba(14,12,10,0.35)'
                          e.currentTarget.style.transform = 'translateX(0)'
                        }}>
                        {c.label}
                        <span style={{
                          marginLeft: '0.5rem',
                          fontSize: '0.7rem',
                          opacity: 0.4,
                        }}>→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Advertisement */}
            <Link href="/advertisement" className="hdr-nav"
              style={{ ...navLinkStyle(isAdvActive), display: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0e0c0a')}
              onMouseLeave={e => (e.currentTarget.style.color = isAdvActive ? '#0e0c0a' : 'rgba(14,12,10,0.42)')}>
              Advertisement
            </Link>
          </div>

          {/* ── Right: About + Contact ── */}
          <nav className="hdr-nav" style={{ display: 'none' }}>
            <ul style={{ display: 'flex', gap: '2rem', margin: 0 }}>
              {[{ label: 'About', href: '#about' }, { label: 'Contact', href: '#contact' }].map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    onClick={e => { e.preventDefault(); go(l.href) }}
                    style={navLinkStyle()}
                    onMouseEnter={e => (e.currentTarget.style.color = '#0e0c0a')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(14,12,10,0.42)')}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Enhanced Hamburger ── */}
          <button className="hdr-burger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              display: 'flex', flexDirection: 'column', gap: 6, padding: 10,
              background: 'none', border: 'none', color: '#0e0c0a',
              cursor: 'pointer', position: 'relative', zIndex: 1,
            }}>
            <span style={{
              display: 'block', width: 24, height: 2, background: 'currentColor',
              borderRadius: 2,
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s',
              transform: menuOpen ? 'translateY(4px) rotate(45deg)' : 'none',
            }} />
            <span style={{
              display: 'block', width: 24, height: 2, background: 'currentColor',
              borderRadius: 2,
              transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s',
              transform: menuOpen ? 'translateY(-4px) rotate(-45deg)' : 'none',
            }} />
          </button>
        </div>
      </header>

      {/* ── Enhanced Mobile overlay ── */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 500,
        background: '#f4f1ea',
        display: 'flex', flexDirection: 'column',
        overflowY: 'auto',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        padding: '100px clamp(1.5rem,7vw,4rem) 3rem',
      }}>
        <ul style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>

          {/* Books accordion */}
          <li style={{
            animation: menuOpen ? 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.05s both' : 'none',
          }}>
            <button
              onClick={() => setMobileBooks(o => !o)}
              style={{
                fontFamily: "'Fraunces', serif", fontSize: 'clamp(2.25rem,9vw,3.5rem)',
                fontWeight: 200, letterSpacing: '-0.03em',
                color: mobileBooks ? '#0e0c0a' : 'rgba(14,12,10,0.38)',
                background: 'none', border: 'none', padding: '0.25rem 0',
                display: 'flex', alignItems: 'center', gap: '1rem',
                transition: 'color 0.3s', width: '100%', textAlign: 'left', cursor: 'pointer',
              }}>
              Books
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none"
                style={{
                  transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: mobileBooks ? 'rotate(180deg)' : 'none',
                  opacity: 0.5,
                }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {mobileBooks && (
              <ul style={{
                margin: '1rem 0 1.5rem 0',
                display: 'flex', flexDirection: 'column', gap: '0.25rem',
              }}>
                {/* Publication sub-accordion */}
                <li>
                  <button
                    onClick={() => setMobilePub(o => !o)}
                    style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600,
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: '#c9a227', background: 'none', border: 'none', padding: '0.75rem 0',
                      display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer',
                    }}>
                    Publishers
                    <svg width="8" height="5" viewBox="0 0 8 5" fill="none"
                      style={{
                        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                        transform: mobilePub ? 'rotate(180deg)' : 'none',
                        opacity: 0.7,
                      }}>
                      <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {mobilePub && (
                    <div style={{
                      margin: '1rem 0 1.5rem 0',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(65px, 1fr))',
                      gap: '1.25rem 1rem',
                    }}>
                      {PUB_KEYS.map(p => (
                        <Link
                          key={p}
                          href={`/books/publication/${p}`}
                          style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center',
                            gap: '0.45rem', textDecoration: 'none',
                          }}
                        >
                          <div style={{
                            width: 50, height: 50, borderRadius: '50%', overflow: 'hidden',
                            border: '2px solid rgba(14,12,10,0.08)',
                            background: '#fff',
                            boxShadow: '0 2px 8px rgba(14,12,10,0.06)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                          }}
                            onTouchStart={e => {
                              e.currentTarget.style.transform = 'scale(0.95)'
                            }}
                            onTouchEnd={e => {
                              e.currentTarget.style.transform = 'scale(1)'
                            }}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={PUBLISHERS[p].logo}
                              alt={PUBLISHERS[p].label}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                            />
                          </div>
                          <span style={{
                            fontFamily: 'Inter, sans-serif', fontSize: '0.45rem', fontWeight: 500,
                            letterSpacing: '0.08em', textTransform: 'uppercase',
                            color: 'rgba(14,12,10,0.50)', textAlign: 'center',
                            maxWidth: 58, lineHeight: 1.25,
                          }}>
                            {PUBLISHERS[p].label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </li>

                {CATEGORIES.slice(1).map(c => (
                  <li key={c.key}>
                    <Link href={`/books/${c.key}`}
                      style={{
                        fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 500,
                        letterSpacing: '0.16em', textTransform: 'uppercase',
                        color: 'rgba(14,12,10,0.50)', display: 'block', padding: '0.75rem 0',
                        textDecoration: 'none', transition: 'color 0.3s',
                      }}
                      onTouchStart={e => (e.currentTarget.style.color = '#c9a227')}
                      onTouchEnd={e => (e.currentTarget.style.color = 'rgba(14,12,10,0.50)')}>
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li style={{
            animation: menuOpen ? 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both' : 'none',
          }}>
            <Link href="/advertisement"
              style={{
                fontFamily: "'Fraunces', serif", fontSize: 'clamp(2.25rem,9vw,3.5rem)',
                fontWeight: 200, letterSpacing: '-0.03em', color: 'rgba(14,12,10,0.38)',
                display: 'block', padding: '0.25rem 0', textDecoration: 'none',
              }}>
              Advertisement
            </Link>
          </li>

          <li style={{
            marginTop: '2rem', paddingTop: '2rem',
            borderTop: '1px solid rgba(14,12,10,0.08)',
            animation: menuOpen ? 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both' : 'none',
          }}>
            <a href="#about"
              onClick={e => { e.preventDefault(); go('#about') }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 500,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(14,12,10,0.42)', display: 'block', padding: '0.75rem 0',
                textDecoration: 'none', transition: 'color 0.3s',
              }}>
              About
            </a>
          </li>
          <li style={{
            animation: menuOpen ? 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both' : 'none',
          }}>
            <a href="#contact"
              onClick={e => { e.preventDefault(); go('#contact') }}
              style={{
                fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', fontWeight: 500,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: 'rgba(14,12,10,0.42)', display: 'block', padding: '0.75rem 0',
                textDecoration: 'none', transition: 'color 0.3s',
              }}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hdr-nav    { display: flex !important; }
          .hdr-burger { display: none !important; }
        }

        @keyframes tooltipFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(calc(-100% - 4px)); }
          to { opacity: 1; transform: translateX(-50%) translateY(-100%); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
