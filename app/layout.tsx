import type React from "react"
import type { Metadata, Viewport } from "next"
import { Outfit, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
  variable: "--font-jet",
})

export const metadata: Metadata = {
  title: {
    default: "Caio Lucas Silva Gomes — Desenvolvedor Full Stack",
    template: "%s | Caio Lucas",
  },
  description:
    "Desenvolvedor Full Stack com experiência em Python, FastAPI, Next.js, TypeScript e React. Integração de soluções de IA e Machine Learning, CI/CD e Cloud Computing.",
  keywords: [
    "Desenvolvedor Full Stack",
    "Python",
    "FastAPI",
    "Next.js",
    "TypeScript",
    "React",
    "Machine Learning",
    "RAG",
    "Azure",
    "CI/CD",
  ],
  authors: [{ name: "Caio Lucas Silva Gomes", url: "https://github.com/caiolucasxz55" }],
  creator: "Caio Lucas Silva Gomes",
  metadataBase: new URL("https://seusite.com"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Caio Lucas Silva Gomes",
    title: "Caio Lucas Silva Gomes — Desenvolvedor Full Stack",
    description:
      "Construo soluções web modernas e escaláveis, unindo boas práticas de engenharia, foco no usuário e aprendizado contínuo.",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#121716" },
  ],
  colorScheme: "light dark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${outfit.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
