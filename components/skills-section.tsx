"use client"

import { Code, Database, Server, Wrench } from "lucide-react"
import { useState, useEffect } from "react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Code className="w-6 h-6" />,
    skills: ["TypeScript", "JavaScript","HTML", "CSS", "React",  "Angular"],
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    shadowColor: "hover:shadow-blue-500/25",
  },
  {
    title: "Backend",
    icon: <Server className="w-6 h-6" />,
    skills: ["Python","Node.js", "Django", "Java", "Flask"],
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    shadowColor: "hover:shadow-green-500/25",
  },
  {
    title: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "OracleSQL"],
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
    shadowColor: "hover:shadow-purple-500/25",
  },
  {
    title: "Ferramentas & Softwares",
    icon: <Wrench className="w-6 h-6" />,
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
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("skills")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold text-gray-900 mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Tech Stack & Habilidades
          </h2>
          <p
            className={`text-lg text-gray-600 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Tecnologias e ferramentas que utilizo para transformar ideias em realidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl ${category.shadowColor} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
                transform: hoveredCard === index ? "translateY(-8px) scale(1.02)" : "",
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon with animation */}
                <div
                  className={`${category.color} ${category.hoverColor} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto transition-all duration-300 group-hover:rotate-6 group-hover:scale-110`}
                >
                  <div className="transition-transform duration-300 group-hover:scale-110">{category.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center group-hover:text-gray-800 transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Skills with staggered animation */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`text-sm text-gray-600 text-center py-2 px-3 bg-gray-50 rounded-lg transition-all duration-300 group-hover:bg-white group-hover:shadow-sm group-hover:text-gray-800 ${
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
                <div className="mt-4 text-center">
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full group-hover:bg-gray-200 transition-colors duration-300">
                    {category.skills.length} skills
                  </span>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gray-200 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Currently Learning Section with animations */}
        <div
          className={`text-center transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Atualmente aprendendo</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {learningItems.map((item, index) => (
              <span
                key={item}
                className={`px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:scale-105 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-100 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isVisible ? `${800 + index * 100}ms` : "0ms",
                }}
              >
                <span className="relative">
                  {item}
                  {/* Animated dot */}
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-200 rounded-full opacity-20 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
