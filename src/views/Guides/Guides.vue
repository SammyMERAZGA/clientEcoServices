<script lang="ts" src="./index.ts"></script>
<style src="./style.css"></style>

<template>
  <div>
    <h1 class="display-1 text-center mt-5">Guides</h1>
    <p class="text-center">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
      reiciendis id nam molestias odit alias. Quam quos mollitia pariatur ad?
    </p>
    <v-divider class="ml-15 mr-15 mt-5"></v-divider>
    <v-row>
      <v-col cols="12" md="3" v-for="guide in guides" :key="guide.id">
        <v-card class="elevation-5 rounded-xl ml-5 mt-5 mr-5">
          <v-row>
            <v-card-text class="text-center">
              <h1 class="overline">{{ guide.title }}</h1>
              <img height="150" :src="guide.image" />

              <v-row justify="center" class="mt-5 mb-2">
                    <v-btn
                      color="green accent-3"
                      light
                      depressed
                      v-bind="attrs"
                      v-on="on"
                      width="300px"
                      @click="idGuide = guide.id"
                    >
                      Consulter le guide
                      <v-icon right dark> fas fa-receipt </v-icon>
                    </v-btn>
                <v-dialog v-if="idGuide == guide.id" v-model="dialog" persistent width="600px">
                  <v-card>
                    <v-card-title class="justify-center text-center">
                      <span class="text-h5">{{ guide.title }}</span>
                    </v-card-title>
                    <v-card-text>
                      {{ guide.description }}
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="red darken-1" text @click="idGuide = 0">
                        Retour
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>

            </v-card-text>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>