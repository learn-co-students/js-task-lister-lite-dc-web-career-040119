
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form")

  form.addEventListener("submit", function(event){
    let name = document.getElementById("new-task-description").value
    event.preventDefault()
    createList(name)
    event.target.reset()
  }

  )
});

function createList(input){
  let unordered_list = document.getElementById("tasks")
  let list_element = document.createElement("li")
  list_element.innerHTML = `${input}`
  unordered_list.appendChild(list_element)
 }
