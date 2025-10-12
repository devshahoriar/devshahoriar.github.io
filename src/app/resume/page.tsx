import { ModeToggle, PritButton } from '@/components/pages/homePageClient'
import { Button } from '@/components/shadcn/button'
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Mobile/Web Preview */}
      <div className='flex justify-center items-center print:hidden py-8'>
        <div className='text-center'>
          <h1 className='text-2xl font-semibold'>Shahoriar Ahmed</h1>
          <p className='text-sm text-gray-600 mt-2'>
            Full Stack Developer | Building LLM-powered AI Agents
          </p>
          <div className='flex items-center gap-3 mt-4 justify-center'>
            <ModeToggle />
            <PritButton />
            <Button asChild variant='outline' size={'sm'}>
              <Link href='/blog'>Blogs</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* ATS-Friendly Resume Section */}
      <section className='mx-auto max-w-4xl my-8 print:my-0 print:max-w-none bg-white text-black print:text-black hidden md:block print:block print:w-[210mm]'>
        <div className='p-8 print:px-4 print:py-3'>
          <ATSResume />
        </div>
      </section>
    </>
  )
}

const ATSResume = () => {
  return (
    <div className='space-y-5 print:space-y-3'>
      {/* Header */}
      <header className='text-center border-b border-gray-300 pb-4 print:pb-2'>
        <h1 className='text-3xl font-bold text-black mb-2 print:text-xl print:mb-1 print:leading-tight'>
          SHAHORIAR AHMED
        </h1>
        <p className='text-lg text-gray-700 mb-3 print:text-sm print:mb-1'>
          Full Stack Developer | Building LLM-powered AI Agents
        </p>
        <div className='flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm text-gray-600 print:gap-3 print:text-xs'>
          <div className='flex items-center gap-1'>
            <Mail size={14} className='print:w-3 print:h-3' />
            <span>shuvo1556@gmail.com</span>
          </div>
          <div className='flex items-center gap-1'>
            <Phone size={14} className='print:w-3 print:h-3' />
            <span>+8801777596337</span>
          </div>
          <div className='flex items-center gap-1'>
            <MapPin size={14} className='print:w-3 print:h-3' />
            <span>Rajshahi</span>
          </div>
          <div className='flex items-center gap-1'>
            <Github size={14} className='print:w-3 print:h-3' />
            <span>github.com/devshahoriar</span>
          </div>

          <div className='flex items-center gap-1'>
            <Globe size={14} className='print:w-3 print:h-3' />
            <span>devshahoriar.vercel.app</span>
          </div>

          <div className='flex items-center gap-1'>
            <Linkedin size={14} className='print:w-3 print:h-3' />
            <span>linkedin.com/in/devshahoriar</span>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section>
        <h2 className='text-xl font-bold text-black border-b border-gray-300 pb-1 mb-3 print:text-lg print:mb-2'>
          PROFESSIONAL SUMMARY
        </h2>
        <p className='text-gray-700 leading-relaxed text-justify print:text-xs print:leading-tight'>
          Self-taught, passionate full-stack web developer with 3+ years of
          experience specializing in the MERN stack. Proven track record of
          building scalable applications with Node.js, Express.js, and databases
          like MongoDB, MySQL, and PostgreSQL, alongside responsive React.js
          frontends and full-stack Next.js projects. Successfully completed full
          web app infrastructure for three organizations, including web servers,
          websites, and mobile apps. Skilled in IoT (Raspberry Pi, NodeMCU) and
          currently expanding expertise in cutting-edge technologies including
          AI agents, Langchain.js, vector databases, RAG (Retrieval-Augmented
          Generation), and Apache Kafka for event-driven architectures.
        </p>
      </section>

      {/* Technical Skills */}
      <section>
        <h2 className='text-xl font-bold text-black border-b border-gray-300 pb-1 mb-3 print:text-lg print:mb-2'>
          TECHNICAL SKILLS
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 print:grid-cols-3 gap-3 text-sm print:gap-2 print:text-xs'>
          <div>
            <h3 className='font-semibold text-black mb-1 print:mb-0'>
              Programming Languages:
            </h3>
            <p className='text-gray-700 print:leading-tight'>
              TypeScript, JavaScript (Proficient) | Go, Python (Knowledge)
            </p>
          </div>
          <div>
            <h3 className='font-semibold text-black mb-1 print:mb-0'>
              Frameworks & Libraries:
            </h3>
            <p className='text-gray-700 print:leading-tight'>
              Next.js, React.js, Express.js, Expo, Hono.js (Proficient) |
              NestJS, Gin (Knowledge)
            </p>
          </div>
          <div>
            <h3 className='font-semibold text-black mb-1 print:mb-0'>
              AI & Machine Learning:
            </h3>
            <p className='text-gray-700 print:leading-tight'>
              Langchain.js, LangGraph, AI Agents, Vector Databases, RAG
              (Retrieval-Augmented Generation)
            </p>
          </div>
          <div>
            <h3 className='font-semibold text-black mb-1 print:mb-0'>
              Databases:
            </h3>
            <p className='text-gray-700 print:leading-tight'>
              MySQL, PostgreSQL, MongoDB
            </p>
          </div>
          <div>
            <h3 className='font-semibold text-black mb-1 print:mb-0'>
              Message Queues & Streaming:
            </h3>
            <p className='text-gray-700 print:leading-tight'>
              Apache Kafka, Event-Driven Architecture
            </p>
          </div>
          <div>
            <h3 className='font-semibold text-black mb-1 print:mb-0'>
              Tools & Technologies:
            </h3>
            <p className='text-gray-700 print:leading-tight'>
              Docker, OAuth, JWT, REST APIs, Git, GitHub, Linux Terminal
            </p>
          </div>
          <div>
            <h3 className='font-semibold text-black mb-1 print:mb-0'>
              Cloud Platforms:
            </h3>
            <p className='text-gray-700 print:leading-tight'>
              AWS, Digital Ocean, Vultr, Heroku
            </p>
          </div>
          <div>
            <h3 className='font-semibold text-black mb-1 print:mb-0'>
              IoT & Hardware:
            </h3>
            <p className='text-gray-700 print:leading-tight'>
              Raspberry Pi, NodeMCU
            </p>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section>
        <h2 className='text-xl font-bold text-black border-b border-gray-300 pb-1 mb-3 print:text-lg print:mb-2'>
          PROFESSIONAL EXPERIENCE
        </h2>

        <div className='mb-4 print:mb-2'>
          <div className='flex justify-between items-start mb-1'>
            <h3 className='font-bold text-black print:text-sm'>
              Full Stack Developer
            </h3>
            <span className='text-sm text-gray-600 print:text-xs'>
              2023 - 2025
            </span>
          </div>
          <p className='text-sm text-gray-600 mb-2 print:text-xs print:mb-1'>
            Global Community Organization | Bagha, Rajshahi
          </p>
          <ul className='list-disc list-inside text-sm text-gray-700 space-y-1 print:text-xs print:space-y-0 print:leading-tight'>
            <li>
              Solely developed a full-stack application powering entire office
              operations
            </li>
            <li>
              Implemented secure user authentication, admin controls, and
              real-time analytics
            </li>
            <li>
              Manage over 300,000 tree records and 50,000+ child records with
              continuously growing data
            </li>
            <li>
              Support 80+ employees with daily/monthly report generation and
              data management
            </li>
          </ul>
        </div>

        <div>
          <div className='flex justify-between items-start mb-1'>
            <h3 className='font-bold text-black print:text-sm'>
              Front End Developer
            </h3>
            <span className='text-sm text-gray-600 print:text-xs'>
              2021 - 2023
            </span>
          </div>
          <p className='text-sm text-gray-600 mb-2 print:text-xs print:mb-1'>
            Xemiron IT Solutions | Vodra, Rajshahi
          </p>
          <ul className='list-disc list-inside text-sm text-gray-700 space-y-1 print:text-xs print:space-y-0 print:leading-tight'>
            <li>Started as an intern for the first 6 months, focusing on React.js fundamentals, React Router, and React Hooks</li>
            <li>
              Developed responsive web applications using modern JavaScript
              frameworks
            </li>
            <li>
              Collaborated with design and backend teams to deliver
              pixel-perfect user interfaces
            </li>
            <li>
              Optimized application performance and ensured cross-browser
              compatibility
            </li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className='text-xl font-bold text-black border-b border-gray-300 pb-1 mb-3'>
          EDUCATION
        </h2>
        <div>
          <div className='flex justify-between items-start mb-1'>
            <h3 className='font-bold text-black'>
              B.Sc in Computer Science and Engineering
            </h3>
            <span className='text-sm text-gray-600'>2021 - 2025</span>
          </div>
          <p className='text-sm text-gray-600 mb-1'>
            Varendra University, Rajshahi
          </p>
          <p className='text-sm text-gray-700'>
            Final Project: Full Stack Gym Management System
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className='text-xl font-bold text-black border-b border-gray-300 pb-1 mb-3'>
          CERTIFICATIONS
        </h2>
        <div className='space-y-3 text-sm'>
          <div>
            <h3 className='font-semibold text-black'>
              Cloud Essentials Knowledge
            </h3>
            <p className='text-gray-600'>
              Grade: A+ | 2025 |{' '}
              <a
                className='underline'
                target='_blank'
                href='https://skillbuilder.aws/380fcf7d-9489-4198-922c-a588e035c559'
              >
                Link
              </a>
            </p>
          </div>
          <div>
            <h3 className='font-semibold text-black'>Reactive Accelerator</h3>
            <p className='text-gray-600'>
              React Advanced, Next.js, MongoDB | Score: 85.15% | 2022 |{' '}
              <a
                className='underline'
                target='_blank'
                href='https://learnwithsumit.com/certificates/verify/LWSCTXN-H6Z6UACJ'
              >
                Link
              </a>
            </p>
          </div>
          <div>
            <h3 className='font-semibold text-black'>
              Think in a Redux Way Course
            </h3>
            <p className='text-gray-600'>
              React Redux, Redux Toolkit | Score: 89.29% | 2022 |{' '}
              <a
                className='underline'
                target='_blank'
                href='https://learnwithsumit.com/certificates/verify/LWSCTXN-VWWQ9WRM'
              >
                Link
              </a>
            </p>
          </div>
        </div>
      </section>
      <br />

      {/* Key Projects */}
      <section>
        <h2 className='text-xl font-bold text-black border-b border-gray-300 pb-1 mb-3'>
          PROJECTS
        </h2>
        {/* project 1 */}
        <div className='mb-4'>
          <div className='flex gap-2 items-center'>
            <h3 className='font-bold text-black mb-1'>
              Global Community Organization App (Private)
            </h3>
            <a
              className='underline text-xs'
              target='_blank'
              href='https://devshahoriar.vercel.app/blog/gco-tree-count-app'
            >
              Blog
            </a>
          </div>
          <p className='text-sm text-gray-600 mb-2'>
            Technologies: Next.js, TypeScript, NextAuth, PostgreSQL, Shadcn/ui
          </p>
          <ul className='list-disc list-inside text-sm text-gray-700 space-y-1 ml-5'>
            <li>
              Full-stack application from front-end to back-end and database
            </li>
            <li>
              Secure user authentication, admin controls, and real-time
              analytics
            </li>
            <li>Manages 300,000+ tree records and 50,000+ child records</li>
            <li>Supports 80+ employees with daily report generation</li>
          </ul>
        </div>
        {/* project 2 */}
        <div className='mb-4'>
          <div className='flex gap-2 items-center'>
            <h3 className='font-bold text-black mb-1'>ERP System</h3>
            <a
              className='underline text-xs'
              target='_blank'
              href='https://github.com/devshahoriar/two_erp'
            >
              Github
            </a>
            <a
              className='underline text-xs'
              target='_blank'
              href='https://gco-inventory-v2.vercel.app/'
            >
              Live
            </a>
          </div>
          
          <p className='text-sm text-gray-600 mb-2'>
            Full-stack inventory management solution for small business
          </p>
          <ul className='list-disc list-inside text-sm text-gray-700 space-y-1 ml-5'>
            <li>
              Built with modern technologies focusing on performance and
              scalability
            </li>
            <li>
              Complete inventory management with user authentication and
              role-based access
            </li>
            
            <li>Features: product management, order processing, and reporting</li>
            <li>Multiple branches and warehouses support</li>
          </ul>
        </div>
        {/* project 3 */}
        <div className='mb-4'>
          <div className='flex gap-2 items-center'>
            <h3 className='font-bold text-black mb-1'>
              AI-Powered E-Commerce App with Natural Language Control
            </h3>
            <a
              className='underline text-xs'
              target='_blank'
              href='https://github.com/devshahoriar/shop-agent'
            >
              Github
            </a>
            <a
              className='underline text-xs'
              target='_blank'
              href='https://www.youtube.com/watch?v=69i_wSIV8j4'
            >
              Video
            </a>
          </div>
          <p className='text-sm text-gray-600 mb-2'>
            Technologies: Next.js, tRPC, Hono, Prisma, LangChain.js, Google Gemini AI, Socket.io
          </p>
          <ul className='list-disc list-inside text-sm text-gray-700 space-y-1 ml-5'>
            <li>
              Revolutionary e-commerce interface controlled entirely through natural language commands
            </li>
            <li>
              Voice-to-action functionality: "Search for gold product", "Add first product to cart"
            </li>
            <li>
              Real-time UI updates using Socket.io for instant user interactions
            </li>
            <li>
              Type-safe client-server communication with tRPC and SEO-optimized SSR product pages
            </li>
          </ul>
        </div>


      </section>

      {/* Core Competencies */}
    </div>
  )
}
