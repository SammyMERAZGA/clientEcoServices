<template>
  <v-navigation-drawer app color="white" right width="290">
    <v-list subheader two-line class="mt-1">
      <v-list-item>
        <v-list-item-avatar rounded>
          <v-img
            src="https://i.pinimg.com/originals/dc/0f/e9/dc0fe9fe1e29ab605c9211ae8972c379.jpg"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-subtitle>Développeur Full Stack</v-list-item-subtitle>
          <v-list-item-title>Sammy MERAZGA</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-badge bordered overlap color="blue" dot>
            <v-icon>far fa-bell</v-icon>
          </v-badge>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider class="mt-1 mb-8"></v-divider>
    <v-icon id="cartIcon">fas fa-shopping-cart</v-icon>
    <strong class="ml-3">Panier</strong>
    <v-list subheader two-line class="mt-1">
      <v-list-item>
        <v-list-item-avatar rounded color="grey lighten-4">
          <v-img
            src="https://p8.storage.canalblog.com/86/21/1418349/115699659.jpg"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-2 mt-6">Starter Pack Ecologie</v-list-item-title>
          <v-list-item-subtitle>x1
            <v-btn plain color="#11d86a" small>Détail
              <v-icon right>mdi-pencil</v-icon>
            </v-btn>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class SidebarRight extends Vue {}
</script>

<style>
.v-card.borderme {
  border: 2px solid #01bfee !important;
}

.col-12 {
  padding: 5px !important;
}

.v-btn.widthoutupercase {
  text-transform: none !important;
}

#cartIcon {
  margin-left: 35%;
}
</style>
