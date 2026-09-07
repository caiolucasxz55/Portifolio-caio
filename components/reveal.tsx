"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  /** Atraso da entrada, em milissegundos. */
  delay?: number
  from?: "bottom" | "left" | "right" | "none"
  className?: string
  as?: "div" | "li" | "article" | "span"
}

const hidden: Record<NonNullable<RevealProps["from"]>, string> = {
  bottom: "translate-y-6",
  left: "-translate-x-6",
  right: "translate-x-6",
  none: "",
}

/**
 * Revela o conteúdo ao entrar na viewport, uma única vez.
 * Movimento curto e discreto, para não competir com o conteúdo.
 */
export default function Reveal({
  children,
  delay = 0,
  from = "bottom",
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        visible ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${hidden[from]}`
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  )
}
