<template>
  <main>
    <!-- Modal -->
    <div class="modal fade" id="helpModal" tabindex="-1" aria-labelledby="helpModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="helpModalLabel">Help?</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h6>You should not need help yet, it's a very simple application:)</h6>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
            <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="sidebar">
      <ul>
        <!-- <li>
          <router-link to="/" @click="sideBar">
            <span class="icon"><i class="fas fa-home"></i></span>
            <span class="title">Home</span>
          </router-link>
        </li> -->
        <li>
          <a href="/about" @click="sideBar">
            <span class="icon"><i class="fas fa-bullhorn"></i></span>
            <span class="title">About</span>
          </a>
        </li>
        <li>
          <a href="/profile" @click="sideBar">
            <span class="icon"><i class="fas fa-id-badge"></i></span>
            <span class="title">Profile</span>
          </a>
        </li>
        <li>
          <a href="/contact" @click="sideBar">
            <span class="icon"><i class="fas fa-address-card"></i></span>
            <span class="title">Contact</span>
          </a>
        </li>
        <li>
          <router-link to="/project" @click="sideBar">
            <span class="icon"><i class="fas fa-project-diagram"></i></span>
            <span class="title">Project</span>
          </router-link>
        </li>
        <li>
          <router-link to="/server" @click="sideBar">
            <span class="icon"><i class="fas fa-cogs"></i></span>
            <span class="title">Server side</span>
          </router-link>
        </li>
        <li>
          <router-link to="" @click="sideBar" data-bs-toggle="modal" data-bs-target="#helpModal">
            <span class="icon"><i class="fas fa-question"></i></span>
            <span class="title">Help</span>
          </router-link>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    sideBar() {
      let sidebar = document.querySelector(".sidebar");
      sidebar.classList.remove("active");
      // let navbar1 = document.querySelector(".navbar-collapse");
      // navbar1.classList.remove("show");
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  width: 60px;
  height: 100%;
  background: #f8f9fa;
  transition: 1s;
  overflow: hidden;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.sidebar:hover,
.sidebar.active {
  width: 300px;
}

.sidebar > ul {
  position: absolute;
  top: 0;
  left: -10px;
  width: 100%;
}

.sidebar ul li {
  position: relative;
  width: 100%;
  list-style: none;
}

.sidebar ul li a:hover {
  color: #80bc01;
}

.sidebar ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: black;
}

.sidebar ul li a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: start;
}

.sidebar ul li a .icon .fa {
  font-size: 24px;
}

.sidebar ul li a .title {
  position: relative;
  display: block;
  padding: 0 0px;
  height: 60px;
  line-height: 60px;
  text-align: start;
  white-space: nowrap;
}

@media (max-width: 991px) {
  .sidebar {
    left: -60px;
  }
  .sidebar.sidebar.active {
    left: 0px;
    width: 100%;
  }
}
</style>
