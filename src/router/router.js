import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import UserView from "@/views/UserView.vue";
import RegisterView from "@/views/RegisterView.vue"
const routes = [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginView },
    { path: '/user', component: UserView },
    { path: '/register', component: RegisterView },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})

