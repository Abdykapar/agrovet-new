import instance from './instance'

const prefix = '/api/v1/products'

export function getProducts(params) {
  return instance.get(prefix, { params })
}

export function getProductById(id) {
  return instance.get(`${prefix}/${id}`)
}
