import { albums } from "../data/albums";
import { Release } from "./release";

export class CartItem {
    item:Release;
    amount:number;
    constructor(item:Release, amount:number) {
        this.item = item;
        this.amount = amount;
    }
}