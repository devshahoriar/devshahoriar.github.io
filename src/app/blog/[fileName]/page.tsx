import path from 'path'
import { promises as fs } from 'fs'
import { mdxToData } from '@/lib/utils'
import { Code, H, MDX, Pre } from '@/components/pages/homePageClient'
import Image from 'next/image'

const components = { Image, h2: H, h1: H, pre: Pre,code:Code }
const getFilenfo = async (fileName: string) => {
  const mdxPath = path.join(process.cwd(), 'mdx', fileName)
  const mdxContent = await fs.readFile(mdxPath, 'utf-8')

  return await mdxToData(mdxContent)
}

const ItemBlogPage = async ({
  params: { fileName },
}: {
  params: { fileName: string }
}) => {
  const name = decodeURIComponent(fileName) + '.md'
  const { fontMatter, headings, mdxSource } = await getFilenfo(name)
  console.log(fontMatter)
  return (
    <section className="container">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
      />
      <div>
        <Image height={500} width={500} alt='post cover' src={fontMatter.coverImage}/>
      </div>
      <MDX {...mdxSource} components={components} />
    </section>
  )
}
export default ItemBlogPage
