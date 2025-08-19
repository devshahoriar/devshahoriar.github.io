'use client'

import { Badge } from '@/components/shadcn/badge'
import { Card, CardContent } from '@/components/shadcn/card'
import {
  Brain,
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Terminal,
} from 'lucide-react'
import { motion } from 'motion/react'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'TypeScript', level: 'Proficient', color: 'bg-blue-500' },
        { name: 'JavaScript', level: 'Proficient', color: 'bg-yellow-500' },
        { name: 'Go', level: 'Knowledge', color: 'bg-cyan-500' },
        { name: 'Python', level: 'Knowledge', color: 'bg-green-500' },
      ],
    },
    {
      title: 'Frameworks & Technologies',
      icon: Globe,
      skills: [
        { name: 'Next.js', level: 'Proficient', color: 'bg-black' },
        { name: 'React.js', level: 'Proficient', color: 'bg-blue-400' },
        { name: 'Express.js', level: 'Proficient', color: 'bg-gray-600' },
        { name: 'Hono.js', level: 'Proficient', color: 'bg-orange-500' },
        { name: 'NestJS', level: 'Knowledge', color: 'bg-red-500' },
        { name: 'Gin', level: 'Knowledge', color: 'bg-cyan-600' },
      ],
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        { name: 'Expo', level: 'Proficient', color: 'bg-purple-600' },
        { name: 'React Native', level: 'Knowledge', color: 'bg-blue-400' },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', level: 'Proficient', color: 'bg-blue-600' },
        { name: 'PostgreSQL', level: 'Proficient', color: 'bg-blue-700' },
        { name: 'MongoDB', level: 'Proficient', color: 'bg-green-600' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: [
        { name: 'Docker', level: 'Proficient', color: 'bg-blue-500' },
        { name: 'AWS', level: 'Knowledge', color: 'bg-orange-500' },
        { name: 'Digital Ocean', level: 'Knowledge', color: 'bg-blue-500' },

        { name: 'Heroku', level: 'Knowledge', color: 'bg-purple-600' },
      ],
    },
    {
      title: 'Tools & Others',
      icon: Terminal,
      skills: [
        { name: 'Git & GitHub', level: 'Proficient', color: 'bg-gray-800' },
        { name: 'Linux Terminal', level: 'Knowledge', color: 'bg-gray-700' },
        { name: 'OAuth & JWT', level: 'Proficient', color: 'bg-green-600' },
        { name: 'REST APIs', level: 'Proficient', color: 'bg-blue-600' },
      ],
    },
    {
      title: 'IoT & Hardware',
      icon: Cpu,
      skills: [
        { name: 'Raspberry Pi', level: 'Knowledge', color: 'bg-red-600' },
        { name: 'NodeMCU', level: 'Knowledge', color: 'bg-blue-600' },
      ],
    },
    {
      title: 'Currently Learning',
      icon: Brain,
      skills: [
        { name: 'Langchain-js', level: 'Learning', color: 'bg-purple-500' },
        { name: 'Vector Databases', level: 'Learning', color: 'bg-indigo-500' },
        {
          name: 'RAG (Retrieval-Augmented Generation)',
          level: 'Learning',
          color: 'bg-pink-500',
        },
      ],
    },
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Proficient':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
      case 'Knowledge':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
      case 'Learning':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300'
    }
  }

  return (
    <section id='skills' className='py-20 lg:py-32 bg-muted/30'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>
            Technical{' '}
            <span className='bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent'>
              Skills
            </span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <Card className='h-full hover:shadow-lg transition-all duration-300 group'>
                <CardContent className='p-6 space-y-4'>
                  {/* Category Header */}
                  <div className='flex items-center gap-3 mb-4'>
                    <div className='p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors'>
                      <category.icon className='w-5 h-5 text-primary' />
                    </div>
                    <h3 className='font-semibold text-lg'>{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className='space-y-3'>
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className='flex items-center justify-between'
                      >
                        <div className='flex items-center gap-2'>
                          <div
                            className={`w-2 h-2 rounded-full ${skill.color}`}
                          ></div>
                          <span className='text-sm font-medium'>
                            {skill.name}
                          </span>
                        </div>
                        <Badge
                          variant='secondary'
                          className={`text-xs ${getLevelColor(skill.level)}`}
                        >
                          {skill.level}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='mt-16 text-center'
        >
          <Card className='p-8 bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20'>
            <CardContent className='p-0'>
              <h3 className='text-2xl font-semibold mb-4'>Always Learning</h3>
              <p className='text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
                Technology evolves rapidly, and so do I. I'm constantly
                exploring new frameworks, languages, and methodologies to stay
                at the forefront of web development. Currently diving deep into
                AI integration and advanced backend architectures.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
