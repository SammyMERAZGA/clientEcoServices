import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";

@Component
export default class Login extends Vue {
  step = 1;

  role = ["Particulier", "Société"];

  username = "";
  password = "";
  email = "";
  type = "";

  snackbarLogin = false;
  snackbarRegister = false;

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
          this.$router.push("/");
        }, 700);
      })
      .catch((error) => {
        console.log(error);
        alert("Erreur lors de l'inscription");
      });
  }

  login(): void {
    axios
      .post("/api/login", {
        email: this.email,
        password: this.password,
      })
      .then((response) => {
        console.log(response);
        setTimeout(() => {
          this.$router.push("/account");
        }, 700);
      })
      .catch((error) => {
        console.log(error);
        alert("Email ou mot de passe incorrect");
      });
      this.$store.commit("nowLog" , {val:true});
  }
}