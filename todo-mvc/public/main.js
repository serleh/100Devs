deleteBtn = document.querySelectorAll(".del");
markCompletedBtn = document.querySelectorAll(".item span");
markInCompletedBtn = document.querySelectorAll(".item span.completed");

Array.from(deleteBtn).forEach((btn) => {
  btn.addEventListener("click", (_) => {
    const todoId = btn.dataset.id;

    fetch("/deleteTodo", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => location.reload());
  });
});

// Mark Complete
Array.from(markCompletedBtn).forEach((btn) => {
  btn.addEventListener("click", (_) => {
    const todoId = btn.dataset.id;

    fetch("/markCompleted", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => location.reload());
  });
});

// Mark Incompleted

Array.from(markInCompletedBtn).forEach((btn) => {
  btn.addEventListener("click", (_) => {
    const todoId = btn.dataset.id;

    fetch("/markInCompleted", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((res) => location.reload());
  });
});
