const taskInput = document.getElementById('search');
const btn = document.getElementById('search-btn');
const wrapper = document.getElementsByClassName('wrapper');
const cont = document.getElementById('container');
let count = 2;
function addTask(){
    const newTask = taskInput.value;
    count += 1;
    localStorage.setItem(count, newTask);

    // task container
    const displayTask = document.createElement("div");
    displayTask.id = 'task';
    displayTask.setAttribute('data-id', count);
    console.log('task box created');

    // title adding & styling
    const newTitle = document.createElement("h1");
    newTitle.id = 'task-title';
    newTitle.textContent = newTask;
    console.log('title created');

    // checkbox adding & styling
    const checkbox = document.createElement('label');
    checkbox.className = 'checkbox';
    checkbox.innerHTML = '<input type="checkbox"><span id="check"></span>'
    // checkbox.setAttribute('type', 'checkbox');
    console.log('checkbox created');


    cont.appendChild(displayTask);
    displayTask.appendChild(newTitle);
    displayTask.appendChild(checkbox);

}



btn.addEventListener('click', addTask);

// window.addEventListener('load', () => {
//     let savedTask = localStorage.getItem('Task' + count)

// })

const comp = document.getElementById('check');


document.addEventListener('change', function(event){
    if (event.target.type === "checkbox"){
        const task_div = event.target.closest("div");
        const id = task_div.getAttribute("data-id");
        const task = task_div.id;

        console.log(event.target);
        console.log(`Deleting task with ID: ${task_div} and ${id}`);

        setTimeout(() => {
            localStorage.removeItem(id, task_div.textContent) // remove from storage
            console.log(task_div.textContent);
            cont.removeChild(task_div);
        }, 2000);
    }
});