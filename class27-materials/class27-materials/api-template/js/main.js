//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  //const url = 'https://pokeapi.co/api/v2/pokemon/'+choice
  const url = `https://api.nasa.gov/planetary/apod?api_key=3n7RJW7cKw0PMmolskWu6OweQDwNhJETEQuiXcbd&date=${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      if (data.media_type === "image") {
        document.querySelector("img").src = data.hdurl;
      } else if (data.media_type === "video") {
        document.querySelector("iframe").src = data.url;
      }

      document.querySelector("h3").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
