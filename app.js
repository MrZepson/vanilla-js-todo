/*
Todo:
- Fix overflow to scroll.
- If input-field is empty, you can't add task.
*/

// Variables
const addTaskButton = document.querySelector("#add-task");

// Adds a todo with the input-value.
const addTodo = () => {
  const todoCount =
    document.querySelector("#todos-container").childElementCount;
  const taskInput = document.querySelector("#task-input");
  document.querySelector("#todos-container").innerHTML += `
  <div id="todo${todoCount + 1}" class="todo">
    <div id="task-container${todoCount + 1}" class="todo-check-label-container">
      <input id="checkbox${todoCount + 1}" type="checkbox" class="todo-check" />
      <h1 id="task-text${todoCount + 1}" class="todo-name">${
    taskInput.value
  }</h1>
    </div>
      <button onClick="removeTask('todo${todoCount + 1}')" id="remove-task${
    todoCount + 1
  }" class="todo-button">
        <i class="fa-solid fa-trash-can"></i>
      </button>
  </div>
  `;
};

// Remove the corresponding task
const removeTask = (task) => {
  document.querySelector(`#${task}`).remove();
};

// Strikes over the todo-text when checkbox is checked.
const toggleTodo = () => {
  for (
    let i = 0;
    i < document.querySelector("#todos-container").childElementCount;
    i++
  ) {
    const taskContainer = document.querySelector(`#task-container${i + 1}`);
    const checkbox = document.querySelector(`#checkbox${i + 1}`);
    const taskText = document.querySelector(`#task-text${i + 1}`);

    checkbox.addEventListener("click", () => {
      if (checkbox.checked) {
        taskContainer.classList.add("checked");
        taskText.classList.add("checked");
        checkbox.setAttribute("checked", "");
      } else {
        taskContainer.classList.remove("checked");
        taskText.classList.remove("checked");
        checkbox.removeAttribute("checked");
      }
    });
  }
};

// Makes sure the site has loaded fully before executing any events.
window.addEventListener("load", () => {
  addTaskButton.addEventListener("click", () => {
    addTodo();
    toggleTodo();
    document.querySelector("#task-input").value = "";
  });
  toggleTodo();
});
