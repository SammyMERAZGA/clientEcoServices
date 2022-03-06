import Vue from "vue";
import Component from "vue-class-component";
import { User } from "../../types/User";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

@Component
export default class Account extends Vue {
  userSmy: User[] = [];

  async user(): Promise<void> {
    this.userSmy = (await axios.get(`/api/user`)).data as User[];
  }

  mounted(): void {
    this.user();
  }
}