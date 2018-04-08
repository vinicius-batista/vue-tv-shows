import { findShowById } from '@/services/shows'
import { map, split, join } from 'ramda'
import renderLoading from '@/mixins/renderLoading'

export default {
  name: 'TvShowDetails',
  mixins: [renderLoading],
  async created () {
    const { data } = await findShowById(this.id)
    this.show = data
    this.loading = false
  },
  data: () => ({
    show: null,
    loading: true
  }),
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    formatDate (date) {
      const [year, month, day] = split('-', date)
      return join('/', [month, day, year])
    },
    renderContent () {
      return (
        <v-layout wrap row class='show-details'>
          <v-flex
            sm5
            offset-sm1
            md2
            offset-md2
          >
            <img src={this.show.image.original} />
          </v-flex>
          <v-flex
            sm5
            md6
          >
            <div class='headline'>{this.show.name}</div>
            <div class='body-1' domPropsInnerHTML={this.show.summary} />
            <div class='body-2'>
              <span>Genres:</span>
              {map(
                (genre, i) => (<v-chip key={i}>{genre}</v-chip>),
                this.show.genres
              )}
            </div>
            <div>
              <span class='body-2'>Release date:</span>
              <span class='body-1'>{this.formatDate(this.show.premiered)}</span>
            </div>
            <div>
              <span class='body-2'>Rating:</span>
              <span class='body-1'>{this.show.rating.average}</span>
            </div>
            <div>
              <span class='body-2'>Website:</span>
              <a class='body-1' href={this.show.officialSite}>{this.show.officialSite}</a>
            </div>
            <v-btn
              onClick={() => this.$router.push('/')}
              round
              small
              color='grey lighten-2'
            >
                Back
            </v-btn>
          </v-flex>
        </v-layout>
      )
    }
  },
  render () {
    return (
      <div>
        {
          this.loading
            ? this.renderLoading()
            : this.renderContent()
        }
      </div>
    )
  }
}
