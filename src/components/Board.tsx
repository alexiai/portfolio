import { useState } from "react"
import { otherProjects } from "../data/other"
import { timeline } from "../data/profile"
import { featuredProjects } from "../data/projects"
import { boardAsset, profileAsset } from "../lib/assets"
import { Cover } from "./Covers"

const labels: Record<string, string> = {
  miorita: "Website",
  dulce: "Website",
  "salon-emma": "Website",
  bunnybuddy: "Mobile app",
}

const stickers = ["cat", "camera", "flowers", "sparkles", "safety-pin", "gingham-bow", "sewing-stickers", "red-stars"]
const projectButtons = { miorita: "button-yellow", dulce: "button-heart", emma: "button-dots", bunny: "button-blue" }
const studyStatuses = { bsc: "Graduated", msc: "In progress", erasmus: "Exchange" }

const creativePins = [
  { slot: "strawberry-nails", label: "Strawberry nails" },
  { slot: "bunny-painting", label: "Bunny painting" },
  { slot: "clay-campfire", label: "Clay campfire" },
  { slot: "wildlife-nails", label: "Tiger nail art" },
  { slot: "woodland-nail-details", label: "Woodland nail details" },
]

export function Board() {
  const [spin, setSpin] = useState(0)
  return (
    <section id="work" tabIndex={-1} className="board" aria-labelledby="work-title">
      <div className="board__intro">
        <p className="board__hello">Hello, I’m Alexia.</p>
        <h1 id="work-title">
            Computer Science graduate, now studying Data Science.
        </h1>
        <p className="board__lede">
          I work between frontend, UI design and AI. These are some projects I’d most like you to see.
        </p>
      </div>

      <div className="board__wrap">
        <div className="corkboard">
          <img className="board-reader" src={boardAsset("reader")} alt="" draggable={false} />
          <img className="board-keychain" src={boardAsset("keychain")} alt="" draggable={false} />
          {stickers.map((sticker) => (
            <img key={sticker} className={`board-sticker board-sticker--${sticker}`} src={boardAsset(sticker)} alt="" draggable={false} />
          ))}
          <img className="board-letterboxd" src={boardAsset("letterboxd")} alt="Letterboxd sticker" draggable={false} />
          <button type="button" className="board-star" onClick={() => setSpin((value) => value + 1)} aria-label="Spin the star pin">
            <img key={spin} className={spin ? "board-star__spinning" : undefined} src={boardAsset("star")} alt="" draggable={false} />
            <span className="board-star__hub" aria-hidden="true" />
          </button>
          <div className="board-headphones" aria-hidden="true">
            <img src={boardAsset("headphones")} alt="" draggable={false} />
            <span>♪</span><span>♫</span><span>♩</span>
          </div>

          <span className="board-label board-label--web" aria-hidden="true">
            websites I designed &amp; developed
          </span>
          <span className="board-label board-label--app" aria-hidden="true">
            an app I designed &amp; built alone
          </span>

          {featuredProjects.map((p) => (
            <a key={p.id} href={`#${p.id}`} className={`pin pin--${p.theme}`} aria-label={`${p.title} — read the case study`}>
              <img className="pin__tack" src={boardAsset(projectButtons[p.theme])} alt="" />
              {p.theme === "dulce" && <span className="washi" aria-hidden="true" />}
              <div className="pin__photo">
                <Cover project={p} />
              </div>
              <strong>{p.title}</strong>
              <small>
                {labels[p.id]} · {p.boardNote}
              </small>
            </a>
          ))}

          <div className="board-personal">
            <a className="note note--about" href="#about">
              <i className="paperclip" aria-hidden="true" />
              <span>About me</span>
            </a>
            <div className="board-creative">
              {creativePins.map(({ slot, label }) => (
                <a href="#creative" key={slot} aria-label={`${label} — creative side quests`}>
                  <img src={profileAsset(`${slot}-pin`)} alt="" />
                </a>
              ))}
            </div>
          </div>
          <a className="education-receipt" href="#journey" aria-label="Education receipt — view my journey">
            <span className="education-receipt__heading">Education receipt</span>
            <span className="education-receipt__items">
              {timeline.map(({ id, title, dates, place }) => (
                <span className="education-receipt__item" key={id}>
                  <strong>{title}</strong>
                  <span>{place}</span>
                  <span className="education-receipt__line">
                    <span>{dates}</span>
                    <span>{studyStatuses[id as keyof typeof studyStatuses]}</span>
                  </span>
                </span>
              ))}
            </span>
            <span className="education-receipt__barcode" aria-hidden="true" />
          </a>
          <section className="board-extras" aria-labelledby="board-extras-title">
            <h2 id="board-extras-title"><a href="#other">Other things I’ve built</a></h2>
            <ul>
              {otherProjects.map((project) => (
                <li key={project.id} className="board-extra">
                  <a href={`#${project.id}`}>
                    <strong>{project.boardTitle ?? project.title}</strong>
                    <small>{project.tagline}</small>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <a className="board__caption" href={`#${featuredProjects[0].id}`}>Scroll to the case studies ↓</a>
      </div>
    </section>
  )
}
