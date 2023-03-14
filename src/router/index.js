import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import BlogList from "../views/BlogList.vue";
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
      {
        path: "/blog",
        name: "BlogList",
        component: BlogList,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
