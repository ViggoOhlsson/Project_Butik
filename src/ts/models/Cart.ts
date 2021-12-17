import { CartItem } from "./CartItem";
import { Release } from "./release";

export class Cart {
  items: CartItem[];
  constructor() {
    if (localStorage.getItem("cart") == undefined) {
      localStorage.setItem("cart", "[]");
      console.log("cart set to []");
    }
    this.items = JSON.parse(localStorage.getItem("cart"));
  }

  increaseAmount(index: number) {
    this.items[index].amount++;
    this.SetStorage();
  }
  decreaseAmount(index: number) {
    this.items[index].amount--;
    this.SetStorage();
  }
  remove(index: number) {
    this.items.splice(index, 1);
    this.SetStorage();
  }

  addToCart(productToBeAdded: Release) {
    let itemToAdd = new CartItem(productToBeAdded, 1);
    this.items.push(itemToAdd);
    this.SetStorage();
  }
  SetStorage() {
    localStorage.setItem("cart", JSON.stringify(this.items));
    this.items = JSON.parse(localStorage.getItem("cart"));
  }
  contains(release: Release): boolean {
    let contains = false;
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item.item.id == release.id) {
        contains = true;
      }
    }
    return contains;
  }
  calculateCost(): number {
    let total: number = 0;
    for (let item of this.items) {
      total += item.item.price * item.amount;
    }
    return total;
  }
}
