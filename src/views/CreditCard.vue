<template>
  <v-content>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center" class="mt-15">
        <v-col cols="12" sm="8" md="8" class="mt-15">
          <v-card class="elevation-12 rounded-xl mt-15">
            <v-row>
              <v-col cols="12" md="8">
                <v-card-text>
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
                  <h1 class="text-center display-1">
                    Informations de paiement
                  </h1>
                  <v-form>
                    <v-text-field
                      label="Nom du titulaire"
                      name="Nom du titulaire"
                      class="ml-15 mr-15"
                      type="text"
                      color="blue accent-3"
                    />
                    <v-text-field
                      label="Numéro de carte"
                      name="Numéro de carte"
                      class="ml-15 mr-15"
                      type="text"
                      color="blue accent-3"
                    />

                    <v-row>
                      <v-col cols="12" md="5" class="ml-5">
                        <v-text-field
                          label="Date d'expiration"
                          name="Date d'expiration"
                          type="text"
                          color="blue accent-3"
                          class="ml-15"
                        />
                      </v-col>
                      <v-col cols="12" md="4" class="ml-10">
                        <v-text-field
                          label="CVV"
                          name="CVV"
                          id="cvv"
                          type="password"
                          color="blue accent-3"
                          class="ml-15"
                        />
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
                <div class="text-center mt-7 mb-5">
                  <v-btn color="blue darken-3" dark>Payer maintenant</v-btn>
                </div>
              </v-col>
              <v-col cols="12" md="4" class="blue darken-3 rounded-xl">
                <v-img
                  class="ml-5"
                  height="250"
                  position="center"
                  id="cbPicture"
                  src="https://www.shscomputer.be/images/icones-paiement/carte_de_credit.png"
                ></v-img>
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
export default class CreditCard extends Vue {}
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
</style>
