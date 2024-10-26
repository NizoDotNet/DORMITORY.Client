import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginView },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})

