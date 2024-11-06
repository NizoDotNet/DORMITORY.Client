<script setup>
import Login from "@/components/Login.vue";
import UserInformation from "@/components/UserInformation.vue";
import {UserStore} from "@/stores/UserStore.js";
const store = UserStore()
</script>

<template>
  <div class="container">
    <div v-if="!store.isAuthenticated" class="d-flex align-items-center justify-content-center">
      <div>
        <Login />
      </div>
    </div>
    <UserInformation v-else :user="store.user"/>
  </div>
</template>

