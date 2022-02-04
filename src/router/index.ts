import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Store from "../views/Store.vue";
import Guides from "../views/Guides.vue";
import Services from "../views/Services.vue";
import Account from "../views/Account.vue";
import Login from "../views/Login.vue";
import CreditCard from "../views/CreditCard.vue";
import Paypal from "../views/Paypal.vue";
import BackOffice from "../views/BackOffice.vue";
// Store Category
import HomeProducts from "../views/StoreCategory/HomeProducts.vue";
import Others from "../views/StoreCategory/Others.vue";
import Pack from "../views/StoreCategory/Pack.vue";
import ProductCategory from '../views/StoreCategory/ProductCategory.vue';

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
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/creditCard",
    name: "CreditCard",
    component: CreditCard,
  },
  {
    path: "/paypal",
    name: "Paypal",
    component: Paypal,
  },
  {
    path: "/backOffice",
    name: "BackOffice",
    component: BackOffice,
  },
  {
    path: "/store/homeProducts",
    name: "HomeProducts",
    component: HomeProducts,
  },
  {
    path: "/store/others",
    name: "Others",
    component: Others,
  },
  {
    path: "/store/pack",
    name: "Pack",
    component: Pack,
  },
  {
    path: "/store/productCategory",
    name: "ProductCategory",
    component: ProductCategory,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
