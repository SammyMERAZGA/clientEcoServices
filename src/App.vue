<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <Sidebar />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Sidebar from "./components/Sidebar.vue";
import Footer from "./components/Footer.vue";

@Component({
  components: {
    Sidebar,
    Footer,
  },
})
export default class App extends Vue {}
</script>
