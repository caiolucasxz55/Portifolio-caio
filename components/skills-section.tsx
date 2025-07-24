"use client"

import { Code, Database, Server, Wrench } from "lucide-react"
import { useState, useEffect } from "react"

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{
    left: string
    top: string
    delay: string
  }> | null>(null)

  useEffect(() => {
    setParticles(
      Array.from({ length: 6 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`
      }))
    )
  }, [])

  if (!particles) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-20"
          style={{
            left: particle.left,
            top: particle.top,
            animation: `float 3s ease-in-out infinite`,
            animationDelay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code className="size-5 sm:size-6" />,
    skills: ["TypeScript", "JavaScript", "HTML", "CSS", "React", "Angular"],
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    shadowColor: "hover:shadow-blue-500/25",
  },
  {
    title: "Backend",
    icon: <Server className="size-5 sm:size-6" />,
    skills: ["Python", "Node.js", "Django", "Java", "Flask"],
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    shadowColor: "hover:shadow-green-500/25",
  },
  {
    title: "Databases",
    icon: <Database className="size-5 sm:size-6" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "OracleSQL"],
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
    shadowColor: "hover:shadow-purple-500/25",
  },
  {
    title: "Ferramentas & Softwares",
    icon: <Wrench className="size-5 sm:size-6" />,
    skills: ["Git", "Docker", "REST APIs", "AWS", "N8N"],
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-600",
    shadowColor: "hover:shadow-orange-500/25",
  },
]

const learningItems = [
  "DevOps",
  "Inteligência Artificial",
  "Automação",
  "BlockChain",
  "Arquitetura em Cloud",
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '50px' },
    )

    const section = document.getElementById("skills")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const handleCardInteraction = (index: number | null) => {
    if (isMobile) {
      setHoveredCard(index)
    }
  }

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden relative">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Tech Stack & Habilidades
          </h2>
          <p className={`text-base sm:text-lg text-gray-600 transition-all duration-700 ease-out delay-200 max-w-3xl mx-auto px-2 sm:px-4 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Tecnologias e ferramentas que utilizo para transformar ideias em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative bg-white rounded-xl p-4 sm:p-6 border border-gray-200 transition-all duration-500 ease-out hover:scale-[1.02] ${
                category.shadowColor
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                transform: hoveredCard === index ? "scale(1.02)" : "",
                minHeight: "300px",
              }}
              onMouseEnter={() => !isMobile && setHoveredCard(index)}
              onMouseLeave={() => !isMobile && setHoveredCard(null)}
              onTouchStart={() => handleCardInteraction(index)}
              onTouchEnd={() => handleCardInteraction(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 h-full flex flex-col">
                <div className={`${category.color} ${category.hoverColor} size-12 sm:size-14 md:size-16 rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 mx-auto transition-all duration-300 group-hover:rotate-6`}>
                  {category.icon}
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center transition-colors duration-300">
                  {category.title}
                </h3>

                <div className="space-y-2 sm:space-y-3 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`text-sm text-gray-600 text-center py-2 px-3 bg-gray-50 rounded-lg transition-all duration-300 ${
                        hoveredCard === index ? "translate-x-1 bg-white shadow-xs" : ""
                      }`}
                      style={{
                        transitionDelay: hoveredCard === index ? `${skillIndex * 50}ms` : "0ms",
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full transition-colors duration-300">
                    {category.skills.length} skills
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 ease-out delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Atualmente aprendendo</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center px-2 sm:px-4">
            {learningItems.map((item, index) => (
              <span
                key={item}
                className={`px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium border border-gray-200 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isVisible ? `${800 + index * 100}ms` : "0ms",
                }}
              >
                {item}
                <span className="ml-1 inline-block size-1.5 sm:size-2 bg-green-400 rounded-full animate-pulse" />
              </span>
            ))}
          </div>
        </div>

        <FloatingParticles />
      </div>
    </section>
  )
}