<template>
  <div class="Login">
    <div class="Background">
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
  name: "LoginPage",
  components: {
    SigninCard,
    SystemInfo
  },
  data() {
    return {
      nav: true
    };
  },
  methods: {
    onScroll() {}
  }
};
</script>

<style scoped>
.Login {
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
