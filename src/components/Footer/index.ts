import Vue from "vue";
import Component from "vue-class-component";

@Component({
  components: {},
})
export default class Footer extends Vue {
  links = [
    {
      name: "Accueil",
      route: "/",
    },
    {
      name: "Conditions générales",
      route: "/GeneralCondition",
    },
  ];
}