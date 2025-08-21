<script setup>
import moment from "moment";
import { onMounted, ref } from "vue";
import axios from "axios";
const props = defineProps({
  userId: Text,
});
const histories = ref([]);
let pageNumber = 1;
onMounted(async () => {
  try {
    const res = await getHistories(props.userId, pageNumber);
    if (res.status === 200) {
      histories.value = res.data;
    }
  } catch (e) {
    console.log(e);
  }
});

async function getHistories(userId, pageNumber) {
  return await axios.get(`/api/users/${userId}/histories?page=${pageNumber}`);
}
</script>

<template>
  <div class="histories" v-for="history in histories" :key="history.id">
    <hr align="center" color="#dddddd" />
    <p>
      Tarix:
      {{
        history.dateTime.substring(11, 16) +
        " " +
        moment(history.dateTime.substring(0, 10)).format("DD-MM-YYYY")
      }}
    </p>
  </div>
</template>

<style scoped>
p {
  color: white;
}
</style>
