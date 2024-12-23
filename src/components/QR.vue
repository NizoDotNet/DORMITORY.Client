<script>
import { QrcodeSvg } from 'qrcode.vue'

export default {
  data() {
    return {
      url: window.location.origin
    }
  },
  components: {
    QrcodeSvg,
  },
  props: {
    id: String
  }
}
</script>
<template>
  <qrcode-svg :value="`${url}/users/qr/${id}`" level="M" :size="128" />
</template>

