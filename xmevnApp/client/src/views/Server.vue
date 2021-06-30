<template>
  <main>
    <header-title title="Server |MEVN" />
    <br />
    <div class="container" style="margin-top: 15px">
      <div class="container jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">
            Henllo MEVN <img id="mevn" src="/assets/images/JS.png" />
            <span class="text">SERVER SIDE</span>
          </h1>
          <p class="lead">Single page application built using MEVN technology.</p>
          <hr />
        </div>
      </div>
    </div>
    <div class="container title">
      <div class="jumbotron jumbotron-fluid">
        <div class="container-fluid">
          <h5 class="display-4 message">You are accessing an endpoint that is not available or to the server side, you don't have permission</h5>
          <p class="lead">
            redirect in <span style="color: #80bc01">{{ timeLeft }}..</span>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import progress from "nprogress";
import headerTitle from "../components/header-title.vue";
export default {
  components: { headerTitle },
  data() {
    return {
      timeLeft: "six",
    };
  },
  mounted() {
    this.counter();
  },
  methods: {
    counter() {
      progress.start();
      let countdown = ["five", "four", "three", "two", "one"];
      let i = 0;
      setInterval(() => {
        if (i >= countdown.length) {
          clearInterval();
          progress.done();
          window.location.replace("/profile");
        }
        this.timeLeft = countdown[i];
        i++;
      }, 1000);
    },
  },
};
</script>

<style scoped>
#mevn {
  width: 70px;
}

.text {
  font-size: 0.5em;
}

h5 {
  font-size: 1.5em;
}

.jumbotron {
  color: #57646f;
}

@media (max-width: 990px) {
  .message {
    font-size: 1em;
  }
}
</style>
