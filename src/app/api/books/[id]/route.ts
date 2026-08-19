import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json()
    const { id } = await params

    const book = await prisma.book.update({
      where: { id },
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

    return NextResponse.json(book)
  } catch (error: any) {
    console.error('Failed to update book:', error)
    return NextResponse.json(
      { error: 'Failed to update book', details: error.message },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    await prisma.book.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error('Failed to delete book:', error)
    return NextResponse.json(
      { error: 'Failed to delete book', details: error.message },
      { status: 500 }
    )
  }
}
