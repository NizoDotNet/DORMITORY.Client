<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import { UserStore } from "@/stores/UserStore.js";
import { useRouter } from "vue-router";
import BeatLoader from "vue-spinner/src/BeatLoader.vue";
const router = useRouter();
const store = UserStore();

const loginData = reactive({
  fin: "",
  password: "",
});
const isLoading = ref(false);
const message = ref("");

const login = async () => {
  isLoading.value = true;
  try {
    const res = await axios.post("/api/auth/login", loginData);
    if (res.status === 200) {
      await store.getUser();
      await router.push("/user");
    }
  } catch (ex) {
    if (ex.response.status === 400) {
      message.value = "Şifrə və ya FİN səhvdir";
    }
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <form @submit.prevent="login" class="mt-3">
    <div class="mb-3">
      <label for="email" class="form-label"></label>
      <input
          id="fin"
          autocomplete="fin"
          v-model="loginData.fin"
          class="form-control-lg"
          placeholder="FİN"
      />
    </div>
    <div class="mb-3">
      <label class="form-label"></label>
      <input
          v-model="loginData.password"
          type="password"
          class="form-control-lg"
          placeholder="Şifrə"
      />
    </div>
    <div class="mb-3">
      <span class="text-danger">
        {{ message }}
      </span>
    </div>
    <div class="mb-3">
      <router-link class="text-white" to="/Register"
      >Qeydiyyat linki</router-link
      >
    </div>
    <div class="">
      <BeatLoader v-if="isLoading"/>
      <button
          v-else
          class="p-2 btn text-white btn-block"
          style="width: 265px; background-color: #215702"
      >
        Daxil ol
      </button>
    </div>
  </form>
</template>
