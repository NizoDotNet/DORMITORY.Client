<script setup>
import {reactive} from "vue";
import axios from "axios";

const loginData = reactive({
  email: "",
  password: ""
})

const login = async () => {
  try{
    const res = await fetch("https://localhost:7106/login", {
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password
      }),
      method: "POST"
    })
    const resposneData = await res.json()
    console.log(resposneData)

  } catch (ex) {
    console.log(ex)
  }
  console.log(loginData)
}

</script>

<template>
  <div class="container d-flex justify-content-center align-items-center">
    <form @submit.prevent="login">
      <div class="mb-3">
        <label class="form-label"></label>
        <input v-model="loginData.email" type="email" class="form-control-lg" placeholder="example@gmail.com"  >
      </div>
      <div class="mb-3">
        <label class="form-label"></label>
        <input v-model="loginData.password" type="password" class="form-control-lg" placeholder=""  >
      </div>
      <button class="btn btn-primary">
        Daxil ol
      </button>
    </form>
  </div>
</template>
