/**
 * Finds real images dropped into src/assets without any code change.
 *   src/assets/projects/<project-id>/<slot>.(png|jpg|jpeg|webp|avif|svg)
 *   src/assets/profile/<slot>.(png|jpg|jpeg|webp|avif|svg)
 */
const files = import.meta.glob("/src/assets/**/*.{png,jpg,jpeg,webp,avif,svg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>

const byKey = new Map<string, string>()
for (const [path, url] of Object.entries(files)) {
  const key = path.replace("/src/assets/", "").replace(/\.[^.]+$/, "")
  byKey.set(key, url)
}

export const projectAsset = (projectId: string, slot: string) => byKey.get(`projects/${projectId}/${slot}`)
export const profileAsset = (slot: string) => byKey.get(`profile/${slot}`)

export const boardAsset = (slot: string) => byKey.get(`board/${slot}`)
