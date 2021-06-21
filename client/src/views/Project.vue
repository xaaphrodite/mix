<template>
  <div>
    <!-- <dashboard> -->
    <header-title title="Project |MEVN" />
    <!-- </dashboard> -->
    <section v-if="visitSite">
      <br />
      <div v-if="alertT" class="alert alert-primary" role="alert">Woops, this doesn't work yet</div>
      <!-- Modal -->
      <div class="modal fade" id="movieModal" tabindex="-1" aria-labelledby="movieModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="movieModalLabel">Movies</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h2>What project is this?</h2>
              <p>This project will be a search application for all films around the world complete with all film descriptions such as directors, actors, metascore and even the income from the film.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
              <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
            </div>
          </div>
        </div>
      </div>
      <!-- Modal -->
      <div class="container">
        <div class="jumbotron jumbotron-fluid">
          <div class="container-fluid">
            <h5 class="display-4">Project rasetiansyah@outlook.com</h5>
          </div>
          <hr />
          <p class="lead">Collection of projects and documentation that has been created</p>
        </div>
      </div>
      <div class="container">
        <div class="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <h2>01</h2>
            <h3>Error404</h3>
            <p style="font-size: 0.8em">Site with Back end technology from Laravel and Vue as Front end, user authentication with key encryption.</p>
            <a target="_blank" href="https://xaaphrodite.herokuapp.com/">Visit Site</a>
            <p class="mt-3">xaaphrodite.herokuapp.com</p>
          </div>
        </div>
        <div class="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <h2>02</h2>
            <h3>Henllo MEVN</h3>
            <p style="font-size: 0.8em">Single page application built using MEVN technology.</p>
            <router-link to="/" style="cursor: pointer">Redirect</router-link>
            <p class="mt-3">*router link</p>
          </div>
        </div>
        <div class="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <h2>03</h2>
            <h3>Bank of Documents</h3>
            <p style="font-size: 0.8em">Website application for project management, built with MEVN</p>
            <a target="_blank" href="https://bod-108.glitch.me/">Visit Site</a>
            <p class="mt-3">bod-108.glitch.me</p>
          </div>
        </div>
        <div class="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div class="content">
            <h2>04</h2>
            <h3>Movies</h3>
            <p>In process..<strong class="typing"></strong></p>
            <a href="#" data-bs-toggle="modal" data-bs-target="#movieModal">Read More</a>
          </div>
        </div>
      </div>
      <img id="svg" src="/assets/undraw/undraw3.svg" />
      <br />
      <a href="/profile" style="color: #80bc01">Profile</a>
      <h6 style="color: #57646f">Tap the JS logo for more options</h6>
    </section>
  </div>
</template>

<script>
import HeaderTitle from "../components/header-title.vue";
export default {
  components: { HeaderTitle },
  data() {
    return {
      user: JSON,
      alertT: false,
      visitSite: true,
    };
  },
  mounted() {
    // this.type();
  },
  methods: {
    alert() {
      this.alertT = true;
    },
    project() {
      this.$router.push("/error401");
    },
    // type() {
    //   var typed = new Typed(".typing", {
    //     strings: [`process..`],
    //     typeSpeed: 60,
    //     backSpeed: 60,
    //     loop: true,
    //   });
    // },
  },
};
</script>

<style scoped>
section {
  text-align: center;
}

.jumbotron {
  /* color: #edf0f1; */
  /* margin-top: 20px; */
  color: #57646f;
  transition: all 0.5s ease 0s;
}

.alert {
  /* background-color: #1779ff; */
  color: black;
  font-size: 1.3em;
}

article {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  /* margin-top: -50px; */
  width: auto;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.container .card {
  position: relative;
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.container:hover .card {
  opacity: 0.5;
}

.container .card:hover {
  opacity: 1;
}

.container .card::before {
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  bottom: 2px;
  width: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.container .card .content {
  padding: 30px;
  text-align: center;
}

.container .card .content h2 {
  position: absolute;
  right: 30px;
  font-size: 4em;
  font-weight: 800;
  color: #1779ff;
  opacity: 0.1;
  transition: 0.5s;
}

.container .card:hover .content h2 {
  opacity: 1;
  transform: translateY(-70px);
}

.container .card .content h3 {
  position: relative;
  font-size: 1.5em;
  color: #1779ff;
  opacity: 0.5;
  letter-spacing: 1px;
  transition: 0.5s;
}

.container .card .content p {
  position: relative;
  font-size: 1em;
  color: #1779ff;
  opacity: 0.5;
  font-weight: 300;
  letter-spacing: 1px;
  transition: 0.5s;
}

.container .card .content p,
.container .card:hover .content h3 {
  opacity: 1;
}

.container .card .content a {
  display: inline-block;
  margin-top: 15px;
  padding: 8px 15px;
  background: #1779ff;
  color: #edf0f1;
  text-transform: uppercase;
  font-weight: 500;
}

.container .card span {
  transition: 0.5s;
  opacity: 0;
}

.container .card:hover span {
  opacity: 1;
}

.container .card span:nth-child(1) {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  margin-top: -1px;
  background: linear-gradient(to right, transparent, #1779ff);
  animation: animate1 2s linear infinite;
}

@keyframes animate1 {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.container .card span:nth-child(2) {
  position: absolute;
  top: 0;
  right: 0;
  width: 4px;
  height: 100%;
  margin-right: -1px;
  background: linear-gradient(to bottom, transparent, #1779ff);
  animation: animate2 2s linear infinite;
  animation-delay: 1s;
}

@keyframes animate2 {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

.container .card span:nth-child(3) {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  margin-bottom: -1px;
  background: linear-gradient(to left, transparent, #1779ff);
  animation: animate3 2s linear infinite;
}

@keyframes animate3 {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.container .card span:nth-child(4) {
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  margin-left: -1px;
  background: linear-gradient(to top, transparent, #1779ff);
  animation: animate4 2s linear infinite;
  animation-delay: 1s;
}

@keyframes animate4 {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

@media (max-width: 990px) {
  #svg {
    max-width: 80%;
    max-height: 80%;
  }
  .jumbotron h5 {
    font-size: 1.5em;
  }
  .jumbotron p {
    font-size: 1em;
  }
}

@media (max-width: 440px) {
  .jumbotron h5 {
    font-size: 1.3em;
  }
  .jumbotron p {
    font-size: 0.7em;
  }
}
</style>
