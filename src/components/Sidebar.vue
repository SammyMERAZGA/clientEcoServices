<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      color="white"
      mini-variant
      mini-variant-width="90"
    >
      <v-avatar class="d-block text-center mx-auto mt-4" size="60">
        <v-img src="../assets/ecoServices.png"></v-img>
      </v-avatar>
      <v-list flat class="mt-4">
        <v-list-item-group v-model="selectedItem">
          <v-list-item
            v-for="link in isLogin()"
            :key="link.text"
            router
            :to="link.route"
            active-class="border"
          >
            <v-list-item-content>
              <v-icon v-text="link.icon" :color="link.color"></v-icon>
              <v-list-item-subtitle
                align="center"
                v-text="link.text"
                class="mt-3 caption"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-btn
        color="red"
        class="mt-15 ml-3"
        @click="
          logout();
          snackbarLogout = true;
        "
      >
        <v-icon color="white">fas fa-sign-out-alt</v-icon>
      </v-btn>
    </v-navigation-drawer>
    <v-snackbar color="red" v-model="snackbarLogout"
      >Vous avez été déconnecté
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarLogout = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
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
</script>

<style>
.border {
  margin-left: 8px;
  margin-right: 8px;
  background: #a5d6a7;
  border-radius: 20px;
  text-decoration: none;
}

.v-list-item-group .v-list-item--active {
  color: white !important;
}

.them--light.v-list-item--active.v-list-item__subtitle,
.theme--light.v-list-item .v-list-item__action-text {
  color: white !important;
}
</style>
