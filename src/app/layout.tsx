import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mary Poppins Child Care - Professional Nanny Services',
  description: 'Professional childcare services including hotel nanny, at home nanny, travel nanny, weddings & events nanny, and yacht nanny services. Trusted by 80+ families.',
  keywords: ['childcare', 'nanny services', 'babysitting', 'hotel nanny', 'travel nanny', 'wedding nanny', 'yacht nanny', 'professional childcare'],
  authors: [{ name: 'Mary Poppins Child Care' }],
  creator: 'Mary Poppins Child Care',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marypoppins-childcare.com',
    title: 'Mary Poppins Child Care - Professional Nanny Services',
    description: 'Professional childcare services including hotel nanny, at home nanny, travel nanny, weddings & events nanny, and yacht nanny services. Trusted by 80+ families.',
    siteName: 'Mary Poppins Child Care',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mary Poppins Child Care - Professional Nanny Services',
    description: 'Professional childcare services including hotel nanny, at home nanny, travel nanny, weddings & events nanny, and yacht nanny services.',
    creator: '@marypoppins',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://8a6f496534fc4506a09943f72f25b629.elf.site" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
