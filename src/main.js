import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vuetify from "./plugins/vuetify";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  Vuetify,
  render: h => h(App)
}).$mount("#app");