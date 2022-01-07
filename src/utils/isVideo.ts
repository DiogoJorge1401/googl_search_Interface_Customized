export const isVideo = (url: string): boolean => {
  console.log(url)
  if (!url.includes('youtube')) return false
  if (url.includes('channel')) return false
  return true
}
