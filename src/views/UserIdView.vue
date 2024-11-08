<script setup>
import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import UserInformation from "@/components/UserInformation.vue";
import axios from "axios";
import {UserStore} from "@/stores/UserStore.js";

const route = useRoute()
const router = useRouter()
const user = ref()
const id = route.params.id
const isLoading = ref(true)
const store = UserStore()
if(store.isAuthenticated === false) {
  router.push('/login')
}
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
  <div class="container d-flex flex-column align-items-center justify-content-center" style="height: 100vh; width: 100vw">
    <UserInformation v-if="!isLoading" :user="user" />
  </div>
</template>

