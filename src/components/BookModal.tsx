import { useEffect } from 'react'

type BookModalProps = {
  book: any // We'll type this better if needed
  onClose: () => void
}

export default function BookModal({ book, onClose }: BookModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(4px)',
        animation: 'fadeIn 0.2s ease-out',
      }}
      onClick={onClose}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          maxWidth: '820px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Book Mockup Area */}
        <div
          style={{
            flex: '0 0 45%',
            backgroundColor: '#eaddc9', // Off-white/beige background
            padding: '2rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* We reuse the Cover or display the image directly with physical book styles */}
          <div
            style={{
              width: '210px',
              aspectRatio: '2/3',
              backgroundColor: book.palette?.bg || '#fff',
              position: 'relative',
              borderRadius: '2px 4px 4px 2px',
              boxShadow: '20px 20px 30px rgba(0,0,0,0.15), -5px 0 15px rgba(0,0,0,0.05)',
              overflow: 'hidden',
              transform: 'perspective(1000px) rotateY(-5deg)',
              transformStyle: 'preserve-3d',
            }}
          >
             <img 
               src={book.imgSrc || book.img} 
               alt={book.title}
               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
             />
             {/* Spine effect */}
             <div style={{
               position: 'absolute', inset: 0,
               background: 'linear-gradient(to right, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.1) 3%, transparent 6%)',
               pointerEvents: 'none',
             }} />
          </div>
        </div>

        {/* Right: Content Area */}
        <div style={{ flex: '1', padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', overflowY: 'auto', maxHeight: '90vh' }}>
          {/* Close button (optional, but good for UX) */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'transparent',
              border: 'none',
              fontSize: '1.25rem',
              cursor: 'pointer',
              color: '#333',
            }}
          >
            &times;
          </button>

          <h2 style={{ 
            fontSize: '1.75rem', 
            fontWeight: 600, 
            color: '#2a4538', // Dark green from the mockup
            marginBottom: '0.2rem',
            fontFamily: "'Fraunces', serif",
            lineHeight: 1.1
          }}>
            {book.title}
          </h2>
          
          {/* Description */}
          <div style={{ marginBottom: '0.2rem' }}>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.4, color: '#666', marginBottom: '0.5rem' }}>
              A compelling literary work exploring themes of love, relationships, politics, and the deeper layers of the human mind. The narrative strives to reflect the realities of our society while inspiring readers to think, feel, and dream of change.
            </p>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.4, color: '#666' }}>
              If you appreciate profound storytelling and vibrant characters, this is a must-read masterpiece.
            </p>
          </div>

          {/* Specifications Table */}
          <div style={{ marginBottom: '0.75rem' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0e0c0a', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
              SPECIFICATIONS
            </h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem' }}>
              <tbody>
                {[
                  { label: 'Author', value: book.author || 'Rabindra Samir' },
                  { label: 'Publication', value: 'Bookhill Publications' },
                  { label: 'ISBN', value: '978-9937-75-05-0' },
                  { label: 'Page Numbers', value: '256 pages' },
                  { label: 'Binding', value: 'Paperback' },
                  { label: 'Published Year', value: book.year || '2024' },
                  { label: 'Category', value: 'Literary / Non-Fiction' },
                  { label: 'Language', value: 'Nepali' },
                  { label: 'Size', value: '130 x 200mm' },
                  { label: 'Award', value: book.awardName || 'N/A' },
                  { label: 'Layout Design', value: 'Umesh Kafle' },
                  { label: 'Collaboration', value: '' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '0.35rem 0.5rem', background: '#eaddc9', color: '#333', width: '35%', fontWeight: 500 }}>
                      {row.label}
                    </td>
                    <td style={{ padding: '0.35rem 0.5rem', color: '#555' }}>
                      {row.value}
                    </td>
                  </tr>
                ))}
                {/* Purchase Link Row */}
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '0.35rem 0.5rem', background: '#eaddc9', color: '#333', width: '35%', fontWeight: 500 }}>
                    Purchase Link
                  </td>
                  <td style={{ padding: '0.35rem 0.5rem', color: '#555' }}>
                    {book.purchaseLink && book.purchaseLink.trim() !== '' ? (
                      <a 
                        href={book.purchaseLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          padding: '0.4rem 0.8rem',
                          background: '#c9a227',
                          color: '#fff',
                          textDecoration: 'none',
                          fontSize: '0.65rem',
                          fontWeight: 600,
                          letterSpacing: '0.05em',
                          borderRadius: '4px',
                          textTransform: 'uppercase',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = '#b8912a'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = '#c9a227'
                        }}
                      >
                        <span>🛒</span>
                        <span>Buy Book</span>
                      </a>
                    ) : (
                      <span style={{ fontSize: '0.7rem', color: '#999', fontStyle: 'italic' }}>
                        Not available
                      </span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Special Printing Effects */}
          {(book.hasSpotUV || book.hasMatteLamination || book.hasFoilEmboss) && (
            <div>
              <h3 style={{ fontSize: '0.85rem', fontWeight: 600, color: '#0e0c0a', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                SPECIAL PRINTING EFFECTS
              </h3>
              <div style={{ display: 'flex', gap: '1.5rem', textAlign: 'center' }}>
                {book.hasSpotUV && (
                  <div>
                    <img src="/logo/Spot UV.png" alt="Spot UV" style={{ width: '48px', height: '48px', margin: '0 auto 0.25rem', display: 'block', objectFit: 'contain' }} />
                    <div style={{ fontSize: '0.6rem', color: '#333', lineHeight: 1.1 }}>Spot UV</div>
                  </div>
                )}
                {book.hasMatteLamination && (
                  <div>
                    <img src="/logo/Matte Lamination.png" alt="Matte Lamination" style={{ width: '48px', height: '48px', margin: '0 auto 0.25rem', display: 'block', objectFit: 'contain' }} />
                    <div style={{ fontSize: '0.6rem', color: '#333', lineHeight: 1.1 }}>Matte<br/>Lamination</div>
                  </div>
                )}
                {book.hasFoilEmboss && (
                  <div>
                    <img src="/logo/Foil Emboss.png" alt="Foil Emboss" style={{ width: '48px', height: '48px', margin: '0 auto 0.25rem', display: 'block', objectFit: 'contain' }} />
                    <div style={{ fontSize: '0.6rem', color: '#333', lineHeight: 1.1 }}>Foil<br/>Emboss</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
