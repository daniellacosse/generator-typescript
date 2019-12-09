import Main from "./pages/Main.vue";
import Vue, { CreateElement, VNode } from "vue";

new Vue({
  render: (h: CreateElement): VNode => h(Main)
}).$mount("#app");
