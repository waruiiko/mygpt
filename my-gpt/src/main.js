import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import App from "./App.vue";
import router from "./router";
// import { VueSFCStreaming } from "vue3-sfc-loader";

const app = createApp(App);

// app.component("VueSFCStreaming", VueSFCStreaming);
app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.mount("#app");
