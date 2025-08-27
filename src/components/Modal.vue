<script setup>
import { ModalsContainer } from "vue-final-modal";
import ContractModal from "./ContractModal.vue";
import { useModal } from "vue-final-modal";

const emit = defineEmits(["confirm"]);
const { open, close } = useModal({
  component: ContractModal,
  attrs: {
    onClose() {
      close();
    },
  },
});
</script>
<template>
  <span @click="open()" class="p-2 text-white text"> Müqaviləni oxudum. </span>
  <ModalsContainer />
</template>

<style scoped>
.text {
  color: white;
  user-select: none;
  cursor: pointer;
}
.text:hover {
  text-decoration: underline;
  text-underline-offset: 2px;
}
</style>
