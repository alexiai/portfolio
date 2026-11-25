import { useState } from "react"
import { otherProjects } from "../data/other"
import { aboutIntro, aboutStories, creative, languages, profile, timeline, toolbox } from "../data/profile"
import { profileAsset } from "../lib/assets"
import { ArrowIcon, CopyIcon, ExternalIcon, GithubIcon } from "./Icons"

/* ---------- Other things I've built ---------- */
export function OtherProjects() {
  return (
    <section id="other" tabIndex={-1} className="other" aria-labelledby="other-title">
      <div className="wrap">
        <header className="sec-head">
          <h2 id="other-title">Other things I’ve built</h2>
          <p>Beyond frontend: maps, geospatial data, machine learning and a SQL-backed desktop app.</p>
        </header>
        <ul className="other__grid">
          {otherProjects.map((p) => (
            <li key={p.id} id={p.id} tabIndex={-1} className="card">
              <h3>{p.title}</h3>
              <p className="card__tag">{p.tagline}</p>
              {p.description.map((d) => (
                <p key={d}>{d}</p>
              ))}
              <ul className="chips chips--small">
                {p.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="project-card-links">
                {p.github && (
                  <a className="textlink" href={p.github} target="_blank" rel="noreferrer">
                    <GithubIcon /> GitHub
                  </a>
                )}
                {p.demo && (
                  <a className="textlink" href={p.demo.href} target="_blank" rel="noreferrer">
                    {p.demo.label} <ExternalIcon />
                  </a>
                )}
              </div>
            </li>
          ))}
          <li className="card card--more" aria-label="More projects to come">
            <p className="hand">more on the way</p>
            <p>More websites and a game are planned.</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

/* ---------- About ---------- */
export function About() {
  const portrait = profileAsset("portrait")
  return (
    <section id="about" tabIndex={-1} className="about" aria-labelledby="about-title">
      <div className="wrap">
        <header className="about__head">
          <h2 id="about-title">I’m equal parts logic &amp; creativity.</h2>
        </header>

        <div className="about__intro">
          <figure className="polaroid">
            <span className="washi" aria-hidden="true" />
            {portrait && <img src={portrait} alt="Alexia standing by a canal" />}
            <figcaption>that’s me</figcaption>
          </figure>
          <div className="about__text">
            {aboutIntro.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
        </div>

        <ol className="stories">
          {aboutStories.map((s) => (
            <li key={s.id} className={`story story--${s.id}`}>
              <span className="story__n" aria-hidden="true">
                {s.number}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Creative() {
  return (
    <section id="creative" tabIndex={-1} className="creative" aria-labelledby="creative-title">
      <div className="wrap creative__layout">
        <header>
          <h2 id="creative-title">My creative side quests.</h2>
          <p>{creative.text}</p>
        </header>
        {creative.groups.map(({ title, photos }) => (
          <section key={title} className="creative-group">
            <h3>{title}</h3>
            <ul className="scatter">
              {photos.map(({ slot, label }) => {
                const src = profileAsset(slot)
                return src && (
                  <li key={slot} className="snap">
                    <a href={src} target="_blank" rel="noreferrer" aria-label={`View ${label} at full size (opens in a new tab)`}>
                      <img src={src} alt={label} loading="lazy" />
                      <span className="snap__cap">{label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </div>
    </section>
  )
}

/* ---------- Journey ---------- */
export function Journey() {
  return (
    <section id="journey" className="journey" aria-labelledby="journey-title">
      <div className="wrap">
        <header className="sec-head">
          <h2 id="journey-title">Journey</h2>
          <p>Where I’ve studied, and what I work with.</p>
        </header>

        <div className="journey__grid">
          <ol className="timeline" aria-label="Education timeline">
            {timeline.map((t) => (
              <li key={t.id} className={t.note ? "is-branch" : undefined}>
                <span className="timeline__dates">{t.dates}</span>
                <h3>{t.title}</h3>
                <p>{t.place}</p>
                {t.note && <em className="timeline__note">{t.note}</em>}
              </li>
            ))}
          </ol>

          <div className="toolbox">
            <h3>My toolbox</h3>
            <div className="toolbox__groups">
              {toolbox.map((g) => (
                <section key={g.group} aria-label={g.group}>
                  <h4>{g.group}</h4>
                  <ul className="chips chips--dark">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <div className="langs">
              <h4>Languages</h4>
              <ul>
                {languages.map((l) => (
                  <li key={l.name}>
                    <strong>{l.name}</strong>
                    <span>{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------- Contact ---------- */
export function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      /* clipboard unavailable — the mailto link still works */
    }
  }
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="wrap contact__inner">
        <p className="kicker">GOT AN IDEA?</p>
        <h2 id="contact-title">Let’s make something thoughtful together.</h2>
        <div className="contact__actions">
          <a className="btn btn--light" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowIcon />
          </a>
          <button type="button" className="btn btn--outline" onClick={copy}>
            <CopyIcon /> {copied ? "Copied" : "Copy email"}
          </button>
          <span className="sr-only" role="status" aria-live="polite">
            {copied ? "Email address copied" : ""}
          </span>
        </div>
        <ul className="contact__links">
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GithubIcon /> GitHub <ExternalIcon />
            </a>
          </li>
          <li>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
          </li>
        </ul>
        <p className="contact__fine">
          Designed &amp; built by Alexia · {new Date().getFullYear()} · <a href="#top">Back to the cover</a>
        </p>
      </div>
    </section>
  )
}
