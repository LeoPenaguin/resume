import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import i18n from "./i18n";

import '../node_modules/typeface-roboto/index.css';
import "./styles/reset.css";
import "./styles/theme.css";
import "./styles/style.css";

const app = createApp(App);

app.use(createPinia());
app.use(i18n);

app.mount("#app");
