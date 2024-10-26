<script setup>
import {UserStore} from "@/stores/UserStore.js";
const store = UserStore();
</script>

<template>
<div class="container">
  <div v-if="store.isAuthenticated" class="user-information">
    <p>{{store.user.firstname + " " + store.user.secondname}}</p>
  </div>
  <div v-else>
    <router-link to="/login">Login</router-link>
  </div>
</div>
</template>

