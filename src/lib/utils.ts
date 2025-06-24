/* eslint-disable @typescript-eslint/no-explicit-any */

import { clsx, type ClassValue } from 'clsx'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeHighlight from 'rehype-highlight'
import { remark } from 'remark'
// @ts-expect-error "for ok"
import remarkParse from 'remark-parse'
import { twMerge } from 'tailwind-merge'
import { visit } from 'unist-util-visit'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type FONTMATER = {
  title: string
  description:string
  coverImage: string
  tags: string
}

export const mdxToData = async (mdxContent: string) => {
  const { data: fontMatter , content } = matter(mdxContent) as unknown as {data:FONTMATER,content:string}
  const processedContent = remark().use(remarkParse).parse(content)

  const headings: string[] = []
  visit(processedContent, 'heading', (node: any) => {
    const text = node.children.map((child: any) => child.value).join('')

    headings.push(text)
  })
  const mdxSource = await serialize(content,{
    mdxOptions: { rehypePlugins: [rehypeHighlight] },
  })

  return { fontMatter, headings, mdxSource }
}
