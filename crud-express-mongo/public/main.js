const update = document.querySelector("#update-button");
const deleteButton = document.querySelector("#delete-button");

update.addEventListener("click", (_) => {
  fetch("/quotes", {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Dartth Vader",
      quote: "I find your lack of faith disturbing",
    }),
  })
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((response) => {
      location.reload(true);
    });
});

// DELETE
deleteButton.addEventListener("click", (_) => {
  fetch("/quotes", {
    method: "delete",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Dartth Vader",
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then(window.location.reload());
});
