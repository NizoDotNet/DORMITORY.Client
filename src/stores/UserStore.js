import {defineStore} from "pinia";
import axios from "axios";
import {computed, reactive, ref} from "vue";
import {useRouter} from "vue-router";

export const UserStore = defineStore("userStore", () => {
    const user = reactive({
        id: "",
        firstName: "",
        secondName: "",
        email: "",
        fin: "",
        room: "",
        block: "",
        passportNo: "",
        fatherName: "",
        course: "",
        code: "",
        phoneNumber: "",
        reprimands: []
    })
    const router = useRouter();
    const isAuthenticated = ref(false)
    const isLoading = ref(false)
    async function getUser(){
        isLoading.value = true
        if(this.user.id === "")
        {
            try {
                const res = await axios.get("/api/auth/user")
                if(res.status === 200){
                    this.user = {...res.data}
                    this.isAuthenticated = true
                }
                else {
                    console.log(res)
                }
            }
            catch (error) {
                if(error.response.status === 401) {
                    const r = await axios.post("/api/auth/refresh")
                    if(r.status === 200) {
                        this.user = {...r.data}
                        this.isAuthenticated = true
                    }
                }
                else if(error.response.status === 500) {
                    await router.push("/server-error")
                }
            } finally {
                isLoading.value = false
            }
        }
    }
    function logOut() {
        isLoading.value = true
        axios.post('/api/auth/logout')
            .then(res => {
                if(res.status === 200){
                    this.user = {
                        id: "",
                        firstName: "",
                        secondName: "",
                        email: "",
                        fin: "",
                        room: "",
                        block: "",
                        passportNo: "",
                        fatherName: "",
                        course: "",
                        code: ""
                    }
                    this.isAuthenticated = false
                }
            }).catch(err => console.log('error in logout ' + err))
            .finally(c => {
                isLoading.value = false
            });
    }
    return {user, isLoading, isAuthenticated, getUser, logOut}
})