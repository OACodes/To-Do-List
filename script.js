const taskInput = document.getElementById('search');
const btn = document.getElementById('search-btn');
const wrapper = document.getElementsByClassName('wrapper');
const cont = document.getElementById('container');
let count = 2;
function addTask(){
    const newTask = taskInput.value;
    if (newTask.trim() === ""){
        alert('task name is required!');
        return;
    }
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

    // delete adding & styling

    const delBox = document.createElement('div');
    delBox.className = 'delete-box';
    delBox.id = 'showAlert';
    delBox.innerHTML = '<button class="delete-btn">X</button>';

    // adding task on screen
    cont.appendChild(displayTask);
    displayTask.appendChild(newTitle);
    displayTask.appendChild(checkbox);
    displayTask.appendChild(delBox);

    // clear the search input
    taskInput.value = "";

}
btn.addEventListener('click', addTask);

const comp = document.getElementById('check');
// const showAlertBtn = document.getElementById('showAlert');
const customAlert = document.getElementById('customAlert');

document.addEventListener('change', function(event){
    if (event.target.type === "checkbox"){
        const task_div = event.target.closest("div");
        const id = task_div.getAttribute("data-id");
        // const task = task_div.id;

        console.log(event.target);
        console.log(`Deleting task with ID: ${task_div} and ${id}`);

        setTimeout(() => {
            customAlert.style.display = 'flex';
            localStorage.removeItem(id, task_div.textContent) // remove from storage
            console.log(task_div.textContent);
            count -= 1;
            cont.removeChild(task_div);
        }, 500);
    }
});

const del = document.getElementsByClassName('delete-btn');
// Attach after tasks are rendered/created
document.querySelectorAll('.delete-btn').forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        const task_div = event.target.closest("div");
        const id = task_div.getAttribute("data-id");
        // Show custom alert
        document.getElementById('customAlert').style.display = 'flex';
        // Store reference to the task to delete, if needed
        localStorage.removeItem(id, task_div.parentNode.textContent);
        count -= 1;
        cont.removeChild(task_div.parentNode);
        // alert(task_div.parentNode.textContent + " has been removed");
    });
});

// alert buttons (CONFIRM)
const confirmBtn = document.getElementById('confirmBtn');
confirmBtn.addEventListener('click', function(event){
    customAlert.style.display = 'none';
    event.stopPropagation(); // Prevent bubbling
});

