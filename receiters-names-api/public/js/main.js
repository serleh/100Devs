const deleteButtons = document.getElementsByClassName("fa-trash");
const likeButtons = document.getElementsByClassName("fa-heart");

Array.from(deleteButtons).forEach((button) => {
  button.addEventListener("click", (_) => {
    const rName = button.dataset.name;
    fetch("/receiters", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reciterName: rName,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => window.location.reload());
  });
});

// Like

Array.from(likeButtons).forEach((button) => {
  button.addEventListener("click", (_) => {
    const rName = button.dataset.name;
    const rLocation = button.dataset.location;
    const rlike = Number(button.dataset.like);

    fetch("/receiters", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reciterName: rName,
        reciterLocation: rLocation,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => window.location.reload());
  });
});
