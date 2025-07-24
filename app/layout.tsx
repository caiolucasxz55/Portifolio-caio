import type React from "react"
import type { Metadata, Viewport } from "next" 
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap', // Melhora o FOUT (Flash of Unstyled Text)
  adjustFontFallback: false // Otimização para Next.js
})

export const metadata: Metadata = {
  title: {
    default: "Caio Lucas Silva Gomes - Desenvolvedor Full Stack",
    template: "%s | Caio Lucas"
  },
  description: "Desenvolvedor Full Stack especializado em Python, Java e TypeScript. Apaixonado por machine learning, inteligência artificial e aplicações de alta performance.",
  keywords: [
    "Desenvolvedor Full Stack", 
    "Python", 
    "Java", 
    "TypeScript", 
    "React", 
    "Node.js", 
    "Machine Learning", 
    "Inteligência Artificial"
  ],
  authors: [{ name: "Caio Lucas Silva Gomes", url: "https://github.com/caiolucasxz55" }],
  metadataBase: new URL('https://seusite.com'), 
  alternates: {
    canonical: '/',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, 
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ],
  colorScheme: 'light dark',
  interactiveWidget: 'resizes-content'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased touch-pan-y selection:bg-gray-900 selection:text-white dark:selection:bg-gray-100 dark:selection:text-gray-900`}>
        {children}
      </body>
    </html>
  )
}