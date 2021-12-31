<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <Sidebar />
    <SidebarRight />
    <v-container>
      <v-toolbar color="rgba(0,0,0,0)" flat>
        <v-toolbar-title class="mt-n3"
          >Choisissez une catégorie</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-text-field
          label="Cherchez un produit ou un service..."
          class="mt-5"
          color="green"
          filled
          append-icon="mdi-magnify"
          dense
          solo
          flat
          background-color="grey lighten-4"
        ></v-text-field>
      </v-toolbar>
      <v-item-group mandatory class="mt-n1">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#F6EFEF' : 'white'"
                  :class="active ? 'borderme' : 'borderout'"
                  class="f-flex align-center rounded-lg mx-2"
                  dark
                  height="140"
                  @click="toggle"
                  flat
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img
                              src="../assets/ecoServices.png"
                              max-height="90"
                              max-width="90"
                              contain
                            ></v-img>
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'green--text' : 'black--text'"
                            class="caption mt-4"
                          >
                            Tout
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#F6EFEF' : 'white'"
                  :class="active ? 'borderme' : 'borderout'"
                  class="f-flex align-center rounded-lg mx-2"
                  dark
                  height="140"
                  @click="toggle"
                  flat
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img
                              src="../assets/2.png"
                              max-height="90"
                              max-width="90"
                              contain
                            ></v-img>
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'green--text' : 'black--text'"
                            class="caption mt-4"
                          >
                            Services
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#F6EFEF' : 'white'"
                  :class="active ? 'borderme' : 'borderout'"
                  class="f-flex align-center rounded-lg mx-2"
                  dark
                  height="140"
                  @click="toggle"
                  flat
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img
                              src="../assets/3.png"
                              max-height="90"
                              max-width="90"
                              contain
                            ></v-img>
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'green--text' : 'black--text'"
                            class="caption mt-4"
                          >
                            Produits
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
                        <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#F6EFEF' : 'white'"
                  :class="active ? 'borderme' : 'borderout'"
                  class="f-flex align-center rounded-lg mx-2"
                  dark
                  height="140"
                  @click="toggle"
                  flat
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img
                              src="../assets/4.png"
                              max-height="90"
                              max-width="90"
                              contain
                            ></v-img>
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'green--text' : 'black--text'"
                            class="caption mt-4"
                          >
                            Packs
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Sidebar from "../components/Sidebar.vue";
import SidebarRight from "../components/SidebarRight.vue";
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

<style>
.v-card-borderme {
  border: 2px solid #11d86a !important;
}
.v-card.borderout {
  border: 1px solid #11bad8 !important;
}
</style>
