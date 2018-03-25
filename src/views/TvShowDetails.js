import { findShowById } from '@/services/shows'

export default {
  name: 'TvShowDetails',
  async created () {
    const { data } = await findShowById(this.id)
    this.show = data
  },
  data () {
    return {
      show: null
    }
  },
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  render () {
    return (
      <div></div>
    )
  }
}
