import { promises as fs } from 'fs'

import { mdxToData } from '@/lib/utils'
import path from 'path'
import Image from 'next/image'
import { H, MDX } from '@/components/pages/homePageClient'

const components = { Image,h2:H,h1:H }

const BlogPage = async () => {
  const mdxPath = path.join(process.cwd(), 'mdx')
  const fMdx = await fs.readdir(mdxPath)
  const pathFMax = path.join(mdxPath, fMdx[0])

  const mdxContent = await fs.readFile(pathFMax, 'utf-8')
  const x = await mdxToData(mdxContent)

  return (
    <div id={x.headings[0]}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"></link>
      <MDX {...x.mdxSource} components={components} />
    </div>
  )
}
export default BlogPage
