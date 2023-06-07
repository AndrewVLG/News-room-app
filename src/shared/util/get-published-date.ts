export const getPublishedDate = (publishedAt: string | null) => {
  const separator = (publishedAt && publishedAt.indexOf('T')) || 0
  return publishedAt && publishedAt.slice(0, separator)
}
