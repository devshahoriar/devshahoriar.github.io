/* eslint-disable @typescript-eslint/no-explicit-any */
import { mdxToData } from '@/lib/utils'
import { promises as fs } from 'fs'
import Image from 'next/image'
import Link from 'next/link'
import path from 'path'
import randomColor from 'randomcolor'

type ITEM_MDX = {
  birthtime: Date
  title: string
  description: string
  coverImage: string
  tags: string
  fileName: string
}

const allSortMDX = async () => {
  const mdxPath = path.join(process.cwd(), 'mdx')
  const fMdx = await fs.readdir(mdxPath)
  const promisses: any = []
  fMdx.forEach((n) => {
    const x = async () => {
      const mdxOnePath = path.join(mdxPath, n)
      const textMdx = await fs.readFile(mdxOnePath, 'utf8')
      const { fontMatter } = await mdxToData(textMdx)
      const { birthtime } = await fs.stat(mdxOnePath)
      return { fileName: n, birthtime, ...fontMatter }
    }
    promisses.push(x())
  })

  return (await Promise.all(promisses)).sort(
    (a: any, b: any) =>
      new Date(b.birthtime).getTime() - new Date(a.birthtime).getTime()
  )
}

const BlogPage = async () => {
  const allSortedMdxData: ITEM_MDX[] = await allSortMDX()

  return (
    <>
      <section className="container">
        <div className="gd md:h-[300px] sm:h-[250px] h-[200px] xl:h-[400px] flex justify-center items-center">
          <div className="md:scale-125 text-white">
            <p>Hi👋. I&apos;m</p>
            <h1 className="text-4xl  md:text-5xlfont-bold">Shahoriar Ahmed</h1>
            <p>full stack web developer</p>
          </div>
        </div>
      </section>

      <section className="container my-5 space-y-5">
        <p className="opacity-70">Posts</p>
        <div className="flex gap-[25px] flex-wrap">
          {allSortedMdxData.map((item) => (
            <BlogItem data={item} key={String(item?.birthtime)} />
          ))}
        </div>
      </section>
    </>
  )
}

const BlogItem = ({
  data: { coverImage, description, title, tags, fileName },
}: {
  data: ITEM_MDX
}) => {
  return (
    <div className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-25px)] lg:flex-[0_0_calc(33.33333%-25px)]">
      <Image
        alt="devshahora Shahoriar"
        className="aspect-video object-cover object-top w-full"
        height={500}
        width={500}
        src={coverImage}
      />
      <div className="">
        <div className="mx-3 mt-2">
          <Link href={`/blog/${encodeURIComponent(fileName.split('.')[0])}`}>
            <h2 className="text-2xl font-semibold line-clamp-1">{title}</h2>
          </Link>
          <p className="text-sm line-clamp-2 opacity-90">{description}</p>
          <div>
            {tags.split(',').map((tag) => (
              <span
                key={tag}
                className="text-xs p-1 rounded-md mr-2 font-medium text-white"
                style={{ backgroundColor: randomColor({ luminosity: 'dark' }) }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlogPage
