<script setup>
const props = defineProps({
  user: Object
})
import QR from "@/components/QR.vue";
import moment from 'moment';

let color = 'white'
switch (props.user.status) {
  case 'Accepted':
    color = 'white';
    break;
  case 'Rejected':
    color = 'red';
    break;
  case 'Pending':
    color = 'yellow';
    break;
}
</script>

<template>
  <div class="container p-5 ">
    <div class="d-flex justify-content-center align-items-center">
      <div class="p-5 flex-column justify-content-center align-items-center information-container"  style="">
        <div class="d-flex flex-row justify-content-start" style="margin-bottom: 40px">
          <div class="" style="margin-end: 20px">
            <img src="../assets/images/noimage.jpg" width="128" height="128" alt="">
          </div>
          <div class="">
            <QR :id="user.id" />
          </div>
        </div>

        <div class="row">
          <div class="col">
            <p>ID: {{ user.id }}</p>
            <p>AD: {{ user.firstname }}</p>
            <p>SOYAD: {{user.secondname}}</p>
            <p>ATA ADI: {{ user.fatherName}} </p>
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
            <p :style="{color: color}">STATUS: {{ user.status }}</p>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <h5 class="text-danger" v-if="user.reprimands.length > 0">Töhmətlər</h5>

        </div>
        <div v-for="reprimand in user.reprimands" class="row">
          <hr align="center" color="#dddddd" />
          <div class="text-break">
            <p>TÖHMƏTİN AÇIQLAMASI: {{ reprimand.text }}</p>
          </div>
          <div class="text-break">
            <p>ƏMRİN NÖMRƏSİ: {{ reprimand.code }}</p>
          </div>
          <p>Tarix: {{ moment(reprimand.dateTime.substring(0, 10)).format("DD-MM-YYYY") }}</p>
          <p>Tip: {{ reprimand.type }}</p>
        </div>
      </div>
    </div>
  </div>


</template>

<style scoped>
.information-container {
  background-color: #598216;
  margin: 70px
}
</style>