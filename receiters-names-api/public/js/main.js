const deleteButton = document.getElementsByClassName("fa-trash");
const likeButton = document.getElementsByClassName("fa-heart");

Array.from(deleteButton).forEach((button) => {
  button.addEventListener("click", (_) => {
    fetch("/reciters", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reciterName: button.dataset.name,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => {
        window.location.reload();
      });
  });
});

Array.from(likeButton).forEach((button) => {
  button.addEventListener("click", (_) => {
    fetch("/reciters", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reciterName: button.dataset.name,
        reciterLocation: button.dataset.location,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then(location.reload());
  });
});
