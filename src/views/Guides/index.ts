import Vue from "vue";
import Component from "vue-class-component";
import axios from "axios";
import { Guide } from "../../types/Guide";
import Footer from "../../components/Footer/Footer.vue";

@Component({
  components: {
    Footer,
  },
})
export default class Guides extends Vue {
  dialog = true;

  idGuide = 0;

  guides: Guide[] = [];

  async allGuides(): Promise<void> {
    this.guides = (await axios.get(`/api/guides`)).data as Guide[];
  }

  mounted(): void {
    this.allGuides();
  }
}