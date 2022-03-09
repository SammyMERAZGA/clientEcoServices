<script lang="ts" src="./index.ts"></script>
<style src="./style.css"></style>

<template>
  <div>
    <h1 class="mt-5 text-center">Back-Office</h1>
    <v-divider class="mt-10"></v-divider>

    <v-container class="mb-10">
      <v-row>
        <v-col cols="12" sm="4" class="mt-5">
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
                    <v-col cols="12">
                      <v-select
                        :items="categories"
                        v-model="category"
                        name="category"
                        item-text="name"
                        clearable
                        persistent-hint
                        label="Catégorie"
                      ></v-select>
                    </v-col>
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
                    snackbarArticleAdded = true;
                  "
                >
                  Ajouter
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
        <v-col cols="12" sm="4" class="mt-5">
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
                    snackbarGuideAdded = true;
                  "
                >
                  Ajouter
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>

        <v-col cols="12" sm="4" class="mt-5">
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
                        v-model="categoryColor"
                        placeholder="green"
                        label="Couleur"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="categoryUrl"
                        placeholder="/store/NOM_CATEGORIE"
                        label="URL de la catégorie"
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
        </v-col>
      </v-row>
    </v-container>

    <!-- USER -->

    <!-- SNACKBAR AJOUT D'UTILISATEUR -->
    <v-snackbar color="success" v-model="snackbarUserAdded"
      >Utilisateur ajouté !
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarUserAdded = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- END SNACKBAR AJOUT D'UTILISATEUR -->

    <!-- SNACKBAR MODIFICATION D'UTILISATEUR -->
    <v-snackbar color="success" v-model="snackbarUserUpdated"
      >Utilisateur modifié !
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarUserUpdated = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- END SNACKBAR MODIFICATION D'UTILISATEUR -->

    <!-- SNACKBAR SUPPRESSION D'UTILISATEUR -->
    <v-snackbar color="red darken-2" v-model="snackbarUserDeleted"
      >Utilisateur supprimé.
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarUserDeleted = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- END SNACKBAR SUPPRESSION D'UTILISATEUR -->

    <!-- END USER -->

    <!-- DEVIS -->

    <!-- SNACKBAR SUPPRESSION DE DEVIS -->
    <v-snackbar color="red darken-2" v-model="snackbarQuotationDeleted"
      >Devis supprimé.
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarQuotationDeleted = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- END SNACKBAR SUPPRESSION DE DEVIS -->

    <!-- END DEVIS -->

    <!-- GUIDE -->

    <!-- SNACKBAR AJOUT DE GUIDE -->
    <v-snackbar color="success" v-model="snackbarGuideAdded"
      >Guide ajouté !
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarGuideAdded = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- END SNACKBAR AJOUT DE GUIDE -->

    <!-- SNACKBAR MODIFICATION DE GUIDE -->
    <v-snackbar color="success" v-model="snackbarGuideUpdated"
      >Guide modifié !
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarGuideUpdated = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- END SNACKBAR MODIFICATION DE GUIDE -->

    <!-- SNACKBAR SUPPRESION DE GUIDE -->
    <v-snackbar color="red darken-2" v-model="snackbarGuideDeleted"
      >Guide supprimé.
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarGuideDeleted = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- END SNACKBAR MODIFICATION DE GUIDE -->

    <!-- END GUIDE -->

    <!-- ARTICLE -->

    <!-- SNACKBAR AJOUT D'ARTICLE -->
    <v-snackbar color="success" v-model="snackbarArticleAdded"
      >Articlé ajouté !
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarArticleAdded = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- END SNACKBAR AJOUT D'ARTICLE -->

    <!-- SNACKBAR MODIFICATION D'ARTICLE -->
    <v-snackbar color="success" v-model="snackbarArticleUpdated"
      >Articlé modifié !
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarArticleUpdated = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- END SNACKBAR MODIFICATION D'ARTICLE -->

    <!-- SNACKBAR SUPPRESSION D'ARTICLE -->
    <v-snackbar color="red darken-2" v-model="snackbarArticleDeleted"
      >Articlé supprimé.
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarArticleDeleted = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- END SNACKBAR SUPPRESSION D'ARTICLE -->

    <!-- END ARTICLE -->

    <!-- CATEGORIE -->

    <!-- SNACKBAR AJOUT DE CATEGORIE -->
    <v-snackbar color="success" v-model="snackbarCategoryAdded"
      >Catégorie ajoutée !
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarCategoryAdded = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- END SNACKBAR AJOUT DE CATEGORIE -->

    <!-- SNACKBAR MODIFICATION DE CATEGORIE -->
    <v-snackbar color="success" v-model="snackbarCategoryUpdated"
      >Catégorie modifiée !
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarCategoryUpdated = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- END SNACKBAR MODIFICATION DE CATEGORIE -->

    <!-- SNACKBAR SUPPRESSION DE CATEGORIE -->
    <v-snackbar color="success" v-model="snackbarCategoryDeleted"
      >Catégorie supprimée.
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbarCategoryDeleted = false"
        >
          Fermer
        </v-btn>
      </template>
    </v-snackbar>
    <!-- END SNACKBAR SUPPRESSION DE CATEGORIE -->

    <!-- END CATEGORIE -->

    <v-container>
      <v-row>
        <v-card width="1500" class="rounded-xl" elevation="5">
          <h1 class="overline text-center mt-5">Liste des utilisteurs</h1>
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
                    snackbarUserAdded = true;
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
    <v-container>
      <v-row>
        <v-card width="1500" class="rounded-xl mt-16" elevation="5">
          <h1 class="overline text-center mt-5">Liste des articles</h1>
          <v-data-table
            :headers="headersArticlesTable"
            :items="articles"
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
        <v-card width="1500" class="rounded-xl mt-16" elevation="5">
          <h1 class="overline text-center mt-5">Liste des guides</h1>
          <v-data-table
            :headers="headersGuidesTable"
            :items="guides"
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
        <v-card width="1500" class="rounded-xl mt-16" elevation="5">
          <h1 class="overline text-center mt-5">Liste des catégories</h1>
          <v-data-table
            :headers="headersCategoriesTable"
            :items="categories"
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
    <Footer />
  </div>
</template>
