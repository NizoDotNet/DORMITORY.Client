<script setup>
import { VueFinalModal } from "vue-final-modal";
import Contract from "@/components/Contract.vue";

defineEmits(["close", "confirm"]);
</script>

<template>
  <VueFinalModal
    style="height: 100vh"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="confirm-modal" style="height: 100vh">
      <Contract />
      <a href="/telebe_evi_muqavile.pdf" target="_blank">Müqaviləni yüklə</a>
      <div class="d-flex flex-col gap-1">
        <button @click="$emit('close')" class="btn btn-danger">Bağla</button>
        <button @click="$emit('confirm')" class="btn btn-primary">
          Təsdiq edirəm
        </button>
      </div>
    </div>
  </VueFinalModal>
</template>
<style scoped>
.confirm-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  background-color: white;
  gap: 10px;
  overflow: auto;
  max-height: 80vh;
  padding: 10px;
  margin: 10px;
}
.confirm-modal-content {
  overflow: auto;
  max-height: 60vh;
}
</style>
