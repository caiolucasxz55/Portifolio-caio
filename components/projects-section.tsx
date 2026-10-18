"use client"

import {
  ArrowUpRight,
  Bot,
  Cloud,
  ExternalLink,
  FileSpreadsheet,
  Github,
  GraduationCap,
  Landmark,
  Leaf,
  Lock,
  ScanSearch,
  Sparkles,
  Star,
  Store,
  TrainFront,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import Image from "next/image"
import type { IconType } from "react-icons"
import { GrOracle } from "react-icons/gr"
import { VscAzure } from "react-icons/vsc"
import { LuBriefcaseBusiness } from "react-icons/lu"
import { useState, type ReactNode } from "react"
import Reveal from "@/components/reveal"
import SectionHeader from "@/components/section-header"
import TechBadge from "@/components/tech-badge"

const filters = ["Todos", "Destaques", "IA & Machine Learning", "Web", "Backend", "Mobile", "Outros"] as const
type Filter = (typeof filters)[number]
type Category = Exclude<Filter, "Todos" | "Destaques">

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
  /** Repositório privado: mostra "Código privado" no lugar do link. */
  privateRepo?: boolean
  /** Projeto ainda não lançado: esconde os links e mostra o status. */
  comingSoon?: boolean
  /** Selo de destaque sobre a capa, ex.: parceria com uma empresa. */
  badge?: { label: string; icon?: IconType; iconColor?: string }
  /** Entra no filtro "Destaques" e ganha a estrela ao lado do título. */
  featured?: boolean
}

// `image`, `liveUrl`, `githubUrl`, `privateRepo`, `comingSoon` e `badge` são opcionais.
const projects: Project[] = [
  {
    title: "ResinArts",
    description:
      "SaaS em produção para artesãs, com gestão financeira, pedidos, loja pública e assinaturas pagas.",
    category: "Web",
    icon: Store,
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Mercado Pago", "Docker"],
    liveUrl: "https://resinarts-definitivo.vercel.app",
    privateRepo: true,
    image: "/projects/resinarts.webp",
    badge: {
      label: "Projeto profissional",
      icon: LuBriefcaseBusiness,
      iconColor: "hsl(var(--primary))",
    },
    featured: true,
  },
  {
    title: "Verdantis",
    description:
      "Plataforma de rastreabilidade e gestão para o agronegócio, com dashboards e controle de lotes.",
    category: "Web",
    icon: Leaf,
    technologies: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    liveUrl: "https://verdantis-webapp-vits.vercel.app/",
    githubUrl: "https://github.com/caiolucasxz55/Verdantis-webapp",
    image: "/projects/verdantis.webp",
    badge: { label: "Projeto parceria com Oracle", icon: GrOracle, iconColor: "#C74634" },
    featured: true,
  },
  {
    title: "SmartGuide",
    description:
      "Planejador de rotas do metrô de São Paulo com foco em acessibilidade, para pessoas com deficiência visual, auditiva e idosos.",
    category: "Web",
    icon: TrainFront,
    technologies: ["React", "Node.js", "Java", "Python", "Oracle"],
    liveUrl: "https://challenge-ccr-definitivo.vercel.app/",
    githubUrl: "https://github.com/challengeFiap-tds/challenge-ccr-definitivo",
    image: "/projects/smartguide.webp",
    badge: { label: "Parceria FIAP + CCR", icon: GraduationCap, iconColor: "hsl(var(--primary))" },
    featured: true,
  },
  {
    title: "Falange",
    description:
      "Backend FastAPI com servidor MCP que expõe gestão de tarefas de time a uma IA, com papéis, motor de priorização e calibração de estimativas.",
    category: "IA & Machine Learning",
    icon: Workflow,
    technologies: ["Python", "FastAPI", "PostgreSQL", "MCP", "Next.js", "Docker"],
    githubUrl: "https://github.com/caiolucasxz55/falange",
    featured: true,
  },
  {
    title: "Bank Reconciliation & Anomaly Detection",
    description:
      "Concilia extratos bancários (OFX/CSV) com notas fiscais XML e ranqueia transações incomuns com Isolation Forest, com 99,7% de acerto na conciliação.",
    category: "IA & Machine Learning",
    icon: ScanSearch,
    technologies: ["Python", "FastAPI", "scikit-learn", "PostgreSQL", "Next.js", "Docker"],
    image: "/projects/bank-reconciliation.webp",
    githubUrl: "https://github.com/caiolucasxz55/bank-reconciliation-anomaly-detection",
    featured: true,
  },
  {
    title: "Leads CNPJ",
    description:
      "Limpa, deduplica e enriquece planilhas de leads com dados públicos do CNPJ, evitando ligações para empresas duplicadas ou inativas, com envio direto ao HubSpot.",
    category: "IA & Machine Learning",
    icon: FileSpreadsheet,
    technologies: ["Python", "Pandas", "HubSpot", "Docker"],
    githubUrl: "https://github.com/caiolucasxz55/CRM-leads-cleaning",
    featured: true,
  },
  {
    title: "RAG Whitelabel",
    description:
      "Kit open source de RAG com citação de fontes e extração estruturada validada, trocando embeddings, vector store e LLM só por configuração (82% de hit rate@5).",
    category: "IA & Machine Learning",
    icon: Sparkles,
    technologies: ["Python", "FastAPI", "Anthropic Claude", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/caiolucasxz55/RAG-whitelabel",
    featured: true,
  },
  {
    title: "Fintech Expenses",
    description:
      "Gestão financeira full stack (NestJS + Next.js) com deploy automatizado na Azure via GitHub Actions.",
    category: "Backend",
    icon: Cloud,
    technologies: ["NestJS", "Next.js", "Prisma", "Docker", "Azure", "GitHub Actions"],
    githubUrl: "https://github.com/caiolucasxz55/fintech-expenses-challenge",
    image: "/projects/fintech.webp",
    badge: { label: "Deploy na Azure com CI/CD", icon: VscAzure, iconColor: "#0078D4" },
  },
  {
    title: "Nova — Carreira com IA",
    description:
      "API Spring Boot com JWT e chatbot de carreira com IA, personalizado por metas e skills.",
    category: "Backend",
    icon: Bot,
    technologies: ["Java", "Spring Boot", "Spring Security", "Oracle", "Perplexity", "Docker"],
    githubUrl: "https://github.com/caiolucasxz55/Nova-Java",
    image: "/projects/nova.webp",
  },
  {
    title: "MoneyWay Bank",
    description:
      "API bancária em Spring Boot: contas, depósito, saque e Pix, com validações e BigDecimal.",
    category: "Backend",
    icon: Landmark,
    technologies: ["Java", "Spring Boot", "Spring Data JPA", "H2"],
    githubUrl: "https://github.com/caiolucasxz55/MoneyWayBank",
    image: "/projects/moneyway.webp",
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
    <article
      className={`card-soft group flex h-full flex-col rounded-2xl p-3 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/30 ${
        project.featured ? "ring-1 ring-primary/25" : ""
      }`}
    >
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

        {!project.comingSoon && (
          <ProjectLink
            href={project.liveUrl}
            label={`Abrir ${project.title}`}
            className={`absolute top-3 right-3 grid size-7 place-items-center rounded-md transition-colors ${
              project.image
                ? "bg-card/85 text-foreground shadow-sm backdrop-blur-sm"
                : "text-muted-foreground"
            }`}
            hoverClassName={project.image ? "hover:text-primary" : "hover:text-foreground"}
          >
            <ExternalLink className="size-4" strokeWidth={1.75} />
          </ProjectLink>
        )}

        {project.badge && (
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/90 px-2.5 py-1 text-[11px] font-medium text-foreground shadow-sm backdrop-blur-sm">
            {project.badge.icon && (
              <project.badge.icon
                aria-hidden="true"
                className="size-3.5 shrink-0"
                style={project.badge.iconColor ? { color: project.badge.iconColor } : undefined}
              />
            )}
            {project.badge.label}
          </span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-1 flex-col px-1.5 pt-4 pb-1.5">
        <h3 className="flex items-center gap-1.5 text-base font-bold tracking-tight text-foreground">
          {project.title}
          {project.featured && (
            <span title="Projeto em destaque" className="inline-flex shrink-0">
              <Star aria-hidden="true" className="size-3.5 fill-amber-400 text-amber-400" />
            </span>
          )}
        </h3>
        <p className="mt-2 max-w-[21rem] text-sm leading-relaxed text-muted-foreground text-pretty">
          {project.description}
        </p>

        {project.technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <li key={tech}>
                <TechBadge name={tech} />
              </li>
            ))}
          </ul>
        )}

        {project.comingSoon ? (
          <div className="mt-auto flex items-center gap-2 pt-6 text-[13px] font-medium text-muted-foreground">
            <span aria-hidden="true" className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Em desenvolvimento
          </div>
        ) : (
          <div className="mt-auto flex items-center justify-between pt-6">
            <ProjectLink
              href={project.liveUrl}
              className="group/link inline-flex items-center gap-1.5 rounded text-[13px] font-medium text-foreground transition-colors"
              hoverClassName="hover:text-primary"
            >
              Ver projeto
              <ArrowUpRight className="size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </ProjectLink>

            {project.privateRepo ? (
              <span
                title="Repositório privado"
                className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground"
              >
                <Lock className="size-3.5" strokeWidth={1.75} />
                Código privado
              </span>
            ) : (
              <ProjectLink
                href={project.githubUrl}
                label={`Código de ${project.title} no GitHub`}
                className="inline-flex items-center gap-1.5 rounded text-[13px] font-medium text-foreground transition-colors"
                hoverClassName="hover:text-primary"
              >
                <Github className="size-4" strokeWidth={1.75} />
                Código
              </ProjectLink>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  const [active, setActive] = useState<Filter>("Todos")

  const visible = projects.filter((project) => {
    if (active === "Todos") return true
    if (active === "Destaques") return project.featured
    return project.category === active
  })

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
