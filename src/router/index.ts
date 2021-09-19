import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Information from "../views/Information.vue";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Welcome,
  },
  {
    path: "/welcome",
    component: Welcome,
  },
  {
    path: "/information",
    component: Information,
  },
  {
    path: "/home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
