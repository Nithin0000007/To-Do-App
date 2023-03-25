let input = document.querySelector("#input");
let addBtn = document.querySelector('#add-btn');
let taskContainer = document.querySelector('.all-task');

addBtn.addEventListener("click",function(){
    
    if(input.value == ""){
        input.style.borderColor = 'red';
    }
    else{
        input.style.borderColor = 'green';
    let taskDiv = document.createElement('div');
    taskDiv.classList.add("task");
    taskContainer.appendChild(taskDiv);

    let taskText = document.createElement('p');
    taskText.classList.add("task-input");
    taskText.innerHTML = input.value;
    taskDiv.appendChild(taskText);

    let checkTask = document.createElement('button');
    checkTask.classList.add("check-btn");
    checkTask.innerHTML = '<i class="fa-solid fa-check"></i>';
    taskDiv.appendChild(checkTask);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    console.log(deleteBtn);
    taskDiv.appendChild(deleteBtn);

    input.value = "";
       let ischeck = true;
    checkTask.addEventListener("click" , function(){
        taskText.style. textDecoration = 'line-through' ;
    })

    deleteBtn.addEventListener("click" , function(){
        taskContainer.removeChild(taskDiv);
    })
}
})




