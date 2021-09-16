import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/Home.vue'  

const routes = [
  { path: '/', name:'home', component: Home },  /*
  { path: '/filme/:id', name:'detalhes', component: Detalhes }, */
]

const rotas = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default rotas
