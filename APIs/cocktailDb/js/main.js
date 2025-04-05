document.querySelector("button").addEventListener("click", fetchData);

function fetchData() {
  choice = document.querySelector("input").value;
  url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("h4").innerText = data.drinks[0].strDrink;
      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
      document.querySelector(".instruction").innerText =
        data.drinks[0].strInstructions;
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    });
}
