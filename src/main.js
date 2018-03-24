import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

// styles
import 'vuetify/dist/vuetify.min.css'
import './styles/main.scss'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
