"use client"

import { BarChart3, Briefcase, CalendarDays, Languages, MapPin } from "lucide-react"
import Reveal from "@/components/reveal"
import SectionHeader from "@/components/section-header"

const achievements = [
  "Desenvolvimento e otimização de funcionalidades e regras de negócio no backend com Python/FastAPI, priorizando segurança, performance e confiabilidade.",
  "Responsável pelo desenvolvimento completo do frontend de uma das principais soluções da empresa, aprimorando UI/UX, usabilidade e experiência dos usuários desde a estruturação inicial até a evolução contínua do produto.",
  "Implementação e self-hosting da solução de IA/RAG na Microsoft Azure, atuando na infraestrutura e nos requisitos de DevOps, segurança e deployment necessários para sua operação.",
  "Desenvolvimento de arquitetura RAG (Retrieval-Augmented Generation) integrada a chatbots e modelos de IA, reduzindo significativamente o consumo e custo de tokens da principal solução da empresa.",
  "Integração de tecnologia comercial de Eye Tracking à plataforma, adicionando uma funcionalidade inovadora e diferencial ao produto.",
  "Contribuição na evolução dos processos de CI/CD, aumentando a segurança, padronização e confiabilidade do fluxo de desenvolvimento e entrega em equipe.",
]

const languages = [
  { name: "Inglês", level: "Avançado" },
  { name: "Espanhol", level: "Intermediário" },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      aria-labelledby="experience-heading"
    >
      {/* Formas orgânicas de fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-a absolute -top-24 -right-32 size-[24rem] bg-blob/60" />
        <div className="blob-c absolute -bottom-40 -left-32 size-[30rem] bg-blob/50" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          id="experience-heading"
          index="02"
          title="Experiência & Formação"
          description="Minha trajetória profissional e acadêmica construindo soluções reais."
        />

        <div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-[1.55fr_1fr] lg:gap-10">
          {/* ————— Experiência profissional ————— */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3.5">
                <span className="grid size-9 place-items-center rounded-lg bg-soft text-soft-foreground">
                  <Briefcase className="size-4" strokeWidth={1.75} />
                </span>
                <h3 className="text-[15px] font-medium text-foreground">
                  Experiência Profissional
                </h3>
              </div>
            </Reveal>

            {/* Trilho da linha do tempo */}
            <div className="relative mt-6 pl-7 sm:pl-8">
              <span aria-hidden="true" className="absolute inset-y-2 left-0 w-px bg-border" />
              <span
                aria-hidden="true"
                className="absolute top-9 left-0 size-2.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background"
              />

              <Reveal delay={80}>
                <article className="card-soft rounded-2xl p-6 sm:p-7">
                  {/* Cargo */}
                  <header className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-soft text-soft-foreground">
                        <BarChart3 className="size-5" strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                          Desenvolvedor Full Stack Júnior
                        </h4>
                        <p className="mt-1 text-[15px] text-muted-foreground">Inoltra-Tech</p>
                        <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin className="size-3.5 shrink-0" strokeWidth={1.75} />
                          São Paulo, Brasil
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3.5 py-1.5 text-[13px] text-muted-foreground">
                      <CalendarDays className="size-3.5" strokeWidth={1.75} />
                      Jan 2026 – Ago 2026
                    </span>
                  </header>

                  {/* Atividades */}
                  <ol className="relative mt-7 space-y-4 border-l border-border pl-6">
                    {achievements.map((text, i) => (
                      <Reveal as="li" key={i} delay={120 + i * 70} from="left" className="relative">
                        <span
                          aria-hidden="true"
                          className="absolute -left-7 top-2 size-2 rounded-full bg-primary/70"
                        />
                        <p className="text-[14.5px] leading-[1.7] text-muted-foreground text-pretty">
                          {text}
                        </p>
                      </Reveal>
                    ))}
                  </ol>
                </article>
              </Reveal>
            </div>
          </div>

          {/* ————— Formação e idiomas ————— */}
          <div className="space-y-6">
            {/* Graduação */}
            <Reveal delay={120} from="right">
              <article className="card-soft overflow-hidden rounded-2xl">
                {/* Faixa institucional */}
                <div className="relative flex items-center gap-5 overflow-hidden bg-[linear-gradient(110deg,#150a0d_0%,#3a1019_48%,#7d1329_100%)] px-6 py-5">
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.07)_55%,transparent_56%)]"
                  />

                  <span className="text-3xl font-bold tracking-tight text-[#e8194b]">FIAP</span>
                  <span aria-hidden="true" className="h-9 w-px bg-white/25" />
                  <div className="min-w-0">
                    <p className="font-medium text-white">Graduação</p>
                    <p className="mt-0.5 truncate text-sm text-white/70">
                      FIAP – Centro Universitário
                    </p>
                  </div>

                  <span className="absolute top-4 right-5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] text-white/90 backdrop-blur-sm">
                    <CalendarDays className="size-3" strokeWidth={1.75} />
                    Jan 2026 – Jul 2026
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-lg leading-snug font-bold tracking-tight text-foreground">
                    Tecnólogo em Análise e Desenvolvimento de Sistemas
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-[1.7] text-muted-foreground text-pretty">
                    Formação com foco em tecnologia, inovação e desenvolvimento de soluções, unindo
                    teoria e prática para preparar profissionais para os desafios do mercado.
                  </p>
                </div>
              </article>
            </Reveal>

            {/* Idiomas */}
            <Reveal delay={200} from="right">
              <article className="card-soft rounded-2xl p-6">
                <div className="flex items-center gap-3.5">
                  <span className="grid size-11 place-items-center rounded-xl bg-soft text-soft-foreground">
                    <Languages className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-lg font-bold tracking-tight text-foreground">Idiomas</h3>
                </div>

                <dl className="mt-5">
                  {languages.map((lang, i) => (
                    <div
                      key={lang.name}
                      className={`flex items-baseline justify-between py-3.5 ${
                        i > 0 ? "border-t border-border" : ""
                      }`}
                    >
                      <dt className="text-[15px] font-medium text-foreground">{lang.name}</dt>
                      <dd className="text-sm text-muted-foreground">{lang.level}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
