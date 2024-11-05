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
<UserInformation :user="store.user"/>
</template>

