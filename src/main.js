import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/main.css'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import App from './App.vue'
import initializeRouter from './router'

const pinia = createPinia()

const app = createApp(App)

initializeRouter(app)

app.use(pinia)
app.use(Toast, {
  transition: 'Vue-Toastification__fade',
  maxToasts: 20,
  newestOnTop: true,
})
app.mount('#app')
