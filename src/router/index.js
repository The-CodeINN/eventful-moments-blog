// import { createRouter, createWebHistory } from "vue-router";

// const routes = [
//   {
//     path: "/",
//     name: "HomePage",
//     component: () =>
//       import(/* webpackChunkName: "home" */ "../views/HomePage.vue"),
//   },
//   {
//     path: "/register",
//     name: "RegisterPage",
//     component: () =>
//       import(/* webpackChunkName: "register" */ "../views/RegisterPage.vue"),
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

// export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import DefaultLayout from "../Components/DefaultLayout.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "HomePage",
        component: HomePage,
      },
      {
        path: "/register",
        name: "RegisterPage",
        component: RegisterPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
