<script setup>
import {UserStore} from "@/stores/UserStore.js";
import UserInformation from "@/components/UserInformation.vue";
const store = UserStore();

</script>

<template>
<UserInformation :user="store.user"/>
</template>

