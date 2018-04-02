export default {
  methods: {
    renderLoading () {
      return (
        <v-layout
          class='mt-5'
          justify-center
        >
          <v-progress-circular indeterminate />
        </v-layout>
      )
    }
  }
}
