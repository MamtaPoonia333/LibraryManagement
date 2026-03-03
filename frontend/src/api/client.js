import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getApiError = (error, fallback = 'Something went wrong') => {
  return error?.response?.data?.error || fallback
}

export default api
