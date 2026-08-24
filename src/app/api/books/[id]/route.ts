import { NextResponse } from 'next/server'
import { BOOKS_DATA } from '@/data/booksData'

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json()
    const { id } = await params
    const idx = BOOKS_DATA.findIndex(b => b.id === id)
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    BOOKS_DATA[idx] = {
      ...BOOKS_DATA[idx],
      title: body.title,
      size: body.size || '',
      isbn: body.isbn || '',
      author: body.author || '',
      genre: body.genre || '',
      layoutDesigner: body.layoutDesigner || '',
      collaboratorArtist: body.collaboratorArtist || '',
      description: body.description || '',
      coverImageUrl: body.coverImageUrl || '',
      publication: body.publication || '',
      hasSpotUV: body.hasSpotUV || false,
      hasMatteLamination: body.hasMatteLamination || false,
      hasFoilEmboss: body.hasFoilEmboss || false,
      isBestSeller: body.isBestSeller || false,
      isAwardWinner: body.isAwardWinner || false,
      awardName: body.awardName || '',
      purchaseLink: body.purchaseLink || '',
      updatedAt: new Date().toISOString(),
    }
    return NextResponse.json(BOOKS_DATA[idx])
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to update book', details: error.message }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const idx = BOOKS_DATA.findIndex(b => b.id === id)
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    BOOKS_DATA.splice(idx, 1)
    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to delete book', details: error.message }, { status: 500 })
  }
}
