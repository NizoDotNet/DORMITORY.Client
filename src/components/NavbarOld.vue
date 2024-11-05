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
  <div class="ms-2 me-2">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <router-link to="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <img src="../assets/images/ADAU-logo.png" width="50px" height="50px"/>
        </router-link>
      </div>

<!--      <ul class="nav nav-pills">
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2">Features</a></li>
        <li><a href="#" class="nav-link px-2">Pricing</a></li>
        <li><a href="#" class="nav-link px-2">FAQs</a></li>
        <li><a href="#" class="nav-link px-2">About</a></li>
      </ul>-->

      <div v-if="!store.isAuthenticated" class="col-md-3 text-end">
        <router-link to="/login" class="btn btn-outline-primary me-2">Daxil ol</router-link>
        <router-link to="/register" class="btn btn-primary">Qeydiyyatdan keç</router-link>
      </div>
      <div v-else class="col-md-3 text-end">
        <router-link to="/user" class="btn me-1">{{ store.user.email }}</router-link>
        <button @click="logOut" type="button" class="btn btn-outline-primary me-2">Logout</button>
      </div>
    </header>
  </div>
</template>

<style scoped>

</style>