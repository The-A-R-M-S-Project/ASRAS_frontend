<template>
  <nav class="navbar navbar-expand-lg navbar-light mynav">
    <a class="navbar-brand" href="#">
      <img
        src="../assets/icon.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt="ASRAS"
      />
      ASRAS
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/Login">Login</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/Signup">Signup</router-link>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation"
};
</script>

<style scoped>
.mynav {
  background-color: whitesmoke;
  width: 100%;
  position: fixed;
}
li {
  display: inline-block;
}
</style>
