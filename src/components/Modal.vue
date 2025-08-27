<script setup>
import { ModalsContainer } from "vue-final-modal";
const { open, close } = useModal({
  component: ModalConfirmPlainCss,
  attrs: {
    title: "Hello World!",
    onConfirm() {
      close();
    },
  },
});
</script>
<template>
  <ModalsContainer />
</template>
