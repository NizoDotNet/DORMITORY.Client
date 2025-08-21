<script setup>
import moment from "moment";
defineProps({
  reprimands: Array,
});
</script>

<template>
  <!--  <div class="d-flex justify-content-center">
    <h5 class="text-danger" v-if="reprimands.length > 0">Töhmətlər</h5>
  </div>-->
  <div v-for="reprimand in reprimands" :key="reprimand.id" class="row">
    <hr align="center" color="#dddddd" />
    <div class="text-break">
      <p>TÖHMƏTİN AÇIQLAMASI: {{ reprimand.text }}</p>
    </div>
    <div class="text-break">
      <p>ƏMRİN NÖMRƏSİ: {{ reprimand.code }}</p>
    </div>
    <p>
      Tarix:
      {{ moment(reprimand.dateTime.substring(0, 10)).format("DD-MM-YYYY") }}
    </p>
    <p>Tip: {{ reprimand.type }}</p>
  </div>
</template>

<style scoped></style>
