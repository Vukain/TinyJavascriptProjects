const search = document.querySelector('.search');
const input = document.querySelector('.add');
const ul = document.querySelector('ul');
const form = document.querySelector('form');
const taskNumber = document.querySelector('h1 span');

let listItems = document.querySelectorAll('.task');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase()
    let tasks = [...listItems];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li));
}

function removeTask(e) {
    e.target.parentNode.remove();
    // e.target.parentNode.style.textDecoration = "line-through";
    listItems = document.querySelectorAll('.task');
    taskNumber.textContent = listItems.length;
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = "task";
    task.innerHTML =  titleTask + "&nbsp;<button>-</button>";
    ul.appendChild(task);
    input.value = "";
    listItems = document.querySelectorAll('.task');
    taskNumber.textContent = listItems.length;
    task.querySelector("button").addEventListener('click', removeTask)
}

search.addEventListener('input', searchTask);
form.addEventListener("submit", addTask)


