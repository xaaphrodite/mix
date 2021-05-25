import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../layout/Landing-page.vue";
import Project from "../views/Project.vue";
import Contact from "../views/Contact.vue";
import Skills from "../views/Skills.vue";
import Profile from "../views/Profile.vue";
import Server from "../views/Server.vue";
import Login from "../views/auth/Login.vue";
import CPanel from "../views/auth/layout/CPanel.vue";

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
    component: Login,
    meta: { isAuth: true },
  },

  {
    path: "/cpanel",
    name: CPanel,
    component: CPanel,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE),
  routes,
});

export default router;

import progress from "nprogress";
import axios from "axios";
import CryptoJS from "crypto-js";

function loggedIn() {
  progress.start();
  let identifier = localStorage.getItem("identifier");
  if (identifier) {
    axios
      .post("/api/henllomevn")
      .then((response) => {
        const username = response.data.data.username;
        const plaintext = CryptoJS.AES.decrypt(identifier, "756433").toString(CryptoJS.enc.Utf8);
        if (plaintext != username) {
          localStorage.clear();
          router.push("/login");
          progress.done();
        }
      })
      .catch((error) => {
        localStorage.clear();
        progress.done();
      });
    progress.done();
    return true;
  }
  progress.done();
  return identifier;
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!loggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.redirectedFrom },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.isAuth)) {
    if (loggedIn()) {
      next({
        path: "/cpanel",
        query: { redirect: to.redirectedFrom },
      });
    } else {
      next();
    }
  } else {
    next(); //? make sure to always call next()!
  }
});
