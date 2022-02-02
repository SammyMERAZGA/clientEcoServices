<template>
  <div>
    <h1 class="mt-5 text-center">Back-Office</h1>
    <v-divider class="mt-10 mb-10"></v-divider>
    <v-container>
      <v-row>
        <v-card width="1500" class="rounded-xl" elevation="5">
          <h1 class="overline text-center mt-5">Liste des utilisteurs</h1>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                id="tooltip"
                dark
                icon
                v-bind="attrs"
                v-on="on"
                ><v-icon>fas fa-info-circle</v-icon>
              </v-btn>
            </template>
            <span
              >Il faut actualiser la page pour que les modifications soient
              prises en compte.</span
            >
          </v-tooltip>
          <v-dialog v-model="addUserDialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                id="addUserBtn"
                color="green darken-1"
                dark
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>fas fa-user-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Ajouter un utilisateur</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="5">
                      <v-text-field
                        v-model="username"
                        label="Pseudo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="7">
                      <v-select
                        :items="role"
                        v-model="type"
                        label="Professionnel ou particulier"
                        required
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="email"
                        label="Email *"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="password"
                        label="Password *"
                        type="password"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="addUserDialog = false"
                >
                  Annuler
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="
                    addUserDialog = false;
                    register();
                  "
                >
                  Ajouter
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-data-table
            :headers="headersUsersTable"
            :items="users"
            class="mb-5"
            :footer-props="{
              'items-per-page-text': 'Nb éléments par page',
              'items-per-page-all-text': 'Tout',
              'items-per-page-options': [10, 20, -1],
            }"
          >
            <template v-slot:[`item.transporteur`]="{ item }">
              <b>{{ item.transporteur.name }}</b> ({{ item.transporteur.code }})
              <br v-if="!!item.transporteur.phone" />{{
                item.transporteur.phone
              }}
              <br v-if="!!item.transporteur.email" />{{
                item.transporteur.email
              }}
            </template>
            <template v-slot:no-data>
              <h1>Aucun résultats</h1>
            </template>
            <template v-slot:[`footer.page-text`]="props">
              <span v-if="props.itemsLength > 1"
                >{{ props.pageStart }}/{{ props.pageStop }} de
                {{ props.itemsLength }}</span
              >
            </template>
            <template v-slot:[`item.update`]>
              <v-btn icon to="/">
                <v-icon small> fas fa-edit </v-icon>
              </v-btn>
            </template>
            <template v-slot:[`item.delete`]>
              <v-btn icon to="/">
                <v-icon small> fas fa-trash </v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-col cols="12" sm="4" class="mt-15">
          <h1 class="overline text-center mt-5">
            Ajouter un article à la boutique
          </h1>
          <v-dialog
            class="mb-15"
            v-model="addArticleDialog"
            persistent
            max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                id="addBtnBottom"
                color="green darken-1"
                dark
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>fas fa-plus-circle</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Ajouter un article</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="productName"
                        label="Nom de l'article"
                      ></v-text-field>
                    </v-col>
                    <!-- <v-col cols="12">
                      <v-select
                        :items="categories"
                        v-model="category"
                        name="category"
                        item-text="name"
                        clearable
                        persistent-hint
                        label="Catégorie"
                      ></v-select>
                    </v-col> -->
                    <v-col cols="12">
                      <v-text-field
                        label="Image"
                        v-model="productImage"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                      <v-textarea
                        outlined
                        name="input-7-4"
                        label="Description"
                        v-model="productDescription"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" md="4">
                      <v-text-field
                        label="Prix"
                        placeholder="29.99"
                        v-model="productPrice"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="addArticleDialog = false"
                >
                  Annuler
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="
                    addArticleDialog = false;
                    createProduct();
                  "
                >
                  Ajouter
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
        <v-col cols="12" sm="4" class="mt-15">
          <h1 class="overline text-center mt-5">Ajouter un guide</h1>
          <v-dialog
            class="mb-15"
            v-model="addGuideDialog"
            persistent
            max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                id="addBtnBottom"
                color="blue darken-1"
                dark
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>fas fa-folder-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Ajouter un guide</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="titleGuide"
                        label="Titre du guide"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="imageGuide"
                        label="Image"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12">
                      <v-textarea
                        outlined
                        v-model="descriptionGuide"
                        label="Description"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="addGuideDialog = false"
                >
                  Annuler
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="
                    addGuideDialog = false;
                    createGuide();
                  "
                >
                  Ajouter
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>

        <!-- <v-col cols="12" sm="4" class="mt-15">
          <h1 class="overline text-center mt-5">Ajouter une catégorie</h1>
          <v-dialog
            class="mb-15"
            v-model="addCategoryDialog"
            persistent
            max-width="600px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                id="addBtnBottom"
                color="amber accent-3"
                dark
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>fas fa-plus-circle</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Ajouter une catégorie</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="categoryName"
                        label="Nom de la catégorie"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Icone"
                        placeholder="fas fa-plus-circle"
                        v-model="categoryIcone"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="categoryImage"
                        label="Image"
                        required
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="addCategoryDialog = false"
                >
                  Annuler
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="
                    addCategoryDialog = false;
                    createCategory();
                  "
                >
                  Ajouter
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col> -->
      </v-row>
    </v-container>

    <v-container>
      <v-row>
        <v-card width="1500" class="rounded-xl mt-16" elevation="5">
          <h1 class="overline text-center mt-5">Liste des devis</h1>
          <v-data-table
            :headers="headersQuotationsTable"
            :items="quotations"
            class="mb-5"
            :footer-props="{
              'items-per-page-text': 'Nb éléments par page',
              'items-per-page-all-text': 'Tout',
              'items-per-page-options': [10, 20, -1],
            }"
          >
            <template v-slot:[`item.transporteur`]="{ item }">
              <b>{{ item.transporteur.name }}</b> ({{ item.transporteur.code }})
              <br v-if="!!item.transporteur.phone" />{{
                item.transporteur.phone
              }}
              <br v-if="!!item.transporteur.email" />{{
                item.transporteur.email
              }}
            </template>
            <template v-slot:no-data>
              <h1>Aucun résultats</h1>
            </template>
            <template v-slot:[`footer.page-text`]="props">
              <span v-if="props.itemsLength > 1"
                >{{ props.pageStart }}/{{ props.pageStop }} de
                {{ props.itemsLength }}</span
              >
            </template>
            <template v-slot:[`item.update`]>
              <v-btn icon to="/">
                <v-icon small> fas fa-edit </v-icon>
              </v-btn>
            </template>
            <template v-slot:[`item.delete`]>
              <v-btn icon to="/">
                <v-icon small> fas fa-trash </v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
import { User } from "../types/User";
import { Quotation } from "../types/Quotation";
// import { Category } from "@/types/Category";

@Component
export default class Commandes extends Vue {
  users: User[] = [];
  quotations: Quotation[] = [];
  role = ["Particulier", "Société"];

  headersUsersTable = [
    {
      text: "Pseudo",
      align: "start",
      value: "username",
    },
    { text: "Rôle", value: "type" },
    { text: "Admin", value: "admin" },
    { text: "Modifier", value: "update", sortable: false },
    { text: "Supprimer", value: "delete", sortable: false },
  ];

  headersQuotationsTable = [
    {
      text: "Nom",
      align: "start",
      value: "lastName",
    },
    { text: "Prénom", value: "firstName" },
    { text: "Email", value: "email" },
    { text: "Nom de l'entreprise", value: "companyName" },
    { text: "Adresse", value: "companyAddress" },
    { text: "Ville", value: "companyCity" },
    { text: "Code postal", value: "companyPostalCode" },
    { text: "Service", value: "service" },
    { text: "Supprimer", value: "delete", sortable: false },
  ];

  async allUsers(): Promise<void> {
    this.users = (await axios.get(`/api/users`)).data as User[];
  }

  async allQuotations(): Promise<void> {
    this.quotations = (await axios.get(`/api/quotations`)).data as Quotation[];
  }

  mounted(): void {
    this.allUsers();
    this.allQuotations();
    // this.allCategories();
  }

  addUserDialog = false;
  addArticleDialog = false;
  addGuideDialog = false;
  addCategoryDialog = false;
  checkbox = false;

  username = "";
  password = "";
  email = "";
  type = "";

  register(): void {
    axios
      .post("/api/register", {
        username: this.username,
        email: this.email,
        password: this.password,
        type: this.type,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // categories: Category[] = [];

  // async allCategories(): Promise<void> {
  //   this.categories = (await axios.get(`/api/categories`)).data as Category[];
  // }

  productName = "";
  productCategory = "";
  productImage = "";
  productDescription = "";
  productPrice = 0;

  createProduct(): void {
    axios
      .post("/api/createProduct", {
        name: this.productName,
        category: this.productCategory,
        image: this.productImage,
        description: this.productDescription,
        price: this.productPrice,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  titleGuide = "";
  imageGuide = "";
  descriptionGuide = "";

  createGuide(): void {
    axios
      .post("/api/createGuide", {
        title: this.titleGuide,
        image: this.imageGuide,
        description: this.descriptionGuide,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // categoryName = "";
  // categoryIcone = "";
  // categoryImage = "";

  // createCategory(): void {
  //   axios
  //     .post("/api/createCategory", {
  //       name: this.categoryName,
  //       icone: this.categoryIcone,
  //       image: this.categoryImage,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
}
</script>

<style scoped>
#addUserBtn {
  margin-left: 1200px;
}

#addBtnBottom {
  margin-left: 170px;
  margin-top: 10px;
}

#tooltip {
  margin-top: 1%;
  margin-left: 1213px;
  margin-bottom: 1%;
}
</style>
