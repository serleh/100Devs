document.querySelector("button").addEventListener("click", getRecipe);

function getRecipe() {
  choice = document.querySelector("input").value;
  url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${choice}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      //console.log(data.meals[0].strMeal);
      document.querySelector("span").innerText = data.meals[0].strMeal;
      document.querySelector("img").src = data.meals[0].strMealThumb;
      document.querySelector("p").innerText = data.meals[0].strInstructions;
      document.querySelector("iframe").src = data.meals[0].strYoutube;

      const youtubeUrl = data.meals[0].strYoutube;
      const videoId = youtubeUrl.split("v=")[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      document.querySelector("iframe").src = embedUrl;
    });
}
