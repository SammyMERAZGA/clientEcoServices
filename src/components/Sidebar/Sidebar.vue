<script lang="ts" src="./index.ts"></script>
<style src="./style.css"></style>

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
        <v-img src="../../assets/ecoServices.png"></v-img>
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
      <v-if v-if="this.$store.state.isLog">
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
      </v-if>
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
