"use client"

import { Code, Database, Server, Wrench } from "lucide-react"
import { useState, useEffect } from "react"

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number
    left: string
    top: string
    delay: string
    size: string
  }> | null>(null)

  useEffect(() => {
    setParticles(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 2}s`,
        size: `${Math.random() * 4 + 2}px`
      }))
    )
  }, [])

  if (!particles) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-blue-200/30 dark:bg-blue-400/20"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            animation: `float 6s ease-in-out infinite`,
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
    shadowColor: "hover:shadow-blue-500/20",
    borderColor: "border-blue-100"
  },
  {
    title: "Backend",
    icon: <Server className="size-5 sm:size-6" />,
    skills: ["Python", "Node.js", "Django", "Java", "Flask"],
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    shadowColor: "hover:shadow-green-500/20",
    borderColor: "border-green-100"
  },
  {
    title: "Databases",
    icon: <Database className="size-5 sm:size-6" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "OracleSQL"],
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
    shadowColor: "hover:shadow-purple-500/20",
    borderColor: "border-purple-100"
  },
  {
    title: "Ferramentas",
    icon: <Wrench className="size-5 sm:size-6" />,
    skills: ["Git", "Docker", "REST APIs", "AWS", "N8N"],
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-600",
    shadowColor: "hover:shadow-orange-500/20",
    borderColor: "border-orange-100"
  },
]

const learningItems = [
  "DevOps",
  "Inteligência Artificial",
  "Automação",
  "BlockChain",
  "Arquitetura Cloud",
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: '0px' }
    )

    const section = document.getElementById("skills")
    if (section) observer.observe(section)

    return () => {
      window.removeEventListener('resize', checkMobile)
      observer.disconnect()
    }
  }, [])

  const handleCardInteraction = (index: number | null) => {
    setHoveredCard(index)
  }

  return (
    <section 
      id="skills" 
      className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-950 overflow-hidden relative"
      aria-labelledby="skills-heading"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 
            id="skills-heading"
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Tech Stack & Habilidades
          </h2>
          <p className={`text-lg sm:text-xl text-gray-600 dark:text-gray-300 transition-all duration-700 ease-out delay-150 max-w-3xl mx-auto ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
            Tecnologias e ferramentas que utilizo para transformar ideias em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 mb-16 sm:mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`relative bg-white dark:bg-gray-900 rounded-xl p-5 sm:p-6 border ${
                category.borderColor
              } dark:border-gray-800 transition-all duration-300 ease-out hover:shadow-lg ${
                category.shadowColor
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                transform: hoveredCard === index ? "translateY(-4px)" : "",
                minHeight: "280px",
              }}
              onMouseEnter={() => !isMobile && handleCardInteraction(index)}
              onMouseLeave={() => !isMobile && handleCardInteraction(null)}
              onTouchStart={() => handleCardInteraction(index)}
              onTouchEnd={() => handleCardInteraction(null)}
              onFocus={() => !isMobile && handleCardInteraction(index)}
              onBlur={() => !isMobile && handleCardInteraction(null)}
              aria-labelledby={`skill-category-${index}`}
            >
              <div 
                id={`skill-category-${index}`}
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />

              <div className="relative z-10 h-full flex flex-col">
                <div className={`${category.color} ${category.hoverColor} size-12 sm:size-14 rounded-xl flex items-center justify-center text-white mb-5 mx-auto transition-all duration-300 ${
                  hoveredCard === index ? "rotate-6 scale-110" : ""
                }`}>
                  {category.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-5 text-center">
                  {category.title}
                </h3>

                <ul className="space-y-2 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      className={`text-sm sm:text-base text-gray-700 dark:text-gray-300 text-center py-2 px-3 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-200 ${
                        hoveredCard === index ? "translate-x-1 shadow-xs" : ""
                      }`}
                      style={{
                        transitionDelay: hoveredCard === index ? `${skillIndex * 50}ms` : "0ms",
                      }}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    {category.skills.length} tecnologias
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 ease-out delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
            Atualmente aprendendo
          </h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center max-w-2xl mx-auto">
            {learningItems.map((item, index) => (
              <span
                key={item}
                className={`inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm sm:text-base font-medium border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 100}ms` : "0ms",
                }}
              >
                {item}
                <span className="ml-2 inline-block size-2 bg-green-400 rounded-full animate-pulse" />
              </span>
            ))}
          </div>
        </div>

        <FloatingParticles />
      </div>
    </section>
  )
}