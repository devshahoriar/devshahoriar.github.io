import {
  GrBg,
  ModeToggle,
  PritButton,
  TitleWithButtomBar,
  TitleWithDescription,
} from '@/components/pages/homePageClient'
import { Button } from '@/components/shadcn/button'
import { LinkPreview } from '@/components/ui/link-preview'
import { Github, HomeIcon, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
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
      <section className='mx-auto md:flex my-10 print:my-0 h-[1320px] w-[1020px] hidden print:flex'>
        <GrBg>
          <div className='h-[1320px] w-[1020px] flex'>
            {/* // cv sidebar */}
            <CvSide />
            {/* //cv description */}
            <CV />
          </div>
        </GrBg>
      </section>
    </>
  )
}

const CvSide = () => {
  return (
    <aside className='w-[350px] bg-[#494949]  bg-opacity-15 print:dark:bg-opacity-15 print:bg-opacity-15 dark:bg-opacity-15'>
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
          <p className='text-center mt-2 text-[15px]'>
            Full stack web developer
            <br /> specialized in MERN stack
          </p>
        </div>

        <div className='mt-4'>
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

              <LinkPreview
                className='hover:underline'
                isStatic
                url='https://github.com/devshahoriar?tab=repositories'
                imageSrc='https://ion71pbmpa.ufs.sh/f/CIk0kzmBLUlu0Dx6aVTJ7OTVPYZ3D5uwXBhKGxzQ2tkL1CyN'
              >
                github.com/devshahoriar
              </LinkPreview>
            </div>
            <div className='flex gap-4 items-center'>
              <Linkedin size={16} />

              <LinkPreview
                className='hover:underline'
                isStatic
                url='https://www.linkedin.com/in/devshahoriar/'
                imageSrc='https://ion71pbmpa.ufs.sh/f/CIk0kzmBLUluuokbYG7csPwhnjrFHz6bmS90QZCydKLBMp3D'
              >
                linkedin.com/in/devshahoriar
              </LinkPreview>
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <TitleWithBar title='Skills' />
          <div className='space-y-2'>
            <p>
              Programming Languages: Typescript, Javascript (proficient). GO,
              Python (knowledge)
            </p>
            <p>
              Frameworks: NextJs, Expo, ExpressJs, HonoJS (proficient). NestJS,
              Gin (knowledge)
            </p>
            <p>Databases: MySql,Postgres(proficient). MongoDb (knowledge)</p>
            <p>Version Control: Git, GitHub</p>
            <p>
              Other Tools & Technologies: Docker, OAuth, JWT, Rest Framework,
              Linux Terminal, AWS, Digital Ocean, Vultr, Heroku (cloud
              technologies)
            </p>
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
  <div className='flex-1 dark:bg-[#1a1a1a] print:dark:bg-white print:dark:text-black'>
    <div className='mx-4 mt-8'>
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

      <div>
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

      <div>
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
            A+{' '}
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

      <div>
        <TitleWithButtomBar title='A few word about myself' />
        <p className='mt-1 text-justify'>
          I am a self-taught, passionate full-stack web developer specializing
          in the <b>MERN</b> stack. I build scalable applications with{' '}
          <b>Node.js</b>, <b>Express.js</b>, and databases like <b>MongoDB</b>,{' '}
          <b>MySQL</b>, and <b>PostgreSQL</b>, alongside responsive{' '}
          <b>React.js</b> frontends and full-stack <b>Next.js</b> projects.
          Recently, I completed the full web app infrastructure for three
          organizations, including web servers, websites, and mobile apps. I’m
          skilled in <b>IoT</b> (<b>Raspberry Pi</b>, <b>NodeMCU</b>) and
          currently learning <b>Go</b> while diving deeper into{' '}
          <b>vector databases, RAG</b>.
        </p>
      </div>

      <div className='mt-2'>
        <TitleWithButtomBar title='Projects' />
        <div className='mt-2'>
          <h2 className='font-semibold'>Global Community Organization App </h2>
          <p className='text-sm'>
            Technologies: Next.js, TypeScript, NextAuth, PostgreSQL, Shadcn/ui.
          </p>
          <div className='text-justify'>
            <b>Solely developed</b> a full-stack application from front-end to
            back-end and database, powering an entire office's operations.
            Implemented secure user authentication, admin controls, and
            real-time analytics, managing over <b>300,000</b> tree records,{' '}
            <b>50,000+</b> child records, and continuously growing data.
            Supports <b>80+</b> employees with daily report generation.
            Strengthened expertise in end-to-end development and mission-driven
            solutions.{' '}
            <span className='text-xs'>
              Due to the project’s private nature, I cannot share the source
              code,
            </span>
            {'  '}
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
          <div className='mt-2'>
            <h2 className='font-semibold'>Inventory Management System</h2>
            <div>
              <p>
                A powerful, full-stack inventory management solution built with
                modern technologies, focusing on performance and scalability.
              </p>
              <LinkPreview
                className='underline'
                isStatic
                imageSrc='https://ion71pbmpa.ufs.sh/f/CIk0kzmBLUlu1rv29qXXBZt8M0LS4vjHYbuVFeGqEUlIWQAP'
                quality={70}
                url='https://github.com/devshahoriar/gco_inventory'
              >
                Source Code
              </LinkPreview>{' '}
              <LinkPreview
                className='underline'
                isStatic
                imageSrc='https://ion71pbmpa.ufs.sh/f/CIk0kzmBLUluetLAJsf0zDZuavXKUdFQ6VkWlCg3nSEBso71'
                quality={70}
                url='https://gco-inventory.vercel.app/'
              >
                Live
              </LinkPreview>
            </div>
          </div>

          <div className='mt-3'>
            Developed multiple proprietary web projects for organizations and
            startups over 4 years, leveraging my full-stack expertise. Check out
            my open-source projects on{' '}
            <LinkPreview
              className='underline'
              isStatic
              url='https://github.com/devshahoriar?tab=repositories'
              imageSrc='https://ion71pbmpa.ufs.sh/f/CIk0kzmBLUlu0Dx6aVTJ7OTVPYZ3D5uwXBhKGxzQ2tkL1CyN'
            >
              Github
            </LinkPreview>
            .
          </div>
        </div>
      </div>
      <a
        className='print:block text-xs underline mt-1 hidden'
        href='https://devshahoriar.vercel.app/'
      >
        Goto Online Version
      </a>
    </div>
  </div>
)

const TitleWithBar = ({ title }: { title: string }) => {
  return (
    <div className='flex items-center'>
      <p className='font-semibold text-xl'>{title}</p>
      <div className='bg-slate-500 h-[6px] flex-1 ml-5' />
    </div>
  )
}
