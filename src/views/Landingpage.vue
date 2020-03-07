<template>
  <div class="Landing">
    <div class="Background">
      <div class="row">
        <nav :class="nav ? 'nav-colored' : 'nav-transparent'">
          <div class="wrapper">
            <img alt="ASRAS Icon" src="../assets/icon.png" />
            <h2 class="text-black">ASRAS</h2>
            <div class="Links">
              <router-link
                v-for="routes in links"
                v-bind:key="routes.id"
                :to="`${routes.page}`"
                >{{ routes.text }}</router-link
              >
            </div>
            <!-- <router-link to="/LoginPage">Sign In</router-link> |
            <router-link to="/SignUpPage">Sign Up</router-link> -->
          </div>
        </nav>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  components: {},
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Sign In | ",
          page: "/Login"
        },
        {
          id: 1,
          text: "Sign Up",
          page: "/SignUp"
        }
      ],
      nav: true
    };
  },
  methods: {
    onScroll() {}
  }
};
</script>

<style scoped>
.Landing {
  background-image: url("../assets/backgroundimage.jpg");
  height: 100vw;
  background-size: cover;
  overflow-x: hidden;
}
.Background {
  background-color: rgba(65, 51, 87, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vw;
}
nav {
  position: fixed;
  width: 100vw;
  background-color: #555;
  height: 13vh;
}

.wrapper {
  margin-top: 20px;
  display: flex;
}

img {
  margin-left: 40px;
  width: 5%;
  height: 4%;
}

h2 {
  font-size: 35px;
}
.nav-colored {
  background-image: linear-gradient(white, #80d0c7);
}
.nav-transparent {
  background-color: transparent;
}
.Links {
  font-size: 20px;
  margin-left: 900px;
  margin-top: 20px;
}
</style>
