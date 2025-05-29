import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI/백엔드 기반 풀스택 개발자 | Portfolio',
  description: '최신 기술과 AI를 활용하여 혁신적인 웹 서비스를 개발하는 풀스택 개발자의 포트폴리오입니다.',
  keywords: 'fullstack developer, AI developer, React, Next.js, Spring Boot, 풀스택 개발자, AI 개발자',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'AI/백엔드 기반 풀스택 개발자 | Portfolio',
    description: '최신 기술과 AI를 활용하여 혁신적인 웹 서비스를 개발하는 풀스택 개발자의 포트폴리오입니다.',
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI/백엔드 기반 풀스택 개발자 | Portfolio',
    description: '최신 기술과 AI를 활용하여 혁신적인 웹 서비스를 개발하는 풀스택 개발자의 포트폴리오입니다.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  )
}
