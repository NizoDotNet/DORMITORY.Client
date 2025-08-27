import { createApp } from "vue";
import { createVfm } from "vue-final-modal";

import App from "./App.vue";
import "./assets/css/main.css";
import "vue-final-modal/style.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import router from "./router/router.js";
import { createPinia } from "pinia";
import "./axios/axios.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const pinia = createPinia();
const app = createApp(App);

app.use(bootstrap);
app.use(router);
app.use(pinia);
const vmf = createVfm();
app.use(vmf);
app.mount("#app");
