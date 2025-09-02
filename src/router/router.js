import {
  createWebHashHistory,
  createRouter,
  createWebHistory,
} from "vue-router";

import LoginView from "@/views/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
import UserView from "@/views/UserView.vue";
import RegisterView from "@/views/RegisterView.vue";
import UserIdView from "@/views/UserIdView.vue";
import ServerErrorView from "@/views/ServerErrorView.vue";
import ContactView from "@/views/ContactView.vue";
import UsersView from "@/views/UsersView.vue";
import UserIdViewFromQr from "@/views/UserIdViewFromQr.vue";
import UpdateUserView from "@/views/UpdateUserView.vue";
import RequiredImagesView from "@/views/RequiredImagesView.vue";
import RegistrationCLosedView from "@/views/RegistrationCLosedView.vue";
const routes = [
  { path: "/", component: HomeView },
  { path: "/login", component: LoginView },
  { path: "/user", component: UserView },
  { path: "/user/update", component: UpdateUserView },
  { path: "/users/:id", component: UserIdView, name: "User" },
  { path: "/users/qr/:id", component: UserIdViewFromQr },
  { path: "/register", component: RegistrationCLosedView },
  { path: "/server-error", component: ServerErrorView },
  { path: "/contact", component: ContactView },
  { path: "/users", component: UsersView },
  { path: "/required-images", component: RequiredImagesView },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
