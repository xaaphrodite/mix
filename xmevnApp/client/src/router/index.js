import { createRouter, createWebHistory } from "vue-router";
import firebase from "firebase";
import LandingPage from "../layout/Landing-page.vue";
import About from "../views/About.vue";
import Profile from "../views/Profile.vue";
import Contact from "../views/Contact.vue";
import Project from "../views/Project.vue";
import Server from "../views/Server.vue";
import Login from "../views/auth/Login.vue";
import MixPersonal from "../views/auth/layout/MixPersonal.vue";

const routes = [
    {
        path: "/",
        name: "LandingPage",
        component: LandingPage,
        children: [
            {
                path: "about",
                name: "About",
                component: About,
            },
            {
                path: "profile",
                name: "Profile",
                component: Profile,
            },
            {
                path: "contact",
                name: "Contact",
                component: Contact,
            },
            {
                path: "project",
                name: "Project",
                component: Project,
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
        path: "/MixPersonal",
        name: "MixPersonal",
        component: MixPersonal,
        meta: { requiresAuth: true },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE),
    routes,
});

export default router;

import progress from "nprogress";
import CryptoJS from "crypto-js";

function loggedIn() {
    try {
        progress.start();
        let email = localStorage.getItem("identifier");
        let passwordHash = localStorage.getItem("MixPersonalSite");
        let password = CryptoJS.AES.decrypt(passwordHash, "756433").toString(
            CryptoJS.enc.Utf8
        );
        if (email && password) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((response) => {
                    //
                })
                .catch((error) => {
                    localStorage.clear();
                    window.location.replace("/login");
                    progress.done();
                });
        }
        progress.done();
        return true;
    } catch (error) {
        progress.done();
        return false;
    }
}

function auth() {
    let email = localStorage.getItem("identifier");
    let passwordHash = localStorage.getItem("MixPersonalSite");
    if (email || passwordHash) {
        return true;
    }
    return false;
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
        if (auth()) {
            next({
                path: "/MixPersonal",
                query: { redirect: to.redirectedFrom },
            });
        } else {
            next();
        }
    } else {
        next(); //? make sure to always call next()!
    }
});
