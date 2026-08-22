"use client"
import { useState, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookCarousel from '../components/BookCarousel'
import BookShelf from '../components/BookShelf'
import Grain from '../components/Grain'
import HeroBookMockup from '../components/HeroBookMockup'
import { useReveal } from '../hooks/useReveal'

/* ── shared container ── */
const W: React.CSSProperties = {
  maxWidth: 1280,
  margin: '0 auto',
  padding: '0 clamp(1.5rem, 5.5vw, 5rem)',
}

/* ── label / eyebrow ── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: 'block',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.625rem',
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#c9a227',
    }}>{children}</span>
  );
}

/* ── thin rule ── */
function Rule({ style }: { style?: React.CSSProperties }) {
  return <div style={{ height: 1, background: 'rgba(14,12,10,0.10)', ...style }} />
}

/* ── Reveal wrapper ── */
function Reveal({ children, style, delay = 0 }: {
  children: React.ReactNode
  style?: React.CSSProperties
  delay?: number
}) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal"
      style={{ transitionDelay: `${delay}s`, ...style }}>
      {children}
    </div>
  )
}

/* ─────────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────────── */
function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')

  const validate = () => {
    const e = { name: '', email: '', message: '' }
    if (!fields.name.trim()) e.name = 'Required'
    if (!fields.email.trim()) e.email = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Invalid email'
    if (!fields.message.trim()) e.message = 'Required'
    setErrors(e)
    return !e.name && !e.email && !e.message
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...fields }).toString(),
      })
      setStatus(res.ok ? 'ok' : 'err')
      if (res.ok) setFields({ name: '', email: '', message: '' })
    } catch { setStatus('err') }
  }

  const inputBase: React.CSSProperties = {
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(14,12,10,0.15)',
    padding: '0.75rem 0',
    fontFamily: 'Inter, sans-serif',
    fontSize: '0.9375rem',
    fontWeight: 300,
    color: '#0e0c0a',
    width: '100%',
    outline: 'none',
    borderRadius: 0,
    WebkitAppearance: 'none',
  }

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={submit} noValidate
      style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      <input type="hidden" name="form-name" value="contact" />

      {(['name', 'email', 'message'] as const).map(f => (
        <div key={f}>
          <label style={{
            display: 'block',
            fontSize: '0.5625rem',
            fontWeight: 500,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(14,12,10,0.38)',
            marginBottom: '0.5rem',
          }}>{f.charAt(0).toUpperCase() + f.slice(1)}</label>
          {f === 'message'
            ? <textarea value={fields.message} rows={4}
              onChange={e => setFields(p => ({ ...p, message: e.target.value }))}
              onFocus={e => (e.target.style.borderBottomColor = '#c9a227')}
              onBlur={e => (e.target.style.borderBottomColor = 'rgba(14,12,10,0.15)')}
              style={{ ...inputBase, resize: 'none', minHeight: 100 }} />
            : <input type={f === 'email' ? 'email' : 'text'} value={fields[f]}
              onChange={e => setFields(p => ({ ...p, [f]: e.target.value }))}
              onFocus={e => (e.target.style.borderBottomColor = '#c9a227')}
              onBlur={e => (e.target.style.borderBottomColor = 'rgba(14,12,10,0.15)')}
              style={inputBase} />
          }
          {errors[f] && <span style={{ fontSize: '0.6875rem', color: '#c0634e', display: 'block', marginTop: '0.375rem' }}>{errors[f]}</span>}
        </div>
      ))}

      <button type="submit" disabled={status === 'sending'}
        style={{
          alignSelf: 'flex-start',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.6875rem',
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: '#0a0a0a',
          background: status === 'sending' ? 'rgba(201,162,39,0.7)' : '#c9a227',
          border: '1px solid #c9a227',
          padding: '1em 2.5em',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          opacity: status === 'sending' ? 0.7 : 1,
          cursor: status === 'sending' ? 'not-allowed' : 'pointer',
          transform: status === 'sending' ? 'scale(0.98)' : 'scale(1)',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={e => {
          if (status !== 'sending') {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#c9a227'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(201,162,39,0.2)'
          }
        }}
        onMouseLeave={e => {
          if (status !== 'sending') {
            e.currentTarget.style.background = '#c9a227'
            e.currentTarget.style.color = '#0a0a0a'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }
        }}>
        {status === 'sending' ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{
              display: 'inline-block',
              width: 12, height: 12,
              border: '2px solid currentColor',
              borderTopColor: 'transparent',
              borderRadius: '50%',
              animation: 'spin 0.6s linear infinite',
            }} />
            Sending…
          </span>
        ) : 'Send Message'}
      </button>

      {status === 'ok' && (
        <div style={{
          fontSize: '0.8125rem', color: '#5a9e5e',
          fontStyle: 'italic', fontFamily: "'Fraunces', serif",
          padding: '1rem 1.25rem',
          background: 'rgba(90,158,94,0.08)',
          borderLeft: '3px solid #5a9e5e',
          borderRadius: '0 6px 6px 0',
          animation: 'slideInLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          <strong>Received!</strong> I'll be in touch soon.
        </div>
      )}
      {status === 'err' && (
        <div style={{
          fontSize: '0.8125rem', color: '#c0634e',
          padding: '1rem 1.25rem',
          background: 'rgba(192,99,78,0.08)',
          borderLeft: '3px solid #c0634e',
          borderRadius: '0 6px 6px 0',
          animation: 'slideInLeft 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          <strong>Oops!</strong> Something went wrong. Please email{' '}
          <a href="mailto:yogolsachin@gmail.com" style={{
            color: '#c9a227', textDecoration: 'underline',
            fontWeight: 500,
          }}>yogolsachin@gmail.com</a> directly.
        </div>
      )}
    </form>
  )
}

/* ─────────────────────────────────────────────────
   HOME PAGE
───────────────────────────────────────────────── */
export default function Home() {
  /* Scroll indicator visibility */
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const aboutPortrait = useReveal()
  const aboutText = useReveal()
  const contactLeft = useReveal()
  const contactRight = useReveal()

  return (
    <div style={{ background: '#f4f1ea', color: '#0e0c0a' }}>
      <Grain />
      <Header />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        height: '100svh',
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f4f1ea',
      }} className="hero-container">
        <style>{`
          @media (max-width: 768px) { .hero-content { flex-direction: column-reverse !important; } }
        `}</style>
        {/* Top metadata strip */}
        <div style={{
          position: 'absolute', top: 88, left: 0, right: 0,
          zIndex: 2,
          animation: 'fadeIn 1s 0.4s both',
        }}>
          <div style={{ ...W, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.625rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(14,12,10,0.40)' }}>
              Kathmandu, Nepal
            </span>
            <span style={{ fontSize: '0.625rem', letterSpacing: '0.14em', color: 'rgba(14,12,10,0.30)', fontFamily: "'Fraunces', serif", fontStyle: 'italic' }}>
              Est. 2010
            </span>
          </div>
        </div>

        <div className="hero-content" style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem',
          width: '100%',
          ...W,
          paddingTop: '6rem',
        }}>
          {/* Left side text */}
          <div className="hero-left" style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
          }}>
            <h1 style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(2.5rem,6vw,5rem)',
              fontWeight: 200,
              lineHeight: 1,
              color: '#0e0c0a',
            }}>
              Book cover design <em style={{ fontStyle: 'italic' }}>&amp; visual identity</em>
            </h1>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(0.875rem,1.2vw,1rem)',
              color: 'rgba(14,12,10,0.6)',
              maxWidth: '40ch',
            }}>
              Crafting cohesive visual systems that bring stories to life.
            </p>
          </div>
          {/* Right side rotating book frame */}
          <div className="hero-right" style={{
            alignSelf: 'flex-end',
            marginTop: 'auto',
          }}>
            <HeroBookMockup />
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          opacity: scrolled ? 0 : 1,
          transition: 'opacity 0.5s',
        }}>
          <span style={{ fontSize: '0.5625rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(14,12,10,0.35)' }}>Scroll</span>
          <div style={{
            width: 1, height: 40,
            background: 'linear-gradient(to bottom, rgba(201,162,39,0.7), rgba(201,162,39,0))',
            animation: 'scrollBounce 2s ease-in-out infinite',
          }} />
        </div>

        {/* Gold accent line */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
          background: 'linear-gradient(to right, transparent, rgba(201,162,39,0.3) 30%, rgba(201,162,39,0.3) 70%, transparent)',
          zIndex: 2,
          animation: 'fadeIn 1.2s 0.8s both',
        }} />
      </section>

      {/* ══════════════════════════════════════════
          BOOKSHELF
      ══════════════════════════════════════════ */}
      <section style={{ borderTop: '1px solid rgba(14,12,10,0.08)' }}>
        <BookShelf />
      </section>

      {/* ══════════════════════════════════════════
          BOOK COVERS
      ══════════════════════════════════════════ */}
      <section style={{
        padding: 'clamp(6rem,12vw,10rem) 0',
        borderTop: '1px solid rgba(14,12,10,0.08)',
        background: 'linear-gradient(to bottom, #f4f1ea 0%, #f8f6f0 100%)',
      }}>
        <div style={W}>
          <Reveal>
            <BookCarousel />
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ABOUT
      ══════════════════════════════════════════ */}
      <section id="about" style={{
        padding: 'clamp(6rem,12vw,10rem) 0',
        borderTop: '1px solid rgba(14,12,10,0.08)',
        background: '#f4f1ea',
      }}>
        <div style={W}>
          <AboutSection revealPortrait={aboutPortrait} revealText={aboutText} />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════ */}
      <section id="contact" style={{
        padding: 'clamp(6rem,12vw,10rem) 0',
        borderTop: '1px solid rgba(14,12,10,0.08)',
        background: 'linear-gradient(135deg, #f4f1ea 0%, #f8f5ed 100%)',
      }}>
        <div style={W}>
          {/* Big typographic header */}
          <div ref={contactLeft} className="reveal" style={{ marginBottom: 'clamp(4rem,8vw,7rem)' }}>
            <p style={{
              fontFamily: "'Fraunces', serif",
              fontSize: 'clamp(3.5rem, 9vw, 8rem)',
              fontWeight: 200,
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: '#0e0c0a',
            }}>
              Let's make<br />
              <span style={{
                color: '#c9a227',
                display: 'inline-block',
                animation: 'subtleFloat 3s ease-in-out infinite',
              }}>something.</span>
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: 'clamp(3rem, 7vw, 8rem)',
            alignItems: 'start',
          }}>
            {/* Left col */}
            <div ref={contactRight} className="reveal">
              <Label>Contact</Label>
              <p style={{
                fontSize: 'clamp(0.9375rem, 1.1vw, 1rem)',
                color: 'rgba(14,12,10,0.52)',
                lineHeight: 1.75,
                margin: '1.25rem 0 2rem',
                maxWidth: '34ch',
              }}>
                For new projects, brand commissions, or press — write directly.
              </p>
              {/* PLACEHOLDER: update email */}
              <a href="mailto:yogolsachin@gmail.com"
                style={{
                  display: 'block',
                  fontFamily: "'Fraunces', serif",
                  fontSize: 'clamp(1rem, 1.8vw, 1.375rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.01em',
                  color: '#0e0c0a',
                  borderBottom: '1px solid rgba(14,12,10,0.15)',
                  paddingBottom: '1.25rem',
                  marginBottom: '1.5rem',
                  transition: 'color 0.3s, border-color 0.3s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = '#c9a227'; e.currentTarget.style.borderBottomColor = '#c9a227' }}
                onMouseLeave={e => { e.currentTarget.style.color = '#0e0c0a'; e.currentTarget.style.borderBottomColor = 'rgba(14,12,10,0.15)' }}>
                yogolsachin@gmail.com
              </a>
              {/* PLACEHOLDER: update Instagram */}
              <a href="https://instagram.com/sachinyagol" target="_blank" rel="noopener noreferrer"
                style={{
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(14,12,10,0.38)',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#c9a227')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(14,12,10,0.38)')}>
                Instagram ↗
              </a>
            </div>

            {/* Form */}
            <div style={{ transitionDelay: '0.1s' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Responsive breakpoints */}
      <style>{`
        @media (min-width: 768px) {
          .about-inner { grid-template-columns: 340px 1fr !important; }
        }
        @media (max-width: 1024px) {
          .hero-book-display { display: none !important; }
        }

        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}

/* ─────────────────────────────────────────────────
   ABOUT SECTION — needs refs passed in
───────────────────────────────────────────────── */
function AboutSection({
  revealPortrait,
  revealText,
}: {
  revealPortrait: React.RefObject<HTMLDivElement | null>
  revealText: React.RefObject<HTMLDivElement | null>
}) {
  return (
    <>
      <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
        <Label>About</Label>
      </div>

      <div
        className="about-inner"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(3rem, 7vw, 8rem)',
          alignItems: 'start',
        }}
      >
        {/* Portrait */}
        <div ref={revealPortrait} className="reveal">
          {/* PLACEHOLDER: replace with Sachin's portrait (800×1000px) */}
          <div style={{ overflow: 'hidden', background: '#e8e3da', aspectRatio: '4/5', maxWidth: 400 }}>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&auto=format"
              alt="Sachin Yagol Shrestha — replace with final portrait"
              loading="lazy"
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                filter: 'grayscale(20%) brightness(0.92)',
                transition: 'filter 0.9s, transform 0.9s',
              }}
              onMouseEnter={e => { e.currentTarget.style.filter = 'grayscale(0%) brightness(1)'; e.currentTarget.style.transform = 'scale(1.02)' }}
              onMouseLeave={e => { e.currentTarget.style.filter = 'grayscale(20%) brightness(0.92)'; e.currentTarget.style.transform = 'scale(1)' }}
            />
          </div>
        </div>

        {/* Text */}
        <div ref={revealText} className="reveal" style={{ transitionDelay: '0.15s' }}>
          {/* Pull quote */}
          <blockquote style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(1.375rem, 2.8vw, 2rem)',
            fontWeight: 200,
            fontStyle: 'italic',
            lineHeight: 1.35,
            letterSpacing: '-0.02em',
            color: '#0e0c0a',
            borderLeft: '2px solid #c9a227',
            paddingLeft: '1.5rem',
            margin: '0 0 2.5rem',
            maxWidth: '36ch',
          }}>
            "Design should feel inevitable.<br />Not clever — certain."
          </blockquote>

          {/* Bio */}
          {/* PLACEHOLDER: replace with Sachin's actual words */}
          <p style={{
            fontSize: 'clamp(0.9375rem, 1.2vw, 1rem)',
            lineHeight: 1.8,
            color: 'rgba(14,12,10,0.65)',
            marginBottom: '1rem',
            maxWidth: '52ch',
          }}>
            I'm a graphic designer and art director based in Kathmandu, Nepal. Over fifteen years I've built visual systems for airlines, spirits, publishers, and cultural institutions — work that endures because it's grounded in real thinking, not just aesthetic instinct.
          </p>
          <p style={{
            fontSize: 'clamp(0.9375rem, 1.2vw, 1rem)',
            lineHeight: 1.8,
            color: 'rgba(14,12,10,0.45)',
            maxWidth: '52ch',
            marginBottom: '3rem',
          }}>
            Born and working in Nepal, I bring a specific point of view to every brief — one shaped by the visual culture, history, and ambition of this place.
          </p>

          {/* Disciplines */}
          <div style={{ marginBottom: '2.5rem' }}>
            <span style={{
              fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.2em',
              textTransform: 'uppercase', color: 'rgba(14,12,10,0.35)',
              display: 'block', marginBottom: '0.875rem',
            }}>Disciplines</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Brand Identity', 'Visual Systems', 'Typography', 'Packaging', 'Book Covers', 'Art Direction'].map(d => (
                <span key={d} style={{
                  fontSize: '0.75rem',
                  color: 'rgba(14,12,10,0.50)',
                  border: '1px solid rgba(14,12,10,0.12)',
                  padding: '0.35em 0.85em',
                  letterSpacing: '0.04em',
                  transition: 'border-color 0.3s, color 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,162,39,0.5)'; e.currentTarget.style.color = '#c9a227' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(14,12,10,0.12)'; e.currentTarget.style.color = 'rgba(14,12,10,0.50)' }}>
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Clients section removed */}
        </div>
      </div>
    </>
  )
}
