<script setup>
import {reactive} from "vue";
import axios from "axios";
import {UserStore} from "@/stores/UserStore.js";
import { useRouter } from "vue-router";

const router = useRouter();
const loginData = reactive({
  email: "",
  password: ""
})

const store = UserStore()
const login = async () => {
  try{
    const res = await axios.post("/api/auth/login", {
      "email": loginData.email,
      "password": loginData.password
    })
    if(res.status === 200){
      localStorage.setItem("token",res.data.jwtToken)
      localStorage.setItem("refreshToken",res.data.refreshToken)
      await store.getUser()
      router.push("/user")
    }
  } catch (ex) {
    console.log(ex)
  }
}

</script>

<template>
  <div class="container d-flex justify-content-center align-items-center">
    <form @submit.prevent="login">
      <div class="mb-3">
        <label class="form-label"></label>
        <input autocomplete="email" v-model="loginData.email" type="email" class="form-control-lg" placeholder="example@gmail.com"  >
      </div>
      <div class="mb-3">
        <label class="form-label"></label>
        <input v-model="loginData.password" type="password" class="form-control-lg" placeholder="şifrə"  >
      </div>
      <button class="btn btn-primary">
        Daxil ol
      </button>
    </form>
  </div>
</template>
