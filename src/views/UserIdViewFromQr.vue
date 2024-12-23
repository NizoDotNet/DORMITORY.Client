<script setup>
import {useRoute, useRouter} from "vue-router";
import axios from "axios";
import {onMounted, ref} from "vue";
import UserInformation from "@/components/UserInformation.vue";

const route = useRoute()
const router = useRouter()
const userId = route.params.id
const user = ref(null)

onMounted(async () => {
  try {
    const res = await axios.get('/api/users/qr/' + userId)
    if(res.status === 200) {
      user.value = res.data
    }
  } catch (err) {
    await router.push('/user')
  }

})
</script>

<template>
  <UserInformation v-if="user !== null" :user="user" />
</template>

<style scoped>

</style>