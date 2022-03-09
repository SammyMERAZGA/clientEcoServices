import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
// TYPES
import { User } from "../../types/User";
import { Quotation } from "../../types/Quotation";
//import { Category } from "@/types/Category";
// COMPONENTS
import Footer from "../../components/Footer/Footer.vue";

@Component({
  components: {
    Footer,
  },
})
export default class BackOffice extends Vue {
  users: User[] = [];
  quotations: Quotation[] = [];
  role = ["Particulier", "Société"];

  username = "";
  password = "";
  email = "";
  type = "";

  titleGuide = "";
  imageGuide = "";
  descriptionGuide = "";

  productName = "";
  productCategory = "";
  productImage = "";
  productDescription = "";
  productPrice = 0;

  addUserDialog = false;
  addArticleDialog = false;
  addGuideDialog = false;
  addCategoryDialog = false;
  checkbox = false;

  /* *** SNACKBAR *** */
  // USER
  snackbarUserAdded = false;
  snackbarUserUpdated = false;
  snackbarUserDeleted = false;
  // QUOTATION
  snackbarQuotationDeleted = false;
  // GUIDE
  snackbarGuideAdded = false;
  snackbarGuideUpdated = false;
  snackbarGuideDeleted = false;
  // ARTICLE
  snackbarArticleAdded = false;
  snackbarArticleUpdated = false;
  snackbarArticleDeleted = false;
  // CATEGORY
  snackbarCategoryAdded = false;
  snackbarCategoryUpdated = false;
  snackbarCategoryDeleted = false;

  categories = ["Maison", "Produits", "Packs", "Autres"];

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

  headersArticlesTable = [
    {
      text: "Nom",
      align: "start",
      value: "name",
    },
    { text: "Description", value: "description" },
    { text: "Prix", value: "price" },
    { text: "Catégorie", value: "category" },
    { text: "Modifier", value: "update", sortable: false },
    { text: "Supprimer", value: "delete", sortable: false },
  ];

  headersGuidesTable = [
    {
      text: "Titre",
      align: "start",
      value: "title",
    },
    { text: "Description", value: "description" },
    { text: "Modifier", value: "update", sortable: false },
    { text: "Supprimer", value: "delete", sortable: false },
  ];

  headersCategoriesTable = [
    {
      text: "Nom",
      align: "start",
      value: "title",
    },
    { text: "Couleur", value: "color" },
    { text: "Icone", value: "icone" },
    { text: "Modifier", value: "update", sortable: false },
    { text: "Supprimer", value: "delete", sortable: false },
  ];

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
        setTimeout(() => {
          window.location.reload();
        }, 700);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // categories: Category[] = [];

  // async allCategories(): Promise<void> {
  //   this.categories = (await axios.get(`/api/categories`)).data as Category[];
  // }

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
        setTimeout(() => {
          window.location.reload();
        }, 700);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  createGuide(): void {
    axios
      .post("/api/createGuide", {
        title: this.titleGuide,
        image: this.imageGuide,
        description: this.descriptionGuide,
      })
      .then((response) => {
        console.log(response);
        setTimeout(() => {
          window.location.reload();
        }, 700);
      })
      .catch((error) => {
        console.log(error);
      });
  }

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
