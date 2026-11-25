import type { FeaturedProject } from "../data/types"
import { projectAsset } from "../lib/assets"

/**
 * Stylised covers for the overview board. They are drawn with CSS and only carry brand names —
 * they are NOT screenshots. If src/assets/projects/<id>/cover.* (or hero.*) exists it is used instead.
 */
export function Cover({ project }: { project: FeaturedProject }) {
  const real = projectAsset(project.id, "cover") ?? projectAsset(project.id, "hero")
  if (real) return <img className="cover cover--img" src={real} alt="" loading="lazy" />

  switch (project.theme) {
    case "miorita":
      return (
        <div className="cover cover--miorita" aria-hidden="true">
          <i className="folk folk--top" />
          <b>MIORIȚA</b>
          <span className="sun" />
          <i className="folk folk--bottom" />
        </div>
      )
    case "dulce":
      return (
        <div className="cover cover--dulce" aria-hidden="true">
          <b>
            Dulce <em>by Romina</em>
          </b>
          <div className="cake">
            <i className="l1" />
            <i className="l2" />
            <i className="cream" />
            <i className="berry b1" />
            <i className="berry b2" />
          </div>
        </div>
      )
    case "emma":
      return (
        <div className="cover cover--emma" aria-hidden="true">
          <div className="dress">
            <i className="top" />
            <i className="skirt" />
          </div>
          <b>
            E<span>Salon Emma</span>
          </b>
        </div>
      )
    case "bunny":
      return (
        <div className="cover cover--bunny" aria-hidden="true">
          <div className="phone">
            <span className="ear l" />
            <span className="ear r" />
            <span className="face">• ᴗ •</span>
            <i className="bar" />
            <i className="bar short" />
          </div>
          <span className="carrot c1" />
          <span className="carrot c2" />
        </div>
      )
  }
}
