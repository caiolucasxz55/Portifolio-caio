"use client"

import { Code, Database, Server, Wrench } from "lucide-react"
import { useState, useEffect } from "react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
    skills: ["TypeScript", "JavaScript","HTML", "CSS", "React",  "Angular"],
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    shadowColor: "hover:shadow-blue-500/25",
  },
  {
    title: "Backend",
    icon: <Server className="w-5 h-5 sm:w-6 sm:h-6" />,
    skills: ["Python","Node.js", "Django", "Java", "Flask"],
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    shadowColor: "hover:shadow-green-500/25",
  },
  {
    title: "Databases",
    icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "OracleSQL"],
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
    shadowColor: "hover:shadow-purple-500/25",
  },
  {
    title: "Ferramentas & Softwares",
    icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6" />,
    skills: ["Git", "Docker", "REST APIs", "AWS","N8N"],
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

  useEffect(() => {
    // Force viewport meta tag se não existir (Next.js safety)
    if (typeof window !== 'undefined' && !document.querySelector('meta[name="viewport"]')) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes';
      document.head.appendChild(meta);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '50px' },
    )

    const section = document.getElementById("skills")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  // Handle touch events for mobile
  const handleTouchStart = (index: number) => {
    setHoveredCard(index)
  }

  const handleTouchEnd = () => {
    setTimeout(() => setHoveredCard(null), 150)
  }

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 transition-all duration-700 leading-tight ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Tech Stack & Habilidades
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl text-gray-600 transition-all duration-700 delay-200 max-w-3xl mx-auto px-2 sm:px-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Tecnologias e ferramentas que utilizo para transformar ideias em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-200 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl ${category.shadowColor} touch-manipulation ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                transform: hoveredCard === index ? "translateY(-8px) scale(1.02)" : "",
                minHeight: "300px",
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => handleTouchStart(index)}
              onTouchEnd={handleTouchEnd}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-lg sm:rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Icon with animation */}
                <div
                  className={`${category.color} ${category.hoverColor} w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-5 md:mb-6 mx-auto transition-all duration-300 group-hover:rotate-6 group-hover:scale-110 flex-shrink-0`}
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">{category.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-4 sm:mb-5 md:mb-6 text-center group-hover:text-gray-800 transition-colors duration-300 flex-shrink-0">
                  {category.title}
                </h3>

                {/* Skills with staggered animation */}
                <div className="space-y-2 sm:space-y-3 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`text-xs sm:text-sm text-gray-600 text-center py-2 px-2 sm:px-3 bg-gray-50 rounded-md sm:rounded-lg transition-all duration-300 group-hover:bg-white group-hover:shadow-xs group-hover:text-gray-800 ${
                        hoveredCard === index ? "transform translate-x-1" : ""
                      }`}
                      style={{
                        transitionDelay: hoveredCard === index ? `${skillIndex * 50}ms` : "0ms",
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* Skill count indicator */}
                <div className="mt-3 sm:mt-4 text-center flex-shrink-0">
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full group-hover:bg-gray-200 transition-colors duration-300">
                    {category.skills.length} skills
                  </span>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-transparent group-hover:border-gray-200 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Currently Learning Section with animations */}
        <div
          className={`text-center transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Atualmente aprendendo</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center px-2 sm:px-4">
            {learningItems.map((item, index) => (
              <span
                key={item}
                className={`px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full text-xs sm:text-sm font-medium border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-100 touch-manipulation ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isVisible ? `${800 + index * 100}ms` : "0ms",
                }}
              >
                <span className="relative whitespace-nowrap">
                  {item}
                  {/* Animated dot */}
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Floating particles effect - Hidden on mobile for performance */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float 3s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  )
}