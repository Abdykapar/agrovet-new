export function getImageUrl(image) {
  return `${process.env.NEXT_PUBLIC_BASE_API}/api/v1/categories/file/${image}`
}
