const addLikeBtn = document.querySelectorAll(".likes");
const deleteBtn = document.querySelectorAll(".del");

// ADD LIKE
Array.from(addLikeBtn).forEach((btn) => {
  btn.addEventListener("click", (_) => {
    const name = btn.dataset.name;
    const location = btn.dataset.location;

    fetch("/reciters/addLikes", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reciterLocation: location,
        reciterName: name,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => window.location.reload(true));
  });
});

// DELETE RECITER
Array.from(deleteBtn).forEach((btn) => {
  btn.addEventListener("click", (_) => {
    const rId = btn.dataset.id;

    fetch("/reciters/deleteReciter", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: rId,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => window.location.reload(true));
  });
});
