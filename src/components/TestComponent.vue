<script setup>
import { ref } from "vue";
const v = ref(false)
</script>

<template>
  <div class="container">
    <div v-if="v === true">
      Salam
    </div>
    <button class="btn btn-primary" @click="v = !v">Basma</button>
  </div>

</template>

<style scoped>

</style>