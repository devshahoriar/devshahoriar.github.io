import { FlickeringGrid } from '@/components/magicui/flickering-grid'
import {
  ModeToggle,
  PritButton,
  TitleWithButtomBar,
  TitleWithDescription,
} from '@/components/pages/homePageClient'
import { Button } from '@/components/shadcn/button'
import { LinkPreview } from '@/components/ui/link-preview'
import { cn } from '@/lib/utils'
import { Github, HomeIcon, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='fixed h-screen w-screen top-0 left-0 print:hidden z-[-1]'>
        <FlickeringGrid
          className='relative inset-0 [mask-image:radial-gradient(1800px_circle_at_center,transparent,white)]'
          squareSize={10}
          gridGap={5}
          color='#60A5FA'
          maxOpacity={0.4}
          flickerChance={0.1}
        />
      </div>

      <div className='flex justify-center  items-center print:hidden'>
        <div>
          <div className='flex justify-center mt-20 print:hidden md:hidden'>
            <Image
              alt='profile'
              src={'https://github.com/devshahoriar.png'}
              height={500}
              width={500}
              className='size-60 object-cover rounded-full'
            />
          </div>
          <h1 className='text-center text-2xl font-semibold mt-5'>
            Shahoriar Ahmed
          </h1>
          <p className='text-center text-[14px] font-light'>
            Full stack web developer
            <br /> specialized in MERN stack
          </p>
          <div className='space-y-1 mt-4 md:hidden print:hidden'>
            <div className='flex items-center gap-4 justify-center'>
              <Mail size={14} />
              <a className='hover:underline' href='mailto:shuvo1556@gmail.com'>
                shuvo1556@gmail.com
              </a>
            </div>
            <div className='flex items-center gap-4 justify-center'>
              <Phone size={14} />
              <a className='hover:underline' href='tel:+8801777596337'>
                +8801777596337
              </a>
            </div>
            <div className='flex gap-4 items-center'>
              <Github size={14} />
              <a
                className='hover:underline'
                href='https://github.com/devshahoriar'
                target='_blank'
                rel='noopener noreferrer'
              >
                github.com/devshahoriar
              </a>
            </div>
          </div>
          <div className='flex items-center gap-3 mt-3'>
            <ModeToggle />
            <PritButton />
            <Button asChild variant='outline' size={'sm'}>
              <Link href='/blog'>Blogs</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* //main cv section */}
      <section className='mx-auto md:flex border my-10 print:my-0 h-[1320px] w-[1020px] hidden print:flex'>
        {/* // cv sidebar */}
        <CvSide />
        {/* //cv description */}
        <CV />
      </section>
      
    </>
  )
}

const CvSide = () => {
  return (
    <aside className='w-[350px] bg-[#3E3E3E] pb-10 bg-opacity-15 dark:bg-opacity-100'>
      <div className='mx-4 mt-8'>
        <div className='flex justify-center'>
          <Image
            alt='profile'
            src={'https://github.com/devshahoriar.png'}
            height={500}
            width={500}
            className='size-60 object-cover rounded-full'
          />
        </div>
        <div className='mt-5'>
          <h1 className='text-center text-2xl font-semibold'>
            Shahoriar Ahmed
          </h1>
          <p className='text-center mt-4 text-[15px]'>
            Full stack web developer
            <br /> specialized in MERN stack
          </p>
        </div>

        <div className='mt-8'>
          <TitleWithBar title='Contact' />
          <div className='flex flex-col gap-5 mt-5 mx-2'>
            <div className='flex items-center gap-4'>
              <Mail size={16} />
              <a className='hover:underline' href='mailto:shuvo1556@gmail.com'>
                shuvo1556@gmail.com
              </a>
            </div>
            <div className='flex items-center gap-4'>
              <Phone size={16} />
              <a className='hover:underline' href='tel:+8801777596337'>
                +8801777596337
              </a>
            </div>
            <div className='flex gap-4'>
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
            <div className='flex gap-4 items-center'>
              <Github size={16} />
              <a
                className='hover:underline'
                href='https://github.com/devshahoriar'
                target='_blank'
                rel='noopener noreferrer'
              >
                github.com/devshahoriar
              </a>
            </div>
            <div className='flex gap-4 items-center'>
              <Linkedin size={16} />
              <a
                className='hover:underline'
                href='https://www.linkedin.com/in/devshahoriar/'
                target='_blank'
                rel='noopener noreferrer'
              >
                linkedin.com/in/devshahoriar
              </a>
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <TitleWithBar title='Skills' />
          <div className='flex flex-col gap-4 mt-5 mx-2'>
            <div className='flex items-center justify-between'>
              <p>React Js</p>
              <div className='flex gap-1'>
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <p>Next Js</p>
              <div className='flex gap-1'>
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <p>Node Js</p>
              <div className='flex gap-1'>
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <p>Redux</p>
              <div className='flex gap-1'>
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <p>Typescript</p>
              <div className='flex gap-1'>
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle noFill />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <p>MongoDb</p>
              <div className='flex gap-1'>
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle noFill />
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <p>Mysql</p>
              <div className='flex gap-1'>
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle />
                <RoundeCircle noFill={true} />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <TitleWithBar title='Quelites' />
          <div className='mx-2 flex flex-col gap-4 mt-5'>
            <div className='flex items-center gap-3'>
              <div className='size-4 bg-slate-500' />
              <p>Passion for coding</p>
            </div>

            <div className='flex items-center gap-3'>
              <div className='size-4 bg-slate-500' />
              <p>Self learning capability</p>
            </div>

            <div className='flex items-center gap-3'>
              <div className='size-4 bg-slate-500' />
              <p>Team work</p>
            </div>

            <div className='flex items-center gap-3'>
              <div className='size-4 bg-slate-500' />
              <p>Hard work</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

const CV = () => (
  <div className='flex-1 dark:bg-[#1a1a1a]'>
    <div className='mx-4 mt-12'>
      <div>
        <TitleWithButtomBar title='Education' />

        <TitleWithDescription title='2021-Now'>
          <h2 className='font-bold'>
            B.Sc in Computer Science and Engineering
          </h2>
          <p className='font-light'>Varendra University,Rajshahi</p>
          <p className='font-light'>
            Final Project: Full stack Gym Management system
          </p>
        </TitleWithDescription>
      </div>

      <div className='mt-2'>
        <TitleWithButtomBar title='Experience' />
        <TitleWithDescription title='2021-2023'>
          <h2 className='font-bold'>
            Front end developer at Xemiron IT Solutions
          </h2>
          <p className='font-light'>Vodra, Rajshahi</p>
        </TitleWithDescription>

        <TitleWithDescription title='2023-Now'>
          <h2 className='font-bold'>
            Junior full stack developer at Global Community Organization
          </h2>
          <p className='font-light'>Bagha, Rajshahi</p>
        </TitleWithDescription>
      </div>

      <div className='mt-2'>
        <TitleWithButtomBar title='Courses' />
        <TitleWithDescription title='2022'>
          <h2 className='font-bold'>Think in a Redux way Course</h2>
          <p className='font-light'>React Redux,Redux toolkit</p>
          <div className='font-light'>
            89.29% marks obtained -{' '}
            <LinkPreview
              target='_blank'
              className='underline'
              isStatic
              imageSrc='https://ion71pbmpa.ufs.sh/f/CIk0kzmBLUluXw4FWColzn6cghwTt3jROD2Miy0IxqUEWCum'
              url='https://learnwithsumit.com/certificates/verify/LWSCTXN-VWWQ9WRM'
              quality={70}
            >
              Report
            </LinkPreview>
          </div>
        </TitleWithDescription>
        <TitleWithDescription title='2022'>
          <h2 className='font-bold'>Reactive Accelerator</h2>
          <p className='font-light'>React Advanced, Next js, Mongo db</p>
          <div className='font-light'>
            85.15% marks obtained -{' '}
            <LinkPreview
              target='_blank'
              className='underline'
              isStatic
              imageSrc='https://ion71pbmpa.ufs.sh/f/CIk0kzmBLUlupA7W4KDi9Z5ahQqNfrj4YgJOKD8Gcy1B0Spd'
              url='https://learnwithsumit.com/certificates/verify/LWSCTXN-H6Z6UACJ'
              quality={70}
            >
              Report
            </LinkPreview>
          </div>
        </TitleWithDescription>
        <TitleWithDescription title='2025'>
          <h2 className='font-bold'>
            Job Roles in the Cloud & Cloud Essentials Knowledge
          </h2>

          <div className='font-light'>
            Cloud Essentials Knowledge - Done (A+){' '}
            <LinkPreview
              target='_blank'
              className='underline'
              isStatic
              imageSrc='https://ion71pbmpa.ufs.sh/f/CIk0kzmBLUluzyt0pyEwp2gkSXGOIYEy9qoHK0Jtv8jdNhc5'
              url='https://ion71pbmpa.ufs.sh/f/CIk0kzmBLUluEPJpFku1PSn3AjaRpWHmy8TfewO2xDJkrq0l'
              quality={70}
            >
              Link
            </LinkPreview>
          </div>
        </TitleWithDescription>
      </div>

      <div className='mt-15'>
        <TitleWithButtomBar title='A few word about myself' />
        <p className='mt-5 text-justify'>
          I am a self-taught, passionate full-stack web developer specializing
          in the <b>MERN</b> stack. I build scalable applications with{' '}
          <b>Node.js</b>, <b>Express.js</b>, and databases like <b>MongoDB</b>,{' '}
          <b>MySQL</b>, and <b>PostgreSQL</b>, alongside responsive{' '}
          <b>React.js</b> frontends and full-stack <b>Next.js</b> projects.
          Recently, I completed the full web app infrastructure for three
          organizations, including web servers, websites, and mobile apps. I’m
          skilled in <b>IoT</b> (<b>Raspberry Pi</b>, <b>NodeMCU</b>) and
          currently learning <b>Rust</b> while diving deeper into{' '}
          <b>vector databases</b>.
        </p>
      </div>

      <div className='mt-5'>
        <TitleWithButtomBar title='Projects' />
        <div className='mt-5'>
          <h2 className='font-semibold'>Global Community Organization App </h2>
          <p className=''>
            Technologies: Next.js, TypeScript, NextAuth, PostgreSQL, Shadcn/ui.
          </p>
          <p className='text-justify'>
            <b>Solely developed</b> a full-stack application from front-end to
            back-end and database for a sustainability nonprofit, powering an
            entire office's operations. Implemented secure user authentication,
            admin controls, and real-time analytics, managing over{' '}
            <b>300,000</b> tree records, <b>50,000+</b> child records, and
            continuously growing data. Supports <b>80+</b> employees with daily
            report generation. Strengthened expertise in end-to-end development
            and mission-driven solutions.{' '}
            <span className='text-xs'>
              Due to the project’s private nature, I cannot share the source
              code,
            </span>
          </p>
          <div className='flex items-center mt-0 gap-3'>
            <LinkPreview
              className='underline'
              isStatic
              imageSrc='https://res.cloudinary.com/dow1abm8v/image/upload/v1750774514/myImages/u1aqamedciiryakr0xhb.png'
              url='https://devshahoriar.vercel.app/blog/gco-tree-count-app'
              quality={70}
            >
              Blog
            </LinkPreview>
          </div>
          <p className='mt-3'>
            Lot of interesting project are keep in{' '}
            <a
              className='underline'
              href='https://github.com/devshahoriar?tab=repositories'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
)

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
    <div className='flex items-center'>
      <p className='font-semibold text-xl'>{title}</p>
      <div className='bg-slate-500 h-[6px] flex-1 ml-5' />
    </div>
  )
}
