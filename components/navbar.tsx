"use client"

import { useCallback, useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"

const navItems = [
  { name: "Início", id: "home" },
  { name: "Experiência", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Projetos", id: "projects" },
  { name: "Contato", id: "contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Marca no menu a seção visível.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    )

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false)
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  const goTo = useCallback((id: string) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-bar border-b border-border" : "border-b border-transparent"
        }`}
      >
        <nav
          className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12"
          aria-label="Navegação principal"
        >
          {/* Marca */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              goTo("home")
            }}
            className="group flex shrink-0 items-center gap-3.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
          >
            <span className="text-2xl font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
              CL
            </span>
            <span aria-hidden="true" className="h-6 w-px bg-border" />
            <span className="hidden text-[15px] font-medium text-foreground sm:block">
              Caio Lucas Silva Gomes
            </span>
          </a>

          {/* Navegação desktop */}
          <div className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navItems.map((item) => {
              const isActive = active === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className={`relative pb-1.5 text-[15px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background ${
                    isActive
                      ? "font-medium text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-current={isActive ? "true" : undefined}
                >
                  {item.name}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen((v) => !v)}
              className="grid size-9 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden ${isOpen ? "" : "pointer-events-none"}`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <nav
          className={`card-soft absolute inset-x-4 top-20 rounded-2xl p-2.5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
          }`}
          aria-label="Navegação mobile"
        >
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-[15px] transition-colors ${
                active === item.id
                  ? "bg-soft font-medium text-soft-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <span className="font-mono text-xs text-muted-foreground/70">0{i + 1}</span>
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}
