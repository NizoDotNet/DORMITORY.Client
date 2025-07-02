<script setup>
import { onMounted, reactive, ref, watch } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const dormitoryId = ref(1);
const dormitories = ref([]);
const specializations = ref([]);
const rooms = ref([]);
const validations = ref([]);
const conflict = ref();
const registerData = reactive({
  email: "",
  password: "",
  fin: "",
  passportNo: "",
  firstname: "",
  secondname: "",
  phoneNumber: "",
  roomId: null,
  fatherName: "",
  specializationId: null,
  course: 0,
  code: "",
  region: "",
  address: "",
  educationForm: 1,
});
const confirmPassword = ref("");

const getRooms = async () => {
  try {
    const roomsRes = await axios.get(
      `/api/dormitories/${dormitoryId.value}/rooms`
    );
    if (roomsRes.status === 200) {
      rooms.value = roomsRes.data;
    }
  } catch (error) {
    await router.push("/server-error");
  }
};
onMounted(async () => {
  try {
    const res = await axios.get("/api/specialization");
    if (res.status === 200) {
      specializations.value = res.data;
    }
  } catch (error) {
    console.log(error);
    await router.push("/server-error");
  }
  try {
    const dormitoriesRes = await axios.get("/api/dormitories");
    if (dormitoriesRes.status === 200) {
      dormitories.value = dormitoriesRes.data;
    }
  } catch (error) {
    await router.push("/server-error");
  }
  await getRooms();
});
const register = async () => {
  try {
    const res = await axios.post("/api/auth/register", registerData);
    if (res.status === 200) {
      await router.push("/login");
    }
  } catch (err) {
    if (err.response.status === 400) {
      validations.value = err.response.data.errors;
    } else if (err.response.status === 409) {
      console.log(err);
      conflict.value = err.response.data.message;
    } else {
      console.log(err);
    }
  } finally {
  }
};

watch(dormitoryId, async () => {
  await getRooms();
});
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
      <form @submit.prevent="register">
        <div class="row">
          <div class="col" style="width: 357.484px">
            <div class="m-3">
              <label for="email" class="form-label">Email</label>
              <input
                id="email"
                v-model="registerData.email"
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
              <label class="form-label">Şifrə</label>
              <input
                v-model="registerData.password"
                type="password"
                class="form-control"
              />
              <span v-if="validations.password" class="text-danger">{{
                validations.password[0]
              }}</span>
            </div>
            <div class="m-3">
              <label class="form-label">Şifrəni təkrarla</label>
              <input
                v-model="confirmPassword"
                type="password"
                class="form-control"
              />
              <span
                v-if="confirmPassword !== registerData.password"
                class="text-danger"
              >
                Şifrələr eyni deyil
              </span>
            </div>
            <div class="m-3">
              <label class="form-label">FİN</label>
              <input
                v-model="registerData.fin"
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
                v-model="registerData.passportNo"
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
                v-model="registerData.firstname"
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
                v-model="registerData.secondname"
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
                v-model="registerData.phoneNumber"
                class="form-control"
                placeholder="+994XX-XXX-XXXX"
              />
            </div>
          </div>
          <div class="col" style="width: 357.484px">
            <div class="m-3">
              <label class="form-label">Şəhər/Rayon</label>
              <input
                v-model="registerData.region"
                class="form-control"
                placeholder="Bərdə"
              />
              <span v-if="validations.region" class="text-danger">{{
                validations.region[0]
              }}</span>
            </div>
            <div class="m-3">
              <label class="form-label">Address</label>
              <input
                v-model="registerData.address"
                class="form-control"
                placeholder="I.Eliyev 3-küç"
              />
              <span v-if="validations.addresnotempty" class="text-danger">{{
                validations.addresnotempty[0]
              }}</span>
              <span v-if="validations.addresslessthan" class="text-danger">{{
                validations.addresslessthan[0]
              }}</span>
            </div>
            <div class="m-3">
              <label for="form-label">Təhsil forması</label>
              <select v-model="registerData.educationForm" class="form-select">
                <option value="1">Əyani</option>
                <option value="2">Qiyabi</option>
              </select>
            </div>
            <div class="m-3">
              <label for="form-label">Yataqxana</label>
              <select v-model="dormitoryId" class="form-select">
                <option
                  v-for="dormitory in dormitories"
                  :key="dormitory.id"
                  :value="dormitory.id"
                >
                  {{ dormitory.name }}
                </option>
              </select>
            </div>
            <div class="m-3">
              <label for="form-label">Otaq</label>
              <p class="text-danger" v-if="rooms.length === 0">
                Boş otaq yoxdur
              </p>
              <select v-model="registerData.roomId" class="form-select">
                <option :value="null">Heç bir otaq</option>
                <option v-for="room in rooms" :key="room.id" :value="room.id">
                  {{ room.blockName }} - {{ room.name }}
                </option>
              </select>
            </div>
            <div class="m-3">
              <label class="form-label">Ata adı</label>
              <input class="form-control" v-model="registerData.fatherName" />
              <span v-if="validations.fatherNameMoreThan" class="text-danger">{{
                validations.fatherNameMoreThan[0]
              }}</span>
              <span v-if="validations.fatherNameLessThan" class="text-danger">{{
                validations.fatherNameLessThan[0]
              }}</span>
            </div>
            <div class="m-3">
              <label class="form-label">İxtisas</label>
              <select
                v-model="registerData.specializationId"
                class="form-select"
              >
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
                v-model="registerData.course"
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
                v-model="registerData.code"
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
