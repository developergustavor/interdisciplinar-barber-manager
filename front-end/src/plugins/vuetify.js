import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// Translation provided by Vuetify (javascript)
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify)

const opts = {
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#000',
        secondary: '#00000029',
        tertiary: '#868686',
        light: '#fff',
        lightSecondary: '#FAFAFA',
        error: '#B24545',
      }
    }
  },
  lang: {
    locales: { pt },
    current: 'pt'
  }
}

export default new Vuetify(opts)
