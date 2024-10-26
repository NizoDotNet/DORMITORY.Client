import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import router from './router/router.js'

const app = createApp(App)
app.use(bootstrap)
app.use(router)
app.mount('#app')
