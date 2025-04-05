//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class MakeNetflixTvShows {
  constructor(title, genre, rating, numOfEP) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.numOfEP = numOfEP;
  }
  play() {
    console.lof("Playing...");
  }
  stop() {
    console.log("Stopping...");
  }
  saveToList() {
    console.log("Saved To list");
  }
}

let sololevelling = new MakeNetflixTvShows("Solo levelling", "anime", 99, 23);
