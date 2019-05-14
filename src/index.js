document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.getElementById("create-task-form")
  const tasks = document.getElementById("tasks");
  taskForm.addEventListener("submit", createNewTask);
});

function createNewTask(e){
  e.preventDefault()
  let taskCreation = document.createElement('li');
  let newTask = document.getElementById("new-task-description")
  taskCreation.innerText = newTask.value
  tasks.appendChild(taskCreation)
  // console.log(taskCreation)
}


// button = document.getElementById("create-task-form")
//
// button.addEventListener("click", grab)

// function grab(e) {
//   e.preventDefault
// }
