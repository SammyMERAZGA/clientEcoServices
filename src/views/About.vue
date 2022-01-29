<template>
  <div>
    <h1 class="display-3 text-center mt-3 mb-12">À propos</h1>
    <p class="body-2 text-center mb-8">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita in sit
      ut esse illum inventore quo repellendus soluta, eaque voluptatem,
      voluptatum omnis. Exercitationem quaerat, atque voluptatum id sed commodi
      nesciunt maxime magnam.
    </p>
    <h3 class="display-1 text-center mt-3 mb-9">
      <i class="fas fa-question-circle"></i>
      <span class="ml-2"> Qui sommes-nous ?</span>
    </h3>
    <p class="body-2 text-center mb-8">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
      fuga saepe voluptatibus fugiat harum mollitia!
    </p>
    <h3 class="display-1 text-center mt-3 mb-9">
      <i class="fas fa-bullseye"></i>
      <span class="ml-2"> Notre objectif</span>
    </h3>
    <p class="body-2 text-center mb-8">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
      fuga saepe voluptatibus fugiat harum mollitia!
    </p>
    <h3 class="display-1 text-center mt-3 mb-9">
      <i class="fas fa-shopping-bag"></i>
      <span class="ml-2"> Notre boutique</span>
    </h3>
    <p class="body-2 text-center mb-8">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
      fuga saepe voluptatibus fugiat harum mollitia!
    </p>
    <h3 class="display-1 text-center mt-15 mb-9">
      <i class="fas fa-envelope"></i>
      <span class="ml-2"> Nous contacter ?</span>
    </h3>
    <p class="body-2 text-center mb-8">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis,
      fuga saepe voluptatibus fugiat harum mollitia!
    </p>
    <v-container class="fill-height mb-8" fluid>
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
    <h3 class="display-1 text-center mt-3 mb-9">
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
  </div>
</template>

<script>
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class About extends Vue {
  motifs = [
    "Demande de renseignements",
    "Partenariat",
    "Recrutement",
    "Autres",
  ];
}
</script>

<style>
.carousel-3d-container figure {
  margin: 0;
}
.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
.next span,
.prev span {
  color: orange;
}
</style>
