import type React from "react"
import type { Metadata, Viewport } from "next" // Adicionei Viewport ao import
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

// 1. METADADOS (separado do viewport)
export const metadata: Metadata = {
  title: "Caio Lucas Silva Gomes - Desenvolvedor Full Stack",
  description:
    "Desenvolvedor Full Stack especializado em Python, Java e TypeScript. Apaixonado por machine learning, inteligência artificial e aplicações de alta performance.",
  keywords:
    "Desenvolvedor Full Stack, Python, Java, TypeScript, React, Node.js, Machine Learning, Inteligência Artificial",
  authors: [{ name: "Caio Lucas Silva Gomes" }],
  generator: "v0.dev",
  openGraph: {
    title: "Caio Lucas Silva Gomes - Desenvolvedor Full Stack",
    description:
      "Desenvolvedor Full Stack especializado em Python, Java e TypeScript",
    type: "website",
  },
}

// 2. CONFIGURAÇÃO DO VIEWPORT (nova exportação separada)
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // themeColor: '#000000', // Opcional: descomente e defina sua cor
  viewportFit: 'cover', // Importante para dispositivos com notch
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      {/* 3. CORPO COM CONFIGURAÇÕES MOBILE-FIRST */}
      <body className={`${inter.className} antialiased touch-pan-y`}>
        {children}
      </body>
    </html>
  )
}