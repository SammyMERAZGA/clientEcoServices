<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <Sidebar />
    <SidebarRight />
  </v-app>
</template>

<script lang="ts">
import Sidebar from '../components/Sidebar.vue';
import SidebarRight from '../components/SidebarRight.vue';
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
    Sidebar,
    SidebarRight,
  },
})
export default class App extends Vue {}
</script>
