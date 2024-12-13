<script setup>
import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

let pageNumber = 1
const search = ref(null)
const users = ref([])
const router = useRouter()

const getUsers = async () => {
  try {
    const res = await axios
        .get(`/api/users?pageNumber=${pageNumber}&name=${search.value === null ? "" : search.value}`)
    if(res.status === 200) {
      users.value = res.data
    }
  } catch (ex) {
    if(ex.response.status === 403) {
      await router.push("/")
    }

  }
}

const prevPage = async () => {
  pageNumber--
  if(pageNumber >= 1){
    await getUsers()
  }
  else {
    alert("Siz artıq ən birinci səhifədəsiz")
  }

}
const nextPage = async () => {
  pageNumber++
  await getUsers()
}

getUsers()

</script>

<template>
  <div class="container p-3">
    <div class="m-2">
      <input v-model="search" class="me-2">
      <button @click="getUsers" class="btn btn-light">Axtar</button>
    </div>
    <table class="table">
      <thead>
        <tr>
          <td>Ad</td>
          <td>Soyad</td>
          <td>FIN</td>
          <td>Blok</td>
          <td>Otaq</td>
        </tr>
      </thead>
      <tbody v-if="users.length > 0">
        <tr v-for="user in users" :key="user.id">
          <td><router-link :to="{ name: 'User', params: { id: user.id }}">
            {{ user.firstname }}
          </router-link></td>
          <td>{{ user.secondname }}</td>
          <td>
            {{ user.fin }}
          </td>
          <td>{{ user.block }}</td>
          <td>{{ user.room }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="d-flex justify-content-center" style="margin-bottom: 100px">
    <button @click="prevPage()" class="btn btn-light text-dark">Prev</button>
    <button @click="nextPage()" class="btn btn-light text-dark">Next</button>
  </div>
</template>

<style scoped>

</style>