/** An image in a project gallery. */
export type Slot = {
  /** File name (without extension) inside src/assets/projects/<project-id>/ */
  slot: string
  /** Describes what the real asset should show — also used as alt text */
  label: string
  frame?: "browser" | "phone" | "plain"
  /** CSS aspect-ratio, e.g. "16 / 10" */
  ratio?: string
  caption?: string
}

export type Link = { label: string; href?: string }

export type Decision = { title: string; text: string }

export type Feature = {
  title: string
  text: string
  /** Honest status note, shown as a small tag */
  status?: string
}

export type FeaturedProject = {
  id: string
  number: string
  title: string
  subtitle: string
  categories: string[]
  kind: "website" | "app"
  /** Selects the visual personality, see styles/studies.css */
  theme: "miorita" | "dulce" | "emma" | "bunny"
  /** Handwritten note on the overview board */
  boardNote: string
  context: string[]
  challenge: string[]
  approach: string[]
  decisions: Decision[]
  contribution: string[]
  result?: string[]
  features?: Feature[]
  tech?: string[]
  live?: string
  github?: string
  demo?: string
  hero: Slot
  gallery: Slot[]
}

export type OtherProject = {
  id: string
  title: string
  tagline: string
  boardTitle?: string
  demo?: { label: string; href: string }
  description: string[]
  tech: string[]
  /** Leave undefined until a real repository URL exists */
  github?: string
  live?: string
}
