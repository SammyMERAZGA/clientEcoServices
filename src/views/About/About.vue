<script lang="ts" src="./index.ts"></script>
<style src="./style.css"></style>

<template>
  <div>
    <h1 class="text-center mt-3 mb-12">À propos</h1>
    <h3 class="text-center mt-3 mb-9">
      <i class="fas fa-question-circle"></i>
      <span class="ml-2"> Qui sommes-nous ?</span>
    </h3>
    <p class="text-center mb-8 mr-15 ml-15">
      Nous sommes des spécialistes dans le recyclage (appareils électriques et
      électroniques usagés, outils industriels, déchets organiques...). Après 20
      ans d’expérience, nous avons décider de nous diversifier et proposer en
      plus de notre activité principale, de la vente au particulier des produits
      écoresponsable jusqu’au zéro déchet.
    </p>
    <h3 class="text-center mt-3 mb-9">
      <i class="fas fa-shopping-bag"></i>
      <span class="ml-2"> Notre boutique</span>
    </h3>
    <p class="text-center mb-8 ml-15 mr-15">
      Tous les produits en vente sur ce site sont éco-responsables. Cela
      signifie que nos produits présentent un cycle de vie qui répond aux règles
      de l’éco-conception. Celle-ci dispose de normes précises et correspond à
      une démarche d’amélioration continue indispensable pour produire mieux
      avec moins.
    </p>
    <h3 class="text-center mt-10 mb-9">
      <i class="fas fa-envelope"></i>
      <span class="ml-2"> Nous contacter ?</span>
    </h3>
    <p class="text-center mb-2">
      Vous avez une question, vous souhaitez faire un retour ? Remplissez le formulaire de contact est nous
      reviendrons vers vous très rapidement !
    </p>
    <v-container class="fill-height mb-15" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="8">
          <v-card class="elevation-12 rounded-xl">
            <v-row>
              <h1 class="text-center mt-5 display-1 mb-5">
                Formulaire de contact
              </h1>
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
                    <v-col class="ml-5 mr-5" sm="15">
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
    <h3 class="text-center mt-3 mb-9 mt-15">
      <i class="fas fa-globe"></i>
      <span class="ml-2"> Réseaux sociaux</span>
    </h3>
    <v-col id="btnSocialNetwork">
      <v-btn color="blue lighten-2" dark>
        <v-icon>fab fa-twitter</v-icon>
      </v-btn>
      <v-btn color="pink lighten-2" dark class="ml-15">
        <v-icon>fab fa-instagram</v-icon>
      </v-btn>
      <v-btn color="blue darken-3" dark class="ml-15">
        <v-icon>fab fa-facebook</v-icon>
      </v-btn>
    </v-col>
    <Footer />
  </div>
</template>
