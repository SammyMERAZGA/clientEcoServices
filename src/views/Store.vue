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
    <v-row>
      <v-col cols="12" md="11">
        <v-text-field
          label="Recherchez un produit"
          prepend-icon="fas fa-search"
          color="#11bad8"
          class="ml-9 mb-8"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-container class="ml-16">
      <v-row>
        <v-col cols="12" md="3" class="mb-15">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heigth="250" align="center">
              <v-card-actions color="#11bad8">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>fas fa-hand-sparkles</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img
                src="https://i.imgur.com/J6ApS2R.jpeg"
                width="150"
                height="150"
              ></v-img>

              <v-card-text class="black--text">
                Pack produits Rainett écologique
              </v-card-text>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 100%"
                >
                  <v-btn outlined color="white"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn
                absolute
                color="#11d86a"
                class="white--text"
                fab
                large
                left
                top
              >
                <h1>1</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heigth="250" align="center">
              <v-card-actions color="#11bad8">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>fas fa-bath</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img
                src="https://hotelbrand.fr/wp-content/uploads/2020/08/AdobeStock_319683231-copie.jpg"
                width="150"
                height="150"
              ></v-img>

              <v-card-text class="black--text">
                Kit de toilettes écologique
              </v-card-text>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 100%"
                >
                  <v-btn outlined color="white"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn
                absolute
                color="#11d86a"
                class="white--text"
                fab
                large
                left
                top
              >
                <h1>2</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heigth="250" align="center">
              <v-card-actions color="#11bad8">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>fas fa-archive</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img
                src="https://www.businessofeminin.com/wp-content/uploads/2020/01/iStock-1142586251-scaled.jpg"
                width="150"
                height="150"
              ></v-img>

              <v-card-text class="black--text">
                Box quotidien écologique
              </v-card-text>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 100%"
                >
                  <v-btn outlined color="white"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn
                absolute
                color="#11d86a"
                class="white--text"
                fab
                large
                left
                top
              >
                <h1>3</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heigth="250" align="center">
              <v-card-actions color="#11bad8">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>fas fa-hands-wash</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img
                src="https://www.jolieplanete.com/306-medium_default/savon-noir-ecologique-1l-produit-d-entretien.jpg"
                width="150"
                height="150"
              ></v-img>

              <v-card-text class="black--text">
                Savon noir écologique
              </v-card-text>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 100%"
                >
                  <v-btn outlined color="white"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn
                absolute
                color="#11d86a"
                class="white--text"
                fab
                large
                left
                top
              >
                <h1>4</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heigth="250" align="center">
              <v-card-actions color="#11bad8">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>fas fa-soap</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img
                src="https://cdn.shopify.com/s/files/1/0343/3201/6777/products/produit_lessive_shopify_1920x.jpg?v=1615558106"
                width="150"
                height="150"
              ></v-img>

              <v-card-text class="black--text">
                Lessive écologique et biodégradable
              </v-card-text>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 100%"
                >
                  <v-btn outlined color="white"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn
                absolute
                color="#11d86a"
                class="white--text"
                fab
                large
                left
                top
              >
                <h1>5</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heigth="250" align="center">
              <v-card-actions color="#11bad8">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>fas fa-sink</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img
                src="https://cdn.shopify.com/s/files/1/0234/8803/6960/products/kit-decouverte-linge-vaisselle-produit-menager-ecologique-les-petits-bidons-717546_800x.jpg?v=1638563721"
                width="150"
                height="150"
              ></v-img>

              <v-card-text class="black--text">
                Kit vaisselle écologique
              </v-card-text>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 100%"
                >
                  <v-btn outlined color="white"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn
                absolute
                color="#11d86a"
                class="white--text"
                fab
                large
                left
                top
              >
                <h1>6</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heigth="250" align="center">
              <v-card-actions color="#11bad8">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>fas fa-recycle</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img
                src="https://shop.mamieandco.com/365-large_default/kit-menage-ecologique-pret-a-lemploi.jpg"
                width="150"
                height="150"
              ></v-img>

              <v-card-text class="black--text">
                Kit ménage écologique
              </v-card-text>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 100%"
                >
                  <v-btn outlined color="white"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn
                absolute
                color="#11d86a"
                class="white--text"
                fab
                large
                left
                top
              >
                <h1>7</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-heigth="250" align="center">
              <v-card-actions color="#11bad8">
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>fas fa-trash</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img
                src="https://www.cdiscount.com/pdt2/4/6/6/1/700x700/auc2008150295466/rw/poubelle-avec-couvercle-a-charniere-50-l-noir-et-v.jpg"
                width="150"
                height="150"
              ></v-img>

              <v-card-text class="black--text">
                Poubelle écologique
              </v-card-text>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out blue v-card--reveal display-3 white--text"
                  style="height: 100%"
                >
                  <v-btn outlined color="white"> Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn
                absolute
                color="#11d86a"
                class="white--text"
                fab
                large
                left
                top
              >
                <h1>8</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
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
export default class Store extends Vue {
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

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
