<template>
  <div class="Landing">
    <div class="Background">
      <div class="row">
        <nav :class="nav ? 'nav-colored' : 'nav-transparent'">
          <div class="wrapper">
            <img alt="ASRAS Icon" src="../assets/icon.png" />
            <h2 class="text-white">ASRAS</h2>
          </div>
        </nav>
      </div>

      <div class="signin-card">
        <SigninCard />
      </div>
      <div class="system-info">
        <SystemInfo />
      </div>
    </div>
  </div>
</template>

<script>
import SigninCard from "@/components/SigninCard";
import SystemInfo from "@/components/systemInfo";

export default {
  name: "Landingpage",
  components: {
    SigninCard,
    SystemInfo
  },
  data() {
    return {
      nav: false
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
  width: 100%;
  background-color: #555;
  height: 15vh;
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
  background-image: linear-gradient(#13547a, #80d0c7);
}
.nav-transparent {
  background-color: transparent;
}
.signin-card {
  display: flexbox;
  justify-content: center;
  margin: 7vw;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
