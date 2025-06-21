const deleteBtn = document.querySelectorAll(".del");
const markComplete = document.querySelectorAll(".item span");
const markUncomplete = document.querySelectorAll(".item span.completed");

// Delete A todo
Array.from(deleteBtn).forEach((btn) => {
  btn.addEventListener("click", (_) => {
    fetch("/deleteTodo", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        itemFromJs: btn.dataset.itemtext,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => location.reload());
  });
});

// Mark as Complete

Array.from(markComplete).forEach((btn) => {
  btn.addEventListener("click", (_) => {
    fetch("/markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        itemFromJs: btn.dataset.itemtext,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => location.reload());
  });
});

// Mark as UnComplete

Array.from(markUncomplete).forEach((btn) => {
  btn.addEventListener("click", (_) => {
    fetch("/markUnComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        itemFromJs: btn.dataset.itemtext,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => location.reload());
  });
});
