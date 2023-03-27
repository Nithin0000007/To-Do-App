let input = document.querySelector("#input");
let addBtn = document.querySelector('#add-btn');
let taskContainer = document.querySelector('.all-task');

addBtn.addEventListener("click",function(){
    
    if(input.value == ""){
        input.style.borderColor = 'red';
        input.setAttribute("placeHolder",'Please enter the task!!');
    }
    else{
        input.style.borderColor = 'green';
        input.setAttribute("placeHolder",'Enter the task');

    let taskDiv = document.createElement('div');
    taskDiv.classList.add("task");
    taskContainer.appendChild(taskDiv);

    let taskText = document.createElement('input');
    taskText.type = "text";
    taskText.classList.add("task-input");
    taskText.value = input.value;
    taskDiv.appendChild(taskText);

    let checkTask = document.createElement('button');
    checkTask.classList.add("check-btn");
    checkTask.innerHTML = '<i class="fa-solid fa-check"></i>';
    taskDiv.appendChild(checkTask);

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
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

input.addEventListener("keypress",function(e){
    if(e.key == "Enter"){
        e.preventDefault();
        addBtn.click();
    }
})




