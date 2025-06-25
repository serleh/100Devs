addLikeBtn = document.querySelectorAll(".likes");
deleteBtn = document.querySelectorAll(".del");

Array.from(addLikeBtn).forEach((btn) => {
  btn.addEventListener("click", (_) => {
    const name = btn.dataset.name;
    const location = btn.dataset.location;

    fetch("/addLike", {
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

// Delete
Array.from(deleteBtn).forEach((btn) => {
  btn.addEventListener("click", (_) => {
    const rId = btn.dataset.id;

    fetch("/deleteLike", {
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
