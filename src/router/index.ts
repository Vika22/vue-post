import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: ()=>
    import('@/views/Home.vue')
  },
  {
    path: "/history",
    name: "AllHistory",
    component: ()=>
    import('@/views/AllHistory.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
