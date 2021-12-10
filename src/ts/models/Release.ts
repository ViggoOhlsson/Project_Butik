import { Track } from "./Track";

export class Release {
    id:string;
    title:string;
    artist:string;
    category:string;
    length:string;
    cover:string;
    price:number;
    type:string;
    year:number;
    tracklist:Track[];
    constructor(title:string, artist:string, year:number, category:string, length:string, price:number, type:string, tracklist:Track[]) {
        this.title = title;
        this.artist = artist;
        this.year = year;
        this.category = category;
        this.length = length;
        this.price = price;
        this.type = type;
        this.tracklist = tracklist;

        let tempTitle = title.replaceAll(" ", "-").toLowerCase();
        let tempArtist = artist.replaceAll(" ", "-").toLowerCase();
        this.id = tempArtist + "-" + tempTitle;
        this.cover = "assets/covers/" + category + "/" + this.id + ".png";
    }


}