import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//For ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

//For bootstrap vue
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(Antd);

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
