/* eslint-disable @typescript-eslint/no-unused-vars */
import path from 'path'
import { promises as fs } from 'fs'
import { mdxToData } from '@/lib/utils'
import { Code, H, MDX, Pre } from '@/components/pages/homePageClient'
import Image from 'next/image'
import { Metadata } from 'next'

export const generateMetadata = async ({
  params: { fileName },
}: {
  params: { fileName: string }
}): Promise<Metadata> => {
  const name = decodeURIComponent(fileName) + '.md'
  const { fontMatter } = await getFilenfo(name)
  return {
    title: fontMatter.title,
    description: fontMatter.description,
    openGraph: {
      images: [
        {
          url: fontMatter.coverImage,
          alt: fontMatter.title,
        },
      ],
    },
  }
}

const ItemBlogPage = async ({
  params: { fileName },
}: {
  params: { fileName: string }
}) => {
  const name = decodeURIComponent(fileName) + '.md'
  const { fontMatter, headings, mdxSource } = await getFilenfo(name)

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css"
      />
      <div className="bg-gradient-to-b from-transparent dark:to-black to-white w-full pb-36">
        <div className="relative max-w-[900px] mx-auto">
          <Image
            className="object-cover -z-[1] relative  w-full h-[300px] blur-2xl"
            height={500}
            width={500}
            alt="post cover"
            src={fontMatter.coverImage}
          />
          <div className="absolute inset-0 flex gap-3 flex-col md:flex-row px-5">
            <Image
              className="aspect-square object-cover size-[200px]"
              height={500}
              width={500}
              alt="post cover"
              src={fontMatter.coverImage}
            />
            <div className="md:mt-5">
              <h1 className="text-2xl md:text-3xl font-semibold">
                {fontMatter.title}
              </h1>
              <p className="max-w-[700px] line-clamp-2 mt-2">
                {fontMatter.description}
              </p>
              <div className="font-light text-sm space-x-2 mt-2">
                {fontMatter.tags.split(',').map((tag, i) => (
                  <span
                    key={i}
                    className="dark:bg-white bg-black bg-opacity-30 px-2 py-[2px] text-white dark:text-black rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="container md:-mt-32 -mt-24">
        <div className="prose dark:prose-invert max-w-[700px] mx-auto">
          <MDX {...mdxSource} components={components} />
        </div>
      </section>
    </>
  )
}

const components = { Image, h2: H, h1: H, pre: Pre, code: Code }
const getFilenfo = async (fileName: string) => {
  const mdxPath = path.join(process.cwd(), 'mdx', fileName)
  const mdxContent = await fs.readFile(mdxPath, 'utf-8')

  return await mdxToData(mdxContent)
}
export default ItemBlogPage
