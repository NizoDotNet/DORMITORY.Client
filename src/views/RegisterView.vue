<script setup>
import {onMounted, reactive, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const router = useRouter()

const specializations = ref([])
const validations = ref([])
const conflict = ref()
const registerData = reactive({
  email: "",
  password: "",
  fin: "",
  passportNo: "",
  firstname: "",
  secondname: "",
  phoneNumber: "",
  dormitoryBlock: "",
  dormitoryRoom: "",
  fatherName: "",
  specializationId: null,
  course: 0,
  code: ""
})

onMounted(async () => {
  try {
    const res = await axios.get("/api/specialization")
    if(res.status === 200) {
      specializations.value = res.data
    }
  } catch (error) {
    console.log(error)
  }
})

const register = async () => {
  try {
    const res = await axios.post("/api/auth/register", registerData)
    if(res.status === 200) {
      await router.push('/login')
    }
  }
  catch (err) {
    if(err.response.status === 400) {
      validations.value = Object.values(err.response.data.errors)
    } else if(err.response.status === 409) {
      console.log(err)
      conflict.value = err.response.data.message;
    }

  }
}
</script>

<template>
<div class="container">
  <form @submit.prevent="register">
    <div class="row">
      <div class="col">
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input v-model="registerData.email" type="email" class="form-control" placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label class="form-label">Şifrə</label>
          <input v-model="registerData.password" type="password" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">FİN</label>
          <input v-model="registerData.fin" class="form-control" placeholder="7ABC21O">
        </div>
        <div class="mb-3">
          <label class="form-label">Ş/V seriya nömrəsi</label>
          <input v-model="registerData.passportNo" class="form-control" placeholder="AA3456789">
        </div>
        <div class="mb-3">
          <label class="form-label">Ad</label>
          <input v-model="registerData.firstname" class="form-control" placeholder="Nizami">
        </div>
        <div class="mb-3">
          <label class="form-label">Soyad</label>
          <input v-model="registerData.secondname" class="form-control"  placeholder="Mamedov">
        </div>
        <div class="mb-3">
          <label class="form-label">Telefon nömrəsi</label>
          <input v-model="registerData.phoneNumber" class="form-control" placeholder="+994XX-XXX-XXXX">
        </div>
      </div>
      <div class="col">
        <div class="mb-3">
          <label class="form-label">Otaq</label>
          <input v-model="registerData.dormitoryRoom" class="form-control" placeholder="">
        </div>
        <div class="mb-3">
          <label class="form-label" >Blok</label>
          <input v-model="registerData.dormitoryBlock" class="form-control" placeholder="">
        </div>
        <div class="mb-3">
          <label class="form-label">Ata adı</label>
          <input class="form-control" v-model="registerData.fatherName"/>
        </div>
        <div class="mb-3">
          <label class="form-label">İxtisas</label>
          <select v-model="registerData.specializationId" class="form-select">
            <option v-for="spec in specializations" :value="spec.id">{{spec.name}}</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label">Kurs</label>
          <input v-model="registerData.course" class="form-control" placeholder="3">
        </div>
        <div class="mb-3">
          <label class="form-label"></label>
          <input v-model="registerData.code" class="form-control" placeholder="IKT2251">
        </div>
      </div>
    </div>
    <div class="validation">
      <div v-for="validation in validations">
        <span class="text-danger" v-if="validation" v-for="v in validation">
          {{v}}
          <br>
        </span>
        <br>
      </div>
      <div>
        <span class="text-danger">
          {{ conflict }}
        </span>
      </div>
    </div>
    <div class="mb-3">
      <button class="btn btn-primary">Submit</button>
    </div>
  </form>
</div>
</template>

