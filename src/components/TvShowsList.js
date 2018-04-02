import { splitEvery, map } from 'ramda'

const renderRows = (h) => (shows, i) => (
  <v-layout
    justify-space-around
    wrap
    key={i}
  >
    {map(renderCard(h), shows)}
  </v-layout>
)

const renderCard = (h) => (show) => (
  <v-flex
    lg2
    xs11
    sm3
    key={show.id}
  >
    <v-card
      class='show-card'
      to={`tv-show/${show.id}`}
      heigth='500px'
      width='300px'
    >
      <v-card-media
        class='show-media'
        src={show.image && show.image.original}
      />
      <v-card-title primary-title>
        {show.name}
      </v-card-title>
    </v-card>
  </v-flex>
)

export default {
  functional: true,
  name: 'TvShowsList',
  props: {
    shows: {
      type: Array,
      default: []
    }
  },
  render (h, { props }) {
    const { shows } = props
    const showsSplited = splitEvery(3, shows)
    return (
      <div class='mt-5'>
        {map(renderRows(h), showsSplited)}
      </div>
    )
  }
}
