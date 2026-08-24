import { NextResponse } from 'next/server'
import { BOOKS_DATA } from '@/data/booksData'

export async function GET() {
  return NextResponse.json(BOOKS_DATA)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const now = new Date().toISOString()
    const newBook = {
      id: `book-${Date.now()}`,
      title: body.title || '',
      size: body.size || '',
      isbn: body.isbn || '',
      author: body.author || '',
      genre: body.genre || '',
      layoutDesigner: body.layoutDesigner || '',
      collaboratorArtist: body.collaboratorArtist || '',
      description: body.description || '',
      coverImageUrl: body.coverImageUrl || '',
      publication: body.publication || 'bh',
      hasSpotUV: body.hasSpotUV || false,
      hasMatteLamination: body.hasMatteLamination || false,
      hasFoilEmboss: body.hasFoilEmboss || false,
      isBestSeller: body.isBestSeller || false,
      isAwardWinner: body.isAwardWinner || false,
      awardName: body.awardName || '',
      purchaseLink: body.purchaseLink || '',
      createdAt: now,
      updatedAt: now,
    }
    BOOKS_DATA.unshift(newBook)
    return NextResponse.json(newBook, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to create book', details: error.message }, { status: 500 })
  }
}
