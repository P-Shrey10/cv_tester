import Vue from "vue";
import VueRouter from "vue-router";

import Login from "../views/newLogin.vue";
import Home from "../components/Home.vue";
import Profile from "../components/Profile.vue";
import UploadProfile from "../components/UploadProfile.vue";
import ScheduleInterview from "../components/ScheduleInterview.vue";
import OfferManagement from "../components/OfferManagement.vue";

import EvaluateAssignment from "../components/EvaluateAssignment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/upload-profile",
    name: "upload-profile",
    component: UploadProfile,
  },
  {
    path: "/schedule-interview",
    name: "schedule-interview",
    component: ScheduleInterview,
  },
  {
    path: "/offer-management",
    name: "offer-management",
    component: OfferManagement,
  },

  {
    path: "/evaluate-assignment",
    name: "evaluate-assignment",
    component: EvaluateAssignment,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
