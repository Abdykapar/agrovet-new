import instance from './instance'

const prefix = '/api/v1/address'

export function getAddresses(params) {
  return instance.get(prefix, { params })
}
