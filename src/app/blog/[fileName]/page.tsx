/* eslint-disable @typescript-eslint/no-unused-vars */
import { Code, H, MDX, Pre } from '@/components/pages/homePageClient'
import allSortMDX from '@/lib/allSortMDX'
import { mdxToData } from '@/lib/utils'
import { promises as fs } from 'fs'
import type { Metadata } from 'next'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import path from 'path'

const components = { Image, h2: H, h1: H, pre: Pre, code: Code }

export const dynamic = 'force-static'

const ItemBlogPage = async ({
  params,
}: {
  params: Promise<{ fileName: string }>
}) => {
  const { fileName } = await params
  const name = decodeURIComponent(fileName) + '.md'
  const { fontMatter, headings, mdxSource } = await getFilenfo(name)

  return (
    <>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/github-dark.min.css'
      />

      <div className='relative container mx-auto'>
        <Image
          className='object-cover -z-[1] fixed top-0 bottom-0 left-0 right-0  w-[100%] h-[100dvh] blur-md opacity-50 scale-105'
          height={500}
          width={500}
          alt='post cover'
          src={fontMatter.coverImage}
        />
        <div className='flex gap-3 flex-col md:flex-row justify-center border-b pb-10 mt-10'>
          <Image
            className='aspect-square object-cover size-[200px]'
            height={500}
            width={500}
            alt='post cover'
            src={fontMatter.coverImage}
          />
          <div className='md:mt-5'>
            <h1 className='text-2xl md:text-3xl font-semibold'>
              {fontMatter.title}
            </h1>
            <p className='max-w-[700px] line-clamp-2 mt-2'>
              {fontMatter.description}
            </p>
            <div className='font-light text-sm space-x-2 mt-2'>
              {fontMatter.tags.split(',').map((tag, i) => (
                <span
                  key={i}
                  className='dark:bg-white bg-black bg-opacity-30 px-2 py-[2px] text-white dark:text-black rounded-sm'
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className='container my-10'>
        <div className='prose dark:prose-invert max-w-[700px] mx-auto'>
          <MDX {...mdxSource} components={components} />
        </div>
      </section>
    </>
  )
}

const getFilenfo = async (fileName: string) => {
  try {
    const mdxPath = path.join(process.cwd(), 'mdx', fileName)
    const mdxContent = await fs.readFile(mdxPath, 'utf-8')
    return await mdxToData(mdxContent)
  } catch (error) {
    return redirect('/notfound')
  }
}

export async function generateStaticParams() {
  const mdsxs: any = await allSortMDX()

  return mdsxs.map((m: any) => ({
    fileName: encodeURIComponent(m?.fileName.split('.')[0]),
  }))
}

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ fileName: string }>
}): Promise<Metadata> => {
  const { fileName } = await params
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
  } as Metadata
}

export default ItemBlogPage
