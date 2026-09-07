"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

/**
 * Controle segmentado sol/lua, como no layout: uma pílula com dois modos
 * e um indicador claro sobre o que está ativo.
 */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  // Antes da hidratação o tema real é desconhecido; assume claro para
  // evitar um salto visual no indicador.
  const isDark = mounted && resolvedTheme === "dark"

  const base =
    "relative z-10 grid size-7 place-items-center rounded-full transition-colors duration-200"

  return (
    <div
      className={`relative flex items-center gap-0.5 rounded-full border border-border bg-muted/70 p-1 ${className}`}
    >
      {/* Indicador deslizante */}
      <span
        aria-hidden="true"
        className="absolute top-1 left-1 size-7 rounded-full bg-card shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: isDark ? "translateX(1.875rem)" : "translateX(0)" }}
      />

      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`${base} ${isDark ? "text-muted-foreground hover:text-foreground" : "text-foreground"}`}
        aria-label="Ativar tema claro"
        aria-pressed={mounted ? !isDark : undefined}
      >
        <Sun className="size-4" />
      </button>

      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`${base} ${isDark ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-label="Ativar tema escuro"
        aria-pressed={mounted ? isDark : undefined}
      >
        <Moon className="size-4" />
      </button>
    </div>
  )
}
