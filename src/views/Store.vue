<template>
  <div>
    <h1 class="display-1 text-center mt-5">Boutique</h1>
    <h3 class="subtitle-1 text-center mt-3">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, quasi
      ullam omnis vitae corporis explicabo.
    </h3>

    <v-text-field
      type="search"
      class="ml-5 mr-5 mt-5"
      label="Chercher un produit"
      append-icon="fas fa-search"
      filled
      dense
    ></v-text-field>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Store extends Vue {}
</script>

<style scoped></style>
