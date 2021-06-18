import { createProject, projDivCreator,elementCreator,dataNumber} from "./project";

import { createTask,taskDivCreator,taskContainer} from "./task";

const addIcon = document.getElementById("addIcon");
const modal = document.body.querySelector(".modal");
const closeModal = document.body.querySelector("#closeBtn");
const sub = document.body.querySelector("#sub");
const myForm = document.body.querySelector(".myForm");
const taskForm = document.body.querySelector(".taskForm");
const leftSection = document.body.querySelector(".left-section");
const barBtn = document.getElementById("barIcon");
const addTaskModal = document.body.querySelector(".modal-tasks");

const addTaskBtn = document.body.querySelector(".task-btn");

const closeTaskBtn = document.body.querySelector("#taskCloseBtn");
const subTaskBtn = document.body.querySelector("#taskSub");

const upperElements = document.querySelectorAll(".left-secItem");

const upperDivsArray = Array.from(upperElements);

const toDoHeading = document.body.querySelector(".rightSecSpan");

let projectSelector = "Inbox";
let projectArray = [];
let dataNumberTasks = 0;
upperDivsArray.forEach(function(e){
    e.addEventListener("click",function(ele){
        console.log(ele.target.textContent);
        projectSelector = ele.target.textContent;
        toDoHeading.textContent = projectSelector;

         

        let addTodiv = taskArr.filter(checkTask);
        console.log(addTodiv);
        taskContainer.innerHTML = "";
        addTodiv.forEach(function(e){
           
          taskDivCreator(e);
        })
    })
})


function checkTask(ar){
           if(projectSelector == ar.projectSelect){
               return true;
           }
        }



addTaskBtn.addEventListener("click",function(){
   addTaskModal.style.display = "block";
})

closeTaskBtn.addEventListener("click",function(){
    addTaskModal.style.display = "none";
})

let taskArr = [];

subTaskBtn.addEventListener("click",function(e){
    e.preventDefault();

    const taskTitle = taskForm.elements[0].value;
    const taskDes = taskForm.elements[1].value;
    const taskDate = taskForm.elements[2].value;
    const taskPriority = taskForm.elements[3].value;
   const FinTaskPriority = taskPriority.toLowerCase();
    console.log(taskTitle);
    console.log(taskDes);
    console.log(taskDate);
    console.log(typeof(taskPriority));
    if(taskTitle == "" || taskDes == "" || taskDate == "" || taskPriority == ""){
        alert("Enter all the values");
    }
    else if((FinTaskPriority !== "red") && (FinTaskPriority !== "yellow") && (FinTaskPriority !== "green")){
        alert("Enter from red,yellow or green");
    }
    else{
        let taskInfo = new createTask(taskTitle,taskDes,taskDate,FinTaskPriority,dataNumberTasks,projectSelector);
        taskArr.push(taskInfo);

        
        taskDivCreator(taskInfo);
        dataNumberTasks++;
        taskForm.reset();
        addTaskModal.style.display = "none";
        console.log(taskArr);
    }




})


 
 







barBtn.addEventListener("click",function(e){
   const style = getComputedStyle(leftSection);
   const disp = style.display;
   if(disp == "none"){
       leftSection.style.display = "block"
   }
   else{
       leftSection.style.display = "none"
   }
})

addIcon.addEventListener("click",function(){
     
    modal.style.display = "block";
})

closeModal.addEventListener("click",function(){
    modal.style.display = "none";
})


let arr = [];


sub.addEventListener("click",function(e){
    
    e.preventDefault();
    const formValue = document.body.querySelector(".myForm").elements[0].value;
    console.log(formValue);
    if (formValue == ""){
        alert("Enter the value");
    }
    else{
    let info = new createProject(formValue,dataNumber);
    arr.push(info);
    console.log(arr);
    projectArray.push(projDivCreator(info));

    


    
    myForm.reset();
    console.log(arr);
    console.log(projectArray);

    projectArray.forEach(function(e){
        e.addEventListener("click",function(ele){
            

            projectSelector = ele.target.childNodes[0].textContent;

            if(projectSelector == "remove_circle_outline"){
               projectSelector = "Inbox" 

            toDoHeading.textContent = projectSelector;

             let addTodiv = taskArr.filter(checkTask);

             taskContainer.innerHTML = "";
        addTodiv.forEach(function(e){
           
          taskDivCreator(e);
        })
            }

            else{

            toDoHeading.textContent = ele.target.childNodes[0].textContent;

            let addTodiv = taskArr.filter(checkTask);

             taskContainer.innerHTML = "";
        addTodiv.forEach(function(e){
           
          taskDivCreator(e);
        })
    }

        })
    })

    
    modal.style.display = "none";
    }
})

export {arr,taskArr,projectArray,projectSelector,checkTask,dataNumberTasks};


  

 

 



