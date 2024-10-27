import {defineStore} from "pinia";
import axios from "axios";
import {computed, reactive, ref} from "vue";

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
        code: ""
    })
    const isAuthenticated = ref(false)
    async function getUser(){
        if(this.user.id === "")
        {
            try {
                const res = await axios.get("/api/auth/user")
                if(res.status === 200){
                    this.user = {...res.data}
                    this.isAuthenticated = true
                }
                /*else if(res.status === 401){
                    console.log('not authenticated')
                    this.isAuthenticated = false
                    if(localStorage.getItem("refreshToken") !== null){
                        console.log('sending refreshToken')
                        const refreshTokenRes = await axios.post('/api/auth/refresh', {
                            'refreshToken': localStorage.getItem("refreshToken")
                        })
                        if(refreshTokenRes.status === 200) {
                            localStorage.setItem("token", refreshTokenRes.data)
                        }
                    }
                }*/
                else {
                    console.log(res)
                }
            }
            catch (error) {
                console.log('error in user-store while fetching data ' + error)
            }
        }

    }
    function logOut() {
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
            }).catch(err => console.log('error in logout ' + err));

    }
    return {user, isAuthenticated, getUser, logOut}
})