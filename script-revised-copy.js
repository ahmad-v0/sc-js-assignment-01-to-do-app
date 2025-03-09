const taskDataBase = [
    'Read 10 mins today', 
    "Plan today's task", 
    'Code for 30 mins'
];

var inputForm = document.querySelector('form');
var inputBox = document.querySelector('.todo-input');
var taskList = document.querySelector('.todo-list');
var inputTxt;
var checkboxes;

function loadTasks() {
    for (let i = 0; i < taskDataBase.length ; i++) {
        addNewTask(taskDataBase[i]);
    }
}

loadTasks();

var today = new Date();                                                 // a function in variable to catch the current date of user browser
document.getElementById('date').innerText = today.toDateString();       // to show the date as a string of day month day year

inputForm.addEventListener('submit', function(event) {                  // add a evenlistener to the from, for whenever enter key is pressed of plus icon is clicked, will invoke a function
    event.preventDefault();                                             // prevent the default behavior of event, as once form is submitted, the page will reload and value on inputBox will be cleared
    inputTxt = inputBox.value;                                          // store the input into a variable
    inputBox.value = '';                                                // manual removal of data from input text
    if (inputTxt !== "") {                                              // input validation, to prevent blank items to be stored as input
        addNewTask(inputTxt);                                           // add new item to the list
    }
});

function addNewTask(task) {                                                    // a function that when invoked, add new task to the task list
    var newTask = document.createElement('div');                           // create a new div element
    newTask.classList.add('todo');                                         // add the created div in to todo class
    newTask.innerHTML = `                                                   
                <p class="todo-item">
                    <span><i class="fas fa-bars"></i></span> 
                    ${task}
                </p>
                <div class="butons">
                    <button class="check">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="trash">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
    `;                                                                       // html elements added to newly created div
    taskList.appendChild(newTask);                                           // entire div is added to existing task list
    // var taskOnTop = document.querySelector('todo');
    // taskList.insertBefore(taskOnTop);
    pendingTaskCal();
    checkboxes = document.querySelectorAll('.check');
    console.log(checkboxes.length);
    return checkboxes;
}

function pendingTaskCal() {                                                 // a function that when invoked, calculates the total number of pending task on task list
    let taskOnList = document.querySelectorAll('.check');               // select all the tasks on task list
    document.getElementById('pending-task').innerText = taskOnList.length;      
}


for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('click', function(event) {
        console.log('test');
        let taskCehcked = event.target;
        let checkedItem = event.target.parentNode.parentNode;
        checkedItem.classList.add('completed');
        taskCehcked.remove();
        pendingTaskCal();
    });
}

document.querySelector('.todo-list').addEventListener('click', function(event) {        // select the entire to do list, add an eventlistener for click event
    if (event.target.classList.contains('trash')) {                                     // checks if the trash icon is clicked
        event.target.closest('.todo').remove();                                         // removes the closest todo class of the trash icon, which is the parent element
        pendingTaskCal();
    }
});





// document.addEventListener('DOMContentLoaded', function() {              // eventlistener to invoke an annonymous function once the content is loaded
//     pendingTaskCal();                                                   // calculate the number of pending task
// });

// document.addEventListener('change', function(event) {                    // an eventlistener to catch the changes on the entire document
//     if (event.target.classList.contains('itemCheck')) {                  // to check if the changes happened on checkboxes on tasks
//         pendingTaskCal();
//     };
// });



