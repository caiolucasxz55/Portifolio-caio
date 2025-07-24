"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Linkedin, Download, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Aqui você pode integrar com seu serviço de email (EmailJS, Resend, etc.)
      console.log("Form submitted:", formData)
      
      // Simular envio
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setFormData({ name: "", email: "", message: "" })
      alert("Mensagem enviada com sucesso!")
    } catch (error) {
      console.error("Erro ao enviar:", error)
      alert("Erro ao enviar mensagem. Tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleDownloadCV = () => {
    if (typeof window !== 'undefined') {
      // Substitua pelo caminho do seu CV
      const link = document.createElement('a')
      link.href = '/cv-caio-lucas.pdf' // Coloque seu CV na pasta public
      link.download = 'CV-Caio-Lucas.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Fale comigo!
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-2 sm:px-0 leading-relaxed">
            Vamos conversar sobre seu próximo projeto ou oportunidade. Estou sempre aberto a novos desafios e colaborações.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">
                Vamos nos conectar
              </h3>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Atualmente estou aberto a novas oportunidades de trabalho e projetos interessantes.
                Se você tiver uma pergunta ou quiser apenas dizer oi, farei o possível para responder!
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <a
                href="mailto:caiolucasxzred@gmail.com"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                aria-label="Enviar email"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base">Email</h4>
                  <p className="text-gray-600 text-xs sm:text-sm truncate">caiolucasxzred@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/caio-lucas-a892b4324"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                aria-label="Conectar no LinkedIn"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base">LinkedIn</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Conecte-se comigo</p>
                </div>
              </a>

              <button 
                onClick={handleDownloadCV}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 w-full text-left cursor-pointer group"
                aria-label="Baixar currículo"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-900 rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                  <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base">Currículo</h4>
                  <p className="text-gray-600 text-xs sm:text-sm">Download PDF</p>
                </div>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
              Me mande uma mensagem
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
              Preencha o formulário abaixo e retornarei o mais breve possível.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <Input
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="bg-white border-gray-200 rounded-xl h-10 sm:h-11 text-sm sm:text-base"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="bg-white border-gray-200 rounded-xl h-10 sm:h-11 text-sm sm:text-base"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Me fale sobre o assunto ou simplesmente diga olá..."
                  rows={4}
                  className="bg-white border-gray-200 rounded-xl resize-none text-sm sm:text-base min-h-[100px] sm:min-h-[120px]"
                  disabled={isSubmitting}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 text-white rounded-xl py-2 sm:py-3 text-sm sm:text-base font-medium transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    Enviar
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}