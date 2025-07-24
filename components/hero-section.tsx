"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section 
      id="home" 
      className="min-h-[calc(100dvh-64px)] flex items-center justify-center bg-background pt-16 pb-12 sm:pb-16 md:pb-20"
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 text-center">
        {/* Avatar */}
        <div className={`mb-6 sm:mb-8 md:mb-10 transition-all duration-700 ease-out ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <div className="relative size-32 sm:size-36 md:size-40 lg:size-44 mx-auto">
            <Image
              src="/caio-definitiva.jpeg"
              alt="Caio Lucas Silva Gomes"
              fill
              className="rounded-full object-cover shadow-sm hover:shadow-md transition-all duration-300 select-none"
              priority
              quality={90}
              sizes="(max-width: 768px) 144px, (max-width: 1024px) 160px, 176px"
            />
          </div>
        </div>

        {/* Name and Title */}
        <div className={`transition-all duration-700 ease-out delay-150 ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            <span className="block">Caio Lucas Silva Gomes</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mb-5 sm:mb-7 md:mb-8">
            Full Stack Developer
          </h2>
        </div>

        {/* Bio */}
        <div className={`transition-all duration-700 ease-out delay-300 ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-7 sm:mb-10 md:mb-12 leading-relaxed sm:leading-normal px-2 sm:px-4">
            Full Stack Developer especializado em{" "}
            <span className="font-medium text-foreground hover:text-primary transition-colors duration-200">
              Python, Java e TypeScript
            </span>
            . Ao longo da minha jornada acadêmica, contribuí para projetos inovadores aplicando tecnologia para resolver desafios do mundo real. Tenho experiência prática com Flask, Django, Node.js e bancos de dados SQL, sempre buscando construir soluções eficientes, escaláveis e acessíveis. Sou apaixonado por{" "}
            <span className="font-medium text-foreground hover:text-primary transition-colors duration-200">
              machine learning e inteligência artificial
            </span>
            , desenvolvendo aplicações de alta performance que causam impacto real.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 md:mb-12 transition-all duration-700 ease-out delay-450 ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <Button
            size="lg"
            className="w-full sm:w-auto rounded-full px-6 sm:px-8 hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer"
            onClick={() => handleScrollTo("projects")}
            aria-label="Ver meus projetos"
          >
            Ver Projetos
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto rounded-full px-6 sm:px-8 hover:scale-[1.02] active:scale-95 transition-transform cursor-pointer"
            onClick={() => handleScrollTo("contact")}
            aria-label="Entrar em contato"
          >
            Fale Comigo
          </Button>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center gap-4 sm:gap-5 mb-10 sm:mb-14 transition-all duration-700 ease-out delay-600 ${
          isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
          <a
            href="mailto:caiolucasxzred@gmail.com"
            className="p-2 sm:p-2.5 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title="Enviar email para Caio Lucas"
            aria-label="Email"
          >
            <Mail className="size-5 sm:size-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/caio-lucas-a892b4324"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 text-muted-foreground hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title="LinkedIn de Caio Lucas"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5 sm:size-6" />
          </a>
          <a
            href="https://github.com/caiolucasxz55"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-2.5 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            title="GitHub de Caio Lucas"
            aria-label="GitHub"
          >
            <Github className="size-5 sm:size-6" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className={`hidden sm:block transition-all duration-700 ease-out delay-750 ${
          isMounted ? "opacity-100" : "opacity-0"
        }`}>
          <button
            onClick={() => handleScrollTo("projects")}
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-full transition-all animate-bounce focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Rolar para a seção de projetos"
          >
            <ArrowDown className="size-5 sm:size-6" />
          </button>
        </div>
      </div>
    </section>
  )
}