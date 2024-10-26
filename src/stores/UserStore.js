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
        try {
            const res = await axios.get("https://localhost:7106/user")
            if(res.status === 200){
                this.user = {...res.data}
                this.isAuthenticated = true
            }
            else if(res.status === 401){
                console.log('not authenticated')
                this.isAuthenticated = false
            }
            else {
                console.log(res)
            }
        }
        catch (error) {
            console.log(error)
        }
    }
    function logOut() {
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
    return {user, isAuthenticated, getUser, logOut}
})