<script setup>
import {reactive, ref} from "vue";
import axios from "axios";
import {UserStore} from "@/stores/UserStore.js";
import { useRouter } from "vue-router";

const router = useRouter();
const store = UserStore()

const loginData = reactive({
  email: "",
  password: ""
})
const message = ref('')

const login = async () => {
  store.isLoading = true
  try{
    const res = await axios.post("/api/auth/login", {
      "email": loginData.email,
      "password": loginData.password
    })
    if(res.status === 200){
      localStorage.setItem("token",res.data.jwtToken)
      localStorage.setItem("refreshToken",res.data.refreshToken)
      await store.getUser()
      await router.push("/user")
    }
  } catch (ex) {
    if(ex.response.status === 400) {
      message.value = 'Şifrə və ya email səhvdir'
    }
  } finally {
    store.isLoading = false
  }
}

</script>

<template>
  <form @submit.prevent="login" class="mt-3">
    <div class="mb-3">
      <label for="email" class="form-label"></label>
      <input id="email" autocomplete="email" v-model="loginData.email" type="email" class="form-control-lg" placeholder="example@gmail.com" >
    </div>
    <div class="mb-3">
      <label class="form-label"></label>
      <input v-model="loginData.password" type="password" class="form-control-lg" placeholder="şifrə"  >
    </div>
    <div class="mb-3">
      <span class="text-danger">
        {{message}}
      </span>
    </div>
    <div class="mb-3">
      <router-link class="text-white" to="/Register">Qeydiyyat linki</router-link>
    </div>
    <div class="">
      <button class="p-2 btn text-white btn-block" style="width: 265px; background-color: #215702">
        Daxil ol
      </button>
    </div>
  </form>
</template>
