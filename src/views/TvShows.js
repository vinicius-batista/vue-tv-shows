import TvShowsForm from '@/components/TvShowsForm'
import TvShowsList from '@/components/TvShowsList'
import { searchShows } from '@/services/search'
import { map, filter, compose, prop, propIs } from 'ramda'

export default {
  name: 'TvShows',
  data () {
    return {
      search: '',
      shows: [],
      loading: false
    }
  },
  methods: {
    async sendHandler () {
      this.loading = true
      const { data } = await searchShows(this.search)

      const mapShowAndFilterWithoutImage = compose(
        filter(propIs(Object, 'image')),
        map(prop('show'))
      )
      this.shows = mapShowAndFilterWithoutImage(data)

      this.loading = false
    },
    inputHandler (value) {
      this.search = value
    },
    renderLoading () {
      return (
        <v-layout
          class="mt-5"
          justify-center
        >
          <v-progress-circular indeterminate></v-progress-circular>
        </ v-layout>
      )
    }
  },
  render () {
    return (
      <div>
        <v-layout
          class="mt-3"
          justify-center
        >
          <v-flex
            xs12
            md6
          >
            <TvShowsForm
              onSend={this.sendHandler}
              onInput={this.inputHandler}
            />
          </v-flex>
        </v-layout>
        {
          this.loading
            ? this.renderLoading()
            : <TvShowsList shows={this.shows}/>
        }
      </div>
    )
  }
}
