<script setup>
import moment from "moment";
defineProps({
  reprimands: Array
})
</script>

<template>
  <div v-for="reprimand in reprimands" class="row">
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
</template>

<style scoped>

</style>