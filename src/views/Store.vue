<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SidebarRight />
    <v-container>
      <v-toolbar color="rgba(0,0,0,0)" flat>
        <v-toolbar-title class="mt-n3"
          >Choisissez une catégorie</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-toolbar placeholder="Rechercher..." shaped flat outlined>
          <v-autocomplete class="mt-4" clearable :items="searchProducts" label="Rechercher un produit..." append-icon="fas fa-search"></v-autocomplete>
        </v-toolbar>
        <!-- <v-text-field
          label="Cherchez un produit..."
          class="mt-5"
          color="green"
          filled
          append-icon="mdi-magnify"
          dense
          solo
          flat
          background-color="grey lighten-4"
        ></v-text-field> -->
      </v-toolbar>
      <v-item-group mandatory class="mt-4">
        <v-container>
          <v-row justify="center" no-gutters>
            <v-col
              v-for="category in categories"
              :key="category.id"
              cols="12"
              md="2"
              sm="4"
            >
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#b2ebc3' : 'white'"
                  :class="active ? 'borderme' : 'borderout'"
                  class="f-flex align-center rounded-lg mx-2"
                  dark
                  height="160"
                  @click="toggle"
                  flat
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img
                              max-height="90"
                              max-width="90"
                              contain
                              :src="category.image"
                            ></v-img>
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'green--text' : 'black--text'"
                            class="caption mt-4"
                          >
                            {{ category.name }}
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
        <v-col cols="12" sm="6" v-for="product in products" :key="product.id">
          <v-card class="rounded-lg">
            <v-list-item three-line>
              <v-img
                class="mr-8 mb-5 mt-5"
                max-width="200"
                height="200"
                :src="product.image"
              >
              </v-img>
              <v-list-item-content class="text-h5">
                {{ product.name }}
                <v-list-item-subtitle class="mt-1">
                  <v-icon>{{ product.iconCategory }}</v-icon>
                  <span class="ml-2"> {{ product.category }}</span>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="mt-1">
                  {{ product.description }}
                </v-list-item-subtitle>
                <strong class="mt-3"> {{ product.price }} </strong>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn color="#12A4E4" block dark class="withoutupercase mb-2">
                <v-icon class="mr-2">mdi-cart</v-icon>
                Ajouter au panier
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- SIDEBAR RIGHT -->
    <v-navigation-drawer app color="white" right width="290">
      <v-list subheader two-line class="mt-1">
        <v-list-item>
          <v-list-item-avatar rounded>
            <v-img
              src="https://i.pinimg.com/originals/dc/0f/e9/dc0fe9fe1e29ab605c9211ae8972c379.jpg"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Sammy MERAZGA</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider class="mt-1 mb-8"></v-divider>
      <v-icon class="ml-5" id="cartIcon">fas fa-shopping-cart</v-icon>
      <strong class="ml-3">Panier</strong>
      <v-list subheader two-line class="mt-1">
        <v-list-item>
          <v-list-item-avatar rounded color="grey lighten-4">
            <v-img
              src="https://practicaltyping.com/wp-content/uploads/2020/08/gon.png"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="subtitle-2 mt-6"
              >Starter Pack Ecologie</v-list-item-title
            >
            <v-list-item-subtitle
              >x1
              <v-btn rounded plain color="red" small>
                <v-icon>fas fa-minus-circle</v-icon>
              </v-btn>
              <v-btn rounded plain color="green" small>
                <v-icon>fas fa-plus-circle</v-icon>
              </v-btn>
            </v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action class="caption">29.99€</v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider class="mx-4"></v-divider>
      <v-toolbar color="rgba(0,0,0,0)" flat>
        <strong>Total :</strong><v-spacer></v-spacer><strong>79.98€</strong>
      </v-toolbar>
      <v-divider class="mx-4 mb-5"></v-divider>
      <strong class="ml-5">Méthode de paiement :</strong>
      <v-item-group mandatory class="mt-n1">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="4">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  color="#F6EFEF"
                  :class="active ? 'borderme' : ''"
                  class="d-flex align-center rounded-lg mt-3"
                  dark
                  height="70"
                  @click="toggle"
                  flat
                >
                  <v-row>
                    <v-col cols="12" md="12">
                      <v-list-item three-line class="text-center mt-1">
                        <v-list-item-content>
                          <div>
                            <v-icon :color="active ? '#11d86a' : 'black'"
                              >fab fa-paypal</v-icon
                            >
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'green--text' : 'black--text'"
                            class="mt-n2 mb-3 caption"
                            >PayPal</v-list-item-subtitle
                          >
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="4">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  color="#F6EFEF"
                  :class="active ? 'borderme' : ''"
                  class="d-flex align-center rounded-lg mt-3"
                  dark
                  height="70"
                  @click="toggle"
                  flat
                >
                  <v-row>
                    <v-col cols="12">
                      <v-list-item three-line class="text-center mb-2">
                        <v-list-item-content>
                          <div>
                            <v-icon :color="active ? '#11d86a' : 'black'"
                              >fas fa-credit-card</v-icon
                            >
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'green--text' : 'black--text'"
                            class="mt-n4 caption"
                            >CB</v-list-item-subtitle
                          >
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
    </v-navigation-drawer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {},
})
export default class Store extends Vue {
  cart = [];
  searchKey = "";

  categories = [
    {
      id: 1,
      name: "Tout",
      icon: "mdi-view-dashboard",
      image:
        "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1502144483/wnghdseei6r0502f5her.png",
    },
    {
      id: 2,
      name: "Maison",
      icon: "fas fa-home",
      image: "https://assets.wprock.fr/emoji/joypixels/512/1f3e0.png",
    },
    {
      id: 3,
      name: "Extérieur",
      icon: "fas fa-tree",
      image:
        "https://www.haas-avocats.com/wp-content/uploads/2016/07/marque-maisondumonde-gifi-haas-avocats.jpg",
    },
    {
      id: 4,
      name: "Packs",
      icon: "fas fa-box-open",
      image:
        "https://www.racenightshop.co.uk/wp-content/uploads/2019/01/race-night-start-up-package.-ideal-for-new-operators-349-p.png",
    },
  ];

  products = [
    {
      id: 1,
      name: "Starter Pack - Éco Services",
      category: "Packs",
      iconCategory: "fas fa-box-open",
      description: "lorem ipsum dolor",
      price: "29.99€",
      image: "https://practicaltyping.com/wp-content/uploads/2020/08/gon.png",
    },
    {
      id: 2,
      name: "Pack de 3 brosses à dents",
      category: "Packs",
      iconCategory: "fas fa-box-open",
      description: "lorem ipsum dolor",
      price: "8.99€",
      image:
        "https://i.pinimg.com/474x/4f/1c/2c/4f1c2ce4ed271c2fa266881dff741cbb.jpg",
    },
    {
      id: 3,
      name: "Poubelle écologique",
      category: "Extérieur",
      iconCategory: "fas fa-tree",
      description: "lorem ipsum dolor",
      price: "49.99€",
      image:
        "https://i.pinimg.com/originals/17/79/c5/1779c5f69ba310be8da6856e80039669.jpg",
    },
    {
      id: 4,
      name: "Chaise en bois écologique",
      category: "Maison",
      iconCategory: "fas fa-home",
      description: "lorem ipsum dolor",
      price: "39.99€",
      image:
        "https://i.pinimg.com/550x/14/e9/89/14e989620d79a8420906a9d1852b6349.jpg",
    },
  ];

  searchProducts = ["Starter Pack - Éco Services", "Poubelle écologique", "Chaise en bois écologique", "Pack de 3 brosses à dents"];
}
</script>

<style>
.v-card-borderme {
  border: 2px solid #11d86a !important;
}
.v-card.borderout {
  border: 1px solid #11bad8 !important;
}
</style>
