/* eslint-disable @typescript-eslint/no-explicit-any */
import allSortMDX from '@/lib/allSortMDX'
import Image from 'next/image'
import Link from 'next/link'

type ITEM_MDX = {
  birthtime: Date
  title: string
  description: string
  coverImage: string
  tags: string
  fileName: string
}


const BlogPage = async () => {
  const allSortedMdxData: ITEM_MDX[] = await allSortMDX()
  return (
    <>
      <section className='container'>
        <div className='gd md:h-[300px] sm:h-[250px] h-[200px] xl:h-[400px] flex justify-center items-center'>
          <div className='md:scale-125 text-white'>
            <p>Hi👋. I&apos;m</p>
            <h1 className='text-4xl  md:text-5xlfont-bold'>Shahoriar Ahmed</h1>
            <p>full stack web developer</p>
          </div>
        </div>
      </section>

      <section className='container my-5'>
        <p className='opacity-70'>Posts</p>
        <div className='flex gap-x-[25px] flex-wrap'>
          {allSortedMdxData.map((item, i) => (
            <BlogItem data={item} key={i} />
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
    <div className='flex-[0_0_100%] sm:flex-[0_0_calc(50%-25px)] lg:flex-[0_0_calc(33.33333%-25px)] group overflow-hidden'>
      <Link
        className='cursor-pointer p-1'
        href={`/blog/${encodeURIComponent(fileName.split('.')[0])}`}
        
      >
        <Image
          alt='devshahora Shahoriar'
          className='aspect-video object-cover object-top w-full group-hover:scale-105 transition-transform duration-300'
          height={500}
          width={500}
          src={coverImage}
        />

        <div className='mx-3 mt-2'>
          <h2 className='text-2xl font-semibold line-clamp-1'>{title}</h2>

          <p className='text-sm line-clamp-2 opacity-90'>{description}</p>
          <div className='space-x-2 text-xs mt-2 '>
            {tags?.split(',').map((tag) => (
              <span
                key={tag}
                className='dark:bg-white bg-black bg-opacity-30 px-2 py-[2px] text-white dark:text-black rounded-sm'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  )
}
export default BlogPage
