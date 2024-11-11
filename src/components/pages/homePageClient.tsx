/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { LaptopMinimal, Moon, Printer, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '../shadcn/button'
import { MDXRemote } from 'next-mdx-remote'
import { useRef } from 'react'
import { toast } from 'sonner'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../shadcn/dropdown-menu'

export const PritButton = () => {
  const _hendelPrint = () => {
    window.print()
  }
  return (
    <Button className="flex gap-1 items-center" onClick={_hendelPrint}>
      Print
      <Printer size={16} />
    </Button>
  )
}

export const ModeToggle = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="flex gap-1 items-center"
          onClick={() => setTheme('light')}
        >
          <Sun size={19} />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-1 items-center"
          onClick={() => setTheme('dark')}
        >
          <Moon size={19} />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-1 items-center"
          onClick={() => setTheme('system')}
        >
          <LaptopMinimal size={19} />
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
  <h1 {...props} className="text-2xl font-medium">
    {props.children}
  </h1>
)
export const Pre = (props: any) => (
  <pre {...props} className="overflow-x-auto w-fit">
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
        className="text-sm font-mono cursor-pointer"
      >
        {props.children}
      </code>
    </>
  )
}
