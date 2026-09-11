import type { IconType } from "react-icons"
import { FaJava } from "react-icons/fa"
import { GrOracle } from "react-icons/gr"
import { VscAzure } from "react-icons/vsc"
import {
  SiDocker,
  SiExpo,
  SiFastapi,
  SiFirebase,
  SiGithubactions,
  SiMercadopago,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPerplexity,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSpring,
  SiShadcnui,
  SiSpringboot,
  SiSpringsecurity,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

type TechMeta = {
  icon: IconType
  /** Cor da marca. Sem cor, o logo herda a cor do texto (bom para logos pretos no tema escuro). */
  color?: string
}

const techs: Record<string, TechMeta> = {
  "Next.js": { icon: SiNextdotjs },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  Python: { icon: SiPython, color: "#3776AB" },
  FastAPI: { icon: SiFastapi, color: "#009688" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  React: { icon: SiReact, color: "#149ECA" },
  "React Native": { icon: SiReact, color: "#149ECA" },
  Expo: { icon: SiExpo },
  Firebase: { icon: SiFirebase, color: "#FFA611" },
  Java: { icon: FaJava, color: "#E76F00" },
  "Spring Boot": { icon: SiSpringboot, color: "#6DB33F" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  Prisma: { icon: SiPrisma },
  "shadcn/ui": { icon: SiShadcnui },
  NestJS: { icon: SiNestjs, color: "#E0234E" },
  Azure: { icon: VscAzure, color: "#0078D4" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
  "Mercado Pago": { icon: SiMercadopago, color: "#00B1EA" },
  "Spring Security": { icon: SiSpringsecurity, color: "#6DB33F" },
  "Spring Data JPA": { icon: SiSpring, color: "#6DB33F" },
  Oracle: { icon: GrOracle, color: "#C74634" },
  Perplexity: { icon: SiPerplexity, color: "#1FB8CD" },
}

/**
 * Chip de tecnologia com o logo da marca. Nomes fora do mapa aparecem
 * com um ponto no lugar do logo, então nada quebra ao adicionar uma nova.
 */
export default function TechBadge({ name }: { name: string }) {
  const tech = techs[name]

  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-muted/70 px-2 py-1 font-mono text-[10.5px] text-foreground/75">
      {tech ? (
        <tech.icon
          aria-hidden="true"
          className="size-3 shrink-0"
          style={tech.color ? { color: tech.color } : undefined}
        />
      ) : (
        <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-primary" />
      )}
      {name}
    </span>
  )
}
