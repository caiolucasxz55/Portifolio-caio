"use client"

import { ArrowUpRight, Github } from "lucide-react"
import Image from "next/image"
import Reveal from "@/components/reveal"
import SectionHeader from "@/components/section-header"

type Project = {
  title: string
  tagline: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
}

const projects: Project[] = [
  {
    title: "ClimaCare",
    tagline: "Monitoramento climático",
    description:
      "Plataforma para acompanhar condições climáticas em tempo real, com dicas de segurança para cada situação meteorológica e doações para instituições de todo o Brasil.",
    image: "/ClimaCare site.png",
    technologies: ["React", "Node.js", "Java", "Oracle SQL", "Stripe"],
    githubUrl: "https://github.com/ClimaCare-global-solution/Clima-Care",
    liveUrl: "https://clima-care-theta.vercel.app/",
  },
  {
    title: "Smart Guide",
    tagline: "Rotas do metrô de São Paulo",
    description:
      "Aplicação web interativa para planejar rotas no sistema metroviário de São Paulo. Com foco em acessibilidade, permite visualizar estações, calcular rotas e salvar trajetos favoritos.",
    image: "/Smartguide-def.png",
    technologies: ["React", "Next.js", "JavaScript", "Java", "Spring Boot"],
    githubUrl: "https://github.com/challengeFiap-tds/challenge-ccr-definitivo",
    liveUrl: "https://challenge-ccr-definitivo.vercel.app/",
  },
  {
    title: "Solar Pride",
    tagline: "Energia solar acessível",
    description:
      "Plataforma digital com dashboard interativo, suporte via chatbot e parcerias estratégicas, para quem deseja adotar energia solar de forma acessível e sustentável.",
    image: "/SolarPride.png",
    technologies: ["JavaScript", "Java", "Python", "HTML & CSS"],
    githubUrl: "https://github.com/SolarPrideGlobal/GlobalSolutions",
    liveUrl: "https://github.com/SolarPrideGlobal/GlobalSolutions",
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      aria-labelledby="projects-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-c absolute -right-40 -bottom-32 size-[30rem] bg-blob/50" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          id="projects-heading"
          index="04"
          title="Projetos"
          description="Alguns dos trabalhos que construí, da interface à API e ao banco de dados."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90} className="block">
              <article className="card-soft group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-primary/30">
                {/* Capa */}
                <div className="relative aspect-16/10 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={`Interface do projeto ${project.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                    className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                    {project.tagline}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-[14.5px] leading-[1.7] text-muted-foreground text-pretty">
                    {project.description}
                  </p>

                  <ul className="mt-5 mb-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full bg-muted px-3 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* mt-auto alinha o rodapé dos cards mesmo com textos de tamanhos diferentes */}
                  <div className="mt-auto flex items-center gap-3 border-t border-border pt-5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-[14px] font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-card"
                    >
                      Ver projeto
                      <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>

                    <span aria-hidden="true" className="h-4 w-px bg-border" />

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[14px] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-card"
                      aria-label={`Código de ${project.title} no GitHub`}
                    >
                      <Github className="size-4" strokeWidth={1.75} />
                      Código
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140} className="mt-10 flex justify-center">
          <a
            href="https://github.com/caiolucasxz55?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full border border-border px-6 py-3 text-[15px] font-medium text-foreground transition-all duration-200 hover:border-primary/50 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <Github className="size-4" strokeWidth={1.75} />
            Ver todos os repositórios
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
