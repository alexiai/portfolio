import { useEffect, useRef } from "react"
import type { PointerEvent } from "react"

export function useNavigateCard() {
  const lanyard = useRef<HTMLDivElement>(null)
  const drag = useRef<{ id: number; x: number; y: number } | null>(null)
  const opening = useRef(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  function open() {
    if (opening.current) return
    opening.current = true
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.location.hash = "work"
      return
    }
    const cord = lanyard.current
    if (cord) {
      cord.style.setProperty("--release-from", cord.style.getPropertyValue("--cord-extension") || "0px")
      cord.classList.add("is-opening")
    }
    timer.current = window.setTimeout(() => { window.location.hash = "work" }, 460)
  }

  function onPointerDown(event: PointerEvent<HTMLButtonElement>) {
    if (!event.isPrimary || event.button !== 0 || opening.current) return
    drag.current = { id: event.pointerId, x: event.clientX, y: event.clientY }
    event.currentTarget.setPointerCapture(event.pointerId)
    lanyard.current?.classList.add("is-pulling")
  }

  function onPointerMove(event: PointerEvent<HTMLButtonElement>) {
    const start = drag.current
    if (!start || start.id !== event.pointerId) return
    lanyard.current?.style.setProperty("--cord-extension", `${Math.max(0, Math.min(100, (event.clientY - start.y) * 0.65))}px`)
  }

  function finish(event: PointerEvent<HTMLButtonElement>, activate: boolean) {
    const start = drag.current
    if (!start || start.id !== event.pointerId) return
    drag.current = null
    const distance = event.clientY - start.y
    if (activate && (distance >= 36 || Math.hypot(event.clientX - start.x, distance) < 10)) open()
    lanyard.current?.classList.remove("is-pulling")
    if (!opening.current) {
      lanyard.current?.style.removeProperty("--cord-extension")
    }
  }

  return {
    lanyard,
    card: {
      onPointerDown,
      onPointerMove,
      onPointerUp: (event: PointerEvent<HTMLButtonElement>) => finish(event, true),
      onPointerCancel: (event: PointerEvent<HTMLButtonElement>) => finish(event, false),
      onLostPointerCapture: (event: PointerEvent<HTMLButtonElement>) => finish(event, false),
      onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.detail === 0) open()
      },
    },
  }
}
