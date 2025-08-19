'use client'

import { Button } from '@/components/shadcn/button'
import { Card, CardContent } from '@/components/shadcn/card'
import { Input } from '@/components/shadcn/input'
import { Label } from '@/components/shadcn/label'
import {
    Github,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send
} from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shuvo1556@gmail.com',
      href: 'mailto:shuvo1556@gmail.com',
      color: 'text-red-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1777 596337',
      href: 'tel:+8801777596337',
      color: 'text-green-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Rajshahi, Bangladesh',
      href: 'https://maps.google.com',
      color: 'text-blue-500',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/devshahoriar',
      color: 'hover:text-gray-700 dark:hover:text-gray-300',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/devshahoriar/',
      color: 'hover:text-blue-600',
    },
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const subject = encodeURIComponent(
      formData.subject || 'Contact from Portfolio'
    )
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )
    window.open(`mailto:shuvo1556@gmail.com?subject=${subject}&body=${body}`)
  }

  return (
    <section id='contact' className='py-20 lg:py-32 bg-muted/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
            Get In{' '}
            <span className='bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent'>
              Touch
            </span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Ready to work together? Let's discuss your project and bring your
            ideas to life.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='space-y-8'
          >
            <div>
              <h3 className='text-2xl font-semibold mb-6'>
                Let's Start a Conversation
              </h3>
              <p className='text-muted-foreground leading-relaxed mb-8'>
                I'm always interested in new opportunities and exciting
                projects. Whether you're looking for a full-stack developer,
                need consultation on your existing project, or just want to say
                hello, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className='space-y-4'>
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={contact.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className='p-4 hover:shadow-md transition-all duration-300 group cursor-pointer'>
                    <CardContent className='p-0'>
                      <a
                        href={contact.href}
                        target={
                          contact.href.startsWith('http') ? '_blank' : undefined
                        }
                        rel={
                          contact.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className='flex items-center gap-4'
                      >
                        <div
                          className={`p-3 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors`}
                        >
                          <contact.icon
                            className={`w-5 h-5 ${contact.color}`}
                          />
                        </div>
                        <div>
                          <div className='font-medium'>{contact.label}</div>
                          <div className='text-muted-foreground text-sm'>
                            {contact.value}
                          </div>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className='pt-6'>
              <h4 className='font-semibold mb-4'>Follow Me</h4>
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
                      variant='outline'
                      size='lg'
                      asChild
                      className={`transition-colors ${social.color}`}
                    >
                      <a
                        href={social.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={social.label}
                      >
                        <social.icon className='w-5 h-5' />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Availability */}
            {/* Removed availability section as requested */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className='p-8'>
              <CardContent className='p-0'>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='space-y-2'>
                    <Label htmlFor='name'>Name *</Label>
                    <Input
                      id='name'
                      name='name'
                      type='text'
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder='Your full name'
                      required
                      className='w-full'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='email'>Email *</Label>
                    <Input
                      id='email'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder='your.email@example.com'
                      required
                      className='w-full'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='subject'>Subject</Label>
                    <Input
                      id='subject'
                      name='subject'
                      type='text'
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder='Project discussion, collaboration, etc.'
                      className='w-full'
                    />
                  </div>

                  <div className='space-y-2'>
                    <Label htmlFor='message'>Message *</Label>
                    <textarea
                      id='message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder='Tell me about your project, timeline, budget, or any questions you have...'
                      required
                      rows={6}
                      className='w-full px-3 py-2 border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-md resize-none'
                    />
                  </div>

                  <Button type='submit' className='w-full' size='lg'>
                    <Send className='w-4 h-4 mr-2' />
                    Send Message
                  </Button>

                  <p className='text-xs text-muted-foreground text-center'>
                    This form will open your email client. Alternatively, you
                    can email me directly at{' '}
                    <a
                      href='mailto:shuvo1556@gmail.com'
                      className='text-primary hover:underline'
                    >
                      shuvo1556@gmail.com
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
