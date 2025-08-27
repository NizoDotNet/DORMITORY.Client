<script setup>
import { VueFinalModal } from "vue-final-modal";
import Contract from "@/components/Contract.vue";
</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <Contract />
    <a href="/telebe_evi_muqavile.pdf" target="_blank">Müqaviləni yüklə</a>
    <button class="btn btn-primary">Təsdiq edirəm</button>
  </VueFinalModal>
</template>
<style scoped>
.confirm-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  overflow: auto;
  max-height: 60vh;
  padding: 4px;
}
.confirm-modal-content {
  overflow: auto;
  max-height: 60vh;
}
</style>
