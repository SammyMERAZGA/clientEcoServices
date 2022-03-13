<script lang="ts" src="./index.ts"></script>
<style src="./style.css"></style>

<template>
  <v-app id="bgC">
    <v-content class="mt-15 mb-15">
      <v-snackbar color="success" v-model="snackbarLogin"
        >Connexion réussie !
        <template v-slot:action="{ attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbarLogin = false"
          >
            Fermer
          </v-btn>
        </template>
      </v-snackbar>
      <v-snackbar color="success" v-model="snackbarRegister"
        >Inscription réussie, bienvenue sur le site !
        <template v-slot:action="{ attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbarRegister = false"
          >
            Fermer
          </v-btn>
        </template>
      </v-snackbar>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" lg="8">
            <v-card class="elevation-12 rounded-xl">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-5">
                        <h1 class="text-center display-1 black--text mb-12">
                          Connexion
                        </h1>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            v-model="email"
                            class="ml-3"
                            prepend-icon="far fa-envelope"
                            type="text"
                            color="blue accent-3"
                          />
                          <v-text-field
                            id="password"
                            label="Mot de passe"
                            v-model="password"
                            name="password"
                            class="ml-3"
                            prepend-icon="fas fa-lock"
                            type="password"
                            color="blue accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-6 mb-5">
                        <v-btn
                          rounded
                          color="yellow accent-3"
                          light
                          @click="
                            login();
                            snackbarLogin = true;
                          "
                          >Connexion</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="green darken-1">
                      <v-card-text class="white--text mt-12 pr-7">
                        <h1 class="text-center display-1">
                          Envie de nous rejoindre ?
                        </h1>
                        <h4 class="text-center h6 mt-7">
                          Rejoignez-nous maintenant pour pouvoir faire des
                          achats, consulter nos guides, et bien plus encore !
                        </h4>
                      </v-card-text>
                      <div class="text-center pb-5 mb-10" id="btnRegister">
                        <v-btn rounded outlined dark @click="step++"
                          >Inscription</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height row-inscription">
                    <v-col cols="12" md="4" class="light-blue darken-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">
                          Bienvenue à nouveau !
                        </h1>
                        <h4 class="text-center h6 mt-7">
                          Pour rester en contact avec nous, veuillez vous
                          connecter avec vos informations personnelles
                        </h4>
                      </v-card-text>
                      <div class="text-center" id="btnLogin">
                        <v-btn rounded outlined dark @click="step--"
                          >Connexion</v-btn
                        >
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-8 mb-3">
                        <h1
                          class="text-center display-1 black--text text--accent-3"
                        >
                          Inscription
                        </h1>
                        <v-form>
                          <v-select
                            :items="role"
                            class="mt-10"
                            prepend-icon="fas fa-user-tie"
                            label="Particulier ou professionnel ?"
                            v-model="type"
                          ></v-select>
                          <v-text-field
                            label="Pseudo"
                            v-model="username"
                            prepend-icon="fas fa-user-circle"
                            type="text"
                            color="blue accent-3"
                          />
                          <v-text-field
                            label="Email"
                            v-model="email"
                            prepend-icon="far fa-envelope"
                            type="text"
                            color="blue accent-3"
                          />

                          <v-text-field
                            label="Mot de passe"
                            v-model="password"
                            prepend-icon="fas fa-lock"
                            type="password"
                            color="blue accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5 mb-12">
                        <v-btn
                          rounded
                          color="light-blue darken-2"
                          dark
                          @click="
                            register();
                            snackbarRegister = true;
                          "
                          >Inscription</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>