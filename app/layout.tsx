import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Caio Lucas Silva Gomes - Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack especializado em Python, Java e TypeScript. Apaixonado por machine learning, inteligência artificial e aplicações de alta performance.",
  keywords:
    "Desenvolvedor Full Stack, Python, Java, TypeScript, React, Node.js, Machine Learning, Inteligência Artificial",
  authors: [{ name: "Caio Lucas Silva Gomes" }],
  openGraph: {
    title: "Caio Lucas Silva Gomes - Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack especializado em Python, Java e TypeScript",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}