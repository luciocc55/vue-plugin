import 'vuetify/lib/styles/main.sass'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'


export default createVuetify({
  theme: {
      themes: {
        light: {
          primary: '#005192',
          secondary: '#b0bec5',
          accent: '#b0bec5',
          error: '#C65028',
        },
      },
    },
});