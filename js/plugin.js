// Task model
let tasks = [
    {
        text: 'Learn js',
        id: '1'
    },
    {
        text: 'Learn angular',
        id: '2'
    }
];

// Get element list-group
let ul = document.querySelector('.list-group');

// tasks.forEach(task => {
//     let li = listTemplate(task);
//     // insertAdjacentElement
//     ul.insertAdjacentElement("afterbegin", li);
// });

tasks.forEach(task => ul.insertAdjacentElement("afterbegin", listTemplate(task)));

function listTemplate(task) {
    // Create element
    let li = document.createElement('li');
    // Add task text
    li.textContent = task.text;
    // Set id
    li.setAttribute('data-id', task.id);
    // Add class
    li.classList.add('list-group-item');
    // Return created li
    return li;
}

// AddTask
function addTask(text) {
    // Create task object
    const newTask = {text, id: String(tasks.length + 1)};
    // Add task on tasks
    tasks.unshift(newTask);
    // Add li at ul
    ul.insertAdjacentElement("afterbegin", listTemplate(newTask))
}

// Delete task
function deleteTask(id) {
    let element = document.querySelector(`[data-id="${id}"]`);

    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks.splice(i, 1);
        }
    }
    // найти элемент на страницы с таким же id и удалить его из разметки
    element.remove();
}

// Alert
let container = document.querySelector('.container');

function message(text) {
    let alert = document.querySelector('.alert');

    if (alert !== null) {
        container.removeChild(alert);
    }

    let div = document.createElement('div');
    div.innerHTML = text;
    div.className = "alert alert-info";
    container.insertBefore(div, container.firstChild);
}



