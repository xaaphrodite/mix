<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <router-link @click="sideBar" class="navbar-brand mevnapp" to="">
        Henllo MEVN
        <img src="/src/assets/js.png" />
        <span style="font-size: 11px"> being development</span>
      </router-link>
      <button @click="rmSide" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/skills">Skills</router-link>
          <router-link class="nav-link" to="/project">Project</router-link>
          <router-link class="nav-link" to="/contact">Contact</router-link>
          <router-link class="nav-link disabled" to="" tabindex="-1" aria-disabled="true">AddPost</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    sideBar() {
      let sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("active");
      let navbar1 = document.querySelector(".navbar-collapse");
      navbar1.classList.remove("show");
    },
    rmSide() {
      let sidebar = document.querySelector(".sidebar");
      sidebar.classList.remove("active");
    },
  },
};
</script>

<style scoped>
nav {
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
  transition: 1s;
}

img {
  width: 35px;
}

.navbar-nav {
  color: #80bc01;
}
</style>
