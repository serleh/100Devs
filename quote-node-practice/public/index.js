const update = document.querySelector("#update-button");

update.addEventListener("click", (_) => {
  fetch("/quotes", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Maryam Saleh",
      quote: "Why will you be sad when you can be happy?",
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((res) => window.location.reload(true));
});
