<template>
  <main>
    <header-title title="Login |MEVN" />
    <header></header>
    <article>
      <section>
        <br />
        <div class="container jumbotron jumbotron-fluid mt-5">
          <div class="container">
            <router-link to="/">
              <h1 class="display-4">Henllo MEVN <img id="mevn" src="/assets/js.png" /></h1>
            </router-link>
          </div>
        </div>
        <p>{{ message }}</p>
        <form class="form" @submit.prevent="login">
          <input v-model="form.username" placeholder="Username" name="username" type="text" id="username" class="form-control" />
          <input v-model="form.password" placeholder="Password" name="password" type="password" id="password" class="form-control" />
          <button type="submit" name="login" id="login" class="btn btn-outline-success">Login</button>
        </form>
        <img id="undraw" src="/assets/undraw/undraw5.svg" alt="" />
      </section>
      <slot />
    </article>
  </main>
</template>

<script>
import axios from "axios";
import bcrypt from "bcryptjs";
import progress from "nprogress";
import headerTitle from "../../components/header-title.vue";
export default {
  components: { headerTitle },
  data() {
    return {
      message: null,
      form: {
        username: "",
        password: "",
      },
      api: {
        url: "/api/henllomevn",
      },
    };
  },
  methods: {
    async login() {
      if (this.form.username === "" || this.form.password === "") {
        this.message = "Both fields are required";
        return;
      }
      progress.start();
      const res = await axios
        .post(this.api.url, {
          data: this.form,
        })
        .then((response) => {
          const username = response.data.data.username;
          const password = response.data.data.password;
          const isValid = bcrypt.compareSync(this.form.password, password);
          if (username === this.form.username) {
            if (isValid) {
              this.$router.push("/profile");
            } else {
              this.message = "Wrong username or password";
              this.form.password = null;
              progress.done();
            }
          }
          this.message = "Wrong username or password";
          this.form.password = null;
          progress.done();
        })
        .catch((error) => {
          if (error) {
            this.message = "Wrong username or password";
            this.form.password = null;
            progress.done();
          }
        });
      progress.done();
      return res;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.jumbotron {
  color: #57646f;
  text-align: start;
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

p,
a {
  color: #57646f;
}

#mevn {
  max-width: 65px;
  max-height: 65px;
}

section {
  display: flex;
  height: 40vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
  width: 150%;
  margin: 4px;
}

button {
  margin-left: 5px;
  margin-top: 5px;
}

.form {
  margin-top: 10px;
  margin-left: -100px;
}

#undraw {
  max-width: 200px;
  z-index: -1;
  margin-top: -50px;
}
</style>
