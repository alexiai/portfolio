import { useState } from "react"
import type { ReactNode } from "react"
import type { FeaturedProject, Slot } from "../data/types"
import { projectAsset } from "../lib/assets"
import { Asset } from "./Asset"
import { ArrowIcon, DownIcon, ExternalIcon, GithubIcon, UpIcon } from "./Icons"

type Props = { project: FeaturedProject; next: { href: string; label: string } }

const find = (p: FeaturedProject, slot: string): Slot => {
  const s = p.gallery.find((g) => g.slot === slot)
  if (!s) throw new Error(`Missing slot "${slot}" on ${p.id}`)
  return s
}

function Prose({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <div className="prose">
      <h3>{title}</h3>
      <div>
        {paragraphs.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </div>
  )
}

function Decisions({ project }: { project: FeaturedProject }) {
  return (
    <ul className="decisions">
      {project.decisions.map((d) => (
        <li key={d.title}>
          <h4>{d.title}</h4>
          <p>{d.text}</p>
        </li>
      ))}
    </ul>
  )
}

function Links({ project }: { project: FeaturedProject }) {
  return (
    <div className="study__links">
      {project.live && (
        <a className="btn" href={project.live} target="_blank" rel="noreferrer">
          Visit live website <ExternalIcon />
        </a>
      )}
      {project.demo && (
        <a className="btn" href={project.demo} target="_blank" rel="noreferrer">
          Demo video <ExternalIcon />
        </a>
      )}
      {project.github && (
        <a className="btn btn--ghost" href={project.github} target="_blank" rel="noreferrer">
          <GithubIcon /> View on GitHub
        </a>
      )}
    </div>
  )
}

/* ---------- Personality: the centrepiece of each case study ---------- */

function MioritaVisuals({ p }: { p: FeaturedProject }) {
  const [bookOpen, setBookOpen] = useState(false)
  const menuUrl = "https://miorita-bacau.netlify.app/meniu"

  return (
    <div className="v-miorita">
      <div className="v-miorita__book">
        <div className="menu-book">
          <Asset projectId={p.id} slot={find(p, "menu-spread")} className="site-capture" />
          <div className="menu-book__links">
            <button type="button" className="btn btn--ghost" aria-expanded={bookOpen} onClick={() => setBookOpen(!bookOpen)}>
              {bookOpen ? "Close the menu preview" : "Open the menu book"}
            </button>
            <a href={menuUrl} target="_blank" rel="noreferrer">Open in a new tab ↗</a>
          </div>
          {bookOpen && <iframe className="menu-book__preview" title="Interactive Miorița menu book" src={menuUrl} />}
        </div>
        <p className="aside">
          A menu that opens like a book — the most practical information, presented as part of the story.
        </p>
      </div>
      <SiteGallery project={p} slots={p.gallery.filter((slot) => slot.slot !== "menu-spread")} />
    </div>
  )
}

function DulceVisuals({ p }: { p: FeaturedProject }) {
  const before = ["Facebook posts", "Scroll to find a cake", "WhatsApp message"]
  const after = ["Catalogue by category", "Product page", "Select products", "Structured order", "WhatsApp to the owner"]
  return (
    <div className="v-dulce">
      <div className="flow" aria-label="Ordering before and after the website">
        <div className="flow__row flow__row--before">
          <h4>Before</h4>
          <ol>
            {before.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
        <div className="flow__row flow__row--after">
          <h4>With the website</h4>
          <ol>
            {after.map((s) => (
              <li key={s} className={s.startsWith("WhatsApp") ? "is-kept" : undefined}>
                {s}
              </li>
            ))}
          </ol>
          <p className="flow__note">The last step stays exactly where the owner already works.</p>
        </div>
      </div>
      <SiteGallery project={p} />
    </div>
  )
}

function EmmaVisuals({ p }: { p: FeaturedProject }) {
  return (
    <div className="v-emma">
      <div className="ia" aria-label="Illustration of the information-architecture idea">
        <div className="ia__side">
          <h4>Before</h4>
          <div className="ia__scatter" aria-hidden="true">
            {Array.from({ length: 9 }).map((_, i) => (
              <i key={i} />
            ))}
          </div>
          <p>A catalogue where the men’s section lacked a clear, consistent structure.</p>
        </div>
        <div className="ia__side ia__side--after">
          <h4>After</h4>
          <div className="ia__groups">
            <span>Bridal gowns &amp; accessories</span>
            <span>Groom’s suits, shoes &amp; accessories</span>
            <span>Evening &amp; cocktail dresses</span>
            <span>Occasion suits &amp; menswear</span>
          </div>
          <p>Categories reorganised, with particular attention to the men’s section.</p>
        </div>
        <p className="ia__caption">An illustration of the idea, not the site map.</p>
      </div>
      <SiteGallery project={p} />
    </div>
  )
}

function SiteGallery({ project, slots = project.gallery }: { project: FeaturedProject; slots?: Slot[] }) {
  return (
    <div className="site-gallery">
      {slots.map((slot) => (
        <Asset key={slot.slot} projectId={project.id} slot={slot}
          className={`site-capture ${slot.slot === "mobile" ? "site-capture--mobile" : ""}`} />
      ))}
    </div>
  )
}

function BunnyVisuals({ p }: { p: FeaturedProject }) {
  const screens = p.gallery.filter((g) => g.frame === "phone" && projectAsset(p.id, g.slot))
  const [screenIndex, setScreenIndex] = useState(0)
  const screen = screens[screenIndex]
  return (
    <div className="v-bunny">
      <h3 className="v-bunny__h">Five ways to record an expense</h3>
      <ul className="feat">
        {p.features?.map((f) => (
          <li key={f.title}>
            <h4>{f.title}</h4>
            <p>{f.text}</p>
            {f.status && <span className="status">{f.status}</span>}
          </li>
        ))}
      </ul>

      <h3 className="v-bunny__h">Screens</h3>
      <div className="screen-picker">
        <label htmlFor="bunny-screen">Choose a screen</label>
        <select id="bunny-screen" value={screenIndex} onChange={(event) => setScreenIndex(Number(event.target.value))}>
          {screens.map((item, index) => <option key={item.slot} value={index}>{item.caption ?? item.label}</option>)}
        </select>
        {screen && <Asset projectId={p.id} slot={screen} />}
        <div className="screen-picker__controls">
          <button type="button" aria-label="Previous screen" onClick={() => setScreenIndex((screenIndex + screens.length - 1) % screens.length)}>←</button>
          <span aria-live="polite">{screenIndex + 1} / {screens.length}</span>
          <button type="button" aria-label="Next screen" onClick={() => setScreenIndex((screenIndex + 1) % screens.length)}>→</button>
        </div>
      </div>

      <div className="play">
        <div>
          <h3>A carrot-themed game layer</h3>
          <p>
            Challenges, points, badges and trophies, with playful terminology — expenses are called{" "}
            <strong>Bunnyspense</strong>.
          </p>
        </div>
        <div>
          <h3>Seeing where money goes</h3>
          <p>Expenses can be viewed as lists, category charts and a calendar. Budgets run weekly, biweekly or monthly.</p>
        </div>
        <div>
          <h3>Recommendations</h3>
          <p>AI-powered recommendations and savings tips.</p>
        </div>
      </div>
    </div>
  )
}

/* ---------- Shared skeleton ---------- */

export function CaseStudy({ project: p, next }: Props) {
  const visuals: Record<FeaturedProject["theme"], ReactNode> = {
    miorita: <MioritaVisuals p={p} />,
    dulce: <DulceVisuals p={p} />,
    emma: <EmmaVisuals p={p} />,
    bunny: <BunnyVisuals p={p} />,
  }

  return (
    <article id={p.id} tabIndex={-1} className={`study study--${p.theme}`} aria-labelledby={`${p.id}-title`}>
      <div className="study__inner">
        <header className="study__head">
          <div>
            <p className="study__cats">{p.categories.join(" · ")}</p>
            <h2 id={`${p.id}-title`}>{p.title}</h2>
            <p className="study__sub">{p.subtitle}</p>
          </div>
        </header>

        <div className="study__overview">
          <Asset projectId={p.id} slot={p.hero} className={`study__hero ${p.hero.slot === "homepage" ? "site-capture" : ""}`} />
          <div className="study__story">
            <Prose title="Context" paragraphs={p.context} />
            <Prose title="The challenge" paragraphs={p.challenge} />
          </div>
        </div>

        <details className="study-fold" name={`case-study-${p.id}`}>
          <summary>My approach &amp; design decisions</summary>
          <div className="study__approach">
            <Prose title="My approach" paragraphs={p.approach} />
            <Decisions project={p} />
          </div>
        </details>

        <details className="study-fold" name={`case-study-${p.id}`}>
          <summary>Project gallery &amp; features</summary>
          <div className="study__visuals">{visuals[p.theme]}</div>
        </details>

        <details className="study-fold" name={`case-study-${p.id}`}>
          <summary>My contribution, results &amp; tools</summary>
          <div className="study__close">
            <Prose title="What I did" paragraphs={p.contribution} />
            {p.result && <Prose title="The result" paragraphs={p.result} />}
            {p.tech && (
              <div className="prose">
                <h3>Built with</h3>
                <ul className="chips">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </details>

        <footer className="study__foot">
          <Links project={p} />
          <nav className="study__next" aria-label={`After ${p.title}`}>
            <a href="#work">
              <UpIcon /> Back to the board
            </a>
            <a href={next.href}>
              {next.label} {next.href === "#other" ? <ArrowIcon /> : <DownIcon />}
            </a>
          </nav>
        </footer>
      </div>
    </article>
  )
}
