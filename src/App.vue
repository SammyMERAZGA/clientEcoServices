<template>
  <v-app id="app">
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from "vue-class-component";

@Component({
  components: {
  }
})

  export default class App extends Vue {}

</script>