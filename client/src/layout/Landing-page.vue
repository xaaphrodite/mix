<template>
  <main>
    <header>
      <navbar />
      <sidebar />
    </header>
    <article>
      <section class="d-flex" id="landingpage" v-if="index">
        <header-title title="Home |MEVN" />
        <div class="container jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Henllo MEVN <img id="mevn" src="/assets/js.png" /></h1>
            <p class="lead">Single page application built using MEVN technology.</p>
            <hr />
          </div>
        </div>
        <div class="container">
          <section>
            <ul>
              <li>
                <router-link to="" data-text="Service">Service</router-link>
              </li>
              <li><router-link to="" data-text="Team">Team</router-link></li>
              <li>
                <router-link to="" data-text="Movies">Movies</router-link>
              </li>
            </ul>
            <img id="svg" src="/assets/gift/giphy.gif" />
          </section>
        </div>
      </section>
      <router-view />
    </article>
  </main>
</template>

<script>
import HeaderTitle from "../components/header-title.vue";
import navbar from "../components/navbar.vue";
import Sidebar from "../components/sidebar.vue";
export default {
  components: { navbar, Sidebar, HeaderTitle },
  computed: {
    index() {
      return this.$route.name === "LandingPage";
    },
  },
  async created() {
    if (this.$route.name === "LandingPage") {
      this.$router.push("/profile");
    }
  },
};
</script>

<style scoped>
#mevn {
  width: 70px;
}

section {
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
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
  margin-left: -875px;
  margin-top: -63px;
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
