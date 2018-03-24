export default {
  functional: true,
  name: 'Navtop',
  render () {
    return (
      <v-toolbar
        app
        fixed
        color="indigo"
        dark
      >
        <v-spacer></v-spacer>
        <v-toolbar-title>Vue TV Shows</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    )
  }
}
