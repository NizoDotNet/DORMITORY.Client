<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { UserStore } from "@/stores/UserStore.js";
import { onMounted } from "vue";
import PulseLoader from "vue-spinner/src/BeatLoader.vue";
const store = UserStore();
onMounted(async () => {
  await store.getUser();
});
</script>

<template>
  <div class="main">
    <Navbar></Navbar>
    <div
      v-if="store.isLoading"
      class="loader d-flex justify-content-center align-items-center"
    >
      <PulseLoader class="" />
    </div>
    <div v-else style="background-color: #6b911b">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
