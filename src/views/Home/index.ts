import Vue from "vue";
import Component from "vue-class-component";
import Footer from "../../components/Footer/Footer.vue";

@Component({
  components: {
    Footer,
  },
})
export default class Home extends Vue {
  pictures = [
    {
      src: "https://wallpapercave.com/wp/wp5125439.jpg",
    },
    {
      src: "https://wallpapers.com/images/high/breathtaking-nature-anime-scenery-ozmhfiuqzmai1bha.jpg",
    },
    {
      src: "https://cdn.wallpapersafari.com/66/73/p5rfhv.jpg",
    },
    {
      src: "https://i.pinimg.com/originals/ae/2e/cb/ae2ecb631f037846715e0c45609cbfb8.jpg",
    },
  ];

  pages = [
    {
      id: 1,
      name: "Boutique",
      url: "/store",
      icon: "fas fa-shopping-cart",
      iconColor: "indigo darken-4",
      image:
        "https://www.graphicsprings.com/filestorage/stencils/a7ee8cc210353c0ef5c403d513c386c4.png?width=500&height=500",
    },
    {
      id: 2,
      name: "Services",
      url: "/services",
      icon: "fas fa-leaf",
      iconColor: "light-blue darken-4",
      image:
        "https://media.istockphoto.com/vectors/solar-panel-sun-logo-template-save-energy-green-power-and-natural-vector-id1175616187?k=20&m=1175616187&s=170667a&w=0&h=kEoGh4iEIJd6wUOLStLL1ZIHzM_884lQkk6R-qsepeM=",
    },
    {
      id: 3,
      name: "Guides",
      url: "/guides",
      icon: "fas fa-file-invoice",
      iconColor: "green lighten-1",
      image:
        "http://construire-des-savoirs.fr/wp-content/uploads/2016/08/ecology-300x300.jpg",
    },
    {
      id: 4,
      name: "Connexion",
      url: "/login",
      icon: "fas fa-user-circle",
      iconColor: "blue lighten-2",
      image:
      "https://backtowork.ch/wp-content/uploads/2020/05/user3.png",
    },
    {
      id: 5,
      name: "À propos",
      url: "/about",
      icon: "fas fa-users",
      iconColor: "blue-grey",
      image:
        "https://cdn.iconscout.com/icon/free/png-256/ecology-team-2871963-2383617.png",
    },
  ];
}