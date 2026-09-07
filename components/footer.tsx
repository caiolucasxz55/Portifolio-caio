"use client"

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import { useEffect, useState } from "react"

const socials = [
  { name: "GitHub", url: "https://github.com/caiolucasxz55", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/caio-lucas-a892b4324", icon: Linkedin },
  { name: "Email", url: "mailto:caiolucasxzred@gmail.com", icon: Mail },
]

const navLinks = [
  { name: "Início", id: "home" },
  { name: "Experiência", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projetos", id: "projects" },
  { name: "Contato", id: "contact" },
]

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <footer className="border-t border-border px-5 py-12 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1.7fr_1fr_1fr]">
            {/* Marca */}
            <div className="max-w-sm">
              <div className="flex items-center gap-3.5">
                <span className="text-2xl font-bold tracking-tight text-foreground">CL</span>
                <span aria-hidden="true" className="h-6 w-px bg-border" />
                <span className="text-[15px] font-medium text-foreground">
                  Caio Lucas Silva Gomes
                </span>
              </div>
              <p className="mt-4 text-[14.5px] leading-[1.7] text-muted-foreground text-pretty">
                Desenvolvedor Full Stack construindo soluções web modernas e escaláveis, do backend
                à interface.
              </p>
            </div>

            {/* Navegação */}
            <nav aria-label="Rodapé">
              <h2 className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                Navegação
              </h2>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-[14.5px] text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contato */}
            <div>
              <h2 className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground uppercase">
                Onde me achar
              </h2>
              <div className="mt-4 flex items-center gap-2.5">
                {socials.map(({ name, url, icon: Icon }) => (
                  <a
                    key={name}
                    href={url}
                    target={name !== "Email" ? "_blank" : undefined}
                    rel={name !== "Email" ? "noopener noreferrer" : undefined}
                    className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    aria-label={name}
                    title={name}
                  >
                    <Icon className="size-[18px]" strokeWidth={1.75} />
                  </a>
                ))}
              </div>
              <a
                href="/CaioLucas-definitivo.pdf"
                download="CV-Caio-Lucas.pdf"
                className="mt-4 inline-block text-[14.5px] font-medium text-primary underline-offset-4 hover:underline"
              >
                Baixar currículo
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
            <p className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground uppercase">
              © {new Date().getFullYear()} Caio Lucas Silva Gomes
            </p>
            <p className="font-mono text-[11px] tracking-[0.1em] text-muted-foreground/70 uppercase">
              Código <span className="mx-1.5">•</span> Ideias <span className="mx-1.5">•</span>{" "}
              Resultados
            </p>
          </div>
        </div>
      </footer>

      {/* Voltar ao topo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed right-5 bottom-5 z-40 grid size-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all duration-300 hover:brightness-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background sm:right-8 sm:bottom-8 ${
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
        aria-label="Voltar ao topo"
        aria-hidden={!showTop}
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp className="size-5" strokeWidth={1.75} />
      </button>
    </>
  )
}
