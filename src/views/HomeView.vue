<script setup>
import Login from "@/components/Login.vue";
import UserInformation from "@/components/UserInformation.vue";
import {UserStore} from "@/stores/UserStore.js";
const store = UserStore()
console.log(store.isAuthenticated)
</script>

<template>
  <div class="d-flex align-items-center justify-content-center" style="height: 100vh">
    <div v-if="!store.isAuthenticated" class="d-flex align-items-center justify-content-center form">
      <div>
        <div class="m-3 d-flex align-items-center justify-content-center">
          <Login />
        </div>
        <div class="mb-3" style="width: 265px">
          <i class="m-2 text-center">
            Əgər email və ya şifrənizi xatırlamırsızsa xaiş olunur baş binaya yaxınlaşarsız və profilinizi yenidən təsdiq edəsiz və ya
            <router-link class="text-white" to="contact">əlaqə</router-link> səhifəsinə daxil olub admin ilə əlaqə saxlayasız.
          </i>
        </div>
      </div>
    </div>
    <div v-else class="container d-flex flex-column align-items-center justify-content-center" style="height: 80vh; width: 80vw">
      <UserInformation :user="store.user" />
    </div>

  </div>
</template>


