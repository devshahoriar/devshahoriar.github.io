'use client'

import { Badge } from '@/components/shadcn/badge'
import { Card, CardContent } from '@/components/shadcn/card'
import { Briefcase, Building, Calendar, MapPin } from 'lucide-react'
import { motion } from 'motion/react'

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Global Community Organization',
      location: 'Bagha, Rajshahi',
      period: '2023 - Present',
      type: 'Full-time',
      description: [
        "Solely developed a full-stack application from front-end to back-end and database, powering an entire office's operations",
        'Implemented secure user authentication, admin controls, and real-time analytics',
        'Managing over 300,000 tree records, 50,000+ child records, and continuously growing data',
        'Supporting 80+ employees with daily report generation',
        'Built with Next.js, TypeScript, NextAuth, PostgreSQL, and Shadcn/ui',
      ],
      technologies: [
        'Next.js',
        'TypeScript',
        'PostgreSQL',
        'NextAuth',
        'Shadcn/ui',
      ],
      current: true,
    },
    {
      title: 'Front End Developer',
      company: 'Xemiron IT Solutions',
      location: 'Vodra, Rajshahi',
      period: '2021 - 2023',
      type: 'Part-time',
      description: [
        'Developed responsive web applications using React.js and modern frontend technologies',
        'Collaborated with design teams to implement pixel-perfect UI/UX designs',
        'Optimized application performance and implemented best practices',
        'Worked on multiple client projects delivering high-quality solutions',
      ],
      technologies: [
        'React.js',
        'JavaScript',
        'HTML/CSS',
        'Tailwind CSS',
        'Git',
      ],
      current: false,
    },
  ]

  return (
    <section id='experience' className='py-20 lg:py-32'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
            Professional{' '}
            <span className='bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent'>
              Experience
            </span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Building impactful solutions and growing with every challenge
          </p>
        </motion.div>

        <div className='max-w-4xl mx-auto'>
          {/* Timeline */}
          <div className='relative'>
            {/* Timeline Line */}
            <div className='absolute md:left-8 left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-blue-600'></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                className='relative mb-12 last:mb-0'
              >
                {/* Timeline Dot */}
                <div className='absolute md:left-6 left-[5px] w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10'>
                  {experience.current && (
                    <div className='absolute inset-0 bg-primary rounded-full animate-ping'></div>
                  )}
                </div>

                {/* Experience Card */}
                <div className='md:ml-20 ml-7'>
                  <Card className='md:p-6 p-4 hover:shadow-lg transition-all duration-300 group'>
                    <CardContent className='p-0 space-y-4'>
                      {/* Header */}
                      <div className='flex flex-col md:flex-row md:items-start md:justify-between gap-4'>
                        <div className='space-y-2'>
                          <div className='flex items-center gap-2'>
                            <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>
                              {experience.title}
                            </h3>
                            {experience.current && (
                              <Badge className='bg-green-500 text-white'>
                                Current
                              </Badge>
                            )}
                          </div>
                          <div className='flex items-center gap-2 text-muted-foreground'>
                            <Building className='w-4 h-4' />
                            <span className='font-medium'>
                              {experience.company}
                            </span>
                          </div>
                          <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground'>
                            <div className='flex items-center gap-1'>
                              <MapPin className='w-4 h-4' />
                              <span>{experience.location}</span>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Calendar className='w-4 h-4' />
                              <span>{experience.period}</span>
                            </div>
                            <div className='flex items-center gap-1'>
                              <Briefcase className='w-4 h-4' />
                              <span>{experience.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className='space-y-2'>
                        <ul className='space-y-2'>
                          {experience.description.map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.3 + idx * 0.1 }}
                              className='flex items-start gap-2 text-muted-foreground'
                            >
                              <div className='w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                              <span>{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className='pt-4 border-t border-border'>
                        <div className='flex flex-wrap gap-2'>
                          {experience.technologies.map((tech, idx) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.3 + idx * 0.05 }}
                            >
                              <Badge variant='secondary' className='text-xs'>
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-16 text-center'
        >
          <Card className='p-8 bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20'>
            <CardContent className='p-0'>
              <h3 className='text-2xl font-semibold mb-4'>
                Ready for New Challenges
              </h3>
              <p className='text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                With 3+ years of experience in web development, I have
                successfully delivered end-to-end solutions for multiple
                organizations. My expertise spans from IoT integration to modern
                web applications, with a strong focus on scalable and
                maintainable code.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ExperienceSection
