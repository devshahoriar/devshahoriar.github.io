import type { Metadata } from 'next'
import './globals.css'
import ThemeProvider from '@/provider/ThemeProvider'
import { Poppins } from 'next/font/google'

const popins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'devshahorair',
  description:
    'Passionate and dedicated Full-Stack Web Developer with a robust skill set that ensures a seamless and efficient web development process from start to finish.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${popins.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
