class Release {
    type:string; // album, EP, single.
    title:string;
    artist:string;
    year:number;
    genre:string;
    length:number;
    tracklistLength:number;
    tracklist:Track[];
    price:number;
    cover:string;
    constructor(type:string, title:string, artist:string, year:number, genre:string, tracklist:Track[], price:number, cover:string) {
        this.type = type;
        this.title = title;
        this.artist = artist;
        this.year = year;
        this.genre = genre;
        this.price = price;
        this.cover = cover;
        this.tracklistLength = this.tracklist.length;
        tracklist.forEach(track => {
            this.length += track.length;
        });
        

    }
}
class Track {
    title:string;
    length:number;
}