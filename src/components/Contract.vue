<script setup>
import { VuePDF, usePDF } from "@tato30/vue-pdf";

const { pdf, pages } = usePDF("telebe_evi_muqavile.pdf");
</script>

<template>
  <div class="overflow-auto p-6">
    <VuePDF
      v-for="page in pages"
      :key="page"
      :pdf="pdf"
      :page="page"
      :scale="0.6"
    />
  </div>
</template>
