document.addEventListener("DOMContentLoaded", () => {

})

const form = document.getElementById('create-task-form')
form.addEventListener('submit', makeTask)

function makeTask(event){
  event.preventDefault()

// find input value of task description
  let taskInput = document.getElementById('new-task-description').value

  // display taskInput in the list div
  taskListDisplay(taskInput)

// clear the form

  // event.target.reset()

}

function taskListDisplay(taskInput){
// find list div and set to a variable
  let listDiv = document.getElementById('list')

//find the ul div and set to a variable
  let ulDiv = document.getElementById('tasks')

  let listItem = document.createElement('li')
  listItem.id = 'item-id'
  listItem.innerText = taskInput

  let btn = document.createElement('button')
  btn.innerText = 'Delete'
  deleteTask(listItem)

// append li to ul
  ulDiv.append(listItem, btn)
}

let deleteBtn = document.addEventListener('click', deleteTask)

function deleteTask(listItem){
  debugger
  listItem.remove()
}
