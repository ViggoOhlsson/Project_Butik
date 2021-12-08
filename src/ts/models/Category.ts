export class Category {
    name:string;
    id:string;
    image:string;
    constructor(name:string) {
        this.name = name;
        this.id = name.toLowerCase();
        this.image = "../assets/category-bgs/" + this.id + ".png";
    }
}