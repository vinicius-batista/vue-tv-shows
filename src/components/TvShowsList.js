import { splitEvery, map } from 'ramda'

const renderRows = (h) => (shows) => (
  <v-layout justify-space-around wrap>
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
      class="show-card"
      to={`tv-shows/${show.id}`}
      heigth="500px"
      width="300px"
    >
      <v-card-media
        class="white--text show-media"
        src={show.image && show.image.original}
      >
      </v-card-media>
    </v-card>
  </v-flex>
)

export default {
  functional: true,
  name: 'TvShowsList',
  props: {
    shows: {
      type: Array
    }
  },
  render (h, { props }) {
    const { shows } = props
    const showsSplited = splitEvery(3, shows)
    return (
      <div class="mt-5">
        {map(renderRows(h), showsSplited)}
      </div>
    )
  }
}
