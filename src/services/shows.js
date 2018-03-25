import { http } from './http'

export const findShowById = (id) =>
  http.get(`/shows/${id}`)
