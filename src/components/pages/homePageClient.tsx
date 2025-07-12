/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { BookUser, LaptopMinimal, Moon, Sun } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { ReactNode, useRef } from 'react'
import { toast } from 'sonner'
import { Button } from '../shadcn/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../shadcn/dropdown-menu'
import dynamic from 'next/dynamic'

export const TitleWithDescription = ({
  children,
  title,
}: {
  title: string
  children: ReactNode
}) => {
  return (
    <div className='mt-2 flex justify-between'>
      <p className='font-medium'>{title}</p>
      <div className='w-[350px]'>{children}</div>
    </div>
  )
}

export const TitleWithButtomBar = ({ title }: { title: string }) => {
  return (
    <div>
      <p className='font-semibold text-xl'>{title}</p>
      <div className='bg-slate-500 h-[3px]' />
    </div>
  )
}

export const PritButton = () => {
  return (
    <Button asChild variant={'outline'} size={'sm'}>
      <Link href={'/api/resume'} className='flex gap-1 items-center'>
        Resume
        <BookUser size={16} />
      </Link>
    </Button>
  )
}

export const ModeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='sm'>
          <Sun
            size={16}
            className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
          />
          <Moon
            size={16}
            className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
          />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className='flex gap-1 items-center'
          onClick={() => setTheme('light')}
        >
          <Sun size={16} />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex gap-1 items-center'
          onClick={() => setTheme('dark')}
        >
          <Moon size={16} />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className='flex gap-1 items-center'
          onClick={() => setTheme('system')}
        >
          <LaptopMinimal size={16} />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export const MDX = (s: any) => {
  return <MDXRemote {...s} />
}

export const H = (props: any) => (
  <h1 {...props} className='text-2xl font-medium'>
    {props.children}
  </h1>
)
export const Pre = (props: any) => (
  <pre {...props} className='overflow-x-auto w-fit'>
    {props.children}
  </pre>
)
export const Code = (props: any) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <>
      <code
        onClick={() => {
          navigator.clipboard.writeText(ref?.current?.textContent as string)
          toast('Code copied to clipboard')
        }}
        ref={ref}
        {...props}
        className='text-sm font-mono cursor-pointer text-wrap break-all'
      >
        {props.children}
      </code>
    </>
  )
}

function getRandomBrightHSLColor() {
  const h = Math.floor(Math.random() * 361)
  const s = Math.floor(Math.random() * (100 - 70) + 70)
  const l = Math.floor(Math.random() * (100 - 60) + 60)
  return `hsl(${h}, ${s}%, ${l}%)`
}

const NeonGradientCard = dynamic(
  () =>
    import('@/components/magicui/neon-gradient-card').then(
      (x) => x.NeonGradientCard
    ),
  {
    ssr: false,
  }
)

export const GrBg = ({ children }: { children: ReactNode }) => {
  return (
    <NeonGradientCard
      neonColors={{
        firstColor: getRandomBrightHSLColor(),
        secondColor: getRandomBrightHSLColor(),
      }}
      borderRadius={0}
      borderSize={3}
    >
      {children}
    </NeonGradientCard>
  )
}
