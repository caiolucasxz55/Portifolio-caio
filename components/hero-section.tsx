"use client"

import { ArrowDown, ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const socials = [
  { href: "https://github.com/caiolucasxz55", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/caio-lucas-a892b4324", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:caiolucasxzred@gmail.com", icon: Mail, label: "Email" },
  { href: "/CaioLucas-definitivo.pdf", icon: FileText, label: "Currículo" },
]

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  const enter = `transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
    mounted ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
  }`

  const enterStyle = (delay: number) => ({ transitionDelay: mounted ? `${delay}ms` : "0ms" })

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden px-5 pt-28 pb-16 sm:px-8 sm:pt-32 lg:px-12 lg:pt-36 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      {/* Formas orgânicas de fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-b animate-drift absolute -bottom-40 -left-40 size-[38rem] bg-blob/70" />
        <div className="blob-a absolute -top-32 -right-32 size-[26rem] bg-blob/50" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* ————— Coluna de texto ————— */}
          <div>
            <div className={enter} style={enterStyle(0)}>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/80 px-4 py-2 text-sm text-muted-foreground">
                <span className="size-1.5 rounded-full bg-primary" />
                Disponível para novas oportunidades
              </span>
            </div>

            <p
              className={`mt-8 text-2xl font-light text-muted-foreground sm:text-[1.75rem] ${enter}`}
              style={enterStyle(80)}
            >
              Olá, eu sou
            </p>

            <h1
              id="hero-heading"
              className={`mt-1 text-[2.75rem] leading-[1.05] font-bold tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem] ${enter}`}
              style={enterStyle(160)}
            >
              Caio Lucas <span className="text-primary">Silva Gomes</span>
            </h1>

            <p
              className={`mt-4 font-mono text-lg tracking-[-0.01em] text-muted-foreground sm:text-[1.6rem] ${enter}`}
              style={enterStyle(240)}
            >
              Desenvolvedor Full Stack
            </p>

            <p
              className={`mt-7 max-w-xl text-[15px] leading-[1.75] text-muted-foreground text-pretty sm:text-base ${enter}`}
              style={enterStyle(320)}
            >
              Construo soluções web modernas e escaláveis, unindo boas práticas de engenharia, foco
              no usuário e aprendizado contínuo. Tenho experiência com{" "}
              <span className="font-medium text-primary">
                Python, FastAPI, Next.js, TypeScript e React
              </span>
              , além de CI/CD e cloud computing. Atualmente, estou em busca de novas oportunidades
              para evoluir e gerar impacto com tecnologia.
            </p>

            {/* Ações */}
            <div
              className={`mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center ${enter}`}
              style={enterStyle(400)}
            >
              <button
                onClick={() => goTo("projects")}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-7 py-3.5 text-[15px] font-medium text-primary-foreground transition-all duration-200 hover:brightness-110 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                Ver Projetos
              </button>

              <button
                onClick={() => goTo("contact")}
                className="inline-flex items-center justify-center gap-3 rounded-full border border-border bg-transparent px-7 py-3.5 text-[15px] font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-card active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                <Mail className="size-4" />
                Fale Comigo
              </button>
            </div>

            {/* Redes */}
            <div className={`mt-9 flex items-center gap-5 ${enter}`} style={enterStyle(480)}>
              {socials.map(({ href, icon: Icon, label }) => {
                const external = href.startsWith("http")
                return (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    download={href.endsWith(".pdf") ? "CV-Caio-Lucas.pdf" : undefined}
                    className="text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                    aria-label={label}
                    title={label}
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* ————— Composição visual ————— */}
          <div
            className={`relative mx-auto aspect-square w-full max-w-[30rem] lg:max-w-[34rem] ${enter}`}
            style={enterStyle(240)}
          >
            {/* Blob de apoio */}
            <div
              aria-hidden="true"
              className="blob-c absolute top-[30%] right-[-2%] bottom-[4%] left-[14%] bg-blob"
            />

            {/* Malha pontilhada */}
            <div
              aria-hidden="true"
              className="bg-dots absolute top-[8%] right-[6%] size-[22%] opacity-70"
            />

            {/* Arcos decorativos: pathLength=100 deixa o traço em % do círculo */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="absolute inset-0 size-full overflow-visible"
              fill="none"
            >
              {/* Arco longo: sobe da esquerda passando por cima */}
              <circle
                cx="45"
                cy="42"
                r="34"
                pathLength="100"
                stroke="hsl(var(--muted-foreground))"
                strokeOpacity="0.45"
                strokeWidth="0.3"
                strokeLinecap="round"
                strokeDasharray="42 58"
                transform="rotate(152 45 42)"
              />
              {/* Arco curto: canto inferior direito */}
              <circle
                cx="45"
                cy="42"
                r="33"
                pathLength="100"
                stroke="hsl(var(--muted-foreground))"
                strokeOpacity="0.45"
                strokeWidth="0.3"
                strokeLinecap="round"
                strokeDasharray="15 85"
                transform="rotate(28 45 42)"
              />
            </svg>

            {/* Foto */}
            <div className="absolute top-[12%] left-[15%] size-[60%]">
              <div className="relative size-full overflow-hidden rounded-full border-[6px] border-card shadow-[0_18px_50px_-24px_hsl(150_10%_20%/0.45)]">
                <Image
                  src="/caio-definitiva.jpeg"
                  alt="Retrato de Caio Lucas Silva Gomes"
                  fill
                  priority
                  quality={92}
                  sizes="(max-width: 1024px) 320px, 360px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Detalhes geométricos, posicionados sobre os arcos */}
            <span
              aria-hidden="true"
              className="animate-float-soft absolute top-[18%] left-[21%] size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-[3px] bg-primary"
            />
            <span
              aria-hidden="true"
              className="absolute top-[58.5%] left-[73.5%] size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
            />

            {/* Card de código */}
            <div className="card-soft animate-float-soft absolute right-[-3%] bottom-[6%] w-[54%] rounded-2xl p-4 sm:w-[50%]">
              <div aria-hidden="true" className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-muted-foreground/30" />
                <span className="size-2 rounded-full bg-muted-foreground/30" />
                <span className="size-2 rounded-full bg-muted-foreground/30" />
              </div>

              <pre className="mt-3 overflow-x-auto font-mono text-[11px] leading-relaxed text-muted-foreground sm:text-xs">
                <code>
                  <span className="text-foreground">const</span> developer = {"{"}
                  {"\n"}  build: <span className="text-primary">&quot;solutions&quot;</span>,
                  {"\n"}  learn: <span className="text-primary">true</span>,
                  {"\n"}  impact: <span className="text-primary">true</span>
                  {"\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Rodapé do hero */}
        <div className="mt-16 flex items-end justify-between gap-6 lg:mt-10">
          <span aria-hidden="true" className="hidden flex-1 sm:block" />

          <button
            onClick={() => goTo("experience")}
            className={`group flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background ${enter}`}
            style={enterStyle(560)}
            aria-label="Rolar para a próxima seção"
          >
            <ArrowDown className="animate-bob size-4" strokeWidth={1.75} />
            <span aria-hidden="true" className="h-10 w-px bg-border" />
          </button>

          <p
            className={`hidden flex-1 text-right font-mono text-[10px] tracking-[0.22em] text-muted-foreground/70 uppercase sm:block ${enter}`}
            style={enterStyle(620)}
          >
            Código <span className="mx-1.5">•</span> Ideias <span className="mx-1.5">•</span>{" "}
            Resultados
          </p>
        </div>
      </div>
    </section>
  )
}
