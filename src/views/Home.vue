<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
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
      <v-toolbar color="#EEEEEE" flat>
        <v-toolbar-title class="mb-5">Tout</v-toolbar-title>
      </v-toolbar>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card flat class="rounded-lg mx-5">
            <v-list-item three-line>
              <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img src="../assets/logo.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-content class="text-h5">
                Starter Pack - Éco Services
                <v-list-item-subtitle class="mt-1">
                  Ce pack contient un kit éco-responsable avec des produits
                  ménagers écologiques pour votre maison.
                </v-list-item-subtitle>
                <strong class="mt-3"> 29.99€ </strong>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn color="#0A7DB0" block dark class="withoutupercase mb-2">
                <v-icon class="mr-2">mdi-cart</v-icon>
                Ajouter au panier
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card flat class="rounded-lg mx-5 mt-6">
            <v-list-item three-line>
              <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img
                  src="https://adc.bjsolutions.fr/wp-content/uploads/2018/09/energe-verte2.jpg"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content class="text-h5">
                Panneau solaire
                <v-list-item-subtitle class="mt-1">
                  Produisez votre propre électricité verte !
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn color="#FCEF3C" block light class="withoutupercase mb-2">
                <v-icon class="mr-2">fas fa-pen-square</v-icon>
                Faire un devis
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card flat class="rounded-lg mx-5 mt-6">
            <v-list-item three-line>
              <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img src="../assets/6.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content class="text-h5">
                Sac à sandwich en silicone
                <v-list-item-subtitle class="mt-1">
                  Le silicone est fait à base de sable, c'est donc beaucoup
                  mieux que le plastique ! Le sac est facile à nettoyer, va au
                  micro-ondes, au congélateur ainsi qu’au lave-vaisselle.
                </v-list-item-subtitle>
                <strong class="mt-3"> 1.99€ </strong>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn color="#FCEF3C" block light class="withoutupercase mb-2">
                <v-icon class="mr-2">mdi-cart</v-icon>
                Ajouter au panier
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card flat class="rounded-lg mx-5">
            <v-list-item three-line>
              <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img
                  src="https://www.cdiscount.com/pdt2/4/6/6/1/700x700/auc2008150295466/rw/poubelle-avec-couvercle-a-charniere-50-l-noir-et-v.jpg"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content class="text-h5">
                Poubelle écologique
                <v-list-item-subtitle class="mt-1">
                  Poubelle qui a été construite de façon écologique et qui
                  permet un tri de vos déchets.
                </v-list-item-subtitle>
                <strong class="mt-3"> 49.99€ </strong>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn color="#3E894B" block dark class="withoutupercase mb-2">
                <v-icon class="mr-2">mdi-cart</v-icon>
                Ajouter au panier
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card flat class="rounded-lg mx-5 mt-6">
            <v-list-item three-line>
              <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img src="../assets/5.png"></v-img>
              </v-list-item-avatar>
              <v-list-item-content class="text-h5">
                Pack de 3 brosses à dents
                <v-list-item-subtitle class="mt-1">
                  Les brosses à dents compostables en bois sont une très bonne
                  alternative écologique à prix bas. Sa durée de vie est
                  d’environ 3 mois.
                </v-list-item-subtitle>
                <strong class="mt-3"> 8.99€ </strong>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn color="#3E894B" block dark class="withoutupercase mb-2">
                <v-icon class="mr-2">mdi-cart</v-icon>
                Ajouter au panier
              </v-btn>
            </v-card-actions>
          </v-card>
          <v-card flat class="rounded-lg mx-5 mt-6">
            <v-list-item three-line>
              <v-list-item-avatar rounded size="120" color="grey lighten-4">
                <v-img
                  src="https://www.mafuturemaison.fr/dossier/wp-content/uploads/2016/07/maison-ecologique.jpg"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content class="text-h5">
                Isolation écologique
                <v-list-item-subtitle class="mt-1">
                  Les matériaux d'isolation écologiques sont principalement
                  issus de végétaux. Leur production n'entraîne pas de pollution
                  pour l'environnement.
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn color="#3E894B" block dark class="withoutupercase mb-2">
                <v-icon class="mr-2">fas fa-pen-square</v-icon>
                Faire un devis
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import SidebarRight from "../components/SidebarRight.vue";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
    SidebarRight,
  },
})
export default class Home extends Vue {}
</script>

<style>
.v-card-borderme {
  border: 2px solid #11d86a !important;
}
.v-card.borderout {
  border: 1px solid #11bad8 !important;
}
</style>
