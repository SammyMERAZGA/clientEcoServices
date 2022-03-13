import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
// TYPES
import { User } from "../../types/User";
import { Quotation } from "../../types/Quotation";
import { Product } from "../../types/Product";
import { Guide } from "../../types/Guide";
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
  products: Product[] = [];
  guides: Guide[] = [];
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

  categories = [
    {
      name: "Maison",
    },
    {
      name: "Produits",
    },
    {
      name: "Packs",
    },
    {
      name: "Autres",
    },
  ];

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
    { text: "Quantité", value: "quantity" },
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
      value: "name",
    },
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

  myUserId = 0;
  usernameUser = "";
  emailUser = "";
  typeUser = "";
  adminUser = false;

  updateUserForm = false;

  editUser(item: User): void {
    this.myUserId = item.id;
    this.usernameUser = item.username;
    this.emailUser = item.email;
    this.typeUser = item.type;
    this.adminUser = item.admin;
    this.updateUserForm = true;
  }

  updateUser(): void {
    axios
      .put(`/api/updateUser/${this.myUserId}`, {
        username: this.usernameUser,
        email: this.emailUser,
        type: this.typeUser,
        admin: this.adminUser,
      })
      .then((response) => {
        console.log(response);
        this.myUserId = 0;
        setTimeout(() => {
          window.location.reload();
        }, 700);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteUser(id: number): void {
    axios
      .delete(`/api/user/${id}`)
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

  async allProducts(): Promise<void> {
    this.products = (await axios.get(`/api/products`)).data as Product[];
  }

  async allGuides(): Promise<void> {
    this.guides = (await axios.get(`/api/guides`)).data as Guide[];
  }

  mounted(): void {
    this.allUsers();
    this.allQuotations();
    this.allProducts();
    this.allGuides();
  }
}
