"use client"
import { useState, useEffect, useRef } from 'react'
import { PUBLISHERS, type Publisher } from '../../data/books'

type BookRecord = {
  id: string
  title: string
  size: string
  isbn: string
  author: string
  genre: string
  layoutDesigner: string
  collaboratorArtist: string
  description: string
  coverImageUrl: string
  publication: string
  hasSpotUV: boolean
  hasMatteLamination: boolean
  hasFoilEmboss: boolean
  isBestSeller: boolean
  isAwardWinner: boolean
  awardName: string
  purchaseLink: string
  createdAt: string
}

const PUBLICATIONS = Object.keys(PUBLISHERS).map(key => ({
  value: key,
  label: `${PUBLISHERS[key as Publisher].label} ${PUBLISHERS[key as Publisher].short ? `[${PUBLISHERS[key as Publisher].short}]` : ''}`,
}))

const empty = {
  title: '', size: '', isbn: '', author: '', genre: '',
  layoutDesigner: '', collaboratorArtist: '', description: '',
  coverImageUrl: '', publication: 'bh',
  hasSpotUV: false, hasMatteLamination: false, hasFoilEmboss: false,
  isBestSeller: false, isAwardWinner: false, awardName: '',
  purchaseLink: '',
}

export default function AdminPage() {
  const [books, setBooks] = useState<BookRecord[]>([])
  const [form, setForm] = useState(empty)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [emailInput, setEmailInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (emailInput === 'yogolsachin@gmail.com' && passwordInput === 'Sachin@Yogal2026!') {
      setIsAuthenticated(true)
      setMessage(null)
    } else {
      setMessage({ type: 'error', text: 'Incorrect email or password' })
    }
  }

  const fetchBooks = () => {
    fetch('/api/books').then(r => r.json()).then(setBooks).catch(console.error)
  }

  useEffect(() => { fetchBooks() }, [])

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('file', file)
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (data.url) {
        setForm(f => ({ ...f, coverImageUrl: data.url }))
        setMessage({ type: 'success', text: 'Image uploaded!' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Image upload failed' })
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.title.trim()) {
      setMessage({ type: 'error', text: 'Title is required' })
      return
    }

    setSubmitting(true)
    try {
      if (editingId) {
        const res = await fetch(`/api/books/${editingId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (res.ok) {
          const updated = await res.json()
          setBooks(prev => prev.map(b => b.id === editingId ? updated : b))
          setForm(empty)
          setEditingId(null)
          if (fileRef.current) fileRef.current.value = ''
          setMessage({ type: 'success', text: `"${updated.title}" updated!` })
        } else {
          setMessage({ type: 'error', text: 'Failed to update book' })
        }
      } else {
        const res = await fetch('/api/books', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (res.ok) {
          const newBook = await res.json()
          setBooks(prev => [newBook, ...prev])
          setForm(empty)
          if (fileRef.current) fileRef.current.value = ''
          setMessage({ type: 'success', text: `"${newBook.title}" added!` })
        } else {
          setMessage({ type: 'error', text: 'Failed to add book' })
        }
      }
    } catch {
      setMessage({ type: 'error', text: 'Network error' })
    } finally {
      setSubmitting(false)
    }
  }

  const handleEdit = (book: BookRecord) => {
    setEditingId(book.id)
    setForm({
      title: book.title,
      size: book.size,
      isbn: book.isbn,
      author: book.author,
      genre: book.genre,
      layoutDesigner: book.layoutDesigner,
      collaboratorArtist: book.collaboratorArtist,
      description: book.description,
      coverImageUrl: book.coverImageUrl,
      publication: book.publication,
      hasSpotUV: book.hasSpotUV,
      hasMatteLamination: book.hasMatteLamination,
      hasFoilEmboss: book.hasFoilEmboss,
      isBestSeller: book.isBestSeller,
      isAwardWinner: book.isAwardWinner,
      awardName: book.awardName,
      purchaseLink: book.purchaseLink,
    })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCancelEdit = () => {
    setEditingId(null)
    setForm(empty)
    if (fileRef.current) fileRef.current.value = ''
  }

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/books/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setBooks(prev => prev.filter(b => b.id !== id))
        setMessage({ type: 'success', text: 'Book deleted' })
        setDeleteConfirm(null)
      } else {
        setMessage({ type: 'error', text: 'Failed to delete' })
      }
    } catch {
      setMessage({ type: 'error', text: 'Network error' })
    }
  }

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [key]: e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value }))

  /* ── Light theme styles ── */
  const pageStyle: React.CSSProperties = {
    minHeight: '100vh', background: '#f4f1ea', color: '#0e0c0a',
    fontFamily: 'Inter, sans-serif', padding: 'clamp(2rem, 5vw, 4rem) clamp(1.5rem, 5vw, 3rem)',
  }
  const cardStyle: React.CSSProperties = {
    background: '#fff', border: '1px solid rgba(14,12,10,0.08)',
    borderRadius: '12px', padding: 'clamp(2rem, 4vw, 3rem)',
    boxShadow: '0 2px 12px rgba(14,12,10,0.04)',
  }
  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.75rem 1rem', background: '#fff',
    border: '1px solid rgba(14,12,10,0.15)', borderRadius: '8px',
    color: '#0e0c0a', fontSize: '0.875rem', fontFamily: 'Inter, sans-serif',
    outline: 'none', transition: 'border-color 0.2s',
  }
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '0.7rem', fontWeight: 500,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    color: 'rgba(14,12,10,0.5)', marginBottom: '0.5rem',
  }
  const fieldWrap: React.CSSProperties = { marginBottom: '1.5rem' }
  const btnPrimary: React.CSSProperties = {
    width: '100%', padding: '0.875rem', background: '#c9a227',
    color: '#0e0c0a', border: 'none', borderRadius: '8px',
    fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.1em',
    textTransform: 'uppercase', cursor: 'pointer', transition: 'opacity 0.2s',
  }
  const rowStyle: React.CSSProperties = {
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem',
  }

  return (
    <div style={pageStyle}>
      {/* Header */}
      <div style={{ maxWidth: 920, margin: '0 auto 2.5rem', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 200, letterSpacing: '-0.03em', marginBottom: '0.5rem', color: '#0e0c0a',
        }}>
          Book Admin
        </h1>
        <p style={{ fontSize: '0.8125rem', color: 'rgba(14,12,10,0.4)', letterSpacing: '0.04em' }}>
          {editingId ? 'Edit book details' : 'Add new books to the portfolio'}
        </p>
      </div>

      {/* Message Toast */}
      {message && (
        <div style={{
          maxWidth: 920, margin: '0 auto 1.5rem', padding: '1rem 1.25rem',
          borderRadius: '10px', fontSize: '0.8125rem',
          background: message.type === 'success' ? 'rgba(106,185,120,0.12)' : 'rgba(220,53,69,0.12)',
          border: `1px solid ${message.type === 'success' ? 'rgba(106,185,120,0.25)' : 'rgba(220,53,69,0.25)'}`,
          color: message.type === 'success' ? '#2d7a3e' : '#c03030',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          {message.text}
          <button onClick={() => setMessage(null)} style={{
            background: 'none', border: 'none', color: 'inherit', cursor: 'pointer',
            fontSize: '1.25rem', lineHeight: 1, padding: '0 0.25rem',
          }}>×</button>
        </div>
      )}

      {!isAuthenticated ? (
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <div style={cardStyle}>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={fieldWrap}>
                <label style={labelStyle}>Admin Email</label>
                <input 
                  type="email"
                  style={inputStyle} 
                  value={emailInput} 
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter email" 
                  onFocus={e => e.currentTarget.style.borderColor = '#c9a227'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(14,12,10,0.15)'} 
                  autoFocus
                />
              </div>
              <div style={fieldWrap}>
                <label style={labelStyle}>Admin Password</label>
                <input 
                  type="password"
                  style={inputStyle} 
                  value={passwordInput} 
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter password" 
                  onFocus={e => e.currentTarget.style.borderColor = '#c9a227'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(14,12,10,0.15)'} 
                />
              </div>
              <button type="submit" style={btnPrimary}>
                Login
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          {/* Edit mode banner */}
          {editingId && (
            <div style={{
              marginBottom: '1.5rem', padding: '1rem 1.25rem',
              background: 'rgba(201,162,39,0.1)', border: '1px solid rgba(201,162,39,0.25)',
              borderRadius: '10px', fontSize: '0.8125rem', color: '#9d7a1e',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span>✏️ Editing book — changes will update the existing entry</span>
              <button onClick={handleCancelEdit} style={{
                background: 'none', border: '1px solid rgba(201,162,39,0.4)',
                color: '#9d7a1e', cursor: 'pointer', fontSize: '0.7rem', padding: '0.4em 1em',
                borderRadius: '6px', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500,
              }}>Cancel</button>
            </div>
          )}

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            {/* Form */}
            <div style={cardStyle}>
              <form onSubmit={handleSubmit}>
                <div style={fieldWrap}>
                  <label style={labelStyle}>Title *</label>
                  <input style={inputStyle} value={form.title} onChange={set('title')}
                    placeholder="Book title" onFocus={e => e.currentTarget.style.borderColor = '#c9a227'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(14,12,10,0.15)'} />
                </div>

                <div style={rowStyle}>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Author</label>
                    <input style={inputStyle} value={form.author} onChange={set('author')}
                      placeholder="Author name" onFocus={e => e.currentTarget.style.borderColor = '#c9a227'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(14,12,10,0.15)'} />
                  </div>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Genre</label>
                    <input style={inputStyle} value={form.genre} onChange={set('genre')}
                      placeholder="Fiction, Poetry, etc." onFocus={e => e.currentTarget.style.borderColor = '#c9a227'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(14,12,10,0.15)'} />
                  </div>
                </div>

                <div style={rowStyle}>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Size</label>
                    <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.size} onChange={set('size')}
                      onFocus={e => e.currentTarget.style.borderColor = '#c9a227'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(14,12,10,0.15)'}>
                      <option value="">Select size</option>
                      <option value="130mm x 200mm">130mm x 200mm</option>
                      <option value="140mm x 215mm">140mm x 215mm</option>
                    </select>
                  </div>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>ISBN</label>
                    <input style={inputStyle} value={form.isbn} onChange={set('isbn')}
                      placeholder="978-XXXXXXXXXX" onFocus={e => e.currentTarget.style.borderColor = '#c9a227'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(14,12,10,0.15)'} />
                  </div>
                </div>

                <div style={rowStyle}>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Layout Designer</label>
                    <input style={inputStyle} value={form.layoutDesigner} onChange={set('layoutDesigner')}
                      placeholder="Designer name" onFocus={e => e.currentTarget.style.borderColor = '#c9a227'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(14,12,10,0.15)'} />
                  </div>
                  <div style={fieldWrap}>
                    <label style={labelStyle}>Collaborator / Artist</label>
                    <input style={inputStyle} value={form.collaboratorArtist} onChange={set('collaboratorArtist')}
                      placeholder="Artist name" onFocus={e => e.currentTarget.style.borderColor = '#c9a227'}
                      onBlur={e => e.currentTarget.style.borderColor = 'rgba(14,12,10,0.15)'} />
                  </div>
                </div>

                <div style={fieldWrap}>
                  <label style={labelStyle}>Publication</label>
                  <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.publication} onChange={set('publication')}>
                    {PUBLICATIONS.map(p => (
                      <option key={p.value} value={p.value} style={{ background: '#fff', color: '#0e0c0a' }}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div style={fieldWrap}>
                  <label style={labelStyle}>Purchase Link (URL)</label>
                  <input style={inputStyle} value={form.purchaseLink} onChange={set('purchaseLink')}
                    placeholder="https://example.com/buy" onFocus={e => e.currentTarget.style.borderColor = '#c9a227'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(14,12,10,0.15)'} />
                </div>

                <div style={fieldWrap}>
                  <label style={labelStyle}>Printing Effects</label>
                  <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', cursor: 'pointer' }}>
                      <input type="checkbox" checked={form.hasSpotUV} onChange={set('hasSpotUV')} />
                      Spot UV
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', cursor: 'pointer' }}>
                      <input type="checkbox" checked={form.hasMatteLamination} onChange={set('hasMatteLamination')} />
                      Matte Lamination
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', cursor: 'pointer' }}>
                      <input type="checkbox" checked={form.hasFoilEmboss} onChange={set('hasFoilEmboss')} />
                      Foil Emboss
                    </label>
                  </div>
                </div>

                <div style={fieldWrap}>
                  <label style={labelStyle}>Book Tags</label>
                  <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', cursor: 'pointer' }}>
                      <input type="checkbox" checked={form.isBestSeller} onChange={set('isBestSeller')} />
                      Best Seller
                    </label>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', cursor: 'pointer' }}>
                      <input type="checkbox" checked={form.isAwardWinner} onChange={set('isAwardWinner')} />
                      Award Winner
                    </label>
                  </div>
                  {form.isAwardWinner && (
                    <div style={{ marginTop: '0.75rem' }}>
                      <input 
                        style={inputStyle} 
                        value={form.awardName} 
                        onChange={set('awardName')}
                        placeholder="e.g., Madan Puraskar, Sajha Puraskar"
                        onFocus={e => e.currentTarget.style.borderColor = '#c9a227'}
                        onBlur={e => e.currentTarget.style.borderColor = 'rgba(14,12,10,0.15)'} 
                      />
                      <p style={{ fontSize: '0.6875rem', color: 'rgba(14,12,10,0.35)', marginTop: '0.4rem' }}>
                        Specify which award this book received
                      </p>
                    </div>
                  )}
                </div>

                <div style={fieldWrap}>
                  <label style={labelStyle}>Description</label>
                  <textarea style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }}
                    value={form.description} onChange={set('description')}
                    placeholder="Book description..." onFocus={e => e.currentTarget.style.borderColor = '#c9a227'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(14,12,10,0.15)'} />
                </div>

                <div style={fieldWrap}>
                  <label style={labelStyle}>Cover Image</label>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <input ref={fileRef} type="file" accept="image/*" onChange={handleUpload}
                      style={{ ...inputStyle, padding: '0.5rem 0.75rem', flex: 1 }} />
                    {uploading && <span style={{ fontSize: '0.75rem', color: '#c9a227', fontWeight: 500 }}>Uploading…</span>}
                  </div>
                  {form.coverImageUrl && (
                    <div style={{ marginTop: '0.875rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <img src={form.coverImageUrl} alt="Preview" style={{
                        width: 60, height: 80, objectFit: 'cover', borderRadius: '6px',
                        border: '1px solid rgba(14,12,10,0.15)', boxShadow: '0 2px 8px rgba(14,12,10,0.06)',
                      }} />
                      <span style={{ fontSize: '0.75rem', color: 'rgba(14,12,10,0.45)', wordBreak: 'break-all', flex: 1 }}>
                        {form.coverImageUrl}
                      </span>
                    </div>
                  )}
                  <p style={{ fontSize: '0.6875rem', color: 'rgba(14,12,10,0.35)', marginTop: '0.5rem' }}>
                    Or type a path manually:
                  </p>
                  <input style={{ ...inputStyle, marginTop: '0.4rem' }} value={form.coverImageUrl}
                    onChange={set('coverImageUrl')} placeholder="/books/book.jpg"
                    onFocus={e => e.currentTarget.style.borderColor = '#c9a227'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(14,12,10,0.15)'} />
                </div>

                <button type="submit" style={{ ...btnPrimary, opacity: submitting ? 0.6 : 1 }} disabled={submitting}>
                  {submitting ? (editingId ? 'Saving…' : 'Adding…') : (editingId ? 'Save Changes' : 'Add Book')}
                </button>
              </form>
            </div>

            {/* Book list */}
            {books.length > 0 && (
              <div>
                <h2 style={{
                  fontFamily: "'Fraunces', serif", fontSize: '1.5rem', fontWeight: 200,
                  letterSpacing: '-0.02em', marginBottom: '1.25rem', color: '#0e0c0a',
                }}>
                  Existing Books ({books.length})
                </h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                  {books.map(book => (
                    <div key={book.id} style={{
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr auto',
                      gap: '1.25rem',
                      alignItems: 'center',
                      background: editingId === book.id ? 'rgba(201,162,39,0.06)' : '#fff',
                      border: `1px solid ${editingId === book.id ? 'rgba(201,162,39,0.25)' : 'rgba(14,12,10,0.08)'}`,
                      borderRadius: '10px',
                      padding: '1rem 1.25rem',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                      boxShadow: '0 1px 4px rgba(14,12,10,0.04)',
                    }}>
                      {/* Thumbnail */}
                      {book.coverImageUrl && (
                        <img src={book.coverImageUrl} alt={book.title} style={{
                          width: 48, height: 64, objectFit: 'cover', borderRadius: '4px',
                          border: '1px solid rgba(14,12,10,0.1)', boxShadow: '0 2px 8px rgba(14,12,10,0.06)',
                        }} />
                      )}
                      
                      {/* Info */}
                      <div style={{ minWidth: 0 }}>
                        <p style={{ fontSize: '0.9375rem', fontWeight: 500, margin: 0, color: '#0e0c0a' }}>{book.title}</p>
                        <p style={{ fontSize: '0.75rem', color: 'rgba(14,12,10,0.45)', margin: '0.25rem 0 0', lineHeight: 1.5 }}>
                          {book.author && `${book.author} · `}
                          {PUBLISHERS[book.publication as Publisher]?.label || book.publication}
                          {book.genre && ` · ${book.genre}`}
                        </p>
                      </div>
                      
                      {/* Actions */}
                      <div style={{ display: 'flex', gap: '0.625rem', flexShrink: 0 }}>
                        <button onClick={() => handleEdit(book)} style={{
                          padding: '0.5em 1em',
                          background: 'rgba(201,162,39,0.1)',
                          border: '1px solid rgba(201,162,39,0.25)',
                          borderRadius: '6px',
                          color: '#9d7a1e',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          letterSpacing: '0.04em',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = '#c9a227'
                          e.currentTarget.style.color = '#fff'
                          e.currentTarget.style.borderColor = '#c9a227'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = 'rgba(201,162,39,0.1)'
                          e.currentTarget.style.color = '#9d7a1e'
                          e.currentTarget.style.borderColor = 'rgba(201,162,39,0.25)'
                        }}>
                          Edit
                        </button>
                        <button onClick={() => setDeleteConfirm(book.id)} style={{
                          padding: '0.5em 1em',
                          background: 'rgba(220,53,69,0.08)',
                          border: '1px solid rgba(220,53,69,0.2)',
                          borderRadius: '6px',
                          color: '#c03030',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          letterSpacing: '0.04em',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.background = '#dc3545'
                          e.currentTarget.style.color = '#fff'
                          e.currentTarget.style.borderColor = '#dc3545'
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.background = 'rgba(220,53,69,0.08)'
                          e.currentTarget.style.color = '#c03030'
                          e.currentTarget.style.borderColor = 'rgba(220,53,69,0.2)'
                        }}>
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Delete confirmation modal */}
          {deleteConfirm && (
            <div style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(4px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 1000, padding: '1rem',
            }} onClick={() => setDeleteConfirm(null)}>
              <div onClick={e => e.stopPropagation()} style={{
                background: '#fff', border: '1px solid rgba(14,12,10,0.1)',
                borderRadius: '12px', padding: '2rem', maxWidth: 440,
                boxShadow: '0 12px 40px rgba(14,12,10,0.15)',
              }}>
                <h3 style={{
                  fontFamily: "'Fraunces', serif", fontSize: '1.375rem', fontWeight: 300,
                  margin: '0 0 1rem', color: '#0e0c0a',
                }}>
                  Delete this book?
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'rgba(14,12,10,0.6)', margin: '0 0 1.75rem', lineHeight: 1.6 }}>
                  "{books.find(b => b.id === deleteConfirm)?.title}" will be permanently removed from the portfolio.
                </p>
                <div style={{ display: 'flex', gap: '0.875rem' }}>
                  <button onClick={() => setDeleteConfirm(null)} style={{
                    flex: 1, padding: '0.875rem', background: '#fff',
                    border: '1px solid rgba(14,12,10,0.2)', borderRadius: '8px',
                    color: '#0e0c0a', fontSize: '0.8125rem', fontWeight: 500,
                    cursor: 'pointer', letterSpacing: '0.04em',
                  }}>
                    Cancel
                  </button>
                  <button onClick={() => handleDelete(deleteConfirm)} style={{
                    flex: 1, padding: '0.875rem', background: '#dc3545',
                    border: 'none', borderRadius: '8px',
                    color: '#fff', fontSize: '0.8125rem', fontWeight: 600,
                    cursor: 'pointer', letterSpacing: '0.04em',
                  }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
