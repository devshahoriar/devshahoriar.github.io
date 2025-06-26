import { mdxToData } from '@/lib/utils'
import { promises as fs } from 'fs'
import path from 'path'

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

export default allSortMDX
