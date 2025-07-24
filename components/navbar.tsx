"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    // Force viewport meta tag se não existir (Next.js safety)
    if (typeof window !== 'undefined' && !document.querySelector('meta[name="viewport"]')) {
      const meta = document.createElement('meta')
      meta.name = 'viewport'
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes'
      document.head.appendChild(meta)
    }
    
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest('nav')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100" 
          : "bg-white/90 border-b border-transparent"
      }`}
      aria-label="Navegação principal"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 md:py-5">
          {/* Logo/Brand */}
          <a 
            href="#home" 
            className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200 cursor-pointer select-none"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
          >
            <span className="block sm:hidden">Caio L. Silva</span>
            <span className="hidden sm:block">Caio Lucas Silva Gomes</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm lg:text-base font-medium cursor-pointer relative group px-3 py-2 rounded-md hover:bg-gray-50 select-none"
                aria-label={`Ir para ${item.name}`}
              >
                {item.name}
                <span className="absolute inset-x-1 bottom-0 h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full origin-left"></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden -mr-2">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-all duration-200"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen 
              ? "max-h-96 opacity-100 pb-4" 
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm rounded-lg shadow-md border border-gray-100 mx-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left block px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200 select-none"
                aria-label={`Ir para ${item.name}`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}