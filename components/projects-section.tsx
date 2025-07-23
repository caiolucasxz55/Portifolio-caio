"use client"

import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "ClimateCare - Plataforma de Monitoramento Climático",
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
  return (
  <section id="projects" className="py-20 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-gray-700 transition-colors duration-200">
          Projetos em destaque
        </h2>
        <p className="text-gray-600 text-lg hover:text-gray-800 transition-colors duration-200">
          Confira alguns dos meus trabalhos recentes
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden transform hover:scale-[1.02] cursor-pointer group"
          >
            {/* Project Image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center group-hover:text-gray-700 transition-colors duration-200">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-200">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
                <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 cursor-pointer">
                  +{Math.floor(Math.random() * 5) + 2}
                </span>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-200">
                    <ArrowRight className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0 group-hover:text-gray-600 transition-colors duration-200" />
                    <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <Button
                  variant="default"
                  size="sm"
                  className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-4 py-2 text-xs font-medium cursor-pointer transform hover:scale-105 transition-all duration-200 shadow-sm hover:shadow-md"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  Ver detalhes
                  <ArrowRight className="w-3 h-3 ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>

                <div className="flex gap-2">
                  <button
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-all duration-200 cursor-pointer rounded-full hover:bg-gray-100 transform hover:scale-110"
                    title="Ver no GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => window.open(project.liveUrl, "_blank")}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-all duration-200 cursor-pointer rounded-full hover:bg-gray-100 transform hover:scale-110"
                    title="Ver projeto ao vivo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Link */}
      <div className="text-center">
        <button
          onClick={() => window.open("https://github.com/caiolucasxz55?tab=repositories", "_blank")}
          className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-all duration-200 font-medium cursor-pointer transform hover:scale-105 px-4 py-2 rounded-lg hover:bg-white hover:shadow-md"
        >
          Veja todos os meus projetos
          <ArrowRight className="w-4 h-4 transition-transform duration-200 hover:translate-x-1" />
        </button>
      </div>
    </div>
  </section>
)
}
