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
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ]

  return (
  <nav
    className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
    }`}
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-center py-6">
        <div className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200 cursor-pointer">
          Caio Lucas Silva Gomes
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium cursor-pointer relative group px-2 py-1 rounded-md hover:bg-gray-50"
            >
              {item.name}
              {/* Underline effect */}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-600 hover:text-gray-900 cursor-pointer p-2 rounded-md hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden pb-4 animate-fadeIn">
          <div className="space-y-2 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200 text-sm font-medium cursor-pointer rounded-md transform hover:translate-x-1"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  </nav>
)
}
