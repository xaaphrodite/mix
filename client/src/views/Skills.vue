<template>
  <!-- skills page -->
  <div>
    <header-title title="Skills |MEVN" />
    <br />
    <section class="skills container">
      <div class="container title">
        <div class="jumbotron jumbotron-fluid">
          <div class="container-fluid">
            <h5 class="display-4">Skills</h5>
            <p class="lead">Abilities based on the things I have learned so far.</p>
          </div>
          <hr />
        </div>
      </div>

      <p class="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ab laudantium possimus molestias sapiente, saepe facilis dolore autem repellat, quo iure tempore nisi perspiciatis. Quasi?</p>

      <div class="row">
        <div class="item">
          <div class="item-text">
            <span>JavaScript</span>
            <span class="javascript">79%</span>
          </div>
          <div class="progress">
            <div class="progress-bar javascript"></div>
          </div>
        </div>

        <div class="item">
          <div class="item-text">
            <span>Vue</span>
            <span class="vue">75%</span>
          </div>
          <div class="progress">
            <div class="progress-bar vue"></div>
          </div>
        </div>

        <div class="item">
          <div class="item-text">
            <span>HTML5</span>
            <span class="html5">85%</span>
          </div>
          <div class="progress">
            <div class="progress-bar html5"></div>
          </div>
        </div>

        <div class="item">
          <div class="item-text">
            <span>CSS3</span>
            <span class="css3">80%</span>
          </div>
          <div class="progress">
            <div class="progress-bar css3"></div>
          </div>
        </div>

        <div class="item">
          <div class="item-text">
            <span>Laravel</span>
            <span class="laravel">60%</span>
          </div>
          <div class="progress">
            <div class="progress-bar laravel"></div>
          </div>
        </div>

        <div class="item">
          <div class="item-text">
            <span>PHP</span>
            <span class="php">68%</span>
          </div>
          <div class="progress">
            <div class="progress-bar php"></div>
          </div>
        </div>

        <div class="item">
          <div class="item-text">
            <span>Java</span>
            <span class="java">55%</span>
          </div>
          <div class="progress">
            <div class="progress-bar java"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- end of skills page -->
</template>

<script>
import headerTitle from "../components/header-title.vue";
export default {
  components: { headerTitle },
};
</script>

<style scoped>
.container {
  /* margin-top: -50px; */
  width: auto;
  /* min-height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

div {
  text-align: center;
}

div .row {
  width: 90%;
}

.jumbotron {
  color: #57646f;
}

.skills > .text {
  width: 70%;
  margin: 1rem auto;
  text-align: center;
}
.skills .row {
  margin: 1rem 0;
}
.skills .item {
  padding: 0.5rem 0;
  margin: 0.3rem 0;
}
.skills .item-text {
  display: flex;
  justify-content: flex-start;
  font-weight: 600;
  font-size: 1.3rem;
  position: relative;
}
.skills .item-text span:last-child {
  position: absolute;
}
.skills .item-text .javascript {
  margin-left: 79%;
}
.skills .item-text .vue {
  margin-left: 75%;
}
.skills .item-text .html5 {
  margin-left: 85%;
}
.skills .item-text .css3 {
  margin-left: 80%;
}
.skills .item-text .laravel {
  margin-left: 60%;
}
.skills .item-text .php {
  margin-left: 68%;
}
.skills .item-text .java {
  margin-left: 55%;
}
.progress {
  margin: 0.8rem 0;
  border-radius: 10px;
  height: 16px;
  width: 100%;
  background-color: #252525;
  overflow: hidden;
}
.progress-bar {
  background: #80bc01;
  height: 100%;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.progress-bar.javascript {
  width: 79%;
}
.progress-bar.vue {
  width: 75%;
}
.progress-bar.html5 {
  width: 85%;
}
.progress-bar.css3 {
  width: 80%;
}
.progress-bar.laravel {
  width: 60%;
}
.progress-bar.php {
  width: 68%;
}
.progress-bar.java {
  width: 55%;
}

@media (max-width: 990px) {
  .text {
    font-size: 0.8em;
  }
  .progress {
    height: 18%;
  }
  span {
    font-size: 0.7em;
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
