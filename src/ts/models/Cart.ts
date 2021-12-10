import { CartItem } from "./CartItem";
import { Release } from "./release";

export class Cart {
  items: CartItem[];
  constructor() {
    this.items = JSON.parse(localStorage.getItem("cart"));
  }
  addToCart(productToBeAdded: Release) {
    let itemToAdd = new CartItem(productToBeAdded, 1);
    this.items.push(itemToAdd);
    console.log(this.items);
  }
  putInLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(this));
  }
}
