import { InertiaProgress } from "@inertiajs/progress";
import mevnCookie from "js-cookie";
import Nprogress from "nprogress";
import { createApp } from "vue";
import firebase from "firebase/app";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import axios from "axios";

/*
|--------------------------------------------------------------------------
| MixPersonal site - client
|--------------------------------------------------------------------------
|
| Author    : rasetiansyah
| Github    : https://github.com/xaaphrodite
| Facebook  : https://www.facebook.com/xaaphrodite
| Instagram : https://www.instagram.com/rasetiansyah_
| Discord   : https://discordapp.com/users/742543110856507482
| LinkedIn  | https://www.linkedin.com/in/rivane-rasetiansyah-b55199212
|
*/

// Developmet condition
const henllomevn = () => {
    let csrfToken = mevnCookie.get("henllomevn");
    if (!csrfToken) {
        // axios.get("/api");
        return;
    }
    return;
};

// Heroku condition
const wakeUp = () => {
    setInterval(async () => {
        await axios
            .get("https://xaaph.herokuapp.com/profile")
            .then((response) => {
                console.log("is breathing");
            })
            .catch((error) => {
                console.log("not breathing");
            });
    }, 300000);
};

// Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCdXfTV8ftMz1jz72JDpGPN-6vBIOq4psw",
    authDomain: "mixpersonalsite.firebaseapp.com",
    projectId: "mixpersonalsite",
    storageBucket: "mixpersonalsite.appspot.com",
    messagingSenderId: "190848671663",
    appId: "1:190848671663:web:787d5a8d0c52f25650595a",
    measurementId: "G-H47HYWT0RQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// App entry
createApp(App)
    .use(store)
    .use(router)
    .use(henllomevn)
    .use(wakeUp)
    .mount("#mevn");

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 250,

    // The color of the progress bar.
    color: "#80bc01",

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: false,
    // Ease
    easing: "ease",
});

Nprogress.configure({
    showSpinner: false,
});
