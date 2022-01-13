<template>
  <v-app id="inspire">
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
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="blue" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
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
                            label="Password"
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
                    <v-col cols="12" md="4" class="green accent-3">
                      <v-card-text class="white--text mt-12 pr-7">
                        <h1 class="text-center display-1">
                          Vous n'êtes pas inscrit ?
                        </h1>
                        <h4 class="text-center h6 mt-7">
                          Rejoignez-nous maintenant pour pouvoir faire des
                          achats, réaliser des devis, consulter nos guides, et
                          bien plus encore !
                        </h4>
                      </v-card-text>
                      <div class="text-center mt-5">
                        <v-btn rounded outlined light @click="step++"
                          >Inscription</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="blue accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">
                          Bienvenue à nouveau !
                        </h1>
                        <h4 class="text-center h6 mt-7">
                          Pour rester en contact avec nous, veuillez vous
                          connecter avec vos informations personnelles
                        </h4>
                      </v-card-text>
                      <div class="text-center mt-5">
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
                            <v-icon>fab fa-google-plus-g</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="blue" outlined>
                            <v-icon>fab fa-linkedin-in</v-icon>
                          </v-btn>
                        </div>
                        <v-form>
                          <v-text-field
                            label="Nom"
                            name="Name"
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
                        <v-btn rounded color="green accent-3" dark
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

<script>
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data: () => ({
    step: 1,
  }),
  props: {
    source: String,
  },
};
</script>
