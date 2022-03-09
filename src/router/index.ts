import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "../plugins/store";
// Pages
import Home from "../views/Home/Home.vue";
import About from "../views/About/About.vue";
import Store from "../views/Store/Store.vue";
import Guides from "../views/Guides/Guides.vue";
import Services from "../views/Services/Services.vue";
import Account from "../views/Account/Account.vue";
import Login from "../views/Login/Login.vue";
import BackOffice from "../views/BackOffice/BackOffice.vue";
import ZeroWaste from "../views/ZeroWaste/ZeroWaste.vue";
// Store Category
import HomeProducts from "../views/StoreCategory/HomeProducts/HomeProducts.vue";
import Others from "../views/StoreCategory/Others/Others.vue";
import Pack from "../views/StoreCategory/Packs/Pack.vue";
import ProductCategory from "../views/StoreCategory/Products/ProductCategory.vue";
// Footer Links
import LegalNotice from "../views/FooterLinks/LegalNotice/LegalNotice.vue";
import DeliveryInformation from "../views/FooterLinks/DeliveryInformation/DeliveryInformation.vue";
import GeneralConditions from "../views/FooterLinks/GeneralConditions/GeneralConditions.vue";
import DataProtection from "../views/FooterLinks/DataProtection/DataProtection.vue";
import Cookies from "../views/FooterLinks/Cookies/Cookies.vue";
import Suppliers from "../views/FooterLinks/Suppliers/Suppliers.vue";
// Paypal Buttons
import PaypalButton from "../components/PaypalButtons.vue";

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
    // beforeEnter: (to, from, next) => {
    //   if (store.state.isLog == false) {
    //     next("/login");
    //   } else {
    //     next();
    //   }
    // },
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
    beforeEnter: (to, from, next) => {
      if (store.state.isLog == false) {
        next("/login");
      } else {
        next();
      }
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/backOffice",
    name: "BackOffice",
    component: BackOffice,
    // beforeEnter: (to, from, next) => {
    //   if (store.state.isLog == false) {
    //     next("/login");
    //   } else {
    //     next();
    //   }
    // },
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
  },
  {
    path: "/buttons",
    name: "PaypalButton",
    component: PaypalButton,
  },
  {
    path: "/mentionsLegales",
    name: "LegalNotice",
    component: LegalNotice,
  },
  {
    path: "/informationsLivraison",
    name: "DeliveryInformation",
    component: DeliveryInformation,
  },
  {
    path: "/conditionsGenerales",
    name: "GeneralConditions",
    component: GeneralConditions,
  },
  {
    path: "/donnees",
    name: "DataProtection",
    component: DataProtection,
  },
  {
    path: "/cookies",
    name: "Cookies",
    component: Cookies,
  },
  {
    path: "/fournisseurs",
    name: "Suppliers",
    component: Suppliers,
  },
  {
    path: "/zeroDechet",
    name: "ZeroWaste",
    component: ZeroWaste,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
