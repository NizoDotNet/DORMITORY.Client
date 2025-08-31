<script setup>
import UploadComponent from "@/components/UploadComponent.vue";
import { UserStore } from "@/stores/UserStore";
import { onBeforeMount, onMounted } from "vue";
import { useRouter } from "vue-router";
const userStore = UserStore();
const router = useRouter();

onMounted(() => {
  if (!userStore.isAuthenticated) {
    router.push("/login");
  }
});
</script>

<template>
  <div class="container d-flex flex-column align-items-center p-5 gap-4">
    <div class="d-flex flex-column align-items-center gap-1">
      <strong class="text-center">Çek şəkli</strong>
      <img
        :src="`/img/check/${userStore.user.id}?timestamp =${Date.now()}`"
        alt="User image"
        class="img-fluid rounded mb-3"
        style="max-height: 300px; object-fit: contain"
      />
      <UploadComponent
        url="/api/images/check"
        :show="userStore.user.status === 'Accepted'"
      />
    </div>
    <div class="d-flex flex-column align-items-center gap-1 border-top">
      <strong class="text-center">Sağlamlıq kağızı</strong>
      <img
        :src="`/img/check/${userStore.user.id}?timestamp =${Date.now()}`"
        alt="User image"
        class="img-fluid rounded mb-3"
        style="max-height: 300px; object-fit: contain"
      />
      <UploadComponent
        url="/api/images/helth"
        :show="userStore.user.status === 'Accepted'"
      />
    </div>
    <div class="d-flex flex-column align-items-center gap-1 border-top">
      <strong class="text-center"
        >Narkoloji dispanserdə qeydiyyatda olmadığına dair arayış</strong
      >
      <img
        :src="`/img/drug-test/${userStore.user.id}?timestamp =${Date.now()}`"
        alt="User image"
        class="img-fluid rounded mb-3"
        style="max-height: 300px; object-fit: contain"
      />
      <UploadComponent
        url="/api/images/drug-test"
        :show="userStore.user.status === 'Accepted'"
      />
    </div>
  </div>
</template>
