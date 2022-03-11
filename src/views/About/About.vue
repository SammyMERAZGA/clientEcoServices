<script lang="ts" src="./index.ts"></script>
<style src="./style.css"></style>

<template>
  <div>
  <div class="container-about">
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
    <v-container class="fill-height mb-8" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-card class="elevation-12 rounded-xl">
            <v-row class="justify-center">
              <v-row>
                <h1 class="text-center mt-5 display-1 mb-5">
                  Formulaire de contact
                </h1>
              </v-row>
              <v-form v-model="valid">
                <v-row class="align-content justify-center">
                  <v-row class="justify-center">
                    <v-col cols="12" md="5" lg="4">
                      <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        :counter="20"
                        label="Prénom"
                        required
                        class="prenom"
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="5" lg="4">
                      <v-text-field
                        v-model="lastname"
                        :rules="nameRules"
                        :counter="20"
                        label="Nom"
                        required
                        class="nom"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="justify-space-around">
                    <v-col md="5" cols="12">
                      <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        class="email"
                      ></v-text-field>
                    </v-col>
                    <v-col md="5" cols="12">
                      <v-select
                        :items="motifs"
                        label="Motif"
                        outlined
                      ></v-select>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="area-form" col="12">
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
    <h3 class="display-1 text-center mt-3 mb-9 mt-10">
      <i class="fas fa-landmark"></i>
      <span class="ml-2"> Mentions légales</span>
    </h3>
    <v-card class="mx-auto" max-width="1000" elevation="8" shaped outlined>
      <h4 class="overline text-decoration-underline text-center mt-3 mb-9">
        Réutilisations des contenus
      </h4>
      <p class="body-2 text-center mb-8 ml-15 mr-15">
        L’ensemble du matériel du site Eco Services, incluant les textes, les
        éléments graphiques, les éléments sonores et audiovisuels, les outils de
        suivi, est la propriété d'Eco Services, éditeur du site, et est protégé
        par les lois internationales sur les droits d’auteur. Aucun matériel de
        ce site ne peut être reproduit, modifié, distribué, transmis, republié,
        affiché ou diffusé sans l’autorisation écrite préalable d'Eco Services.
        Pour toute demande relative à l’utilisation du matériel, veuillez écrire
        à : ecoservices.g4@gmail.com
      </p>
      <h4 class="overline text-decoration-underline text-center mt-3 mb-9">
        Données à caractère personnel
      </h4>
      <p class="body-2 text-center mb-8 ml-15 mr-15">
        Conformément à la loi n°78-17 du 6 janvier 1978 modifiée, le traitement
        des données personnelles fait l’objet d’une déclaration normale auprès
        de la Commission Nationale de l’Informatique et des Libertés (Cnil), qui
        en a délivré récépissé sous le numéro 1882211 v 0, à la date du
        19/08/2015. Vos données à caractère personnel sont exclusivement
        destinées au responsable de traitement et aux autres Utilisateurs du
        Site et ne seront en aucun cas communiquées à des tiers non autorisés.
        Vous bénéficiez d’un droit d’accès, de rectification et d’opposition des
        données à caractère personnel vous concernant que vous pouvez exercer en
        vous adressant par courriel à l’adresse suivante :
        ecoservices.g4@gmail.com
      </p>
    </v-card>
    <h3 class="display-1 text-center mt-3 mb-9 mt-15">
      <i class="fas fa-globe"></i>
      <span class="ml-2"> Réseaux sociaux</span>
    </h3>
    <v-col class="d-flex justify-content-center" id="btnSocialNetwork">
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
  </div>
  <Footer />
  </div>
</template>
