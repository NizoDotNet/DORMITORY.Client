<script setup>
import UserInformation from "@/components/UserInformation.vue";
import {UserStore} from "@/stores/UserStore.js";
import LoginFormComponent from "@/components/LoginFormComponent.vue";
const store = UserStore()
console.log(store.isAuthenticated)
</script>

<template>
  <div class="p-5">
    <div v-if="!store.isAuthenticated" class="">
      <div class="row">
        <div class="col-md-6 order-md-2">
          <img src="../assets/images/HOMEQR.svg" alt="" width="500px" class="imaga-fluid">
        </div>
        <div class="col-md-6">
          <div class="d-flex align-items-center justify-content-center">
            <LoginFormComponent />
          </div>
        </div>
      </div>
    </div>
    <div v-else >
      <UserInformation :user="store.user" />
    </div>
  </div>
</template>


