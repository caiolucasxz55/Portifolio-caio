"use client"

import {
  BookOpen,
  Brain,
  Cloud,
  Database,
  LayoutGrid,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react"
import Reveal from "@/components/reveal"
import SectionHeader from "@/components/section-header"

type Category = {
  title: string
  icon: LucideIcon
  skills: string[]
}

const categories: Category[] = [
  {
    title: "Backend",
    icon: Server,
    skills: ["Python", "FastAPI", "Flask", "REST APIs", "Django", "Node.js", "Java", "Spring Boot"],
  },
  {
    title: "Frontend",
    icon: LayoutGrid,
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Angular"],
  },
  {
    title: "IA / Machine Learning",
    icon: Brain,
    skills: [
      "LLMs",
      "RAG",
      "Chatbots",
      "Machine Learning",
      "Integração e treinamento de modelos",
    ],
  },
  {
    title: "Cloud / DevOps",
    icon: Cloud,
    skills: ["Azure", "AWS", "Docker", "CI/CD", "GitHub Actions", "Testes"],
  },
  {
    title: "Bancos de dados",
    icon: Database,
    skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB", "Oracle SQL"],
  },
  {
    title: "Engenharia",
    icon: Wrench,
    skills: [
      "Git",
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
  "Azure Cloud: criação de servidor e banco de dados",
  "Python + IA",
  "JavaScript e TypeScript",
  "React + TypeScript",
  "Node.js e N8N",
]

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative isolate overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      aria-labelledby="skills-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blob-b absolute -top-32 -left-40 size-[28rem] bg-blob/50" />
      </div>

      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          id="skills-heading"
          index="03"
          title="Habilidades Técnicas"
          description="As tecnologias e práticas que uso no dia a dia para construir e entregar software."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {categories.map((category, i) => (
            <Reveal key={category.title} delay={i * 70}>
              <article className="card-soft group h-full rounded-2xl p-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/30">
                <div className="flex items-center gap-3.5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-soft text-soft-foreground transition-transform duration-300 group-hover:scale-105">
                    <category.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-[17px] font-bold tracking-tight text-foreground">
                    {category.title}
                  </h3>
                </div>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full bg-muted px-3 py-1.5 text-[13px] text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Cursos */}
        <Reveal delay={120} className="mt-6 block">
          <article className="card-soft rounded-2xl p-6 sm:p-7">
            <div className="flex items-center gap-3.5">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-soft text-soft-foreground">
                <BookOpen className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="text-[17px] font-bold tracking-tight text-foreground">Cursos</h3>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2">
              {courses.map((course) => (
                <li
                  key={course}
                  className="rounded-full border border-border px-3.5 py-1.5 text-[13px] text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-foreground"
                >
                  {course}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
