import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const books = await prisma.book.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(books)
  } catch (error) {
    console.error('Failed to fetch books:', error)
    return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const book = await prisma.book.create({
      data: {
        title: body.title,
        size: body.size,
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
      },
    })

    return NextResponse.json(book, { status: 201 })
  } catch (error: any) {
    console.error('Failed to create book:', error)
    return NextResponse.json({ error: 'Failed to create book', details: error.message }, { status: 500 })
  }
}
