<script setup>
import Login from "@/components/Login.vue";
import UserInformation from "@/components/UserInformation.vue";
import {UserStore} from "@/stores/UserStore.js";
const store = UserStore()
console.log(store.isAuthenticated)
</script>

<template>
  <div class="p-5">
    <div v-if="!store.isAuthenticated" class="d-flex align-items-center justify-content-center">
      <div class="d-flex justify-content-center align-items-center flex-column" style="width: 300px">
        <div class="m-3 d-flex align-items-center justify-content-center form">
          <Login />
        </div>
        <div class="mb-3 d-flex justify-content-center">
          <i class="m-2 text-center">
            Əgər email və ya şifrənizi xatırlamırsızsa xaiş olunur baş binaya yaxınlaşarsız və profilinizi yenidən təsdiq edəsiz və ya
            <router-link class="text-white" to="contact">əlaqə</router-link> səhifəsinə daxil olub admin ilə əlaqə saxlayasız.
          </i>
        </div>
      </div>
    </div>
    <div v-else >
      <UserInformation :user="store.user" />
    </div>

  </div>
</template>


