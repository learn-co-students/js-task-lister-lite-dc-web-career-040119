document.addEventListener("DOMContentLoaded", () => {
    createTaskForm.addEventListener('submit', addTask)
});

const createTaskForm = document.getElementById('create-task-form');

const submitTask = (e) => {
    return Object.assign(
        {},
        {description: document.getElementById('new-task-description').value},
        {priority: document.getElementById('new-task-priority').value}
    )
};
const addTask = (e) => {
    e.preventDefault();
    if(!!submitTask(e).description) {
        const taskList = document.getElementById('tasks');
        const taskItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');
        deleteButton.setAttribute('class','delete');
        deleteButton.innerText = 'x';
        deleteButton.addEventListener('click', e => e.target.parentNode.remove());

        editButton.setAttribute('class', 'edit');
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', editTask);

        taskItem.innerHTML = `<span>${submitTask(e).description}</span>`;
        taskItem.setAttribute('class', submitTask(e).priority);
        taskItem.appendChild(deleteButton);
        taskItem.appendChild(editButton);
        taskList.appendChild(taskItem)
    }

};

const editTask = e => {

    const editForm = document.createElement('div');

    editForm.innerHTML = `
    <form id="edit-task-form" action="#" method="post">
    <label for="edit-task-description">Task description:</label>
    <input type="text" id="edit-task-description" name="edit-task-description" placeholder="description" value="${e.target.parentElement.firstChild.innerText}">
    <label for="edit-task-priority">Priority</label>
    <select type="select" id="edit-task-priority">
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
    <input type="submit" value="Edit Task">
  </form>
    `;


    const bodyElement = document.querySelector('#main-content')
    bodyElement.appendChild(editForm)
    editForm.firstElementChild.addEventListener('submit', (event) => {
        updateTask(event, e.target.parentElement)
    })
};

const updateTask = (event, node) => {
        event.preventDefault()
        const description = document.getElementById('edit-task-description').value;
        const priority = document.getElementById('edit-task-priority').value;
        node.firstChild.innerText = description
        node.firstChild.setAttribute('class', priority)
        event.target.remove()
}