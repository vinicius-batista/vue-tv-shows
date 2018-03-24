import NavTop from './components/NavTop'

export default {
  functional: true,
  name: 'app',
  render () {
    return (
      <v-app>
        <NavTop />
        <v-content>
          <v-container fluid>
            <router-view></router-view>
          </v-container>
        </v-content>
      </v-app>
    )
  }
}
