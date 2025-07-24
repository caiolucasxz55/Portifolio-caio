"use client"

import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

const projects = [
  {
    title: "ClimaCare - Plataforma de Monitoramento Climático",
    description:
      "Monitore condições climáticas em tempo real, mantenha-se seguro com nossas dicas especializadas para cada situação meteorológica, e doe para instituiçoes de todo brasil, ajudando aqueles que necessitam.",
    image: "/ClimaCare site.png?height=400&width=600",
    technologies: ["React", "Node.js", "OracleSQL", "Java", "Stripe"],
    githubUrl: "https://github.com/ClimaCare-global-solution/Clima-Care",
    liveUrl: "https://clima-care-theta.vercel.app/",
    features: [
      "Desenvolvido para mais de 500 usuários com arquitetura em React e Node.js",
      "Implementado processamento de pagamentos seguro com integração Stripe",
    ],
  },
  {
    title: "Smart Guide – Planejador de Rotas do Metrô de São Paulo",
    description:
      "Smart Guide é uma aplicação web interativa que facilita o planejamento de rotas no sistema metroviário de São Paulo. Com foco em acessibilidade e usabilidade, a plataforma permite que os usuários visualizem estações, calculem rotas eficientes, salvem trajetos favoritos e consultem informações detalhadas de cada estação.",
    image: "/Smartguide-def.png?height=400&width=600",
    technologies: ["Python", "java", "React", "node.js", "OracleSQL"],
    githubUrl: "https://github.com/challengeFiap-tds/challenge-ccr-definitivo",
    liveUrl: "https://challenge-ccr-definitivo.vercel.app/",
    features: [
      "Este projeto foi desenvolvido como parte das atividades acadêmicas da FIAP em parceria com a CCR, com o objetivo de demonstrar habilidades em desenvolvimento web e UX focado em mobilidade urbana.",
    ],
  },
  {
    title: "Solar Pride",
    description:
      "O SolarPride é uma plataforma digital projetada para democratizar o uso de energia solar. Com um dashboard interativo, suporte via chatbot e parcerias estratégicas, o SolarPride oferece uma solução completa para quem deseja adotar a energia solar de forma acessível e sustentável.",
    image: "/SolarPride.png?height=400&width=600",
    technologies: ["JavaScript","java" , "Python", "Html & css"],
    githubUrl: "https://github.com/SolarPrideGlobal/GlobalSolutions",
    liveUrl: "https://github.com/SolarPrideGlobal/GlobalSolutions",
    features: [
      "Simulações realistas de economia e impacto ambiental.",
      "Gráficos intuitivos que mostram a contribuição sustentável do usuário.",
    ],
  },
]

export default function ProjectsSection() {
  const [randomValues, setRandomValues] = useState<number[]>([])

  useEffect(() => {
    setRandomValues(projects.map(() => Math.floor(Math.random() * 5) + 2))
  }, [])

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
            Projetos em destaque
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300">
            Confira alguns dos meus trabalhos recentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-[1.015] cursor-pointer group border border-gray-200 dark:border-gray-700"
            >
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 400px"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  priority={index < 3}
                />
              </div>

              <div className="p-5 sm:p-6 md:p-7">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 text-center group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-5 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all duration-200 cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                  {randomValues[index] !== undefined && (
                    <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white transition-all duration-200 cursor-pointer">
                      +{randomValues[index]}
                    </span>
                  )}
                </div>

                <div className="space-y-3 mb-6 sm:mb-7">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <ArrowRight className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300" />
                      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full sm:w-auto bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white dark:text-gray-100 rounded-full px-5 py-2.5 text-sm font-medium cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
                    onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                  >
                    Ver detalhes
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>

                  <div className="flex gap-2 justify-center sm:justify-end">
                    <button
                      onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
                      className="p-2.5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:scale-110"
                      title="Ver no GitHub"
                      aria-label="Ver no GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
                      className="p-2.5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:scale-110"
                      title="Ver projeto ao vivo"
                      aria-label="Ver projeto ao vivo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => window.open("https://github.com/caiolucasxz55?tab=repositories", "_blank", "noopener,noreferrer")}
            className="inline-flex items-center gap-2 text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-all duration-300 font-medium cursor-pointer transform hover:scale-105 px-5 py-2.5 rounded-lg hover:bg-white dark:hover:bg-gray-800 hover:shadow-md text-sm sm:text-base border border-gray-200 dark:border-gray-700"
            aria-label="Ver todos os projetos"
          >
            Veja todos os meus projetos
            <ArrowRight className="w-5 h-5 transition-transform duration-300 hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  )
}