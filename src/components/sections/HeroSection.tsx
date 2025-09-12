'use client'

import { InteractiveGridPattern } from '@/components/magicui/interactive-grid-pattern'
import { Button } from '@/components/shadcn/button'
import { cn } from '@/lib/utils'
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'

const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const HeroSection = () => {
  return (
    <section
      id='home'
      className='min-h-screen relative overflow-hidden flex items-center justify-center'
    >
      {/* Gradient Overlay */}
      <InteractiveGridPattern
        className={cn(
          '[mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]',
          'md:inset-x-[50%]  md:inset-y-0 h-[100%] skew-y-12 opacity-50 md:opacity-100 -z-[1]'
        )}
      />

      <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-16'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='text-center lg:text-left space-y-6'
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className='space-y-2'
            >
              <p className='text-primary font-medium tracking-wider uppercase text-sm'>
                Full Stack Web Developer
              </p>
              <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold leading-tight'>
                <span className='block'>Hi, I'm</span>
                <span className='block bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent'>
                  Shahoriar Ahmed
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed'
            >
              Passionate MERN stack developer specializing in building scalable
              web applications. Currently managing 300,000+ tree records and
              serving 80+ employees daily.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className='flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground'
            >
              <div className='flex items-center gap-2'>
                <MapPin className='w-4 h-4' />
                <span>Rajshahi, Bangladesh</span>
              </div>
              <div className='flex items-center gap-2'>
                <Mail className='w-4 h-4' />
                <span>shuvo1556@gmail.com</span>
              </div>
              <div className='flex items-center gap-2'>
                <Phone className='w-4 h-4' />
                <span>+880 1777 596337</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'
            >
              <Button
                size='lg'
                onClick={() => scrollToSection('#contact')}
                className='bg-gradient-to-r from-black  to-blue-700  text-white dark:text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-0 hover:opacity-90'
              >
                Get In Touch
              </Button>
              <Button
                variant='outline'
                size='lg'
                onClick={() => window.open('/api/resume', '_blank')}
                className='px-8 py-3 text-lg font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300'
              >
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className='flex gap-4 justify-center lg:justify-start'
            >
              <Button
                variant='ghost'
                size='sm'
                onClick={() =>
                  window.open('https://github.com/devshahoriar', '_blank')
                }
                className='w-12 h-12 p-0 hover:bg-primary/10'
              >
                <Github className='w-5 h-5' />
              </Button>
              <Button
                variant='ghost'
                size='sm'
                onClick={() =>
                  window.open(
                    'https://www.linkedin.com/in/devshahoriar/',
                    '_blank'
                  )
                }
                className='w-12 h-12 p-0 hover:bg-primary/10'
              >
                <Linkedin className='w-5 h-5' />
              </Button>
              <Button
                variant='ghost'
                size='sm'
                onClick={() =>
                  window.open('mailto:shuvo1556@gmail.com', '_blank')
                }
                className='w-12 h-12 p-0 hover:bg-primary/10'
              >
                <Mail className='w-5 h-5' />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='flex justify-center lg:justify-end'
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='relative pb-10 md:pb-0'
            >
              <div className='relative w-80 h-80 md:w-96 md:h-96'>
                {/* Gradient Ring */}
                <div className='absolute inset-0 bg-gradient-to-r from-primary via-blue-600 to-purple-600 rounded-full p-1'>
                  <div className='w-full h-full bg-background rounded-full p-4'>
                    <div className='relative w-full h-full rounded-full overflow-hidden'>
                      <Image
                        src='/profile.jpg'
                        alt='Shahoriar Ahmed'
                        fill
                        className='object-cover'
                        priority
                        // placeholder='blur'
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className='absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-2 rounded-full text-sm font-semibold shadow-lg'
                >
                  3+ Years
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  className='absolute -bottom-4 -left-4 bg-blue-600 text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg'
                >
                  MERN Stack
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className='absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block'
        >
          <motion.button
            onClick={() => scrollToSection('#about')}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className='flex flex-col items-center text-muted-foreground hover:text-primary transition-colors'
          >
            <span className='text-sm mb-2'>Scroll Down</span>
            <ArrowDown className='w-5 h-5' />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
