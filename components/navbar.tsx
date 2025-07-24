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
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
      document.head.appendChild(meta);
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
          ? "bg-white/95 backdrop-blur-sm shadow-xs border-b border-gray-100" 
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4 md:py-6">
          {/* Logo/Brand */}
          <div className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200 cursor-pointer touch-manipulation">
            <span className="block sm:hidden">Caio L. Silva</span>
            <span className="hidden sm:block">Caio Lucas Silva Gomes</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm lg:text-base font-medium cursor-pointer relative group px-3 py-2 rounded-sm hover:bg-gray-50 touch-manipulation"
              >
                {item.name}
                {/* Underline effect - Updated for v4 */}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-600 hover:text-gray-900 cursor-pointer p-2 rounded-sm hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 touch-manipulation active:scale-95"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen 
            ? "max-h-96 opacity-100 pb-4" 
            : "max-h-0 opacity-0 overflow-hidden"
        }`}>
          <div className="space-y-1 bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-xs border border-gray-100 mx-1">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="w-full text-left py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 text-sm font-medium cursor-pointer rounded-sm transform hover:translate-x-1 touch-manipulation"
                style={{
                  animationDelay: `${index * 50}ms`
                }}
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