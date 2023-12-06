document.addEventListener("DOMContentLoaded", function () {
  const taskContainer = document.getElementById("taskList");
  const addButton = document.getElementById("addButton");
  addButton.addEventListener("click", addTask);

  function addTask() {
    const input = document.getElementById("newTaskInput");

    if (input.value.trim() !== "") {
      const task = document.createElement("li");
      const taskText = document.createElement("span");
      taskText.textContent = input.value;

      const completeButton = document.createElement("button");
      completeButton.textContent = "Conferma";
      completeButton.classList.add("completeButton");

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Elimina";
      deleteButton.classList.add("deleteButton");

      task.appendChild(taskText);
      task.appendChild(completeButton);
      task.appendChild(deleteButton);

      taskContainer.appendChild(task);
      input.value = "";
    }
  }

  taskContainer.addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("completeButton")) {
      toggleTask(target.parentNode);
    } else if (target.classList.contains("deleteButton")) {
      deleteTask(target.parentNode);
    }
  });

  function toggleTask(task) {
    const taskText = task.querySelector("span");
    taskText.classList.toggle("completed");
  }

  function deleteTask(task) {
    const shouldDelete = confirm("Sei sicuro di voler eliminare questo task?");

    if (shouldDelete) {
      taskContainer.removeChild(task);
    }
  }
});
