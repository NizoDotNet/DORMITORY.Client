<script setup>
import {UserStore} from "@/stores/UserStore.js";
const userStore = new UserStore();
const user = userStore.user;
</script>

<template>
<div class="container">
  {{user}}
</div>
</template>

