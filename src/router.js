import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./views/Signup.vue";
import Dashboard from "./views/Dashboard.vue";
import SignIn from "./views/SignIn.vue";
import store from "./store";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "signup",
      name: "signup",
      component: Signup
    },
    {
      path: "signin",
      name: "signin",
      component: SignIn,
      beforeEnter(to, from, next) {
        if (!store.state.idToken) {
          next();
        } else {
          next("/dashboard");
        }
      }
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      beforeEnter(to, from, next) {
        if (store.state.idToken) {
          next();
        } else {
          next("/signin");
        }
      }
    }
  ]
});