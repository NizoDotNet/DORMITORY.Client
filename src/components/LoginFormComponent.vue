<script setup>
import LoginWithFin from "@/components/LoginWithFin.vue";
</script>

<template>
  <div
    class="d-flex justify-content-center align-items-center flex-column"
    style="width: 300px; margin-bottom: 20px"
  >
    <div class="m-3 d-flex align-items-center justify-content-center form">
      <LoginWithFin />
    </div>
    <div class="mb-3 d-flex justify-content-center">
      <i class="m-2 text-center">
        Əgər e-poçtunuzu və ya şifrənizi xatırlamırsınızsa, zəhmət olmasa baş
        binaya yaxınlaşaraq profilinizi yenidən təsdiqləyin. Alternativ olaraq,
        <router-link class="text-white" to="contact">əlaqə</router-link>
        səhifəsinə daxil olaraq administrator ilə əlaqə saxlaya bilərsiniz
      </i>
    </div>
  </div>
</template>
