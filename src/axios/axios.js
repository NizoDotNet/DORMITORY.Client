import axios from "axios";
axios.defaults.baseURLrl = "http://localhost:8080/"
axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("token");
