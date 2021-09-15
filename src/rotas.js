import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/Home.vue' 
import Detalhes from './pages/Detalhes.vue'

const routes = [
  { path: '/', name:'home', component: Home }, 
  { path: '/detalhes-time', name:'detalhes', component: Detalhes },/*
  { path: '/filme/:id', name:'detalhes', component: Detalhes }, */
]

const rotas = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default rotas
