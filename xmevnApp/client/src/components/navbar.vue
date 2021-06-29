<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" @click="klik">
    <div class="container-fluid">
      <router-link @click="sideBar" class="navbar-brand mevnapp" to="">
        Henllo MEVN
        <img src="assets/node.png" />
        <span style="font-size: 11px"> being developed</span>
      </router-link>

      <!-- <button @click="rmSide" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav"></div>
      </div> -->

      <div class="navbar-nav">
        <router-link class="nav-link disabled" to="" tabindex="-1" aria-disabled="true">addPost</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // computed: {
  //   imSkills() {
  //     if (this.$route.name === "Skills") {
  //       return false;
  //     }
  //     return true;
  //   },
  //   imProject() {
  //     if (this.$route.name === "Project") {
  //       return false;
  //     }
  //     return true;
  //   },
  //   imContact() {
  //     if (this.$route.name === "Contact") {
  //       return false;
  //     }
  //     return true;
  //   },
  // },
  methods: {
    sideBar() {
      let sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("active");
      // let navbar1 = document.querySelector(".navbar-collapse");
      // navbar1.classList.remove("show");
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
