<script setup>
import {onMounted, reactive, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const router = useRouter()
const specializations = ref([])
const blocks = ref([])
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
  blockId: 1,
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

      // await router.push('/server-error')
  }
  try {
    const block = await axios.get('/api/block')
    if(block.status === 200) {
      blocks.value = block.data
    }
  } catch (error) {
    console.log(error)
    // await router.push('/server-error')
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
      validations.value = err.response.data.errors
    } else if(err.response.status === 409) {
      console.log(err)
      conflict.value = err.response.data.message;
    }

  } finally {
  }

}
</script>

<template>
<div class="d-flex align-items-center justify-content-center" style="height: 100vh">
  <div class="form p-2 d-inline-flex justify-content-center align-items-center">
    <form @submit.prevent="register">
      <div class="row">
        <div class="col">
          <div class="mb1">
            <label for="email" class="form-label">Email</label>
            <input id="email" v-model="registerData.email" type="email" class="form-control" placeholder="name@example.com">
            <span v-if="validations.email" class="text-danger">{{ validations.email[0] }}</span>
          </div>
          <div class="mb-1">
            <label class="form-label">Şifrə</label>
            <input v-model="registerData.password" type="password" class="form-control">
            <span v-if="validations.password" class="text-danger">{{ validations.password[0] }}</span>
          </div>
          <div class="mb-1">
            <label class="form-label">FİN</label>
            <input v-model="registerData.fin" class="form-control" placeholder="7ABC21O">
            <span v-if="validations.fin" class="text-danger">{{ validations.fin[0] }}</span>
          </div>
          <div class="mb-1">
            <label class="form-label">Ş/V seriya nömrəsi</label>
            <input v-model="registerData.passportNo" class="form-control" placeholder="AA3456789">
            <span v-if="validations.passportNo" class="text-danger">{{ validations.passportNo[0] }}</span>
          </div>
          <div class="mb-1">
            <label class="form-label">Ad</label>
            <input v-model="registerData.firstname" class="form-control" placeholder="Nizami">
            <span v-if="validations.firstNameMoreThan" class="text-danger">{{ validations.firstNameMoreThan[0] }}</span>
            <span v-if="validations.firstNameLessThan" class="text-danger">{{ validations.firstNameLessThan[0] }}</span>
          </div>
          <div class="mb-1">
            <label class="form-label">Soyad</label>
            <input v-model="registerData.secondname" class="form-control"  placeholder="Mamedov">
            <span v-if="validations.secondNameMoreThan" class="text-danger">{{ validations.secondNameMoreThan[0] }}</span>
          </div>
          <div class="mb-1">
            <label class="form-label">Telefon nömrəsi</label>
            <input v-model="registerData.phoneNumber" class="form-control" placeholder="+994XX-XXX-XXXX">
          </div>
        </div>
        <div class="col">
          <div class="mb-1">
            <label class="form-label">Otaq</label>
            <input v-model="registerData.dormitoryRoom" class="form-control" placeholder="">
          </div>
          <div class="mb-1">
            <label class="form-label" >Blok</label>
            <select v-model="registerData.blockId" class="form-select">
              <option v-for="block in blocks" :value="block.id">{{block.name}}</option>
            </select>
          </div>
          <div class="mb-1">
            <label class="form-label">Ata adı</label>
            <input class="form-control" v-model="registerData.fatherName"/>
            <span v-if="validations.fatherNameMoreThan" class="text-danger">{{ validations.fatherNameMoreThan[0] }}</span>
            <span v-if="validations.fatherNameLessThan" class="text-danger">{{ validations.fatherNameLessThan[0] }}</span>
          </div>
          <div class="mb-1">
            <label class="form-label">İxtisas</label>
            <select v-model="registerData.specializationId" class="form-select">
              <option v-for="spec in specializations" :value="spec.id">{{spec.name}}</option>
            </select>
          </div>
          <div class="mb-1">
            <label class="form-label">Kurs</label>
            <input v-model="registerData.course" class="form-control" placeholder="3">
            <span v-if="validations.coursegreaterthan" class="text-danger">{{ validations.coursegreaterthan[0] }}</span>
            <span v-if="validations.courselessthan" class="text-danger">{{ validations.courselessthan[0] }}</span>

          </div>
          <div class="mb-1">
            <label class="form-label">Kod</label>
            <input v-model="registerData.code" class="form-control " placeholder="IKT2251">
            <span v-if="validations.code" class="text-danger">{{ validations.code[0] }}</span>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end mb-1">
        <button class="p-2 btn text-white btn-block" style="width: 265px; background-color: #215702">
          Dəvam et
        </button>
      </div>
    </form>
  </div>
</div>
</template>

