document.addEventListener("DOMContentLoaded", () => {
  // your code here

  btn = document.getElementById("btn");
  newTask = document.getElementById("new-task-description");
  myTodos = document.getElementById("list");
  ul = document.getElementById("tasks");
  li = document.createElement("li");
  tasks = [];

  btn.addEventListener("click", submitTask);

  function submitTask(event) {
    event.preventDefault();

    const taskValue = newTask.value;

    if (taskValue.trim() !== "") {
      tasks.push(taskValue);

      newTask.value = "";

      displayTasks();
    }
  }

  function displayTasks() {
    // Clear the current list
    ul.innerHTML = "";

    // Add each task to the list
    tasks.forEach((task) => {
      const li = document.createElement("li");

      //creates a container for the task text and delete button
      const taskContainer = document.createElement("div");
      taskContainer.style.display = "flex";
      taskContainer.style.justifyContent = "space-between";
      taskContainer.style.alignItems = "center";
      taskContainer.style.width = "100%";

      //Adds task text
      const taskText = document.createElement("span");
      taskText.textContent = task;
      taskContainer.appendChild(taskText);

      //creates a delete button
      const deletebtn = document.createElement("button");
      deletebtn.innerText = "X";
      deletebtn.style.marginLeft = "10px";

      deletebtn.addEventListener("click", () => {
        // delete task from array

        const index = tasks.indexOf(task);
        if (index > -1) {
          tasks.splice(index, 1);
        }
        //update display

        displayTasks();
      });

      taskContainer.appendChild(deletebtn);
      li.appendChild(taskContainer);
      ul.appendChild(li);
    });
  }
});
