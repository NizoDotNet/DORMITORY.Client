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
      :class="[store.isLoading ? 'd-flex' : 'd-none']"
      class="loader justify-content-center align-items-center"
    >
      <PulseLoader class="" />
    </div>
    <div
      :class="[!store.isLoading ? '' : 'd-none']"
      style="background-color: #6b911b"
    >
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
