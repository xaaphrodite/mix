import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../layout/Landing-page.vue";
import Project from "../views/Project.vue";

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
    children: [
      {
        path: "project",
        name: "Project",
        component: Project,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
