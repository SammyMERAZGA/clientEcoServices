<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <div class="container" id="animTitle">
      <span class="text1">Éco Services</span>
      <img src="../assets/logoEco.png" alt="logo" class="logo" />
      <v-divider class="mt-10"></v-divider>
    </div>
    <v-container>
      <v-item-group mandatory class="mt-n1">
        <v-container>
          <v-row justify="center">
            <v-col cols="12" md="2" v-for="page in pages" :key="page.id">
              <v-hover>
                <v-card
                  class="f-flex align-center rounded-lg mx-2"
                  elevation="5"
                  height="180"
                  flat
                  slot-scope="{ hover }"
                  :class="`${hover ? 'class1' : 'class2'}`"
                >
                  <v-row>
                    <v-col cols="12" sm="12">
                      <v-list-item three-line class="text-center">
                        <v-list-item-content>
                          <div align="center" justify="center">
                            <v-img
                              :src="page.image"
                              max-height="90"
                              max-width="90"
                            ></v-img>
                          </div>
                          <v-list-item-subtitle class="caption mt-4 ml-8">
                            {{ page.name }}
                            <v-btn icon :color="page.iconColor" :to="page.url">
                              <v-icon small class="mb-1 mr-3">{{
                                page.icon
                              }}</v-icon>
                            </v-btn>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
      <v-carousel
        hide-delimiters
        cycle
        class="mt-10"
        interval="2000"
        height="300"
      >
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
import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {},
})
export default class Home extends Vue {
  pictures = [
    {
      src: "https://wallpapercave.com/wp/wp5125439.jpg",
    },
    {
      src: "https://wallpapers.com/images/high/breathtaking-nature-anime-scenery-ozmhfiuqzmai1bha.jpg",
    },
    {
      src: "https://cdn.wallpapersafari.com/66/73/p5rfhv.jpg",
    },
    {
      src: "https://i.pinimg.com/originals/ae/2e/cb/ae2ecb631f037846715e0c45609cbfb8.jpg",
    },
  ];

  pages = [
    {
      id: 1,
      name: "Boutique",
      url: "/store",
      icon: "fas fa-shopping-cart",
      iconColor: "indigo darken-4",
      image:
        "https://www.graphicsprings.com/filestorage/stencils/a7ee8cc210353c0ef5c403d513c386c4.png?width=500&height=500",
    },
    {
      id: 2,
      name: "Services",
      url: "/services",
      icon: "fas fa-leaf",
      iconColor: "light-blue darken-4",
      image:
        "https://media.istockphoto.com/vectors/solar-panel-sun-logo-template-save-energy-green-power-and-natural-vector-id1175616187?k=20&m=1175616187&s=170667a&w=0&h=kEoGh4iEIJd6wUOLStLL1ZIHzM_884lQkk6R-qsepeM=",
    },
    {
      id: 3,
      name: "Guides",
      url: "/guides",
      icon: "fas fa-file-invoice",
      iconColor: "green lighten-1",
      image:
        "http://construire-des-savoirs.fr/wp-content/uploads/2016/08/ecology-300x300.jpg",
    },
    {
      id: 4,
      name: "Connexion",
      url: "/login",
      icon: "fas fa-user-circle",
      iconColor: "amber",
      image:
        "https://www.pinclipart.com/picdir/middle/532-5328720_girl-ecology-plant-clipart-makers-mark-png-download.png",
    },
    {
      id: 5,
      name: "À propos",
      url: "/about",
      icon: "fas fa-users",
      iconColor: "blue-grey",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/ecology-team-2871963-2383617.png",
    },
  ];
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap");

#animTitle {
  text-align: center;
  width: 100%;
  top: 50%;
  left: 50%;
}

#animTitle span {
  text-transform: uppercase;
  display: block;
}

.text1 {
  color: #20a35b;
  font-size: 60px;
  font-weight: 700;
  position: relative;
  letter-spacing: 8px;
  margin-bottom: 10px;
  animation: text 3s 1;
}

@keyframes text {
  0% {
    color: black;
    margin-bottom: -10px;
  }
  30% {
    letter-spacing: 25px;
    margin-bottom: -10px;
  }
  85% {
    letter-spacing: 8px;
    margin-bottom: -10px;
  }
}

.class1 {
  background-color: #c8ebf1;
}

.class2 {
  background-color: white;
}
</style>
