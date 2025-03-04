
var inputForm = document.querySelector('form');
var inputBox = document.querySelector('.todo-input');
var taskList = document.querySelector('.todo-list');
var inputTxt;

var today = new Date();
document.getElementById('date').innerText = today.toDateString();


inputForm.addEventListener('submit', function(event) {
    event.preventDefault();
    inputTxt = inputBox.value;
    inputBox.value = '';
    if (inputTxt !== "") {
        addNewTask();
    }
});

document.addEventListener('change', function(event) {
    if (event.target.classList.contains('itemCheck')) {
        pendingTaskCal();
    };
});

function addNewTask() {
    var newTask = document.createElement('div');
    newTask.classList.add('todo');
    newTask.innerHTML = `
                <p class="todo-item">
                    <span><i class="fas fa-bars"></i></span> 
                    ${inputTxt}
                </p>
                <div class="butons">
                    <button class="check">
                        <i class="fas fa-check"></i>
                        <input type="checkbox" name="" id="" class="itemCheck">
                    </button>
                    <button class="trash">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
    `;
    taskList.appendChild(newTask);
    // var taskOnTop = document.querySelector('todo');
    // taskList.insertBefore(taskOnTop);
    pendingTaskCal();
}

function pendingTaskCal() {
    var taskOnList = document.querySelectorAll('.itemCheck');
    var pendingTask = 0;
    for (index = 0; index < taskOnList.length; index++) {
        var taskToCheck = taskOnList[index];
        if (!taskToCheck.checked) {
            pendingTask++;
        }
    }
    // console.log(pendingTask);
    document.getElementById('pending-task').innerText = pendingTask;
}
