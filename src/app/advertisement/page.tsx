"use client"
import { useEffect } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Grain from '../../components/Grain'

export default function Advertisement() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const W: React.CSSProperties = { maxWidth: 1280, margin: '0 auto', padding: '0 clamp(1.5rem,5.5vw,5rem)' }

  return (
    <div style={{ background: '#f4f1ea', minHeight: '100vh' }}>
      <Grain />
      <Header />

      <section style={{ paddingTop: 'calc(68px + clamp(4rem,10vh,7rem))', paddingBottom: 'clamp(6rem,12vw,10rem)' }}>
        <div style={W}>
          <span style={{ display: 'block', fontFamily: 'Inter, sans-serif', fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a227', marginBottom: '1rem' }}>
            Selected Work
          </span>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(3rem,8vw,6rem)', fontWeight: 200, letterSpacing: '-0.04em', lineHeight: 0.95, color: '#0e0c0a', marginBottom: '1.5rem' }}>
            Advertisement
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.9375rem,1.3vw,1.0625rem)', color: 'rgba(14,12,10,0.52)', maxWidth: '48ch', lineHeight: 1.75 }}>
            Campaign design, print advertising, and visual communication for brands across Nepal and the region. Work in progress — check back soon.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
