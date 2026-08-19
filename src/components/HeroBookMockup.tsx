import { useEffect, useState } from 'react';

const DISPLAY_IMAGES = [
  'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1600&auto=format&fit=crop',
];

export default function HeroBookMockup() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (DISPLAY_IMAGES.length <= 1) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DISPLAY_IMAGES.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const pageW = 240;
  const pageH = pageW * 1.4;
  const totalW = pageW * 2 + 2; // both pages + seam

  return (
    <div className="hero-display-wrapper" aria-hidden="true" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1.25rem',
      flexShrink: 0,
    }}>
      {/* Open book container */}
      <div className="hero-open-book" style={{
        perspective: '1200px',
        perspectiveOrigin: '50% 40%',
      }}>
        <div style={{
          position: 'relative',
          width: totalW,
          height: pageH,
          boxShadow: '0 20px 50px rgba(0,0,0,0.18), 0 8px 20px rgba(0,0,0,0.1)',
          borderRadius: '4px',
          display: 'flex',
        }}>
          {/* Single image spanning both pages */}
          <div style={{
            position: 'absolute',
            inset: 0,
            overflow: 'hidden',
            borderRadius: '4px',
            background: '#f8f5ef',
          }}>
            {DISPLAY_IMAGES.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt=""
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: idx === activeIndex ? 1 : 0,
                  transition: 'opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            ))}
          </div>

          {/* Left page overlay — lighting & shadow */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: pageW,
            height: pageH,
            background: 'linear-gradient(to right, rgba(0,0,0,0.06) 0%, transparent 12%, transparent 88%, rgba(0,0,0,0.1) 100%)',
            borderRadius: '4px 0 0 4px',
            pointerEvents: 'none',
            zIndex: 2,
          }} />



          {/* Right page overlay — lighting */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: pageW,
            height: pageH,
            background: 'linear-gradient(to left, rgba(0,0,0,0.04) 0%, transparent 10%, transparent 90%, rgba(0,0,0,0.08) 100%)',
            borderRadius: '0 4px 4px 0',
            pointerEvents: 'none',
            zIndex: 2,
          }} />

          {/* Page curl hint */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 24,
            height: 24,
            background: 'linear-gradient(135deg, transparent 50%, rgba(0,0,0,0.06) 50%)',
            zIndex: 5,
            borderRadius: '0 0 4px 0',
          }} />
        </div>

        {/* Book shadow on surface */}
        <div style={{
          width: totalW,
          height: 12,
          margin: '0 auto',
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, transparent 70%)',
          marginTop: -2,
        }} />
      </div>

      <span style={{
        fontFamily: "'JetBrains Mono', 'SF Mono', monospace",
        fontSize: '0.6875rem',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        color: 'rgba(14, 12, 10, 0.35)',
      }}>
        Book Covers
      </span>

      <style>{`
        @media (max-width: 480px) {
          .hero-open-book {
            transform: scale(0.75);
            transform-origin: center center;
          }
        }
        @media (max-width: 768px) {
          .hero-open-book {
            transform: scale(0.85);
            transform-origin: center center;
          }
        }
      `}</style>
    </div>
  );
}
