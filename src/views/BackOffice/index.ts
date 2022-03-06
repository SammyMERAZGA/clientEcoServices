import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
import { User } from "../../types/User";
import { Quotation } from "../../types/Quotation";
// import { Category } from "@/types/Category";

@Component
export default class Commandes extends Vue {
  users: User[] = [];
  quotations: Quotation[] = [];
  role = ["Particulier", "Société"];

  username = "";
  password = "";
  email = "";
  type = "";

  snackbarUserAdded = false;
  snackbarUserDeleted = false;
  snackbarQuotationDeleted = false;
  snackbarGuideAdded = false;
  snackbarArticleAdded = false;
  snackbarCategoryAdded = false;

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

  categories = ["Maison", "Produits", "Packs", "Autres"];
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
        setTimeout(() => {
          window.location.reload();
        }, 700);
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
        setTimeout(() => {
          window.location.reload();
        }, 700);
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