<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
            <router-link @click="sideBar" class="navbar-brand mevnapp" to="">
                <!-- MixPersonal -->
                <img id="logo" src="/assets/images/lMPSG.png" />
                <p class="none" id="logo1"><i class="fas fa-arrow-left"></i> close</p>
                <!-- <span style="font-size: 11px; margin-left: 207px"> being developed</span> -->
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
    methods: {
        sideBar() {
            try {
                let sidebar = document.querySelector(".sidebar");
                sidebar.classList.toggle("active");
                document.getElementById("unicorn").classList.toggle("none");
                document.getElementById("logo").classList.toggle("none");
                document.getElementById("logo1").classList.toggle("none");
                document.getElementById("logoLP").classList.toggle("none");
            } catch (error) {
                // 
            }
        },
        rmSide() {
            let sidebar = document.querySelector(".sidebar");
            sidebar.classList.remove("active");
        },
    },
};
</script>

<style scoped>
.none {
    opacity: 0;
}
.container-fluid {
    height: 50px;
}
nav {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    transition: 1s;
}

img {
    width: 200px;
    margin-left: -75px;
    margin-top: -85px;
    position: fixed;
    transition: all 0.5s ease 0s;
}
#logo1 {
    margin-bottom: 0px;
}
.navbar-nav {
    color: #80bc01;
}
</style>
