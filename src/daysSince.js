export function daysSince(dateString) {
  const then = new Date(dateString + 'T00:00:00')
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  const diffMs = now - then
  return Math.max(0, Math.round(diffMs / (1000 * 60 * 60 * 24)))
}
