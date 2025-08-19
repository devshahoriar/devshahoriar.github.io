import fs from 'fs/promises'
import { NextResponse } from 'next/server'
import path from 'path'

export async function GET() {
  try {
    const pdfPath = path.join(
      process.cwd(),
      'src',
      'app',
      'api',
      'resume',
      'Devshahoriar _ Full-Stack Web Developer.pdf'
    )
    const pdfBuffer = await fs.readFile(pdfPath)
    const state = await fs.stat(pdfPath)

    return new NextResponse(pdfBuffer as any, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition':
          'inline; filename="Devshahoriar _ Full-Stack Web Developer.pdf"',
        'Content-Length': state.size.toString(),
      },
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to load PDF' }, { status: 500 })
  }
}
