<script setup>
import Navbar from './components/Navbar.vue'
import {UserStore} from "@/stores/UserStore.js";
import {onMounted} from "vue";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
const store = UserStore()
onMounted(async () => {
  await store.getUser()
})
</script>

<template>
  <Navbar></Navbar>
  <PulseLoader v-if="store.isLoading"/>
  <router-view v-else></router-view>
</template>

