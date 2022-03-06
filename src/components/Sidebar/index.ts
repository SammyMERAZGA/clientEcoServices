import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Sidebar extends Vue {
  snackbarLogout = false;

  list: string[] = [];

  selectedItem = 0;
  drawer = null;

  linksGuest = [
    {
      icon: "fas fa-home",
      text: "Accueil",
      route: "/",
      color: "green darken-3",
    },
    {
      icon: "fas fa-info-circle",
      text: "À propos",
      route: "/about",
      color: "green darken-3",
    },
    {
      icon: "fas fa-shopping-cart",
      text: "Boutique",
      route: "/store",
      color: "green darken-3",
    },
    {
      icon: "fas fa-book",
      text: "Guides",
      route: "/guides",
      color: "green darken-3",
    },
    {
      icon: "fas fa-leaf",
      text: "Services",
      route: "/services",
      color: "green darken-3",
    },
    {
      icon: "fas fa-user",
      text: "Connexion",
      route: "/login",
      color: "green darken-3",
    },
  ];

  linksUser = [
    {
      icon: "fas fa-home",
      text: "Accueil",
      route: "/",
      color: "green darken-3",
    },
    {
      icon: "fas fa-info-circle",
      text: "À propos",
      route: "/about",
      color: "green darken-3",
    },
    {
      icon: "fas fa-shopping-cart",
      text: "Boutique",
      route: "/store",
      color: "green darken-3",
    },
    {
      icon: "fas fa-book",
      text: "Guides",
      route: "/guides",
      color: "green darken-3",
    },
    {
      icon: "fas fa-leaf",
      text: "Services",
      route: "/services",
      color: "green darken-3",
    },
    {
      icon: "fas fa-user",
      text: "Mon compte",
      route: "/account",
      color: "green darken-3",
    },
    {
      icon: "fas fa-user-secret",
      text: "Back-Office",
      route: "/backOffice",
      color: "blue darken-3",
    },
  ];

  isLogin(): unknown[] {
    if (this.$store.state.isLog) {
      return this.linksUser;
    } else {
      return this.linksGuest;
    }
  }
}