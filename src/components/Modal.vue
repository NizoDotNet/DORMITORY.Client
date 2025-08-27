<script setup>
import { ModalsContainer } from "vue-final-modal";
import ContractModal from "./ContractModal.vue";
import { useModal } from "vue-final-modal";

const emit = defineEmits("confirm");
const { open, close } = useModal({
  component: ContractModal,
  attrs: {
    onClose() {
      close();
    },
    onConfirm() {
      emit("confirm");
      close();
    },
  },
});
</script>
<template>
  <button
    @click="open()"
    class="p-2 btn text-white btn-block"
    style="width: 265px; background-color: #215702"
  >
    Davam et
  </button>
  <ModalsContainer />
</template>
