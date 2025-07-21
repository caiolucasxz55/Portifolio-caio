import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Caio Lucas Silva Gomes - Full Stack Developer",
  description:
    "Full Stack Developer specialized in Python, Java, and TypeScript. Passionate about machine learning, AI, and high-performance applications.",
  keywords: "Full Stack Developer, Python, Java, TypeScript, React, Node.js, Machine Learning, AI",
  authors: [{ name: "Caio Lucas Silva Gomes" }],
  openGraph: {
    title: "Caio Lucas Silva Gomes - Full Stack Developer",
    description: "Full Stack Developer specialized in Python, Java, and TypeScript",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
