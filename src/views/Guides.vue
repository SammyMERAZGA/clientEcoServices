<template>
  <div>
    <h1 class="display-1 text-center mt-5">Guides</h1>
    <p class="text-center">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
      reiciendis id nam molestias odit alias. Quam quos mollitia pariatur ad?
    </p>
    <v-divider class="ml-15 mr-15 mt-5"></v-divider>
    <v-row>
      <v-col v-for="guide in guides" :key="guide.id" cols="12" md="3">
        <v-card class="elevation-12 rounded-xl ml-5 mt-5 mr-5">
          <v-row>
            <v-card-text class="text-center">
              <h1 class="overline">{{ guide.title }}</h1>
              <img height="150" :src="guide.image" />

              <v-row justify="center" class="mt-5 mb-2">
                <v-dialog v-model="dialog" width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="green accent-3"
                      light
                      depressed
                      v-bind="attrs"
                      v-on="on"
                      width="300px"
                    >
                      Consulter le guide
                      <v-icon right dark> fas fa-receipt </v-icon>
                    </v-btn>
                  </template>
                  <v-card v-for="guide in guides" :key="guide.id">
                    <v-card-title class="justify-center text-center">
                      <span class="text-h5">{{ guide.title }}</span>
                    </v-card-title>
                    <v-card-text>
                      {{ guide.description }}
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="red darken-1" text @click="dialog = false">
                        Retour
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-row>
            </v-card-text>
          </v-row>
        </v-card>
      </v-col></v-row
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
import { Guide } from "../types/Guide";

@Component
export default class Guides extends Vue {
  dialog = false;

  guides: Guide[] = [];

  async allGuides(): Promise<void> {
    this.guides = (await axios.get(`/api/guides`)).data as Guide[];
  }

  mounted(): void {
    this.allGuides();
  }
}
</script>
