<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <h1 data-text="ÉcoServices" class="text-center mt-8">ÉcoServices</h1>
    <v-container>
      <v-item-group mandatory class="mt-n1">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#F6EFEF' : 'white'"
                  :class="active ? 'borderme' : 'borderout'"
                  class="f-flex align-center rounded-lg mx-2"
                  dark
                  height="180"
                  @click="toggle"
                  flat
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img
                              src="../assets/3.png"
                              max-height="90"
                              max-width="90"
                            ></v-img>
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'green--text' : 'black--text'"
                            class="caption mt-4 ml-8"
                          >
                            Boutique
                            <v-btn icon color="green" to="/store">
                              <v-icon small class="mb-1 mr-3"
                                >fas fa-shopping-cart</v-icon
                              >
                            </v-btn>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#F6EFEF' : 'white'"
                  :class="active ? 'borderme' : 'borderout'"
                  class="f-flex align-center rounded-lg mx-2"
                  dark
                  height="180"
                  @click="toggle"
                  flat
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img
                              src="../assets/2.png"
                              max-height="90"
                              max-width="90"
                              contain
                            ></v-img>
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'green--text' : 'black--text'"
                            class="caption mt-4 ml-5"
                          >
                            Services
                            <v-btn icon color="green" to="/services">
                              <v-icon small class="mb-1 mr-3"
                                >fas fa-leaf</v-icon
                              >
                            </v-btn>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#F6EFEF' : 'white'"
                  :class="active ? 'borderme' : 'borderout'"
                  class="f-flex align-center rounded-lg mx-2"
                  dark
                  height="180"
                  @click="toggle"
                  flat
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img
                              src="http://apdiq.com/wp-content/uploads/2014/07/icon-lg-guides-blue1.png"
                              max-height="90"
                              max-width="90"
                              contain
                            ></v-img>
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'green--text' : 'black--text'"
                            class="caption mt-4 ml-7"
                          >
                            Guides
                            <v-btn icon color="cyan" to="/guides">
                              <v-icon small class="mr-4 mb-1"
                                >fas fa-file-invoice</v-icon
                              >
                            </v-btn>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-item>
            </v-col>
            <v-col cols="12" md="2">
              <v-item v-slot="{ active, toggle }">
                <v-card
                  :color="active ? '#F6EFEF' : 'white'"
                  :class="active ? 'borderme' : 'borderout'"
                  class="f-flex align-center rounded-lg mx-2"
                  dark
                  height="180"
                  @click="toggle"
                  flat
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img
                              src="../assets/ecoServices.png"
                              max-height="90"
                              max-width="90"
                              contain
                            ></v-img>
                          </div>
                          <v-list-item-subtitle
                            :class="active ? 'green--text' : 'black--text'"
                            class="caption mt-4 ml-6"
                          >
                            À propos
                            <v-btn icon color="#ffcd01" to="/about">
                              <v-icon small class="mr-2">fas fa-users</v-icon>
                            </v-btn>
                          </v-list-item-subtitle>
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
      <v-carousel hide-delimiters cycle class="mt-10" interval="2000" height="400">
        <v-carousel-item
          v-for="(picture, pic) in pictures"
          :key="pic"
          :src="picture.src"
        ></v-carousel-item>
      </v-carousel>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import SidebarRight from "../components/SidebarRight.vue";
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {
    SidebarRight,
  },
})
export default class Home extends Vue {
  pictures = [
          {
            src: 'https://wallpapercave.com/wp/wp5125439.jpg',
          },
          {
            src: 'https://wallpapers.com/images/high/breathtaking-nature-anime-scenery-ozmhfiuqzmai1bha.jpg',
          },
          {
            src: 'https://cdn.wallpapersafari.com/66/73/p5rfhv.jpg',
          },
          {
            src: 'https://i.pinimg.com/originals/ae/2e/cb/ae2ecb631f037846715e0c45609cbfb8.jpg',
          },
        ];
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

.v-card-borderme {
  border: 2px solid #11d86a !important;
}
.v-card.borderout {
  border: 1px solid #11bad8 !important;
}

h1 {
  font-family: "Poppins", sans-serif;
  position: relative;
  font-size: 10vw;
  color: #ededed;
  -webkit-text-stroke: 0.3vw #32884c;
  text-transform: uppercase;
}

h1::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 80%;
  color: #11d86a;
  -webkit-text-stroke: 0vw #11bad8;
  border-right: 2px solid #11d86a;
  overflow: hidden;
  animation: animate 5s linear;
}

@keyframes animate {
  0%,
  10%,
  100% {
    width: 0;
  }
  70%,
  90% {
    width: 100%;
  }
}
</style>
