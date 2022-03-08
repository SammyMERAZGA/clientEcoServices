import Vue from "vue";
import Component from "vue-class-component";
import Footer from "../../components/Footer/Footer.vue";

@Component({
  components: {
    Footer,
  },
})
export default class Services extends Vue {
  servicesType = ["Conseil", "Développement", "Formation", "Réseau"];

  services = [
    {
      id: 1,
      name: "Panneau solaire",
      type: "Installation",
      description: "Produisez votre propre éléctricité !",
      image:
        "https://t3.ftcdn.net/jpg/01/92/27/24/360_F_192272435_0HtuUy0H66lwolEUJc5HQRtsMFAalHxc.jpg",
    },
    {
      id: 2,
      name: "Maison écologique",
      type: "Rénovation",
      description: "Passez du côté vert et rendez votre maison écologique 💚",
      image:
        "https://www.internorm.fr/wp-content/uploads/2016/01/ecological-house-isolated-3d-image.jpg",
    },
    {
      id: 1,
      name: "Isolation intérieure",
      type: "Travaux",
      description: "Isoler votre maison pour vivre un bon hiver au chaud",
      image:
        "https://www.alu-pvc-bois.com/wp-content/uploads/2020/06/e3a32a44-411a-4610-9cf9-2f55a99f20a0.jpg",
    },
    {
      id: 4,
      name: "Chaudière",
      type: "Installation",
      description: "Passez l'hiver éco-responsable 😃",
      image:
        "https://static.topchaleur.com/media/catalog/product/image/1600x1600/new/chaudiere-a-granules-hidro-cantina-compact-20765-1.jpg",
    },
    {
      id: 5,
      name: "Chaudière",
      type: "Installation",
      description: "Passez l'hiver éco-responsable 😃",
      image:
        "https://static.topchaleur.com/media/catalog/product/image/1600x1600/new/chaudiere-a-granules-hidro-cantina-compact-20765-1.jpg",
    },
    {
      id: 6,
      name: "Chaudière",
      type: "Installation",
      description: "Passez l'hiver éco-responsable 😃",
      image:
        "https://static.topchaleur.com/media/catalog/product/image/1600x1600/new/chaudiere-a-granules-hidro-cantina-compact-20765-1.jpg",
    },
  ];
}
