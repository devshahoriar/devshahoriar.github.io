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

export const CV = () => (
  <div className="flex-1 dark:bg-[#1a1a1a]">
    <div className="mx-4 mt-12">
      <div>
        <TitleWithButtomBar title="Education" />

        <TitleWithDescription title="2021-Now">
          <h2 className="font-bold">
            B.Sc in Computer Science and Engineering
          </h2>
          <p className="font-light">Varendra University,Rajshahi</p>
          <p className="font-light">
            Final Project: Full stack Gym Management system
          </p>
        </TitleWithDescription>
      </div>

      <div className="mt-2">
        <TitleWithButtomBar title="Experience" />
        <TitleWithDescription title="2021-2023">
          <h2 className="font-bold">
            Front end developer at Xemiron IT Solutions
          </h2>
          <p className="font-light">Vodra, Rajshahi</p>
        </TitleWithDescription>

        <TitleWithDescription title="2023-Now">
          <h2 className="font-bold">
            Junior full stack developer at Global Community Organization
          </h2>
          <p className="font-light">Bagha, Rajshahi</p>
        </TitleWithDescription>
      </div>

      <div className="mt-2">
        <TitleWithButtomBar title="Courses" />
        <TitleWithDescription title="2022">
          <h2 className="font-bold">Think in a Redux way Course</h2>
          <p className="font-light">React Redux,Redux toolkit</p>
          <p className="font-light">
            89.29% marks obtained -{' '}
            <a
              target="_blank"
              className="underline"
              href="https://learnwithsumit.com/certificates/verify/LWSCTXN-VWWQ9WRM"
            >
              Report
            </a>
          </p>
        </TitleWithDescription>
        <TitleWithDescription title="2022">
          <h2 className="font-bold">Reactive Accelerator</h2>
          <p className="font-light">React Advanced, Next js, Mongo db</p>
          <p className="font-light">
            85.15% marks obtained -{' '}
            <a
              target="_blank"
              className="underline"
              href="https://learnwithsumit.com/certificates/verify/LWSCTXN-H6Z6UACJ"
            >
              Report
            </a>
          </p>
        </TitleWithDescription>
        <TitleWithDescription title="2025">
          <h2 className="font-bold">
            Job Roles in the Cloud & Cloud Essentials Knowledge
          </h2>

          <p className="font-light">
            Cloud Essentials Knowledge - Done (A+){' '}
            <a
              target="_blank"
              className="underline"
              href="https://dcb-use1-aws-academy-prod-ecs-lmsfiles.s3.amazonaws.com/files/a/w/aws_prod1_docebosaas_com/certificate/134_3_6932664_1740189077_AWS%20Course%20Completion%20Certificate.pdf?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAXNFOCE34WUQOCPFK%2F20250302%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250302T053423Z&X-Amz-SignedHeaders=host&X-Amz-Expires=10800&X-Amz-Signature=a05db092b67bf248c051c6c3c30bfc5497ade4387a2995cc4354b2e54332985b"
            >
              Link
            </a>{' '}
          </p>
        </TitleWithDescription>
      </div>

      <div className="mt-15">
        <TitleWithButtomBar title="A few word about myself" />
        <p className="mt-5 text-justify">
          I’m a self-taught full-stack developer specializing in the MERN stack,
          building scalable apps with Node.js, Express.js, and databases like
          MongoDB, MySQL, and PostgreSQL, plus React.js and Next.js frontends.
          I’ve completed full web app infrastructure for two organizations,
          including servers, sites, and mobile apps. I know IoT (Raspberry Pi,
          NodeMCU) and am learning Rust and vector databases.
        </p>
      </div>

      <div className="mt-8">
        <TitleWithButtomBar title="Projects" />
        <div className="mt-5">
          <h2 className="font-semibold">
            Full stack inventory management system{' '}
          </h2>
          <p className="font-light">
            Technologies: NextJs 15 app directory, Mysql, Tailwindcss,shadcn/ui.
          </p>
          <p className="font-light">
            Challenges:Complex database , Cashing (Apprx:reduce 80% of Db query)
            SEO optimization, Image optimization & placeholder
          </p>
          <div className="flex items-center mt-4 gap-3">
            <a
              target="_blank"
              className="underline"
              href="https://gco-inventory.vercel.app/"
            >
              Live
            </a>
            <p>-</p>
            <a
              target="_blank"
              className="underline"
              href="https://github.com/devshahoriar/gco_inventory"
            >
              Source Code
            </a>
          </div>
          <p className="mt-5">
            Lot of interesting project are keep in{' '}
            <a
              className="underline"
              href="https://github.com/devshahoriar?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

const TitleWithDescription = ({
  children,
  title,
}: {
  title: string
  children: ReactNode
}) => {
  return (
    <div className="mt-3 flex justify-between">
      <p className="font-medium">{title}</p>
      <div className="w-[350px]">{children}</div>
    </div>
  )
}

const TitleWithButtomBar = ({ title }: { title: string }) => {
  return (
    <div>
      <p className="font-semibold text-xl">{title}</p>
      <div className="bg-slate-500 h-[3px]" />
    </div>
  )
}

export const PritButton = () => {
  return (
    <Button asChild variant={'outline'} size={'sm'}>
      <Link href={'/api/resume'} className="flex gap-1 items-center">
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
        <Button variant="outline" size="sm">
          <Sun
            size={16}
            className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          />
          <Moon
            size={16}
            className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex gap-1 items-center"
          onClick={() => setTheme('light')}
        >
          <Sun size={16} />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-1 items-center"
          onClick={() => setTheme('dark')}
        >
          <Moon size={16} />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-1 items-center"
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
