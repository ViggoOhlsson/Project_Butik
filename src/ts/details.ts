import { albums } from "./data/albums";
import { Release } from "./models/release";


window.onload = () => {
    let urlID = urlGet("r");
    console.log(urlID)
    displayReleaseInfo(selectRelease(urlID));
}
function displayReleaseInfo(release:Release) {
    console.log("Selected Release:", release)
    let coverImg:HTMLImageElement = document.getElementById("cover") as HTMLImageElement;
    coverImg.src = "../" + release.cover;

    let releaseTitle:HTMLHeadingElement = document.getElementById("releaseTitle") as HTMLHeadingElement;
    releaseTitle.innerHTML = release.title;

    let releaseArtist:HTMLParagraphElement = document.getElementById("releaseArtist") as HTMLParagraphElement; 
    releaseArtist.innerHTML = release.artist;

    let tracklist:HTMLOListElement = document.getElementById("tracklist") as HTMLOListElement;
    for (let track of release.tracklist) {
        let row = document.createElement("li");
        row.innerHTML = track.length + " " + track.title;
        tracklist.appendChild(row);
    } 
    let artist:HTMLLIElement = document.getElementById("artist") as HTMLLIElement;
    artist.innerHTML = release.artist;
    
    let title:HTMLLIElement = document.getElementById("title") as HTMLLIElement;
    title.innerHTML = release.title;
    
    let year:HTMLLIElement = document.getElementById("year") as HTMLLIElement;
    year.innerHTML = release.year.toString();

    let type:HTMLLIElement = document.getElementById("type") as HTMLLIElement;
    type.innerHTML = release.type;

    let genre:HTMLLIElement = document.getElementById("genre") as HTMLLIElement;
    genre.innerHTML = release.category.charAt(0).toUpperCase() + release.category.slice(1);
    
    let listlength:HTMLLIElement = document.getElementById("listlength") as HTMLLIElement;
    listlength.innerHTML = release.tracklist.length.toString();
    
    let length:HTMLLIElement = document.getElementById("length") as HTMLLIElement;
    length.innerHTML = release.length;
    
    let price:HTMLParagraphElement = document.getElementById("price") as HTMLParagraphElement;
    price.innerHTML = release.price.toString() + "kr";
    
}

function selectRelease(inputID:string):Release {
    for (let release of albums) {
        if (release.id == inputID) {
            return release;
        }
    }
    
}

function urlGet(param:string):string {
    return new URLSearchParams(window.location.search).get(param);
}