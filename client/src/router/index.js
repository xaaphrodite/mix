import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../layout/Landing-page.vue";
import Project from "../views/Project.vue";
import Contact from "../views/Contact.vue";
import Skills from "../views/Skills.vue";
import Profile from "../views/Profile.vue";
import Server from "../views/Server.vue";
import Login from '../views/auth/Login.vue'

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
      {
        path: "contact",
        name: "Contact",
        component: Contact,
      },
      {
        path: "skills",
        name: "Skills",
        component: Skills,
      },
      {
        path: "profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "server",
        name: "Server",
        component: Server,
      },
      {
        path: "/:pathMatch(.*)*",
        redirect: "/server",
      },
    ],
  },

  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE),
  routes,
});

export default router;
