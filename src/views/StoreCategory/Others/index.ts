import Vue from "vue";
import Component from "vue-class-component";
import { Product } from "../../../types/Product";
import { Category } from "@/types/Category";
import axios from "axios";
import PaypalButtons from "../../../components/PaypalButtons.vue";

@Component({
  components: {
    PaypalButtons,
  }
})
export default class Others extends Vue {
  products: Product[] = [];
  categories: Category[] = [];

  dialog = true;
  idProduit = 0;

  cart: Product[] = [];

  async allOthersProducts(): Promise<void> {
    this.products = (await axios.get(`/api/others`)).data as Product[];
  }

  async allCategories(): Promise<void> {
    this.categories = (await axios.get(`/api/categories`)).data as Category[];
  }

  mounted(): void {
    this.allOthersProducts();
    this.allCategories();
  }

  addToCart(product: Product): unknown {
    for (let i = 0; i < this.cart.length; i++) {
      if (this.cart[i].id === product.id) {
        return this.cart[i].quantity++;
      }
    }
    this.cart.push(product);
  }

  cartPlusOne(product: Product): void {
    product.quantity = product.quantity + 1;
  }

  cartRemoveItem(id: number): void {
    this.cart.splice(id, 1);
  }

  cartMinusOne(product: Product, id: number): void {
    if (product.quantity == 1) {
      this.cartRemoveItem(id);
    } else {
      product.quantity = product.quantity - 1;
    }
  }

  cartTotalAmount(): number {
    let total = 0;
    for (const product in this.cart) {
      total = total + this.cart[product].quantity * this.cart[product].price;
    }
    return total;
  }

  cartTotal(product: Product): number {
    let total = 0;

    total += product.quantity * product.price;
    return total;
  }

  searchProducts = [
    "Starter Pack - Éco Services",
    "Poubelle écologique",
    "Chaise en bois écologique",
    "Pack de 3 brosses à dents",
  ];
}