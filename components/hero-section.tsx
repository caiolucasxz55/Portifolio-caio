"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const handleScrollTo = (elementId: string) => {
    if (!isMounted) return
    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section 
      id="home" 
      className="min-h-dvh flex items-center justify-center bg-background pt-safe pb-safe"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 text-center">
        {/* Avatar */}
        <div className={`mb-6 sm:mb-8 transition-all duration-700 ease-out ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <img
            src="/tentar.jpeg?height=400&width=400"
            alt="Caio Lucas Silva Gomes"
            className="size-32 sm:size-36 md:size-40 lg:size-44 rounded-full mx-auto shadow-sm hover:shadow-lg transition-all duration-300 *:touch-manipulation"
            loading="eager"
            decoding="async"
          />
        </div>

        {/* Name and Title */}
        <div className={`transition-all duration-700 ease-out delay-200 ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 hover:text-primary transition-colors">
          <span className="hidden sm:block">Caio Lucas Silva Gomes</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-6 sm:mb-8">
            Full Stack Developer
          </h2>
        </div>

        {/* Bio */}
        <div className={`transition-all duration-700 ease-out delay-400 ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-4">
            Full Stack Developer especializado em:{" "}
            <span className="font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200  touch-manipulation">
              Python, Java, and TypeScript
            </span>
            . Ao longo da minha jornada acadêmica, contribuí para projetos inovadores aplicando tecnologia para resolver desafios do mundo real. Tenho experiência prática com Flask, Django, Node.js e bancos de dados SQL, sempre buscando construir soluções eficientes, escaláveis e acessíveis. Sou apaixonado por{" "}
            <span className="font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 touch-manipulation">
              machine learning, inteligência artificial
            </span>
            , e aplicações de alta performance que causam impacto real.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 transition-all duration-700 ease-out delay-600 ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full px-6 sm:px-8 hover:scale-105 active:scale-95"
            onClick={() => handleScrollTo("projects")}
          >
            Ver Projetos
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto rounded-full px-6 sm:px-8 hover:scale-105 active:scale-95"
            onClick={() => handleScrollTo("contact")}
          >
            Fale Comigo
          </Button>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-700 ease-out delay-800 ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <a
            href="mailto:caiolucasxzred@gmail.com"
            className="p-2 sm:p-3 text-muted-foreground hover:text-foreground hover:scale-110 active:scale-95 transition-all hover:bg-accent rounded-full"
            title="Enviar email"
          >
            <Mail className="size-5 sm:size-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/caio-lucas-a892b4324"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 text-muted-foreground hover:text-[#0A66C2] hover:scale-110 active:scale-95 transition-all hover:bg-[#0A66C2]/10 rounded-full"
            title="LinkedIn"
          >
            <Linkedin className="size-5 sm:size-6" />
          </a>
          <a
            href="https://github.com/caiolucasxz55"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 text-muted-foreground hover:text-foreground hover:scale-110 active:scale-95 transition-all hover:bg-accent rounded-full"
            title="GitHub"
          >
            <Github className="size-5 sm:size-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        {isMounted && (
          <div className="hidden sm:block transition-all duration-700 ease-out delay-1000">
            <button
              onClick={() => handleScrollTo("projects")}
              className="p-2 text-muted-foreground hover:text-foreground hover:scale-110 transition-all hover:bg-accent rounded-full animate-bounce"
              aria-label="Rolar para projetos"
            >
              <ArrowDown className="size-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}