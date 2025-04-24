let toDate = document.getElementById('date');                               // a variable for date
let pendingTask = document.getElementById('pending-task');                  // a variable for showing the number of pending task
let taskList = document.querySelector('.todo-list');                        // a variable to access the to do list
let inpForm = document.querySelector('form');                               // a variable to access to access the form for submission
let inpBox = document.querySelector('input');

let today = new Date();                                                     // create a new date object to show current date
toDate.innerText = today.toDateString();                                    // shortens tha date in a compressed readable formate

// tasklist in array, fetched from database   
const taskDataBase = [
    'Read 10 mins today', 
    "Plan today's task", 
    'Code for 30 mins'
];

// a function, when invoked add new task to the to do list
let addNewTask = (tonDbase) => {
    let taskHolder = document.createElement('div');                         //create a new div element 
    taskHolder.className = 'todo';                                          // assign classname to the newly created element
    taskHolder.innerHTML = `                                               
                <p class="todo-item">
                    <span><i class="fas fa-bars"></i></span> 
                    ${tonDbase}
                </p>
                <div class="butons">
                    <button class="check">
                        <i class="fas fa-check"></i>
                    </button>
                    <button class="trash">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
    `;
    taskList.insertBefore(taskHolder, taskList.children[0]);                // add the newly created element on the top of the existing tasks
}

taskDataBase.forEach(e => addNewTask(e));                                   // the addNewTask function is invoked for each entry on task database array, to create existing tasklist

let pendingTaskCal = () => {                                                  // a function that when invoked, calculates the total number of pending task on task list
    let taskOnList = document.querySelectorAll('.check');                    // select all the tasks on task list
    document.getElementById('pending-task').innerText = taskOnList.length;
}

pendingTaskCal();

inpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let inpValue = inpBox.value;
    addNewTask(inpValue);
    inpBox.value = '';
    pendingTaskCal();
});

// an eventlistener to task list to check for click events
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('check')) {
        let taskCehcked = e.target;                                       // identify the clicked node
        let checkedItem = e.target.parentNode.parentNode;                 // target the parenNode that is the task to be marked as completed
        checkedItem.classList.add('completed');                               // changes the node status as completed  
        taskCehcked.remove();                                                 // remove the check btn
        pendingTaskCal();                                                         // calculates the number of pending tasks   
    }
    if (e.target.classList.contains('trash')) {                           // checks if the trash icon is clicked
        e.target.closest('.todo').remove();                               // removes the closest todo class of the trash icon, which is the parent element
        pendingTaskCal();                                                         // calculates the number of pending tasks
    }
});
