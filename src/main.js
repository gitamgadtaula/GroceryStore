import Vue from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import { store } from "./store/index";
import "ant-design-vue/dist/antd.css";

Vue.use(Antd);

Vue.use(VueRouter);
Vue.config.productionTip = false;
const router = new VueRouter({
  mode: "history",
  routes,
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
