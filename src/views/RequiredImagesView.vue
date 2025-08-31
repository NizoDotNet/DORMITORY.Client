<script setup>
import UploadComponent from "@/components/UploadComponent.vue";
import { UserStore } from "@/stores/UserStore";
import { onBeforeMount } from "vue";
import { useRouter } from "vue-router";
const userStore = UserStore();
const router = useRouter();

onBeforeMount(() => {
  if (!userStore.isAuthenticated) {
    // router.push("/login");
  }
});
</script>

<template>
  <div class="container d-flex flex-column align-items-center p-5 gap-4">
    <div class="d-flex flex-column align-items-center gap-1">
      <strong class="text-center">Çek şəkli</strong>
      <UploadComponent
        url="/api/images/check"
        :show="userStore.user.status === 'Accepted'"
      />
    </div>
    <div class="d-flex flex-column align-items-center gap-1 border-top">
      <strong class="text-center">Sağlamlıq kağızı</strong>
      <UploadComponent
        url="/api/images/helth"
        :show="userStore.user.status === 'Accepted'"
      />
    </div>
    <div class="d-flex flex-column align-items-center gap-1 border-top">
      <strong class="text-center"
        >Narkoloji dispanserdə qeydiyyatda olmadığına dair arayış</strong
      >
      <UploadComponent
        url="/api/images/drug-test"
        :show="userStore.user.status === 'Accepted'"
      />
    </div>
  </div>
</template>
