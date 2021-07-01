<template>
  <main>
    <header>
      <header-title title="cPanel |MEVN" />
      <navbar />
      <sidebar />
    </header>
    <article>
      <br />
      <section class="d-flex" id="landingpage">
        <div class="container">
          <section>
            <div class="container jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">
                  Henllo {{ whoAmI }}
                  <!--<img id="mevn" src="/assets/js.png" />-->
                </h1>
                <p class="lead">Welcome back to your personal site</p>
                <hr />
                <strong>Full access rights in your hands, keep the spirit and keep working!</strong>
              </div>
            </div>
            <ul id="cpanelOption" style="margin-top: 50px">
              <li>
                <router-link to="" data-text="Add">Add</router-link>
              </li>
              <li><router-link to="" data-text="Update">Update</router-link></li>
              <li>
                <router-link to="" data-text="Remove">Remove</router-link>
              </li>
              <li>
                <router-link @click="exit" to="" data-text="Logout">Exit</router-link>
              </li>
            </ul>
            <!-- <img id="svg" src="/assets/gift/giphy.gif" /> -->
          </section>
        </div>
      </section>
      <router-view />
    </article>
  </main>
</template>

<script>
import HeaderTitle from "../../../components/header-title.vue";
import navbar from "../../../components/navbar.vue";
import Sidebar from "../../../components/sidebar.vue";
import CryptoJS from "crypto-js";
export default {
    components: { navbar, Sidebar, HeaderTitle },
    data() {
        return {
            whoAmI: null,
        };
    },
    mounted() {
        this.whoAmI = localStorage.getItem("identifier");
        this.whoAmI = CryptoJS.AES.decrypt(this.whoAmI, "756433").toString(
            CryptoJS.enc.Utf8
        );
    },
    methods: {
        exit() {
            localStorage.clear();
            this.$router.push("/login");
        },
    },
};
</script>

<style scoped>
/* #mevn {
  width: 70px;
} */

section {
    position: relative;
    width: 100%;
    height: 90vh;
    justify-content: center;
    align-items: center;
}
article {
    margin-top: 59px;
}

.jumbotron {
    color: #57646f;
    text-align: start;
    margin-left: 50px;
    transition: all 0.5s ease 0s;
}

.jumbotron h5 {
    font-size: 2em;
}

.jumbotron p {
    font-size: 0.9em;
    font-weight: 500;
    margin-left: 5px;
}

#svg {
    max-width: 50%;
    max-height: 100%;
    margin-left: 20px;
    z-index: -3;
    border-radius: 25px;
    box-shadow: 10px 7px 10px rgba(0, 0, 0, 0.5);
}

ul {
    display: flex;
    flex-direction: column;
}

ul li {
    list-style: none;
    margin-left: -30px;
    width: 30px;
}

ul li a {
    display: block;
    text-decoration: none;
    text-align: center;
    font-size: 3em;
    font-weight: 700;
    color: #e6e7e8;
    text-transform: uppercase;
}

ul li a:hover {
    color: #57646f;
    transition: all 0.5s ease-in-out;
}

ul li a::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 1;
    width: 100%;
    height: 100%;
    margin-left: 200px;
    margin-top: -443px;
    overflow: hidden;
    z-index: -1;
    font-size: 2.8em;
    color: #80bc01;
    opacity: 0;
    line-height: 100vh;
    transition: all 0.7s ease-in-out;
    font-weight: 400;
}

ul li:hover a::before {
    opacity: 1;
}

@media (max-width: 1400px) {
    ul li a::before {
        display: none;
    }
    ul li a:hover {
        color: #57646f;
    }
}

@media (max-width: 991px) {
    .jumbotron {
        margin-right: -50px;
    }
}

@media (max-width: 800px) {
    .jumbotron {
        margin-left: 10px;
    }
    #svg {
        display: none;
    }
}
@media (max-width: 435px) {
    .jumbotron h5 {
        font-size: 1.5em;
    }

    .jumbotron p {
        font-size: 1em;
    }

    #svg {
        max-height: 43%;
        max-width: 43%;
    }
}
</style>
