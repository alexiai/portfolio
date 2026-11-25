import { useEffect, useRef, useState } from "react"
import { Board } from "./components/Board"
import { CaseStudy } from "./components/CaseStudy"
import { Entrance } from "./components/Entrance"
import { Nav } from "./components/Nav"
import { About, Contact, Creative, Journey, OtherProjects } from "./components/Sections"
import { otherProjects } from "./data/other"
import { featuredProjects } from "./data/projects"

const workAnchors = new Set(["work", "other", ...featuredProjects.map(({ id }) => id), ...otherProjects.map(({ id }) => id)])
const pages = new Set(["top", "about", "creative", "journey", "contact", ...workAnchors])

function currentPage() {
  const id = window.location.hash.slice(1)
  return pages.has(id) ? id : "top"
}

export default function App() {
  const [page, setPage] = useState(currentPage)
  const main = useRef<HTMLElement>(null)
  const showWork = workAnchors.has(page)

  useEffect(() => {
    const update = () => setPage(currentPage())
    window.addEventListener("hashchange", update)
    return () => window.removeEventListener("hashchange", update)
  }, [])

  useEffect(() => {
    const target = document.getElementById(page)
    if (target) {
      target.scrollIntoView()
      target.focus({ preventScroll: true })
    } else {
      main.current?.focus({ preventScroll: true })
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [page])

  return (
    <>
      <a className="skip" href="#main-content" onClick={(event) => {
        event.preventDefault()
        main.current?.focus()
      }}>Skip to content</a>
      {page !== "top" && <Nav page={page} />}
      <main id="main-content" ref={main} tabIndex={-1}>
        {page === "top" && <Entrance />}
        {showWork && (
          <>
            <Board />
            {featuredProjects.map((project, index) => {
              const next = featuredProjects[index + 1]
              return <CaseStudy key={project.id} project={project} next={next
                ? { href: `#${next.id}`, label: `Next: ${next.title}` }
                : { href: "#other", label: "Other things I’ve built" }} />
            })}
            <OtherProjects />
          </>
        )}
        {page === "about" && <><About /><div className="wrap view-link"><a href="#creative">Creative interests →</a></div></>}
        {page === "creative" && <><Creative /><div className="wrap view-link"><a href="#about">← Back to About</a></div></>}
        {page === "journey" && <Journey />}
        {page === "contact" && <Contact />}
      </main>
    </>
  )
}
