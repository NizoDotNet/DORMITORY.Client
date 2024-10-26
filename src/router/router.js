import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import UserView from "@/views/UserView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginView },
    {path: '/user', component: UserView },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})

