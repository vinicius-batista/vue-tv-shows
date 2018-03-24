import { http } from './http'

export const searchShows = (search) =>
  http.get(`/search/shows?q=${search}`)
