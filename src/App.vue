<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
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