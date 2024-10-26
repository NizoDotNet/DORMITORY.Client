<script setup>
import {computed, ref} from "vue";
import {UserStore} from "@/stores/UserStore.js";
const store = UserStore()
const logOut = () => {
  localStorage.removeItem('token')
  store.logOut()
}
</script>

<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          Logo
        </a>
      </div>

<!--      <ul class="nav nav-pills">
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2">Features</a></li>
        <li><a href="#" class="nav-link px-2">Pricing</a></li>
        <li><a href="#" class="nav-link px-2">FAQs</a></li>
        <li><a href="#" class="nav-link px-2">About</a></li>
      </ul>-->

      <div v-if="!store.isAuthenticated" class="col-md-3 text-end">
        <router-link to="/login" type="button" class="btn btn-outline-primary me-2">Daxil ol</router-link>
        <a type="button" class="btn btn-primary">Qeydiyyatdan keç</a>
      </div>
      <div v-else class="col-md-3 text-end">
        <button @click="logOut" type="button" class="btn btn-outline-primary me-2">Logout</button>
      </div>
    </header>
  </div>
</template>

<style scoped>

</style>