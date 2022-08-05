import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login"),
  },
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "model" */ "../views/home"),
    children: [
      {
        path: "/students",
        name: "students",
        component: () => import("../views/students"),
      },
      {
        path: "/add",
        name: "add",
        component: () => import("../views/add"),
      },
      {
        path: "/deletestu",
        name: "deletestu",
        component: () => import("../views/deletestu"),
      },
      {
        path: "/update",
        name: "update",
        component: () => import("../views/update"),
      },
      {
        path: "/users",
        name: "users",
        component: () => import("../views/users"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
