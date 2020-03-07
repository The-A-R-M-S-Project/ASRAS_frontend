import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import LoginPage from "../views/LoginPage.vue";
import SignUpPage from "../views/SignUpPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage
  },
  {
    path: "/Login",
    name: "LoginPage",
    component: LoginPage
  },
  {
    path: "/SignUp",
    name: "SignUpPage",
    component: SignUpPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
