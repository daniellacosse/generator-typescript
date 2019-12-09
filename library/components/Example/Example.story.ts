import Example from "./Example.vue";
import Vue from "vue";

Vue.component("example", Example);

export default { component: Example, title: "Example" };

export const exampleStory = (): string => "<example></example>";
