import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
})

instance.interceptors.response.use(
  function (response) {
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance
