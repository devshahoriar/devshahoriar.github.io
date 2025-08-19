'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/shadcn/card'
import { Badge } from '@/components/shadcn/badge'
import { Code, Database, Globe, Smartphone, Award, BookOpen, ExternalLink } from 'lucide-react'

const AboutSection = () => {
  const stats = [
    { number: '3+', label: 'Years Experience', icon: Code },
    { number: '300K+', label: 'Tree Records Managed', icon: Database },
    { number: '80+', label: 'Employees Supported', icon: Globe },
    { number: '15+', label: 'Projects Completed', icon: Smartphone },
  ]

  const qualities = [
    'Passion for coding',
    'Self-learning capability',
    'Team work',
    'Hard work',
  ]

  const education = {
    degree: 'B.Sc in Computer Science and Engineering',
    institution: 'Varendra University, Rajshahi',
    period: '2021-2025',
    project: 'Full stack Gym Management system'
  }

  const certifications = [
    {
      name: 'Think in a Redux way Course',
      score: '89.29%',
      year: '2022',
      topics: 'React Redux, Redux Toolkit',
      link: 'https://learnwithsumit.com/certificates/verify/LWSCTXN-VWWQ9WRM'
    },
    {
      name: 'Reactive Accelerator',
      score: '85.15%',
      year: '2022',
      topics: 'React Advanced, Next.js, MongoDB',
      link: 'https://learnwithsumit.com/certificates/verify/LWSCTXN-H6Z6UACJ'
    },
    {
      name: 'Cloud Essentials Knowledge',
      score: 'A+',
      year: '2025',
      topics: 'Job Roles in the Cloud & Cloud Essentials',
      link: 'https://ion71pbmpa.ufs.sh/f/CIk0kzmBLUluEPJpFku1PSn3AjaRpWHmy8TfewO2xDJkrq0l'
    }
  ]

  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate full-stack developer with a strong foundation in modern web technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a self-taught, passionate full-stack web developer specializing in the <strong>MERN</strong> stack. 
                  I build scalable applications with <strong>Node.js</strong>, <strong>Express.js</strong>, and databases like 
                  <strong> MongoDB</strong>, <strong>MySQL</strong>, and <strong>PostgreSQL</strong>, alongside responsive 
                  <strong> React.js</strong> frontends and full-stack <strong>Next.js</strong> projects.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Recently, I completed the full web app infrastructure for three organizations, including web servers, 
                  websites, and mobile apps. I'm skilled in <strong>IoT</strong> (<strong>Raspberry Pi</strong>, 
                  <strong>NodeMCU</strong>) and currently learning <strong>Go</strong> while diving deeper into 
                  <strong> Langchain-js, vector databases, RAG</strong>.
                </p>
              </CardContent>
            </Card>

            {/* Key Qualities */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Key Qualities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {qualities.map((quality, index) => (
                    <motion.div
                      key={quality}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Badge variant="secondary" className="px-3 py-1">
                        {quality}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Education
                </h3>
                <div className="space-y-2">
                  <h4 className="font-medium">{education.degree}</h4>
                  <p className="text-muted-foreground">{education.institution}</p>
                  <p className="text-sm text-muted-foreground">{education.period}</p>
                  <p className="text-sm">
                    <strong>Final Project:</strong> {education.project}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - Stats and Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-0 space-y-3">
                      <stat.icon className="w-8 h-8 text-primary mx-auto" />
                      <div className="text-3xl font-bold text-primary">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-4 border-primary pl-4 py-2 hover:bg-muted/50 rounded-r-lg transition-colors cursor-pointer group"
                      onClick={() => window.open(cert.link, '_blank')}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium group-hover:text-primary transition-colors">{cert.name}</h4>
                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <p className="text-sm text-muted-foreground">{cert.topics}</p>
                          <div className="flex justify-between items-center mt-1">
                            <span className="text-sm text-muted-foreground">{cert.year}</span>
                            <Badge variant="outline" className="text-primary">
                              {cert.score}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
