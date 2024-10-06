import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/provider/ThemeProvider'
import { Poppins } from 'next/font/google'

const popins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://devshahoriar.vercel.app'),
  title: 'Devshahorair | Full-Stack Web Developer',
  description:
    'I am Shahorair Ahmed, Passionate and dedicated Full-Stack Web Developer with a robust skill set that ensures a seamless and efficient web development process from start to finish. #nextjs #nodejs #reactjs #tailwindcss',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="googlebot-news" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
      </head>
      <body className={`antialiased ${popins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem

        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
