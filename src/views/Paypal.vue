<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" class="mt-15">
        <v-col cols="12" sm="8" md="8" class="mt-15">
          <v-card class="elevation-12 rounded-xl mt-15">
            <v-row class="fill-height">
              <v-col cols="12" md="4" class="blue darken-3 rounded-xl">
                <v-img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
                  max-width="150"
                  class="ml-15"
                  id="paypalPicture"
                ></v-img>
              </v-col>

              <v-col cols="12" md="8">
                <v-card-text class="mb-3">
                  <v-btn
                    class="mx-2"
                    to="/store"
                    fab
                    dark
                    small
                    color="blue darken-3"
                  >
                    <v-icon dark> fas fa-chevron-left </v-icon>
                  </v-btn>
                  <h1 class="text-center display-1 black--text">
                    Paiement avec Paypal
                  </h1>
                  <v-form>
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
                    <v-select
                      prepend-icon="fas fa-globe-europe"
                      :items="countries"
                      label="Choississez votre pays"
                    >
                    </v-select>
                  </v-form>
                </v-card-text>
                <div class="text-center mb-5">
                  <v-btn
                    rounded
                    color="blue darken-3"
                    dark
                    href="https://www.paypal.com/fr/signin"
                    >Connectez-vous à PayPal</v-btn
                  >
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class CreditCard extends Vue {
  countries = ["France métropolitaine", "France d'outre-mer", "Belgique", "Belgique", "Suisse"];
}
</script>

<style scoped>
#cbPicture {
  margin-top: 30%;
}

h1 {
  margin-left: 10%;
  margin-top: -7%;
  margin-bottom: 10%;
}

#paypalPicture {
  margin-top: 40%;
}
</style>
