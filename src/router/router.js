import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'

import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'
import UserView from "@/views/UserView.vue";
import RegisterView from "@/views/RegisterView.vue"
import UserIdView from "@/views/UserIdView.vue";
import ServerErrorView from "@/views/ServerErrorView.vue";
import ContactView from "@/views/ContactView.vue";
import UsersView from "@/views/UsersView.vue";
const routes = [
    { path: '/', component: HomeView },
    { path: '/login', component: LoginView },
    { path: '/user', component: UserView },
    { path: '/users/:id', component: UserIdView, name: 'User' },
    { path: '/register', component: RegisterView },
    { path: '/server-error', component: ServerErrorView},
    { path: "/contact", component: ContactView},
    { path: "/users", component: UsersView}
]

export default createRouter({
    history: createWebHistory(),
    routes,
})

