const importView = (name) =>
  () => import(`@/views/${name}`)

export default [
  {
    path: '/',
    redirect: '/tv-shows'
  },
  {
    path: '/tv-shows',
    name: 'tv-shows',
    component: importView('TvShows')
  }
]
