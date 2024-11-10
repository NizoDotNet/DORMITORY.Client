<script setup>
import UserInformation from "@/components/UserInformation.vue";
import {UserStore} from "@/stores/UserStore.js";
import LoginFormComponent from "@/components/LoginFormComponent.vue";
const store = UserStore()
console.log(store.isAuthenticated)
</script>

<template>
  <div class="p-5">
    <div v-if="!store.isAuthenticated" class="d-flex align-items-center justify-content-center">
      <LoginFormComponent />
    </div>
    <div v-else >
      <UserInformation :user="store.user" />
    </div>

  </div>
</template>


