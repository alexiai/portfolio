import { useEffect, useRef, useState } from "react"

const links = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "journey", label: "Journey" },
] as const

/** Which top-level nav item each page section belongs to */
const sectionToNav: Record<string, string> = {
  work: "work",
  miorita: "work",
  dulce: "work",
  "salon-emma": "work",
  bunnybuddy: "work",
  other: "work",
  "walk-safe": "work",
  "lst-downscaling": "work",
  "java-social-network": "work",
  about: "about",
  creative: "about",
  journey: "journey",
  contact: "contact",
}

export function Nav({ page }: { page: string }) {
  const [open, setOpen] = useState(false)
  const active = sectionToNav[page]
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="nav">
      <a className="nav__brand" href="#top" aria-label="Alexia — return to the portfolio cover" onClick={close}>
        A<span aria-hidden="true">✦</span>
      </a>
      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="site-menu"
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <span aria-hidden="true" className="nav__bars" />
      </button>
      <nav id="site-menu" ref={menuRef} className={`nav__links ${open ? "is-open" : ""}`} aria-label="Main">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={close}
            aria-current={active === l.id ? "true" : undefined}
          >
            {l.label}
          </a>
        ))}
        <a className="nav__cta" href="#contact" onClick={close} aria-current={active === "contact" ? "true" : undefined}>
          Say hello
        </a>
      </nav>
    </header>
  )
}
