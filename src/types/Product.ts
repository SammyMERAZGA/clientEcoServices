export type Product = {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
  category: {
    id: number;
    name: string;
    icon: string;
  }
};
