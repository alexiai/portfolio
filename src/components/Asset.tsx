import type { Slot } from "../data/types"
import { projectAsset } from "../lib/assets"

type Props = {
  projectId: string
  slot: Slot
  className?: string
}

export function Asset({ projectId, slot, className = "" }: Props) {
  const src = projectAsset(projectId, slot.slot)
  if (!src) return null

  const frame = slot.frame ?? "plain"

  return (
    <figure className={`asset asset--${frame} ${className}`}>
      <div className="asset__frame">
        {frame === "browser" && (
          <div className="asset__bar" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        )}
        <div className="asset__screen" style={{ aspectRatio: slot.ratio ?? "16 / 10" }}>
          <img src={src} alt={slot.label} loading="lazy" decoding="async" />
        </div>
      </div>
      {slot.caption && <figcaption>{slot.caption}</figcaption>}
    </figure>
  )
}
