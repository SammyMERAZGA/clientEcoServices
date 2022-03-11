<script lang="ts" src="./index.ts"></script>
<style src="./style.css"></style>

<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SidebarRight />
    <v-container>
      <div class="d-flex">
        <v-autocomplete
          clearable
          :items="searchProducts"
          label="Rechercher un produit..."
          append-icon="fas fa-search"
          solo
          class="mt-5"
        ></v-autocomplete>
        <v-btn
          id="btnStore"
          @click.stop="drawer = true"
          class="align-self-center ml-10"
          elevation="5"
          fab
          icon
          large
          outlined
          ><v-icon>mdi-cart</v-icon></v-btn
        >
      </div>
      <v-row no-gutters justify="center" class="ml-15 mt-3">
        <v-col
          cols="12"
          sm="2"
          class="mt-5"
          v-for="category in categories"
          :key="category.name"
        >
          <h1 class="overline" id="titleCategory">{{ category.name }}</h1>
          <v-btn
            :color="category.color"
            elevation="5"
            fab
            icon
            large
            outlined
            class="mb-2 mt-5"
            :to="category.url"
            ><v-icon>{{ category.icone }}</v-icon></v-btn
          >
        </v-col>
      </v-row>
      <v-toolbar color="#EEEEEE" flat>
        <v-toolbar-title class="mb-5 mt-10 body-1">Tout</v-toolbar-title>
      </v-toolbar>
      <v-row>
        <v-col cols="12" sm="4" v-for="product in products" :key="product.id">
          <v-card class="rounded-lg" elevation="8">
            <v-list-item three-line>
              <v-img
                class="mr-8 mb-5 mt-5"
                max-width="200"
                height="200"
                :src="product.image"
              >
              </v-img>
              <v-list-item-content class="body-1">
                {{ product.name }}
                <!-- <v-list-item-subtitle class="mt-1">
                  <v-icon>{{ product.category.icone }}</v-icon>
                  <span class="ml-2"> {{ product.category.name }}</span>
                </v-list-item-subtitle> -->
                <strong class="mt-3"> {{ product.price }} € </strong>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-btn
                color="green darken-1"
                icon
                dark
                @click="idProduit = product.id"
                id="consultProductBtn"
              >
                <v-icon class="mr-3">fas fa-info-circle</v-icon>
                Consulter le produit
              </v-btn>
            </v-card-actions>
            <v-dialog
              v-if="idProduit == product.id"
              v-model="dialog"
              persistent
              width="600px"
            >
              <v-card>
                <v-card-title class="justify-center text-center">
                  <span class="text-h5">{{ product.name }}</span>
                </v-card-title>
                <div class="d-flex justify-content-between">
                  <v-img
                    class="mr-8 ml-8 mb-5 mt-5"
                    max-width="200"
                    height="200"
                    :src="product.image"
                  >
                  </v-img>
                  <v-row no-gutters>
                    <v-card-text class="mt-5 text-center">
                      {{ product.description }}
                    </v-card-text>
                    <v-card-text class="mb-15 text-center">
                      {{ product.description2 }}
                    </v-card-text>
                  </v-row>
                </div>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    class="mr-0"
                    color="red darken-1"
                    text
                    @click="idProduit = 0"
                  >
                    Retour
                  </v-btn>
                  <v-btn
                    color="#12A4E4"
                    text
                    v-bind="attrs"
                    v-on="on"
                    width="300px"
                    class="mr-10"
                    @click="addToCart(product)"
                  >
                    <v-icon class="mr-2">mdi-cart</v-icon>
                    Ajouter au panier
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-card-actions>
              <v-btn
                color="#12A4E4"
                block
                dark
                class="withoutupercase mb-2"
                @click="addToCart(product)"
              >
                <v-icon class="mr-2">mdi-cart</v-icon>
                Ajouter au panier
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- SIDEBAR RIGHT (ShopCart) -->
    <v-navigation-drawer v-model="drawer" temporary absolute right>
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
        <v-list-item v-for="product in cart" v-bind:key="product.id">
          <v-list-item-avatar rounded color="grey lighten-4">
            <v-img :src="product.image"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="subtitle-2 mt-6">
              {{ product.name }}
            </v-list-item-title>
            <v-list-item-subtitle
              >{{ product.quantity }}
              <v-btn
                rounded
                plain
                color="amber"
                small
                v-on:click="cartMinusOne(product, id)"
              >
                <v-icon>fas fa-minus-circle</v-icon>
              </v-btn>
              <v-btn
                rounded
                plain
                color="green"
                small
                v-on:click="cartPlusOne(product)"
              >
                <v-icon>fas fa-plus-circle</v-icon>
              </v-btn>
            </v-list-item-subtitle>
            <v-btn
              rounded
              plain
              color="red"
              small
              class="ml-4 mt-2"
              @click="cartRemoveItem(id)"
            >
              <span>Supprimer</span>
            </v-btn>
          </v-list-item-content>
          <v-list-item-action class="caption"
            >{{ cartTotal(product) }}€</v-list-item-action
          >
        </v-list-item>
      </v-list>
      <v-divider class="mx-4"></v-divider>
      <v-toolbar color="rgba(0,0,0,0)" flat>
        <strong>Total :</strong><v-spacer></v-spacer
        ><strong>{{ cartTotalAmount() }} €</strong>
      </v-toolbar>
      <v-divider class="mx-4 mb-5"></v-divider>
      <strong class="ml-5">Méthode de paiement :</strong>
      <v-container>
        <v-row justify="center mt-2">
          <PaypalButtons />
        </v-row>
      </v-container>
    </v-navigation-drawer>
  </v-app>
</template>
