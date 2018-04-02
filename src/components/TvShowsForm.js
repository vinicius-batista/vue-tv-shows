export default {
  functional: true,
  name: 'TvShowsForm',
  render (h, { listeners }) {
    const onSubmit = (e) => {
      e.preventDefault()
      return listeners.send()
    }
    return (
      <form onSubmit={onSubmit}>
        <v-text-field
          class='input-form'
          solo
          label='Search'
          append-icon='search'
          append-icon-cb={listeners.send}
          onInput={listeners.input}
        />
      </form>
    )
  }
}
