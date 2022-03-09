<script lang="ts" src="./index.ts"></script>
<style src="./style.css"></style>

<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <div class="container" id="animTitle">
      <span class="text1">Éco Services</span>
      <img src="../../assets/logoEco.png" alt="logo" class="logo" />
      <v-divider class="mt-10"></v-divider>
    </div>
    <v-container>
      <v-item-group mandatory class="mt-n1">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="2" v-for="page in pages" :key="page.id">
              <v-hover>
                <v-card
                  class="f-flex align-center rounded-lg mx-2"
                  elevation="5"
                  height="180"
                  flat
                  slot-scope="{ hover }"
                  :class="`${hover ? 'class1' : 'class2'}`"
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img
                              :src="page.image"
                              max-height="90"
                              max-width="90"
                            ></v-img>
                          </div>
                          <v-list-item-subtitle class="caption mt-4 ml-8">
                            {{ page.name }}
                            <v-btn icon :color="page.iconColor" :to="page.url">
                              <v-icon small class="mb-1 mr-3">{{
                                page.icon
                              }}</v-icon>
                            </v-btn>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <v-carousel
        hide-delimiters
        cycle
        class="mt-10"
        interval="2000"
        height="300"
      >
        <v-carousel-item
          v-for="(picture, pic) in pictures"
          :key="pic"
          :src="picture.src"
        ></v-carousel-item>
      </v-carousel>
    </v-container>

    <v-card class="mx-auto mt-10 elevation-6" max-width="400">
      <v-img
        height="250px"
        src="https://ecopandashop.com/wp-content/uploads/2020/02/objectif-zero-dechet-eco-panda.jpg"
      >
      </v-img>

      <v-card-subtitle class="text-center text-decoration-underline">
        Objectif zéro déchet
      </v-card-subtitle>

      <v-card-text class="text--primary text-center">
        <div>
          Il s'agit d'un mouvement de protection de l'environnement qui vise à
          réduire le gaspillage de ressources, la quantité déchets émis et leur
          toxicité
        </div>

        <div class="mt-5">
          Nous vous proposons plusieurs astuces pour que vous nous aider à
          atteindre cet objectif !
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn id="astucesBtn" color="green" text to="/zeroDechet"> Astuces </v-btn>
      </v-card-actions>
    </v-card>
    <Footer />
  </v-app>
</template>
