import { CV, ModeToggle, PritButton } from '@/components/pages/homePageClient'
import { Button } from '@/components/shadcn/button'
import { cn } from '@/lib/utils'
import {  Github, HomeIcon, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="flex justify-center  items-center print:hidden">
        <div>
          <div className="flex justify-center mt-20 print:hidden md:hidden">
            <Image
              alt="profile"
              src={'https://github.com/devshahoriar.png'}
              height={500}
              width={500}
              className="size-60 object-cover rounded-full"
            />
          </div>
          <h1 className="text-center text-2xl font-semibold mt-5">
            Shahoriar Ahmed
          </h1>
          <p className="text-center text-[14px] font-light">
            Full stack web developer
            <br /> specialized in MERN stack
          </p>
          <div className="space-y-1 mt-4 md:hidden print:hidden">
            <div className="flex items-center gap-4 justify-center">
              <Mail size={14} />
              <a className="hover:underline" href="mailto:shuvo1556@gmail.com">
                shuvo1556@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4 justify-center">
              <Phone size={14} />
              <a className="hover:underline" href="tel:+8801777596337">
                +8801777596337
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <Github size={14} />
              <a
                className="hover:underline"
                href="https://github.com/devshahoriar"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/devshahoriar
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <ModeToggle />
            <PritButton />
            <Button asChild variant="outline" size={'sm'}>
              <Link href="/blog">Blogs</Link>
            </Button>
          </div>
        </div>
      </div>

      <section className="mx-auto md:flex border my-10 print:my-0 h-[1320px] w-[1020px] hidden print:flex">
        {/* // cv sidebar */}
        <aside className="w-[350px] bg-[#3E3E3E] pb-10 bg-opacity-15 dark:bg-opacity-100">
          <div className="mx-4 mt-8">
            <div className="flex justify-center">
              <Image
                alt="profile"
                src={'https://github.com/devshahoriar.png'}
                height={500}
                width={500}
                className="size-60 object-cover rounded-full"
              />
            </div>
            <div className="mt-5">
              <h1 className="text-center text-2xl font-semibold">
                Shahoriar Ahmed
              </h1>
              <p className="text-center mt-4 text-[15px]">
                Full stack web developer
                <br /> specialized in MERN stack
              </p>
            </div>

            <div className="mt-8">
              <TitleWithBar title="Contact" />
              <div className="flex flex-col gap-5 mt-5 mx-2">
                <div className="flex items-center gap-4">
                  <Mail size={16} />
                  <a
                    className="hover:underline"
                    href="mailto:shuvo1556@gmail.com"
                  >
                    shuvo1556@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone size={16} />
                  <a className="hover:underline" href="tel:+8801777596337">
                    +8801777596337
                  </a>
                </div>
                <div className="flex gap-4">
                  <HomeIcon size={16} />
                  <p>
                    Bagha, Rajshahi <br />
                    Bangladesh
                  </p>
                </div>
                {/* <div className="flex gap-4 items-center">
                  <Calendar size={16} />
                  <p>14-dec 1999</p>
                </div> */}
                <div className="flex gap-4 items-center">
                  <Github size={16} />
                  <a
                    className="hover:underline"
                    href="https://github.com/devshahoriar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/devshahoriar
                  </a>
                </div>
                <div className="flex gap-4 items-center">
                  <Linkedin size={16} />
                  <a
                    className="hover:underline"
                    href="https://www.linkedin.com/in/devshahoriar/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/devshahoriar
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <TitleWithBar title="Skills" />
              <div className="flex flex-col gap-4 mt-5 mx-2">
                <div className="flex items-center justify-between">
                  <p>Javascript</p>
                  <div className="flex gap-1">
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p>React Js</p>
                  <div className="flex gap-1">
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p>Next Js</p>
                  <div className="flex gap-1">
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p>Node Js</p>
                  <div className="flex gap-1">
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p>Redux</p>
                  <div className="flex gap-1">
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p>MongoDb</p>
                  <div className="flex gap-1">
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle noFill />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <p>Mysql</p>
                  <div className="flex gap-1">
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle />
                    <RoundeCircle noFill={true} />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <TitleWithBar title="Quelites" />
              <div className="mx-2 flex flex-col gap-4 mt-5">
                <div className="flex items-center gap-3">
                  <div className="size-4 bg-slate-500" />
                  <p>Passion for coding</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="size-4 bg-slate-500" />
                  <p>Self learning capability</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="size-4 bg-slate-500" />
                  <p>Team work</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="size-4 bg-slate-500" />
                  <p>Hard work</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* //cv description */}
        <CV />
      </section>
    </>
  )
}

const RoundeCircle = ({ noFill }: { noFill?: boolean }) => {
  return (
    <div
      className={cn(
        'size-4 border-2 border-slate-500 rounded-full',
        noFill ? 'bg-transparent' : 'bg-slate-500'
      )}
    />
  )
}

const TitleWithBar = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center">
      <p className="font-semibold text-xl">{title}</p>
      <div className="bg-slate-500 h-[6px] flex-1 ml-5" />
    </div>
  )
}
