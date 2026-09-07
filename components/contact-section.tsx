"use client"

import { Download, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"
import Reveal from "@/components/reveal"
import SectionHeader from "@/components/section-header"

const EMAIL = "caiolucasxzred@gmail.com"

const channels = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, external: false },
  { icon: Phone, label: "Telefone", value: "(11) 91281-7389", href: "tel:+5511912817389", external: false },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Vamos nos conectar",
    href: "https://www.linkedin.com/in/caio-lucas-a892b4324",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "caiolucasxz55",
    href: "https://github.com/caiolucasxz55",
    external: true,
  },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  /**
   * O site é estático e não tem backend: a mensagem é entregue abrindo o
   * cliente de email do visitante já preenchido, para nada se perder.
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = `Contato pelo portfólio — ${formData.name}`
    const body = `Nome: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    setSent(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setSent(false)
  }

  const field =
    "w-full rounded-xl border border-input bg-background px-4 py-3 text-[15px] text-foreground transition-colors duration-200 placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring/25"

  const labelCls = "mb-2 block font-mono text-[11px] tracking-[0.12em] text-muted-foreground uppercase"

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-a absolute -top-32 -left-32 size-[26rem] bg-blob/50" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          id="contact-heading"
          index="05"
          title="Vamos conversar"
          description="Estou aberto a novas oportunidades e projetos desafiadores. Se você tem uma ideia, uma vaga ou só quer dizer olá, me chama."
        />

        <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Canais */}
          <div className="space-y-6">
            <Reveal from="left">
              <div className="card-soft rounded-2xl p-6 sm:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="size-2 rounded-full bg-primary" />
                  <p className="text-[15px] font-medium text-foreground">
                    Disponível para novas oportunidades
                  </p>
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-3.5" strokeWidth={1.75} />
                  São Paulo, Brasil
                </p>

                <ul className="mt-6 space-y-1">
                  {channels.map(({ icon: Icon, label, value, href, external }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-4 rounded-xl p-3 transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-soft text-soft-foreground transition-transform duration-200 group-hover:scale-105">
                          <Icon className="size-[18px]" strokeWidth={1.75} />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[14px] font-medium text-foreground">
                            {label}
                          </span>
                          <span className="block truncate text-[13px] text-muted-foreground">
                            {value}
                          </span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={110} from="left">
              <a
                href="/CaioLucas-definitivo.pdf"
                download="CV-Caio-Lucas.pdf"
                className="card-soft group flex items-center gap-4 rounded-2xl p-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-105">
                  <Download className="size-5" strokeWidth={1.75} />
                </span>
                <span>
                  <span className="block text-[15px] font-medium text-foreground">
                    Baixar currículo
                  </span>
                  <span className="block font-mono text-[12px] text-muted-foreground">PDF</span>
                </span>
              </a>
            </Reveal>
          </div>

          {/* Formulário */}
          <Reveal delay={90} from="right">
            <form onSubmit={handleSubmit} className="card-soft h-full rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold tracking-tight text-foreground">
                Me mande uma mensagem
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Ao enviar, seu app de email abre com a mensagem já preenchida.
              </p>

              <div className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelCls}>
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className={field}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelCls}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="voce@email.com"
                      className={field}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelCls}>
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Me conte sobre o projeto, a vaga ou só diga olá..."
                    className={`${field} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3.5 text-[15px] font-medium text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-card"
                >
                  <Send className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  Enviar mensagem
                </button>

                <p
                  className="min-h-5 text-center text-[13px] text-muted-foreground"
                  role="status"
                  aria-live="polite"
                >
                  {sent ? (
                    <>
                      Abrimos seu app de email. Não abriu? Escreva para{" "}
                      <a href={`mailto:${EMAIL}`} className="font-medium text-primary underline">
                        {EMAIL}
                      </a>
                      .
                    </>
                  ) : null}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
