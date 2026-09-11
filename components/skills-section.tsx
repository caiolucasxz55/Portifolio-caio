"use client"

import {
  BookOpen,
  Brain,
  Cloud,
  CodeXml,
  Database,
  Monitor,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import Reveal from "@/components/reveal"
import SectionHeader from "@/components/section-header"

type Category = {
  title: string
  description: string
  icon: LucideIcon
  skills: string[]
  /** Card em destaque, com fundo sálvia e ornamentos. */
  featured?: boolean
}

const categories: Category[] = [
  {
    title: "Backend",
    description: "Desenvolvimento de APIs, lógica de negócio e integração de sistemas.",
    icon: CodeXml,
    skills: ["Python", "FastAPI", "Flask", "REST APIs", "Django", "Node.js", "Java", "Spring Boot"],
  },
  {
    title: "Frontend",
    description: "Interfaces modernas, responsivas e focadas na experiência do usuário.",
    icon: Monitor,
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Angular"],
  },
  {
    title: "IA / Machine Learning",
    description: "Explorando o potencial da IA para criar soluções mais inteligentes e eficientes.",
    icon: Brain,
    skills: ["LLMs", "RAG", "Chatbots", "Machine Learning", "Integração e treinamento de modelos"],
    featured: true,
  },
  {
    title: "Cloud / DevOps",
    description: "Infraestrutura, automações e deploys para ambientes escaláveis e seguros.",
    icon: Cloud,
    skills: ["Azure", "AWS", "Docker", "CI/CD", "GitHub Actions", "Terraform"],
  },
  {
    title: "Bancos de dados",
    description: "Modelagem, consultas e gerenciamento de dados para aplicações robustas.",
    icon: Database,
    skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Oracle SQL"],
  },
  {
    title: "Engenharia",
    description: "Boas práticas, arquitetura de software e desenvolvimento limpo.",
    icon: Wrench,
    skills: [
      "JWT",
      "GitHub",
      "Clean Code",
      "Arquitetura de Software",
      "Integração de APIs",
      "Automação",
      "Metodologias Ágeis",
    ],
  },
]

const courses = [
  "Azure Cloud: criação de servidor e bancos de dados",
  "Python + IA",
  "JavaScript + TypeScript",
  "React + TypeScript",
  "Node.js e N8N",
]

function SkillCard({ category }: { category: Category }) {
  const { featured } = category

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:p-8 ${
        featured
          ? "border border-primary/30 bg-[linear-gradient(150deg,hsl(var(--card))_35%,hsl(var(--soft))_100%)] shadow-[0_12px_28px_-18px_hsl(var(--primary)/0.35)] hover:border-primary/50"
          : "card-soft hover:border-primary/30"
      }`}
    >
      {featured && (
        <>
          {/* Régua decorativa no canto superior */}
          <span
            aria-hidden="true"
            className="absolute top-8 right-8 hidden h-px w-20 bg-[linear-gradient(to_right,hsl(var(--primary)/0.15),hsl(var(--primary)/0.15)_45%,hsl(var(--primary)/0.7)_45%)] sm:block"
          />

          {/* Onda orgânica no canto inferior */}
          <svg
            aria-hidden="true"
            viewBox="0 0 200 160"
            preserveAspectRatio="none"
            className="pointer-events-none absolute right-0 bottom-0 h-3/4 w-1/2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            style={{ transformOrigin: "bottom right" }}
          >
            <path
              d="M200 0 C150 30 120 70 110 110 C104 135 80 152 40 160 L200 160 Z"
              fill="hsl(var(--primary))"
              fillOpacity="0.07"
            />
            <path
              d="M200 50 C168 70 150 98 144 124 C140 142 124 154 96 160 L200 160 Z"
              fill="hsl(var(--primary))"
              fillOpacity="0.09"
            />
          </svg>
        </>
      )}

      <div className="relative flex items-center gap-4 sm:gap-5">
        <span
          className={`grid size-12 shrink-0 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-105 sm:size-14 ${
            featured ? "bg-primary text-primary-foreground" : "bg-soft text-soft-foreground"
          }`}
        >
          <category.icon className="size-6 sm:size-7" strokeWidth={1.6} />
        </span>
        <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          {category.title}
        </h3>
      </div>

      <p className="relative mt-4 max-w-[22rem] text-[15px] leading-relaxed text-muted-foreground text-pretty">
        {category.description}
      </p>

      <ul className="relative mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li
            key={skill}
            className={`rounded-full px-3.5 py-1.5 text-sm text-foreground/80 transition-colors duration-200 hover:text-foreground ${
              featured ? "bg-soft/80" : "bg-muted"
            }`}
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      aria-labelledby="skills-heading"
    >
      {/* Formas orgânicas de fundo */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-a absolute -top-40 -right-40 size-[26rem] bg-blob/60" />
        <div className="blob-c absolute -bottom-44 -left-44 size-[24rem] bg-blob/50" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          id="skills-heading"
          index="03"
          title="Habilidades"
          description="Tecnologias e ferramentas que utilizo no dia a dia para desenvolver soluções eficientes."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {categories.map((category, i) => (
            <Reveal key={category.title} delay={i * 70}>
              <SkillCard category={category} />
            </Reveal>
          ))}
        </div>

        {/* Cursos */}
        <Reveal delay={140} className="mt-5 block lg:mt-6">
          <article className="card-soft group relative overflow-hidden rounded-2xl p-6 sm:px-8 sm:py-6">
            {/* Arco decorativo no canto */}
            <svg
              aria-hidden="true"
              viewBox="0 0 120 100"
              fill="none"
              className="pointer-events-none absolute right-0 bottom-0 hidden h-full w-28 md:block"
            >
              <path d="M120 0 C70 20 38 55 30 100 L120 100 Z" fill="hsl(var(--primary))" fillOpacity="0.05" />
              <path
                d="M120 0 C70 20 38 55 30 100"
                stroke="hsl(var(--primary))"
                strokeOpacity="0.35"
                strokeWidth="1"
              />
            </svg>

            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
              <div className="flex shrink-0 items-center gap-4 sm:gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-soft text-soft-foreground transition-transform duration-300 group-hover:scale-105 sm:size-14">
                  <BookOpen className="size-6 sm:size-7" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
                    Cursos
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Formação contínua para evoluir sempre.
                  </p>
                </div>
              </div>

              <ul className="flex flex-wrap gap-2 md:pr-24 xl:pr-0">
                {courses.map((course) => (
                  <li
                    key={course}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-foreground"
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
