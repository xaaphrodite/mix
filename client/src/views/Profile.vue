<template>
  <!-- about page -->
  <div>
    <header-title title="Profile |MEVN" />
    <br />
    <section class="about container">
      <div class="container title">
        <div class="jumbotron jumbotron-fluid">
          <div class="container-fluid">
            <h5 class="display-4">Profile</h5>
            <p class="lead"></p>
          </div>
          <hr />
        </div>
      </div>

      <div class="row">
        <div class="row-right">
          <p class="text">I have no special talents. I am only passionately curious.</p>
          <div class="about-content container">
            <ul>
              <li class="text">
                <span>Name: </span>
                <span>Rivane Rasetiansyah</span>
              </li>
              <li class="text">
                <span>Date of Birth: </span>
                <span>February 18, 2001</span>
              </li>
              <li class="text">
                <span>Address: </span>
                <span>Bandung, Indonesia</span>
              </li>
              <li class="text">
                <span>Education: </span>
                <span>Universitas Jenderal Achmad Yani</span>
              </li>
              <li class="text">
                <span>Email: </span>
                <span id="email">rasetiansyah@outlook.com</span>
              </li>
              <li class="text">
                <span>Zip code: </span>
                <span>40394</span>
              </li>
              <li class="text">
                <span>Phone: </span>
                <span>+62 821-2923-1404</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 id="cv">3 <span>Project complete</span></h3>
            <button @click="alert" type="button" class="btn btn-outline-success">download cv</button>
          </div>
          <br />
          <div v-if="alertT" class="alert alert-primary" role="alert">Woops, this doesn't work yet</div>
        </div>
      </div>
    </section>
    <section>
      <br />
      <div class="container title">
        <div class="jumbotron jumbotron-fluid">
          <div class="container-fluid">
            <h5 class="display-4">Collection</h5>
            <p class="lead"></p>
          </div>
          <hr />
        </div>
      </div>
      <div class="container">
        <h4 id="title">JavaScript Algorithms and Data Structures</h4>
        <p class="text">Issued May 15 2021 No Expiration Date</p>
        <img src="/src/assets/img/Ecertificate.jpg" id="cer" />
        <br />
        <p id="credential">https://freecodecamp.org/certification/xaaphrodite/javascript-algorithms-and-data-structures</p>
        <a href="https://freecodecamp.org/certification/xaaphrodite/javascript-algorithms-and-data-structures">
          <button class="btn btn-outline-success" style="margin-bottom: 20px">See credential</button>
        </a>
      </div>
    </section>
  </div>
  <!-- end of about page -->
</template>

<script>
import headerTitle from "../components/header-title.vue";
export default {
  components: { headerTitle },
  data() {
    return {
      alertT: false,
    };
  },
  methods: {
    alert() {
      this.alertT = true;
    },
  },
};
</script>
<style scoped>
img {
  /* border-radius: 15px; */
  margin-bottom: 20px;
  box-shadow: 10px 7px 10px rgba(0, 0, 0, 0.5);
}

div {
  text-align: center;
}

.container {
  /* margin-top: -50px; */
  width: auto;
  /* min-height: 100vh; */
  /* display: flex; */
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.jumbotron {
  color: #57646f;
}

#email {
  margin-left: 151px;
}
.about .row-left {
  width: 50%;
}
.about-content {
  display: flex;
  width: 100%;
  margin-right: -20px;
}

.about-content li {
  display: flex;
  text-align: start;
  margin: 0.5rem 1rem;
}
.about-content li span {
  flex: 1;
}
.about-content li span:first-child {
  color: #57646f;
  font-weight: 600;
}

.about .row-right h3 {
  color: #80bc01;
  font-size: 1.5rem;
}
.about .row-right h3 span {
  color: #57646f;
  font-weight: 400;
}

#cer {
  width: 50%;
}

@media (max-width: 1400px) {
  ul li a::before {
    display: none;
  }
  ul li a:hover {
    color: #57646f;
  }

  #email {
    margin-left: 151px;
  }
}

@media (max-width: 1390px) {
  #email {
    margin-left: 151px;
  }
}

@media (max-width: 990px) {
  .jumbotron h5 {
    font-size: 1.5em;
  }
  .jumbotron p {
    font-size: 1em;
  }
  .text {
    font-size: 0.7em;
  }

  .about-content {
    margin-left: 0px;
  }

  #cv {
    font-size: 0.8em;
  }

  #credential {
    font-size: 0.7em;
  }

  ul {
    font-size: 0.9em;
  }
  li {
    width: 180px;
  }

  #email {
    margin-left: 64px;
  }

  .btn {
    font-size: 50%;
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
