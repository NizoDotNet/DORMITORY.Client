<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import UserInformation from "@/components/UserInformation.vue";
import axios from "axios";

const route = useRoute()
const router = useRouter()
const user = ref()
const id = route.params.id
const isLoading = ref(true)
onMounted(async () => {
  try {
    const res = await axios.get('/api/user/' + id)
    if(res.status === 200) {
      user.value = res.data
      console.log(user.value)
      isLoading.value = false
    }
  } catch (err) {
    console.log(err)
    if(err.response.status === 404) {
      await router.push('/')
    }
    else if(err.response.status === 403) {
      await  router.push('/user')
    }
  }

})
</script>

<template>
<UserInformation v-if="!isLoading" :user="user" />
</template>

