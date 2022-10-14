import instance from './instance'

const prefix = '/api/v1/categories'

export function getCategories(params) {
  return instance.get(prefix, { params })
}

export function getCategoryById(id) {
  return instance.get(`${prefix}/${id}`)
}

export function getParentCategories(params) {
  return instance.get(`${prefix}/parent`, { params })
}

export function getCategorySub(params) {
  return instance.get(`${prefix}/sub`, { params })
}
