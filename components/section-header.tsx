import type { ReactNode } from "react"
import Reveal from "@/components/reveal"

type SectionHeaderProps = {
  /** Número da seção, ex.: "02". */
  index: string
  title: ReactNode
  description?: ReactNode
  id?: string
}

/**
 * Cabeçalho padrão das seções: número em monoespaçada, régua que some,
 * título grande e uma linha de apoio.
 */
export default function SectionHeader({ index, title, description, id }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm text-primary">{index}</span>
          <span aria-hidden="true" className="rule-fade h-px w-28 sm:w-36" />
        </div>
      </Reveal>

      <Reveal delay={90}>
        <h2
          id={id}
          className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.12]"
        >
          {title}
        </h2>
      </Reveal>

      {description ? (
        <Reveal delay={160}>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  )
}
