import ThemeProvider from '@/components/provider/ThemeProvider'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const popins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://devshahoriar.vercel.app'),
  title: 'Devshahoriar | Full-Stack Web Developer',
  description:
    'I am Shahoriar Ahmed, Passionate and dedicated Full-Stack Web Developer with a robust skill set that ensures a seamless and efficient web development process from start to finish. #nextjs #nodejs #reactjs #tailwindcss',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning suppressContentEditableWarning>
      <head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta
          name='googlebot-news'
          content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        />
      </head>
      <body className={`antialiased ${popins.className}`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
       < GoogleAnalytics gaId='G-VR9M63Z11D' />
    </html>
  )
}
