/** Prefix a public/ asset path with Vite's configured base. */
export function publicUrl(path) {
  const normalized = String(path).replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${normalized}`
}
