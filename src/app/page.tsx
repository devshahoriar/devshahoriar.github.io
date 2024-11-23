import Image from 'next/image'
import { Calendar, Globe, HomeIcon, Linkedin, Mail, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'
import Link from 'next/link'
import { Button } from '@/components/shadcn/button'
import { ModeToggle, PritButton } from '@/components/pages/homePageClient'

export default function Home() {
  return (
    <>
      <div className="flex justify-between md:w-[1020px] mx-auto items-center print:hidden w-full">
        <div>
          <h1 className="text-center text-2xl font-semibold mt-5">
            Shahoriar Ahmed
          </h1>
          <p className="text-center text-[14px] font-light">
            Full stack web developer
            <br /> specialized in MERN stack
          </p>
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <PritButton />
          <Button asChild variant="outline">
            <Link href="/blog">Blog</Link>
          </Button>
        </div>
      </div>

      <section className="mx-auto flex border my-5 print:my-0 h-[1320px] w-[1020px]">
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
                  <Mail />
                  <a
                    className="hover:underline"
                    href="mailto:shuvo1556@gmail.com"
                  >
                    shuvo1556@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone />{' '}
                  <a className="hover:underline" href="tel:+8801777596337">
                    +8801777596337
                  </a>
                </div>
                <div className="flex gap-4">
                  <HomeIcon />
                  <p>
                    Bagha, Rajshahi <br />
                    Bangladesh
                  </p>
                </div>
                <div className="flex gap-4 items-center">
                  <Calendar />
                  <p>14-dec 1999</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Globe />
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
                  <Linkedin />
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

            <div className="mt-10">
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

            <div className="mt-10">
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
            </div>

            <div className="mt-10">
              <TitleWithButtomBar title="A few word about myself" />
              <p className="mt-5 text-justify">
                I am a self-taught passionate{' '}
                <span className="font-bold">full-stack</span> web developer
                specializing in <span className="font-bold">MERN</span> stack,
                as a full-stack developer. I can develop scalable{' '}
                <span className="font-bold">Nodejs</span>,{' '}
                <span className="font-bold">ExpressJs</span> &{' '}
                <span className="font-bold">MongoDB</span>,{' '}
                <span className="font-bold">MySql</span>, and{' '}
                <span className="font-bold">Postgres</span>
                API that connect with Responsive{' '}
                <span className="font-bold">ReactJs</span> frontend and{' '}
                <span className="font-bold">NextJs</span>
                full-stack framework. I have a comprehensive knowledge of
                IOT(RaspberyPi, Nodemcu). Currently learning{' '}
                <span className="font-bold">Go</span> Lang and{' '}
                <span className="font-bold">Vector </span>
                Database.
              </p>
            </div>

            <div className="mt-10">
              <TitleWithButtomBar title="Projects" />
              <div className="mt-5">
                <h2 className="font-semibold">Full stack E-Commerce app </h2>
                <p className="font-light">
                  Technologies: NextJs 14 app directory, Mongodb, Tailwindcss
                </p>
                <p className="font-light">
                  Challenges: SEO optimization, Image optimization & placeholder
                </p>
                <div className="flex items-center mt-4 gap-3">
                  <a
                    target="_blank"
                    className="underline"
                    href="https://lws-final-rnext.vercel.app/"
                  >
                    Live
                  </a>
                  <p>-</p>
                  <a
                    target="_blank"
                    className="underline"
                    href="https://github.com/devshahoriar/lwsFinalRnext"
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
      </section>
    </>
  )
}

const TitleWithDescription = ({
  children,
  title,
}: {
  title: string
  children: ReactNode
}) => {
  return (
    <div className="mt-5 flex justify-between">
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
