<script setup>
import {UserStore} from "@/stores/UserStore.js";
import UserInformation from "@/components/UserInformation.vue";
import {useRouter} from "vue-router";
const store = UserStore();
const router = useRouter();
if(store.isAuthenticated === false) {
  router.push('/login')
}
</script>

<template>
<div class="container d-flex flex-column align-items-center justify-content-center" style="height: 80vh; width: 80vw">
  <UserInformation :user="store.user"/>
</div>
</template>

