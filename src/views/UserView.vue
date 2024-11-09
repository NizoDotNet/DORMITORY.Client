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
<div class="container p-5" >
  <UserInformation :user="store.user"/>
</div>
</template>

