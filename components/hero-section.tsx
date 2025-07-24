"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Force viewport meta tag se não existir (Next.js safety)
    if (typeof window !== 'undefined' && !document.querySelector('meta[name="viewport"]')) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
      document.head.appendChild(meta);
    }
    
    // Trigger animations
    setIsVisible(true)
  }, [])

  const handleScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-white pt-16 sm:pt-20 pb-8 sm:pb-12"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-20 text-center">
        {/* Avatar */}
        <div className={`mb-6 sm:mb-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <img
            src="/tentar.jpeg?height=400&width=400"
            alt="Caio Lucas Silva Gomes"
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full mx-auto shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 touch-manipulation"
            loading="eager"
          />
        </div>

        {/* Name and Title */}
        <div className={`transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 hover:text-gray-700 transition-colors duration-200 leading-tight">
            <span className="block sm:hidden">Caio Lucas</span>
            <span className="block sm:hidden">Silva Gomes</span>
            <span className="hidden sm:block">Caio Lucas Silva Gomes</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium mb-6 sm:mb-8 hover:text-gray-800 transition-colors duration-200">
            Full Stack Developer
          </h2>
        </div>

        {/* Bio */}
        <div className={`transition-all duration-700 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
        <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0 transition-all duration-700 delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 active:bg-gray-700 text-white rounded-full px-6 sm:px-8 py-3 sm:py-4 cursor-pointer transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-xs hover:shadow-sm touch-manipulation font-medium"
            onClick={() => handleScrollTo("projects")}
          >
            Ver Projetos
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 active:bg-gray-100 rounded-full px-6 sm:px-8 py-3 sm:py-4 bg-transparent cursor-pointer transform hover:scale-105 active:scale-95 transition-all duration-200 shadow-xs hover:shadow-sm touch-manipulation font-medium"
            onClick={() => handleScrollTo("contact")}
          >
            Fale Comigo
          </Button>
        </div>

        {/* Social Links */}
        <div className={`flex justify-center space-x-4 sm:space-x-6 mb-12 sm:mb-16 transition-all duration-700 delay-800 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <a
            href="mailto:caiolucasxzred@gmail.com"
            className="text-gray-400 hover:text-gray-600 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-2 sm:p-3 rounded-full hover:bg-gray-100 active:bg-gray-200 touch-manipulation"
            title="Enviar email"
            aria-label="Enviar email"
          >
            <Mail size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/caio-lucas-a892b4324"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-2 sm:p-3 rounded-full hover:bg-blue-50 active:bg-blue-100 touch-manipulation"
            title="LinkedIn"
            aria-label="Perfil no LinkedIn"
          >
            <Linkedin size={20} className="sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://github.com/caiolucasxz55"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-800 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer p-2 sm:p-3 rounded-full hover:bg-gray-100 active:bg-gray-200 touch-manipulation"
            title="GitHub"
            aria-label="Perfil no GitHub"
          >
            <Github size={20} className="sm:w-6 sm:h-6" />
          </a>
        </div>

        {/* Scroll Indicator - Hidden on mobile for cleaner look */}
        <div className={`hidden sm:block transition-all duration-700 delay-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <button
            onClick={() => handleScrollTo("projects")}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 animate-bounce cursor-pointer p-2 rounded-full hover:bg-gray-100 touch-manipulation"
            aria-label="Rolar para projetos"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}