'use client'

import { motion } from 'motion/react'
import { Card, CardContent } from '@/components/shadcn/card'
import { Badge } from '@/components/shadcn/badge'
import { Button } from '@/components/shadcn/button'
import { ExternalLink, Github, Eye, Users, Database, Zap } from 'lucide-react'
import Link from 'next/link'

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: 'Global Community Organization App',
      description: 'Solely developed a full-stack application from front-end to back-end and database, powering an entire office\'s operations. Managing over 300,000 tree records, 50,000+ child records, and supporting 80+ employees with daily report generation.',
      technologies: ['Next.js', 'TypeScript', 'NextAuth', 'PostgreSQL', 'Shadcn/ui'],
      features: [
        'Secure user authentication & admin controls',
        'Real-time analytics dashboard',
        'Daily report generation system',
        'Scalable database architecture'
      ],
      stats: [
        { label: 'Tree Records', value: '300K+', icon: Database },
        { label: 'Child Records', value: '50K+', icon: Database },
        { label: 'Active Users', value: '80+', icon: Users },
        { label: 'Daily Reports', value: 'Auto', icon: Zap }
      ],
      blogLink: '/blog/gco-tree-count-app',
      isPrivate: true,
      featured: true
    },
    {
      title: 'ERP System (Solo Project)',
      description: 'A powerful, full-stack inventory management solution, Mini ERP built with modern technologies, focusing on performance and scalability for a small business.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Prisma'],
      features: [
        'Inventory management system',
        'Sales & purchase tracking',
        'Report generation',
        'User role management'
      ],
      githubLink: 'https://github.com/devshahoriar/gco_inventory_v2',
      liveLink: 'https://gco-inventory-v2.vercel.app/',
      isPrivate: false,
      featured: true
    },
    {
      title: 'Earth\'s Beauty Downloader',
      description: 'A beautiful and intuitive application for downloading high-quality wallpapers and images. Built with modern React technologies for optimal user experience.',
      technologies: ['React', 'JavaScript', 'CSS3', 'API Integration'],
      features: [
        'High-quality image downloads',
        'Category-based browsing',
        'Search functionality',
        'Responsive design'
      ],
      blogLink: '/blog/earths-beauty-downloader',
      githubLink: 'https://github.com/devshahoriar',
      isPrivate: false,
      featured: false
    }
  ]

  const additionalProjects = [
    'Multiple proprietary web projects for organizations',
    'Startup applications with full-stack architecture',
    'IoT integration projects with Raspberry Pi',
    'Mobile applications using Expo/React Native',
    'Custom CMS solutions for various clients'
  ]

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications that solve business problems and create value
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {featuredProjects.filter(project => project.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Project Info */}
                    <div className="p-8 space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          {project.isPrivate && (
                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
                              Private
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-lg">Key Features</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + idx * 0.1 }}
                              className="flex items-start gap-2 text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="font-semibold">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + idx * 0.05 }}
                            >
                              <Badge variant="outline">{tech}</Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-4">
                        {project.liveLink && (
                          <Button asChild>
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubLink && (
                          <Button variant="outline" asChild>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4 mr-2" />
                              Source Code
                            </a>
                          </Button>
                        )}
                        {project.blogLink && (
                          <Button variant="outline" asChild>
                            <Link href={project.blogLink}>
                              <Eye className="w-4 h-4 mr-2" />
                              Read More
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Project Stats (for GCO project) */}
                    {project.stats && (
                      <div className="p-8 bg-muted/30 flex flex-col justify-center">
                        <h4 className="font-semibold text-lg mb-6 text-center">Project Impact</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {project.stats.map((stat, idx) => (
                            <motion.div
                              key={stat.label}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + idx * 0.1 }}
                              className="text-center p-4 bg-background rounded-lg shadow-sm"
                            >
                              <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                              <div className="text-2xl font-bold text-primary mb-1">
                                {stat.value}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {stat.label}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-blue-600/5 border-primary/20">
            <CardContent className="p-0 space-y-6">
              <h3 className="text-2xl font-semibold">Additional Projects</h3>
              <p className="text-muted-foreground">
                Over 4 years, I've developed multiple proprietary web projects for organizations and startups, 
                leveraging my full-stack expertise:
              </p>
              <ul className="space-y-2 max-w-2xl mx-auto">
                {additionalProjects.map((project, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span>{project}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="pt-4">
                <Button variant="outline" asChild>
                  <a href="https://github.com/devshahoriar?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View All on GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
