import { CartItem } from "./CartItem";
import { Release } from "./release";

export class Cart {
  items: CartItem[];
  constructor() {
    this.items = [];
  }
  addToCart(productToBeAdded: Release) {
    let itemToAdd = new CartItem(productToBeAdded, 1);
    this.items.push(itemToAdd);
    console.log(this.items);
  }
  /*removeFromCart(productToBeRemoved: Release){
    let itemRemove = new CartItem(productToBeRemoved, 1);
    this.items.splice(itemRemove);
    console.log(this.items);
  }*/
}
