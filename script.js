// var taskForm = document.querySelector('form');
// taskForm.addEventListener('input', function(event) {
//     console.log(event.target.value);
// });

// document.querySelector('.todo-button').onClick = addTask();
// // document.querySelector('.todo-list') = [];
// var todoList = document.getElementsByClassName('todo');
// console.log(todoList.length);

// function addTask() {
//     var inputForm = document.querySelector('form');
//     var taskToAdd = inputForm.value;
//     var newItem = document.createElement('div');
//     newItem.classList.add('todo');
//     newItem.innerHTML =`
//                         <p class="todo-item">
//                             <span><i class="fas fa-bars"></i></span> 
//                                 ${taskToAdd}
//                         </p>
//                         <div class="buttons">
//                             <button class="check">
//                                 <i class="fas fa-check"></i>
//                             </button>
//                             <button class="trash">
//                                 <i class="fas fa-trash"></i>
//                             </button>
//                         </div>`;
// todoList.append(newItem);
// }
// console.log(todoList.length);


// var itemList = [];
// var itemToAdd = document.querySelector('input');
// itemToAdd.addEventListener('input', function(event) {
//     var itemValue = event.target.value;
// });

// var addToList = document.querySelector(".todo-button");
// addToList.addEventListener('submit', addTask())

// function addTask() {
//     itemList.append(itemValue);
// }

// console.log(itemList);

var taskList = document.querySelector('.todo-list');
var inputForm = document.querySelector('form');
var itemToAdd = document.querySelector('.todo-input');
var itemValue;
// var checkBoxes = document.getElementsByClassName('itemCheck');

document.addEventListener("change", function(event){
    if (event.target.classList.contains('itemCheck')) {
        // if (!event.target.checked){
        //     uncheckedItems();
        // }
        uncheckedItems();
    };
});

// var checkBoxes = document.querySelectorAll('.itemCheck');
// var checkBoxes;
// console.log(checkBoxes);

// for (var index = 0; index < checkBoxes.length; index++) {
//     checkBoxes[index].addEventListener("change", function(){
//         uncheckedItems();
//     })    
// }
// checkBoxes.addEventListener('change', function() {
//     uncheckedItems();
// });

// var itemValue;
// itemToAdd.addEventListener('input', function(event) {
//     // console.log(event.target.value);
//     itemValue = event.target.value;
// });
inputForm.addEventListener('submit', function(event) {
    event.preventDefault();
    itemValue = itemToAdd.value;
    itemToAdd.value = '';
    console.log(itemValue);
    addTask();
    uncheckedItems();
});

function addTask() {
    var newTask = document.createElement('div');
    newTask.classList.add('todo');
    newTask.innerHTML = `
                    <p class="todo-item">
                        <span><i class="fas fa-bars"></i></span> 
                            ${itemValue}
                    </p>
                    <div class="buttons">
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
}

function uncheckedItems() {
    var checkBoxes = document.querySelectorAll('.itemCheck');
    var pendingTask = 0;
    for (var index = 0; index < checkBoxes.length; index++) {
        if (!checkBoxes[index].checked) {
            pendingTask++;
        }
    }
    // checkBoxes.forEach((checkbox) => {
    //     if(!checkbox.checked) {
    //         pendingTask++;
    //     }
    // })

    console.log(pendingTask);
}