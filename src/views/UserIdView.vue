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
const message = ref(false)
const success = ref(false)
if(!store.isAuthenticated) {
  router.push('/login')
}
onMounted(async () => {
  try {
    const res = await axios.get('/api/users/' + id)
    if(res.status === 200) {
      user.value = res.data
      isLoading.value = false
      success.value = true
    }
  } catch (err) {
    console.log(err)
    if(err.response.status === 404) {
      isLoading.value = false
      message.value = `${id} İD - li tələbə tapılmadı`
    }
    else if(err.response.status === 403) {
      await router.push('/user')
    }
  }

})
</script>

<template>
  <div class="p-5">
    <UserInformation v-if="!isLoading && success" :user="user" />
  </div>
  <div v-if="!success" class="d-flex justify-content-center align-items-center"  style="">
    <h3 class="text-danger" >
      {{ message }}
    </h3>
  </div>
</template>

