export default {
  functional: true,
  name: 'TvShowsForm',
  render (h, { props, listeners }) {
    return (
      <v-text-field
        class="input-form"
        solo
        label="Search"
        append-icon="search"
        append-icon-cb={listeners.send}
        onInput={listeners.input}
      />
    )
  }
}
