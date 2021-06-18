import {taskArr,projectSelector,checkTask,dataNumberTasks} from "./index.js";
import {elementCreator} from "./project.js";


const taskContainer = document.body.querySelector(".tasks-container");

function taskDivCreator(taskinfo){

     
     
    const taskDiv = elementCreator("div", {className : "task-div"});
    taskDiv.setAttribute("data-numberTasks",taskinfo.dataNumber);
    
    const visibleDiv = elementCreator("div",{className : "visible-tasks"});
    taskDiv.appendChild(visibleDiv);
    const paraTitle = elementCreator("p", {className : "taskTitle"});
    paraTitle.textContent = taskinfo.title;
    visibleDiv.appendChild(paraTitle);
    const IconsDiv = elementCreator("div", {className : "task-icons"});
    visibleDiv.appendChild(IconsDiv);
    const editIcon = elementCreator("span",{className : "material-icons taskIcons"});
    editIcon.textContent = "border_color";
    IconsDiv.appendChild(editIcon);
    const removeIcon = elementCreator("span",{className : "material-icons taskIcons"});
    removeIcon.textContent = "remove_circle_outline";
    IconsDiv.appendChild(removeIcon);
    const arrowIcon = elementCreator("span", {className : "material-icons taskIcons"});
    arrowIcon.textContent = "arrow_drop_down";
    IconsDiv.appendChild(arrowIcon);
    const invisibleDiv = elementCreator("div",{className : "invisible-tasks"});
    taskDiv.appendChild(invisibleDiv);
    const datePara = elementCreator("p",{});
    datePara.textContent = `Date : ${taskinfo.date}`;
    invisibleDiv.appendChild(datePara);
    const descPara = elementCreator("p",{});
    descPara.textContent = taskinfo.desc;
    invisibleDiv.appendChild(descPara);
    const prioDiv = elementCreator("p",{});
    prioDiv.textContent = `Priority : ${taskinfo.priority}`;
    invisibleDiv.appendChild(prioDiv);

    taskContainer.appendChild(taskDiv);
       
    const editForm = document.body.querySelector(".EditForm");
    const modalEdit = document.body.querySelector(".modal-edit");
    let EditTitInput = document.getElementById("EditTitle");
     let EditDescInput = document.getElementById("EditDesc");
     let EditDateInput = document.getElementById("EditDate");
     let EditPrioInput = document.getElementById("EditPriority");



      editIcon.addEventListener("click",function(e){
           
     
      
     const editdataNumber = e.target.parentNode.parentNode.parentNode.getAttribute("data-numbertasks");
      console.log(editdataNumber);

           const gtTitle = e.target.parentNode.previousElementSibling.textContent;
            EditTitInput.value = gtTitle;

            const gtdesc = e.target.parentNode.parentNode.nextElementSibling.childNodes[1].textContent;

            EditDescInput.value = gtdesc;
            


        const gtdate =     e.target.parentNode.parentNode.nextElementSibling.childNodes[0].textContent;
         const gtdateTrim = gtdate.substr(7,16);

         EditDateInput.value = gtdateTrim;

        const gtprio =  e.target.parentNode.parentNode.nextElementSibling.childNodes[2].textContent;
        const gtprioTrim = gtprio.substr(11,13);
        EditPrioInput.value = gtprioTrim;

             console.log(gtdateTrim);
             console.log(gtprioTrim);
            console.log(gtdesc);
           

            
           modalEdit.style.display = "block";

           const editSubBtn = document.body.querySelector("#editSub");

           editSubBtn.addEventListener("click",function(ele){
               ele.preventDefault();

                const taskTitleEdit = editForm.elements[0].value;
    const taskDesEdit = editForm.elements[1].value;
    const taskDateEdit = editForm.elements[2].value;
    const taskPriorityEdit = editForm.elements[3].value;
    const FinTaskPriorityEdit =  taskPriorityEdit.toLowerCase();
if(taskTitleEdit == "" || taskDesEdit == "" || taskDateEdit == "" || taskPriorityEdit == ""){
        alert("Enter all the values");
    }
    else if((FinTaskPriorityEdit !== "red") && (FinTaskPriorityEdit !== "yellow") && (FinTaskPriorityEdit !== "green")){
        alert("Enter from red,yellow or green");
    }
    else{
        let taskInfoEdit = new createTask(taskTitleEdit,taskDesEdit,taskDateEdit,taskPriorityEdit,editdataNumber,projectSelector);

        function checkDataEdit(ar){
                if(Number(editdataNumber) == ar.dataNumber){
                    return true;
                }

            }
            
            const editIndex = taskArr.findIndex(checkDataEdit);
            taskArr.splice(editIndex,1,taskInfoEdit);

              let addTodiv = taskArr.filter(checkTask);
        console.log(addTodiv);
        taskContainer.innerHTML = "";
        addTodiv.forEach(function(e){
           
          taskDivCreator(e);
        })

         modalEdit.style.display = "none";


    }


    console.log(taskTitleEdit);
           })

      });

 
      const editModalClose = document.body.querySelector("#editCloseBtn");

      editModalClose.addEventListener("click",function(e){
       e.preventDefault();
          
          modalEdit.style.display = "none";
          console.log(taskArr);
      })

removeIcon.addEventListener("click",function(e){

  const datatasks =  e.target.parentNode.parentNode.parentNode.getAttribute("data-numbertasks");

    e.target.parentNode.parentNode.parentNode.remove();

     function checkDataNumber(ar){
                if(Number(datatasks) == ar.dataNumber){
                    return true;
                }

            }
             let indexTask = taskArr.findIndex(checkDataNumber);
            if (indexTask == -1){
                console.log("Nothing to be spliced");
            }
            else{
            
            taskArr.splice(indexTask,1);
            console.log(taskArr);
            }
})

let arrowIconCheck = 0;
arrowIcon.addEventListener("click",function(e){

if(arrowIconCheck == 0){
    invisibleDiv.style.display = "block"
    arrowIconCheck = 1;
}
else{
    invisibleDiv.style.display = "none";
    arrowIconCheck = 0;
}

})



}

function createTask(title,desc,date,priority,dataNumber,projectSelect){
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.priority = priority;
    this.dataNumber = dataNumber;
    this.projectSelect = projectSelect;
}

export{createTask,taskDivCreator,taskContainer};

