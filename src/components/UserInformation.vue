<script setup>
const props = defineProps({
  user: Object
})
import QR from "@/components/QR.vue";
</script>

<template>
<div class="row justify-content-center">
  <div class="col-4">
    <img src="../assets/images/noimage.jpg" width="128" height="128" alt="">
  </div>
  <div class="col-4">
    <QR :id="user.id" />
  </div>
</div>
<div class="row justify-content-center">
  <div class="col-4">
    <p>ID: {{ user.id }}</p>
    <p>AD: {{ user.firstname }}</p>
    <p>SOYAD: {{user.secondname}}</p>
    <p>ATA ADI: {{ user.fatherName}} </p>
    <p>ŞƏXSİYYƏT VƏSİQƏSİNİN F/K: {{ user.fin }}</p>
    <p>ŞƏXSİYYƏT VƏSİQƏSİNİN S/N: {{ user.passportNo }}</p>
    <p>Email: {{ user.email }}</p>
    <p>ƏLAQƏ N.: {{ user.phoneNumber }}</p>
  </div>
  <div class="col-4">
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
  </div>
</div>
<div v-for="reprimand in user.reprimands" class="row">
  <hr align="center" color="#dddddd" />
  <p>TÖHMƏTİN AÇIQLAMASI: {{ reprimand.text }}</p>
  <p>ƏMRİN NÖMRƏSİ: {{ reprimand.code }}</p>
  <p>Tarix: {{ reprimand.dateTime }}</p>
  <p>Tip: {{ reprimand.type }}</p>
</div>
</template>

