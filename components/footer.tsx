"use client"

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/caiolucasxz55",
      icon: Github,
      label: "Ver perfil no GitHub"
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/caio-lucas-a892b4324",
      icon: Linkedin,
      label: "Conectar no LinkedIn"
    },
    {
      name: "Email",
      url: "mailto:caiolucasxzred@gmail.com",
      icon: Mail,
      label: "Enviar email"
    }
  ]

  return (
    <>
      <footer className="bg-gray-50 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            {/* Main Footer Content */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Caio Lucas Silva Gomes
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 px-2 sm:px-0 leading-relaxed">
                Desenvolvedor Full Stack apaixonado por criar soluções impactantes
              </p>

              {/* Social Links */}
              <div className="flex justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target={social.name !== "Email" ? "_blank" : undefined}
                      rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                      className="p-2 sm:p-3 text-gray-400 hover:text-gray-900 bg-white hover:bg-gray-100 rounded-full transition-all duration-200 transform hover:scale-110 shadow-sm hover:shadow-md"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-200 pt-4 sm:pt-6">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-gray-500 text-xs sm:text-sm">
                <p>
                  © {new Date().getFullYear()} Caio Lucas Silva Gomes.
                </p>
                <span className="hidden sm:inline">•</span>
                <p>
                  Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-40 transform hover:scale-110 active:scale-95"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}
    </>
  )
}