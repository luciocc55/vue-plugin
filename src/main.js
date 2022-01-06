import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import router from './router'
import 'virtual:windi.css'

createApp(App).use(vuetify).use(createPinia()).use(router).mount('#app')
