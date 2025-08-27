<script setup>
import { VueFinalModal } from "vue-final-modal";
import Contract from "./Contract.vue";
</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <Contract />
  </VueFinalModal>
</template>
