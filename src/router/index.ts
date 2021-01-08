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
    name: "History",
    component: ()=>
    import('@/views/History.vue')
  },
  {
    path: "/history-delete",
    name: "Delete",
    component: ()=>
    import('@/views/Delete.vue')
  },
  {
    path: "/history-add",
    name: "Add",
    component: ()=>
    import('@/views/Add.vue')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
