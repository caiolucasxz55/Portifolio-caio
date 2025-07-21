"use client"

import { ArrowUp } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <footer className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Caio Lucas Silva Gomes</h3>
            <p className="text-gray-600 mb-6">Desenvolvedor Full Stack apaixonado por criar soluções impactantes</p>
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} Caio Lucas Silva Gomes. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gray-900 hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  )
}
