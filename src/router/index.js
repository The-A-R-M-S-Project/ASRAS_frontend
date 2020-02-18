import Vue from "vue";
import VueRouter from "vue-router";
import Landingpage from "../views/Landingpage.vue";
import SignUpPage from "../views/SignUpPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landingpage",
    component: Landingpage
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
