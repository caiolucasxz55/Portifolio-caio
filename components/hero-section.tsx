"use client"

import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
  <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-20">
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      {/* Avatar */}
      <div className="mb-8">
        <img
          src="/tentar.jpeg?height=400&width=400"
          alt="Caio Lucas Silva Gomes"
          className="w-40 h-40 rounded-full mx-auto shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Name and Title */}
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 hover:text-gray-700 transition-colors duration-200">
        Caio Lucas Silva Gomes
      </h1>
      <h2 className="text-xl md:text-2xl text-gray-600 font-medium mb-8 hover:text-gray-800 transition-colors duration-200">
        Full Stack Developer
      </h2>

      {/* Bio */}
      <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
        Full Stack Developer especializado em:{" "}
        <span className="font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
          Python, Java, and TypeScript
        </span>
        .Ao longo da minha jornada acadêmica, contribuí para projetos inovadores aplicando tecnologia para resolver desafios do mundo real. Tenho experiência prática com Flask, Django, Node.js e bancos de dados SQL, sempre buscando construir soluções eficientes, escaláveis e acessíveis. Sou apaixonado por{" "}
        <span className="font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200 cursor-pointer">
          machine learning, inteligência artificial
        </span>
        , e aplicações de alta performance que causam impacto real.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Button
          size="lg"
          className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-3 cursor-pointer transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
        >
          Ver Projetos
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-gray-900 rounded-full px-8 py-3 bg-transparent cursor-pointer transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Fale Comigo
        </Button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center space-x-6 mb-16">
        <a
          href="mailto:caiolucasxzred@gmail.com"
          className="text-gray-400 hover:text-gray-600 hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-full hover:bg-gray-100"
          title="Enviar email"
        >
          <Mail size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/caio-lucas-a892b4324"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-600 hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-full hover:bg-blue-50"
          title="LinkedIn"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/caiolucasxz55"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-gray-800 hover:scale-110 transition-all duration-200 cursor-pointer p-2 rounded-full hover:bg-gray-100"
          title="GitHub"
        >
          <Github size={24} />
        </a>
      </div>

      
    </div>
  </section>
)
}
