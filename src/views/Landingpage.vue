<template>
  <div class="Landing">
    <div class="Background">
      <div class="row">
        <Navigation />
      </div>
      <div class="carouselCard my">
        <Carousel />
      </div>
      <div class="contactus">
        <ContactUs />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";
import Navigation from "@/components/Navigation";
import ContactUs from "@/components/ContactUS";
import Footer from "@/components/footer.vue";

export default {
  name: "LandingPage",
  components: {
    Navigation,
    Carousel,
    ContactUs,
    Footer
  },
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
  height: 100vh;
  width: 100%;
  background-size: cover;
  overflow-x: hidden;
}
.Background {
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
}

h2 {
  font-size: 35px;
}
</style>
