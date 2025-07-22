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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
  <section id="contact" className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Fale comigo!</h2>
        <p className="text-lg text-gray-600">
          Vamos conversar sobre seu próximo projeto ou oportunidade. Estou sempre aberto a novos desafios e colaborações.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Vamos nos conectar</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Atualmente estou aberto a novas oportunidades de trabalho e projetos interessantes.
              Se você tiver uma pergunta ou quiser apenas dizer oi, farei o possível para responder!
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="mailto:caiolucasxzred@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Email</h4>
                <p className="text-gray-600 text-sm">caiolucasxzred@gmail.com</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/caio-lucas-a892b4324"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">LinkedIn</h4>
                <p className="text-gray-600 text-sm">Conecte-se comigo</p>
              </div>
            </a>

            <button className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 w-full text-left cursor-pointer">
              <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center">
                <Download className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Curriculum</h4>
                <p className="text-gray-600 text-sm">Download PDF</p>
              </div>
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Me mande uma mensagem</h3>
          <p className="text-gray-600 mb-6 text-sm">
            Preencha o formulário abaixo e retornarei o mais breve possível.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
                className="bg-white border-gray-200 rounded-xl"
              />
            </div>

            <div>
              <Input
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu@email.com"
                className="bg-white border-gray-200 rounded-xl"
              />
            </div>

            <div>
              <Textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Me fale sobre o assunto ou simplismente diga olá..."
                rows={4}
                className="bg-white border-gray-200 rounded-xl resize-none"
              />
            </div>

            <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-3">
              <Send className="w-4 h-4 mr-2" />
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
)
}
