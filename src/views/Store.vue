<template>
  <div>
    <h1 class="display-3 text-center mt-5 mb-12">Boutique</h1>
    <h3 class="display-1 text-center mb-12">
      <i class="fas fa-dollar-sign"></i>
      <span class="ml-2"> Nos meilleurs ventes :</span>
    </h3>
    <carousel-3d :controls-visible="true" :clickable="false" :height="300">
      <slide :index="i" :key="i" v-for="(slide, i) in slides">
        <figure>
          <img :src="slide.src" />
          <figcaption>
            <v-btn text color="white">{{ slide.text }}</v-btn>
          </figcaption>
        </figure>
      </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
    Carousel3d,
    Slide,
  },
})
export default class About extends Vue {
  slides = [
    {
      src: "https://i.imgur.com/J6ApS2R.jpeg",
      text: "Pack produits Rainett écologique",
    },
    {
      src: "https://www.jolieplanete.com/306-medium_default/savon-noir-ecologique-1l-produit-d-entretien.jpg",
      text: "Savon noir écologique",
    },
    {
      src: "https://shop.mamieandco.com/365-large_default/kit-menage-ecologique-pret-a-lemploi.jpg",
      text: "Kit ménage écologique",
    },
    {
      src: "https://www.cdiscount.com/pdt2/4/6/6/1/700x700/auc2008150295466/rw/poubelle-avec-couvercle-a-charniere-50-l-noir-et-v.jpg",
      text: "Poubelle écologique",
    },
    {
      src: "https://cdn.shopify.com/s/files/1/0343/3201/6777/products/produit_lessive_shopify_1920x.jpg?v=1615558106",
      text: "Lessive écologique et biodégradable",
    },
  ];
}
</script>
