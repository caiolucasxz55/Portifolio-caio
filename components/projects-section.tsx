"use client"

import {
  ArrowUpRight,
  BarChart3,
  Cloud,
  Database,
  ExternalLink,
  Github,
  Globe,
  Leaf,
  Smartphone,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"
import { useState, type ReactNode } from "react"
import Reveal from "@/components/reveal"
import SectionHeader from "@/components/section-header"
import TechBadge from "@/components/tech-badge"

const filters = ["Todos", "Web", "Backend", "Mobile", "Outros"] as const
type Filter = (typeof filters)[number]
type Category = Exclude<Filter, "Todos">

type Project = {
  title: string
  description: string
  category: Category
  /** Ícone do selo no canto da capa. */
  icon: LucideIcon
  /** Nomes com logo em components/tech-badge.tsx. */
  technologies: string[]
  /** Capa em /public. Sem ela, o card mostra o placeholder. */
  image?: string
  liveUrl?: string
  githubUrl?: string
}

const placeholder = {
  title: "Nome do Projeto",
  description:
    "Breve descrição do projeto, explicando o problema que resolve e quais tecnologias foram utilizadas.",
}

// White label: troque pelos projetos reais. `image`, `liveUrl` e `githubUrl` são opcionais.
const projects: Project[] = [
  {
    ...placeholder,
    category: "Web",
    icon: Globe,
    technologies: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
  },
  {
    ...placeholder,
    category: "Backend",
    icon: Database,
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker"],
  },
  {
    ...placeholder,
    category: "Mobile",
    icon: Smartphone,
    technologies: ["React Native", "TypeScript", "Expo", "Firebase"],
  },
  {
    ...placeholder,
    category: "Backend",
    icon: Cloud,
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    ...placeholder,
    category: "Web",
    icon: Leaf,
    technologies: ["React", "Node.js", "MySQL", "Tailwind"],
  },
  {
    ...placeholder,
    category: "Outros",
    icon: BarChart3,
    technologies: ["TypeScript", "Next.js", "Prisma", "PostgreSQL"],
  },
]

/**
 * Vira link só quando há URL. Sem URL mantém o mesmo visual, mas não navega
 * (evita "#" levando o visitante de volta ao topo).
 */
function ProjectLink({
  href,
  className,
  hoverClassName,
  label,
  children,
}: {
  href?: string
  className: string
  hoverClassName: string
  label?: string
  children: ReactNode
}) {
  if (!href) {
    return (
      <span aria-disabled="true" title="Link em breve" className={`${className} cursor-default`}>
        {children}
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`${className} ${hoverClassName} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card`}
    >
      {children}
    </a>
  )
}

function CoverPlaceholder() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 44"
      fill="currentColor"
      className="absolute top-1/2 left-1/2 w-14 -translate-x-1/2 -translate-y-1/2 text-muted-foreground/20 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
    >
      <circle cx="18" cy="13" r="6" />
      <path d="M0 44 L21 21 L32 32 L45 15 L64 44 Z" />
    </svg>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-soft group flex h-full flex-col rounded-2xl p-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/30">
      {/* Capa */}
      <div className="relative aspect-[7/2] overflow-hidden rounded-xl bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Capa do projeto ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
          />
        ) : (
          <CoverPlaceholder />
        )}

        <span className="absolute top-3 left-3 grid size-8 place-items-center rounded-[7px] bg-primary/85 text-primary-foreground shadow-sm">
          <project.icon className="size-4" strokeWidth={1.75} />
        </span>

        <ProjectLink
          href={project.liveUrl}
          label={`Abrir ${project.title}`}
          className="absolute top-3 right-3 grid size-7 place-items-center rounded-md text-muted-foreground transition-colors"
          hoverClassName="hover:text-foreground"
        >
          <ExternalLink className="size-4" strokeWidth={1.75} />
        </ProjectLink>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col px-1.5 pt-4 pb-1.5">
        <h3 className="text-base font-bold tracking-tight text-foreground">{project.title}</h3>
        <p className="mt-2 max-w-[21rem] text-sm leading-relaxed text-muted-foreground text-pretty">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <li key={tech}>
              <TechBadge name={tech} />
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between pt-6">
          <ProjectLink
            href={project.liveUrl}
            className="group/link inline-flex items-center gap-1.5 rounded text-[13px] font-medium text-foreground transition-colors"
            hoverClassName="hover:text-primary"
          >
            Ver projeto
            <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </ProjectLink>

          <ProjectLink
            href={project.githubUrl}
            label={`Código de ${project.title} no GitHub`}
            className="inline-flex items-center gap-1.5 rounded text-[13px] font-medium text-foreground transition-colors"
            hoverClassName="hover:text-primary"
          >
            <Github className="size-4" strokeWidth={1.75} />
            Código
          </ProjectLink>
        </div>
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  const [active, setActive] = useState<Filter>("Todos")

  const visible =
    active === "Todos" ? projects : projects.filter((project) => project.category === active)

  return (
    <section
      id="projects"
      className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      aria-labelledby="projects-heading"
    >
      {/* Formas orgânicas de fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-a absolute -top-40 -right-40 size-[28rem] bg-blob/60" />
        <div className="blob-b absolute -bottom-44 -left-44 size-[26rem] bg-blob/50" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeader
            id="projects-heading"
            index="04"
            title="Projetos"
            description="Alguns dos projetos que desenvolvi, desde APIs e aplicações web até soluções completas com foco em performance, escalabilidade e boa experiência de usuário."
          />

          <Reveal delay={200} className="shrink-0">
            <div role="group" aria-label="Filtrar projetos por categoria" className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const isActive = active === filter
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActive(filter)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-2 font-mono text-xs transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground shadow-sm"
                        : "border-border bg-card/60 text-foreground/80 hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>

        {/* A key troca a cada filtro: os cards remontam e entram de novo em sequência */}
        <div key={active} className="mt-12 lg:mt-14">
          {visible.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {visible.map((project, i) => (
                <Reveal key={projects.indexOf(project)} delay={i * 70} className="block">
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="card-soft rounded-2xl px-6 py-14 text-center">
                <p className="text-[15px] font-medium text-foreground">
                  Nenhum projeto nesta categoria ainda.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Novos projetos em breve.</p>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
