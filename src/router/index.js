import Vue from "vue";
import VueRouter from "vue-router";
import Timetable from "../views/TimeTable.vue";
import LandingPage from "../views/LandingPage.vue";
import LoginPage from "../views/LoginPage.vue";
import SignUpPage from "../views/SignUpPage.vue";
import AdminPage from "../views/admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage
  },
  {
    path: "/timetable",
    name: "timetable",
    component: Timetable
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
  },
  {
    path: "/Admin",
    name: "AdminPage",
    component: AdminPage
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
