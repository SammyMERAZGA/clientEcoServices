<script lang="ts" src="./index.ts"></script>
<style src="./style.css"></style>

<template>
  <div>
    <h1 class="text-center mt-3">Services</h1>
    <v-divider class="ml-10 mr-10 mb-10"></v-divider>

    <v-snackbar color="success" v-model="snackbarQuotation"
      >Devis envoyé ! Nous le traiterons dans les plus brefs délais.
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarQuotation = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>

    <v-row>
      <v-col cols="12" md="4" v-for="service in services" :key="service.id">
        <v-hover>
          <v-card
            class="mx-auto"
            max-width="350"
            elevation="5"
            outlined
            slot-scope="{ hover }"
            :class="`${hover ? 'class1' : 'class2'}`"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">{{ service.type }}</div>
                <v-list-item-title class="text-h5 mb-1">
                  {{ service.name }}
                </v-list-item-title>
                <v-list-item-subtitle>{{
                  service.description
                }}</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey"
                ><v-img :src="service.image"></v-img
              ></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text> Devis </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>

    <v-divider class="mt-15 ml-10 mr-10 mb-10"></v-divider>

    <v-card outlined class="ma-16 rounded-lg" elevation="15">
      <br />
      <h1 class="text-center">
        <i class="fas fa-file-signature"></i>
        <span> Demande de devis</span>
      </h1>
      <p class="text-center mt-3 mr-10 ml-10">
        Un de nos services vous intéresse ? Remplissez le formulaire de devis
        ci-dessous pour que nous puissons prendre contact avec vous et vous
        donnez une estimation du prix.
      </p>
      <v-divider class="mt-6 mx-4"></v-divider>
      <br />
      <v-form v-model="valid">
        <v-container>
          <v-row class="align-content justify-center">
            <v-col cols="12" md="3">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="20"
                label="Prénom"
                required
                class="ml-10 mr-14"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="3">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                :counter="20"
                label="Nom"
                required
                class="ml-10 mr-14"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                class="ml-10 mr-14"
              ></v-text-field>
            </v-col> </v-row
          ><br />
          <v-row class="align-content justify-center">
            <v-col cols="12" md="3">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                :counter="25"
                label="Nom de l'entreprise"
                required
                class="ml-10 mr-14"
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="4">
              <v-text-field
                v-model="adress"
                :rules="adressRules"
                label="Adresse de l'entreprise"
                required
                class="ml-10 mr-14"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="2">
              <v-text-field
                v-model="postalCode"
                :rules="postalCodeRules"
                label="Code postal"
                required
                class="ml-10 mr-14"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <v-text-field
                v-model="city"
                :rules="cityRules"
                label="Ville"
                required
                class="ml-10 mr-14"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="align-content justify-center">
            <v-col class="d-flex mt-4" cols="12" sm="6">
              <v-select
                :items="servicesType"
                label="Service"
                outlined
              ></v-select>
            </v-col>
          </v-row>
          <v-row class="align-content justify-center ml-10 mr-10">
            <v-textarea
              label="Ajouter un message pour votre demande de devis"
              auto-grow
              outlined
              rows="8"
              row-height="25"
              shaped
            ></v-textarea>
          </v-row>
          <v-row class="align-content justify-center ml-10 mr-10">
            <v-btn
              class="ma-2 mb-8"
              color="success"
              @click="snackbarQuotation = true"
            >
              Envoyer la demande
              <v-icon right dark> fas fa-edit </v-icon>
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
    <Footer />
  </div>
</template>
