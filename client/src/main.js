import { InertiaProgress } from "@inertiajs/progress";
import Nprogress from "nprogress";
import router from "../src/routes/web.js";
import { vueX } from "../src/vueX/store.js";
import { createApp } from "vue";
import App from "../src/App.vue";

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

createApp(App).use(vueX).use(router).mount("#app");

InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 250,

  // The color of the progress bar.
  color: "#FF0000",

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  showSpinner: false,
  //
  easing: "ease",
});

Nprogress.configure({
  showSpinner: false,
});
