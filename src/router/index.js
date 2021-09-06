import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/project",
    name: "Project",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Project.vue"),
    children: [
      {
        path: "/project",
        name: "ProjectBody",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/ProjectBody.vue"),
      },
      {
        path: "/card",
        name: "Card",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Card.vue"),
          alias: '/project/card'
      },
    ],
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
