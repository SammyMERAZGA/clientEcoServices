import Vue from "vue";
import Component from "vue-class-component";
import Footer from "../../components/Footer/Footer.vue";

@Component ({
  components: {
    Footer,
  },
})
export default class About extends Vue {
  motifs = [
    "Demande de renseignements",
    "Faire un retour",
    "Problème lors d'une commande",
    "Partenariat",
    "Recrutement",
    "Autres",
  ];
}