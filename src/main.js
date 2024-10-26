import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import router from './router/router.js'
import { createPinia } from 'pinia'
import './axios/axios.js'
const pinia = createPinia()
const app = createApp(App)

app.use(bootstrap)
app.use(router)
app.use(pinia)
app.mount('#app')
