import { useNavigateCard } from "./useNavigateCard"

export function Entrance() {
  const { lanyard, card } = useNavigateCard()

  return (
    <section className="entrance" aria-label="Alexia Cojan’s portfolio">
      <div className="entrance__print" aria-hidden="true">DESIGN<br />&amp; CODE</div>
      <div className="entrance__burst entrance__burst--top" aria-hidden="true" />
      <div className="entrance__burst entrance__burst--bottom" aria-hidden="true" />
      <div className="lanyard" ref={lanyard}>
        <div className="lanyard__strap" aria-hidden="true" />
        <div className="lanyard__ring" aria-hidden="true" />
        <div className="lanyard__wire" aria-hidden="true" />
        <button type="button" className="badge-card" {...card}>
          <span className="badge-card__hole" aria-hidden="true" />
          <span className="badge-card__clip" aria-hidden="true" />
          <span className="badge-card__label">PORTFOLIO</span>
          <strong>Alexia<br />Cojan</strong>
          <span className="badge-card__mark" aria-hidden="true">✷</span>
          <span className="badge-card__role">Frontend · UI design · AI</span>
          <span className="badge-card__barcode" aria-hidden="true" />
          <span className="badge-card__hint">Pull down or tap to open ↓</span>
        </button>
      </div>
      <a className="entrance__skip" href="#work">Skip to the board →</a>
    </section>
  )
}
