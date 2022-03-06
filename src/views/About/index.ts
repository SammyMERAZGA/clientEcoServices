import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class About extends Vue {
  motifs = [
    "Demande de renseignements",
    "Partenariat",
    "Recrutement",
    "Autres",
  ];
}