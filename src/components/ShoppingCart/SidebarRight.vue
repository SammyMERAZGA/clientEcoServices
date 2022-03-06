<script lang="ts" src="./index.ts"></script>
<style src="./style.css"></style>

<template>
  <v-navigation-drawer app color="white" right width="290">
    <v-list subheader two-line class="mt-1">
      <v-list-item>
        <v-list-item-avatar rounded>
          <v-img
            src="https://i.pinimg.com/originals/dc/0f/e9/dc0fe9fe1e29ab605c9211ae8972c379.jpg"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-subtitle>Développeur Full Stack</v-list-item-subtitle>
          <v-list-item-title>Sammy MERAZGA</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-badge bordered overlap color="blue" dot>
            <v-icon>far fa-bell</v-icon>
          </v-badge>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider class="mt-1 mb-8"></v-divider>
    <v-icon id="cartIcon">fas fa-shopping-cart</v-icon>
    <strong class="ml-3">Panier</strong>
    <v-list subheader two-line class="mt-1">
      <v-list-item>
        <v-list-item-avatar rounded color="grey lighten-4">
          <v-img
            src="https://p8.storage.canalblog.com/86/21/1418349/115699659.jpg"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-2 mt-6"
            >Starter Pack Ecologie</v-list-item-title
          >
          <v-list-item-subtitle
            >x1
            <v-btn plain color="#11d86a" small
              >Détail
              <v-icon right>mdi-pencil</v-icon>
            </v-btn>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="caption">29.99€</v-list-item-action>
      </v-list-item>
    </v-list>
    <v-list subheader two-line class="mt-1">
      <v-list-item>
        <v-list-item-avatar rounded color="grey lighten-4">
          <v-img
            src="https://www.cdiscount.com/pdt2/4/6/6/1/700x700/auc2008150295466/rw/poubelle-avec-couvercle-a-charniere-50-l-noir-et-v.jpg"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="subtitle-2"
            >Poubelle Ecologique</v-list-item-title
          >
          <v-list-item-subtitle
            >x1
            <v-btn plain color="#11d86a" small
              >Détail
              <v-icon right>mdi-pencil</v-icon>
            </v-btn>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="caption">49.99€</v-list-item-action>
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
                          class="mt-n2 caption"
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
                  <v-col cols="12" md="12">
                    <v-list-item three-line class="text-center mt-1">
                      <v-list-item-content>
                        <div>
                          <v-icon :color="active ? '#11d86a' : 'black'"
                            >fas fa-credit-card</v-icon
                          >
                        </div>
                        <v-list-item-subtitle
                          :class="active ? 'green--text' : 'black--text'"
                          class="mt-n2 caption"
                          >Carte bancaire</v-list-item-subtitle
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
</template>