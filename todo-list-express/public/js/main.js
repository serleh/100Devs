deleteBtn = document.getElementsByClassName("fa-trash");
markCompleteBtn = document.querySelectorAll(".item span");
markUnCompleteBtn = document.querySelectorAll(".item span.completed");

// Delete Todo
Array.from(deleteBtn).forEach((btn) => {
  btn.addEventListener("click", (_) => {
    fetch("/deleteTodo", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: btn.dataset.todo,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => window.location.reload());
  });
});

// Mark Todo as completed
Array.from(markCompleteBtn).forEach((btn) => {
  btn.addEventListener("click", (_) => {
    fetch("/markCompleted", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: btn.dataset.todo,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => window.location.reload())
      .catch((err) => {
        console.error(error);
      });
  });
});

// Mark Todo as Uncompleted

Array.from(markUnCompleteBtn).forEach((btn) => {
  btn.addEventListener("click", (_) => {
    fetch("/markUnCompleted", {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        todo: btn.dataset.todo,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => window.location.reload());
  });
});
