import { InertiaProgress } from "@inertiajs/progress";
import { createApp } from "vue";
import Nprogress from "nprogress";
import router from "./router";
import store from "./store";
import App from "./App.vue";

/*
|--------------------------------------------------------------------------
| Henllo MEVN - client
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
import axios from "axios";
import mevnCookie from "js-cookie";

const henllomevn = () => {
  let csrfToken = mevnCookie.get("henllomevn");
  if (!csrfToken) {
    // axios.get("/api");
    return;
  }
  return;
};

// App entry
createApp(App).use(store).use(router).use(henllomevn).mount("#mevn");

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
