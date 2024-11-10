<script setup>
import Login from "@/components/Login.vue";
</script>

<template>
  <div class="d-flex justify-content-center align-items-center flex-column" style="width: 300px">
    <div class="m-3 d-flex align-items-center justify-content-center form">
      <Login />
    </div>
    <div class="mb-3 d-flex justify-content-center">
      <i class="m-2 text-center">
        Əgər email və ya şifrənizi xatırlamırsızsa xaiş olunur baş binaya yaxınlaşarsız və profilinizi yenidən təsdiq edəsiz və ya
        <router-link class="text-white" to="contact">əlaqə</router-link> səhifəsinə daxil olub admin ilə əlaqə saxlayasız.
      </i>
    </div>
  </div>
</template>

