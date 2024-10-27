<script setup>
import Navbar from './components/Navbar.vue'
import {UserStore} from "@/stores/UserStore.js";
const store = UserStore()
import {onMounted} from "vue";
console.log(store.user)
onMounted(async () => {
  await store.getUser()
})
</script>

<template>
    <Navbar></Navbar>
    <router-view></router-view>
</template>

