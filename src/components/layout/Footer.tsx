'use client'

import { Button } from '@/components/shadcn/button'
import { ArrowUp, Github, Heart, Linkedin, Mail } from 'lucide-react'
import { motion } from 'motion/react'

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/devshahoriar',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/devshahoriar/',
    label: 'LinkedIn',
  },
  {
    icon: Mail,
    href: 'mailto:shuvo1556@gmail.com',
    label: 'Email',
  },
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className='bg-muted/50 border-t border-border'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='py-12'>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {/* Brand & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='lg:col-span-2 space-y-4'
            >
              <div className='space-y-2'>
                <h3 className='text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent'>
                  Shahoriar Ahmed
                </h3>
                <p className='text-muted-foreground text-sm'>
                  Full Stack Web Developer
                </p>
              </div>
              <p className='text-muted-foreground leading-relaxed max-w-md'>
                Passionate MERN stack developer building scalable web
                applications and solving real-world problems through technology.
                Always learning, always growing.
              </p>
              <div className='flex gap-4'>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Button
                      variant='ghost'
                      size='sm'
                      asChild
                      className='w-10 h-10 p-0 hover:bg-primary/10'
                    >
                      <a
                        href={social.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={social.label}
                      >
                        <social.icon className='w-4 h-4' />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className='space-y-4'
            >
              <h4 className='font-semibold'>Quick Links</h4>
              <ul className='space-y-2'>
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className='text-muted-foreground hover:text-primary transition-colors text-sm'
                    >
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className='space-y-4'
            >
              <h4 className='font-semibold'>Get in Touch</h4>
              <div className='space-y-2 text-sm text-muted-foreground'>
                <p> Rajshahi, Bangladesh</p>
                <a
                  href='mailto:shuvo1556@gmail.com'
                  className='hover:text-primary transition-colors block'
                >
                  shuvo1556@gmail.com
                </a>
                <a
                  href='tel:+8801777596337'
                  className='hover:text-primary transition-colors block'
                >
                  +880 1777 596337
                </a>
              </div>
              <div className='pt-2'>
                <span className='inline-flex items-center gap-1 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded-full'>
                  <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                  Available for work
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4'
        >
          <div className='flex items-center gap-1 text-sm text-muted-foreground'>
            <span>© {currentYear} Shahoriar Ahmed. Made with</span>
            <Heart className='w-4 h-4 text-red-500 fill-current' />
            <span>using Next.js</span>
          </div>

          <Button
            variant='ghost'
            size='sm'
            onClick={scrollToTop}
            className='group'
          >
            <ArrowUp className='w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform' />
            Back to top
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
