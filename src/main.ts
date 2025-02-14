import { createApp } from 'vue'
import App from './App.vue'
import disablePreventDefault from './plugins/disable-prevent-default'
import vuetify from './plugins/vuetify'

// Styles
import './styles/vuetify.scss'
import './styles/hackbar.scss'

// Libs
import './generators/encode'
import './generators/hash'
import './generators/payload'

createApp(App).use(vuetify).use(disablePreventDefault).mount('#app')
