<template>
  <div>
    <h1 class="display-1 text-center mt-5">Guides</h1>
    <p class="text-center">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
      reiciendis id nam molestias odit alias. Quam quos mollitia pariatur ad?
    </p>
    <v-divider class="ml-15 mr-15 mt-5"></v-divider>
    <div class="text-center">
      <v-btn rounded color="green darken-1" @click="step++" dark
        >Consulter tous les guides
        <v-icon right> fas fa-file-invoice </v-icon>
      </v-btn>
    </div>
    <v-row>
      <v-col v-for="guide in guides" :key="guide.id" cols="12" md="3">
        <v-card class="elevation-12 rounded-xl ml-5 mt-5 mr-5">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-card-text class="text-center">
                  <h1 class="overline">{{ guide.name }}</h1>
                  <img height="150" :src="guide.image" />
                </v-card-text>
                <div class="text-center mt-5 mb-10">
                  <v-btn rounded color="blue lighten-1" @click="step++" dark
                    >Consulter le guide
                    <v-icon right> fas fa-file-invoice </v-icon>
                  </v-btn>
                </div>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-card-text class="text-center">
                  <h1>Voici le guide</h1>
                  <p class="body-2">
                    {{ guide.description }}
                  </p>
                </v-card-text>
                <div class="text-center mt-5 mb-10">
                  <v-btn rounded color="pink darken-1" @click="step++" dark
                    ><v-icon left> fas fa-chevron-circle-left </v-icon>
                    Retour
                  </v-btn>
                </div>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col></v-row
    >
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data: () => ({
    step: 1,
    guides: [
      {
        id: 1,
        name: "Gon Freecss",
        image:
          "https://i.pinimg.com/originals/dc/0f/e9/dc0fe9fe1e29ab605c9211ae8972c379.jpg",
        description: "Ceci est le guide n°1, il est très intéressant",
      },
      {
        id: 2,
        name: "Kirua Zoldik",
        image:
          "https://i.pinimg.com/474x/4f/1c/2c/4f1c2ce4ed271c2fa266881dff741cbb.jpg",
        description: "Ceci est le guide n°2, il est très intéressant",
      },
      {
        id: 3,
        name: "Kurapika",
        image:
          "https://i.pinimg.com/originals/17/79/c5/1779c5f69ba310be8da6856e80039669.jpg",
        description: "Ceci est le guide n°3, il est très intéressant",
      },
      {
        id: 4,
        name: "Leolio Paradinaito",
        image:
          "https://i.pinimg.com/550x/14/e9/89/14e989620d79a8420906a9d1852b6349.jpg",
        description: "Ceci est le guide n°4, il est très intéressant",
      },
      {
        id: 5,
        name: "Kuroro Lucifuru",
        image:
          "https://img.wattpad.com/90f348c757ecabc65f4a2b32208a6b9c63947e4c/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f706c7039785948696a55656b32673d3d2d392e3136336438346161326232656533613036383834323137373331372e6a7067",
        description: "Ceci est le guide n°5, il est très intéressant",
      },
      {
        id: 6,
        name: "Aruka Zoldik",
        image:
          "https://img.wattpad.com/469b29b5e9eb95ce0648cd71c051ac5296711c89/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f59752d5842433365384e745f78773d3d2d3934333334363336392e313634363136363364363264313663393132313334393633313333342e6a7067?s=fit&w=720&h=720",
        description: "Ceci est le guide n°6, il est très intéressant",
      },
      {
        id: 7,
        name: "Neferupitô",
        image:
          "https://ami.animecharactersdatabase.com/uploads/chars/5688-1340606550.jpg",
        description: "Ceci est le guide n°7, il est très intéressant",
      },
      {
        id: 8,
        name: "Feitan Portor",
        image:
          "https://i.pinimg.com/originals/d6/5d/b0/d65db0d93c8fd2f721e6c4d80615160a.jpg",
        description: "Ceci est le guide n°8, il est très intéressant",
      },
      {
        id: 9,
        name: "Meruem",
        image:
          "https://i.pinimg.com/736x/2a/e3/a9/2ae3a9cd7e0fd614f98a24eda358d62f.jpg",
        description: "Ceci est le guide n°9, il est très intéressant",
      },
      {
        id: 10,
        name: "Hehehehe",
        image:
          "https://i.pinimg.com/550x/ef/b6/6c/efb66c08a792fcebdffb552d7ffdc15f.jpg",
        description: "Ceci est le guide n°10, il est très intéressant",
      },
      {
        id: 11,
        name: "Irumi Zoldik",
        image:
          "https://i.pinimg.com/564x/3d/e6/91/3de691e79b293e4e47b475971fba10b0.jpg",
        description: "Ceci est le guide n°11, il est très intéressant",
      },
      {
        id: 12,
        name: "Hass",
        image:
          "https://www.nautiljon.com/images/perso/00/94/isaac_netero_12749.jpg",
        description: "Ceci est le guide n°12, il est très intéressant",
      },
    ],
  }),
  props: {
    source: String,
  },
};
</script>
