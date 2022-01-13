<template>
  <div>
    <h1 class="display-3 text-center mt-3 mb-12">À propos</h1>
    <p class="text-center mb-8">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita in sit
      ut esse illum inventore quo repellendus soluta, eaque voluptatem,
      voluptatum omnis. Exercitationem quaerat, atque voluptatum id sed commodi
      nesciunt maxime magnam.
    </p>
    <h3 class="display-1 text-center mt-3 mb-9">
      <i class="fas fa-question-circle"></i>
      <span class="ml-2"> Qui sommes-nous ?</span>
    </h3>
    <p class="text-center mb-8">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
      fuga saepe voluptatibus fugiat harum mollitia!
    </p>
    <h3 class="display-1 text-center mt-3 mb-9">
      <i class="fas fa-bullseye"></i>
      <span class="ml-2"> Notre objectif</span>
    </h3>
    <p class="text-center mb-8">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
      fuga saepe voluptatibus fugiat harum mollitia!
    </p>
    <h3 class="display-1 text-center mt-3 mb-9">
      <i class="fas fa-users"></i>
      <span class="ml-2"> Notre équipe</span>
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
    <h3 class="display-1 text-center mt-15 mb-9">
      <i class="fas fa-envelope"></i>
      <span class="ml-2"> Nous contacter ?</span>
    </h3>
    <p class="text-center mb-8">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
      fuga saepe voluptatibus fugiat harum mollitia!
    </p>
    <v-container class="fill-height mb-8" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12 rounded-xl">
            <v-row>
              <h1 class="text-center mt-5 display-1 mb-5">Formulaire de contact</h1>
              <v-form v-model="valid">
                <v-row class="align-content justify-center">
                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="firstname"
                      :rules="nameRules"
                      :counter="20"
                      label="Prénom"
                      required
                      class="mr-10"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="4">
                    <v-text-field
                      v-model="lastname"
                      :rules="nameRules"
                      :counter="20"
                      label="Nom"
                      required
                      class="ml-10"
                    ></v-text-field>
                  </v-col>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        class="ml-5"
                      ></v-text-field>
                    </v-col>
                    <v-col class="d-flex ml-10" sm="5">
                      <v-select
                        :items="motifs"
                        label="Motif"
                        outlined
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="d-flex" sm="15">
                      <v-textarea
                        label="Votre message"
                        auto-grow
                        outlined
                        rows="7"
                        row-height="25"
                        shaped
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="d-flex justify-center">
                      <v-btn class="mb-10" color="success">
                        Envoyer le message
                        <v-icon right dark> fas fa-paper-plane </v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-row>
              </v-form>
            </v-row>
          </v-card>
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
export default class About extends Vue {
  motifs = [
    "Demande de renseignements",
    "Partenariat",
    "Recrutement",
    "Autres",
  ];

  slides = [
    {
      src: "https://practicaltyping.com/wp-content/uploads/2020/08/gon.png",
      text: "Gon",
    },
    {
      src: "https://i.pinimg.com/474x/4f/1c/2c/4f1c2ce4ed271c2fa266881dff741cbb.jpg",
      text: "Killua",
    },
    {
      src: "https://i.pinimg.com/originals/17/79/c5/1779c5f69ba310be8da6856e80039669.jpg",
      text: "Kurapika",
    },
    {
      src: "https://i.pinimg.com/550x/14/e9/89/14e989620d79a8420906a9d1852b6349.jpg",
      text: "Leolio",
    },
    {
      src: "https://i.pinimg.com/736x/2a/e3/a9/2ae3a9cd7e0fd614f98a24eda358d62f.jpg",
      text: "Née avec un bob",
    },
  ];
}
</script>

<style>
.carousel-3d-container figure {
  margin: 0;
}
.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
.next span,
.prev span {
  color: orange;
}
</style>
