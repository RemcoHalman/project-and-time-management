import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import titleMixin from "./mixins/titleMixin";

const app = createApp(App);

app.use(router);
app.mixin(titleMixin);
app.mount("#app");
