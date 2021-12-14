import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import { createStore } from 'vuex'
import 'virtual:windi.css'
const store = createStore({
    state () {
      return {
        count: 0
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
  store.commit('increment')
  console.log(store.state.count)
createApp(App).use(vuetify).use(store).mount('#app')
