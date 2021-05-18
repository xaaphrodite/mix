<template>
  <main>
    <br />
    <div class="container">
      <header-title title="Contact |MEVN" />
      <div class="container">
        <div class="jumbotron jumbotron-fluid">
          <div class="container-fluid">
            <h5 class="display-4">Contact</h5>
            <p class="lead">Single page application built using MEVN technology</p>
          </div>
          <hr />
        </div>
      </div>
      <section id="about">
        <div class="container">
          <ul>
            <li><a href="https://www.instagram.com/rasetnsyh" data-text="Instagram">Instagram</a></li>
            <li><a href="https://discordapp.com/users/742543110856507482" data-text="Discord">Discord</a></li>
            <li><a href="https://github.com/xaaphrodite" data-text="GitHub">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/rivane-rasetiansyah-b55199212" data-text="LinkedIn">LinkedIn</a></li>
            <li><a href="https://www.facebook.com/xaaphrodite" data-text="Facebook">Facebook</a></li>
          </ul>
        </div>
      </section>
      <p id="svg-p">mobile view</p>
      <img id="svg" src="/src/assets/undraw/undraw9.svg" />
      <img id="svg1" src="/src/assets/undraw/undraw8.svg" />
    </div>
    <h6 style="color: #57646f">Tap the JS logo for more options</h6>
  </main>
</template>

<script>
import headerTitle from "../components/header-title.vue";
export default {
  components: { headerTitle },
};
</script>

<style scoped>
section {
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  text-align: center;
}

div,
main {
  text-align: center;
}

.jumbotron {
  color: #57646f;
}

img {
  margin-bottom: 10px;
}

#svg {
  display: none;
}

#svg-p {
  display: none;
}

#svg1 {
  max-width: 40%;
  max-height: 40%;
  margin-top: -50px;
  margin-left: 17px;
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
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  font-size: 2.8em;
  color: #80bc01;
  opacity: 0;
  line-height: 50vh;
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

@media (max-width: 990px) {
  #svg {
    display: block;
    max-width: 70%;
    max-height: 70%;
    margin-left: 10px;
  }
  #svg-p {
    display: block;
    font-size: 10px;
    margin-bottom: -1px;
    margin-left: 200px;
    color: #57646f;
    margin-top: -15px;
  }
  #svg1 {
    display: none;
  }

  .jumbotron h5 {
    font-size: 1.5em;
  }
  .jumbotron p {
    font-size: 1em;
  }
}

@media (max-width: 460px) {
  ul li a {
    margin-left: -35px;
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
