<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { UserStore } from "@/stores/UserStore.js";

const router = useRouter();
const userStore = UserStore();

const specializations = ref([]);
const blocks = ref([]);
const validations = ref([]);
const userData = ref({
  email: "",
  fin: "",
  passportNo: "",
  firstname: "",
  secondname: "",
  phoneNumber: "",
  fatherName: "",
  specializationId: null,
  course: 0,
  code: "",
});
const confirmPassword = ref("");

onMounted(async () => {
  try {
    const user = userStore.user;
    userData.value = { ...user };
    userData.value.specializationId = user.specialization.id;
    console.log(userData.value);
  } catch (error) {
    console.log(error);
    await router.push("/server-error");
  }
  try {
    const res = await axios.get("/api/specialization");
    if (res.status === 200) {
      specializations.value = res.data;
    }
  } catch (error) {
    console.log(error);
    await router.push("/server-error");
  }
});
const updateUser = async () => {
  console.log(userData.value.id);
  try {
    const userUpdate = await axios.put(
      `/api/users/${userData.value.id}`,
      userData.value
    );
    if (userUpdate.status === 201) {
      await router.push("/user");
      window.location.reload();
    }
  } catch (err) {
    if (err.response.status === 400) {
      validations.value = err.response.data.errors;
    } else if (err.response.status === 409) {
      console.log(err);
      conflict.value = err.response.data.message;
    } else if (err.response.status === 403) {
      await router.push("/");
    } else {
      console.log(err);
    }
  }
};
</script>

<template>
  <div
    class="d-flex align-items-center justify-content-center"
    style="margin: 10px"
  >
    <div
      class="form p-2 d-inline-flex justify-content-center align-items-center"
      style="margin-bottom: 100px"
    >
      <form @submit.prevent="updateUser">
        <div class="row">
          <div class="col" style="width: 357.484px">
            <div class="m-3">
              <label for="email" class="form-label">Email</label>
              <input
                id="email"
                v-model="userData.email"
                type="email"
                class="form-control"
                placeholder="name@example.com"
              />
              <span v-if="validations.email" class="text-danger">{{
                validations.email[0]
              }}</span>
              <span v-if="validations.DuplicateUserName" class="text-danger"
                >Bu e-mail istifadə olunub</span
              >
            </div>
            <div class="m-3">
              <label class="form-label">FİN</label>
              <input
                v-model="userData.fin"
                class="form-control"
                placeholder="7ABC21O"
              />
              <span v-if="validations.fin" class="text-danger">{{
                validations.fin[0]
              }}</span>
            </div>
            <div class="m-3">
              <label class="form-label">Ş/V seriya nömrəsi</label>
              <input
                v-model="userData.passportNo"
                class="form-control"
                placeholder="AA3456789"
              />
              <span v-if="validations.passportNo" class="text-danger">{{
                validations.passportNo[0]
              }}</span>
            </div>
            <div class="m-3">
              <label class="form-label">Ad</label>
              <input
                v-model="userData.firstname"
                class="form-control"
                placeholder="Nizami"
              />
              <span v-if="validations.firstNameMoreThan" class="text-danger">{{
                validations.firstNameMoreThan[0]
              }}</span>
              <span v-if="validations.firstNameLessThan" class="text-danger">{{
                validations.firstNameLessThan[0]
              }}</span>
            </div>
            <div class="m-3">
              <label class="form-label">Soyad</label>
              <input
                v-model="userData.secondname"
                class="form-control"
                placeholder="Mamedov"
              />
              <span v-if="validations.secondNameMoreThan" class="text-danger">{{
                validations.secondNameMoreThan[0]
              }}</span>
            </div>
            <div class="m-3">
              <label class="form-label">Telefon nömrəsi</label>
              <input
                v-model="userData.phoneNumber"
                class="form-control"
                placeholder="+994XX-XXX-XXXX"
              />
            </div>
          </div>
          <div class="col" style="width: 357.484px">
            <div class="m-3">
              <label class="form-label">Ata adı</label>
              <input class="form-control" v-model="userData.fatherName" />
              <span v-if="validations.fatherNameMoreThan" class="text-danger">{{
                validations.fatherNameMoreThan[0]
              }}</span>
              <span v-if="validations.fatherNameLessThan" class="text-danger">{{
                validations.fatherNameLessThan[0]
              }}</span>
            </div>
            <div class="m-3">
              <label class="form-label">İxtisas</label>
              <select v-model="userData.specializationId" class="form-select">
                <option
                  v-for="spec in specializations"
                  :key="spec.id"
                  :value="spec.id"
                >
                  {{ spec.name }}
                </option>
              </select>
            </div>
            <div class="m-3">
              <label class="form-label">Kurs</label>
              <select
                v-model="userData.course"
                name=""
                id=""
                class="form-select"
              >
                <option :value="1">1</option>
                <option :value="2">2</option>
                <option :value="3">3</option>
                <option :value="4">4</option>
                <option :value="5">5</option>
              </select>
              <span v-if="validations.coursegreaterthan" class="text-danger">{{
                validations.coursegreaterthan[0]
              }}</span>
              <span v-if="validations.courselessthan" class="text-danger">{{
                validations.courselessthan[0]
              }}</span>
            </div>
            <div class="m-3">
              <label class="form-label">Kod</label>
              <input
                v-model="userData.code"
                class="form-control"
                placeholder="IKT2251"
              />
              <span v-if="validations.code" class="text-danger">{{
                validations.code[0]
              }}</span>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-end mb-1">
          <button
            class="p-2 btn text-white btn-block"
            style="width: 265px; background-color: #215702"
          >
            Dəvam et
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
