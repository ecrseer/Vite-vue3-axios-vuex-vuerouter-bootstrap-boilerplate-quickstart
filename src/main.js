import { createApp } from 'vue'
import store from './store'
import mitt from 'mitt'
import rotas from './rotas'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import './style/estilo.css'

const bus = mitt()
const app = createApp(App)
app.use(store)
app.use(rotas)
app.config.globalProperties.$bus = bus
app.mount('#app')
