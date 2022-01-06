<template>
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
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          active-class="border"
        >
          <v-list-item-content>
            <v-icon v-text="link.icon"></v-icon>
            <v-list-item-subtitle
              align="center"
              v-text="link.text"
              class="mt-3 caption"
            ></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div id="deconnexion">
      <v-icon>fas fa-sign-out-alt</v-icon><br />
      <span class="caption">Déconnexion</span>
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Sidebar extends Vue {
  selectedItem = 0;
  drawer = null;
  links = [
    { icon: "fas fa-home", text: "Accueil", route: "/" },
    { icon: "fas fa-info-circle", text: "À propos", route: "/about" },
    { icon: "fas fa-shopping-cart", text: "Boutique", route: "/store" },
    { icon: "fas fa-book", text: "Guides", route: "/guides" },
    { icon: "fas fa-leaf", text: "Services", route: "/services" },
    { icon: "fas fa-user", text: "Compte", route: "/account" },
  ];
}
</script>

<style>
.border {
  margin-left: 8px;
  margin-right: 8px;
  background: #11d86a;
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

#deconnexion {
  position: absolute;
  bottom: 20px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
