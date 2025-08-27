<script setup>
import { ModalsContainer } from "vue-final-modal";
import ContractModal from "./ContractModal.vue";
import { useModal } from "vue-final-modal";
const { open, close } = useModal({
  component: ContractModal,
  attrs: {
    title: "Hello World!",
    onConfirm() {
      close();
    },
  },
});
</script>
<template>
  <button class="btn btn-primary" @click="open()">Open</button>
  <ModalsContainer />
</template>
