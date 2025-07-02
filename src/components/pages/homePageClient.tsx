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
        className='text-sm font-mono cursor-pointer'
      >
        {props.children}
      </code>
    </>
  )
}



import { BorderBeam } from "@/components/magicui/border-beam";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../shadcn/card'
import { Label } from '../shadcn/label'
import { Input } from '../shadcn/input'

export function Component() {
  return (
    <Card className="relative w-[350px] overflow-hidden">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Register</Button>
        <Button>Login</Button>
      </CardFooter>
      <BorderBeam duration={8} size={100} />
    </Card>
  );
}
