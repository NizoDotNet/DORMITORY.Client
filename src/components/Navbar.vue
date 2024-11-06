<script setup>
import {UserStore} from "@/stores/UserStore.js";
import {useRouter} from "vue-router";
const store = UserStore()
const router = useRouter()
const logOut = () => {
  store.logOut()
  router.push("/login")
}
</script>

<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <router-link to="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <img src="../assets/images/ADAU-logo.png" alt="" width="50" height="50">
        </router-link>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><router-link to="/" class="nav-link px-2 link-secondary">Ana səhifə</router-link></li>
        <li><router-link to="/Contact" class="nav-link px-2">Əlaqə</router-link></li>
      </ul>

      <div v-if="!store.isAuthenticated" class="col-md-3 text-end">
        <button @click="$router.push('/Register')" type="button" class="btn btn-primary">Qeydiyyatdan keç</button>
      </div>
      <div v-else class="col-md-3 text-end">
        <button @click="$router.push('/user')" type="button" class="btn btn-outline-primary me-2">{{ store.user.email }}</button>
        <button @click="logOut" type="button" class="btn btn-outline-primary me-2">Logout</button>
      </div>
    </header>
  </div>
</template>

<style scoped>

</style>