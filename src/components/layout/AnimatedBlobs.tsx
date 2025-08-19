'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

  const colorPalettes = [
    'bg-gradient-to-r from-blue-400/40 to-purple-600/40',
    'bg-gradient-to-r from-purple-400/35 to-pink-600/35',
    'bg-gradient-to-r from-cyan-400/40 to-blue-600/40',
    'bg-gradient-to-r from-indigo-400/35 to-purple-600/35',
    'bg-gradient-to-r from-pink-400/40 to-rose-600/40',
    'bg-gradient-to-r from-emerald-400/35 to-teal-600/35',
    'bg-gradient-to-r from-orange-400/35 to-red-600/35',
    'bg-gradient-to-r from-violet-400/40 to-indigo-600/40',
    'bg-gradient-to-r from-lime-400/35 to-green-600/35',
    'bg-gradient-to-r from-amber-400/35 to-yellow-600/35',
  ]

  const sizes = [
    'w-48 h-48',
    'w-56 h-56',
    'w-64 h-64',
    'w-72 h-72',
    'w-80 h-80',
    'w-96 h-96',
  ]


const AnimatedBlobs = () => {
  const [mounted, setMounted] = useState(false)
  const [blobs, setBlobs] = useState<any[]>([])


  useEffect(() => {
    setMounted(true)
    const generateBlobs = () => {
      const newBlobs = []
      const areas = [
        { x: [5, 25], y: [5, 25] }, // top-left
        { x: [30, 50], y: [5, 25] }, // top-center
        { x: [55, 75], y: [5, 25] }, // top-right
        { x: [5, 25], y: [35, 55] }, // mid-left
        { x: [30, 50], y: [35, 55] }, // mid-center
        { x: [55, 75], y: [35, 55] }, // mid-right
        { x: [5, 35], y: [65, 85] }, // bottom-left
        { x: [45, 75], y: [65, 85] }, // bottom-right
      ]

      for (let i = 0; i < 8; i++) {
        const area = areas[i]
        // Random position within the assigned area
        const randomX = Math.random() * (area.x[1] - area.x[0]) + area.x[0]
        const randomY = Math.random() * (area.y[1] - area.y[0]) + area.y[0]

        newBlobs.push({
          id: i,
          size: sizes[Math.floor(Math.random() * sizes.length)],
          color:
            colorPalettes[Math.floor(Math.random() * colorPalettes.length)],
          initialX: `${randomX}%`,
          initialY: `${randomY}%`,
        })
      }
      setBlobs(newBlobs)
    }

    generateBlobs()
  }, [])

  if (!mounted) return null

  return (
    <div className='fixed inset-0 pointer-events-none overflow-hidden z-[1]'>
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className={`absolute ${blob.size} ${blob.color} rounded-full blur-3xl`}
          style={{
            left: blob.initialX,
            top: blob.initialY,
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: [0, 1, 1.05, 1],
            opacity: [0, 0.5, 0.4, 0.5],
          }}
          transition={{
            scale: {
              duration: 3,
              delay: blob.id * 0.3,
              ease: 'easeOut',
            },
            opacity: {
              duration: 8 + blob.id * 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            },
          }}
        />
      ))}

    </div>
  )
}

export default AnimatedBlobs
