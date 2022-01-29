<template>
  <v-app id="bgC">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12 rounded-xl">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-1 black--text text--accent-3"
                        >
                          Connexion
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="indigo" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="red" outlined>
                            <v-icon>mdi-gmail</v-icon>
                          </v-btn>
                        </div>
                        <v-form>
                          <v-text-field
                            label="Email"
                            name="Email"
                            class="ml-3"
                            prepend-icon="far fa-envelope"
                            type="text"
                            color="blue accent-3"
                          />
                          <v-text-field
                            id="password"
                            label="Mot de passe"
                            name="password"
                            class="ml-3"
                            prepend-icon="fas fa-lock"
                            type="password"
                            color="blue accent-3"
                          />
                        </v-form>
                        <h3 class="text-center h6 mt-4">
                          Mot de passe oublié ?
                        </h3>
                      </v-card-text>
                      <div class="text-center mt-1 mb-15">
                        <v-btn rounded color="yellow accent-3" light
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
                      <div class="text-center" id="btnRegister">
                        <v-btn rounded outlined dark @click="step++"
                          >Inscription</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
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
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="indigo" outlined>
                            <v-icon>fab fa-facebook-f</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="red" outlined>
                            <v-icon>mdi-gmail</v-icon>
                          </v-btn>
                        </div>
                        <v-form>
                          <v-text-field
                            label="Pseudo"
                            name="username"
                            prepend-icon="fas fa-user"
                            type="text"
                            color="blue accent-3"
                          />
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="far fa-envelope"
                            type="text"
                            color="blue accent-3"
                          />

                          <v-text-field
                            id="password"
                            label="Mot de passe"
                            name="password"
                            prepend-icon="fas fa-lock"
                            type="password"
                            color="blue accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5 mb-12">
                        <v-btn rounded color="light-blue darken-2" dark @click="register()"
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
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
// import axios from "axios";
// import { User } from "../types/User";

@Component
export default class Login extends Vue {
  step = 1;

  // register(User: User): void {
  //   axios
  //     .post("http://localhost:3000/api/users", User)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
}
</script>

<style scoped>
#bgC {
  background-color: #eeeeee;
}

#btnRegister,
#btnLogin {
  margin-top: 40%;
}
</style>
