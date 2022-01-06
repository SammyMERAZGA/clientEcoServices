import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Store from "../views/Store.vue";
import Guides from "../views/Guides.vue";
import Services from "../views/Services.vue";
import Account from "../views/Account.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
    {
    path: "/store",
    name: "Store",
    component: Store,
  },
    {
    path: "/guides",
    name: "Guides",
    component: Guides,
  },
    {
    path: "/services",
    name: "Services",
    component: Services,
  },
    {
    path: "/account",
    name: "Account",
    component: Account,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
