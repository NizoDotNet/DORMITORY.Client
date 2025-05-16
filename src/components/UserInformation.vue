<script setup>
import QR from "@/components/QR.vue";
import ReprimandComponent from "@/components/ReprimandComponent.vue";
import UploadImageComponent from "@/components/UploadImageComponent.vue";
import { ref } from "vue";
import HistoryComponent from "@/components/HistoryComponent.vue";

const props = defineProps({
  user: Object,
});

const showHistory = ref(true);

let color = "white";
switch (props.user.status) {
  case "Accepted":
    color = "white";
    break;
  case "Pending":
    color = "yellow";
    break;
  default:
    color = "red";
    break;
}
</script>

<template>
  <div class="container p-5">
    <div class="d-flex justify-content-center align-items-center">
      <div
        class="p-5 flex-column justify-content-center align-items-center information-container"
        style=""
      >
        <div
          v-if="user.status === 'Pending'"
          class="mb-3 d-flex justify-content-start"
        >
          <router-link to="/user/update" class="btn btn-light"
            >Düzənləmə</router-link
          >
        </div>
        <div
          class="d-flex flex-row justify-content-start"
          style="margin-bottom: 40px"
        >
          <div class="" style="margin-end: 20px">
            <div class="image">
              <img
                class="image"
                :src="`http://localhost:5000/api/images/${user.id}`"
                alt=""
              />
            </div>
            <UploadImageComponent :user="user" />
          </div>
          <div class="">
            <QR :id="user.id" />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <p>AD: {{ user.firstname }}</p>
            <p>SOYAD: {{ user.secondname }}</p>
            <p>ATA ADI: {{ user.fatherName }}</p>
            <p>ŞƏXSİYYƏT VƏSİQƏSİNİN F/K: {{ user.fin }}</p>
            <p>ŞƏXSİYYƏT VƏSİQƏSİNİN S/N: {{ user.passportNo }}</p>
            <p>Email: {{ user.email }}</p>
            <p>ƏLAQƏ N.: {{ user.phoneNumber }}</p>
          </div>
          <div class="col">
            <div v-if="user.specialization === null">
              <p>FAKÜLTƏ: Yoxdur</p>
              <p>İXTİSAS: Yoxdur</p>
            </div>
            <div v-else>
              <p>FAKÜLTƏ: {{ user.specialization.faculty.name }}</p>
              <p>İXTİSAS: {{ user.specialization.name }}</p>
            </div>
            <p>KURS: {{ user.course }}</p>
            <p>KOD: {{ user.code }}</p>
            <p>BLOK: {{ user.block }}</p>
            <p>OTAQ: {{ user.room }}</p>
            <p :style="{ color: color }">STATUS: {{ user.status }}</p>
          </div>
        </div>
        <div class="d-flex justify-content-center mb-2">
          <button @click="showHistory = !showHistory" class="btn btn-light">
            <span v-if="showHistory">Tarixçə</span>
            <span v-else class="text-danger">Töhmətlər</span>
          </button>
        </div>
        <HistoryComponent v-if="showHistory" :user-id="user.id" />
        <ReprimandComponent v-else :reprimands="user.reprimands" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.information-container {
  background-color: #598216;
  margin: 70px;
}
.image {
  width: 300px;
  height: 300px;
}
img {
  object-fit: contain;
}

@media (max-width: 650px) {
  .image {
    width: 128px;
    height: 128px;
  }
}
</style>
