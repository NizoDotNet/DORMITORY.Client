<script setup>
import QR from "@/components/QR.vue";
import ReprimandComponent from "@/components/ReprimandComponent.vue";
import UploadImageComponent from "@/components/UploadImageComponent.vue";
import { ref } from "vue";
import HistoryComponent from "@/components/HistoryComponent.vue";
import UploadPassportComponent from "./UploadPassportComponent.vue";

const props = defineProps({
  user: Object,
});

const showHistory = ref(true);

let color = "text-white";
switch (props.user.status) {
  case "Accepted":
    color = "text-white";
    break;
  case "Pending":
    color = "text-warning";
    break;
  default:
    color = "text-danger";
    break;
}
</script>

<template>
  <div class="container py-5">
    <div class="d-flex justify-content-center">
      <div
        class="card shadow-lg w-100"
        style="max-width: 900px; background-color: #598216"
      >
        <div class="card-body p-4">
          <!-- <div v-if="user.status === 'Pending'" class="mb-4 d-flex gap-2">
            <router-link to="/user/update" class="btn btn-light"
              >Düzənləmə</router-link
            >
          </div> -->

          <div class="row mb-5">
            <div class="col-md-6 text-center mb-4 mb-md-0">
              <strong class="mb-1 text-white">İstifadəçi şəkli</strong>
              <img
                :src="user.imageUrl"
                alt="User image"
                class="img-fluid rounded mb-3"
                style="max-height: 300px; object-fit: contain"
              />
              <UploadImageComponent :user="user" />
            </div>
            <div class="col-md-6 text-center mb-4 mb-md-0">
              <strong class="mb-1">Şəxsiyyət Vəsiqəsinin şəkli</strong>
              <img
                :src="`/img/passport/${user.id}`"
                alt="User image"
                class="img-fluid rounded mb-3"
                style="max-height: 300px; object-fit: contain"
              />
              <UploadPassportComponent
                v-if="user.status === 'Pending'"
                :user="user"
              />
            </div>
            <div
              class="col-md-6 d-flex align-items-center justify-content-center"
            >
              <QR :id="user.id" />
            </div>
          </div>

          <div class="row text-white">
            <div class="col-md-6 mb-4">
              <p><strong>AD:</strong> {{ user.firstname }}</p>
              <p><strong>SOYAD:</strong> {{ user.secondname }}</p>
              <p><strong>ATA ADI:</strong> {{ user.fatherName }}</p>
              <p><strong>ŞƏHƏR/RAYON:</strong> {{ user.region }}</p>
              <p><strong>Ş/V FİN:</strong> {{ user.fin }}</p>
              <p><strong>Ş/V S/N:</strong> {{ user.passportNo }}</p>
              <p><strong>Email:</strong> {{ user.email }}</p>
              <p><strong>Əlaqə N:</strong> {{ user.phoneNumber }}</p>
            </div>
            <div class="col-md-6">
              <template v-if="user.specialization === null">
                <p><strong>FAKÜLTƏ:</strong> Yoxdur</p>
                <p><strong>İXTİSAS:</strong> Yoxdur</p>
              </template>
              <template v-else>
                <p>
                  <strong>FAKÜLTƏ:</strong>
                  {{ user.specialization.faculty.name }}
                </p>
                <p><strong>İXTİSAS:</strong> {{ user.specialization.name }}</p>
              </template>
              <p><strong>KURS:</strong> {{ user.course }}</p>
              <p><strong>KOD:</strong> {{ user.code }}</p>
              <p><strong>BLOK:</strong> {{ user.block }}</p>
              <p><strong>OTAQ:</strong> {{ user.room }}</p>
              <p :class="color"><strong>STATUS:</strong> {{ user.status }}</p>
            </div>
          </div>

          <div class="d-flex justify-content-center mt-4">
            <button
              @click="showHistory = !showHistory"
              class="btn btn-outline-light"
            >
              <span v-if="showHistory">Tarixçə</span>
              <span v-else class="text-danger">Töhmətlər</span>
            </button>
          </div>

          <div class="mt-3">
            <HistoryComponent v-if="showHistory" :user-id="user.id" />
            <ReprimandComponent v-else :reprimands="user.reprimands" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 650px) {
  img {
    max-height: 128px !important;
  }
}
</style>
