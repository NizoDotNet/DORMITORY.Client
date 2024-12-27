<script setup>
import axios from "axios";
import {ref} from "vue";
import {UserStore} from "@/stores/UserStore.js";

defineProps({
  user: Object
})
const userStore = UserStore()
const file = ref(null)

const uploadImage = async () => {
  try {
    const formData = new FormData();
    formData.append('uploadFile', file.value);
    const res = await axios.post("/api/images", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    if(res.status === 200) {
      window.location.reload()
    }
  } catch (er) {
    if(er.response.status === 400) {
      if(Object.hasOwn(er.response.data, "Length")) {
        alert(er.response.data.Length[0])
      }
      if(Object.hasOwn(er.response.data, "ContentType")) {
        alert(er.response.data.ContentTypeg[0])
      }
    }
  }
}

const onFileChanged = ($event) => {
  const target = $event.target;
  if (target && target.files) {
    file.value = target.files[0];
  }
}
</script>

<template>
  <div v-if="userStore.user.id === user.id">
    <input
        ref="fileInput"
        @change="onFileChanged($event)"
        class="form-control form-control-sm mt-2"
        type="file"
        accept=".png,.jpg,.jpeg"
    />
    <button @click="uploadImage" class="btn btn-light mt-2">Yüklə</button>
  </div>
</template>

<style scoped>

</style>