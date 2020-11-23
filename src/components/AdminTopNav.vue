<template>
  <nav class="navbar navbar-expand-lg navbar-light mynav">
    <a class="navbar-brand ml-5" href="#">
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
            <router-link to="/">HOME</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link">
            <router-link to="/">SCHEDULE</router-link>
          </a>
        </li>
      </ul>
      <li>
        <a class="logout" style="float: right">
          <router-link to="/">LOGOUT</router-link>
        </a>
      </li>
    </div>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav"></ul>
    </div>
  </nav>
</template>
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
<script>
export default {
  name: "AdminTopNav"
};
</script>
